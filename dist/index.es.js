(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._innercircle_1bmju_2{stroke:#000;stroke-width:1px;fill:#c8c8c8}._outercircle_1bmju_8{stroke:#000;stroke-width:1px;fill:#505050}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ki = {
  display_type: "canvas",
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 505, height: 505 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function en(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ir(t) {
  let n, e, r;
  t.length !== 2 ? (n = en, e = (s, c) => en(t(s), c), r = (s, c) => t(s) - c) : (n = t === en || t === Vi ? t : Zi, e = t, r = t);
  function i(s, c, u = 0, f = s.length) {
    if (u < f) {
      if (n(c, c) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], c) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function a(s, c, u = 0, f = s.length) {
    if (u < f) {
      if (n(c, c) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], c) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function o(s, c, u = 0, f = s.length) {
    const h = i(s, c, u, f - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Zi() {
  return 0;
}
function Wi(t) {
  return t === null ? NaN : +t;
}
const Ji = Ir(en), Qi = Ji.right;
Ir(Wi).center;
const ji = Math.sqrt(50), ta = Math.sqrt(10), na = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ji ? 10 : a >= ta ? 5 : a >= na ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, c, u];
}
function ea(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Wn(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function ra(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Wn(n, t, e) : Wn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ia(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var aa = { value: () => {
} };
function be() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new rn(e);
}
function rn(t) {
  this._ = t;
}
function oa(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
rn.prototype = be.prototype = {
  constructor: rn,
  on: function(t, n) {
    var e = this._, r = oa(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = sa(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Le(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Le(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new rn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function sa(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Le(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = aa, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Jn = "http://www.w3.org/1999/xhtml";
const He = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Jn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), He.hasOwnProperty(n) ? { space: He[n], local: t } : t;
}
function ua(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Jn && n.documentElement.namespaceURI === Jn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ca(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Rr(t) {
  var n = Mn(t);
  return (n.local ? ca : ua)(n);
}
function fa() {
}
function ve(t) {
  return t == null ? fa : function() {
    return this.querySelector(t);
  };
}
function la(t) {
  typeof t != "function" && (t = ve(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), c, u, f = 0; f < o; ++f)
      (c = a[f]) && (u = t.call(c, c.__data__, f, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[f] = u);
  return new C(r, this._parents);
}
function ha(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function da() {
  return [];
}
function kr(t) {
  return t == null ? da : function() {
    return this.querySelectorAll(t);
  };
}
function pa(t) {
  return function() {
    return ha(t.apply(this, arguments));
  };
}
function ga(t) {
  typeof t == "function" ? t = pa(t) : t = kr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new C(r, i);
}
function Fr(t) {
  return function() {
    return this.matches(t);
  };
}
function Dr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ya = Array.prototype.find;
function _a(t) {
  return function() {
    return ya.call(this.children, t);
  };
}
function ma() {
  return this.firstElementChild;
}
function ba(t) {
  return this.select(t == null ? ma : _a(typeof t == "function" ? t : Dr(t)));
}
var va = Array.prototype.filter;
function wa() {
  return Array.from(this.children);
}
function xa(t) {
  return function() {
    return va.call(this.children, t);
  };
}
function Ma(t) {
  return this.selectAll(t == null ? wa : xa(typeof t == "function" ? t : Dr(t)));
}
function $a(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new C(r, this._parents);
}
function Lr(t) {
  return new Array(t.length);
}
function Aa() {
  return new C(this._enter || this._groups.map(Lr), this._parents);
}
function ln(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ln.prototype = {
  constructor: ln,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ta(t) {
  return function() {
    return t;
  };
}
function Sa(t, n, e, r, i, a) {
  for (var o = 0, s, c = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new ln(t, a[o]);
  for (; o < c; ++o)
    (s = n[o]) && (i[o] = s);
}
function Pa(t, n, e, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), f = n.length, h = a.length, l = new Array(f), p;
  for (s = 0; s < f; ++s)
    (c = n[s]) && (l[s] = p = o.call(c, c.__data__, s, n) + "", u.has(p) ? i[s] = c : u.set(p, c));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (c = u.get(p)) ? (r[s] = c, c.__data__ = a[s], u.delete(p)) : e[s] = new ln(t, a[s]);
  for (s = 0; s < f; ++s)
    (c = n[s]) && u.get(l[s]) === c && (i[s] = c);
}
function Ea(t) {
  return t.__data__;
}
function Na(t, n) {
  if (!arguments.length) return Array.from(this, Ea);
  var e = n ? Pa : Sa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ta(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var f = r[u], h = i[u], l = h.length, p = Oa(t.call(f, f && f.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), w = o[u] = new Array(d), y = c[u] = new Array(l);
    e(f, h, _, w, y, p, n);
    for (var x = 0, $ = 0, g, b; x < d; ++x)
      if (g = _[x]) {
        for (x >= $ && ($ = x + 1); !(b = w[$]) && ++$ < d; ) ;
        g._next = b || null;
      }
  }
  return o = new C(o, r), o._enter = s, o._exit = c, o;
}
function Oa(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function za() {
  return new C(this._exit || this._groups.map(Lr), this._parents);
}
function Ca(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Ia(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = e[c], f = r[c], h = u.length, l = s[c] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || f[d]) && (l[d] = p);
  for (; c < i; ++c)
    s[c] = e[c];
  return new C(s, this._parents);
}
function Ra() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function ka(t) {
  t || (t = Fa);
  function n(h, l) {
    return h && l ? t(h.__data__, l.__data__) : !h - !l;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, c = i[a] = new Array(s), u, f = 0; f < s; ++f)
      (u = o[f]) && (c[f] = u);
    c.sort(n);
  }
  return new C(i, this._parents).order();
}
function Fa(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Da() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function La() {
  return Array.from(this);
}
function Ha() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function qa() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Ba() {
  return !this.node();
}
function Xa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ua(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ga(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ya(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ka(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Va(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Za(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Wa(t, n) {
  var e = Mn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ga : Ua : typeof n == "function" ? e.local ? Za : Va : e.local ? Ka : Ya)(e, n));
}
function Hr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ja(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ja(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function to(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ja : typeof n == "function" ? ja : Qa)(t, n, e ?? "")) : Mt(this.node(), t);
}
function Mt(t, n) {
  return t.style.getPropertyValue(n) || Hr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function no(t) {
  return function() {
    delete this[t];
  };
}
function eo(t, n) {
  return function() {
    this[t] = n;
  };
}
function ro(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function io(t, n) {
  return arguments.length > 1 ? this.each((n == null ? no : typeof n == "function" ? ro : eo)(t, n)) : this.node()[t];
}
function qr(t) {
  return t.trim().split(/^|\s+/);
}
function we(t) {
  return t.classList || new Br(t);
}
function Br(t) {
  this._node = t, this._names = qr(t.getAttribute("class") || "");
}
Br.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Xr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ur(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ao(t) {
  return function() {
    Xr(this, t);
  };
}
function oo(t) {
  return function() {
    Ur(this, t);
  };
}
function so(t, n) {
  return function() {
    (n.apply(this, arguments) ? Xr : Ur)(this, t);
  };
}
function uo(t, n) {
  var e = qr(t + "");
  if (arguments.length < 2) {
    for (var r = we(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? so : n ? ao : oo)(e, n));
}
function co() {
  this.textContent = "";
}
function fo(t) {
  return function() {
    this.textContent = t;
  };
}
function lo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ho(t) {
  return arguments.length ? this.each(t == null ? co : (typeof t == "function" ? lo : fo)(t)) : this.node().textContent;
}
function po() {
  this.innerHTML = "";
}
function go(t) {
  return function() {
    this.innerHTML = t;
  };
}
function yo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function _o(t) {
  return arguments.length ? this.each(t == null ? po : (typeof t == "function" ? yo : go)(t)) : this.node().innerHTML;
}
function mo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function bo() {
  return this.each(mo);
}
function vo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wo() {
  return this.each(vo);
}
function xo(t) {
  var n = typeof t == "function" ? t : Rr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Mo() {
  return null;
}
function $o(t, n) {
  var e = typeof t == "function" ? t : Rr(t), r = n == null ? Mo : typeof n == "function" ? n : ve(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ao() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function To() {
  return this.each(Ao);
}
function So() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Po() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Eo(t) {
  return this.select(t ? Po : So);
}
function No(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Oo(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function zo(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Co(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Io(t, n, e) {
  return function() {
    var r = this.__on, i, a = Oo(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ro(t, n, e) {
  var r = zo(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, f; c < u; ++c)
        for (i = 0, f = s[c]; i < a; ++i)
          if ((o = r[i]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Io : Co, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Gr(t, n, e) {
  var r = Hr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ko(t, n) {
  return function() {
    return Gr(this, t, n);
  };
}
function Fo(t, n) {
  return function() {
    return Gr(this, t, n.apply(this, arguments));
  };
}
function Do(t, n) {
  return this.each((typeof n == "function" ? Fo : ko)(t, n));
}
function* Lo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Yr = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function Ut() {
  return new C([[document.documentElement]], Yr);
}
function Ho() {
  return this;
}
C.prototype = Ut.prototype = {
  constructor: C,
  select: la,
  selectAll: ga,
  selectChild: ba,
  selectChildren: Ma,
  filter: $a,
  data: Na,
  enter: Aa,
  exit: za,
  join: Ca,
  merge: Ia,
  selection: Ho,
  order: Ra,
  sort: ka,
  call: Da,
  nodes: La,
  node: Ha,
  size: qa,
  empty: Ba,
  each: Xa,
  attr: Wa,
  style: to,
  property: io,
  classed: uo,
  text: ho,
  html: _o,
  raise: bo,
  lower: wo,
  append: xo,
  insert: $o,
  remove: To,
  clone: Eo,
  datum: No,
  on: Ro,
  dispatch: Do,
  [Symbol.iterator]: Lo
};
function E(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], Yr);
}
function qo(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Qn(t, n) {
  if (t = qo(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Bo = { passive: !1 }, kt = { capture: !0, passive: !1 };
function Bn(t) {
  t.stopImmediatePropagation();
}
function wt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xo(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", wt, kt);
  "onselectstart" in n ? e.on("selectstart.drag", wt, kt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Uo(t, n) {
  var e = t.document.documentElement, r = E(t).on("dragstart.drag", null);
  n && (r.on("click.drag", wt, kt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Wt = (t) => () => t;
function jn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
jn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Go(t) {
  return !t.ctrlKey && !t.button;
}
function Yo() {
  return this.parentNode;
}
function Ko(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Vo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zo() {
  var t = Go, n = Yo, e = Ko, r = Vo, i = {}, a = be("start", "drag", "end"), o = 0, s, c, u, f, h = 0;
  function l(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", y, Bo).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, b) {
    if (!(f || !t.call(this, g, b))) {
      var T = $(this, n.call(this, g, b), g, b, "mouse");
      T && (E(g.view).on("mousemove.drag", d, kt).on("mouseup.drag", _, kt), Xo(g.view), Bn(g), u = !1, s = g.clientX, c = g.clientY, T("start", g));
    }
  }
  function d(g) {
    if (wt(g), !u) {
      var b = g.clientX - s, T = g.clientY - c;
      u = b * b + T * T > h;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    E(g.view).on("mousemove.drag mouseup.drag", null), Uo(g.view, u), wt(g), i.mouse("end", g);
  }
  function w(g, b) {
    if (t.call(this, g, b)) {
      var T = g.changedTouches, P = n.call(this, g, b), N = T.length, B, V;
      for (B = 0; B < N; ++B)
        (V = $(this, P, g, b, T[B].identifier, T[B])) && (Bn(g), V("start", g, T[B]));
    }
  }
  function y(g) {
    var b = g.changedTouches, T = b.length, P, N;
    for (P = 0; P < T; ++P)
      (N = i[b[P].identifier]) && (wt(g), N("drag", g, b[P]));
  }
  function x(g) {
    var b = g.changedTouches, T = b.length, P, N;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), P = 0; P < T; ++P)
      (N = i[b[P].identifier]) && (Bn(g), N("end", g, b[P]));
  }
  function $(g, b, T, P, N, B) {
    var V = a.copy(), v = Qn(B || T, b), X, O, k;
    if ((k = e.call(g, new jn("beforestart", {
      sourceEvent: T,
      target: l,
      identifier: N,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), P)) != null)
      return X = k.x - v[0] || 0, O = k.y - v[1] || 0, function Vt(rt, at, mt) {
        var R = v, qn;
        switch (rt) {
          case "start":
            i[N] = Vt, qn = o++;
            break;
          case "end":
            delete i[N], --o;
          // falls through
          case "drag":
            v = Qn(mt || at, b), qn = o;
            break;
        }
        V.call(
          rt,
          g,
          new jn(rt, {
            sourceEvent: at,
            subject: k,
            target: l,
            identifier: N,
            active: qn,
            x: v[0] + X,
            y: v[1] + O,
            dx: v[0] - R[0],
            dy: v[1] - R[1],
            dispatch: V
          }),
          P
        );
      };
  }
  return l.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Wt(!!g), l) : t;
  }, l.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Wt(g), l) : n;
  }, l.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Wt(g), l) : e;
  }, l.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Wt(!!g), l) : r;
  }, l.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? l : g;
  }, l.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, l) : Math.sqrt(h);
  }, l;
}
function xe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Kr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gt() {
}
var Ft = 0.7, hn = 1 / Ft, xt = "\\s*([+-]?\\d+)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wo = /^#([0-9a-f]{3,8})$/, Jo = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), Qo = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), jo = new RegExp(`^rgba\\(${xt},${xt},${xt},${Dt}\\)$`), ts = new RegExp(`^rgba\\(${U},${U},${U},${Dt}\\)$`), ns = new RegExp(`^hsl\\(${Dt},${U},${U}\\)$`), es = new RegExp(`^hsla\\(${Dt},${U},${U},${Dt}\\)$`), qe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
xe(Gt, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Be,
  // Deprecated! Use color.formatHex.
  formatHex: Be,
  formatHex8: rs,
  formatHsl: is,
  formatRgb: Xe,
  toString: Xe
});
function Be() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function is() {
  return Vr(this).formatHsl();
}
function Xe() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Wo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ue(n) : e === 3 ? new z(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jo.exec(t)) ? new z(n[1], n[2], n[3], 1) : (n = Qo.exec(t)) ? new z(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = jo.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = ts.exec(t)) ? Jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ns.exec(t)) ? Ke(n[1], n[2] / 100, n[3] / 100, 1) : (n = es.exec(t)) ? Ke(n[1], n[2] / 100, n[3] / 100, n[4]) : qe.hasOwnProperty(t) ? Ue(qe[t]) : t === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function Ue(t) {
  return new z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new z(t, n, e, r);
}
function as(t) {
  return t instanceof Gt || (t = ht(t)), t ? (t = t.rgb(), new z(t.r, t.g, t.b, t.opacity)) : new z();
}
function te(t, n, e, r) {
  return arguments.length === 1 ? as(t) : new z(t, n, e, r ?? 1);
}
function z(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
xe(z, te, Kr(Gt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(lt(this.r), lt(this.g), lt(this.b), dn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ge,
  // Deprecated! Use color.formatHex.
  formatHex: Ge,
  formatHex8: os,
  formatRgb: Ye,
  toString: Ye
}));
function Ge() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}`;
}
function os() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ye() {
  const t = dn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function dn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function st(t) {
  return t = lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ke(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new D(t, n, e, r);
}
function Vr(t) {
  if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = ht(t)), !t) return new D();
  if (t instanceof D) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new D(o, s, c, t.opacity);
}
function ss(t, n, e, r) {
  return arguments.length === 1 ? Vr(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
xe(D, ss, Kr(Gt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new z(
      Xn(t >= 240 ? t - 240 : t + 120, i, r),
      Xn(t, i, r),
      Xn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(Ve(this.h), Qt(this.s), Qt(this.l), dn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = dn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ve(this.h)}, ${Qt(this.s) * 100}%, ${Qt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ve(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Xn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Me = (t) => () => t;
function us(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function cs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function fs(t) {
  return (t = +t) == 1 ? Zr : function(n, e) {
    return e - n ? cs(n, e, t) : Me(isNaN(n) ? e : n);
  };
}
function Zr(t, n) {
  var e = n - t;
  return e ? us(t, e) : Me(isNaN(t) ? n : t);
}
const Lt = function t(n) {
  var e = fs(n);
  function r(i, a) {
    var o = e((i = te(i)).r, (a = te(a)).r), s = e(i.g, a.g), c = e(i.b, a.b), u = Zr(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = c(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ls(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function hs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ds(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = $n(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function ps(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function F(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function gs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = $n(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Un = new RegExp(ne.source, "g");
function ys(t) {
  return function() {
    return t;
  };
}
function _s(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wr(t, n) {
  var e = ne.lastIndex = Un.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = ne.exec(t)) && (i = Un.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: F(r, i) })), e = Un.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? _s(c[0].x) : ys(n) : (n = c.length, function(u) {
    for (var f = 0, h; f < n; ++f) s[(h = c[f]).i] = h.x(u);
    return s.join("");
  });
}
function $n(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Me(n) : (e === "number" ? F : e === "string" ? (r = ht(n)) ? (n = r, Lt) : Wr : n instanceof ht ? Lt : n instanceof Date ? ps : hs(n) ? ls : Array.isArray(n) ? ds : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? gs : F)(t, n);
}
function ms(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ze = 180 / Math.PI, ee = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jr(t, n, e, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Ze,
    skewX: Math.atan(c) * Ze,
    scaleX: o,
    scaleY: s
  };
}
var jt;
function bs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ee : Jr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function vs(t) {
  return t == null || (jt || (jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), jt.setAttribute("transform", t), !(t = jt.transform.baseVal.consolidate())) ? ee : (t = t.matrix, Jr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, f, h, l, p, d) {
    if (u !== h || f !== l) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: F(u, h) }, { i: _ - 2, x: F(f, l) });
    } else (h || l) && p.push("translate(" + h + n + l + e);
  }
  function o(u, f, h, l) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: F(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(u, f, h, l) {
    u !== f ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: F(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function c(u, f, h, l, p, d) {
    if (u !== h || f !== l) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: F(u, h) }, { i: _ - 2, x: F(f, l) });
    } else (h !== 1 || l !== 1) && p.push(i(p) + "scale(" + h + "," + l + ")");
  }
  return function(u, f) {
    var h = [], l = [];
    return u = t(u), f = t(f), a(u.translateX, u.translateY, f.translateX, f.translateY, h, l), o(u.rotate, f.rotate, h, l), s(u.skewX, f.skewX, h, l), c(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, l), u = f = null, function(p) {
      for (var d = -1, _ = l.length, w; ++d < _; ) h[(w = l[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var ws = Qr(bs, "px, ", "px)", "deg)"), xs = Qr(vs, ", ", ")", ")");
function Ms(t, n) {
  n === void 0 && (n = t, t = $n);
  for (var e = 0, r = n.length - 1, i = n[0], a = new Array(r < 0 ? 0 : r); e < r; ) a[e] = t(i, i = n[++e]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var $t = 0, Ot = 0, Et = 0, jr = 1e3, pn, zt, gn = 0, dt = 0, An = 0, Ht = typeof performance == "object" && performance.now ? performance : Date, ti = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Tn() {
  return dt || (ti($s), dt = Ht.now() + An);
}
function $s() {
  dt = 0;
}
function qt() {
  this._call = this._time = this._next = null;
}
qt.prototype = ni.prototype = {
  constructor: qt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Tn() : +e) + (n == null ? 0 : +n), !this._next && zt !== this && (zt ? zt._next = this : pn = this, zt = this), this._call = t, this._time = e, re();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, re());
  }
};
function ni(t, n, e) {
  var r = new qt();
  return r.restart(t, n, e), r;
}
function As() {
  Tn(), ++$t;
  for (var t = pn, n; t; )
    (n = dt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --$t;
}
function We() {
  dt = (gn = Ht.now()) + An, $t = Ot = 0;
  try {
    As();
  } finally {
    $t = 0, Ss(), dt = 0;
  }
}
function Ts() {
  var t = Ht.now(), n = t - gn;
  n > jr && (An -= n, gn = t);
}
function Ss() {
  for (var t, n = pn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : pn = e);
  zt = t, re(r);
}
function re(t) {
  if (!$t) {
    Ot && (Ot = clearTimeout(Ot));
    var n = t - dt;
    n > 24 ? (t < 1 / 0 && (Ot = setTimeout(We, t - Ht.now() - An)), Et && (Et = clearInterval(Et))) : (Et || (gn = Ht.now(), Et = setInterval(Ts, jr)), $t = 1, ti(We));
  }
}
function Je(t, n, e) {
  var r = new qt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ps(t, n, e) {
  var r = new qt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Tn() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Es = be("start", "end", "cancel", "interrupt"), Ns = [], ei = 0, Qe = 1, ie = 2, an = 3, je = 4, ae = 5, on = 6;
function Sn(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Os(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Es,
    tween: Ns,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ei
  });
}
function $e(t, n) {
  var e = H(t, n);
  if (e.state > ei) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = H(t, n);
  if (e.state > an) throw new Error("too late; already running");
  return e;
}
function H(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Os(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ni(a, 0, e.time);
  function a(u) {
    e.state = Qe, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var f, h, l, p;
    if (e.state !== Qe) return c();
    for (f in r)
      if (p = r[f], p.name === e.name) {
        if (p.state === an) return Je(o);
        p.state === je ? (p.state = on, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < n && (p.state = on, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Je(function() {
      e.state === an && (e.state = je, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = ie, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ie) {
      for (e.state = an, i = new Array(l = e.tween.length), f = 0, h = -1; f < l; ++f)
        (p = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = ae, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, f);
    e.state === ae && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = on, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function zs(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > ie && r.state < ae, r.state = on, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function Cs(t) {
  return this.each(function() {
    zs(this, t);
  });
}
function Is(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Rs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = K(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === n) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function ks(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = H(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Is : Rs)(e, t, n));
}
function Ae(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[n];
  };
}
function ri(t, n) {
  var e;
  return (typeof n == "number" ? F : n instanceof ht ? Lt : (e = ht(n)) ? (n = e, Lt) : Wr)(t, n);
}
function Fs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ds(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Hs(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function qs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function Bs(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s)));
  };
}
function Xs(t, n) {
  var e = Mn(t), r = e === "transform" ? xs : ri;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Bs : qs)(e, r, Ae(this, "attr." + t, n)) : n == null ? (e.local ? Ds : Fs)(e) : (e.local ? Hs : Ls)(e, r, n));
}
function Us(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Gs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ys(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Gs(t, a)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Us(t, a)), e;
  }
  return i._value = n, i;
}
function Vs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Mn(t);
  return this.tween(e, (r.local ? Ys : Ks)(r, n));
}
function Zs(t, n) {
  return function() {
    $e(this, t).delay = +n.apply(this, arguments);
  };
}
function Ws(t, n) {
  return n = +n, function() {
    $e(this, t).delay = n;
  };
}
function Js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zs : Ws)(n, t)) : H(this.node(), n).delay;
}
function Qs(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function js(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function tu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qs : js)(n, t)) : H(this.node(), n).duration;
}
function nu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function eu(t) {
  var n = this._id;
  return arguments.length ? this.each(nu(n, t)) : H(this.node(), n).ease;
}
function ru(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function iu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ru(this._id, t));
}
function au(t) {
  typeof t != "function" && (t = Fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Q(r, this._parents, this._name, this._id);
}
function ou(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = n[s], u = e[s], f = c.length, h = o[s] = new Array(f), l, p = 0; p < f; ++p)
      (l = c[p] || u[p]) && (h[p] = l);
  for (; s < r; ++s)
    o[s] = n[s];
  return new Q(o, this._parents, this._name, this._id);
}
function su(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function uu(t, n, e) {
  var r, i, a = su(n) ? $e : K;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function cu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(uu(e, t, n));
}
function fu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function lu() {
  return this.on("end.remove", fu(this._id));
}
function hu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ve(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), f, h, l = 0; l < c; ++l)
      (f = s[l]) && (h = t.call(f, f.__data__, l, s)) && ("__data__" in f && (h.__data__ = f.__data__), u[l] = h, Sn(u[l], n, e, l, u, H(f, e)));
  return new Q(a, this._parents, n, e);
}
function du(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = kr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, f, h = 0; h < u; ++h)
      if (f = c[h]) {
        for (var l = t.call(f, f.__data__, h, c), p, d = H(f, e), _ = 0, w = l.length; _ < w; ++_)
          (p = l[_]) && Sn(p, n, e, _, l, d);
        a.push(l), o.push(f);
      }
  return new Q(a, o, n, e);
}
var pu = Ut.prototype.constructor;
function gu() {
  return new pu(this._groups, this._parents);
}
function yu(t, n) {
  var e, r, i;
  return function() {
    var a = Mt(this, t), o = (this.style.removeProperty(t), Mt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function ii(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _u(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Mt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function mu(t, n, e) {
  var r, i, a;
  return function() {
    var o = Mt(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Mt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = n(r = o, s));
  };
}
function bu(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var c = K(this, t), u = c.on, f = c.value[a] == null ? s || (s = ii(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(o, i = f), c.on = r;
  };
}
function vu(t, n, e) {
  var r = (t += "") == "transform" ? ws : ri;
  return n == null ? this.styleTween(t, yu(t, r)).on("end.style." + t, ii(t)) : typeof n == "function" ? this.styleTween(t, mu(t, r, Ae(this, "style." + t, n))).each(bu(this._id, t)) : this.styleTween(t, _u(t, r, n), e).on("end.style." + t, null);
}
function wu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function xu(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && wu(t, o, e)), r;
  }
  return a._value = n, a;
}
function Mu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, xu(t, n, e ?? ""));
}
function $u(t) {
  return function() {
    this.textContent = t;
  };
}
function Au(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Tu(t) {
  return this.tween("text", typeof t == "function" ? Au(Ae(this, "text", t)) : $u(t == null ? "" : t + ""));
}
function Su(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Pu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Su(i)), n;
  }
  return r._value = t, r;
}
function Eu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Pu(t));
}
function Nu() {
  for (var t = this._name, n = this._id, e = ai(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var f = H(c, n);
        Sn(c, t, e, u, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function Ou() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = K(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && a();
  });
}
var zu = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ai() {
  return ++zu;
}
var Z = Ut.prototype;
Q.prototype = {
  constructor: Q,
  select: hu,
  selectAll: du,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: au,
  merge: ou,
  selection: gu,
  transition: Nu,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: cu,
  attr: Xs,
  attrTween: Vs,
  style: vu,
  styleTween: Mu,
  text: Tu,
  textTween: Eu,
  remove: lu,
  tween: ks,
  delay: Js,
  duration: tu,
  ease: eu,
  easeVarying: iu,
  end: Ou,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Cu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Iu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Cu
};
function Ru(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function ku(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = ai(), (e = Iu).time = Tn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Sn(c, t, n, u, o, e || Ru(c, n));
  return new Q(r, this._parents, t, n);
}
Ut.prototype.interrupt = Cs;
Ut.prototype.transition = ku;
const oe = Math.PI, se = 2 * oe, ot = 1e-6, Fu = se - ot;
function oi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Du(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return oi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class si {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? oi : Du(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - n, u = i - e, f = o - n, h = s - e, l = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (l > ot) if (!(Math.abs(h * c - u * f) > ot) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, _ = c * c + u * u, w = p * p + d * d, y = Math.sqrt(_), x = Math.sqrt(l), $ = a * Math.tan((oe - Math.acos((_ + l - w) / (2 * y * x))) / 2), g = $ / x, b = $ / y;
      Math.abs(g - 1) > ot && this._append`L${n + g * f},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > f * d)},${this._x1 = n + b * c},${this._y1 = e + b * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = n + s, f = e + c, h = 1 ^ o, l = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > ot || Math.abs(this._y1 - f) > ot) && this._append`L${u},${f}`, r && (l < 0 && (l = l % se + se), l > Fu ? this._append`A${r},${r},0,1,${h},${n - s},${e - c}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : l > ot && this._append`A${r},${r},0,${+(l >= oe)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new si();
}
q.prototype = si.prototype;
function Lu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function yn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function At(t) {
  return t = yn(Math.abs(t)), t ? t[1] : NaN;
}
function Hu(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function qu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Bu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _n(t) {
  if (!(n = Bu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Te({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
_n.prototype = Te.prototype;
function Te(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Te.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ui;
function Uu(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (ui = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + yn(t, Math.max(0, n + a - 1))[0];
}
function tr(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const nr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Lu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => tr(t * 100, n),
  r: tr,
  s: Uu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function er(t) {
  return t;
}
var rr = Array.prototype.map, ir = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? er : Hu(rr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? er : qu(rr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = _n(h);
    var l = h.fill, p = h.align, d = h.sign, _ = h.symbol, w = h.zero, y = h.width, x = h.comma, $ = h.precision, g = h.trim, b = h.type;
    b === "n" ? (x = !0, b = "g") : nr[b] || ($ === void 0 && ($ = 12), g = !0, b = "g"), (w || l === "0" && p === "=") && (w = !0, l = "0", p = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(b) ? o : "", N = nr[b], B = /[defgprs%]/.test(b);
    $ = $ === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(v) {
      var X = T, O = P, k, Vt, rt;
      if (b === "c")
        O = N(v) + O, v = "";
      else {
        v = +v;
        var at = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? c : N(Math.abs(v), $), g && (v = Xu(v)), at && +v == 0 && d !== "+" && (at = !1), X = (at ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + X, O = (b === "s" ? ir[8 + ui / 3] : "") + O + (at && d === "(" ? ")" : ""), B) {
          for (k = -1, Vt = v.length; ++k < Vt; )
            if (rt = v.charCodeAt(k), 48 > rt || rt > 57) {
              O = (rt === 46 ? i + v.slice(k + 1) : v.slice(k)) + O, v = v.slice(0, k);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var mt = X.length + v.length + O.length, R = mt < y ? new Array(y - mt + 1).join(l) : "";
      switch (x && w && (v = n(R + v, R.length ? y - O.length : 1 / 0), R = ""), p) {
        case "<":
          v = X + v + O + R;
          break;
        case "=":
          v = X + R + v + O;
          break;
        case "^":
          v = R.slice(0, mt = R.length >> 1) + X + v + O + R.slice(mt);
          break;
        default:
          v = R + X + v + O;
          break;
      }
      return a(v);
    }
    return V.toString = function() {
      return h + "";
    }, V;
  }
  function f(h, l) {
    var p = u((h = _n(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(At(l) / 3))) * 3, _ = Math.pow(10, -d), w = ir[8 + d / 3];
    return function(y) {
      return p(_ * y) + w;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var tn, Pn, ci;
Yu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Yu(t) {
  return tn = Gu(t), Pn = tn.format, ci = tn.formatPrefix, tn;
}
function Ku(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Vu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(n) / 3))) * 3 - At(Math.abs(t)));
}
function Zu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, At(n) - At(t)) + 1;
}
function Wu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Ju(t) {
  return function() {
    return t;
  };
}
function Qu(t) {
  return +t;
}
var ar = [0, 1];
function bt(t) {
  return t;
}
function ue(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ju(isNaN(n) ? NaN : 0.5);
}
function ju(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function tc(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = ue(i, r), a = e(o, a)) : (r = ue(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function nc(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = ue(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var c = Qi(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function ec(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rc() {
  var t = ar, n = ar, e = $n, r, i, a, o = bt, s, c, u;
  function f() {
    var l = Math.min(t.length, n.length);
    return o !== bt && (o = ju(t[0], t[l - 1])), s = l > 2 ? nc : tc, c = u = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? a : (c || (c = s(t.map(r), n, e)))(r(o(l)));
  }
  return h.invert = function(l) {
    return o(i((u || (u = s(n, t.map(r), F)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, Qu), f()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (n = Array.from(l), f()) : n.slice();
  }, h.rangeRound = function(l) {
    return n = Array.from(l), e = ms, f();
  }, h.clamp = function(l) {
    return arguments.length ? (o = l ? !0 : bt, f()) : o !== bt;
  }, h.interpolate = function(l) {
    return arguments.length ? (e = l, f()) : e;
  }, h.unknown = function(l) {
    return arguments.length ? (a = l, h) : a;
  }, function(l, p) {
    return r = l, i = p, f();
  };
}
function ic() {
  return rc()(bt, bt);
}
function ac(t, n, e, r) {
  var i = ra(t, n, e), a;
  switch (r = _n(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Vu(i, o)) && (r.precision = a), ci(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Zu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Ku(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pn(r);
}
function oc(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ea(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ac(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, f = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); f-- > 0; ) {
      if (u = Wn(o, s, e), u === c)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function L() {
  var t = ic();
  return t.copy = function() {
    return ec(t, L());
  }, Wu.apply(t, arguments), oc(t);
}
function Ct(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ct.prototype = {
  constructor: Ct,
  scale: function(t) {
    return t === 1 ? this : new Ct(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ct(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ct.prototype;
var fi = typeof global == "object" && global && global.Object === Object && global, sc = typeof self == "object" && self && self.Object === Object && self, tt = fi || sc || Function("return this")(), G = tt.Symbol, li = Object.prototype, uc = li.hasOwnProperty, cc = li.toString, Nt = G ? G.toStringTag : void 0;
function fc(t) {
  var n = uc.call(t, Nt), e = t[Nt];
  try {
    t[Nt] = void 0;
    var r = !0;
  } catch {
  }
  var i = cc.call(t);
  return r && (n ? t[Nt] = e : delete t[Nt]), i;
}
var lc = Object.prototype, hc = lc.toString;
function dc(t) {
  return hc.call(t);
}
var pc = "[object Null]", gc = "[object Undefined]", or = G ? G.toStringTag : void 0;
function St(t) {
  return t == null ? t === void 0 ? gc : pc : or && or in Object(t) ? fc(t) : dc(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var yc = "[object Symbol]";
function En(t) {
  return typeof t == "symbol" || pt(t) && St(t) == yc;
}
function Yt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var I = Array.isArray, sr = G ? G.prototype : void 0, ur = sr ? sr.toString : void 0;
function hi(t) {
  if (typeof t == "string")
    return t;
  if (I(t))
    return Yt(t, hi) + "";
  if (En(t))
    return ur ? ur.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var _c = /\s/;
function mc(t) {
  for (var n = t.length; n-- && _c.test(t.charAt(n)); )
    ;
  return n;
}
var bc = /^\s+/;
function vc(t) {
  return t && t.slice(0, mc(t) + 1).replace(bc, "");
}
function j(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var cr = NaN, wc = /^[-+]0x[0-9a-f]+$/i, xc = /^0b[01]+$/i, Mc = /^0o[0-7]+$/i, $c = parseInt;
function Ac(t) {
  if (typeof t == "number")
    return t;
  if (En(t))
    return cr;
  if (j(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = vc(t);
  var e = xc.test(t);
  return e || Mc.test(t) ? $c(t.slice(2), e ? 2 : 8) : wc.test(t) ? cr : +t;
}
var Tc = 1 / 0, Sc = 17976931348623157e292;
function Gn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ac(t), t === Tc || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Sc;
  }
  return t === t ? t : 0;
}
function Nn(t) {
  return t;
}
var Pc = "[object AsyncFunction]", Ec = "[object Function]", Nc = "[object GeneratorFunction]", Oc = "[object Proxy]";
function di(t) {
  if (!j(t))
    return !1;
  var n = St(t);
  return n == Ec || n == Nc || n == Pc || n == Oc;
}
var Yn = tt["__core-js_shared__"], fr = function() {
  var t = /[^.]+$/.exec(Yn && Yn.keys && Yn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function zc(t) {
  return !!fr && fr in t;
}
var Cc = Function.prototype, Ic = Cc.toString;
function yt(t) {
  if (t != null) {
    try {
      return Ic.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Rc = /[\\^$.*+?()[\]{}|]/g, kc = /^\[object .+?Constructor\]$/, Fc = Function.prototype, Dc = Object.prototype, Lc = Fc.toString, Hc = Dc.hasOwnProperty, qc = RegExp(
  "^" + Lc.call(Hc).replace(Rc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bc(t) {
  if (!j(t) || zc(t))
    return !1;
  var n = di(t) ? qc : kc;
  return n.test(yt(t));
}
function Xc(t, n) {
  return t == null ? void 0 : t[n];
}
function _t(t, n) {
  var e = Xc(t, n);
  return Bc(e) ? e : void 0;
}
var ce = _t(tt, "WeakMap");
function Uc(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Gc = 800, Yc = 16, Kc = Date.now;
function Vc(t) {
  var n = 0, e = 0;
  return function() {
    var r = Kc(), i = Yc - (r - e);
    if (e = r, i > 0) {
      if (++n >= Gc)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Zc(t) {
  return function() {
    return t;
  };
}
var mn = function() {
  try {
    var t = _t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Wc = mn ? function(t, n) {
  return mn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zc(n),
    writable: !0
  });
} : Nn, Jc = Vc(Wc);
function Qc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var jc = 9007199254740991, tf = /^(?:0|[1-9]\d*)$/;
function On(t, n) {
  var e = typeof t;
  return n = n ?? jc, !!n && (e == "number" || e != "symbol" && tf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function nf(t, n, e) {
  n == "__proto__" && mn ? mn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function zn(t, n) {
  return t === n || t !== t && n !== n;
}
var ef = Object.prototype, rf = ef.hasOwnProperty;
function af(t, n, e) {
  var r = t[n];
  (!(rf.call(t, n) && zn(r, e)) || e === void 0 && !(n in t)) && nf(t, n, e);
}
var lr = Math.max;
function of(t, n, e) {
  return n = lr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = lr(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), Uc(t, this, s);
  };
}
function sf(t, n) {
  return Jc(of(t, n, Nn), t + "");
}
var uf = 9007199254740991;
function Se(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= uf;
}
function Pt(t) {
  return t != null && Se(t.length) && !di(t);
}
function cf(t, n, e) {
  if (!j(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Pt(e) && On(n, e.length) : r == "string" && n in e) ? zn(e[n], t) : !1;
}
var ff = Object.prototype;
function pi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ff;
  return t === e;
}
function gi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var lf = "[object Arguments]";
function hr(t) {
  return pt(t) && St(t) == lf;
}
var yi = Object.prototype, hf = yi.hasOwnProperty, df = yi.propertyIsEnumerable, Pe = hr(/* @__PURE__ */ function() {
  return arguments;
}()) ? hr : function(t) {
  return pt(t) && hf.call(t, "callee") && !df.call(t, "callee");
};
function pf() {
  return !1;
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, dr = _i && typeof module == "object" && module && !module.nodeType && module, gf = dr && dr.exports === _i, pr = gf ? tt.Buffer : void 0, yf = pr ? pr.isBuffer : void 0, fe = yf || pf, _f = "[object Arguments]", mf = "[object Array]", bf = "[object Boolean]", vf = "[object Date]", wf = "[object Error]", xf = "[object Function]", Mf = "[object Map]", $f = "[object Number]", Af = "[object Object]", Tf = "[object RegExp]", Sf = "[object Set]", Pf = "[object String]", Ef = "[object WeakMap]", Nf = "[object ArrayBuffer]", Of = "[object DataView]", zf = "[object Float32Array]", Cf = "[object Float64Array]", If = "[object Int8Array]", Rf = "[object Int16Array]", kf = "[object Int32Array]", Ff = "[object Uint8Array]", Df = "[object Uint8ClampedArray]", Lf = "[object Uint16Array]", Hf = "[object Uint32Array]", M = {};
M[zf] = M[Cf] = M[If] = M[Rf] = M[kf] = M[Ff] = M[Df] = M[Lf] = M[Hf] = !0;
M[_f] = M[mf] = M[Nf] = M[bf] = M[Of] = M[vf] = M[wf] = M[xf] = M[Mf] = M[$f] = M[Af] = M[Tf] = M[Sf] = M[Pf] = M[Ef] = !1;
function qf(t) {
  return pt(t) && Se(t.length) && !!M[St(t)];
}
function Bf(t) {
  return function(n) {
    return t(n);
  };
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, It = mi && typeof module == "object" && module && !module.nodeType && module, Xf = It && It.exports === mi, Kn = Xf && fi.process, gr = function() {
  try {
    var t = It && It.require && It.require("util").types;
    return t || Kn && Kn.binding && Kn.binding("util");
  } catch {
  }
}(), yr = gr && gr.isTypedArray, bi = yr ? Bf(yr) : qf, Uf = Object.prototype, Gf = Uf.hasOwnProperty;
function vi(t, n) {
  var e = I(t), r = !e && Pe(t), i = !e && !r && fe(t), a = !e && !r && !i && bi(t), o = e || r || i || a, s = o ? gi(t.length, String) : [], c = s.length;
  for (var u in t)
    (n || Gf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    On(u, c))) && s.push(u);
  return s;
}
function wi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Yf = wi(Object.keys, Object), Kf = Object.prototype, Vf = Kf.hasOwnProperty;
function Zf(t) {
  if (!pi(t))
    return Yf(t);
  var n = [];
  for (var e in Object(t))
    Vf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Cn(t) {
  return Pt(t) ? vi(t) : Zf(t);
}
function Wf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function jf(t) {
  if (!j(t))
    return Wf(t);
  var n = pi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Qf.call(t, r)) || e.push(r);
  return e;
}
function tl(t) {
  return Pt(t) ? vi(t, !0) : jf(t);
}
var nl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, el = /^\w*$/;
function Ee(t, n) {
  if (I(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || En(t) ? !0 : el.test(t) || !nl.test(t) || n != null && t in Object(n);
}
var Bt = _t(Object, "create");
function rl() {
  this.__data__ = Bt ? Bt(null) : {}, this.size = 0;
}
function il(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var al = "__lodash_hash_undefined__", ol = Object.prototype, sl = ol.hasOwnProperty;
function ul(t) {
  var n = this.__data__;
  if (Bt) {
    var e = n[t];
    return e === al ? void 0 : e;
  }
  return sl.call(n, t) ? n[t] : void 0;
}
var cl = Object.prototype, fl = cl.hasOwnProperty;
function ll(t) {
  var n = this.__data__;
  return Bt ? n[t] !== void 0 : fl.call(n, t);
}
var hl = "__lodash_hash_undefined__";
function dl(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Bt && n === void 0 ? hl : n, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = rl;
gt.prototype.delete = il;
gt.prototype.get = ul;
gt.prototype.has = ll;
gt.prototype.set = dl;
function pl() {
  this.__data__ = [], this.size = 0;
}
function In(t, n) {
  for (var e = t.length; e--; )
    if (zn(t[e][0], n))
      return e;
  return -1;
}
var gl = Array.prototype, yl = gl.splice;
function _l(t) {
  var n = this.__data__, e = In(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : yl.call(n, e, 1), --this.size, !0;
}
function ml(t) {
  var n = this.__data__, e = In(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function bl(t) {
  return In(this.__data__, t) > -1;
}
function vl(t, n) {
  var e = this.__data__, r = In(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function nt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = pl;
nt.prototype.delete = _l;
nt.prototype.get = ml;
nt.prototype.has = bl;
nt.prototype.set = vl;
var Xt = _t(tt, "Map");
function wl() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (Xt || nt)(),
    string: new gt()
  };
}
function xl(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Rn(t, n) {
  var e = t.__data__;
  return xl(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Ml(t) {
  var n = Rn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function $l(t) {
  return Rn(this, t).get(t);
}
function Al(t) {
  return Rn(this, t).has(t);
}
function Tl(t, n) {
  var e = Rn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = wl;
et.prototype.delete = Ml;
et.prototype.get = $l;
et.prototype.has = Al;
et.prototype.set = Tl;
var Sl = "Expected a function";
function Ne(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Sl);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ne.Cache || et)(), e;
}
Ne.Cache = et;
var Pl = 500;
function El(t) {
  var n = Ne(t, function(r) {
    return e.size === Pl && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Nl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ol = /\\(\\)?/g, zl = El(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Nl, function(e, r, i, a) {
    n.push(i ? a.replace(Ol, "$1") : r || e);
  }), n;
});
function kn(t) {
  return t == null ? "" : hi(t);
}
function Fn(t, n) {
  return I(t) ? t : Ee(t, n) ? [t] : zl(kn(t));
}
function Kt(t) {
  if (typeof t == "string" || En(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Oe(t, n) {
  n = Fn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Kt(n[e++])];
  return e && e == r ? t : void 0;
}
function Cl(t, n, e) {
  var r = t == null ? void 0 : Oe(t, n);
  return r === void 0 ? e : r;
}
function ze(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var _r = G ? G.isConcatSpreadable : void 0;
function Il(t) {
  return I(t) || Pe(t) || !!(_r && t && t[_r]);
}
function Rl(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Il), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? ze(i, s) : i[i.length] = s;
  }
  return i;
}
function kl(t) {
  var n = t == null ? 0 : t.length;
  return n ? Rl(t) : [];
}
var Fl = wi(Object.getPrototypeOf, Object);
function Dl(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Ll(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Dl(t, n, e);
}
var Hl = "\\ud800-\\udfff", ql = "\\u0300-\\u036f", Bl = "\\ufe20-\\ufe2f", Xl = "\\u20d0-\\u20ff", Ul = ql + Bl + Xl, Gl = "\\ufe0e\\ufe0f", Yl = "\\u200d", Kl = RegExp("[" + Yl + Hl + Ul + Gl + "]");
function xi(t) {
  return Kl.test(t);
}
function Vl(t) {
  return t.split("");
}
var Mi = "\\ud800-\\udfff", Zl = "\\u0300-\\u036f", Wl = "\\ufe20-\\ufe2f", Jl = "\\u20d0-\\u20ff", Ql = Zl + Wl + Jl, jl = "\\ufe0e\\ufe0f", th = "[" + Mi + "]", le = "[" + Ql + "]", he = "\\ud83c[\\udffb-\\udfff]", nh = "(?:" + le + "|" + he + ")", $i = "[^" + Mi + "]", Ai = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", eh = "\\u200d", Si = nh + "?", Pi = "[" + jl + "]?", rh = "(?:" + eh + "(?:" + [$i, Ai, Ti].join("|") + ")" + Pi + Si + ")*", ih = Pi + Si + rh, ah = "(?:" + [$i + le + "?", le, Ai, Ti, th].join("|") + ")", oh = RegExp(he + "(?=" + he + ")|" + ah + ih, "g");
function sh(t) {
  return t.match(oh) || [];
}
function uh(t) {
  return xi(t) ? sh(t) : Vl(t);
}
function ch(t) {
  return function(n) {
    n = kn(n);
    var e = xi(n) ? uh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Ll(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var fh = ch("toUpperCase");
function lh(t) {
  return fh(kn(t).toLowerCase());
}
function hh() {
  this.__data__ = new nt(), this.size = 0;
}
function dh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function ph(t) {
  return this.__data__.get(t);
}
function gh(t) {
  return this.__data__.has(t);
}
var yh = 200;
function _h(t, n) {
  var e = this.__data__;
  if (e instanceof nt) {
    var r = e.__data__;
    if (!Xt || r.length < yh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new et(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function J(t) {
  var n = this.__data__ = new nt(t);
  this.size = n.size;
}
J.prototype.clear = hh;
J.prototype.delete = dh;
J.prototype.get = ph;
J.prototype.has = gh;
J.prototype.set = _h;
function Ce(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Ei() {
  return [];
}
var mh = Object.prototype, bh = mh.propertyIsEnumerable, mr = Object.getOwnPropertySymbols, Ni = mr ? function(t) {
  return t == null ? [] : (t = Object(t), Ce(mr(t), function(n) {
    return bh.call(t, n);
  }));
} : Ei, vh = Object.getOwnPropertySymbols, wh = vh ? function(t) {
  for (var n = []; t; )
    ze(n, Ni(t)), t = Fl(t);
  return n;
} : Ei;
function Oi(t, n, e) {
  var r = n(t);
  return I(t) ? r : ze(r, e(t));
}
function br(t) {
  return Oi(t, Cn, Ni);
}
function xh(t) {
  return Oi(t, tl, wh);
}
var de = _t(tt, "DataView"), pe = _t(tt, "Promise"), ge = _t(tt, "Set"), vr = "[object Map]", Mh = "[object Object]", wr = "[object Promise]", xr = "[object Set]", Mr = "[object WeakMap]", $r = "[object DataView]", $h = yt(de), Ah = yt(Xt), Th = yt(pe), Sh = yt(ge), Ph = yt(ce), W = St;
(de && W(new de(new ArrayBuffer(1))) != $r || Xt && W(new Xt()) != vr || pe && W(pe.resolve()) != wr || ge && W(new ge()) != xr || ce && W(new ce()) != Mr) && (W = function(t) {
  var n = St(t), e = n == Mh ? t.constructor : void 0, r = e ? yt(e) : "";
  if (r)
    switch (r) {
      case $h:
        return $r;
      case Ah:
        return vr;
      case Th:
        return wr;
      case Sh:
        return xr;
      case Ph:
        return Mr;
    }
  return n;
});
var Ar = tt.Uint8Array, Eh = "__lodash_hash_undefined__";
function Nh(t) {
  return this.__data__.set(t, Eh), this;
}
function Oh(t) {
  return this.__data__.has(t);
}
function bn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new et(); ++n < e; )
    this.add(t[n]);
}
bn.prototype.add = bn.prototype.push = Nh;
bn.prototype.has = Oh;
function zh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Ch(t, n) {
  return t.has(n);
}
var Ih = 1, Rh = 2;
function zi(t, n, e, r, i, a) {
  var o = e & Ih, s = t.length, c = n.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), f = a.get(n);
  if (u && f)
    return u == n && f == t;
  var h = -1, l = !0, p = e & Rh ? new bn() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var w = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      l = !1;
      break;
    }
    if (p) {
      if (!zh(n, function(y, x) {
        if (!Ch(p, x) && (d === y || i(d, y, e, r, a)))
          return p.push(x);
      })) {
        l = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      l = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), l;
}
function Ci(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function kh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Fh = 1, Dh = 2, Lh = "[object Boolean]", Hh = "[object Date]", qh = "[object Error]", Bh = "[object Map]", Xh = "[object Number]", Uh = "[object RegExp]", Gh = "[object Set]", Yh = "[object String]", Kh = "[object Symbol]", Vh = "[object ArrayBuffer]", Zh = "[object DataView]", Tr = G ? G.prototype : void 0, Vn = Tr ? Tr.valueOf : void 0;
function Wh(t, n, e, r, i, a, o) {
  switch (e) {
    case Zh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Vh:
      return !(t.byteLength != n.byteLength || !a(new Ar(t), new Ar(n)));
    case Lh:
    case Hh:
    case Xh:
      return zn(+t, +n);
    case qh:
      return t.name == n.name && t.message == n.message;
    case Uh:
    case Yh:
      return t == n + "";
    case Bh:
      var s = Ci;
    case Gh:
      var c = r & Fh;
      if (s || (s = kh), t.size != n.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Dh, o.set(t, n);
      var f = zi(s(t), s(n), r, i, a, o);
      return o.delete(t), f;
    case Kh:
      if (Vn)
        return Vn.call(t) == Vn.call(n);
  }
  return !1;
}
var Jh = 1, Qh = Object.prototype, jh = Qh.hasOwnProperty;
function td(t, n, e, r, i, a) {
  var o = e & Jh, s = br(t), c = s.length, u = br(n), f = u.length;
  if (c != f && !o)
    return !1;
  for (var h = c; h--; ) {
    var l = s[h];
    if (!(o ? l in n : jh.call(n, l)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < c; ) {
    l = s[h];
    var y = t[l], x = n[l];
    if (r)
      var $ = o ? r(x, y, l, n, t, a) : r(y, x, l, t, n, a);
    if (!($ === void 0 ? y === x || i(y, x, e, r, a) : $)) {
      _ = !1;
      break;
    }
    w || (w = l == "constructor");
  }
  if (_ && !w) {
    var g = t.constructor, b = n.constructor;
    g != b && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof b == "function" && b instanceof b) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var nd = 1, Sr = "[object Arguments]", Pr = "[object Array]", nn = "[object Object]", ed = Object.prototype, Er = ed.hasOwnProperty;
function rd(t, n, e, r, i, a) {
  var o = I(t), s = I(n), c = o ? Pr : W(t), u = s ? Pr : W(n);
  c = c == Sr ? nn : c, u = u == Sr ? nn : u;
  var f = c == nn, h = u == nn, l = c == u;
  if (l && fe(t)) {
    if (!fe(n))
      return !1;
    o = !0, f = !1;
  }
  if (l && !f)
    return a || (a = new J()), o || bi(t) ? zi(t, n, e, r, i, a) : Wh(t, n, c, e, r, i, a);
  if (!(e & nd)) {
    var p = f && Er.call(t, "__wrapped__"), d = h && Er.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new J()), i(_, w, e, r, a);
    }
  }
  return l ? (a || (a = new J()), td(t, n, e, r, i, a)) : !1;
}
function Ie(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !pt(t) && !pt(n) ? t !== t && n !== n : rd(t, n, e, r, Ie, i);
}
var id = 1, ad = 2;
function od(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var f = new J(), h;
      if (!(h === void 0 ? Ie(u, c, id | ad, r, f) : h))
        return !1;
    }
  }
  return !0;
}
function Ii(t) {
  return t === t && !j(t);
}
function sd(t) {
  for (var n = Cn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ii(i)];
  }
  return n;
}
function Ri(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function ud(t) {
  var n = sd(t);
  return n.length == 1 && n[0][2] ? Ri(n[0][0], n[0][1]) : function(e) {
    return e === t || od(e, t, n);
  };
}
function cd(t, n) {
  return t != null && n in Object(t);
}
function ki(t, n, e) {
  n = Fn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Kt(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Se(i) && On(o, i) && (I(t) || Pe(t)));
}
function fd(t, n) {
  return t != null && ki(t, n, cd);
}
var ld = 1, hd = 2;
function dd(t, n) {
  return Ee(t) && Ii(n) ? Ri(Kt(t), n) : function(e) {
    var r = Cl(e, t);
    return r === void 0 && r === n ? fd(e, t) : Ie(n, r, ld | hd);
  };
}
function Fi(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function pd(t) {
  return function(n) {
    return Oe(n, t);
  };
}
function gd(t) {
  return Ee(t) ? Fi(Kt(t)) : pd(t);
}
function Dn(t) {
  return typeof t == "function" ? t : t == null ? Nn : typeof t == "object" ? I(t) ? dd(t[0], t[1]) : ud(t) : gd(t);
}
function yd(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var c = o[++i];
      if (e(a[c], c, a) === !1)
        break;
    }
    return n;
  };
}
var _d = yd();
function md(t, n) {
  return t && _d(t, n, Cn);
}
function bd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Pt(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Re = bd(md);
function vd(t) {
  return pt(t) && Pt(t);
}
function wd(t) {
  return typeof t == "function" ? t : Nn;
}
function Tt(t, n) {
  var e = I(t) ? Qc : Re;
  return e(t, wd(n));
}
function xd(t, n) {
  return Yt(n, function(e) {
    return [e, t[e]];
  });
}
function Md(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var $d = "[object Map]", Ad = "[object Set]";
function Td(t) {
  return function(n) {
    var e = W(n);
    return e == $d ? Ci(n) : e == Ad ? Md(n) : xd(n, t(n));
  };
}
var Sd = Td(Cn);
function Pd(t, n) {
  var e = [];
  return Re(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function Ed(t, n) {
  var e = I(t) ? Ce : Pd;
  return e(t, Dn(n));
}
function Nd(t, n) {
  var e = -1, r = Pt(t) ? Array(t.length) : [];
  return Re(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function vn(t, n) {
  var e = I(t) ? Yt : Nd;
  return e(t, Dn(n));
}
var Od = Object.prototype, zd = Od.hasOwnProperty;
function Cd(t, n) {
  return t != null && zd.call(t, n);
}
function Id(t, n) {
  return t != null && ki(t, n, Cd);
}
function Rd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
function kd(t, n, e, r) {
  if (!j(t))
    return t;
  n = Fn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Kt(n[i]), u = e;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var f = s[c];
      u = void 0, u === void 0 && (u = j(f) ? f : On(n[i + 1]) ? [] : {});
    }
    af(s, c, u), s = s[c];
  }
  return t;
}
function Fd(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Oe(t, o);
    e(s, o) && kd(a, Fn(o, t), s);
  }
  return a;
}
function Dd(t, n) {
  if (t == null)
    return {};
  var e = Yt(xh(t), function(r) {
    return [r];
  });
  return n = Dn(n), Fd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Ld = Math.ceil, Hd = Math.max;
function qd(t, n, e, r) {
  for (var i = -1, a = Hd(Ld((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function Bd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && cf(n, e, r) && (e = r = void 0), n = Gn(n), e === void 0 ? (e = n, n = 0) : e = Gn(e), r = r === void 0 ? n < e ? 1 : -1 : Gn(r), qd(n, e, r);
  };
}
var ke = Bd();
function Xd() {
  var t = arguments, n = kn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Nr(t, n) {
  return t && t.length ? Rd(t, Dn(n)) : 0;
}
var Ud = Math.max;
function Gd(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Ce(t, function(e) {
    if (vd(e))
      return n = Ud(e.length, n), !0;
  }), gi(n, function(e) {
    return Yt(t, Fi(e));
  });
}
var wn = sf(Gd);
const Yd = (t, n, e = 12, r = 12) => {
  const i = L().domain([0, e]).range([0, t]), a = L().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return ke((e + 1) * (r + 1)).map(function(c) {
        return { m: c % (e + 1), n: Math.floor(c / (e + 1)), x: i(c % (e + 1)), y: a(Math.floor(c / (e + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const f = kl(vn(u, function(h) {
        return vn(
          c,
          function(l) {
            return { x: i(l), y: a(h) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, Kd = "_widget_18g36_1", Vd = "_label_18g36_19", Zd = "_lit_18g36_24", Wd = "_button_18g36_29", Jd = "_symbol_18g36_29", Qd = "_radio_18g36_29", jd = "_radiobutton_18g36_29", t0 = "_selected_18g36_35", n0 = "_toggle_18g36_35", e0 = "_slider_18g36_44", r0 = "_track_18g36_44", i0 = "_track_overlay_18g36_48", a0 = "_handle_18g36_55", m = {
  widget: Kd,
  label: Vd,
  lit: Zd,
  button: Wd,
  symbol: Jd,
  radio: Qd,
  radiobutton: jd,
  selected: t0,
  toggle: n0,
  slider: e0,
  track: r0,
  track_overlay: i0,
  handle: a0
}, Di = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Fe = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, o0 = (t = 1) => {
  const n = q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, s0 = (t = 1) => {
  const n = q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, u0 = (t = 1) => {
  const n = q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, c0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = q();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, f0 = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, l0 = (t = 1) => {
  const n = q(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, h0 = (t = 1) => {
  const n = q(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(c[0] + u[0], c[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, d0 = (t = 1) => {
  var n = q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, p0 = (t = 1) => {
  const n = q(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ye = (t) => {
  switch (t) {
    case "play":
      return o0;
    case "forward":
      return s0;
    case "back":
      return u0;
    case "pause":
      return c0;
    case "reload":
      return f0;
    case "capture":
      return l0;
    case "rewind":
      return h0;
    case "stop":
      return d0;
    case "push":
      return p0;
  }
}, De = () => {
  const t = "button";
  var n = Di(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, f = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % f.length, u(), E(this.parentNode).select("." + m.symbol).attr("d", ye(f[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % f.length, u(), d.select("#button_" + n).select("." + m.symbol).attr("d", ye(f[h])(r * e));
    }
  };
}, g0 = () => {
  const t = "slider", n = Pn(".3f");
  var e = Di(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, f = function(y) {
  }, h = function(y) {
  }, l = [0, 1], p = 0, d = null, _ = L().domain(l).range([0, r]).clamp(!0);
  const w = function(y, x, $ = l) {
    const g = y.select("#slider_" + e);
    _.domain($), p = x, g.selectAll("." + m.handle).transition().attr("cx", _(x)), o && g.select("." + m.label).text(d + " = " + n(p)), f(), h();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    range: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    reset: w,
    click: w
  };
}, y0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = E(a).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(m.lit, !0), E(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(m.lit, !1), E(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), o.append("path").attr("d", ye(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const c = Fe(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", m.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Li = (t, n) => {
  const e = q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, _0 = (t, n) => {
  const e = Pn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(c).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Li(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", m.track_overlay).on("click", function(d) {
    const _ = Qn(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", o(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Zo().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", o(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var f, h, l, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, l = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", l).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + h + ")"), c;
}, m0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(o).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Li(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Fe(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, b0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ia(o), c = L().domain([0, o - 1]).range([0, t.size()]), u = L().domain([0, o - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), l = E(f).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + u(w) + ")" : "translate(" + c(w) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = l.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = l.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = l.append("circle").attr("r", i / 2), d = l.append("circle").attr("r", a / 2)), p.attr("class", m.background).on("mouseover", function() {
    E(this).classed(m.lit, !0), E(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(m.lit, !1), E(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((w) => w == t.value()).classed(m.selected, !0), l.on("click", t.click);
  const _ = Fe(t.buttonsize(), t.buttonsize(), r);
  return l.append("text").attr("class", m.label).text(function(w, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), f;
}, Or = (t, n) => {
  switch (t.type) {
    case "button":
      return y0(t);
    case "slider":
      return _0(t);
    case "radio":
      return b0(t);
    case "toggle":
      return m0(t);
  }
}, v0 = (t, n) => {
  const e = Yd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = E("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, A = {
  widgets: {
    //		fontsize:20,
    slider_girth: 16,
    slider_knob: 14,
    slider_size: 400,
    slider_gap: 2,
    slider_anchor: { x: 1, y: 7.5 },
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    cartoon_anchor: { x: 8, y: 3.5 },
    cartoon_scale: 10
  },
  simulation: {
    delay: 10,
    colormap: "gray"
  }
}, S = {
  dt: 0.1,
  N: 50,
  epsilon: 0.01,
  // initial noise
  inner_radius: {
    range: [1, 5],
    default: 3.5
  },
  outer_radius: {
    range: [5.5, 10],
    default: 7
  },
  interaction_steepness: {
    range: [5, 20],
    default: 15
  }
}, w0 = (t) => vn(Sd(t), (n) => (n[1].id = n[0], n[1].label = Xd(lh(n[0]), /_/g, " "), n[1])), x0 = (t, n) => Tt(t, (e, r) => e.widget = n[r]), Hi = (t) => Dd(t, (n) => Id(n, "range"));
L().domain([0, 360]).range([0, 2 * Math.PI]);
L().range([0, 360]).domain([0, 2 * Math.PI]);
const M0 = (t, n, e) => {
  var r = Math.abs(t.x - n.x), i = Math.abs(t.y - n.y);
  return r > e / 2 && (r = e - r), i > e / 2 && (i = e - i), Math.sqrt(r ** 2 + i ** 2);
}, $0 = (t, n) => {
  var e = Math.exp(-n * t);
  return (1 - e) / (1 + e);
}, A0 = "_innercircle_1bmju_2", T0 = "_outercircle_1bmju_8", vt = {
  innercircle: A0,
  outercircle: T0
}, qi = w0(Hi(S)), sn = vn(
  qi,
  (t) => g0().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob)
);
x0(qi, sn);
const it = De().actions(["play", "pause"]), Ln = De().actions(["back"]), Hn = De().actions(["rewind"]), S0 = [it, Ln, Hn];
var Rt;
const P0 = (t, n) => {
  const e = n.position(A.widgets.cartoon_anchor.x, A.widgets.cartoon_anchor.y);
  Rt = t.append("g").attr("id", "cartoon").attr("transform", "translate(" + e.x + "," + e.y + ")"), Rt.selectAll("." + vt.outercircle).data([S.outer_radius]).enter().append("circle").attr("class", vt.outercircle).attr("r", (i) => A.widgets.cartoon_scale * i.widget.value()), Rt.selectAll("." + vt.innercircle).data([S.inner_radius]).enter().append("circle").attr("class", vt.innercircle).attr("r", (i) => A.widgets.cartoon_scale * i.widget.value());
  const r = n.position(A.widgets.slider_anchor.x, ke(sn.length).map((i) => A.widgets.slider_anchor.y + A.widgets.slider_gap * i));
  sn.forEach((i, a) => i.position(r[a])), it.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), Hn.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), Ln.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(sn).enter().append(Or), t.selectAll(null).data(S0).enter().append(Or);
}, E0 = (t) => {
  Tt(Hi(S), (n) => n.widget.reset(t, n.default));
};
function Bi(t, n) {
  return [t % n, Math.floor(t / n)];
}
const N0 = {
  n4: wn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: wn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Zn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return N0[r].forEach((a) => {
    var o = a[1], s = a[0];
    const c = Bi(t, n), u = c[0], f = c[1], h = u + s, l = f + o;
    (e == "dirichlet" ? !(o == 0 && s == 0) && h < n && l < n && h >= 0 && l >= 0 : !(o == 0 && s == 0)) && i.push(n * ((l + n) % n) + (h + n) % n);
  }), i;
}
const O0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var a = e / i, o = a;
  const s = ke(i * i).map(function(l) {
    const p = Bi(l, i);
    return {
      m: p[0],
      n: p[1],
      x: a * (p[0] + 0.5) - e / 2,
      y: o * (p[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(l, p) {
    l.neighbors = Zn(p, i, n, r).map((d) => s[d]), l.cell = () => [
      { x: l.x + a / 2, y: l.y + o / 2 },
      { x: l.x - a / 2, y: l.y + o / 2 },
      { x: l.x - a / 2, y: l.y - o / 2 },
      { x: l.x + a / 2, y: l.y - o / 2 },
      { x: l.x + a / 2, y: l.y + o / 2 }
    ], l.random_interior_point = () => ({
      x: l.x + a * (Math.random() - 0.5),
      y: l.y + o * (Math.random() - 0.5)
    });
  });
  const c = function(l) {
    return typeof l < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * l / i - l / 2, p.y = (p.n + 0.5) * l / i - l / 2;
    }), e = l, a = e / i, o = e / i, this.L = e, this) : e;
  }, u = function(l) {
    return typeof l < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Zn(d, i, l, r).map((_) => s[_]);
    }), n = l, s.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, f = function(l) {
    return typeof l < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Zn(d, i, n, l).map((_) => s[_]);
    }), r = l, this) : r;
  }, h = function() {
    return n === "periodic" ? null : Ed(s, (l) => l.n == 0 || l.n == 2 * t || l.m == 0 || l.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: f,
    nodes: s,
    scale: c,
    boundary: u,
    boundary_cells: h
  };
};
wn([-1, 1, 0, 0], [0, 0, -1, 1]), wn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
const _e = S.N;
S.dt;
const z0 = O0(_e).boundary("periodic").scale(2 * _e), me = (t, n, e) => n.filter((r) => M0(t, r, 2 * _e) < e);
var Y = [];
Y = z0.nodes;
Tt(Y, (t) => {
  t.nn_max_outer = me(t, Y, S.outer_radius.widget.range()[1]);
});
const Xi = (t) => {
  Tt(t, (n) => {
    n.nn_outer = me(n, n.nn_max_outer, S.outer_radius.widget.value()), n.nn_inner = me(n, n.nn_outer, S.inner_radius.widget.value());
  });
}, C0 = () => {
  S.timer = {}, S.tick = 0, Y.forEach((t) => {
    t.state = 2 * S.epsilon * (Math.random() - 0.5);
  }), Xi(Y);
}, I0 = () => {
  S.tick++;
  const t = S.interaction_steepness.widget.value();
  Tt(Y, (n) => {
    var e = 2 * Nr(n.nn_inner, (r) => r.state) - Nr(n.nn_outer, (r) => r.state);
    e = e / n.nn_outer.length, n.sigma = $0(e, t);
  }), Tt(Y, (n) => {
    n.state += S.dt * (n.sigma - n.state);
  });
}, R0 = () => {
  Xi(Y);
}, k0 = {
  grayC: ["#feffff", "#fdfefe", "#fcfdfd", "#fbfcfc", "#fafbfb", "#f9fafa", "#f8f9f9", "#f7f8f8", "#f5f6f6", "#f4f5f5", "#f3f4f4", "#f2f3f3", "#f1f2f2", "#f0f1f1", "#eff0f0", "#eeeeee", "#eceded", "#ebecec", "#eaebeb", "#e9eaea", "#e8e9e9", "#e7e8e8", "#e6e7e7", "#e5e6e6", "#e3e4e4", "#e2e3e3", "#e1e2e2", "#e0e1e1", "#dfe0e0", "#dedfdf", "#dddede", "#dcdddd", "#dbdbdb", "#dadada", "#d8d9d9", "#d7d8d8", "#d6d7d7", "#d5d6d6", "#d4d5d5", "#d3d4d4", "#d2d3d3", "#d1d2d2", "#d0d0d0", "#cfcfcf", "#cdcece", "#cccdcd", "#cbcccc", "#cacbcb", "#c9caca", "#c8c9c9", "#c7c8c8", "#c6c7c7", "#c5c6c6", "#c4c4c4", "#c3c3c3", "#c2c2c2", "#c0c1c1", "#bfc0c0", "#bebfbf", "#bdbebe", "#bcbdbd", "#bbbcbc", "#babbbb", "#b9baba", "#b8b9b9", "#b7b7b7", "#b6b6b6", "#b5b5b5", "#b4b4b4", "#b2b3b3", "#b1b2b2", "#b0b1b1", "#afb0b0", "#aeafaf", "#adaeae", "#acadad", "#abacac", "#aaabab", "#a9aaaa", "#a8a9a9", "#a7a8a8", "#a6a6a6", "#a5a5a5", "#a4a4a4", "#a3a3a3", "#a2a2a2", "#a1a1a1", "#a0a0a0", "#9e9f9f", "#9d9e9e", "#9c9d9d", "#9b9c9c", "#9a9b9b", "#999a9a", "#989999", "#979898", "#969797", "#959696", "#949595", "#939494", "#929393", "#919292", "#909191", "#8f9090", "#8e8f8f", "#8d8e8e", "#8c8d8d", "#8b8c8c", "#8a8a8a", "#898989", "#888888", "#878787", "#868686", "#858585", "#848484", "#838383", "#828282", "#818181", "#808080", "#7f7f7f", "#7e7e7e", "#7d7d7d", "#7c7c7c", "#7b7b7b", "#7a7a7a", "#797979", "#787878", "#777777", "#767676", "#757575", "#747474", "#737373", "#727272", "#717171", "#707070", "#6f6f6f", "#6e6f6f", "#6d6e6e", "#6c6d6d", "#6b6c6c", "#6a6b6b", "#696a6a", "#686969", "#676868", "#666767", "#656666", "#646565", "#636464", "#626363", "#626262", "#616161", "#606060", "#5f5f5f", "#5e5e5e", "#5d5d5d", "#5c5c5c", "#5b5b5b", "#5a5a5a", "#595959", "#585858", "#575757", "#565757", "#555656", "#545555", "#535454", "#525353", "#525252", "#515151", "#505050", "#4f4f4f", "#4e4e4e", "#4d4d4d", "#4c4c4c", "#4b4b4b", "#4a4b4b", "#494a4a", "#484949", "#474848", "#474747", "#464646", "#454545", "#444444", "#434343", "#424242", "#414141", "#404141", "#3f4040", "#3f3f3f", "#3e3e3e", "#3d3d3d", "#3c3c3c", "#3b3b3b", "#3a3a3a", "#393939", "#383939", "#383838", "#373737", "#363636", "#353535", "#343434", "#333333", "#323333", "#313232", "#313131", "#303030", "#2f2f2f", "#2e2e2e", "#2d2d2d", "#2c2d2d", "#2c2c2c", "#2b2b2b", "#2a2a2a", "#292929", "#282828", "#272828", "#272727", "#262626", "#252525", "#242424", "#232323", "#232323", "#222222", "#212121", "#202020", "#1f1f1f", "#1f1f1f", "#1e1e1e", "#1d1d1d", "#1c1c1c", "#1b1b1b", "#1b1b1b", "#1a1a1a", "#191919", "#181818", "#171818", "#171717", "#161616", "#151515", "#141414", "#131313", "#121313", "#121212", "#111111", "#101010", "#0e0f0f", "#0d0d0d", "#0c0c0c", "#0b0b0b", "#0a0a0a", "#080808", "#070707", "#050505", "#040404", "#020202", "#010101", "#000000"]
}, F0 = {
  gray: Ms(Lt, k0.grayC)
}, Ui = F0[A.simulation.colormap], xn = S.N, ut = L().domain([-xn, xn]), ct = L().domain([-xn, xn]), Gi = L().domain([-1, 1]).range([0, 1]);
var ft, un, cn;
const zr = () => {
  Rt.selectAll("." + vt.outercircle).attr("r", (t) => A.widgets.cartoon_scale * t.widget.value()), Rt.selectAll("." + vt.innercircle).attr("r", (t) => A.widgets.cartoon_scale * t.widget.value());
}, D0 = (t, n) => {
  un = n.display_size.width, cn = n.display_size.height, ut.range([0, un]), ct.range([0, cn]), ft = t.node().getContext("2d"), ft.clearRect(0, 0, un, cn), Y.forEach((e) => {
    const r = e.cell();
    ft.fillStyle = Ui(Gi(e.state)), ft.fillRect(ut(r[2].x), ct(r[2].y), ut(r[0].x) - ut(r[2].x), ct(r[0].y) - ct(r[2].y));
  });
}, L0 = (t, n) => {
  ft.clearRect(0, 0, un, cn), Y.forEach((e) => {
    const r = e.cell();
    ft.fillStyle = Ui(Gi(e.state)), ft.fillRect(ut(r[2].x), ct(r[2].y), ut(r[0].x) - ut(r[2].x), ct(r[0].y) - ct(r[2].y));
  });
};
function H0(t, n) {
  I0(), L0();
}
function Yi(t, n) {
  C0(), D0(t, n);
}
function q0() {
  R0();
}
var Cr = {};
const B0 = (t, n) => {
  it.value() == 1 ? Cr = Ps(() => H0(), A.simulation.delay) : Cr.stop();
}, X0 = (t, n, e) => {
  Hn.update(() => E0(n)), it.update(() => B0()), Ln.update(() => Yi(t, e)), S.outer_radius.widget.update_end(q0), S.inner_radius.widget.update(zr), S.outer_radius.widget.update(zr);
}, U0 = {
  name: "@explorables/keith_harings_mexican_hat",
  title: "Keith Haring's Mexican Hat",
  subtitle: "Pattern Formation by Local Excitation and Long-Range Inhibition",
  description: "This explorable illustrates spontaneous pattern formation in a spatial model in which points on a lattice interact by local positive feedback and negative long-range feedback.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function G0(t, n = Ki) {
  const e = v0(t, n), r = e.display, i = e.controls, a = e.grid;
  return P0(i, a), X0(r, i, n), Yi(r, n), {
    halt() {
      it.value() === 1 && it.press(i);
    },
    reset() {
      it.value() === 1 && it.press(i), Hn.press(i), Ln.press(i);
    },
    config: n,
    meta: U0
  };
}
export {
  Ki as config,
  G0 as default,
  G0 as load,
  U0 as meta
};
