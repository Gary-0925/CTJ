// Template argument deduction and the instantiation of a function template for
// a call.
namespace CTJ {

// Address of an overloaded function / function template (passed as a
// function pointer argument):
// the parameter is a function pointer and the argument names a template.
export function instantiateAddrOf(cx: Cx, e: Expr, p: CppType, scope: Scope): FuncInfo | null {
  if (!p.isFunc) return null;
  let cur: Expr = e;
  if (cur.kind === "unary" && (cur as UnaryExpr).op === "&") cur = (cur as UnaryExpr).arg;
  if (cur.kind !== "id") return null;
  const sym = cx.getAnn(cur).sym;
  if (!sym || sym.k !== "tmpl" || (sym as { k: "tmpl"; t: TmplInfo }).t.kind !== "func") return null;
  const tmpls = cx.tmplsOf((sym as { k: "tmpl"; t: TmplInfo }).t.fq).filter(t => t.kind === "func");
  const args = (p.funcParams || []).map(t => ({ t, e: cur }));
  for (const tm of tmpls) {
    const fn = tryInstantiateCall(cx, tm, args, scope, undefined, cur);
    if (fn) return fn;
  }
  return null;
}

export function tryInstantiateCall(cx: Cx, tm: TmplInfo, args: { t: CppType; e: Expr }[], scope: Scope, explicit: CppType[] | undefined, t: At): FuncInfo | null {
  try {
    const d = deduce(cx, tm, args, scope, explicit || [], t);
    if (!d) {
      return null;
    }
    const fn = cx.instantiateFunc(tm, d.full, new Map(), tm.tparams.filter(p => p.isPack).length > 1 ? d.env : undefined);
    // Substitution failure in the return type or parameters is SFINAE, not
    // a hard error (e.g. decltype(__test_aux<_To>(declval<_From>()))).
    cx.funcParams(fn);
    cx.funcRet(fn);
    return fn;
  } catch (er) {
    return null;
  }
}

export function packNameOf(tn: TypeNode): string {
  if (tn.parts.length === 1 && !tn.parts[0].a.length) return tn.parts[0].n;
  return "";
}

export function deduce(cx: Cx, tm: TmplInfo, args: { t: CppType; e: Expr }[], scope: Scope, explicit: CppType[], t: At): { full: CppType[]; env: SubstEnv } | null {
  void t;
  const env = new Map<string, CppType>();
  const venv = new Map<string, number>();
  const packs = new Map<string, CppType[]>();
  const fixedNames = new Set<string>();
  tm.tparams.forEach((tp, i) => {
    if (i < explicit.length && !tp.isPack) {
      fixedNames.add(tp.name);
      if (tp.kind === "nontype") venv.set(tp.name, parseInt(explicit[i].name.replace("__value", "") || "0", 10));
      else env.set(tp.name, explicit[i]);
    }
  });
  const names = new Set(tm.tparams.map(tp => tp.name));
  const dp = (tm.decl as FuncDecl).params;
  let ai = 0;
  for (const p of dp) {
    if (p.variadic) break;
    if (p.isPack) {
      const nm = packNameOf(p.type);
      if (!nm) { return null; }
      packs.set(nm, args.slice(ai).map(a => noRef(a.t)));
      ai = args.length;
      break;
    }
    if (ai >= args.length) {
      if (!p.def) return null;
      continue;
    }
    if (!deduceOne(cx, p.type, args[ai].t, env, venv, packs, false, names, fixedNames)) {
      return null;
    }
    ai++;
  }
  const senv = blankSubstEnv();
  for (const [k, v] of env) senv.types.set(k, v);
  for (const [k, v] of venv) senv.values.set(k, v);
  // Two packs in one template cannot be recovered from a flat argument list:
  // keep each pack under its own name so sizeof... and later substitution see
  // the right length.
  for (const tp of tm.tparams) {
    if (!tp.isPack) continue;
    const items = packs.get(tp.name) || [];
    if (tp.kind === "nontype") senv.valuePacks.set(tp.name, items.map(valueOfType));
    else senv.packs.set(tp.name, items);
  }
  for (const [k, v] of packs) {
    if (senv.packs.has(k) || senv.valuePacks.has(k)) continue;
    senv.packs.set(k, v);
  }
  const full: CppType[] = [];
  for (const tp of tm.tparams) {
    if (tp.isPack) {
      if (packs.has(tp.name)) full.push(...(packs.get(tp.name) as CppType[]));
      else if (env.has(tp.name)) full.push(env.get(tp.name) as CppType);
      continue;
    }
    if (env.has(tp.name)) {
      full.push(env.get(tp.name) as CppType);
      continue;
    }
    if (venv.has(tp.name)) {
      full.push(CppType.basic("__value" + venv.get(tp.name)));
      continue;
    }
    if (!tp.def) return null;
    if (tp.kind === "nontype") {
      const ex = substExpr(tp.def as Expr, senv);
      const v = constEval(cx, ex, scope);
      if (typeof v !== "number") return null;
      full.push(CppType.basic("__value" + Math.trunc(v)));
    } else {
      const tn = substTypeNode(tp.def as TypeNode, senv);
      full.push(cx.resolveTypeNode(tn, tm.scope));
    }
  }
  return { full, env: senv };
}

export function isFreeName(tn: TypeNode, names: Set<string>): boolean {
  for (const part of tn.parts) {
    if (!part.a.length && names.has(part.n)) return true;
    for (const a of part.a) if (isFreeName(a, names)) return true;
  }
  return false;
}

export function deduceOne(cx: Cx, tn: TypeNode, t: CppType, env: Map<string, CppType>, venv: Map<string, number>, packs?: Map<string, CppType[]>, keepRef = false, names?: Set<string>, fixedNames?: Set<string>): boolean {
  void cx;
  if (tn.valueArg && tn.valueArg.kind === "id") {
    const id = tn.valueArg as IdExpr;
    if (id.parts.length === 1 && t.name.startsWith("__value")) {
      venv.set(id.parts[0].n, parseInt(t.name.replace("__value", "") || "0", 10));
      return true;
    }
    return true;
  }
  if (!tn.parts.length) return true;
  const first = tn.parts[0].n;
  if (tn.parts.length === 1 && !tn.parts[0].a.length) {
    if (tn.packExpand && packs) {
      const list = packs.get(first) || [];
      list.push(keepRef ? copyType(t) : noRef(t));
      packs.set(first, list);
      return true;
    }
    const c = keepRef ? copyType(t) : noRef(t);
    // An array passed to a by-value parameter decays to a pointer, exactly as
    // it does in the language: sort(a, a + n) deduces _RAIter as int*.
    if (!keepRef && !tn.dims.length && c.dims.length) {
      c.ptr = c.ptr + 1;
      c.dims = [];
    }
    if (tn.ptr > 0) c.ptr = Math.max(0, t.ptr - tn.ptr);
    if (!env.has(first)) env.set(first, c);
    // Every parameter must deduce the same type for a name. Without this
    // "operator!=(const _CharT*, const basic_string<_CharT, _Traits, _Alloc>&)"
    // applied to two "std::string*" keeps _CharT = std::string from the first
    // argument and _CharT = char from the second, and instantiates
    // basic_string<std::string> instead of falling back to comparing pointers.
    // An explicit template argument fixes the name: the parameter is then a
    // concrete type and the argument has to convert to it ("__test_aux<_To>"
    // takes a "_To" that a "_Rb_tree_iterator" converts to), so there is
    // nothing to check here.
    else if (fixedNames && fixedNames.has(first)) void c;
    else if ((env.get(first) as CppType).core().key() !== c.core().key()) return false;
    tn.dims.forEach((d, i) => {
      if (d.kind === "id") {
        const id = d as IdExpr;
        if (id.parts.length === 1 && i < t.dims.length) venv.set(id.parts[0].n, t.dims[i]);
      }
    });
    return true;
  }
  const seg = tn.parts[tn.parts.length - 1];
  // The arguments of a template-id may sit behind a qualifier, as in
  // "std::pair<_Tp1, _Tp2>&"; the leading parts are then namespaces.
  const qualifiedId = seg && seg.a.length && tn.parts.slice(0, -1).every(q => !q.a.length);
  if (seg && seg.a.length && (tn.parts.length === 1 || qualifiedId) && t.segs.length) {
    // `_Index_tuple<_Indexes...>` / `_Tuple_impl<_i, _Head, _Tail...>`: the
    // template-id is the last (or only) part.  Also try a derived-to-base
    // conversion so get<_i>(tuple) matches _Tuple_impl<_i, ...>&.
    const pat = seg.a;
    const ta = typeNamesMatch(seg.n, t.segs[t.segs.length - 1].n) ? t.segs[t.segs.length - 1].a : t.segs[0].a;
    const lastp = pat[pat.length - 1];
    const packFromType = lastp && lastp.packExpand && lastp.parts.length === 1 && !lastp.parts[0].a.length
      ? lastp.parts[0].n : "";
    const packFromVal = lastp && lastp.valueArg && lastp.valueArg.kind === "unary" && lastp.valueArg.op === "..."
      && lastp.valueArg.arg.kind === "id" && (lastp.valueArg.arg as IdExpr).parts.length === 1
      ? (lastp.valueArg.arg as IdExpr).parts[0].n : "";
    const pack = packFromType || packFromVal;
    if (pack && packs) {
      const fixed = pat.length - 1;
      if (ta.length >= fixed && typeNamesMatch(seg.n, t.segs[t.segs.length - 1].n)) {
        let ok = true;
        for (let i = 0; i < fixed; i++) {
          if (!deduceOne(cx, pat[i], ta[i], env, venv, packs, true, names, fixedNames)) { ok = false; break; }
        }
        if (ok) {
          packs.set(pack, ta.slice(fixed).map(copyType));
          return true;
        }
      }
      if (deduceFromBases(cx, tn, t, env, venv, packs, keepRef, names, fixedNames)) return true;
    }
    if (tn.parts.length > 1) {
      // "std::pair<_Tp1, _Tp2>&": only the last part carries the pattern, so a
      // leading qualifier must not stop the arguments from being deduced.  The
      // names still have to agree, or "std::normal_distribution<_RealType>"
      // would deduce _RealType from the arguments of an unrelated class.
      if (!typeNamesMatch(seg.n, t.segs[t.segs.length - 1].n)) return !names || !isFreeName(tn, names);
      if (ta.length !== pat.length) return true;
      for (let i = 0; i < ta.length; i++) {
        if (!deduceOne(cx, pat[i], ta[i], env, venv, packs, true, names, fixedNames)) return false;
      }
      return true;
    }
  }
  if (tn.parts[0].a.length && t.segs.length) {
    // "basic_string<_CharT, _Traits, _Alloc>" says nothing about a type that is
    // not a basic_string: without the name check a "_Deque_iterator<int, int&,
    // int*>" argument would deduce _CharT = int, _Traits = int&, _Alloc = int*.
    // A parameter that has lost its template parameters ("allocator<int>&"
    // after substitution) is a concrete type: it is matched against the
    // argument by conversion, so there is nothing to deduce.
    if (!typeNamesMatch(tn.parts[0].n, t.segs[0].n)) {
      // The argument may be a class derived from the one the pattern names:
      // "_Node_iterator<_Value, __constant_iterators, __cache>" binds to a
      // "_Node_iterator_base<_Value, __cache>&" parameter through its base.
      if (deduceFromBases(cx, tn, t, env, venv, packs, keepRef, names, fixedNames)) return true;
      // An alias like "__void_t<...>" is spelled as a template-id but denotes
      // the type it expands to, so a plain "void" argument still matches it.
      const head = t.segs[0].n;
      if (!isNumericName(head) && head !== "void" && head !== "__null") {
        // A parameter of a different class template ("complex<_Tp>" against a
        // "_List_node_base*") cannot deduce anything from the argument. One
        // that has already been substituted is a concrete type -
        // "allocator<int>&" for a "_Vector_impl" argument - and matches by
        // conversion instead.
        return !names || !isFreeName(tn, names);
      }
    }
    const pat = tn.parts[0].a;
    const ta = t.segs[0].a;
    const lastp = pat[pat.length - 1];
    const pack = lastp && lastp.packExpand && lastp.parts.length === 1 && !lastp.parts[0].a.length
      ? lastp.parts[0].n : "";
    if (pack && packs) {
      const fixed = pat.length - 1;
      if (ta.length < fixed) return false;
      for (let i = 0; i < fixed; i++) {
        if (!deduceOne(cx, pat[i], ta[i], env, venv, packs, true, names, fixedNames)) return false;
      }
      packs.set(pack, ta.slice(fixed).map(copyType));
      return true;
    }
    if (ta.length !== pat.length) return true;
    for (let i = 0; i < ta.length; i++) {
      if (!deduceOne(cx, pat[i], ta[i], env, venv, packs, true, names, fixedNames)) return false;
    }
  }
  return true;
}

export function typeNamesMatch(pat: string, act: string): boolean {
  const short = (n: string) => {
    const s = n.split("::").pop() as string;
    const i = s.indexOf("<");
    return i < 0 ? s : s.slice(0, i);
  };
  return short(act) === short(pat) || act === pat || act.endsWith("::" + pat);
}

export function deduceFromBases(cx: Cx, tn: TypeNode, t: CppType, env: Map<string, CppType>, venv: Map<string, number>, packs: Map<string, CppType[]> | undefined, keepRef: boolean, names?: Set<string>, fixedNames?: Set<string>): boolean {
  const fq = cx.stripAll(t);
  const cls = cx.classes.get(fq);
  if (!cls) return false;
  const seen = new Set<string>();
  const walk = (c: ClsInfo): boolean => {
    for (const b of c.bases) {
      if (seen.has(b.fq)) continue;
      seen.add(b.fq);
      const bc = cx.classes.get(b.fq);
      if (!bc) continue;
      const bt = classType(bc);
      bt.ref = t.ref;
      bt.cnst = t.cnst;
      if (deduceOne(cx, tn, bt, env, venv, packs, keepRef, names, fixedNames)) return true;
      if (walk(bc)) return true;
    }
    return false;
  };
  return walk(cls);
}
}
