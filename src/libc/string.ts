// <string.h> and <strings.h>: byte strings and byte blocks.  A character is a
// number from 0 to 255; a block is a pointer, and its elements are one byte each.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;

  Object.assign(LIBC_DATA, {
    msgs: JSON.stringify([
      "Success",
      "Operation not permitted",
      "No such file or directory",
      "No such process",
      "Interrupted system call",
      "Input/output error",
      "No such device or address",
      "Argument list too long",
      "Exec format error",
      "Bad file descriptor",
      "No child processes",
      "Resource temporarily unavailable",
      "Cannot allocate memory",
      "Permission denied",
      "Bad address",
      "Block device required",
      "Device or resource busy",
      "File exists",
      "Invalid cross-device link",
      "No such device",
      "Not a directory",
      "Is a directory",
      "Invalid argument",
      "Too many open files in system",
      "Too many open files",
      "Inappropriate ioctl for device",
      "Text file busy",
      "File too large",
      "No space left on device",
      "Illegal seek",
      "Read-only file system",
      "Too many links",
      "Broken pipe",
      "Numerical argument out of domain",
      "Numerical result out of range",
      "Resource deadlock avoided",
      "File name too long",
      "No locks available",
      "Function not implemented",
      "Directory not empty",
      "Too many levels of symbolic links",
      "Unknown error 41",
      "No message of desired type",
      "Identifier removed",
      "Channel number out of range",
      "Level 2 not synchronized",
      "Level 3 halted",
      "Level 3 reset",
      "Link number out of range",
      "Protocol driver not attached",
      "No CSI structure available",
      "Level 2 halted",
      "Invalid exchange",
      "Invalid request descriptor",
      "Exchange full",
      "No anode",
      "Invalid request code",
      "Invalid slot",
      "Unknown error 58",
      "Bad font file format",
      "Device not a stream",
      "No data available",
      "Timer expired",
      "Out of streams resources",
      "Machine is not on the network",
      "Package not installed",
      "Object is remote",
      "Link has been severed",
      "Advertise error",
      "Srmount error",
      "Communication error on send",
      "Protocol error",
      "Multihop attempted",
      "RFS specific error",
      "Bad message",
      "Value too large for defined data type",
      "Name not unique on network",
      "File descriptor in bad state",
      "Remote address changed",
      "Can not access a needed shared library",
      "Accessing a corrupted shared library",
      ".lib section in a.out corrupted",
      "Attempting to link in too many shared libraries",
      "Cannot exec a shared library directly",
      "Invalid or incomplete multibyte or wide character",
      "Interrupted system call should be restarted",
      "Streams pipe error",
      "Too many users",
      "Socket operation on non-socket",
      "Destination address required",
      "Message too long",
      "Protocol wrong type for socket",
      "Protocol not available",
      "Protocol not supported",
      "Socket type not supported",
      "Operation not supported",
      "Protocol family not supported",
      "Address family not supported by protocol",
      "Address already in use",
      "Cannot assign requested address",
      "Network is down",
      "Network is unreachable",
      "Network dropped connection on reset",
      "Software caused connection abort",
      "Connection reset by peer",
      "No buffer space available",
      "Transport endpoint is already connected",
      "Transport endpoint is not connected",
      "Cannot send after transport endpoint shutdown",
      "Too many references: cannot splice",
      "Connection timed out",
      "Connection refused",
      "Host is down",
      "No route to host",
      "Operation already in progress",
      "Operation now in progress",
      "Stale file handle",
      "Structure needs cleaning",
      "Not a XENIX named type file",
      "No XENIX semaphores available",
      "Is a named type file",
      "Remote I/O error",
      "Disk quota exceeded",
      "No medium found",
      "Wrong medium type",
      "Operation canceled",
      "Required key not available",
      "Key has expired",
      "Key has been revoked",
      "Key was rejected by service",
      "Owner died",
      "State not recoverable",
      "Operation not possible due to RF-kill",
      "Memory page has hardware error",
    ]),
  });

  // The message of an error number, as strerror gives it in the C locale.
  Object.assign(LIBC_HELPERS, {
    msg: (n: number) => ($L.msgs[n] !== undefined && n >= 0 ? $L.msgs[n] : "Unknown error " + n),
  });

  // The string of the strtok family, with the position in the saved pointer.
  Object.assign(LIBC_HELPERS, {
    strtokr: (s: any, delim: any, save: any) => {
      let p = s !== null ? s : save.a[save.i];
      if (p === null) return null;
      let k = 0;
      while ($L.get(p, k) !== 0 && $L.inSet($L.get(p, k), delim)) k++;
      if ($L.get(p, k) === 0) {
        save.a[save.i] = null;
        return null;
      }
      const start = { a: p.a, i: p.i + k };
      let e = k;
      while ($L.get(p, e) !== 0 && !$L.inSet($L.get(p, e), delim)) e++;
      if ($L.get(p, e) === 0) save.a[save.i] = { a: p.a, i: p.i + e };
      else {
        $L.put(p, e, 0);
        save.a[save.i] = { a: p.a, i: p.i + e + 1 };
      }
      return start;
    },
  });

  libcDef(["strlen"], (a: any[]) => {
    let n = 0;
    while ($L.get(a[0], n) !== 0) n++;
    return n;
  });
  libcDef(["strnlen"], (a: any[]) => {
    let n = 0;
    while (n < a[1] && $L.get(a[0], n) !== 0) n++;
    return n;
  });

  libcDef(["strcpy"], (a: any[]) => {
    for (let k = 0; ; k++) {
      const c = $L.get(a[1], k);
      $L.put(a[0], k, c);
      if (c === 0) return a[0];
    }
  });
  libcDef(["strncpy"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) $L.put(a[0], k, $L.get(a[1], k));
    return a[0];
  });
  libcDef(["stpcpy"], (a: any[]) => {
    for (let k = 0; ; k++) {
      const c = $L.get(a[1], k);
      $L.put(a[0], k, c);
      if (c === 0) return { a: a[0].a, i: a[0].i + k };
    }
  });
  libcDef(["strcat"], (a: any[]) => {
    let n = 0;
    while ($L.get(a[0], n) !== 0) n++;
    for (let k = 0; ; k++) {
      const c = $L.get(a[1], k);
      $L.put(a[0], n + k, c);
      if (c === 0) return a[0];
    }
  });
  libcDef(["strncat"], (a: any[]) => {
    let n = 0;
    while ($L.get(a[0], n) !== 0) n++;
    let k = 0;
    for (; k < a[2]; k++) {
      const c = $L.get(a[1], k);
      if (c === 0) break;
      $L.put(a[0], n + k, c);
    }
    $L.put(a[0], n + k, 0);
    return a[0];
  });

  // strcmp and memcmp give the sign of the difference, as glibc does on short strings.
  libcDef(["strcmp", "strcoll"], (a: any[]) => {
    for (let k = 0; ; k++) {
      const x = $L.get(a[0], k);
      const y = $L.get(a[1], k);
      if (x !== y) return x < y ? -1 : 1;
      if (x === 0) return 0;
    }
  });
  libcDef(["strncmp"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) {
      const x = $L.get(a[0], k);
      const y = $L.get(a[1], k);
      if (x !== y) return x - y;
      if (x === 0) return 0;
    }
    return 0;
  });
  libcDef(["strcasecmp"], (a: any[]) => {
    for (let k = 0; ; k++) {
      const x = $L.ctl[$L.get(a[0], k) + 128];
      const y = $L.ctl[$L.get(a[1], k) + 128];
      if (x !== y) return x - y;
      if (x === 0) return 0;
    }
  });
  libcDef(["strncasecmp"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) {
      const x = $L.ctl[$L.get(a[0], k) + 128];
      const y = $L.ctl[$L.get(a[1], k) + 128];
      if (x !== y) return x - y;
      if (x === 0) return 0;
    }
    return 0;
  });
  libcDef(["strxfrm"], (a: any[]) => {
    let n = 0;
    while ($L.get(a[1], n) !== 0) n++;
    if (a[2] > n) for (let k = 0; k <= n; k++) $L.put(a[0], k, $L.get(a[1], k));
    return n;
  });

  libcDef(["strchr", "index"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = 0; ; k++) {
      const x = $L.get(a[0], k);
      if (x === c) return { a: a[0].a, i: a[0].i + k };
      if (x === 0) return null;
    }
  });
  libcDef(["strchrnul"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = 0; ; k++) {
      const x = $L.get(a[0], k);
      if (x === c || x === 0) return { a: a[0].a, i: a[0].i + k };
    }
  });
  libcDef(["strrchr", "rindex"], (a: any[]) => {
    const c = a[1] & 255;
    let found = null;
    for (let k = 0; ; k++) {
      const x = $L.get(a[0], k);
      if (x === c) found = { a: a[0].a, i: a[0].i + k };
      if (x === 0) return found;
    }
  });
  libcDef(["strstr"], (a: any[]) => {
    const h = $L.str(a[0]);
    const n = $L.str(a[1]);
    const k = h.indexOf(n);
    return k < 0 ? null : { a: a[0].a, i: a[0].i + k };
  });
  libcDef(["strcasestr"], (a: any[]) => {
    const h = $L.str(a[0]).toLowerCase();
    const n = $L.str(a[1]).toLowerCase();
    const k = h.indexOf(n);
    return k < 0 ? null : { a: a[0].a, i: a[0].i + k };
  });
  libcDef(["strpbrk"], (a: any[]) => {
    for (let k = 0; ; k++) {
      const x = $L.get(a[0], k);
      if (x === 0) return null;
      if ($L.inSet(x, a[1])) return { a: a[0].a, i: a[0].i + k };
    }
  });
  libcDef(["strspn"], (a: any[]) => {
    let k = 0;
    while ($L.get(a[0], k) !== 0 && $L.inSet($L.get(a[0], k), a[1])) k++;
    return k;
  });
  libcDef(["strcspn"], (a: any[]) => {
    let k = 0;
    while ($L.get(a[0], k) !== 0 && !$L.inSet($L.get(a[0], k), a[1])) k++;
    return k;
  });
  libcDef(["strtok_r"], (a: any[]) => $L.strtokr(a[0], a[1], a[2]));
  libcDef(["strtok"], (a: any[]) => $L.strtokr(a[0], a[1], $L.tokbox));
  libcDef(["strsep"], (a: any[]) => {
    const cur = a[0].a[a[0].i];
    if (cur === null) return null;
    for (let k = 0; ; k++) {
      const x = $L.get(cur, k);
      if (x === 0) {
        a[0].a[a[0].i] = null;
        return cur;
      }
      if ($L.inSet(x, a[1])) {
        $L.put(cur, k, 0);
        a[0].a[a[0].i] = { a: cur.a, i: cur.i + k + 1 };
        return cur;
      }
    }
  });

  libcDef(["memchr"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = 0; k < a[2]; k++) {
      if ($L.get(a[0], k) === c) return { a: a[0].a, i: a[0].i + k };
    }
    return null;
  });
  libcDef(["rawmemchr"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = 0; ; k++) {
      if ($L.get(a[0], k) === c) return { a: a[0].a, i: a[0].i + k };
    }
  });
  libcDef(["memrchr"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = a[2] - 1; k >= 0; k--) {
      if ($L.get(a[0], k) === c) return { a: a[0].a, i: a[0].i + k };
    }
    return null;
  });
  libcDef(["memcpy"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) $L.put(a[0], k, $L.get(a[1], k));
    return a[0];
  });
  libcDef(["mempcpy"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) $L.put(a[0], k, $L.get(a[1], k));
    return { a: a[0].a, i: a[0].i + a[2] };
  });
  libcDef(["memmove"], (a: any[]) => {
    const tmp: number[] = [];
    for (let k = 0; k < a[2]; k++) tmp.push($L.get(a[1], k));
    for (let k = 0; k < a[2]; k++) $L.put(a[0], k, tmp[k]);
    return a[0];
  });
  libcDef(["bcopy"], (a: any[]) => {
    const tmp: number[] = [];
    for (let k = 0; k < a[2]; k++) tmp.push($L.get(a[0], k));
    for (let k = 0; k < a[2]; k++) $L.put(a[1], k, tmp[k]);
  });
  libcDef(["memset"], (a: any[]) => {
    const c = a[1] & 255;
    for (let k = 0; k < a[2]; k++) $L.put(a[0], k, c);
    return a[0];
  });
  libcDef(["bzero"], (a: any[]) => {
    for (let k = 0; k < a[1]; k++) $L.put(a[0], k, 0);
  });
  libcDef(["memcmp", "bcmp"], (a: any[]) => {
    for (let k = 0; k < a[2]; k++) {
      const x = $L.get(a[0], k);
      const y = $L.get(a[1], k);
      if (x !== y) return x < y ? -1 : 1;
    }
    return 0;
  });

  libcDef(["strdup"], (a: any[]) => {
    const r: number[] = [];
    for (let k = 0; ; k++) {
      const c = $L.get(a[0], k);
      r.push(c);
      if (c === 0) return { a: r, i: 0 };
    }
  });
  libcDef(["strndup"], (a: any[]) => {
    const r: number[] = [];
    for (let k = 0; k < a[1]; k++) {
      const c = $L.get(a[0], k);
      if (c === 0) break;
      r.push(c);
    }
    r.push(0);
    return { a: r, i: 0 };
  });

  libcDef(["strerror", "strerror_l"], (a: any[]) => $L.box($L.msg(a[0])));
  libcDef(["strerror_r"], (a: any[]) => {
    const m = $L.msg(a[0]);
    const n = Math.min(m.length, a[2] - 1);
    for (let k = 0; k < n; k++) $L.put(a[1], k, m.charCodeAt(k));
    if (a[2] > 0) $L.put(a[1], n, 0);
    return a[1];
  });

  libcDef(["ffs"], (a: any[]) => {
    let v = a[0] | 0;
    if (v === 0) return 0;
    let k = 1;
    while ((v & 1) === 0) {
      v >>>= 1;
      k++;
    }
    return k;
  });
}
