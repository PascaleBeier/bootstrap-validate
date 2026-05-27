var F = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function b(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var U, zr;
function Ze() {
  if (zr) return U;
  zr = 1;
  var r = typeof F == "object" && F && F.Object === Object && F;
  return U = r, U;
}
var $, Dr;
function Ur() {
  if (Dr) return $;
  Dr = 1;
  var r = Ze(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return $ = t, $;
}
var G, Zr;
function P() {
  if (Zr) return G;
  Zr = 1;
  var r = Ur(), e = r.Symbol;
  return G = e, G;
}
var B, Hr;
function ot() {
  if (Hr) return B;
  Hr = 1;
  var r = P(), e = Object.prototype, t = e.hasOwnProperty, n = e.toString, i = r ? r.toStringTag : void 0;
  function o(u) {
    var s = t.call(u, i), f = u[i];
    try {
      u[i] = void 0;
      var a = !0;
    } catch (c) {
    }
    var l = n.call(u);
    return a && (s ? u[i] = f : delete u[i]), l;
  }
  return B = o, B;
}
var W, Vr;
function st() {
  if (Vr) return W;
  Vr = 1;
  var r = Object.prototype, e = r.toString;
  function t(n) {
    return e.call(n);
  }
  return W = t, W;
}
var z, Xr;
function O() {
  if (Xr) return z;
  Xr = 1;
  var r = P(), e = ot(), t = st(), n = "[object Null]", i = "[object Undefined]", o = r ? r.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? i : n : o && o in Object(s) ? e(s) : t(s);
  }
  return z = u, z;
}
var D, Jr;
function $r() {
  if (Jr) return D;
  Jr = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return D = r, D;
}
var Z, Kr;
function He() {
  if (Kr) return Z;
  Kr = 1;
  var r = O(), e = $r(), t = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", o = "[object Proxy]";
  function u(s) {
    if (!e(s))
      return !1;
    var f = r(s);
    return f == n || f == i || f == t || f == o;
  }
  return Z = u, Z;
}
var ut = He();
const Ve = /* @__PURE__ */ b(ut);
var H, Yr;
function at() {
  if (Yr) return H;
  Yr = 1;
  function r(e, t) {
    for (var n = -1, i = t.length, o = e.length; ++n < i; )
      e[o + n] = t[n];
    return e;
  }
  return H = r, H;
}
var V, Qr;
function j() {
  if (Qr) return V;
  Qr = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return V = r, V;
}
var X, re;
function ft() {
  if (re) return X;
  re = 1;
  var r = O(), e = j(), t = "[object Arguments]";
  function n(i) {
    return e(i) && r(i) == t;
  }
  return X = n, X;
}
var J, ee;
function ct() {
  if (ee) return J;
  ee = 1;
  var r = ft(), e = j(), t = Object.prototype, n = t.hasOwnProperty, i = t.propertyIsEnumerable, o = r(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? r : function(u) {
    return e(u) && n.call(u, "callee") && !i.call(u, "callee");
  };
  return J = o, J;
}
var K, te;
function Gr() {
  if (te) return K;
  te = 1;
  var r = Array.isArray;
  return K = r, K;
}
var Y, ne;
function lt() {
  if (ne) return Y;
  ne = 1;
  var r = P(), e = ct(), t = Gr(), n = r ? r.isConcatSpreadable : void 0;
  function i(o) {
    return t(o) || e(o) || !!(n && o && o[n]);
  }
  return Y = i, Y;
}
var Q, ie;
function ht() {
  if (ie) return Q;
  ie = 1;
  var r = at(), e = lt();
  function t(n, i, o, u, s) {
    var f = -1, a = n.length;
    for (o || (o = e), s || (s = []); ++f < a; ) {
      var l = n[f];
      i > 0 && o(l) ? i > 1 ? t(l, i - 1, o, u, s) : r(s, l) : u || (s[s.length] = l);
    }
    return s;
  }
  return Q = t, Q;
}
var rr, oe;
function gt() {
  if (oe) return rr;
  oe = 1;
  var r = ht();
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? r(t, 1) : [];
  }
  return rr = e, rr;
}
var dt = gt();
const vt = /* @__PURE__ */ b(dt);
var er, se;
function bt() {
  if (se) return er;
  se = 1;
  var r = /\s/;
  function e(t) {
    for (var n = t.length; n-- && r.test(t.charAt(n)); )
      ;
    return n;
  }
  return er = e, er;
}
var tr, ue;
function pt() {
  if (ue) return tr;
  ue = 1;
  var r = bt(), e = /^\s+/;
  function t(n) {
    return n && n.slice(0, r(n) + 1).replace(e, "");
  }
  return tr = t, tr;
}
var nr, ae;
function Xe() {
  if (ae) return nr;
  ae = 1;
  var r = O(), e = j(), t = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || e(i) && r(i) == t;
  }
  return nr = n, nr;
}
var ir, fe;
function Je() {
  if (fe) return ir;
  fe = 1;
  var r = pt(), e = $r(), t = Xe(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, u = /^0o[0-7]+$/i, s = parseInt;
  function f(a) {
    if (typeof a == "number")
      return a;
    if (t(a))
      return n;
    if (e(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = e(l) ? l + "" : l;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = r(a);
    var c = o.test(a);
    return c || u.test(a) ? s(a.slice(2), c ? 2 : 8) : i.test(a) ? n : +a;
  }
  return ir = f, ir;
}
var or, ce;
function Ke() {
  if (ce) return or;
  ce = 1;
  var r = Je();
  function e(t) {
    return function(n, i) {
      return typeof n == "string" && typeof i == "string" || (n = r(n), i = r(i)), t(n, i);
    };
  }
  return or = e, or;
}
var sr, le;
function _t() {
  if (le) return sr;
  le = 1;
  var r = Ke(), e = r(function(t, n) {
    return t >= n;
  });
  return sr = e, sr;
}
var Rt = _t();
const mt = /* @__PURE__ */ b(Rt);
var ur, he;
function qt() {
  if (he) return ur;
  he = 1;
  function r(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, o = Array(i); ++n < i; )
      o[n] = t(e[n], n, e);
    return o;
  }
  return ur = r, ur;
}
var ar, ge;
function k() {
  if (ge) return ar;
  ge = 1;
  var r = P(), e = qt(), t = Gr(), n = Xe(), i = r ? r.prototype : void 0, o = i ? i.toString : void 0;
  function u(s) {
    if (typeof s == "string")
      return s;
    if (t(s))
      return e(s, u) + "";
    if (n(s))
      return o ? o.call(s) : "";
    var f = s + "";
    return f == "0" && 1 / s == -1 / 0 ? "-0" : f;
  }
  return ar = u, ar;
}
var fr, de;
function C() {
  if (de) return fr;
  de = 1;
  var r = k();
  function e(t) {
    return t == null ? "" : r(t);
  }
  return fr = e, fr;
}
var cr, ve;
function St() {
  if (ve) return cr;
  ve = 1;
  var r = Ur(), e = C(), t = /^\s+/, n = r.parseInt;
  function i(o, u, s) {
    return s || u == null ? u = 0 : u && (u = +u), n(e(o).replace(t, ""), u || 0);
  }
  return cr = i, cr;
}
var Et = St();
const Ye = /* @__PURE__ */ b(Et);
function It(r, e) {
  return mt(r.value.length, Ye(String(e)));
}
var lr, be;
function yt() {
  if (be) return lr;
  be = 1;
  var r = Ke(), e = r(function(t, n) {
    return t <= n;
  });
  return lr = e, lr;
}
var Tt = yt();
const At = /* @__PURE__ */ b(Tt);
function wt(r, e) {
  return At(r.value.length, Ye(String(e)));
}
function xt(r) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    r.value
  );
}
function Ot(r) {
  return r.value.length && r.value.length > 0;
}
function jt(r) {
  return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    r.value
  );
}
var hr, pe;
function Lt() {
  if (pe) return hr;
  pe = 1;
  var r = Je(), e = 1 / 0, t = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = r(i), i === e || i === -e) {
      var o = i < 0 ? -1 : 1;
      return o * t;
    }
    return i === i ? i : 0;
  }
  return hr = n, hr;
}
var gr, _e;
function Br() {
  if (_e) return gr;
  _e = 1;
  var r = Lt();
  function e(t) {
    var n = r(t), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return gr = e, gr;
}
var dr, Re;
function Nt() {
  if (Re) return dr;
  Re = 1;
  var r = Br();
  function e(t) {
    return typeof t == "number" && t == r(t);
  }
  return dr = e, dr;
}
var Ft = Nt();
const Pt = /* @__PURE__ */ b(Ft);
function kt(r) {
  return Pt(Number(r.value));
}
var vr, me;
function Ct() {
  if (me) return vr;
  me = 1;
  var r = Ur(), e = r.isFinite;
  function t(n) {
    return typeof n == "number" && e(n);
  }
  return vr = t, vr;
}
var Mt = Ct();
const w = /* @__PURE__ */ b(Mt);
function Ut(r) {
  return w(Number(r.value));
}
function $t(r) {
  return /^[a-z0-9]+$/i.test(r.value);
}
function Gt(r) {
  return /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/.test(r.value);
}
function Bt(r, e) {
  return new RegExp(e instanceof RegExp ? e : String(e)).test(r.value);
}
var Wt = 20, zt = 1, m = 1e6, qe = 1e6, Dt = -7, Zt = 21, Ht = !1, L = "[big.js] ", q = L + "Invalid ", M = q + "decimal places", Vt = q + "rounding mode", Qe = L + "Division by zero", h = {}, p = void 0, Xt = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function rt() {
  function r(e) {
    var t = this;
    if (!(t instanceof r)) return e === p ? rt() : new r(e);
    if (e instanceof r)
      t.s = e.s, t.e = e.e, t.c = e.c.slice();
    else {
      if (typeof e != "string") {
        if (r.strict === !0)
          throw TypeError(q + "number");
        e = e === 0 && 1 / e < 0 ? "-0" : String(e);
      }
      Jt(t, e);
    }
    t.constructor = r;
  }
  return r.prototype = h, r.DP = Wt, r.RM = zt, r.NE = Dt, r.PE = Zt, r.strict = Ht, r.roundDown = 0, r.roundHalfUp = 1, r.roundHalfEven = 2, r.roundUp = 3, r;
}
function Jt(r, e) {
  var t, n, i;
  if (!Xt.test(e))
    throw Error(q + "number");
  for (r.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +e.slice(n + 1), e = e.substring(0, n)) : t < 0 && (t = e.length), i = e.length, n = 0; n < i && e.charAt(n) == "0"; ) ++n;
  if (n == i)
    r.c = [r.e = 0];
  else {
    for (; i > 0 && e.charAt(--i) == "0"; ) ;
    for (r.e = t - n - 1, r.c = [], t = 0; n <= i; ) r.c[t++] = +e.charAt(n++);
  }
  return r;
}
function S(r, e, t, n) {
  var i = r.c;
  if (t === p && (t = r.constructor.RM), t !== 0 && t !== 1 && t !== 2 && t !== 3)
    throw Error(Vt);
  if (e < 1)
    n = t === 3 && (n || !!i[0]) || e === 0 && (t === 1 && i[0] >= 5 || t === 2 && (i[0] > 5 || i[0] === 5 && (n || i[1] !== p))), i.length = 1, n ? (r.e = r.e - e + 1, i[0] = 1) : i[0] = r.e = 0;
  else if (e < i.length) {
    if (n = t === 1 && i[e] >= 5 || t === 2 && (i[e] > 5 || i[e] === 5 && (n || i[e + 1] !== p || i[e - 1] & 1)) || t === 3 && (n || !!i[0]), i.length = e--, n)
      for (; ++i[e] > 9; )
        i[e] = 0, e-- || (++r.e, i.unshift(1));
    for (e = i.length; !i[--e]; ) i.pop();
  }
  return r;
}
function E(r, e, t) {
  var n = r.e, i = r.c.join(""), o = i.length;
  if (e)
    i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
  else if (n < 0) {
    for (; ++n; ) i = "0" + i;
    i = "0." + i;
  } else if (n > 0)
    if (++n > o)
      for (n -= o; n--; ) i += "0";
    else n < o && (i = i.slice(0, n) + "." + i.slice(n));
  else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return r.s < 0 && t ? "-" + i : i;
}
h.abs = function() {
  var r = new this.constructor(this);
  return r.s = 1, r;
};
h.cmp = function(r) {
  var e, t = this, n = t.c, i = (r = new t.constructor(r)).c, o = t.s, u = r.s, s = t.e, f = r.e;
  if (!n[0] || !i[0]) return n[0] ? o : i[0] ? -u : 0;
  if (o != u) return o;
  if (e = o < 0, s != f) return s > f ^ e ? 1 : -1;
  for (u = (s = n.length) < (f = i.length) ? s : f, o = -1; ++o < u; )
    if (n[o] != i[o]) return n[o] > i[o] ^ e ? 1 : -1;
  return s == f ? 0 : s > f ^ e ? 1 : -1;
};
h.div = function(r) {
  var e = this, t = e.constructor, n = e.c, i = (r = new t(r)).c, o = e.s == r.s ? 1 : -1, u = t.DP;
  if (u !== ~~u || u < 0 || u > m)
    throw Error(M);
  if (!i[0])
    throw Error(Qe);
  if (!n[0])
    return r.s = o, r.c = [r.e = 0], r;
  var s, f, a, l, c, v = i.slice(), I = s = i.length, N = n.length, g = n.slice(0, s), d = g.length, _ = r, y = _.c = [], T = 0, R = u + (_.e = e.e - r.e) + 1;
  for (_.s = o, o = R < 0 ? 0 : R, v.unshift(0); d++ < s; ) g.push(0);
  do {
    for (a = 0; a < 10; a++) {
      if (s != (d = g.length))
        l = s > d ? 1 : -1;
      else
        for (c = -1, l = 0; ++c < s; )
          if (i[c] != g[c]) {
            l = i[c] > g[c] ? 1 : -1;
            break;
          }
      if (l < 0) {
        for (f = d == s ? i : v; d; ) {
          if (g[--d] < f[d]) {
            for (c = d; c && !g[--c]; ) g[c] = 9;
            --g[c], g[d] += 10;
          }
          g[d] -= f[d];
        }
        for (; !g[0]; ) g.shift();
      } else
        break;
    }
    y[T++] = l ? a : ++a, g[0] && l ? g[d] = n[I] || 0 : g = [n[I]];
  } while ((I++ < N || g[0] !== p) && o--);
  return !y[0] && T != 1 && (y.shift(), _.e--, R--), T > R && S(_, R, t.RM, g[0] !== p), _;
};
h.eq = function(r) {
  return this.cmp(r) === 0;
};
h.gt = function(r) {
  return this.cmp(r) > 0;
};
h.gte = function(r) {
  return this.cmp(r) > -1;
};
h.lt = function(r) {
  return this.cmp(r) < 0;
};
h.lte = function(r) {
  return this.cmp(r) < 1;
};
h.minus = h.sub = function(r) {
  var e, t, n, i, o = this, u = o.constructor, s = o.s, f = (r = new u(r)).s;
  if (s != f)
    return r.s = -f, o.plus(r);
  var a = o.c.slice(), l = o.e, c = r.c, v = r.e;
  if (!a[0] || !c[0])
    return c[0] ? r.s = -f : a[0] ? r = new u(o) : r.s = 1, r;
  if (s = l - v) {
    for ((i = s < 0) ? (s = -s, n = a) : (v = l, n = c), n.reverse(), f = s; f--; ) n.push(0);
    n.reverse();
  } else
    for (t = ((i = a.length < c.length) ? a : c).length, s = f = 0; f < t; f++)
      if (a[f] != c[f]) {
        i = a[f] < c[f];
        break;
      }
  if (i && (n = a, a = c, c = n, r.s = -r.s), (f = (t = c.length) - (e = a.length)) > 0) for (; f--; ) a[e++] = 0;
  for (f = e; t > s; ) {
    if (a[--t] < c[t]) {
      for (e = t; e && !a[--e]; ) a[e] = 9;
      --a[e], a[t] += 10;
    }
    a[t] -= c[t];
  }
  for (; a[--f] === 0; ) a.pop();
  for (; a[0] === 0; )
    a.shift(), --v;
  return a[0] || (r.s = 1, a = [v = 0]), r.c = a, r.e = v, r;
};
h.mod = function(r) {
  var e, t = this, n = t.constructor, i = t.s, o = (r = new n(r)).s;
  if (!r.c[0])
    throw Error(Qe);
  return t.s = r.s = 1, e = r.cmp(t) == 1, t.s = i, r.s = o, e ? new n(t) : (i = n.DP, o = n.RM, n.DP = n.RM = 0, t = t.div(r), n.DP = i, n.RM = o, this.minus(t.times(r)));
};
h.plus = h.add = function(r) {
  var e, t, n, i = this, o = i.constructor;
  if (r = new o(r), i.s != r.s)
    return r.s = -r.s, i.minus(r);
  var u = i.e, s = i.c, f = r.e, a = r.c;
  if (!s[0] || !a[0])
    return a[0] || (s[0] ? r = new o(i) : r.s = i.s), r;
  if (s = s.slice(), e = u - f) {
    for (e > 0 ? (f = u, n = a) : (e = -e, n = s), n.reverse(); e--; ) n.push(0);
    n.reverse();
  }
  for (s.length - a.length < 0 && (n = a, a = s, s = n), e = a.length, t = 0; e; s[e] %= 10) t = (s[--e] = s[e] + a[e] + t) / 10 | 0;
  for (t && (s.unshift(t), ++f), e = s.length; s[--e] === 0; ) s.pop();
  return r.c = s, r.e = f, r;
};
h.pow = function(r) {
  var e = this, t = new e.constructor("1"), n = t, i = r < 0;
  if (r !== ~~r || r < -qe || r > qe)
    throw Error(q + "exponent");
  for (i && (r = -r); r & 1 && (n = n.times(e)), r >>= 1, !!r; )
    e = e.times(e);
  return i ? t.div(n) : n;
};
h.prec = function(r, e) {
  if (r !== ~~r || r < 1 || r > m)
    throw Error(q + "precision");
  return S(new this.constructor(this), r, e);
};
h.round = function(r, e) {
  if (r === p) r = 0;
  else if (r !== ~~r || r < -m || r > m)
    throw Error(M);
  return S(new this.constructor(this), r + this.e + 1, e);
};
h.sqrt = function() {
  var r, e, t, n = this, i = n.constructor, o = n.s, u = n.e, s = new i("0.5");
  if (!n.c[0]) return new i(n);
  if (o < 0)
    throw Error(L + "No square root");
  o = Math.sqrt(n + ""), o === 0 || o === 1 / 0 ? (e = n.c.join(""), e.length + u & 1 || (e += "0"), o = Math.sqrt(e), u = ((u + 1) / 2 | 0) - (u < 0 || u & 1), r = new i((o == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + u)) : r = new i(o + ""), u = r.e + (i.DP += 4);
  do
    t = r, r = s.times(t.plus(n.div(t)));
  while (t.c.slice(0, u).join("") !== r.c.slice(0, u).join(""));
  return S(r, (i.DP -= 4) + r.e + 1, i.RM);
};
h.times = h.mul = function(r) {
  var e, t = this, n = t.constructor, i = t.c, o = (r = new n(r)).c, u = i.length, s = o.length, f = t.e, a = r.e;
  if (r.s = t.s == r.s ? 1 : -1, !i[0] || !o[0])
    return r.c = [r.e = 0], r;
  for (r.e = f + a, u < s && (e = i, i = o, o = e, a = u, u = s, s = a), e = new Array(a = u + s); a--; ) e[a] = 0;
  for (f = s; f--; ) {
    for (s = 0, a = u + f; a > f; )
      s = e[a] + o[f] * i[a - f - 1] + s, e[a--] = s % 10, s = s / 10 | 0;
    e[a] = s;
  }
  for (s ? ++r.e : e.shift(), f = e.length; !e[--f]; ) e.pop();
  return r.c = e, r;
};
h.toExponential = function(r, e) {
  var t = this, n = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 0 || r > m)
      throw Error(M);
    for (t = S(new t.constructor(t), ++r, e); t.c.length < r; ) t.c.push(0);
  }
  return E(t, !0, !!n);
};
h.toFixed = function(r, e) {
  var t = this, n = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 0 || r > m)
      throw Error(M);
    for (t = S(new t.constructor(t), r + t.e + 1, e), r = r + t.e + 1; t.c.length < r; ) t.c.push(0);
  }
  return E(t, !1, !!n);
};
h.toJSON = h.toString = function() {
  var r = this, e = r.constructor;
  return E(r, r.e <= e.NE || r.e >= e.PE, !!r.c[0]);
};
h.toNumber = function() {
  var r = Number(E(this, !0, !0));
  if (this.constructor.strict === !0 && !this.eq(r.toString()))
    throw Error(L + "Imprecise conversion");
  return r;
};
h.toPrecision = function(r, e) {
  var t = this, n = t.constructor, i = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 1 || r > m)
      throw Error(q + "precision");
    for (t = S(new n(t), r, e); t.c.length < r; ) t.c.push(0);
  }
  return E(t, r <= t.e || t.e <= n.NE || t.e >= n.PE, !!i);
};
h.valueOf = function() {
  var r = this, e = r.constructor;
  if (e.strict === !0)
    throw Error(L + "valueOf disallowed");
  return E(r, r.e <= e.NE || r.e >= e.PE, !0);
};
var Cr = rt();
function Kt(r, e) {
  let t = !1;
  const n = Number(r.value);
  return w(n) && (t = new Cr(n).mod(new Cr(Number(e))).toString() === "0"), t;
}
function Yt(r, e) {
  return r.value.includes(String(e));
}
var br, Se;
function et() {
  if (Se) return br;
  Se = 1;
  function r(e, t, n) {
    return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
  }
  return br = r, br;
}
var pr, Ee;
function Qt() {
  if (Ee) return pr;
  Ee = 1;
  var r = et(), e = k(), t = Br(), n = C();
  function i(o, u, s) {
    return o = n(o), s = s == null ? 0 : r(t(s), 0, o.length), u = e(u), o.slice(s, s + u.length) == u;
  }
  return pr = i, pr;
}
var rn = Qt();
const en = /* @__PURE__ */ b(rn);
function tn(r, e) {
  return en(r.value, String(e));
}
var _r, Ie;
function nn() {
  if (Ie) return _r;
  Ie = 1;
  var r = et(), e = k(), t = Br(), n = C();
  function i(o, u, s) {
    o = n(o), u = e(u);
    var f = o.length;
    s = s === void 0 ? f : r(t(s), 0, f);
    var a = s;
    return s -= u.length, s >= 0 && o.slice(s, a) == u;
  }
  return _r = i, _r;
}
var on = nn();
const sn = /* @__PURE__ */ b(on);
function un(r, e) {
  return sn(r.value, String(e));
}
function an(r, e) {
  let t;
  return typeof e == "object" && typeof e.nodeType != "undefined" ? t = e : t = document.querySelector(String(e)), !!t && r.value === (t == null ? void 0 : t.value);
}
var Rr, ye;
function fn() {
  if (ye) return Rr;
  ye = 1;
  var r = O(), e = Gr(), t = j(), n = "[object String]";
  function i(o) {
    return typeof o == "string" || !e(o) && t(o) && r(o) == n;
  }
  return Rr = i, Rr;
}
var cn = fn();
const ln = /* @__PURE__ */ b(cn);
function hn(r) {
  return ln(r.value) && /^[a-z]+$/i.test(r.value);
}
var mr, Te;
function gn() {
  if (Te) return mr;
  Te = 1;
  function r(e, t, n) {
    var i = -1, o = e.length;
    t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var u = Array(o); ++i < o; )
      u[i] = e[i + t];
    return u;
  }
  return mr = r, mr;
}
var qr, Ae;
function dn() {
  if (Ae) return qr;
  Ae = 1;
  var r = gn();
  function e(t, n, i) {
    var o = t.length;
    return i = i === void 0 ? o : i, !n && i >= o ? t : r(t, n, i);
  }
  return qr = e, qr;
}
var Sr, we;
function tt() {
  if (we) return Sr;
  we = 1;
  var r = "\\ud800-\\udfff", e = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = e + t + n, o = "\\ufe0e\\ufe0f", u = "\\u200d", s = RegExp("[" + u + r + i + o + "]");
  function f(a) {
    return s.test(a);
  }
  return Sr = f, Sr;
}
var Er, xe;
function vn() {
  if (xe) return Er;
  xe = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return Er = r, Er;
}
var Ir, Oe;
function bn() {
  if (Oe) return Ir;
  Oe = 1;
  var r = 9007199254740991;
  function e(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= r;
  }
  return Ir = e, Ir;
}
var yr, je;
function pn() {
  if (je) return yr;
  je = 1;
  var r = He(), e = bn();
  function t(n) {
    return n != null && e(n.length) && !r(n);
  }
  return yr = t, yr;
}
var Tr, Le;
function _n() {
  if (Le) return Tr;
  Le = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(n, i) {
    var o = typeof n;
    return i = i == null ? r : i, !!i && (o == "number" || o != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Tr = t, Tr;
}
var Ar, Ne;
function Rn() {
  if (Ne) return Ar;
  Ne = 1;
  var r = vn(), e = pn(), t = _n(), n = $r();
  function i(o, u, s) {
    if (!n(s))
      return !1;
    var f = typeof u;
    return (f == "number" ? e(s) && t(u, s.length) : f == "string" && u in s) ? r(s[u], o) : !1;
  }
  return Ar = i, Ar;
}
var wr, Fe;
function mn() {
  if (Fe) return wr;
  Fe = 1;
  var r = O(), e = j(), t = "[object RegExp]";
  function n(i) {
    return e(i) && r(i) == t;
  }
  return wr = n, wr;
}
var xr, Pe;
function qn() {
  if (Pe) return xr;
  Pe = 1;
  function r(e) {
    return function(t) {
      return e(t);
    };
  }
  return xr = r, xr;
}
var A = { exports: {} };
A.exports;
var ke;
function Sn() {
  return ke || (ke = 1, (function(r, e) {
    var t = Ze(), n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, o = i && i.exports === n, u = o && t.process, s = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || u && u.binding && u.binding("util");
      } catch (a) {
      }
    })();
    r.exports = s;
  })(A, A.exports)), A.exports;
}
var Or, Ce;
function En() {
  if (Ce) return Or;
  Ce = 1;
  var r = mn(), e = qn(), t = Sn(), n = t && t.isRegExp, i = n ? e(n) : r;
  return Or = i, Or;
}
var jr, Me;
function In() {
  if (Me) return jr;
  Me = 1;
  function r(e) {
    return e.split("");
  }
  return jr = r, jr;
}
var Lr, Ue;
function yn() {
  if (Ue) return Lr;
  Ue = 1;
  var r = "\\ud800-\\udfff", e = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = e + t + n, o = "\\ufe0e\\ufe0f", u = "[" + r + "]", s = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", a = "(?:" + s + "|" + f + ")", l = "[^" + r + "]", c = "(?:\\ud83c[\\udde6-\\uddff]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", I = "\\u200d", N = a + "?", g = "[" + o + "]?", d = "(?:" + I + "(?:" + [l, c, v].join("|") + ")" + g + N + ")*", _ = g + N + d, y = "(?:" + [l + s + "?", s, c, v, u].join("|") + ")", T = RegExp(f + "(?=" + f + ")|" + y + _, "g");
  function R(it) {
    return it.match(T) || [];
  }
  return Lr = R, Lr;
}
var Nr, $e;
function Tn() {
  if ($e) return Nr;
  $e = 1;
  var r = In(), e = tt(), t = yn();
  function n(i) {
    return e(i) ? t(i) : r(i);
  }
  return Nr = n, Nr;
}
var Fr, Ge;
function An() {
  if (Ge) return Fr;
  Ge = 1;
  var r = k(), e = dn(), t = tt(), n = Rn(), i = En(), o = Tn(), u = C(), s = 4294967295;
  function f(a, l, c) {
    return c && typeof c != "number" && n(a, l, c) && (l = c = void 0), c = c === void 0 ? s : c >>> 0, c ? (a = u(a), a && (typeof l == "string" || l != null && !i(l)) && (l = r(l), !l && t(a)) ? e(o(a), 0, c) : a.split(l, c)) : [];
  }
  return Fr = f, Fr;
}
var wn = An();
const xn = /* @__PURE__ */ b(wn);
function On(r, e) {
  const { value: t } = r;
  return xn(String(e).replace("(", "").replace(")", "").trim(), ",").includes(t);
}
function jn(r, e) {
  const t = document.querySelector(String(e));
  return !!(r.value.length || t != null && t.value.length);
}
function Ln(r) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(r.value);
}
function Nn(r, e, t) {
  const n = Number(r.value), i = Number(e), o = Number(t);
  if (!w(n) || !w(i) || !w(o)) return !1;
  const u = new Cr(n);
  return u.gte(i) && u.lte(o);
}
const Fn = {
  min: It,
  max: wt,
  email: xt,
  required: Ot,
  url: jt,
  integer: kt,
  numeric: Ut,
  alphanum: $t,
  ISO8601: Gt,
  regex: Bt,
  divisible: Kt,
  contains: Yt,
  startsWith: tn,
  endsWith: un,
  matches: an,
  alpha: hn,
  inArray: On,
  requiredUnless: jn,
  text: Ln,
  between: Nn
}, Pr = "is-invalid", Pn = "div", nt = "invalid-feedback", kr = "|", x = ":", Be = "input", We = /* @__PURE__ */ new WeakMap();
let ze = 0;
function kn(r) {
  const e = We.get(r);
  if (e) return e;
  const t = String(ze);
  return ze += 1, We.set(r, t), t;
}
function Cn(r, e) {
  return Array.from(r.querySelectorAll(`.${nt}`)).some(
    (t) => t.style.display !== "none" && Array.from(t.classList).some((n) => n.endsWith(`-${e}`))
  );
}
function Mn(r, e, t, n, i = e) {
  var l;
  const o = kn(r), u = `has-error-${i}-${o}`;
  if (!(r.closest(".form-group") || r.parentNode)) return;
  const f = r.parentNode;
  let a = f == null ? void 0 : f.querySelector(`.${u}`);
  t ? a && (a.style.display = "none", f && !Cn(f, o) && r.classList.remove(Pr)) : (a ? (a.textContent = n, a.style.display = "inline-block") : (a = document.createElement(Pn), (l = r.parentNode) == null || l.appendChild(a), a.style.display = "inline-block", a.classList.add(nt, u), a.textContent = n), r.classList.contains(Pr) || r.classList.add(Pr));
}
function Un(r) {
  return /[A-Za-z]/.test(r);
}
function $n(r) {
  var t, n;
  if (!Un((t = r[0]) != null ? t : "")) return "";
  let e = 1;
  for (; /[A-Za-z0-9]/.test((n = r[e]) != null ? n : ""); ) e += 1;
  return r[e] === x ? r.slice(0, e) : "";
}
function Gn(r, e, t) {
  const n = $n(r.slice(e + 1));
  return n ? t.has(n) || /^[A-Za-z][A-Za-z0-9]*$/.test(n) : !1;
}
function Bn(r, e) {
  const t = [];
  let n = "";
  for (let i = 0; i < r.length; i += 1) {
    const o = r[i], u = r[i + 1];
    if (o === "\\" && u === kr) {
      n += kr, i += 1;
      continue;
    }
    if (o === kr && Gn(r, i, e)) {
      t.push(n), n = "";
      continue;
    }
    n += o;
  }
  return t.push(n), t;
}
function Wn(r) {
  const e = [];
  let t = "";
  for (let n = 0; n < r.length; n += 1) {
    const i = r[n], o = r[n + 1];
    if (i === "\\" && o === x) {
      t += x, n += 1;
      continue;
    }
    if (i === x) {
      e.push(t), t = "";
      continue;
    }
    t += i;
  }
  return e.push(t), e;
}
function zn(r, e) {
  return `${r || "rule"}-${e}`.replace(/[^A-Za-z0-9_-]/g, "-");
}
function Dn(r, e) {
  const t = new Set(e);
  return Bn(r, t).map((n, i) => {
    var a, l;
    const o = Wn(n.trim()), u = (l = (a = o.shift()) == null ? void 0 : a.trim()) != null ? l : "";
    if (!u) return null;
    const s = o.length > 0 ? String(o.pop()) : "", f = u === "regex" ? [o.join(x)] : o;
    return {
      name: u,
      options: f,
      error: s,
      key: zn(u, i)
    };
  }).filter((n) => !!n);
}
const Wr = Fn;
function Zn(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function Hn(r) {
  return r.name === "required" || r.name === "requiredUnless";
}
function Vn(r, e) {
  return !Hn(e) && r.value.length === 0;
}
function Mr(r) {
  typeof console != "undefined" && Ve(console.warn) && console.warn(`[bootstrap-validate] ${r}`);
}
function Xn(r, e) {
  const t = Wr[e.name];
  if (!t)
    return Mr(`Unknown rule "${e.name}" skipped.`), !0;
  if (Vn(r, e)) return !0;
  try {
    return t(r, ...e.options);
  } catch (n) {
    return Mr(`Rule "${e.name}" failed: ${n instanceof Error ? n.message : String(n)}`), !1;
  }
}
function De(r) {
  return r instanceof HTMLSelectElement ? [Be, "change"] : [Be];
}
function Jn(r) {
  if (r.name !== "matches" && r.name !== "requiredUnless") return null;
  const [e] = r.options;
  return e ? document.querySelector(String(e)) : null;
}
function Kn(r, e, t) {
  const n = Dn(e, Object.keys(Wr)), i = [], o = () => {
    let u = !0;
    return n.forEach((s) => {
      const f = Xn(r, s);
      u = !!f && u, Mn(r, s.name, f, s.error, s.key), Ve(t) && t(f);
    }), u;
  };
  return De(r).forEach((u) => {
    r.addEventListener(u, o), i.push(() => r.removeEventListener(u, o));
  }), n.forEach((u) => {
    const s = Jn(u);
    s && De(s).forEach((f) => {
      s.addEventListener(f, o), i.push(() => s.removeEventListener(f, o));
    });
  }), {
    element: r,
    validate: o,
    destroy() {
      i.splice(0).forEach((u) => u());
    }
  };
}
const Yn = ((r, e, t) => {
  const n = vt([r]).map((i) => {
    const o = Zn(i);
    return o ? Kn(o, e, t) : (Mr(`Input "${String(i)}" was not found.`), null);
  }).filter((i) => !!i);
  return Array.isArray(r) ? n : n[0];
});
Yn.extendRule = (r, e) => {
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(r))
    throw new Error(`Invalid rule name "${r}".`);
  Wr[r] = e;
};
export {
  Yn as default
};
