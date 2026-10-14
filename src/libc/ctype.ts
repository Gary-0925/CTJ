// <ctype.h>: character classes and case mapping in the C locale.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;

  libcDef(["isupper", "isupper_l"], (a: any[]) => $L.isc(a[0], 0x100));
  libcDef(["islower", "islower_l"], (a: any[]) => $L.isc(a[0], 0x200));
  libcDef(["isalpha", "isalpha_l"], (a: any[]) => $L.isc(a[0], 0x400));
  libcDef(["isdigit", "isdigit_l"], (a: any[]) => $L.isc(a[0], 0x800));
  libcDef(["isxdigit", "isxdigit_l"], (a: any[]) => $L.isc(a[0], 0x1000));
  libcDef(["isspace", "isspace_l"], (a: any[]) => $L.isc(a[0], 0x2000));
  libcDef(["isprint", "isprint_l"], (a: any[]) => $L.isc(a[0], 0x4000));
  libcDef(["isgraph", "isgraph_l"], (a: any[]) => $L.isc(a[0], 0x8000));
  libcDef(["isblank", "isblank_l"], (a: any[]) => $L.isc(a[0], 0x1));
  libcDef(["iscntrl", "iscntrl_l"], (a: any[]) => $L.isc(a[0], 0x2));
  libcDef(["ispunct", "ispunct_l"], (a: any[]) => $L.isc(a[0], 0x4));
  libcDef(["isalnum", "isalnum_l"], (a: any[]) => $L.isc(a[0], 0x8));

  libcDef(["tolower", "_tolower", "tolower_l", "__tolower_l"], (a: any[]) => $L.ctl[a[0] + 128]);
  libcDef(["toupper", "_toupper", "toupper_l", "__toupper_l"], (a: any[]) => $L.ctu[a[0] + 128]);
  libcDef(["isascii"], (a: any[]) => (a[0] >= 0 && a[0] <= 127 ? 1 : 0));
  libcDef(["toascii"], (a: any[]) => a[0] & 127);

  libcDef(["__ctype_b_loc"], () => ({ a: [{ a: $L.ctb, i: 128 }], i: 0 }));
  libcDef(["__ctype_tolower_loc"], () => ({ a: [{ a: $L.ctl, i: 128 }], i: 0 }));
  libcDef(["__ctype_toupper_loc"], () => ({ a: [{ a: $L.ctu, i: 128 }], i: 0 }));
}
