var F = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function d(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var C, kr;
function ke() {
  if (kr) return C;
  kr = 1;
  var r = typeof F == "object" && F && F.Object === Object && F;
  return C = r, C;
}
var k, Ur;
function Pr() {
  if (Ur) return k;
  Ur = 1;
  var r = ke(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return k = t, k;
}
var U, Gr;
function N() {
  if (Gr) return U;
  Gr = 1;
  var r = Pr(), e = r.Symbol;
  return U = e, U;
}
var G, Dr;
function Je() {
  if (Dr) return G;
  Dr = 1;
  var r = N(), e = Object.prototype, t = e.hasOwnProperty, n = e.toString, i = r ? r.toStringTag : void 0;
  function u(o) {
    var a = t.call(o, i), f = o[i];
    try {
      o[i] = void 0;
      var s = !0;
    } catch (c) {
    }
    var l = n.call(o);
    return s && (a ? o[i] = f : delete o[i]), l;
  }
  return G = u, G;
}
var D, Wr;
function Ye() {
  if (Wr) return D;
  Wr = 1;
  var r = Object.prototype, e = r.toString;
  function t(n) {
    return e.call(n);
  }
  return D = t, D;
}
var W, Br;
function w() {
  if (Br) return W;
  Br = 1;
  var r = N(), e = Je(), t = Ye(), n = "[object Null]", i = "[object Undefined]", u = r ? r.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? i : n : u && u in Object(a) ? e(a) : t(a);
  }
  return W = o, W;
}
var B, $r;
function Lr() {
  if ($r) return B;
  $r = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return B = r, B;
}
var $, zr;
function Ue() {
  if (zr) return $;
  zr = 1;
  var r = w(), e = Lr(), t = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", u = "[object Proxy]";
  function o(a) {
    if (!e(a))
      return !1;
    var f = r(a);
    return f == n || f == i || f == t || f == u;
  }
  return $ = o, $;
}
var Ke = Ue();
const Qe = /* @__PURE__ */ d(Ke);
var z, Hr;
function rt() {
  if (Hr) return z;
  Hr = 1;
  function r(e, t) {
    for (var n = -1, i = t.length, u = e.length; ++n < i; )
      e[u + n] = t[n];
    return e;
  }
  return z = r, z;
}
var H, Vr;
function x() {
  if (Vr) return H;
  Vr = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return H = r, H;
}
var V, Xr;
function et() {
  if (Xr) return V;
  Xr = 1;
  var r = w(), e = x(), t = "[object Arguments]";
  function n(i) {
    return e(i) && r(i) == t;
  }
  return V = n, V;
}
var X, Zr;
function tt() {
  if (Zr) return X;
  Zr = 1;
  var r = et(), e = x(), t = Object.prototype, n = t.hasOwnProperty, i = t.propertyIsEnumerable, u = r(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? r : function(o) {
    return e(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return X = u, X;
}
var Z, Jr;
function Mr() {
  if (Jr) return Z;
  Jr = 1;
  var r = Array.isArray;
  return Z = r, Z;
}
var J, Yr;
function nt() {
  if (Yr) return J;
  Yr = 1;
  var r = N(), e = tt(), t = Mr(), n = r ? r.isConcatSpreadable : void 0;
  function i(u) {
    return t(u) || e(u) || !!(n && u && u[n]);
  }
  return J = i, J;
}
var Y, Kr;
function it() {
  if (Kr) return Y;
  Kr = 1;
  var r = rt(), e = nt();
  function t(n, i, u, o, a) {
    var f = -1, s = n.length;
    for (u || (u = e), a || (a = []); ++f < s; ) {
      var l = n[f];
      i > 0 && u(l) ? i > 1 ? t(l, i - 1, u, o, a) : r(a, l) : o || (a[a.length] = l);
    }
    return a;
  }
  return Y = t, Y;
}
var K, Qr;
function ut() {
  if (Qr) return K;
  Qr = 1;
  var r = it();
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? r(t, 1) : [];
  }
  return K = e, K;
}
var at = ut();
const ot = /* @__PURE__ */ d(at);
var Q, re;
function st() {
  if (re) return Q;
  re = 1;
  var r = /\s/;
  function e(t) {
    for (var n = t.length; n-- && r.test(t.charAt(n)); )
      ;
    return n;
  }
  return Q = e, Q;
}
var rr, ee;
function ft() {
  if (ee) return rr;
  ee = 1;
  var r = st(), e = /^\s+/;
  function t(n) {
    return n && n.slice(0, r(n) + 1).replace(e, "");
  }
  return rr = t, rr;
}
var er, te;
function Ge() {
  if (te) return er;
  te = 1;
  var r = w(), e = x(), t = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || e(i) && r(i) == t;
  }
  return er = n, er;
}
var tr, ne;
function De() {
  if (ne) return tr;
  ne = 1;
  var r = ft(), e = Lr(), t = Ge(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, o = /^0o[0-7]+$/i, a = parseInt;
  function f(s) {
    if (typeof s == "number")
      return s;
    if (t(s))
      return n;
    if (e(s)) {
      var l = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = e(l) ? l + "" : l;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = r(s);
    var c = u.test(s);
    return c || o.test(s) ? a(s.slice(2), c ? 2 : 8) : i.test(s) ? n : +s;
  }
  return tr = f, tr;
}
var nr, ie;
function We() {
  if (ie) return nr;
  ie = 1;
  var r = De();
  function e(t) {
    return function(n, i) {
      return typeof n == "string" && typeof i == "string" || (n = r(n), i = r(i)), t(n, i);
    };
  }
  return nr = e, nr;
}
var ir, ue;
function ct() {
  if (ue) return ir;
  ue = 1;
  var r = We(), e = r(function(t, n) {
    return t >= n;
  });
  return ir = e, ir;
}
var lt = ct();
const gt = /* @__PURE__ */ d(lt);
var ur, ae;
function ht() {
  if (ae) return ur;
  ae = 1;
  function r(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, u = Array(i); ++n < i; )
      u[n] = t(e[n], n, e);
    return u;
  }
  return ur = r, ur;
}
var ar, oe;
function P() {
  if (oe) return ar;
  oe = 1;
  var r = N(), e = ht(), t = Mr(), n = Ge(), i = r ? r.prototype : void 0, u = i ? i.toString : void 0;
  function o(a) {
    if (typeof a == "string")
      return a;
    if (t(a))
      return e(a, o) + "";
    if (n(a))
      return u ? u.call(a) : "";
    var f = a + "";
    return f == "0" && 1 / a == -1 / 0 ? "-0" : f;
  }
  return ar = o, ar;
}
var or, se;
function L() {
  if (se) return or;
  se = 1;
  var r = P();
  function e(t) {
    return t == null ? "" : r(t);
  }
  return or = e, or;
}
var sr, fe;
function vt() {
  if (fe) return sr;
  fe = 1;
  var r = Pr(), e = L(), t = /^\s+/, n = r.parseInt;
  function i(u, o, a) {
    return a || o == null ? o = 0 : o && (o = +o), n(e(u).replace(t, ""), o || 0);
  }
  return sr = i, sr;
}
var bt = vt();
const Be = /* @__PURE__ */ d(bt);
function dt(r, e) {
  return gt(r.value.length, Be(String(e)));
}
var fr, ce;
function pt() {
  if (ce) return fr;
  ce = 1;
  var r = We(), e = r(function(t, n) {
    return t <= n;
  });
  return fr = e, fr;
}
var _t = pt();
const qt = /* @__PURE__ */ d(_t);
function Rt(r, e) {
  return qt(r.value.length, Be(String(e)));
}
function St(r) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    r.value
  );
}
function Et(r) {
  return r.value.length && r.value.length > 0;
}
function It(r) {
  return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    r.value
  );
}
var cr, le;
function mt() {
  if (le) return cr;
  le = 1;
  var r = De(), e = 1 / 0, t = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = r(i), i === e || i === -e) {
      var u = i < 0 ? -1 : 1;
      return u * t;
    }
    return i === i ? i : 0;
  }
  return cr = n, cr;
}
var lr, ge;
function Cr() {
  if (ge) return lr;
  ge = 1;
  var r = mt();
  function e(t) {
    var n = r(t), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return lr = e, lr;
}
var gr, he;
function Tt() {
  if (he) return gr;
  he = 1;
  var r = Cr();
  function e(t) {
    return typeof t == "number" && t == r(t);
  }
  return gr = e, gr;
}
var yt = Tt();
const At = /* @__PURE__ */ d(yt);
function wt(r) {
  return At(Number(r.value));
}
var hr, ve;
function xt() {
  if (ve) return hr;
  ve = 1;
  var r = Pr(), e = r.isFinite;
  function t(n) {
    return typeof n == "number" && e(n);
  }
  return hr = t, hr;
}
var jt = xt();
const $e = /* @__PURE__ */ d(jt);
function Ot(r) {
  return $e(Number(r.value));
}
function Ft(r) {
  return /^[a-z0-9]+$/i.test(r.value);
}
function Nt(r) {
  return /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/.test(r.value);
}
function Pt(r, e) {
  return new RegExp(e instanceof RegExp ? e : String(e)).test(r.value);
}
var Lt = 20, Mt = 1, R = 1e6, be = 1e6, Ct = -7, kt = 21, Ut = !1, j = "[big.js] ", S = j + "Invalid ", M = S + "decimal places", Gt = S + "rounding mode", ze = j + "Division by zero", g = {}, p = void 0, Dt = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function He() {
  function r(e) {
    var t = this;
    if (!(t instanceof r)) return e === p ? He() : new r(e);
    if (e instanceof r)
      t.s = e.s, t.e = e.e, t.c = e.c.slice();
    else {
      if (typeof e != "string") {
        if (r.strict === !0)
          throw TypeError(S + "number");
        e = e === 0 && 1 / e < 0 ? "-0" : String(e);
      }
      Wt(t, e);
    }
    t.constructor = r;
  }
  return r.prototype = g, r.DP = Lt, r.RM = Mt, r.NE = Ct, r.PE = kt, r.strict = Ut, r.roundDown = 0, r.roundHalfUp = 1, r.roundHalfEven = 2, r.roundUp = 3, r;
}
function Wt(r, e) {
  var t, n, i;
  if (!Dt.test(e))
    throw Error(S + "number");
  for (r.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +e.slice(n + 1), e = e.substring(0, n)) : t < 0 && (t = e.length), i = e.length, n = 0; n < i && e.charAt(n) == "0"; ) ++n;
  if (n == i)
    r.c = [r.e = 0];
  else {
    for (; i > 0 && e.charAt(--i) == "0"; ) ;
    for (r.e = t - n - 1, r.c = [], t = 0; n <= i; ) r.c[t++] = +e.charAt(n++);
  }
  return r;
}
function E(r, e, t, n) {
  var i = r.c;
  if (t === p && (t = r.constructor.RM), t !== 0 && t !== 1 && t !== 2 && t !== 3)
    throw Error(Gt);
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
function I(r, e, t) {
  var n = r.e, i = r.c.join(""), u = i.length;
  if (e)
    i = i.charAt(0) + (u > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
  else if (n < 0) {
    for (; ++n; ) i = "0" + i;
    i = "0." + i;
  } else if (n > 0)
    if (++n > u)
      for (n -= u; n--; ) i += "0";
    else n < u && (i = i.slice(0, n) + "." + i.slice(n));
  else u > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return r.s < 0 && t ? "-" + i : i;
}
g.abs = function() {
  var r = new this.constructor(this);
  return r.s = 1, r;
};
g.cmp = function(r) {
  var e, t = this, n = t.c, i = (r = new t.constructor(r)).c, u = t.s, o = r.s, a = t.e, f = r.e;
  if (!n[0] || !i[0]) return n[0] ? u : i[0] ? -o : 0;
  if (u != o) return u;
  if (e = u < 0, a != f) return a > f ^ e ? 1 : -1;
  for (o = (a = n.length) < (f = i.length) ? a : f, u = -1; ++u < o; )
    if (n[u] != i[u]) return n[u] > i[u] ^ e ? 1 : -1;
  return a == f ? 0 : a > f ^ e ? 1 : -1;
};
g.div = function(r) {
  var e = this, t = e.constructor, n = e.c, i = (r = new t(r)).c, u = e.s == r.s ? 1 : -1, o = t.DP;
  if (o !== ~~o || o < 0 || o > R)
    throw Error(M);
  if (!i[0])
    throw Error(ze);
  if (!n[0])
    return r.s = u, r.c = [r.e = 0], r;
  var a, f, s, l, c, b = i.slice(), m = a = i.length, O = n.length, h = n.slice(0, a), v = h.length, _ = r, T = _.c = [], y = 0, q = o + (_.e = e.e - r.e) + 1;
  for (_.s = u, u = q < 0 ? 0 : q, b.unshift(0); v++ < a; ) h.push(0);
  do {
    for (s = 0; s < 10; s++) {
      if (a != (v = h.length))
        l = a > v ? 1 : -1;
      else
        for (c = -1, l = 0; ++c < a; )
          if (i[c] != h[c]) {
            l = i[c] > h[c] ? 1 : -1;
            break;
          }
      if (l < 0) {
        for (f = v == a ? i : b; v; ) {
          if (h[--v] < f[v]) {
            for (c = v; c && !h[--c]; ) h[c] = 9;
            --h[c], h[v] += 10;
          }
          h[v] -= f[v];
        }
        for (; !h[0]; ) h.shift();
      } else
        break;
    }
    T[y++] = l ? s : ++s, h[0] && l ? h[v] = n[m] || 0 : h = [n[m]];
  } while ((m++ < O || h[0] !== p) && u--);
  return !T[0] && y != 1 && (T.shift(), _.e--, q--), y > q && E(_, q, t.RM, h[0] !== p), _;
};
g.eq = function(r) {
  return this.cmp(r) === 0;
};
g.gt = function(r) {
  return this.cmp(r) > 0;
};
g.gte = function(r) {
  return this.cmp(r) > -1;
};
g.lt = function(r) {
  return this.cmp(r) < 0;
};
g.lte = function(r) {
  return this.cmp(r) < 1;
};
g.minus = g.sub = function(r) {
  var e, t, n, i, u = this, o = u.constructor, a = u.s, f = (r = new o(r)).s;
  if (a != f)
    return r.s = -f, u.plus(r);
  var s = u.c.slice(), l = u.e, c = r.c, b = r.e;
  if (!s[0] || !c[0])
    return c[0] ? r.s = -f : s[0] ? r = new o(u) : r.s = 1, r;
  if (a = l - b) {
    for ((i = a < 0) ? (a = -a, n = s) : (b = l, n = c), n.reverse(), f = a; f--; ) n.push(0);
    n.reverse();
  } else
    for (t = ((i = s.length < c.length) ? s : c).length, a = f = 0; f < t; f++)
      if (s[f] != c[f]) {
        i = s[f] < c[f];
        break;
      }
  if (i && (n = s, s = c, c = n, r.s = -r.s), (f = (t = c.length) - (e = s.length)) > 0) for (; f--; ) s[e++] = 0;
  for (f = e; t > a; ) {
    if (s[--t] < c[t]) {
      for (e = t; e && !s[--e]; ) s[e] = 9;
      --s[e], s[t] += 10;
    }
    s[t] -= c[t];
  }
  for (; s[--f] === 0; ) s.pop();
  for (; s[0] === 0; )
    s.shift(), --b;
  return s[0] || (r.s = 1, s = [b = 0]), r.c = s, r.e = b, r;
};
g.mod = function(r) {
  var e, t = this, n = t.constructor, i = t.s, u = (r = new n(r)).s;
  if (!r.c[0])
    throw Error(ze);
  return t.s = r.s = 1, e = r.cmp(t) == 1, t.s = i, r.s = u, e ? new n(t) : (i = n.DP, u = n.RM, n.DP = n.RM = 0, t = t.div(r), n.DP = i, n.RM = u, this.minus(t.times(r)));
};
g.plus = g.add = function(r) {
  var e, t, n, i = this, u = i.constructor;
  if (r = new u(r), i.s != r.s)
    return r.s = -r.s, i.minus(r);
  var o = i.e, a = i.c, f = r.e, s = r.c;
  if (!a[0] || !s[0])
    return s[0] || (a[0] ? r = new u(i) : r.s = i.s), r;
  if (a = a.slice(), e = o - f) {
    for (e > 0 ? (f = o, n = s) : (e = -e, n = a), n.reverse(); e--; ) n.push(0);
    n.reverse();
  }
  for (a.length - s.length < 0 && (n = s, s = a, a = n), e = s.length, t = 0; e; a[e] %= 10) t = (a[--e] = a[e] + s[e] + t) / 10 | 0;
  for (t && (a.unshift(t), ++f), e = a.length; a[--e] === 0; ) a.pop();
  return r.c = a, r.e = f, r;
};
g.pow = function(r) {
  var e = this, t = new e.constructor("1"), n = t, i = r < 0;
  if (r !== ~~r || r < -be || r > be)
    throw Error(S + "exponent");
  for (i && (r = -r); r & 1 && (n = n.times(e)), r >>= 1, !!r; )
    e = e.times(e);
  return i ? t.div(n) : n;
};
g.prec = function(r, e) {
  if (r !== ~~r || r < 1 || r > R)
    throw Error(S + "precision");
  return E(new this.constructor(this), r, e);
};
g.round = function(r, e) {
  if (r === p) r = 0;
  else if (r !== ~~r || r < -R || r > R)
    throw Error(M);
  return E(new this.constructor(this), r + this.e + 1, e);
};
g.sqrt = function() {
  var r, e, t, n = this, i = n.constructor, u = n.s, o = n.e, a = new i("0.5");
  if (!n.c[0]) return new i(n);
  if (u < 0)
    throw Error(j + "No square root");
  u = Math.sqrt(n + ""), u === 0 || u === 1 / 0 ? (e = n.c.join(""), e.length + o & 1 || (e += "0"), u = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), r = new i((u == 1 / 0 ? "5e" : (u = u.toExponential()).slice(0, u.indexOf("e") + 1)) + o)) : r = new i(u + ""), o = r.e + (i.DP += 4);
  do
    t = r, r = a.times(t.plus(n.div(t)));
  while (t.c.slice(0, o).join("") !== r.c.slice(0, o).join(""));
  return E(r, (i.DP -= 4) + r.e + 1, i.RM);
};
g.times = g.mul = function(r) {
  var e, t = this, n = t.constructor, i = t.c, u = (r = new n(r)).c, o = i.length, a = u.length, f = t.e, s = r.e;
  if (r.s = t.s == r.s ? 1 : -1, !i[0] || !u[0])
    return r.c = [r.e = 0], r;
  for (r.e = f + s, o < a && (e = i, i = u, u = e, s = o, o = a, a = s), e = new Array(s = o + a); s--; ) e[s] = 0;
  for (f = a; f--; ) {
    for (a = 0, s = o + f; s > f; )
      a = e[s] + u[f] * i[s - f - 1] + a, e[s--] = a % 10, a = a / 10 | 0;
    e[s] = a;
  }
  for (a ? ++r.e : e.shift(), f = e.length; !e[--f]; ) e.pop();
  return r.c = e, r;
};
g.toExponential = function(r, e) {
  var t = this, n = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 0 || r > R)
      throw Error(M);
    for (t = E(new t.constructor(t), ++r, e); t.c.length < r; ) t.c.push(0);
  }
  return I(t, !0, !!n);
};
g.toFixed = function(r, e) {
  var t = this, n = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 0 || r > R)
      throw Error(M);
    for (t = E(new t.constructor(t), r + t.e + 1, e), r = r + t.e + 1; t.c.length < r; ) t.c.push(0);
  }
  return I(t, !1, !!n);
};
g.toJSON = g.toString = function() {
  var r = this, e = r.constructor;
  return I(r, r.e <= e.NE || r.e >= e.PE, !!r.c[0]);
};
g.toNumber = function() {
  var r = Number(I(this, !0, !0));
  if (this.constructor.strict === !0 && !this.eq(r.toString()))
    throw Error(j + "Imprecise conversion");
  return r;
};
g.toPrecision = function(r, e) {
  var t = this, n = t.constructor, i = t.c[0];
  if (r !== p) {
    if (r !== ~~r || r < 1 || r > R)
      throw Error(S + "precision");
    for (t = E(new n(t), r, e); t.c.length < r; ) t.c.push(0);
  }
  return I(t, r <= t.e || t.e <= n.NE || t.e >= n.PE, !!i);
};
g.valueOf = function() {
  var r = this, e = r.constructor;
  if (e.strict === !0)
    throw Error(j + "valueOf disallowed");
  return I(r, r.e <= e.NE || r.e >= e.PE, !0);
};
var de = He();
function Bt(r, e) {
  let t = !1;
  const n = Number(r.value);
  return $e(n) && (t = new de(n).mod(new de(Number(e))).toString() === "0"), t;
}
function $t(r, e) {
  return r.value.includes(String(e));
}
var vr, pe;
function Ve() {
  if (pe) return vr;
  pe = 1;
  function r(e, t, n) {
    return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
  }
  return vr = r, vr;
}
var br, _e;
function zt() {
  if (_e) return br;
  _e = 1;
  var r = Ve(), e = P(), t = Cr(), n = L();
  function i(u, o, a) {
    return u = n(u), a = a == null ? 0 : r(t(a), 0, u.length), o = e(o), u.slice(a, a + o.length) == o;
  }
  return br = i, br;
}
var Ht = zt();
const Vt = /* @__PURE__ */ d(Ht);
function Xt(r, e) {
  return Vt(r.value, String(e));
}
var dr, qe;
function Zt() {
  if (qe) return dr;
  qe = 1;
  var r = Ve(), e = P(), t = Cr(), n = L();
  function i(u, o, a) {
    u = n(u), o = e(o);
    var f = u.length;
    a = a === void 0 ? f : r(t(a), 0, f);
    var s = a;
    return a -= o.length, a >= 0 && u.slice(a, s) == o;
  }
  return dr = i, dr;
}
var Jt = Zt();
const Yt = /* @__PURE__ */ d(Jt);
function Kt(r, e) {
  return Yt(r.value, String(e));
}
function Qt(r, e) {
  let t = e;
  return (typeof t != "object" || typeof t.nodeType == "undefined") && (t = document.querySelector(String(e))), r.value === t.value;
}
var pr, Re;
function rn() {
  if (Re) return pr;
  Re = 1;
  var r = w(), e = Mr(), t = x(), n = "[object String]";
  function i(u) {
    return typeof u == "string" || !e(u) && t(u) && r(u) == n;
  }
  return pr = i, pr;
}
var en = rn();
const tn = /* @__PURE__ */ d(en);
function nn(r) {
  return tn(r.value) && /^[a-z]+$/i.test(r.value);
}
var _r, Se;
function un() {
  if (Se) return _r;
  Se = 1;
  function r(e, t, n) {
    var i = -1, u = e.length;
    t < 0 && (t = -t > u ? 0 : u + t), n = n > u ? u : n, n < 0 && (n += u), u = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(u); ++i < u; )
      o[i] = e[i + t];
    return o;
  }
  return _r = r, _r;
}
var qr, Ee;
function an() {
  if (Ee) return qr;
  Ee = 1;
  var r = un();
  function e(t, n, i) {
    var u = t.length;
    return i = i === void 0 ? u : i, !n && i >= u ? t : r(t, n, i);
  }
  return qr = e, qr;
}
var Rr, Ie;
function Xe() {
  if (Ie) return Rr;
  Ie = 1;
  var r = "\\ud800-\\udfff", e = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = e + t + n, u = "\\ufe0e\\ufe0f", o = "\\u200d", a = RegExp("[" + o + r + i + u + "]");
  function f(s) {
    return a.test(s);
  }
  return Rr = f, Rr;
}
var Sr, me;
function on() {
  if (me) return Sr;
  me = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return Sr = r, Sr;
}
var Er, Te;
function sn() {
  if (Te) return Er;
  Te = 1;
  var r = 9007199254740991;
  function e(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= r;
  }
  return Er = e, Er;
}
var Ir, ye;
function fn() {
  if (ye) return Ir;
  ye = 1;
  var r = Ue(), e = sn();
  function t(n) {
    return n != null && e(n.length) && !r(n);
  }
  return Ir = t, Ir;
}
var mr, Ae;
function cn() {
  if (Ae) return mr;
  Ae = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(n, i) {
    var u = typeof n;
    return i = i == null ? r : i, !!i && (u == "number" || u != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return mr = t, mr;
}
var Tr, we;
function ln() {
  if (we) return Tr;
  we = 1;
  var r = on(), e = fn(), t = cn(), n = Lr();
  function i(u, o, a) {
    if (!n(a))
      return !1;
    var f = typeof o;
    return (f == "number" ? e(a) && t(o, a.length) : f == "string" && o in a) ? r(a[o], u) : !1;
  }
  return Tr = i, Tr;
}
var yr, xe;
function gn() {
  if (xe) return yr;
  xe = 1;
  var r = w(), e = x(), t = "[object RegExp]";
  function n(i) {
    return e(i) && r(i) == t;
  }
  return yr = n, yr;
}
var Ar, je;
function hn() {
  if (je) return Ar;
  je = 1;
  function r(e) {
    return function(t) {
      return e(t);
    };
  }
  return Ar = r, Ar;
}
var A = { exports: {} };
A.exports;
var Oe;
function vn() {
  return Oe || (Oe = 1, (function(r, e) {
    var t = ke(), n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, u = i && i.exports === n, o = u && t.process, a = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || o && o.binding && o.binding("util");
      } catch (s) {
      }
    })();
    r.exports = a;
  })(A, A.exports)), A.exports;
}
var wr, Fe;
function bn() {
  if (Fe) return wr;
  Fe = 1;
  var r = gn(), e = hn(), t = vn(), n = t && t.isRegExp, i = n ? e(n) : r;
  return wr = i, wr;
}
var xr, Ne;
function dn() {
  if (Ne) return xr;
  Ne = 1;
  function r(e) {
    return e.split("");
  }
  return xr = r, xr;
}
var jr, Pe;
function pn() {
  if (Pe) return jr;
  Pe = 1;
  var r = "\\ud800-\\udfff", e = "\\u0300-\\u036f", t = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = e + t + n, u = "\\ufe0e\\ufe0f", o = "[" + r + "]", a = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", s = "(?:" + a + "|" + f + ")", l = "[^" + r + "]", c = "(?:\\ud83c[\\udde6-\\uddff]){2}", b = "[\\ud800-\\udbff][\\udc00-\\udfff]", m = "\\u200d", O = s + "?", h = "[" + u + "]?", v = "(?:" + m + "(?:" + [l, c, b].join("|") + ")" + h + O + ")*", _ = h + O + v, T = "(?:" + [l + a + "?", a, c, b, o].join("|") + ")", y = RegExp(f + "(?=" + f + ")|" + T + _, "g");
  function q(Ze) {
    return Ze.match(y) || [];
  }
  return jr = q, jr;
}
var Or, Le;
function _n() {
  if (Le) return Or;
  Le = 1;
  var r = dn(), e = Xe(), t = pn();
  function n(i) {
    return e(i) ? t(i) : r(i);
  }
  return Or = n, Or;
}
var Fr, Me;
function qn() {
  if (Me) return Fr;
  Me = 1;
  var r = P(), e = an(), t = Xe(), n = ln(), i = bn(), u = _n(), o = L(), a = 4294967295;
  function f(s, l, c) {
    return c && typeof c != "number" && n(s, l, c) && (l = c = void 0), c = c === void 0 ? a : c >>> 0, c ? (s = o(s), s && (typeof l == "string" || l != null && !i(l)) && (l = r(l), !l && t(s)) ? e(u(s), 0, c) : s.split(l, c)) : [];
  }
  return Fr = f, Fr;
}
var Rn = qn();
const Sn = /* @__PURE__ */ d(Rn);
function En(r, e) {
  const { value: t } = r;
  return Sn(String(e).replace("(", "").replace(")", "").trim(), ",").includes(t);
}
const In = {
  min: dt,
  max: Rt,
  email: St,
  required: Et,
  url: It,
  integer: wt,
  numeric: Ot,
  alphanum: Ft,
  ISO8601: Nt,
  regex: Pt,
  divisible: Bt,
  contains: $t,
  startsWith: Xt,
  endsWith: Kt,
  matches: Qt,
  alpha: nn,
  inArray: En
}, Nr = "is-invalid", mn = "div", Tn = "invalid-feedback", yn = "|", Ce = ":", An = "input";
function wn(r, e, t, n) {
  var a;
  const i = `has-error-${e}`, u = r.closest(".form-group") || r.parentNode;
  if (!u) return;
  let o = u.querySelector(`.${i}`);
  t ? o && (r.classList.remove(Nr), o.style.display = "none") : (o ? (o.innerHTML = n, o.style.display = "inline-block") : (o = document.createElement(mn), (a = r.parentNode) == null || a.appendChild(o), o.style.display = "inline-block", o.classList.add(Tn, i), o.innerHTML = n), r.classList.contains(Nr) || r.classList.add(Nr));
}
function xn(r) {
  return typeof r == "string" ? document.querySelector(r) : r;
}
function jn(r, e, t) {
  ot([r]).forEach((n) => {
    const i = xn(n);
    i.addEventListener(An, () => {
      e.split(yn).forEach((u) => {
        let o = u.split(Ce);
        const a = o.shift(), f = String(o.pop());
        a === "regex" && (o = [o.join(Ce)]);
        const s = In[a], l = s(i, ...o);
        wn(i, a, l, f), Qe(t) && t(l);
      });
    });
  });
}
export {
  jn as default
};
