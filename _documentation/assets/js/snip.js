! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (at.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(dt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                yt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), s = vt.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            yt.hasData(e) && (a = yt.access(e), u = Z.extend({}, a), yt.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Nt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J,
            n = $t[e];
        return n || (n = x(e, t), "none" !== n && n || (Wt = (Wt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Wt[0].contentDocument, t.write(), t.close(), n = x(e, t), Wt.detach()), $t[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _t(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Bt.test(s) && It.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;)
            if (t = Gt[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = _t(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Bt.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = vt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r), "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function D(e, t, n, r, i) {
        return new D.prototype.init(e, t, n, r, i)
    }

    function j() {
        return setTimeout(function() {
            Qt = void 0
        }), Qt = Z.now()
    }

    function A(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Ct(e),
            g = vt.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Kt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = vt.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                vt.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            s = tn.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Qt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qt || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = tn[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(dt) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === bn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || kn.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = [],
        _ = B.slice,
        z = B.concat,
        X = B.push,
        U = B.indexOf,
        V = {},
        Y = V.toString,
        G = V.hasOwnProperty,
        Q = {},
        J = e.document,
        K = "2.1.3",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var it = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!r && O) {
                if (11 !== a && (i = yt.exec(e)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(bt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xt.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ut, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [I, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), l = d(function(e) {
                    return et(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > a; a++)
                if (n = T.relative[e[a].type]) c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = D,
                        x = r || o && T.find.TAG("*", l),
                        b = I += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (I = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = Q.call(u));
                            v = m(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (I = b, D = y), g
                };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date,
            $ = e.document,
            I = 0,
            B = 0,
            _ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            et = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = rt.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(st),
            dt = new RegExp("^" + it + "$"),
            ht = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ct = function() {
                L()
            };
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (Nt) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), O = !N(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function(e) {
                return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = vt.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", st)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = vt.test(H.compareDocumentPosition), M = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? et(j, e) - et(j, t) : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, r) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = et(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ut, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(wt, Tt),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return mt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(wt, Tt), xt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), st.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ct.prototype = Z.fn, ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pt[e] || Z.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var dt = /\S+/g,
        ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = _.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var gt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), gt.promise(t)
    }, Z.ready.promise();
    var mt = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(dt) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new a,
        yt = new a,
        xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return yt.hasData(e) || vt.hasData(e)
        },
        data: function(e, t, n) {
            return yt.access(e, t, n)
        },
        removeData: function(e, t) {
            yt.remove(e, t)
        },
        _data: function(e, t, n) {
            return vt.access(e, t, n)
        },
        _removeData: function(e, t) {
            vt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : mt(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n) return n;
                    if (n = yt.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, r);
                    yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = vt.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Tt = ["Top", "Right", "Bottom", "Left"],
        Ct = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Nt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Et = /^key/,
        St = /^(?:mouse|pointer|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        jt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(dt) || [""], l = t.length; l--;) a = jt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.hasData(e) && vt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(dt) || [""], l = t.length; l--;)
                    if (a = jt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, Dt.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (vt.get(s, "events") || {})[t.type] && vt.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = _.call(arguments),
                u = (vt.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = vt.access(r, t);
                i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = vt.access(r, t) - 1;
                i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Lt = /<([\w:]+)/,
        qt = /<|&#?\w+;/,
        Ht = /<(?:script|style|link)/i,
        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ft = /^$|\/(?:java|ecma)script/i,
        Pt = /^true\/(.*)/,
        Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (qt.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Lt.exec(i) || ["", ""])[1].toLowerCase(), a = Mt[s] || Mt._default, o.innerHTML = a[1] + i.replace(At, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Ft.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[vt.expando], i && (t = vt.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    vt.cache[i] && delete vt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return mt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return mt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ht.test(e) && !Mt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(At, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Ot.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Ft.test(s.type || "") && !vt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Rt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Wt, $t = {},
        It = /^margin/,
        Bt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        _t = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var zt = /^(none|table(?!-c[ea]).+)/,
        Xt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Ut = new RegExp("^([+-])=(" + wt + ")", "i"),
        Vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Gt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Vt, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _t(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, It.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function(e, t) {
            return mt(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = _t(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Qt, Jt, Kt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [q],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Zt.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(O, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ct).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function() {
                        var t = O(this, Z.extend({}, e), o);
                        (i || vt.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = vt.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && en.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = vt.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Qt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qt = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return mt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(dt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = sn[t] || Z.find.attr;
        sn[t] = function(e, t, r) {
            var i, o;
            return r || (o = sn[t], sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, sn[t] = o), i
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return mt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now(),
        fn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var pn = /#.*$/,
        dn = /([?&])_=[^&]*/,
        hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mn = /^(?:GET|HEAD)$/,
        vn = /^\/\//,
        yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xn = {},
        bn = {},
        wn = "*/".concat("*"),
        Tn = e.location.href,
        Cn = yn.exec(Tn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tn,
            type: "GET",
            isLocal: gn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(xn),
        ajaxTransport: F(bn),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = hn.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Tn) + "").replace(pn, "").replace(vn, Cn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(dt) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("https:" === u[1] ? "80" : "443")) === (Cn[3] || ("https:" === Cn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(xn, f, t, w), 2 === x) return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dn.test(i) ? i.replace(dn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](f[c]);
            if (r = P(bn, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Nn = /%20/g,
        kn = /\[\]$/,
        En = /\r?\n/g,
        Sn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Nn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !Sn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var jn = 0,
        An = {},
        Ln = {
            0: 200,
            1223: 204
        },
        qn = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in An) An[e]()
    }), Q.cors = !!qn && "withCredentials" in qn, Q.ajax = qn = !!qn, Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || qn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++jn;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete An[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ln[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = An[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Hn = [],
        On = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Hn.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (On.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(On, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Hn.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = st.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Fn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Pn = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = I(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pn
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return mt(this, function(t, i, o) {
                var s = I(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return mt(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Rn = e.jQuery,
        Mn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Mn), t && e.jQuery === Z && (e.jQuery = Rn), Z
    }, typeof t === kt && (e.jQuery = e.$ = Z), Z
});

! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
}(function() {
    return function t(e, n, r) {
        function o(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var s = "function" == typeof require && require;
                    if (!c && s) return s(a, !0);
                    if (i) return i(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = n[a] = {
                    exports: {}
                };
                e[a][0].call(l.exports, function(t) {
                    var n = e[a][1][t];
                    return o(n ? n : t)
                }, l, l.exports, t, e, n, r)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function(t, e) {
            var n = t("matches-selector");
            e.exports = function(t, e, r) {
                for (var o = r ? t : t.parentNode; o && o !== document;) {
                    if (n(o, e)) return o;
                    o = o.parentNode
                }
            }
        }, {
            "matches-selector": 2
        }],
        2: [function(t, e) {
            function n(t, e) {
                if (o) return o.call(t, e);
                for (var n = t.parentNode.querySelectorAll(e), r = 0; r < n.length; ++r)
                    if (n[r] == t) return !0;
                return !1
            }
            var r = Element.prototype,
                o = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
            e.exports = n
        }, {}],
        3: [function(t, e) {
            function n(t, e, n) {
                var o = r.apply(this, arguments);
                return t.addEventListener(n, o), {
                    destroy: function() {
                        t.removeEventListener(n, o)
                    }
                }
            }

            function r(t, e, n, r) {
                return function(n) {
                    n.delegateTarget = o(n.target, e, !0), n.delegateTarget && r.call(t, n)
                }
            }
            var o = t("closest");
            e.exports = n
        }, {
            closest: 1
        }],
        4: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, n["function"] = function(t) {
                var e = Object.prototype.toString.call(t);
                return "[object Function]" === e
            }
        }, {}],
        5: [function(t, e) {
            function n(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!a.string(e)) throw new TypeError("Second argument must be a String");
                if (!a["function"](n)) throw new TypeError("Third argument must be a Function");
                if (a.node(t)) return r(t, e, n);
                if (a.nodeList(t)) return o(t, e, n);
                if (a.string(t)) return i(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function r(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function o(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function i(t, e, n) {
                return c(document.body, t, e, n)
            }
            var a = t("./is"),
                c = t("delegate");
            e.exports = n
        }, {
            "./is": 4,
            delegate: 3
        }],
        6: [function(t, e) {
            function n(t) {
                var e;
                if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) t.focus(), t.setSelectionRange(0, t.value.length), e = t.value;
                else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(t), n.removeAllRanges(), n.addRange(r), e = n.toString()
                }
                return e
            }
            e.exports = n
        }, {}],
        7: [function(t, e) {
            function n() {}
            n.prototype = {
                on: function(t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function r() {
                        o.off(t, r), e.apply(n, arguments)
                    }
                    var o = this;
                    return r._ = e, this.on(t, r, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        r = 0,
                        o = n.length;
                    for (r; o > r; r++) n[r].fn.apply(n[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        r = n[t],
                        o = [];
                    if (r && e)
                        for (var i = 0, a = r.length; a > i; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, e.exports = n
        }, {}],
        8: [function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                a = t("select"),
                c = r(a),
                s = function() {
                    function t(e) {
                        o(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return t.prototype.resolveOptions = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                    }, t.prototype.initSelection = function() {
                        if (this.text && this.target) throw new Error('Multiple attributes declared, use either "target" or "text"');
                        if (this.text) this.selectFake();
                        else {
                            if (!this.target) throw new Error('Missing required attributes, use either "target" or "text"');
                            this.selectTarget()
                        }
                    }, t.prototype.selectFake = function() {
                        var t = this;
                        this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function() {
                            return t.removeFake()
                        }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.position = "absolute", this.fakeElem.style.left = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = c["default"](this.fakeElem), this.copyText()
                    }, t.prototype.removeFake = function() {
                        this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                    }, t.prototype.selectTarget = function() {
                        this.selectedText = c["default"](this.target), this.copyText()
                    }, t.prototype.copyText = function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }, t.prototype.handleResult = function(t) {
                        t ? this.emitter.emit("success", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        }) : this.emitter.emit("error", {
                            action: this.action,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }, t.prototype.clearSelection = function() {
                        this.target && this.target.blur(), window.getSelection().removeAllRanges()
                    }, t.prototype.destroy = function() {
                        this.removeFake()
                    }, i(t, [{
                        key: "action",
                        set: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" != typeof t || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                this._target = t
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            n["default"] = s, e.exports = n["default"]
        }, {
            select: 6
        }],
        9: [function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t, e) {
                var n = "data-clipboard-" + t;
                return e.hasAttribute(n) ? e.getAttribute(n) : void 0
            }
            n.__esModule = !0;
            var c = t("./clipboard-action"),
                s = r(c),
                u = t("tiny-emitter"),
                l = r(u),
                f = t("good-listener"),
                d = r(f),
                h = function(t) {
                    function e(n, r) {
                        o(this, e), t.call(this), this.resolveOptions(r), this.listenClick(n)
                    }
                    return i(e, t), e.prototype.resolveOptions = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                    }, e.prototype.listenClick = function(t) {
                        var e = this;
                        this.listener = d["default"](t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }, e.prototype.onClick = function(t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s["default"]({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            trigger: e,
                            emitter: this
                        })
                    }, e.prototype.defaultAction = function(t) {
                        return a("action", t)
                    }, e.prototype.defaultTarget = function(t) {
                        var e = a("target", t);
                        return e ? document.querySelector(e) : void 0
                    }, e.prototype.defaultText = function(t) {
                        return a("text", t)
                    }, e.prototype.destroy = function() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }, e
                }(l["default"]);
            n["default"] = h, e.exports = n["default"]
        }, {
            "./clipboard-action": 8,
            "good-listener": 5,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
});
! function(t) {
    t.fn.animateNumbers = function(e, n, a, i) {
        return this.each(function() {
            var d = t(this),
                o = parseInt(d.text().replace(/,/g, ""));
            n = void 0 === n ? !0 : n, t({
                value: o
            }).animate({
                value: e
            }, {
                duration: void 0 == a ? 1e3 : a,
                easing: void 0 == i ? "swing" : i,
                step: function() {
                    d.text(Math.floor(this.value)), n && d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                },
                complete: function() {
                    parseInt(d.text()) !== e && (d.text(e), n && d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                }
            })
        })
    }
}(jQuery);
! function(o) {
    o.fn.bPopup = function(t, e) {
        function n() {
            switch (w.contentContainer = o(w.contentContainer || S), w.content) {
                case "iframe":
                    var t = o('<iframe class="b-iframe" ' + w.iframeAttr + "></iframe>");
                    t.appendTo(w.contentContainer), v = S.outerHeight(!0), P = S.outerWidth(!0), i(), t.attr("src", w.loadUrl), f(w.loadCallback);
                    break;
                case "image":
                    i(), o("<img />").load(function() {
                        f(w.loadCallback), s(o(this))
                    }).attr("src", w.loadUrl).hide().appendTo(w.contentContainer);
                    break;
                default:
                    i(), o('<div class="b-ajax-wrapper"></div>').load(w.loadUrl, w.loadData, function(t, e) {
                        f(w.loadCallback, e), s(o(this))
                    }).hide().appendTo(w.contentContainer)
            }
        }

        function i() {
            w.modal && o('<div class="b-modal ' + m + '"></div>').css({
                backgroundColor: w.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: w.zIndex + D
            }).appendTo(w.appendTo).fadeTo(w.speed, w.opacity), h(), S.data("bPopup", w).data("id", m).css({
                left: "slideIn" == w.transition || "slideBack" == w.transition ? "slideBack" == w.transition ? z.scrollLeft() + W : -1 * (x + P) : u(!(!w.follow[0] && k || T)),
                position: w.positionStyle || "absolute",
                top: "slideDown" == w.transition || "slideUp" == w.transition ? "slideUp" == w.transition ? z.scrollTop() + H : y + -1 * v : p(!(!w.follow[1] && C || T)),
                "z-index": w.zIndex + D + 1
            }).each(function() {
                w.appending && o(this).appendTo(w.appendTo)
            }), c(!0)
        }

        function a() {
            return w.modal && o(".b-modal." + S.data("id")).fadeTo(w.speed, 0, function() {
                o(this).remove()
            }), w.scrollBar || o("html").css("overflow", "auto"), o(".b-modal." + m).unbind("click"), z.unbind("keydown." + m), B.unbind("." + m).data("bPopup", 0 < B.data("bPopup") - 1 ? B.data("bPopup") - 1 : null), S.undelegate(".bClose, ." + w.closeClass, "click." + m, a).data("bPopup", null), clearTimeout(I), c(), !1
        }

        function l(t) {
            H = B.height(), W = B.width(), g = b(), (g.x || g.y) && (clearTimeout(U), U = setTimeout(function() {
                h(), t = t || w.followSpeed;
                var e = {};
                g.x && (e.left = w.follow[0] ? u(!0) : "auto"), g.y && (e.top = w.follow[1] ? p(!0) : "auto"), S.dequeue().each(function() {
                    T ? o(this).css({
                        left: x,
                        top: y
                    }) : o(this).animate(e, t, w.followEasing)
                })
            }, 50))
        }

        function s(o) {
            var t = o.width(),
                e = o.height(),
                n = {};
            w.contentContainer.css({
                height: e,
                width: t
            }), e >= S.height() && (n.height = S.height()), t >= S.width() && (n.width = S.width()), v = S.outerHeight(!0), P = S.outerWidth(!0), h(), w.contentContainer.css({
                height: "auto",
                width: "auto"
            }), n.left = u(!(!w.follow[0] && k || T)), n.top = p(!(!w.follow[1] && C || T)), S.animate(n, 250, function() {
                o.show(), g = b()
            })
        }

        function d() {
            B.data("bPopup", D), S.delegate(".bClose, ." + w.closeClass, "click." + m, a), w.modalClose && o(".b-modal." + m).css("cursor", "pointer").bind("click", a), _ || !w.follow[0] && !w.follow[1] || B.bind("scroll." + m, function() {
                if (g.x || g.y) {
                    var o = {};
                    g.x && (o.left = w.follow[0] ? u(!T) : "auto"), g.y && (o.top = w.follow[1] ? p(!T) : "auto"), S.dequeue().animate(o, w.followSpeed, w.followEasing)
                }
            }).bind("resize." + m, function() {
                l()
            }), w.escClose && z.bind("keydown." + m, function(o) {
                27 == o.which && a()
            })
        }

        function c(o) {
            function t(t) {
                S.css({
                    display: "block",
                    opacity: 1
                }).animate(t, w.speed, w.easing, function() {
                    r(o)
                })
            }
            switch (o ? w.transition : w.transitionClose || w.transition) {
                case "slideIn":
                    t({
                        left: o ? u(!(!w.follow[0] && k || T)) : z.scrollLeft() - (P || S.outerWidth(!0)) - 200
                    });
                    break;
                case "slideBack":
                    t({
                        left: o ? u(!(!w.follow[0] && k || T)) : z.scrollLeft() + W + 200
                    });
                    break;
                case "slideDown":
                    t({
                        top: o ? p(!(!w.follow[1] && C || T)) : z.scrollTop() - (v || S.outerHeight(!0)) - 200
                    });
                    break;
                case "slideUp":
                    t({
                        top: o ? p(!(!w.follow[1] && C || T)) : z.scrollTop() + H + 200
                    });
                    break;
                default:
                    S.stop().fadeTo(w.speed, o ? 1 : 0, function() {
                        r(o)
                    })
            }
        }

        function r(o) {
            o ? (d(), f(e), w.autoClose && (I = setTimeout(a, w.autoClose))) : (S.hide(), f(w.onClose), w.loadUrl && (w.contentContainer.empty(), S.css({
                height: "auto",
                width: "auto"
            })))
        }

        function u(o) {
            return o ? x + z.scrollLeft() : x
        }

        function p(o) {
            return o ? y + z.scrollTop() : y
        }

        function f(t, e) {
            o.isFunction(t) && t.call(S, e)
        }

        function h() {
            y = C ? w.position[1] : Math.max(0, (H - S.outerHeight(!0)) / 2 - w.amsl), x = k ? w.position[0] : (W - S.outerWidth(!0)) / 2, g = b()
        }

        function b() {
            return {
                x: W > S.outerWidth(!0),
                y: H > S.outerHeight(!0)
            }
        }
        o.isFunction(t) && (e = t, t = null);
        var w = o.extend({}, o.fn.bPopup.defaults, t);
        w.scrollBar || o("html").css("overflow", "hidden");
        var m, g, C, k, T, y, x, v, P, U, I, S = this,
            z = o(document),
            B = o(window),
            H = B.height(),
            W = B.width(),
            _ = /OS 6(_\d)+/i.test(navigator.userAgent),
            D = 0;
        return S.close = function() {
            a()
        }, S.reposition = function(o) {
            l(o)
        }, S.each(function() {
            o(this).data("bPopup") || (f(w.onOpen), D = (B.data("bPopup") || 0) + 1, m = "__b-popup" + D + "__", C = "auto" !== w.position[1], k = "auto" !== w.position[0], T = "fixed" === w.positionStyle, v = S.outerHeight(!0), P = S.outerWidth(!0), w.loadUrl ? n() : i())
        })
    }, o.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
}(jQuery);
! function(i) {
    "use strict";
    i.fn.equalHeight = function() {
        var t = [];
        return i.each(this, function(e, n) {
            var r, s = i(n),
                a = "border-box" === s.css("box-sizing") || "border-box" === s.css("-moz-box-sizing");
            r = a ? s.innerHeight() : s.height(), t.push(r)
        }), this.css("height", Math.max.apply(window, t) + "px"), this
    }, i.fn.equalHeightGrid = function(t) {
        var e = this.filter(":visible");
        e.css("height", "auto");
        for (var n = 0; n < e.length; n++)
            if (n % t === 0) {
                for (var r = i(e[n]), s = 1; t > s; s++) r = r.add(e[n + s]);
                r.equalHeight()
            }
        return this
    }, i.fn.detectGridColumns = function() {
        var t = 0,
            e = 0,
            n = this.filter(":visible");
        return n.each(function(n, r) {
            var s = i(r).offset().top;
            return 0 !== t && s !== t ? !1 : (e++, void(t = s))
        }), e
    };
    var t = 0;
    i.fn.responsiveEqualHeightGrid = function() {
        function e() {
            var i = n.detectGridColumns();
            n.equalHeightGrid(i)
        }
        var n = this,
            r = ".grids_" + t;
        return n.data("grids-event-namespace", r), i(window).bind("resize" + r + " load" + r, e), e(), t++, this
    }, i.fn.responsiveEqualHeightGridDestroy = function() {
        var t = this;
        return t.css("height", "auto"), i(window).unbind(t.data("grids-event-namespace")), this
    }
}(window.jQuery);
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t, e) {
    function n(t) {
        function e() {
            a ? (n(), O(e), i = !0, a = !1) : i = !1
        }
        var n = t,
            a = !1,
            i = !1;
        this.kick = function() {
            a = !0, i || e()
        }, this.end = function(t) {
            var e = n;
            t && (i ? (n = a ? function() {
                e(), t()
            } : t, a = !0) : t())
        }
    }

    function a() {
        return !0
    }

    function i() {
        return !1
    }

    function o(t) {
        t.preventDefault()
    }

    function r(t) {
        z[t.target.tagName.toLowerCase()] || t.preventDefault()
    }

    function u(t) {
        return 1 === t.which && !t.ctrlKey && !t.altKey
    }

    function c(t, e) {
        var n, a;
        if (t.identifiedTouch) return t.identifiedTouch(e);
        for (n = -1, a = t.length; ++n < a;)
            if (t[n].identifier === e) return t[n]
    }

    function d(t, e) {
        var n = c(t.changedTouches, e.identifier);
        if (n && (n.pageX !== e.pageX || n.pageY !== e.pageY)) return n
    }

    function m(t) {
        var e;
        u(t) && (e = {
            target: t.target,
            startX: t.pageX,
            startY: t.pageY,
            timeStamp: t.timeStamp
        }, K(document, Q.move, f, e), K(document, Q.cancel, s, e))
    }

    function f(t) {
        var e = t.data;
        X(t, e, t, v)
    }

    function s() {
        v()
    }

    function v() {
        L(document, Q.move, f), L(document, Q.cancel, s)
    }

    function p(t) {
        var e, n;
        z[t.target.tagName.toLowerCase()] || (e = t.changedTouches[0], n = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: t.timeStamp,
            identifier: e.identifier
        }, K(document, B.move + "." + e.identifier, g, n), K(document, B.cancel + "." + e.identifier, h, n))
    }

    function g(t) {
        var e = t.data,
            n = d(t, e);
        n && X(t, e, n, l)
    }

    function h(t) {
        var e = t.data,
            n = c(t.changedTouches, e.identifier);
        n && l(e.identifier)
    }

    function l(t) {
        L(document, "." + t, g), L(document, "." + t, h)
    }

    function X(t, e, n, a) {
        var i = n.pageX - e.startX,
            o = n.pageY - e.startY;
        C * C > i * i + o * o || y(t, e, n, i, o, a)
    }

    function Y() {
        return this._handled = a, !1
    }

    function w(t) {
        t._handled()
    }

    function y(t, e, n, a, i, o) {
        {
            var r, u;
            e.target
        }
        r = t.targetTouches, u = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = a, e.distY = i, e.deltaX = a, e.deltaY = i, e.pageX = n.pageX, e.pageY = n.pageY, e.velocityX = a / u, e.velocityY = i / u, e.targetTouches = r, e.finger = r ? r.length : 1, e._handled = Y, e._preventTouchmoveDefault = function() {
            t.preventDefault()
        }, N(e.target, e), o(e.identifier)
    }

    function T(t) {
        var e = t.data.timer;
        t.data.touch = t, t.data.timeStamp = t.timeStamp, e.kick()
    }

    function S(t) {
        var e = t.data.event,
            n = t.data.timer;
        k(), F(e, n, function() {
            setTimeout(function() {
                L(e.target, "click", i)
            }, 0)
        })
    }

    function k() {
        L(document, Q.move, T), L(document, Q.end, S)
    }

    function _(t) {
        var e = t.data.event,
            n = t.data.timer,
            a = d(t, e);
        a && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = a, t.data.timeStamp = t.timeStamp, n.kick())
    }

    function q(t) {
        var e = t.data.event,
            n = t.data.timer,
            a = c(t.changedTouches, e.identifier);
        a && (A(e), F(e, n))
    }

    function A(t) {
        L(document, "." + t.identifier, _), L(document, "." + t.identifier, q)
    }

    function D(t, e, n) {
        var a = n - t.timeStamp;
        t.type = "move", t.distX = e.pageX - t.startX, t.distY = e.pageY - t.startY, t.deltaX = e.pageX - t.pageX, t.deltaY = e.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / a, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / a, t.pageX = e.pageX, t.pageY = e.pageY
    }

    function F(t, e, n) {
        e.end(function() {
            return t.type = "moveend", N(t.target, t), n && n()
        })
    }

    function R() {
        return K(this, "movestart.move", w), !0
    }

    function x() {
        return L(this, "dragstart drag", o), L(this, "mousedown touchstart", r), L(this, "movestart", w), !0
    }

    function b(t) {
        "move" !== t.namespace && "moveend" !== t.namespace && (K(this, "dragstart." + t.guid + " drag." + t.guid, o, e, t.selector), K(this, "mousedown." + t.guid, r, e, t.selector))
    }

    function j(t) {
        "move" !== t.namespace && "moveend" !== t.namespace && (L(this, "dragstart." + t.guid + " drag." + t.guid), L(this, "mousedown." + t.guid))
    }
    var C = 6,
        K = t.event.add,
        L = t.event.remove,
        N = function(e, n, a) {
            t.event.trigger(n, a, e)
        },
        O = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(function() {
                    t()
                }, 25)
            }
        }(),
        z = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        Q = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        B = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        };
    t.event.special.movestart = {
        setup: R,
        teardown: x,
        add: b,
        remove: j,
        _default: function(t) {
            function a() {
                D(o, r.touch, r.timeStamp), N(t.target, o)
            }
            var o, r;
            t._handled() && (o = {
                target: t.target,
                startX: t.startX,
                startY: t.startY,
                pageX: t.pageX,
                pageY: t.pageY,
                distX: t.distX,
                distY: t.distY,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                velocityX: t.velocityX,
                velocityY: t.velocityY,
                timeStamp: t.timeStamp,
                identifier: t.identifier,
                targetTouches: t.targetTouches,
                finger: t.finger
            }, r = {
                event: o,
                timer: new n(a),
                touch: e,
                timeStamp: e
            }, t.identifier === e ? (K(t.target, "click", i), K(document, Q.move, T, r), K(document, Q.end, S, r)) : (t._preventTouchmoveDefault(), K(document, B.move + "." + t.identifier, _, r), K(document, B.end + "." + t.identifier, q, r)))
        }
    }, t.event.special.move = {
        setup: function() {
            K(this, "movestart.move", t.noop)
        },
        teardown: function() {
            L(this, "movestart.move", t.noop)
        }
    }, t.event.special.moveend = {
        setup: function() {
            K(this, "movestart.moveend", t.noop)
        },
        teardown: function() {
            L(this, "movestart.moveend", t.noop)
        }
    }, K(document, "mousedown.move", m), K(document, "touchstart.move", p), "function" == typeof Array.prototype.indexOf && ! function(t) {
        for (var e = ["changedTouches", "targetTouches"], n = e.length; n--;) - 1 === t.event.props.indexOf(e[n]) && t.event.props.push(e[n])
    }(t)
});
jQuery.fn.fastLiveFilter = function(e, t) {
    t = t || {}, e = jQuery(e);
    var n, l = this,
        i = "",
        o = t.timeout || 0,
        a = t.callback || function() {},
        s = e.children(),
        r = s.length,
        c = r > 0 ? s[0].style.display : "block";
    return a(r), l.change(function() {
        for (var e, n, i = l.val().toLowerCase(), o = 0, y = 0; r > y; y++) e = s[y], n = t.selector ? $(e).find(t.selector).text() : e.textContent || e.innerText || "", n.toLowerCase().indexOf(i) >= 0 ? ("none" == e.style.display && (e.style.display = c), o++) : "none" != e.style.display && (e.style.display = "none");
        return a(o), !1
    }).keydown(function() {
        clearTimeout(n), n = setTimeout(function() {
            l.val() !== i && (i = l.val(), l.change())
        }, o)
    }), this
};
! function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                d = document.createElement("div");
            d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function(e) {
                var i = t(this);
                if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                        o = a / d;
                    if (!i.attr("id")) {
                        var h = "fitvid" + e;
                        i.attr("id", h)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
! function(e) {
    "use strict";
    var t = e(window),
        a = function(t) {
            if (t.valAttr("error-msg-container")) return e(t.valAttr("error-msg-container"));
            var a = t.parent();
            if (!a.hasClass("form-group") && !a.closest("form").hasClass("form-horizontal")) {
                var n = a.closest(".form-group");
                if (n.length) return n.eq(0)
            }
            return a
        },
        n = function(e, t) {
            e.addClass(t.errorElementClass).removeClass("valid"), a(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess), "" !== t.borderColorOnError && e.css("border-color", t.borderColorOnError)
        },
        r = function(t, n) {
            t.each(function() {
                var t = e(this);
                i(t, "", n, n.errorMessagePosition), t.removeClass("valid").removeClass(n.errorElementClass).css("border-color", ""), a(t).removeClass(n.inputParentClassOnError).removeClass(n.inputParentClassOnSuccess).find("." + n.errorMessageClass).remove()
            })
        },
        i = function(n, r, i, o) {
            var s = document.getElementById(n.attr("name") + "_err_msg"),
                l = function(e) {
                    t.trigger("validationErrorDisplay", [n, e]), e.html(r)
                },
                d = {};
            if (s) l(e(s));
            else if ("object" == typeof o) {
                var u = !1;
                o.find("." + i.errorMessageClass).each(function() {
                    return this.inputReferer === n[0] ? (u = e(this), !1) : void 0
                }), u ? r ? l(u) : u.remove() : (d = e('<div class="' + i.errorMessageClass + '"></div>'), l(d), d[0].inputReferer = n[0], o.prepend(d))
            } else {
                var c = a(n);
                d = c.find("." + i.errorMessageClass + ".help-block"), 0 === d.length && (d = e("<span></span>").addClass("help-block").addClass(i.errorMessageClass), d.appendTo(c)), l(d)
            }
        },
        o = function(t, a, n, r) {
            var i, o = r.errorMessageTemplate.messages.replace(/\{errorTitle\}/g, a),
                s = [];
            e.each(n, function(e, t) {
                s.push(r.errorMessageTemplate.field.replace(/\{msg\}/g, t))
            }), o = o.replace(/\{fields\}/g, s.join("")), i = r.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g, r.errorMessageClass), i = i.replace(/\{messages\}/g, o), t.children().eq(0).before(i)
        };
    e.fn.validateOnBlur = function(t, a) {
        return this.find("*[data-validation]").bind("blur.validation", function() {
            e(this).validateInputOnBlur(t, a, !0, "blur")
        }), a.validateCheckboxRadioOnClick && this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation", function() {
            e(this).validateInputOnBlur(t, a, !0, "click")
        }), this
    }, e.fn.validateOnEvent = function(t, a) {
        return this.find("*[data-validation-event]").each(function() {
            var n = e(this),
                r = n.valAttr("event");
            r && n.unbind(r + ".validation").bind(r + ".validation", function() {
                e(this).validateInputOnBlur(t, a, !0, r)
            })
        }), this
    }, e.fn.showHelpOnFocus = function(t) {
        return t || (t = "data-validation-help"), this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"), this.find("textarea,input").each(function() {
            var a = e(this),
                n = "jquery_form_help_" + (a.attr("name") || "").replace(/(:|\.|\[|\])/g, ""),
                r = a.attr(t);
            r && a.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                var t = a.parent().find("." + n);
                0 === t.length && (t = e("<span />").addClass(n).addClass("help").addClass("help-block").text(r).hide(), a.after(t)), t.fadeIn()
            }).unbind("blur.help").bind("blur.help", function() {
                e(this).parent().find("." + n).fadeOut("slow")
            })
        }), this
    }, e.fn.validate = function(t, a, n) {
        var r = e.extend({}, e.formUtils.LANG, n || {});
        this.each(function() {
            var n = e(this),
                i = n.closest("form").get(0).validationConfig || {};
            n.one("validation", function(e, a) {
                "function" == typeof t && t(a, this, e)
            }), n.validateInputOnBlur(r, e.extend({}, i, a || {}), !0)
        })
    }, e.fn.willPostponeValidation = function() {
        return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !window.postponedValidation
    }, e.fn.validateInputOnBlur = function(t, o, s, l) {
        if (e.formUtils.eventType = l, this.willPostponeValidation()) {
            var d = this,
                u = this.valAttr("postpone") || 200;
            return window.postponedValidation = function() {
                d.validateInputOnBlur(t, o, s, l), window.postponedValidation = !1
            }, setTimeout(function() {
                window.postponedValidation && window.postponedValidation()
            }, u), this
        }
        t = e.extend({}, e.formUtils.LANG, t || {}), r(this, o);
        var c = this,
            g = c.closest("form"),
            f = e.formUtils.validateInput(c, t, o, g, l);
        return f.isValid ? f.shouldChangeDisplay && (c.addClass("valid"), a(c).addClass(o.inputParentClassOnSuccess)) : f.isValid || (n(c, o), i(c, f.errorMsg, o, o.errorMessagePosition), s && c.unbind("keyup.validation").bind("keyup.validation", function() {
            e(this).validateInputOnBlur(t, o, !1, "keyup")
        })), this
    }, e.fn.valAttr = function(e, t) {
        return void 0 === t ? this.attr("data-validation-" + e) : t === !1 || null === t ? this.removeAttr("data-validation-" + e) : (e = e.length > 0 ? "-" + e : "", this.attr("data-validation" + e, t))
    }, e.fn.isValid = function(s, l, d) {
        if (e.formUtils.isLoadingModules) {
            var u = this;
            return setTimeout(function() {
                u.isValid(s, l, d)
            }, 200), null
        }
        l = e.extend({}, e.formUtils.defaultConfig(), l || {}), s = e.extend({}, e.formUtils.LANG, s || {}), d = d !== !1, e.formUtils.errorDisplayPreventedWhenHalted && (delete e.formUtils.errorDisplayPreventedWhenHalted, d = !1), e.formUtils.isValidatingEntireForm = !0, e.formUtils.haltValidation = !1;
        var c = function(t, a) {
                e.inArray(t, f) < 0 && f.push(t), h.push(a), a.attr("current-error", t), d && n(a, l)
            },
            g = [],
            f = [],
            h = [],
            m = this,
            v = function(t, a) {
                return "submit" === a || "button" === a || "reset" === a ? !0 : e.inArray(t, l.ignore || []) > -1
            };
        if (d && (m.find("." + l.errorMessageClass + ".alert").remove(), r(m.find("." + l.errorElementClass + ",.valid"), l)), m.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
                var t = e(this),
                    n = t.attr("type"),
                    r = "radio" === n || "checkbox" === n,
                    i = t.attr("name");
                if (!v(i, n) && (!r || e.inArray(i, g) < 0)) {
                    r && g.push(i);
                    var o = e.formUtils.validateInput(t, s, l, m, "submit");
                    o.shouldChangeDisplay && (o.isValid ? o.isValid && (t.valAttr("current-error", !1).addClass("valid"), a(t).addClass(l.inputParentClassOnSuccess)) : c(o.errorMsg, t))
                }
            }), "function" == typeof l.onValidate) {
            var p = l.onValidate(m);
            e.isArray(p) ? e.each(p, function(e, t) {
                c(t.message, t.element)
            }) : p && p.element && p.message && c(p.message, p.element)
        }
        return e.formUtils.isValidatingEntireForm = !1, !e.formUtils.haltValidation && h.length > 0 ? (d && ("top" === l.errorMessagePosition ? o(m, s.errorTitle, f, l) : "custom" === l.errorMessagePosition ? "function" == typeof l.errorMessageCustom && l.errorMessageCustom(m, s.errorTitle, f, l) : e.each(h, function(e, t) {
            i(t, t.attr("current-error"), l, l.errorMessagePosition)
        }), l.scrollToTopOnError && t.scrollTop(m.offset().top - 20)), !1) : (!d && e.formUtils.haltValidation && (e.formUtils.errorDisplayPreventedWhenHalted = !0), !e.formUtils.haltValidation)
    }, e.fn.validateForm = function(e, t) {
        return window.console && "function" == typeof window.console.warn && window.console.warn("Use of deprecated function $.validateForm, use $.isValid instead"), this.isValid(e, t, !0)
    }, e.fn.restrictLength = function(t) {
        return new e.formUtils.lengthRestriction(this, t), this
    }, e.fn.addSuggestions = function(t) {
        var a = !1;
        return this.find("input").each(function() {
            var n = e(this);
            a = e.split(n.attr("data-suggestions")), a.length > 0 && !n.hasClass("has-suggestions") && (e.formUtils.suggest(n, a, t), n.addClass("has-suggestions"))
        }), this
    }, e.split = function(t, a) {
        if ("function" != typeof a) {
            if (!t) return [];
            var n = [];
            return e.each(t.split(a ? a : /[,|\-\s]\s*/g), function(t, a) {
                a = e.trim(a), a.length && n.push(a)
            }), n
        }
        t && e.each(t.split(/[,|\-\s]\s*/g), function(t, n) {
            return n = e.trim(n), n.length ? a(n, t) : void 0
        })
    }, e.validate = function(a) {
        var n = e.extend(e.formUtils.defaultConfig(), {
            form: "form",
            validateOnEvent: !1,
            validateOnBlur: !0,
            validateCheckboxRadioOnClick: !0,
            showHelpOnFocus: !0,
            addSuggestions: !0,
            modules: "",
            onModulesLoaded: null,
            language: !1,
            onSuccess: !1,
            onError: !1,
            onElementValidate: !1
        });
        if (a = e.extend(n, a || {}), a.lang && "en" !== a.lang) {
            var i = "lang/" + a.lang + ".js";
            a.modules += a.modules.length ? "," + i : i
        }
        e(a.form).each(function(n, i) {
            i.validationConfig = a;
            var o = e(i);
            t.trigger("formValidationSetup", [o, a]), o.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"), o.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"), o.bind("submit.validation", function() {
                var t = e(this);
                if (e.formUtils.haltValidation) return !1;
                if (e.formUtils.isLoadingModules) return setTimeout(function() {
                    t.trigger("submit.validation")
                }, 200), !1;
                var n = t.isValid(a.language, a);
                if (e.formUtils.haltValidation) return !1;
                if (!n || "function" != typeof a.onSuccess) return n || "function" != typeof a.onError ? n : (a.onError(t), !1);
                var r = a.onSuccess(t);
                return r === !1 ? !1 : void 0
            }).bind("reset.validation", function() {
                e(this).find("." + a.errorMessageClass + ".alert").remove(), r(e(this).find("." + a.errorElementClass + ",.valid"), a)
            }).addClass("has-validation-callback"), a.showHelpOnFocus && o.showHelpOnFocus(), a.addSuggestions && o.addSuggestions(), a.validateOnBlur && (o.validateOnBlur(a.language, a), o.bind("html5ValidationAttrsFound", function() {
                o.validateOnBlur(a.language, a)
            })), a.validateOnEvent && o.validateOnEvent(a.language, a)
        }), "" !== a.modules && e.formUtils.loadModules(a.modules, !1, function() {
            "function" == typeof a.onModulesLoaded && a.onModulesLoaded(), t.trigger("validatorsLoaded", ["string" == typeof a.form ? e(a.form) : a.form, a])
        })
    }, e.formUtils = {
        defaultConfig: function() {
            return {
                ignore: [],
                errorElementClass: "error",
                borderColorOnError: "#b94a48",
                errorMessageClass: "form-error",
                validationRuleAttribute: "data-validation",
                validationErrorMsgAttribute: "data-validation-error-msg",
                errorMessagePosition: "element",
                errorMessageTemplate: {
                    container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                    messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                    field: "<li>{msg}</li>"
                },
                errorMessageCustom: o,
                scrollToTopOnError: !0,
                dateFormat: "yyyy-mm-dd",
                addValidClassOnAll: !1,
                decimalSeparator: ".",
                inputParentClassOnError: "has-error",
                inputParentClassOnSuccess: "has-success",
                validateHiddenInputs: !1
            }
        },
        validators: {},
        _events: {
            load: [],
            valid: [],
            invalid: []
        },
        haltValidation: !1,
        isValidatingEntireForm: !1,
        addValidator: function(e) {
            var t = 0 === e.name.indexOf("validate_") ? e.name : "validate_" + e.name;
            void 0 === e.validateOnKeyUp && (e.validateOnKeyUp = !0), this.validators[t] = e
        },
        isLoadingModules: !1,
        loadedModules: {},
        loadModules: function(a, n, r) {
            if (void 0 === r && (r = !0), e.formUtils.isLoadingModules) return void setTimeout(function() {
                e.formUtils.loadModules(a, n, r)
            });
            var i = !1,
                o = function(a, n) {
                    var o = e.split(a),
                        s = o.length,
                        l = function() {
                            s--, 0 === s && (e.formUtils.isLoadingModules = !1, r && i && ("function" == typeof r ? r() : t.trigger("validatorsLoaded")))
                        };
                    s > 0 && (e.formUtils.isLoadingModules = !0);
                    var d = "?_=" + (new Date).getTime(),
                        u = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                    e.each(o, function(t, a) {
                        if (a = e.trim(a), 0 === a.length) l();
                        else {
                            var r = n + a + (".js" === a.slice(-3) ? "" : ".js"),
                                o = document.createElement("SCRIPT");
                            r in e.formUtils.loadedModules ? l() : (e.formUtils.loadedModules[r] = 1, i = !0, o.type = "text/javascript", o.onload = l, o.src = r + (".dev.js" === r.slice(-7) ? d : ""), o.onerror = function() {
                                "console" in window && window.console.log && window.console.log("Unable to load form validation module " + r)
                            }, o.onreadystatechange = function() {
                                ("complete" === this.readyState || "loaded" === this.readyState) && (l(), this.onload = null, this.onreadystatechange = null)
                            }, u.appendChild(o))
                        }
                    })
                };
            if (n) o(a, n);
            else {
                var s = function() {
                    var t = !1;
                    return e('script[src*="form-validator"]').each(function() {
                        return t = this.src.substr(0, this.src.lastIndexOf("/")) + "/", "/" === t && (t = ""), !1
                    }), t !== !1 ? (o(a, t), !0) : !1
                };
                s() || e(s)
            }
        },
        validateInput: function(t, a, n, r, i) {
            t.trigger("beforeValidation"), n = n || e.formUtils.defaultConfig(), a = a || e.formUtils.LANG;
            var o = t.val() || "",
                s = {
                    isValid: !0,
                    shouldChangeDisplay: !0,
                    errorMsg: ""
                },
                l = t.valAttr("optional"),
                d = !1,
                u = !1,
                c = !1,
                g = t.valAttr("if-checked"),
                f = t.valAttr("if-checked-value");
            if (t.attr("disabled") || !t.is(":visible") && !n.validateHiddenInputs) return s.shouldChangeDisplay = !1, s;
            null != g && (d = !0, c = r.find('input[name="' + g + '"]'), null != f ? c.each(function(t, a) {
                e(a).prop("checked") && e(a).val() === f && (u = !0)
            }) : c.prop("checked") && (u = !0));
            var h = !o && "number" === t[0].type;
            if (!o && "true" === l && !h || d && !u) return s.shouldChangeDisplay = n.addValidClassOnAll, s;
            var m = t.attr(n.validationRuleAttribute),
                v = !0;
            return m ? (e.split(m, function(s) {
                0 !== s.indexOf("validate_") && (s = "validate_" + s);
                var l = e.formUtils.validators[s];
                if (!l || "function" != typeof l.validatorFunction) throw new Error('Using undefined validator "' + s + '"');
                "validate_checkbox_group" === s && (t = r.find('[name="' + t.attr("name") + '"]:eq(0)'));
                var d = null;
                return ("keyup" !== i || l.validateOnKeyUp) && (d = l.validatorFunction(o, t, n, a, r)), d ? void 0 : (v = null, null !== d && (v = t.attr(n.validationErrorMsgAttribute + "-" + s.replace("validate_", "")), v || (v = t.attr(n.validationErrorMsgAttribute), v || (v = a[l.errorMessageKey], v || (v = l.errorMessage)))), !1)
            }, " "), "string" == typeof v ? (t.trigger("validation", !1), s.errorMsg = v, s.isValid = !1, s.shouldChangeDisplay = !0) : null === v ? s.shouldChangeDisplay = n.addValidClassOnAll : (t.trigger("validation", !0), s.shouldChangeDisplay = !0), "function" == typeof n.onElementValidate && null !== v && n.onElementValidate(s.isValid, t, r, v), s) : (s.shouldChangeDisplay = n.addValidClassOnAll, s)
        },
        parseDate: function(t, a) {
            var n, r, i, o, s = a.replace(/[a-zA-Z]/gi, "").substring(0, 1),
                l = "^",
                d = a.split(s || null);
            if (e.each(d, function(e, t) {
                    l += (e > 0 ? "\\" + s : "") + "(\\d{" + t.length + "})"
                }), l += "$", n = t.match(new RegExp(l)), null === n) return !1;
            var u = function(t, a, n) {
                for (var r = 0; r < a.length; r++)
                    if (a[r].substring(0, 1) === t) return e.formUtils.parseDateInt(n[r + 1]);
                return -1
            };
            return i = u("m", d, n), r = u("d", d, n), o = u("y", d, n), 2 === i && r > 28 && (o % 4 !== 0 || o % 100 === 0 && o % 400 !== 0) || 2 === i && r > 29 && (o % 4 === 0 || o % 100 !== 0 && o % 400 === 0) || i > 12 || 0 === i ? !1 : this.isShortMonth(i) && r > 30 || !this.isShortMonth(i) && r > 31 || 0 === r ? !1 : [o, i, r]
        },
        parseDateInt: function(e) {
            return 0 === e.indexOf("0") && (e = e.replace("0", "")), parseInt(e, 10)
        },
        isShortMonth: function(e) {
            return e % 2 === 0 && 7 > e || e % 2 !== 0 && e > 7
        },
        lengthRestriction: function(t, a) {
            var n = parseInt(a.text(), 10),
                r = 0,
                i = function() {
                    var e = t.val().length;
                    if (e > n) {
                        var i = t.scrollTop();
                        t.val(t.val().substring(0, n)), t.scrollTop(i)
                    }
                    r = n - e, 0 > r && (r = 0), a.text(r)
                };
            e(t).bind("keydown keyup keypress focus blur", i).bind("cut paste", function() {
                setTimeout(i, 100)
            }), e(document).bind("ready", i)
        },
        numericRangeCheck: function(t, a) {
            var n = e.split(a),
                r = parseInt(a.substr(3), 10);
            return 1 === n.length && -1 === a.indexOf("min") && -1 === a.indexOf("max") && (n = [a, a]), 2 === n.length && (t < parseInt(n[0], 10) || t > parseInt(n[1], 10)) ? ["out", n[0], n[1]] : 0 === a.indexOf("min") && r > t ? ["min", r] : 0 === a.indexOf("max") && t > r ? ["max", r] : ["ok"]
        },
        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,
        suggest: function(a, n, r) {
            var i = {
                    css: {
                        maxHeight: "150px",
                        background: "#FFF",
                        lineHeight: "150%",
                        textDecoration: "underline",
                        overflowX: "hidden",
                        overflowY: "auto",
                        border: "#CCC solid 1px",
                        borderTop: "none",
                        cursor: "pointer"
                    },
                    activeSuggestionCSS: {
                        background: "#E9E9E9"
                    }
                },
                o = function(e, t) {
                    var a = t.offset();
                    e.css({
                        width: t.outerWidth(),
                        left: a.left + "px",
                        top: a.top + t.outerHeight() + "px"
                    })
                };
            r && e.extend(i, r), i.css.position = "absolute", i.css["z-index"] = 9999, a.attr("autocomplete", "off"), 0 === this._numSuggestionElements && t.bind("resize", function() {
                e(".jquery-form-suggestions").each(function() {
                    var t = e(this),
                        a = t.attr("data-suggest-container");
                    o(t, e(".suggestions-" + a).eq(0))
                })
            }), this._numSuggestionElements++;
            var s = function(t) {
                var a = t.valAttr("suggestion-nr");
                e.formUtils._selectedSuggestion = null, e.formUtils._previousTypedVal = null, e(".jquery-form-suggestion-" + a).fadeOut("fast")
            };
            return a.data("suggestions", n).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                e(this).trigger("keyup"), e.formUtils._selectedSuggestion = null
            }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                var t = e(this),
                    n = [],
                    r = e.trim(t.val()).toLocaleLowerCase();
                if (r !== e.formUtils._previousTypedVal) {
                    e.formUtils._previousTypedVal = r;
                    var l = !1,
                        d = t.valAttr("suggestion-nr"),
                        u = e(".jquery-form-suggestion-" + d);
                    if (u.scrollTop(0), "" !== r) {
                        var c = r.length > 2;
                        e.each(t.data("suggestions"), function(e, t) {
                            var a = t.toLocaleLowerCase();
                            return a === r ? (n.push("<strong>" + t + "</strong>"), l = !0, !1) : void((0 === a.indexOf(r) || c && a.indexOf(r) > -1) && n.push(t.replace(new RegExp(r, "gi"), "<strong>$&</strong>")))
                        })
                    }
                    l || 0 === n.length && u.length > 0 ? u.hide() : n.length > 0 && 0 === u.length ? (u = e("<div></div>").css(i.css).appendTo("body"), a.addClass("suggestions-" + d), u.attr("data-suggest-container", d).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + d)) : n.length > 0 && !u.is(":visible") && u.show(), n.length > 0 && r.length !== n[0].length && (o(u, t), u.html(""), e.each(n, function(a, n) {
                        e("<div></div>").append(n).css({
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: "5px"
                        }).addClass("form-suggest-element").appendTo(u).click(function() {
                            t.focus(), t.val(e(this).text()), s(t)
                        })
                    }))
                }
            }).unbind("keydown.validation").bind("keydown.validation", function(t) {
                var a, n, r = t.keyCode ? t.keyCode : t.which,
                    o = e(this);
                if (13 === r && null !== e.formUtils._selectedSuggestion) {
                    if (a = o.valAttr("suggestion-nr"), n = e(".jquery-form-suggestion-" + a), n.length > 0) {
                        var l = n.find("div").eq(e.formUtils._selectedSuggestion).text();
                        o.val(l), s(o), t.preventDefault()
                    }
                } else {
                    a = o.valAttr("suggestion-nr"), n = e(".jquery-form-suggestion-" + a);
                    var d = n.children();
                    if (d.length > 0 && e.inArray(r, [38, 40]) > -1) {
                        38 === r ? (null === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = d.length - 1 : e.formUtils._selectedSuggestion--, e.formUtils._selectedSuggestion < 0 && (e.formUtils._selectedSuggestion = d.length - 1)) : 40 === r && (null === e.formUtils._selectedSuggestion ? e.formUtils._selectedSuggestion = 0 : e.formUtils._selectedSuggestion++, e.formUtils._selectedSuggestion > d.length - 1 && (e.formUtils._selectedSuggestion = 0));
                        var u = n.innerHeight(),
                            c = n.scrollTop(),
                            g = n.children().eq(0).outerHeight(),
                            f = g * e.formUtils._selectedSuggestion;
                        return (c > f || f > c + u) && n.scrollTop(f), d.removeClass("active-suggestion").css("background", "none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(i.activeSuggestionCSS), t.preventDefault(), !1
                    }
                }
            }).unbind("blur.suggest").bind("blur.suggest", function() {
                s(e(this))
            }), a
        },
        LANG: {
            errorTitle: "Form submission failed!",
            requiredFields: "You have not answered all required fields",
            badTime: "You have not given a correct time",
            badEmail: "You have not given a correct e-mail address",
            badTelephone: "You have not given a correct phone number",
            badSecurityAnswer: "You have not given a correct answer to the security question",
            badDate: "You have not given a correct date",
            lengthBadStart: "The input value must be between ",
            lengthBadEnd: " characters",
            lengthTooLongStart: "The input value is longer than ",
            lengthTooShortStart: "The input value is shorter than ",
            notConfirmed: "Input values could not be confirmed",
            badDomain: "Incorrect domain value",
            badUrl: "The input value is not a correct URL",
            badCustomVal: "The input value is incorrect",
            andSpaces: " and spaces ",
            badInt: "The input value was not a correct number",
            badSecurityNumber: "Your social security number was incorrect",
            badUKVatAnswer: "Incorrect UK VAT Number",
            badStrength: "The password isn't strong enough",
            badNumberOfSelectedOptionsStart: "You have to choose at least ",
            badNumberOfSelectedOptionsEnd: " answers",
            badAlphaNumeric: "The input value can only contain alphanumeric characters ",
            badAlphaNumericExtra: " and ",
            wrongFileSize: "The file you are trying to upload is too large (max %s)",
            wrongFileType: "Only files of type %s is allowed",
            groupCheckedRangeStart: "Please choose between ",
            groupCheckedTooFewStart: "Please choose at least ",
            groupCheckedTooManyStart: "Please choose a maximum of ",
            groupCheckedEnd: " item(s)",
            badCreditCard: "The credit card number is not correct",
            badCVV: "The CVV number was not correct",
            wrongFileDim: "Incorrect image dimensions,",
            imageTooTall: "the image can not be taller than",
            imageTooWide: "the image can not be wider than",
            imageTooSmall: "the image was too small",
            min: "min",
            max: "max",
            imageRatioNotAccepted: "Image ratio is not be accepted",
            badBrazilTelephoneAnswer: "The phone number entered is invalid",
            badBrazilCEPAnswer: "The CEP entered is invalid",
            badBrazilCPFAnswer: "The CPF entered is invalid"
        }
    }, e.formUtils.addValidator({
        name: "email",
        validatorFunction: function(t) {
            var a = t.toLowerCase().split("@"),
                n = a[0],
                r = a[1];
            if (n && r) {
                if (0 === n.indexOf('"')) {
                    var i = n.length;
                    if (n = n.replace(/\"/g, ""), n.length !== i - 2) return !1
                }
                return e.formUtils.validators.validate_domain.validatorFunction(a[1]) && 0 !== n.indexOf(".") && "." !== n.substring(n.length - 1, n.length) && -1 === n.indexOf("..") && !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(n)
            }
            return !1
        },
        errorMessage: "",
        errorMessageKey: "badEmail"
    }), e.formUtils.addValidator({
        name: "domain",
        validatorFunction: function(e) {
            return e.length > 0 && e.length <= 253 && !/[^a-zA-Z0-9]/.test(e.slice(-2)) && !/[^a-zA-Z0-9]/.test(e.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(e) && 1 === e.split("..").length && e.split(".").length > 1
        },
        errorMessage: "",
        errorMessageKey: "badDomain"
    }), e.formUtils.addValidator({
        name: "required",
        validatorFunction: function(t, a, n, r, i) {
            switch (a.attr("type")) {
                case "checkbox":
                    return a.is(":checked");
                case "radio":
                    return i.find('input[name="' + a.attr("name") + '"]').filter(":checked").length > 0;
                default:
                    return "" !== e.trim(t)
            }
        },
        errorMessage: "",
        errorMessageKey: "requiredFields"
    }), e.formUtils.addValidator({
        name: "length",
        validatorFunction: function(t, a, n, r) {
            var i = a.valAttr("length"),
                o = a.attr("type");
            if (void 0 === i) return alert('Please add attribute "data-validation-length" to ' + a[0].nodeName + " named " + a.attr("name")), !0;
            var s, l = "file" === o && void 0 !== a.get(0).files ? a.get(0).files.length : t.length,
                d = e.formUtils.numericRangeCheck(l, i);
            switch (d[0]) {
                case "out":
                    this.errorMessage = r.lengthBadStart + i + r.lengthBadEnd, s = !1;
                    break;
                case "min":
                    this.errorMessage = r.lengthTooShortStart + d[1] + r.lengthBadEnd, s = !1;
                    break;
                case "max":
                    this.errorMessage = r.lengthTooLongStart + d[1] + r.lengthBadEnd, s = !1;
                    break;
                default:
                    s = !0
            }
            return s
        },
        errorMessage: "",
        errorMessageKey: ""
    }), e.formUtils.addValidator({
        name: "url",
        validatorFunction: function(t) {
            var a = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (a.test(t)) {
                var n = t.split("://")[1],
                    r = n.indexOf("/");
                return r > -1 && (n = n.substr(0, r)), e.formUtils.validators.validate_domain.validatorFunction(n)
            }
            return !1
        },
        errorMessage: "",
        errorMessageKey: "badUrl"
    }), e.formUtils.addValidator({
        name: "number",
        validatorFunction: function(e, t, a) {
            if ("" !== e) {
                var n, r, i = t.valAttr("allowing") || "",
                    o = t.valAttr("decimal-separator") || a.decimalSeparator,
                    s = !1,
                    l = t.valAttr("step") || "",
                    d = !1;
                if (-1 === i.indexOf("number") && (i += ",number"), -1 === i.indexOf("negative") && 0 === e.indexOf("-")) return !1;
                if (i.indexOf("range") > -1 && (n = parseFloat(i.substring(i.indexOf("[") + 1, i.indexOf(";"))), r = parseFloat(i.substring(i.indexOf(";") + 1, i.indexOf("]"))), s = !0), "" !== l && (d = !0), "," === o) {
                    if (e.indexOf(".") > -1) return !1;
                    e = e.replace(",", ".")
                }
                if (i.indexOf("number") > -1 && "" === e.replace(/[0-9-]/g, "") && (!s || e >= n && r >= e) && (!d || e % l === 0)) return !0;
                if (i.indexOf("float") > -1 && null !== e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) && (!s || e >= n && r >= e) && (!d || e % l === 0)) return !0
            }
            return !1
        },
        errorMessage: "",
        errorMessageKey: "badInt"
    }), e.formUtils.addValidator({
        name: "alphanumeric",
        validatorFunction: function(t, a, n, r) {
            var i = "^([a-zA-Z0-9",
                o = "]+)$",
                s = a.valAttr("allowing"),
                l = "";
            if (s) {
                l = i + s + o;
                var d = s.replace(/\\/g, "");
                d.indexOf(" ") > -1 && (d = d.replace(" ", ""), d += r.andSpaces || e.formUtils.LANG.andSpaces), this.errorMessage = r.badAlphaNumeric + r.badAlphaNumericExtra + d
            } else l = i + o, this.errorMessage = r.badAlphaNumeric;
            return new RegExp(l).test(t)
        },
        errorMessage: "",
        errorMessageKey: ""
    }), e.formUtils.addValidator({
        name: "custom",
        validatorFunction: function(e, t) {
            var a = new RegExp(t.valAttr("regexp"));
            return a.test(e)
        },
        errorMessage: "",
        errorMessageKey: "badCustomVal"
    }), e.formUtils.addValidator({
        name: "date",
        validatorFunction: function(t, a, n) {
            var r = a.valAttr("format") || n.dateFormat || "yyyy-mm-dd";
            return e.formUtils.parseDate(t, r) !== !1
        },
        errorMessage: "",
        errorMessageKey: "badDate"
    }), e.formUtils.addValidator({
        name: "checkbox_group",
        validatorFunction: function(t, a, n, r, i) {
            var o = !0,
                s = a.attr("name"),
                l = e('input[type=checkbox][name^="' + s + '"]', i),
                d = l.filter(":checked").length,
                u = a.valAttr("qty");
            if (void 0 === u) {
                var c = a.get(0).nodeName;
                alert('Attribute "data-validation-qty" is missing from ' + c + " named " + a.attr("name"))
            }
            var g = e.formUtils.numericRangeCheck(d, u);
            switch (g[0]) {
                case "out":
                    this.errorMessage = r.groupCheckedRangeStart + u + r.groupCheckedEnd, o = !1;
                    break;
                case "min":
                    this.errorMessage = r.groupCheckedTooFewStart + g[1] + r.groupCheckedEnd, o = !1;
                    break;
                case "max":
                    this.errorMessage = r.groupCheckedTooManyStart + g[1] + r.groupCheckedEnd, o = !1;
                    break;
                default:
                    o = !0
            }
            if (!o) {
                var f = function() {
                    l.unbind("click", f), l.filter("*[data-validation]").validateInputOnBlur(r, n, !1, "blur")
                };
                l.bind("click", f)
            }
            return o
        }
    })
}(jQuery);
! function(e) {
    function t(e, t) {
        this.previewElement = e, this.options = t, this.animationLoaded = !1
    }
    t.prototype = {
        activate: function() {
            this.wrap(), this.addSpinner(), this.addControl(), this.addEvents()
        },
        wrap: function() {
            this.previewElement.addClass("gifplayer-ready"), this.wrapper = this.previewElement.wrap("<div class='gifplayer-wrapper'></div>").parent(), this.wrapper.css("width", this.previewElement.width()), this.wrapper.css("height", this.previewElement.height()), this.previewElement.css("cursor", "pointer")
        },
        addSpinner: function() {
            this.spinnerElement = e("<div class = 'spinner'></div>"), this.wrapper.append(this.spinnerElement), this.spinnerElement.hide()
        },
        getOption: function(e) {
            var t = this.previewElement.data(e.toLowerCase());
            return void 0 != t && "" != t ? t : this.options[e]
        },
        addControl: function() {
            var t = this.getOption("label");
            this.playElement = e("<ins class='play-gif'>" + t + "</ins>"), this.wrapper.append(this.playElement), this.playElement.css("top", this.previewElement.height() / 2 - this.playElement.height() / 2), this.playElement.css("left", this.previewElement.width() / 2 - this.playElement.width() / 2)
        },
        addEvents: function() {
            {
                var e = this,
                    t = this.getOption("playOn");
                this.getOption("mode")
            }
            switch (t) {
                case "click":
                    e.playElement.on("click", function() {
                        e.loadAnimation()
                    }), e.previewElement.on("click", function(t) {
                        e.loadAnimation(), t.preventDefault(), t.stopPropagation()
                    });
                    break;
                case "hover":
                    e.previewElement.on("click mouseover", function(t) {
                        e.loadAnimation(), t.preventDefault(), t.stopPropagation()
                    })
            }
        },
        loadAnimation: function() {
            this.spinnerElement.show();
            var e = this.getOption("mode");
            "gif" == e ? this.loadGif() : "video" == e && this.loadVideo()
        },
        stopGif: function() {
            this.gifElement.hide(), this.previewElement.show(), this.playElement.show(), this.resetEvents()
        },
        getGif: function() {
            var e = this.getOption("gif");
            return void 0 != e && "" != e ? e : this.previewElement.attr("src").replace(".png", ".gif").replace(".jpg", ".gif")
        },
        getWebm: function() {
            var e = this.getOption("webm");
            return void 0 != e && "" != e ? e : this.previewElement.attr("src").replace(".png", ".webm").replace(".jpg", ".webm")
        },
        getMp4: function() {
            var e = this.getOption("mp4");
            return void 0 != e && "" != e ? e : this.previewElement.attr("src").replace(".png", ".mp4").replace(".jpg", ".mp4")
        },
        loadGif: function() {
            var t = this;
            t.playElement.hide(), this.animationLoaded || this.enableAbort();
            var i = this.getGif(),
                n = this.previewElement.width(),
                s = this.previewElement.height();
            this.gifElement = e("<img class='gp-gif-element' width='" + n + "' height=' " + s + " '/>");
            var o = this.getOption("wait");
            o ? this.gifElement.load(function() {
                t.animationLoaded = !0, t.resetEvents(), t.previewElement.hide(), t.wrapper.append(t.gifElement), t.spinnerElement.hide()
            }) : (t.animationLoaded = !0, t.resetEvents(), t.previewElement.hide(), t.wrapper.append(t.gifElement), t.spinnerElement.hide()), this.gifElement.css("cursor", "pointer"), this.gifElement.css("position", "absolute"), this.gifElement.css("top", "0"), this.gifElement.css("left", "0"), this.gifElement.attr("src", i), this.gifElement.click(function(i) {
                e(this).remove(), t.previewElement.show(), t.playElement.show(), t.resetEvents(), i.preventDefault(), i.stopPropagation()
            })
        },
        loadVideo: function() {
            var t = this,
                i = this.getMp4(),
                n = this.getWebm(),
                s = this.previewElement.width(),
                o = this.previewElement.height();
            t.videoElement = e('<video class="gp-video-element" width="' + s + 'px" height="' + o + '" style="margin:0 auto;width:' + s + "px;height:" + o + 'px;" autoplay="autoplay" loop="loop" muted="muted" poster="' + t.previewElement.attr("src") + '"><source type="video/mp4" src="' + i + '"><source type="video/webm" src="' + n + '"></video>');
            var p = function() {
                    t.spinnerElement.hide(), t.previewElement.hide(), t.playElement.hide(), t.gifLoaded = !0, t.previewElement.hide(), t.wrapper.append(t.videoElement), t.videoPaused = !1, t.videoElement[0].play()
                },
                a = function() {
                    4 === t.videoElement[0].readyState ? (p(), t.animationLoaded = !0) : setTimeout(a, 100)
                },
                l = this.getOption("wait");
            l ? a() : p(), t.videoElement.on("click", function() {
                t.videoPaused ? t.resumeVideo() : t.pauseVideo()
            })
        },
        pauseVideo: function() {
            var e = this;
            e.videoPaused = !0, e.videoElement[0].pause(), console.log(e.videoElement), e.playElement.show(), e.mouseoverEnabled = !1
        },
        resumeVideo: function() {
            var e = this;
            e.videoPaused = !1, e.videoElement[0].play(), e.playElement.hide()
        },
        enableAbort: function() {
            var e = this;
            this.previewElement.click(function(t) {
                e.abortLoading(t)
            }), this.spinnerElement.click(function(t) {
                e.abortLoading(t)
            })
        },
        abortLoading: function(e) {
            this.spinnerElement.hide(), this.playElement.show(), e.preventDefault(), e.stopPropagation(), this.gifElement.off("load").on("load", function(e) {
                e.preventDefault(), e.stopPropagation()
            }), this.resetEvents()
        },
        resetEvents: function() {
            this.previewElement.off("click"), this.previewElement.off("mouseover"), this.playElement.off("click"), this.spinnerElement.off("click"), this.addEvents()
        }
    }, e.fn.gifplayer = function(i) {
        return this.each(/^(play|pause|stop)$/i.test(i) ? function() {
            if (i = i.toLowerCase(), e(this).hasClass("gifplayer-ready")) {
                var n = new t(e(this), null);
                switch (n.options = {}, n.options = e.extend({}, e.fn.gifplayer.defaults, n.options), n.wrapper = e(this).parent(), n.spinnerElement = n.wrapper.find(".spinner"), n.playElement = n.wrapper.find(".play-gif"), n.gifElement = n.wrapper.find(".gp-gif-element"), n.videoElement = n.wrapper.find(".gp-video-element"), n.gifElement.length > 0 ? n.options.mode = "gif" : n.videoElement.length > 0 && (n.options.mode = "video"), i) {
                    case "play":
                        n.playElement.trigger("click");
                        break;
                    case "stop":
                        n.playElement.is(":visible") || ("gif" == n.options.mode ? n.stopGif() : "video" == n.options.mode && n.videoElement.trigger("click"))
                }
            } else console.log("Not a valid gifplayer element")
        } : function() {
            i = e.extend({}, e.fn.gifplayer.defaults, i);
            var n = new t(e(this), i);
            n.activate()
        })
    }, e.fn.gifplayer.defaults = {
        label: "GIF",
        playOn: "click",
        mode: "gif",
        gif: "",
        mp4: "",
        webm: "",
        wait: !1
    }
}(jQuery);
! function(e) {
    e.fn.hoverIntent = function(t, n, o) {
        var r = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: o
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var v, u, i, s, h = function(e) {
                v = e.pageX, u = e.pageY
            },
            a = function(t, n) {
                return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(i - v) + Math.abs(s - u) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = 1, r.over.apply(n, [t])) : (i = v, s = u, n.hoverIntent_t = setTimeout(function() {
                    a(t, n)
                }, r.interval), void 0)
            },
            I = function(e, t) {
                return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [e])
            },
            c = function(t) {
                var n = jQuery.extend({}, t),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == t.type ? (i = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    a(n, o)
                }, r.interval))) : (e(o).off("mousemove.hoverIntent", h), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    I(n, o)
                }, r.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": c,
            "mouseleave.hoverIntent": c
        }, r.selector)
    }
}(jQuery);
! function(t) {
    t.fn.instaFilta = function(e) {
        var i = null,
            s = null,
            a = t.extend({
                scope: null,
                targets: ".instafilta-target",
                sections: ".instafilta-section",
                categoryDataAttr: "instafilta-category",
                matchCssClass: "instafilta-match",
                itemsHideEffect: "hide",
                itemsHideDuration: 0,
                itemsShowEffect: "show",
                itemsShowDuration: 0,
                sectionsHideEffect: "hide",
                sectionsHideDuration: 0,
                sectionsShowEffect: "show",
                sectionsShowDuration: 0,
                onFilterComplete: null,
                markMatches: !1,
                hideEmptySections: !0,
                beginsWith: !1,
                caseSensitive: !1,
                typeDelay: 0,
                useSynonyms: !0,
                synonyms: [{
                    src: "à,á,å,ä,â,ã",
                    dst: "a"
                }, {
                    src: "À,Á,Å,Ä,Â,Ã",
                    dst: "A"
                }, {
                    src: "è,é,ë,ê",
                    dst: "e"
                }, {
                    src: "È,É,Ë,Ê",
                    dst: "E"
                }, {
                    src: "ì,í,ï,î",
                    dst: "i"
                }, {
                    src: "Ì,Í,Ï,Î",
                    dst: "I"
                }, {
                    src: "ò,ó,ö,ô,õ",
                    dst: "o"
                }, {
                    src: "Ò,Ó,Ö,Ô,Õ",
                    dst: "O"
                }, {
                    src: "ù,ú,ü,û",
                    dst: "u"
                }, {
                    src: "Ù,Ú,Ü,Û",
                    dst: "U"
                }, {
                    src: "ç",
                    dst: "c"
                }, {
                    src: "Ç",
                    dst: "C"
                }, {
                    src: "æ",
                    dst: "ae"
                }]
            }, e);
        if (a.useSynonyms)
            for (var n = 0, r = a.synonyms.length; r > n; n++) a.synonyms[n].src = a.synonyms[n].src.split(",");
        return this.each(function() {
            var e, n, r, o, c = "";
            a.scope ? (o = t(this).closest(a.scope), n = o.find(a.targets), r = o.find(a.sections)) : (n = t(a.targets), r = t(a.sections)), n.each(function() {
                $target = t(this), original = $target.text(), $target.data("values", function(t) {
                    var e = [original],
                        i = original;
                    if (!a.useSynonyms) return e;
                    for (var s = 0, n = t.length; n > s; s++)
                        for (var r = 0; r < t[s].src.length; r++) i = i.replace(t[s].src[r], t[s].dst);
                    return !(i !== original) || e.push(i), e
                }(a.synonyms))
            });
            var l = function() {
                    r.each(function() {
                        var e = t(this);
                        e.find('[data-instafilta-hide="false"]').length ? e[a.sectionsShowEffect](a.sectionsShowDuration) : e[a.sectionsHideEffect](a.sectionsHideDuration)
                    })
                },
                f = function(t) {
                    var e = function() {
                        return t ? n.attr("data-instafilta-hide", "false") : n
                    }().filter('[data-instafilta-hide="false"]')[a.itemsShowEffect](a.itemsShowDuration);
                    return t || n.filter('[data-instafilta-hide="true"]')[a.itemsHideEffect](a.itemsHideDuration), a.hideEmptySections && l(), "function" == typeof a.onFilterComplete && a.onFilterComplete.apply(this, [e]), e
                },
                u = function() {
                    return f(!0)
                };
            i = function(e) {
                return e = a.caseSensitive ? e : e.toLowerCase(), c === e ? !1 : (c = e, e || u(), n.each(function() {
                    var i = t(this);
                    i.data("originalText") || (i.data("originalHtml", i.html()), i.data("originalText", i.data("values")[0]));
                    var s = function(t, e) {
                            for (var i = -1, s = 0; s < t.length && (i = (a.caseSensitive ? t[s] : t[s].toLowerCase()).indexOf(e), !(i >= 0)); s++);
                            return i
                        }(i.data("values"), e),
                        n = i.data("originalText"),
                        r = (a.caseSensitive ? n : n.toLowerCase(), null),
                        o = null;
                    s >= 0 && a.markMatches && (r = n.substring(s, s + e.length), o = n.replace(r, '<span class="' + a.matchCssClass + '">' + r + "</span>"), i.html(i.data("originalHtml").replace(n, o))), i.attr("data-instafilta-hide", a.beginsWith && 0 !== s || 0 > s ? "true" : "false")
                }), f())
            }, s = function(e, i) {
                return e && e.length ? ("string" == typeof e && (e = e.split(",")), n.each(function() {
                    var s = !0,
                        n = 0,
                        r = t(this),
                        o = r.data(a.categoryDataAttr);
                    if (o) {
                        o = o.split(",");
                        for (var c = 0; c < o.length; c++)
                            for (var l = 0; l < e.length; l++)
                                if (o[c] === e[l]) {
                                    if (!i) {
                                        s = !1;
                                        break
                                    }
                                    n++
                                }
                        i && n === e.length && (s = !1), r.html(r.data("originalText")).attr("data-instafilta-hide", s)
                    }
                }), f()) : u()
            }, t(this).on("keyup", function() {
                var s = t(this);
                clearTimeout(e), e = setTimeout(function() {
                    i(s.val())
                }, a.typeDelay)
            })
        }), {
            filterTerm: i,
            filterCategory: s
        }
    }
}(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.fn.jScrollPane = function(t) {
        function n(t, n) {
            function i(n) {
                var s, a, l, p, u, h, j = !1,
                    g = !1;
                if (F = n, void 0 === L) u = t.scrollTop(), h = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), q = t.innerWidth() + vt, O = t.innerHeight(), t.width(q), L = e('<div class="jspPane" />').css("padding", gt).append(t.children()), E = e('<div class="jspContainer" />').css({
                    width: q + "px",
                    height: O + "px"
                }).append(L).appendTo(t);
                else {
                    if (t.css("width", ""), j = F.stickToBottom && D(), g = F.stickToRight && x(), p = t.innerWidth() + vt != q || t.outerHeight() != O, p && (q = t.innerWidth() + vt, O = t.innerHeight(), E.css({
                            width: q + "px",
                            height: O + "px"
                        })), !p && mt == V && L.outerHeight() == G) return void t.width(q);
                    mt = V, L.css("width", ""), t.width(q), E.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                L.css("overflow", "auto"), V = n.contentWidth ? n.contentWidth : L[0].scrollWidth, G = L[0].scrollHeight, L.css("overflow", ""), N = V / q, K = G / O, Q = K > 1, U = N > 1, U || Q ? (t.addClass("jspScrollable"), s = F.maintainPosition && (Z || tt), s && (a = T(), l = B()), o(), r(), c(), s && (k(g ? V - q : a, !1), y(j ? G - O : l, !1)), A(), H(), R(), F.enableKeyboardNavigation && Y(), F.clickOnTrack && d(), M(), F.hijackInternalLinks && X()) : (t.removeClass("jspScrollable"), L.css({
                    top: 0,
                    left: 0,
                    width: E.width() - vt
                }), P(), W(), z(), f()), F.autoReinitialise && !jt ? jt = setInterval(function() {
                    i(F)
                }, F.autoReinitialiseDelay) : !F.autoReinitialise && jt && clearInterval(jt), u && t.scrollTop(0) && y(u, !1), h && t.scrollLeft(0) && k(h, !1), t.trigger("jsp-initialised", [U || Q])
            }

            function o() {
                Q && (E.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), nt = E.find(">.jspVerticalBar"), it = nt.find(">.jspTrack"), $ = it.find(">.jspDrag"), F.showArrows && (at = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", p(0, -1)).bind("click.jsp", S), ct = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", p(0, 1)).bind("click.jsp", S), F.arrowScrollOnHover && (at.bind("mouseover.jsp", p(0, -1, at)), ct.bind("mouseover.jsp", p(0, 1, ct))), l(it, F.verticalArrowPositions, at, ct)), st = O, E.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    st -= e(this).outerHeight()
                }), $.hover(function() {
                    $.addClass("jspHover")
                }, function() {
                    $.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", S), $.addClass("jspActive");
                    var n = t.pageY - $.position().top;
                    return e("html").bind("mousemove.jsp", function(e) {
                        j(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), s())
            }

            function s() {
                it.height(st + "px"), Z = 0, ot = F.verticalGutter + it.outerWidth(), L.width(q - ot - vt);
                try {
                    0 === nt.position().left && L.css("margin-left", ot + "px")
                } catch (e) {}
            }

            function r() {
                U && (E.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), lt = E.find(">.jspHorizontalBar"), pt = lt.find(">.jspTrack"), _ = pt.find(">.jspDrag"), F.showArrows && (ft = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", p(-1, 0)).bind("click.jsp", S), ht = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", p(1, 0)).bind("click.jsp", S), F.arrowScrollOnHover && (ft.bind("mouseover.jsp", p(-1, 0, ft)), ht.bind("mouseover.jsp", p(1, 0, ht))), l(pt, F.horizontalArrowPositions, ft, ht)), _.hover(function() {
                    _.addClass("jspHover")
                }, function() {
                    _.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", S), _.addClass("jspActive");
                    var n = t.pageX - _.position().left;
                    return e("html").bind("mousemove.jsp", function(e) {
                        v(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), ut = E.innerWidth(), a())
            }

            function a() {
                E.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    ut -= e(this).outerWidth()
                }), pt.width(ut + "px"), tt = 0
            }

            function c() {
                if (U && Q) {
                    var t = pt.outerHeight(),
                        n = it.outerWidth();
                    st -= t, e(lt).find(">.jspCap:visible,>.jspArrow").each(function() {
                        ut += e(this).outerWidth()
                    }), ut -= n, O -= n, q -= t, pt.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), s(), a()
                }
                U && L.width(E.outerWidth() - vt + "px"), G = L.outerHeight(), K = G / O, U && (dt = Math.ceil(1 / N * ut), dt > F.horizontalDragMaxWidth ? dt = F.horizontalDragMaxWidth : dt < F.horizontalDragMinWidth && (dt = F.horizontalDragMinWidth), _.width(dt + "px"), et = ut - dt, m(tt)), Q && (rt = Math.ceil(1 / K * st), rt > F.verticalDragMaxHeight ? rt = F.verticalDragMaxHeight : rt < F.verticalDragMinHeight && (rt = F.verticalDragMinHeight), $.height(rt + "px"), J = st - rt, g(Z))
            }

            function l(e, t, n, i) {
                var o, s = "before",
                    r = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == s ? r = t : t == r && (s = t, o = n, n = i, i = o), e[s](n)[r](i)
            }

            function p(e, t, n) {
                return function() {
                    return u(e, t, this, n), this.blur(), !1
                }
            }

            function u(t, n, i, o) {
                i = e(i).addClass("jspActive");
                var s, r, a = !0,
                    c = function() {
                        0 !== t && bt.scrollByX(t * F.arrowButtonSpeed), 0 !== n && bt.scrollByY(n * F.arrowButtonSpeed), r = setTimeout(c, a ? F.initialDelay : F.arrowRepeatFreq), a = !1
                    };
                c(), s = o ? "mouseout.jsp" : "mouseup.jsp", o = o || e("html"), o.bind(s, function() {
                    i.removeClass("jspActive"), r && clearTimeout(r), r = null, o.unbind(s)
                })
            }

            function d() {
                f(), Q && it.bind("mousedown.jsp", function(t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this),
                            o = i.offset(),
                            s = t.pageY - o.top - Z,
                            r = !0,
                            a = function() {
                                var e = i.offset(),
                                    o = t.pageY - e.top - rt / 2,
                                    l = O * F.scrollPagePercent,
                                    p = J * l / (G - O);
                                if (0 > s) Z - p > o ? bt.scrollByY(-l) : j(o);
                                else {
                                    if (!(s > 0)) return void c();
                                    o > Z + p ? bt.scrollByY(l) : j(o)
                                }
                                n = setTimeout(a, r ? F.initialDelay : F.trackClickRepeatFreq), r = !1
                            },
                            c = function() {
                                n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                            };
                        return a(), e(document).bind("mouseup.jsp", c), !1
                    }
                }), U && pt.bind("mousedown.jsp", function(t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this),
                            o = i.offset(),
                            s = t.pageX - o.left - tt,
                            r = !0,
                            a = function() {
                                var e = i.offset(),
                                    o = t.pageX - e.left - dt / 2,
                                    l = q * F.scrollPagePercent,
                                    p = et * l / (V - q);
                                if (0 > s) tt - p > o ? bt.scrollByX(-l) : v(o);
                                else {
                                    if (!(s > 0)) return void c();
                                    o > tt + p ? bt.scrollByX(l) : v(o)
                                }
                                n = setTimeout(a, r ? F.initialDelay : F.trackClickRepeatFreq), r = !1
                            },
                            c = function() {
                                n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", c)
                            };
                        return a(), e(document).bind("mouseup.jsp", c), !1
                    }
                })
            }

            function f() {
                pt && pt.unbind("mousedown.jsp"), it && it.unbind("mousedown.jsp")
            }

            function h() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), $ && $.removeClass("jspActive"), _ && _.removeClass("jspActive")
            }

            function j(n, i) {
                if (Q) {
                    0 > n ? n = 0 : n > J && (n = J);
                    var o = new e.Event("jsp-will-scroll-y");
                    if (t.trigger(o, [n]), !o.isDefaultPrevented()) {
                        var s = n || 0,
                            r = 0 === s,
                            a = s == J,
                            c = n / J,
                            l = -c * (G - O);
                        void 0 === i && (i = F.animateScroll), i ? bt.animate($, "top", n, g, function() {
                            t.trigger("jsp-user-scroll-y", [-l, r, a])
                        }) : ($.css("top", n), g(n), t.trigger("jsp-user-scroll-y", [-l, r, a]))
                    }
                }
            }

            function g(e) {
                void 0 === e && (e = $.position().top), E.scrollTop(0), Z = e || 0;
                var n = 0 === Z,
                    i = Z == J,
                    o = e / J,
                    s = -o * (G - O);
                (wt != n || kt != i) && (wt = n, kt = i, t.trigger("jsp-arrow-change", [wt, kt, yt, Ct])), b(n, i), L.css("top", s), t.trigger("jsp-scroll-y", [-s, n, i]).trigger("scroll")
            }

            function v(n, i) {
                if (U) {
                    0 > n ? n = 0 : n > et && (n = et);
                    var o = new e.Event("jsp-will-scroll-x");
                    if (t.trigger(o, [n]), !o.isDefaultPrevented()) {
                        var s = n || 0,
                            r = 0 === s,
                            a = s == et,
                            c = n / et,
                            l = -c * (V - q);
                        void 0 === i && (i = F.animateScroll), i ? bt.animate(_, "left", n, m, function() {
                            t.trigger("jsp-user-scroll-x", [-l, r, a])
                        }) : (_.css("left", n), m(n), t.trigger("jsp-user-scroll-x", [-l, r, a]))
                    }
                }
            }

            function m(e) {
                void 0 === e && (e = _.position().left), E.scrollTop(0), tt = e || 0;
                var n = 0 === tt,
                    i = tt == et,
                    o = e / et,
                    s = -o * (V - q);
                (yt != n || Ct != i) && (yt = n, Ct = i, t.trigger("jsp-arrow-change", [wt, kt, yt, Ct])), w(n, i), L.css("left", s), t.trigger("jsp-scroll-x", [-s, n, i]).trigger("scroll")
            }

            function b(e, t) {
                F.showArrows && (at[e ? "addClass" : "removeClass"]("jspDisabled"), ct[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function w(e, t) {
                F.showArrows && (ft[e ? "addClass" : "removeClass"]("jspDisabled"), ht[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function y(e, t) {
                var n = e / (G - O);
                j(n * J, t)
            }

            function k(e, t) {
                var n = e / (V - q);
                v(n * et, t)
            }

            function C(t, n, i) {
                var o, s, r, a, c, l, p, u, d, f = 0,
                    h = 0;
                try {
                    o = e(t)
                } catch (j) {
                    return
                }
                for (s = o.outerHeight(), r = o.outerWidth(), E.scrollTop(0), E.scrollLeft(0); !o.is(".jspPane");)
                    if (f += o.position().top, h += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName)) return;
                a = B(), l = a + O, a > f || n ? u = f - F.horizontalGutter : f + s > l && (u = f - O + s + F.horizontalGutter), isNaN(u) || y(u, i), c = T(), p = c + q, c > h || n ? d = h - F.horizontalGutter : h + r > p && (d = h - q + r + F.horizontalGutter), isNaN(d) || k(d, i)
            }

            function T() {
                return -L.position().left
            }

            function B() {
                return -L.position().top
            }

            function D() {
                var e = G - O;
                return e > 20 && e - B() < 10
            }

            function x() {
                var e = V - q;
                return e > 20 && e - T() < 10
            }

            function H() {
                E.unbind(Bt).bind(Bt, function(e, t, n, i) {
                    tt || (tt = 0), Z || (Z = 0);
                    var o = tt,
                        s = Z,
                        r = e.deltaFactor || F.mouseWheelSpeed;
                    return bt.scrollBy(n * r, -i * r, !1), o == tt && s == Z
                })
            }

            function P() {
                E.unbind(Bt)
            }

            function S() {
                return !1
            }

            function A() {
                L.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                    C(e.target, !1)
                })
            }

            function W() {
                L.find(":input,a").unbind("focus.jsp")
            }

            function Y() {
                function n() {
                    var e = tt,
                        t = Z;
                    switch (i) {
                        case 40:
                            bt.scrollByY(F.keyboardSpeed, !1);
                            break;
                        case 38:
                            bt.scrollByY(-F.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            bt.scrollByY(O * F.scrollPagePercent, !1);
                            break;
                        case 33:
                            bt.scrollByY(-O * F.scrollPagePercent, !1);
                            break;
                        case 39:
                            bt.scrollByX(F.keyboardSpeed, !1);
                            break;
                        case 37:
                            bt.scrollByX(-F.keyboardSpeed, !1)
                    }
                    return o = e != tt || t != Z
                }
                var i, o, s = [];
                U && s.push(lt[0]), Q && s.push(nt[0]), L.bind("focus.jsp", function() {
                    t.focus()
                }), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(t) {
                    if (t.target === this || s.length && e(t.target).closest(s).length) {
                        var r = tt,
                            a = Z;
                        switch (t.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                i = t.keyCode, n();
                                break;
                            case 35:
                                y(G - O), i = null;
                                break;
                            case 36:
                                y(0), i = null
                        }
                        return o = t.keyCode == i && r != tt || a != Z, !o
                    }
                }).bind("keypress.jsp", function(t) {
                    return t.keyCode == i && n(), t.target === this || s.length && e(t.target).closest(s).length ? !o : void 0
                }), F.hideFocus ? (t.css("outline", "none"), "hideFocus" in E[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in E[0] && t.attr("hideFocus", !1))
            }

            function z() {
                t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), L.unbind(".jsp")
            }

            function M() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, i = escape(location.hash.substr(1));
                    try {
                        t = e("#" + i + ', a[name="' + i + '"]')
                    } catch (o) {
                        return
                    }
                    t.length && L.find(i) && (0 === E.scrollTop() ? n = setInterval(function() {
                        E.scrollTop() > 0 && (C(t, !0), e(document).scrollTop(E.position().top), clearInterval(n))
                    }, 50) : (C(t, !0), e(document).scrollTop(E.position().top)))
                }
            }

            function X() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(t) {
                    var n, i, o, s, r, a, c = this.href.substr(0, this.href.indexOf("#")),
                        l = location.href;
                    if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), c === l) {
                        n = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            i = e("#" + n + ', a[name="' + n + '"]')
                        } catch (p) {
                            return
                        }
                        i.length && (o = i.closest(".jspScrollable"), s = o.data("jsp"), s.scrollToElement(i, !0), o[0].scrollIntoView && (r = e(window).scrollTop(), a = i.offset().top, (r > a || a > r + e(window).height()) && o[0].scrollIntoView()), t.preventDefault())
                    }
                }))
            }

            function R() {
                var e, t, n, i, o, s = !1;
                E.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(r) {
                    var a = r.originalEvent.touches[0];
                    e = T(), t = B(), n = a.pageX, i = a.pageY, o = !1, s = !0
                }).bind("touchmove.jsp", function(r) {
                    if (s) {
                        var a = r.originalEvent.touches[0],
                            c = tt,
                            l = Z;
                        return bt.scrollTo(e + n - a.pageX, t + i - a.pageY), o = o || Math.abs(n - a.pageX) > 5 || Math.abs(i - a.pageY) > 5, c == tt && l == Z
                    }
                }).bind("touchend.jsp", function() {
                    s = !1
                }).bind("click.jsp-touchclick", function() {
                    return o ? (o = !1, !1) : void 0
                })
            }

            function I() {
                var e = B(),
                    n = T();
                t.removeClass("jspScrollable").unbind(".jsp"), L.unbind(".jsp"), t.replaceWith(Tt.append(L.children())), Tt.scrollTop(e), Tt.scrollLeft(n), jt && clearInterval(jt)
            }
            var F, L, q, O, E, V, G, N, K, Q, U, $, J, Z, _, et, tt, nt, it, ot, st, rt, at, ct, lt, pt, ut, dt, ft, ht, jt, gt, vt, mt, bt = this,
                wt = !0,
                yt = !0,
                kt = !1,
                Ct = !1,
                Tt = t.clone(!1, !1).empty(),
                Bt = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === t.css("box-sizing") ? (gt = 0, vt = 0) : (gt = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), vt = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(bt, {
                reinitialise: function(t) {
                    t = e.extend({}, F, t), i(t)
                },
                scrollToElement: function(e, t, n) {
                    C(e, t, n)
                },
                scrollTo: function(e, t, n) {
                    k(e, n), y(t, n)
                },
                scrollToX: function(e, t) {
                    k(e, t)
                },
                scrollToY: function(e, t) {
                    y(e, t)
                },
                scrollToPercentX: function(e, t) {
                    k(e * (V - q), t)
                },
                scrollToPercentY: function(e, t) {
                    y(e * (G - O), t)
                },
                scrollBy: function(e, t, n) {
                    bt.scrollByX(e, n), bt.scrollByY(t, n)
                },
                scrollByX: function(e, t) {
                    var n = T() + Math[0 > e ? "floor" : "ceil"](e),
                        i = n / (V - q);
                    v(i * et, t)
                },
                scrollByY: function(e, t) {
                    var n = B() + Math[0 > e ? "floor" : "ceil"](e),
                        i = n / (G - O);
                    j(i * J, t)
                },
                positionDragX: function(e, t) {
                    v(e, t)
                },
                positionDragY: function(e, t) {
                    j(e, t)
                },
                animate: function(e, t, n, i) {
                    var o = {};
                    o[t] = n, e.animate(o, {
                        duration: F.animateDuration,
                        easing: F.animateEase,
                        queue: !1,
                        step: i
                    })
                },
                getContentPositionX: function() {
                    return T()
                },
                getContentPositionY: function() {
                    return B()
                },
                getContentWidth: function() {
                    return V
                },
                getContentHeight: function() {
                    return G
                },
                getPercentScrolledX: function() {
                    return T() / (V - q)
                },
                getPercentScrolledY: function() {
                    return B() / (G - O)
                },
                getIsScrollableH: function() {
                    return U
                },
                getIsScrollableV: function() {
                    return Q
                },
                getContentPane: function() {
                    return L
                },
                scrollToBottom: function(e) {
                    j(J, e)
                },
                hijackInternalLinks: e.noop,
                destroy: function() {
                    I()
                }
            }), i(n)
        }
        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            t[this] = t[this] || t.speed
        }), this.each(function() {
            var i = e(this),
                o = i.data("jsp");
            o ? o.reinitialise(t) : (e("script", i).filter('[type="text/javascript"],:not([type])').remove(), o = new n(i, t), i.data("jsp", o))
        })
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
});
! function(t) {
    "use strict";

    function i(i, s) {
        this.element = t(i), this.settings = t.extend({}, e, s), this._defaults = e, this._init()
    }
    var s = "Morphext",
        e = {
            animation: "bounceIn",
            separator: ",",
            speed: 2e3,
            complete: t.noop
        };
    i.prototype = {
        _init: function() {
            var i = this;
            this.phrases = [], this.element.addClass("morphext"), t.each(this.element.text().split(this.settings.separator), function(t, s) {
                i.phrases.push(s.trim())
            }), this.index = -1, this.animate(), this.start()
        },
        animate: function() {
            this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", t.isFunction(this.settings.complete) && this.settings.complete.call(this)
        },
        start: function() {
            var t = this;
            this._interval = setInterval(function() {
                t.animate()
            }, this.settings.speed)
        },
        stop: function() {
            this._interval = clearInterval(this._interval)
        }
    }, t.fn[s] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new i(this, e))
        })
    }
}(jQuery);
! function(e) {
    function t(t) {
        var n = t || window.event,
            i = [].slice.call(arguments, 1),
            l = 0,
            s = 0,
            o = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (l = n.wheelDelta / 120), n.detail && (l = -n.detail / 3), o = l, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (o = 0, s = -1 * l), void 0 !== n.wheelDeltaY && (o = n.wheelDeltaY / 120), void 0 !== n.wheelDeltaX && (s = -1 * n.wheelDeltaX / 120), i.unshift(t, l, s, o), (e.event.dispatch || e.event.handle).apply(this, i)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var i = n.length; i;) e.event.fixHooks[n[--i]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery);
! function(t, i, n) {
    var s = function(s, e) {
        this.elem = s, this.$elem = t(s), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = t(i), this.sections = {}, this.didScroll = !1, this.$doc = t(n), this.docHeight = this.$doc.height()
    };
    s.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function() {
            return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this
        },
        adjustNav: function(t, i) {
            t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), i.addClass(t.config.currentClass)
        },
        bindInterval: function() {
            var t, i = this;
            i.$win.on("scroll.onePageNav", function() {
                i.didScroll = !0
            }), i.t = setInterval(function() {
                t = i.$doc.height(), i.didScroll && (i.didScroll = !1, i.scrollChange()), t !== i.docHeight && (i.docHeight = t, i.getPositions())
            }, 250)
        },
        getHash: function(t) {
            return t.attr("href").split("#")[1]
        },
        getPositions: function() {
            var i, n, s, e = this;
            e.$nav.each(function() {
                i = e.getHash(t(this)), s = t("#" + i), s.length && (n = s.offset().top, e.sections[i] = Math.round(n))
            })
        },
        getSection: function(t) {
            var i = null,
                n = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var s in this.sections) this.sections[s] - n < t && (i = s);
            return i
        },
        handleClick: function(n) {
            var s = this,
                e = t(n.currentTarget),
                o = e.parent(),
                a = "#" + s.getHash(e);
            o.hasClass(s.config.currentClass) || (s.config.begin && s.config.begin(), s.adjustNav(s, o), s.unbindInterval(), s.scrollTo(a, function() {
                s.config.changeHash && (i.location.hash = a), s.bindInterval(), s.config.end && s.config.end()
            })), n.preventDefault()
        },
        scrollChange: function() {
            var t, i = this.$win.scrollTop(),
                n = this.getSection(i);
            null !== n && (t = this.$elem.find('a[href$="#' + n + '"]').parent(), t.hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
        },
        scrollTo: function(i, n) {
            var s = t(i).offset().top;
            t("html, body").animate({
                scrollTop: s - this.config.scrollOffset
            }, this.config.scrollSpeed, this.config.easing, n)
        },
        unbindInterval: function() {
            clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
        }
    }, s.defaults = s.prototype.defaults, t.fn.onePageNav = function(t) {
        return this.each(function() {
            new s(this, t).init()
        })
    }
}(jQuery, window, document);
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Pipe, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function o(t) {
        if (t.touches !== s) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === s) {
            if (t.pageX !== s) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === s) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, s, n = i.createElement("div"),
            o = t;
        for (e in o)
            if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
        return [!1]
    }

    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function h() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function l() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function c() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function d() {
        return e.navigator.msPointerEnabled
    }
    var p, u, g;
    p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, u = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, g = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Plugins = {}, n.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones,
                e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(n), n = {
                    width: this.settings.autoWidth ? "auto" : s - this.settings.margin
                }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], n.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, n;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            e >= t && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, n.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, n.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, n.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, n.prototype.internalEvents = function() {
        var i = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, n.prototype.onDragStart = function(s) {
        var n, r, a, h;
        if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, n.prototype.onDragMove = function(t) {
        var i, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, n.prototype.onDragEnd = function(e) {
        var s, n, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, n.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, n.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, n.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, n.prototype.closest = function(e) {
        var i = -1,
            s = 30,
            n = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
            return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, n.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, n.prototype.reset = function(t) {
        t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(e, i) {
        var n = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, n.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = 0,
            o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
            } else e = this._items.length - o.items;
        return e
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, n.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(i, s) {
        if (this.settings.loop) {
            var n = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + n,
                h = 0 > r - a ? !0 : !1,
                l = this._clones.length + this._items.length;
            a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.transitionEnd = function(t) {
        return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, n.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, n.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function s() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        var i, s, n, o;
        i = 0, s = this, e.each(function(r, a) {
            n = t(a), o = new Image, o.onload = function() {
                i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
            }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
        })
    }, n.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s) {
        var n = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, n, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.browserSupport = function() {
        if (this.support3d = l(), this.support3d) {
            this.transformVendor = h();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (s = r.match(/(https:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function(e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            h = "src",
            l = "",
            c = this._core.settings,
            d = function(t) {
                n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "https://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "https://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, d(o)
            }
        }))
    }, s.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, s.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, n = t(e.target || e.srcElement),
            o = n.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            a = r.width || "100%",
            h = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="https://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="https://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
    }, s.prototype.isInFullScreen = function() {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, s.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, s.prototype.play = function() {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, s.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, s.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, s.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(s.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i, s = this._core.settings,
            n = this._core.clones().length / 2,
            o = n + this._core.items().length,
            r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - n,
                end: t - n + r - 1
            }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, s = "",
            n = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function(s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return t ? void this._core.to(s, !1, !0) : !1
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t(t) {
        var a = {},
            l = /^jQuery\d+$/;
        return e.each(t.attributes, function(e, t) {
            t.specified && !l.test(t.name) && (a[t.name] = t.value)
        }), a
    }

    function a(t, a) {
        var l = this,
            o = e(l);
        if (l.value == o.attr("placeholder") && o.hasClass(p.customClass))
            if (o.data("placeholder-password")) {
                if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = a;
                o.focus()
            } else l.value = "", o.removeClass(p.customClass), l == r() && l.select()
    }

    function l() {
        var l, r = this,
            o = e(r),
            n = this.id;
        if ("" === r.value) {
            if ("password" === r.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        l = o.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        l = e("<input>").attr(e.extend(t(this), {
                            type: "text"
                        }))
                    }
                    l.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": n
                    }).bind("focus.placeholder", a), o.data({
                        "placeholder-textinput": l,
                        "placeholder-id": n
                    }).before(l)
                }
                o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", n).show()
            }
            o.addClass(p.customClass), o[0].value = o.attr("placeholder")
        } else o.removeClass(p.customClass)
    }

    function r() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var o, n, s = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
        c = "placeholder" in document.createElement("input") && !s,
        u = "placeholder" in document.createElement("textarea") && !s,
        d = e.valHooks,
        i = e.propHooks;
    if (c && u) n = e.fn.placeholder = function() {
        return this
    }, n.input = n.textarea = !0;
    else {
        var p = {};
        n = e.fn.placeholder = function(t) {
            var r = {
                customClass: "placeholder"
            };
            p = e.extend({}, r, t);
            var o = this;
            return o.filter((c ? "textarea" : ":input") + "[placeholder]").not("." + p.customClass).bind({
                "focus.placeholder": a,
                "blur.placeholder": l
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), o
        }, n.input = c, n.textarea = u, o = {
            get: function(t) {
                var a = e(t),
                    l = a.data("placeholder-password");
                return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass(p.customClass) ? "" : t.value
            },
            set: function(t, o) {
                var n = e(t),
                    s = n.data("placeholder-password");
                return s ? s[0].value = o : n.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != r() && l.call(t)) : n.hasClass(p.customClass) ? a.call(t, !0, o) || (t.value = o) : t.value = o, n) : t.value = o
            }
        }, c || (d.input = o, i.value = o), u || (d.textarea = o, i.value = o), e(function() {
            e(document).delegate("form", "submit.placeholder", function() {
                var t = e("." + p.customClass, this).each(a);
                setTimeout(function() {
                    t.each(l)
                }, 10)
            })
        }), e(window).bind("beforeunload.placeholder", function() {
            e("." + p.customClass).each(function() {
                this.value = ""
            })
        })
    }
});
! function(t, i) {
    "use strict";

    function n(n, o) {
        this.$input = t(n), this.$rating = t("<span></span>").css({
            cursor: "default"
        }).insertBefore(this.$input), this.options = function(n) {
            return n.start = parseInt(n.start, 10), n.start = isNaN(n.start) ? i : n.start, n.stop = parseInt(n.stop, 10), n.stop = isNaN(n.stop) ? n.start + s || i : n.stop, n.step = parseInt(n.step, 10) || i, n.fractions = Math.abs(parseInt(n.fractions, 10)) || i, n.scale = Math.abs(parseInt(n.scale, 10)) || i, n = t.extend({}, t.fn.rating.defaults, n), n.filledSelected = n.filledSelected || n.filled, n
        }(t.extend({}, this.$input.data(), o)), this._init()
    }
    var s = 5;
    n.prototype = {
        _init: function() {
            for (var n = this, s = this.$input, o = this.$rating, a = function(t) {
                    return function(n) {
                        s.prop("disabled") || s.prop("readonly") || s.data("readonly") !== i || t.call(this, n)
                    }
                }, e = 1; e <= this._rateToIndex(this.options.stop); e++) {
                var r = t('<div class="rating-symbol"></div>').css({
                    display: "inline-block",
                    position: "relative"
                });
                t('<div class="rating-symbol-background ' + this.options.empty + '"></div>').appendTo(r), t('<div class="rating-symbol-foreground"></div>').append("<span></span>").css({
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    left: 0,
                    right: 0,
                    width: 0
                }).appendTo(r), o.append(r), this.options.extendSymbol.call(r, this._indexToRate(e))
            }
            this._updateRate(s.val()), s.on("change", function() {
                n._updateRate(t(this).val())
            });
            var l, p = function(i) {
                var s = t(i.currentTarget),
                    o = Math.abs((i.pageX || i.originalEvent.touches[0].pageX) - (("rtl" === s.css("direction") && s.width()) + s.offset().left));
                return o = o > 0 ? o : .1 * n.options.scale, s.index() + o / s.width()
            };
            o.on("mousedown touchstart", ".rating-symbol", a(function(t) {
                s.val(n._indexToRate(p(t))).change()
            })).on("mousemove touchmove", ".rating-symbol", a(function(s) {
                var o = n._roundToFraction(p(s));
                o !== l && (l !== i && t(this).trigger("rating.rateleave"), l = o, t(this).trigger("rating.rateenter", [n._indexToRate(l)])), n._fillUntil(o)
            })).on("mouseleave touchend", ".rating-symbol", a(function() {
                l = i, t(this).trigger("rating.rateleave"), n._fillUntil(n._rateToIndex(parseFloat(s.val())))
            }))
        },
        _fillUntil: function(t) {
            var i = this.$rating,
                n = Math.floor(t);
            i.find(".rating-symbol-background").css("visibility", "visible").slice(0, n).css("visibility", "hidden");
            var s = i.find(".rating-symbol-foreground");
            s.width(0), s.slice(0, n).width("auto").find("span").attr("class", this.options.filled), s.eq(t % 1 ? n : n - 1).find("span").attr("class", this.options.filledSelected), s.eq(n).width(t % 1 * 100 + "%")
        },
        _indexToRate: function(t) {
            return this.options.start + Math.floor(t) * this.options.step + this.options.step * this._roundToFraction(t % 1)
        },
        _rateToIndex: function(t) {
            return (t - this.options.start) / this.options.step
        },
        _roundToFraction: function(t) {
            var i = Math.ceil(t % 1 * this.options.fractions) / this.options.fractions,
                n = Math.pow(10, this.options.scale);
            return Math.floor(t) + Math.floor(i * n) / n
        },
        _contains: function(t) {
            var i = this.options.step > 0 ? this.options.start : this.options.stop,
                n = this.options.step > 0 ? this.options.stop : this.options.start;
            return t >= i && n >= t
        },
        _updateRate: function(t) {
            var i = parseFloat(t);
            this._contains(i) && (this._fillUntil(this._rateToIndex(i)), this.$input.val(i))
        },
        rate: function(t) {
            return t === i ? this.$input.val() : void this._updateRate(t)
        }
    }, t.fn.rating = function(i) {
        var s, o = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var a = t(this),
                e = a.data("rating");
            e || a.data("rating", e = new n(this, i)), "string" == typeof i && "_" !== i[0] && (s = e[i].apply(e, o))
        }), s || this
    }, t.fn.rating.defaults = {
        filled: "glyphicon glyphicon-star",
        filledSelected: i,
        empty: "glyphicon glyphicon-star-empty",
        start: 0,
        stop: s,
        step: 1,
        fractions: 1,
        scale: 3,
        extendSymbol: function() {}
    }, t(function() {
        t("input.rating").rating()
    })
}(jQuery);
! function(e, t, n) {
    "use strict";
    e.fn.ReSmenu = function(i) {
        function s(t, n, i) {
            i = i || "", e(t).children("li").each(function() {
                var t = e(this).children("a").attr("href");
                (void 0 === t || t === !1 || "#" === t || 0 === t.length) && (t = ""), e("<option/>", {
                    value: t,
                    html: i + e(this).children("a").text(),
                    disabled: t ? !1 : !0,
                    selected: e(this).hasClass(o.activeClass) && !o.selectOption ? !0 : !1
                }).appendTo(n), e(this).children("ul").length > 0 && s(e(this).children("ul"), n, i + "&nbsp;&nbsp;")
            })
        }

        function l(n, i) {
            var l = e("<div/>", {
                    "class": o.menuClass
                }).prependTo(o.prependTo),
                h = e("<select/>", {
                    id: o.selectId + i
                }).appendTo(l);
            return e(h).bind("change", function() {
                e(this).val().length > 0 && (t.location.href = e(this).val())
            }), o.textBefore && e("<label/>", {
                html: o.textBefore,
                "for": o.selectId + i
            }).prependTo(l), o.selectOption && e("<option/>", {
                text: o.selectOption,
                value: ""
            }).appendTo(h), s(e(n), h), l
        }
        var o = e.extend({
            menuClass: "responsive_menu",
            selectId: "resmenu",
            textBefore: !1,
            selectOption: !1,
            activeClass: "current-menu-item",
            maxWidth: 480,
            prependTo: "body"
        }, i);
        this.each(function() {
            function i() {
                e(t).width() > parseInt(o.maxWidth, 10) ? (e(h).show(), s && e(s).hide()) : (e(h).hide(), s ? e(s).show() : s = l(h, n))
            }
            var s, h = e(this);
            n += 1, i(), e(t).resize(function() {
                i()
            })
        })
    }
}(jQuery, this, 0);
! function(e) {
    var t = !1,
        i = !1,
        n = {
            isUrl: function(e) {
                var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return t.test(e) ? !0 : !1
            },
            loadContent: function(e, t) {
                e.html(t)
            },
            addPrefix: function(e) {
                var t = e.attr("id"),
                    i = e.attr("class");
                "string" == typeof t && "" !== t && e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), e.removeAttr("style")
            },
            execute: function(n, s, a) {
                "function" == typeof s ? (a = s, s = "sidr") : s || (s = "sidr");
                var r, d, l, c = e("#" + s),
                    u = e(c.data("body")),
                    f = e("html"),
                    p = c.outerWidth(!0),
                    g = c.data("speed"),
                    h = c.data("side"),
                    m = c.data("displace"),
                    v = c.data("onOpen"),
                    y = c.data("onClose"),
                    x = "sidr" === s ? "sidr-open" : "sidr-open " + s + "-open";
                if ("open" === n || "toggle" === n && !c.is(":visible")) {
                    if (c.is(":visible") || t) return;
                    if (i !== !1) return void o.close(i, function() {
                        o.open(s)
                    });
                    t = !0, "left" === h ? (r = {
                        left: p + "px"
                    }, d = {
                        left: "0px"
                    }) : (r = {
                        right: p + "px"
                    }, d = {
                        right: "0px"
                    }), u.is("body") && (l = f.scrollTop(), f.css("overflow-x", "hidden").scrollTop(l)), m ? u.addClass("sidr-animating").css({
                        width: u.width(),
                        position: "absolute"
                    }).animate(r, g, function() {
                        e(this).addClass(x)
                    }) : setTimeout(function() {
                        e(this).addClass(x)
                    }, g), c.css("display", "block").animate(d, g, function() {
                        t = !1, i = s, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                    }), v()
                } else {
                    if (!c.is(":visible") || t) return;
                    t = !0, "left" === h ? (r = {
                        left: 0
                    }, d = {
                        left: "-" + p + "px"
                    }) : (r = {
                        right: 0
                    }, d = {
                        right: "-" + p + "px"
                    }), u.is("body") && (l = f.scrollTop(), f.removeAttr("style").scrollTop(l)), u.addClass("sidr-animating").animate(r, g).removeClass(x), c.animate(d, g, function() {
                        c.removeAttr("style").hide(), u.removeAttr("style"), e("html").removeAttr("style"), t = !1, i = !1, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                    }), y()
                }
            }
        },
        o = {
            open: function(e, t) {
                n.execute("open", e, t)
            },
            close: function(e, t) {
                n.execute("close", e, t)
            },
            toggle: function(e, t) {
                n.execute("toggle", e, t)
            },
            toogle: function(e, t) {
                n.execute("toggle", e, t)
            }
        };
    e.sidr = function(t) {
        return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sidr") : o.toggle.apply(this, arguments)
    }, e.fn.sidr = function(t) {
        var i = e.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                onOpen: function() {},
                onClose: function() {}
            }, t),
            s = i.name,
            a = e("#" + s);
        if (0 === a.length && (a = e("<div />").attr("id", s).appendTo(e("body"))), a.addClass("sidr").addClass(i.side).data({
                speed: i.speed,
                side: i.side,
                body: i.body,
                displace: i.displace,
                onOpen: i.onOpen,
                onClose: i.onClose
            }), "function" == typeof i.source) {
            var r = i.source(s);
            n.loadContent(a, r)
        } else if ("string" == typeof i.source && n.isUrl(i.source)) e.get(i.source, function(e) {
            n.loadContent(a, e)
        });
        else if ("string" == typeof i.source) {
            var d = "",
                l = i.source.split(",");
            if (e.each(l, function(t, i) {
                    d += '<div class="sidr-inner">' + e(i).html() + "</div>"
                }), i.renaming) {
                var c = e("<div />").html(d);
                c.find("*").each(function(t, i) {
                    var o = e(i);
                    n.addPrefix(o)
                }), d = c.html()
            }
            n.loadContent(a, d)
        } else null !== i.source && e.error("Invalid Sidr Source");
        return this.each(function() {
            var t = e(this),
                i = t.data("sidr");
            i || (t.data("sidr", s), "ontouchstart" in document.documentElement ? (t.bind("touchstart", function(e) {
                e.originalEvent.touches[0], this.touched = e.timeStamp
            }), t.bind("touchend", function(e) {
                var t = Math.abs(e.timeStamp - this.touched);
                200 > t && (e.preventDefault(), o.toggle(s))
            })) : t.click(function(e) {
                e.preventDefault(), o.toggle(s)
            }))
        })
    }
}(jQuery);
! function(n, e) {
    function t(e, t) {
        this.element = e, this.settings = n.extend({}, a, t), this._defaults = a, this._name = i, this.init()
    }
    var a = {
            label: "MENU",
            duplicate: !0,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            parentTag: "a",
            closeOnClick: !1,
            allowParentLinks: !1,
            nestedParentLinks: !0,
            showChildren: !1,
            init: function() {},
            open: function() {},
            close: function() {}
        },
        i = "slicknav",
        s = "slicknav";
    t.prototype.init = function() {
        var t, a, i = this,
            l = n(this.element),
            o = this.settings;
        o.duplicate ? (i.mobileNav = l.clone(), i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function(e, t) {
            n(t).removeAttr("id")
        })) : i.mobileNav = l, t = s + "_icon", "" === o.label && (t += " " + s + "_no-text"), "a" == o.parentTag && (o.parentTag = 'a href="#"'), i.mobileNav.attr("class", s + "_nav"), a = n('<div class="' + s + '_menu"></div>'), i.btn = n(["<" + o.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + o.label + "</span>", '<span class="' + t + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + o.parentTag + ">"].join("")), n(a).append(i.btn), n(o.prependTo).prepend(a), a.append(i.mobileNav);
        var r = i.mobileNav.find("li");
        n(r).each(function() {
            var e = n(this),
                t = {};
            if (t.children = e.children("ul").attr("role", "menu"), e.data("menu", t), t.children.length > 0) {
                var a = e.contents(),
                    l = !1;
                nodes = [], n(a).each(function() {
                    return n(this).is("ul") ? !1 : (nodes.push(this), void(n(this).is("a") && (l = !0)))
                });
                var r = n("<" + o.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
                if (o.allowParentLinks && !o.nestedParentLinks && l) n(nodes).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
                else {
                    var c = n(nodes).wrapAll(r).parent();
                    c.addClass(s + "_row")
                }
                e.addClass(s + "_collapsed"), e.addClass(s + "_parent");
                var d = n('<span class="' + s + '_arrow">' + o.closedSymbol + "</span>");
                o.allowParentLinks && !o.nestedParentLinks && l && (d = d.wrap(r).parent()), n(nodes).last().after(d)
            } else 0 === e.children().length && e.addClass(s + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function(e) {
                o.closeOnClick && !n(e.target).parent().closest("li").hasClass(s + "_parent") && n(i.btn).click()
            }), o.closeOnClick && o.allowParentLinks && (e.children("a").children("a").click(function() {
                n(i.btn).click()
            }), e.find("." + s + "_parent-link a:not(." + s + "_item)").click(function() {
                n(i.btn).click()
            }))
        }), n(r).each(function() {
            var e = n(this).data("menu");
            o.showChildren || i._visibilityToggle(e.children, null, !1, null, !0)
        }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), n(e).mousedown(function() {
            i._outlines(!1)
        }), n(e).keyup(function() {
            i._outlines(!0)
        }), n(i.btn).click(function(n) {
            n.preventDefault(), i._menuToggle()
        }), i.mobileNav.on("click", "." + s + "_item", function(e) {
            e.preventDefault(), i._itemClick(n(this))
        }), n(i.btn).keydown(function(n) {
            var e = n || event;
            13 == e.keyCode && (n.preventDefault(), i._menuToggle())
        }), i.mobileNav.on("keydown", "." + s + "_item", function(e) {
            var t = e || event;
            13 == t.keyCode && (e.preventDefault(), i._itemClick(n(e.target)))
        }), o.allowParentLinks && o.nestedParentLinks && n("." + s + "_item a").click(function(n) {
            n.stopImmediatePropagation()
        })
    }, t.prototype._menuToggle = function() {
        var n = this,
            e = n.btn,
            t = n.mobileNav;
        e.hasClass(s + "_collapsed") ? (e.removeClass(s + "_collapsed"), e.addClass(s + "_open")) : (e.removeClass(s + "_open"), e.addClass(s + "_collapsed")), e.addClass(s + "_animating"), n._visibilityToggle(t, e.parent(), !0, e)
    }, t.prototype._itemClick = function(n) {
        var e = this,
            t = e.settings,
            a = n.data("menu");
        a || (a = {}, a.arrow = n.children("." + s + "_arrow"), a.ul = n.next("ul"), a.parent = n.parent(), a.parent.hasClass(s + "_parent-link") && (a.parent = n.parent().parent(), a.ul = n.parent().next("ul")), n.data("menu", a)), a.parent.hasClass(s + "_collapsed") ? (a.arrow.html(t.openedSymbol), a.parent.removeClass(s + "_collapsed"), a.parent.addClass(s + "_open"), a.parent.addClass(s + "_animating"), e._visibilityToggle(a.ul, a.parent, !0, n)) : (a.arrow.html(t.closedSymbol), a.parent.addClass(s + "_collapsed"), a.parent.removeClass(s + "_open"), a.parent.addClass(s + "_animating"), e._visibilityToggle(a.ul, a.parent, !0, n))
    }, t.prototype._visibilityToggle = function(e, t, a, i, l) {
        var o = this,
            r = o.settings,
            c = o._getActionItems(e),
            d = 0;
        a && (d = r.duration), e.hasClass(s + "_hidden") ? (e.removeClass(s + "_hidden"), e.slideDown(d, r.easingOpen, function() {
            n(i).removeClass(s + "_animating"), n(t).removeClass(s + "_animating"), l || r.open(i)
        }), e.attr("aria-hidden", "false"), c.attr("tabindex", "0"), o._setVisAttr(e, !1)) : (e.addClass(s + "_hidden"), e.slideUp(d, this.settings.easingClose, function() {
            e.attr("aria-hidden", "true"), c.attr("tabindex", "-1"), o._setVisAttr(e, !0), e.hide(), n(i).removeClass(s + "_animating"), n(t).removeClass(s + "_animating"), l ? "init" == i && r.init() : r.close(i)
        }))
    }, t.prototype._setVisAttr = function(e, t) {
        var a = this,
            i = e.children("li").children("ul").not("." + s + "_hidden");
        i.each(t ? function() {
            var e = n(this);
            e.attr("aria-hidden", "true");
            var i = a._getActionItems(e);
            i.attr("tabindex", "-1"), a._setVisAttr(e, t)
        } : function() {
            var e = n(this);
            e.attr("aria-hidden", "false");
            var i = a._getActionItems(e);
            i.attr("tabindex", "0"), a._setVisAttr(e, t)
        })
    }, t.prototype._getActionItems = function(n) {
        var e = n.data("menu");
        if (!e) {
            e = {};
            var t = n.children("li"),
                a = t.find("a");
            e.links = a.add(t.find("." + s + "_item")), n.data("menu", e)
        }
        return e.links
    }, t.prototype._outlines = function(e) {
        e ? n("." + s + "_item, ." + s + "_btn").css("outline", "") : n("." + s + "_item, ." + s + "_btn").css("outline", "none")
    }, t.prototype.toggle = function() {
        var n = this;
        n._menuToggle()
    }, t.prototype.open = function() {
        var n = this;
        n.btn.hasClass(s + "_collapsed") && n._menuToggle()
    }, t.prototype.close = function() {
        var n = this;
        n.btn.hasClass(s + "_open") && n._menuToggle()
    }, n.fn[i] = function(e) {
        var a = arguments;
        if (void 0 === e || "object" == typeof e) return this.each(function() {
            n.data(this, "plugin_" + i) || n.data(this, "plugin_" + i, new t(this, e))
        });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var s;
            return this.each(function() {
                var l = n.data(this, "plugin_" + i);
                l instanceof t && "function" == typeof l[e] && (s = l[e].apply(l, Array.prototype.slice.call(a, 1)))
            }), void 0 !== s ? s : this
        }
    }
}(jQuery, document, window);
! function(e, n) {
    function t(e, n) {
        h(e).push(n)
    }

    function r(r, a, i) {
        var s = r.children(a.headerTag),
            o = r.children(a.bodyTag);
        s.length > o.length ? $(X, "contents") : s.length < o.length && $(X, "titles");
        var l = a.startIndex;
        if (i.stepCount = s.length, a.saveState && e.cookie) {
            var d = e.cookie(R + m(r)),
                u = parseInt(d, 0);
            !isNaN(u) && u < i.stepCount && (l = u)
        }
        i.currentIndex = l, s.each(function(a) {
            var i = e(this),
                s = o.eq(a),
                l = s.data("mode"),
                d = null == l ? Y.html : g(Y, /^\s*$/.test(l) || isNaN(l) ? l : parseInt(l, 0)),
                u = d === Y.html || s.data("url") === n ? "" : s.data("url"),
                c = d !== Y.html && "1" === s.data("loaded"),
                f = e.extend({}, nn, {
                    title: i.html(),
                    content: d === Y.html ? s.html() : "",
                    contentUrl: u,
                    contentMode: d,
                    contentLoaded: c
                });
            t(r, f)
        })
    }

    function a(e) {
        e.triggerHandler("canceled")
    }

    function i(e, n) {
        return e.currentIndex - n
    }

    function s(n, t) {
        var r = l(n);
        n.unbind(r).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(r), n.removeClass(t.clearFixCssClass + " vertical");
        var a = n.find(".content > *");
        a.removeData("loaded").removeData("mode").removeData("url"), a.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"), n.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();
        var i = e('<{0} class="{1}"></{0}>'.format(n.get(0).tagName, n.attr("class"))),
            s = n._id();
        return null != s && "" !== s && i._id(s), i.html(n.find(".content").html()), n.after(i), n.remove(), i
    }

    function o(e, n) {
        var t = e.find(".steps li").eq(n.currentIndex);
        e.triggerHandler("finishing", [n.currentIndex]) ? (t.addClass("done").removeClass("error"), e.triggerHandler("finished", [n.currentIndex])) : t.addClass("error")
    }

    function l(e) {
        var n = e.data("eventNamespace");
        return null == n && (n = "." + m(e), e.data("eventNamespace", n)), n
    }

    function d(e, n) {
        var t = m(e);
        return e.find("#" + t + V + n)
    }

    function u(e, n) {
        var t = m(e);
        return e.find("#" + t + W + n)
    }

    function c(e, n) {
        var t = m(e);
        return e.find("#" + t + G + n)
    }

    function f(e) {
        return e.data("options")
    }

    function p(e) {
        return e.data("state")
    }

    function h(e) {
        return e.data("steps")
    }

    function v(e, n) {
        var t = h(e);
        return (0 > n || n >= t.length) && $(J), t[n]
    }

    function m(e) {
        var n = e.data("uid");
        return null == n && (n = e._id(), null == n && (n = "steps-uid-".concat(K), e._id(n)), K++, e.data("uid", n)), n
    }

    function g(e, t) {
        if (Q("enumType", e), Q("keyOrValue", t), "string" == typeof t) {
            var r = e[t];
            return r === n && $("The enum key '{0}' does not exist.", t), r
        }
        if ("number" == typeof t) {
            for (var a in e)
                if (e[a] === t) return t;
            $("Invalid enum value '{0}'.", t)
        } else $("Invalid key or value type.")
    }

    function C(e, n, t) {
        return T(e, n, t, y(t, 1))
    }

    function b(e, n, t) {
        return T(e, n, t, i(t, 1))
    }

    function x(e, n, t, r) {
        if ((0 > r || r >= t.stepCount) && $(J), !(n.forceMoveForward && r < t.currentIndex)) {
            var a = t.currentIndex;
            return e.triggerHandler("stepChanging", [t.currentIndex, r]) ? (t.currentIndex = r, j(e, n, t), q(e, n, t, a), S(e, n, t), F(e, n, t), U(e, n, t, r, a, function() {
                e.triggerHandler("stepChanged", [r, a])
            })) : e.find(".steps li").eq(a).addClass("error"), !0
        }
    }

    function y(e, n) {
        return e.currentIndex + n
    }

    function I(n) {
        var t = e.extend(!0, {}, tn, n);
        return this.each(function() {
            var n = e(this),
                a = {
                    currentIndex: t.startIndex,
                    currentStep: null,
                    stepCount: 0,
                    transitionElement: null
                };
            n.data("options", t), n.data("state", a), n.data("steps", []), r(n, t, a), L(n, t, a), E(n, t), t.autoFocus && 0 === K && d(n, t.startIndex).focus(), n.triggerHandler("init", [t.startIndex])
        })
    }

    function _(n, t, r, a, i) {
        (0 > a || a > r.stepCount) && $(J), i = e.extend({}, nn, i), A(n, a, i), r.currentIndex !== r.stepCount && r.currentIndex >= a && (r.currentIndex++, j(n, t, r)), r.stepCount++;
        var s = n.find(".content"),
            o = e("<{0}>{1}</{0}>".format(t.headerTag, i.title)),
            l = e("<{0}></{0}>".format(t.bodyTag));
        return (null == i.contentMode || i.contentMode === Y.html) && l.html(i.content), 0 === a ? s.prepend(l).prepend(o) : u(n, a - 1).after(l).after(o), O(n, r, l, a), P(n, t, r, o, a), D(n, t, r, a), a === r.currentIndex && q(n, t, r), S(n, t, r), n
    }

    function A(e, n, t) {
        h(e).splice(n, 0, t)
    }

    function w(n) {
        var t = e(this),
            r = f(t),
            a = p(t);
        if (r.suppressPaginationOnFocus && t.find(":focus").is(":input")) return n.preventDefault(), !1;
        var i = {
            left: 37,
            right: 39
        };
        n.keyCode === i.left ? (n.preventDefault(), b(t, r, a)) : n.keyCode === i.right && (n.preventDefault(), C(t, r, a))
    }

    function F(n, t, r) {
        if (r.stepCount > 0) {
            var a = r.currentIndex,
                i = v(n, a);
            if (!t.enableContentCache || !i.contentLoaded) switch (g(Y, i.contentMode)) {
                case Y.iframe:
                    n.find(".content > .body").eq(r.currentIndex).empty().html('<iframe src="' + i.contentUrl + '" frameborder="0" scrolling="no" />').data("loaded", "1");
                    break;
                case Y.async:
                    var s = u(n, a)._aria("busy", "true").empty().append(H(t.loadingTemplate, {
                        text: t.labels.loading
                    }));
                    e.ajax({
                        url: i.contentUrl,
                        cache: !1
                    }).done(function(e) {
                        s.empty().html(e)._aria("busy", "false").data("loaded", "1"), n.triggerHandler("contentLoaded", [a])
                    })
            }
        }
    }

    function T(e, n, t, r) {
        var a = t.currentIndex;
        if (r >= 0 && r < t.stepCount && !(n.forceMoveForward && r < t.currentIndex)) {
            var i = d(e, r),
                s = i.parent(),
                o = s.hasClass("disabled");
            return s._enableAria(), i.click(), a === t.currentIndex && o ? (s._enableAria(!1), !1) : !0
        }
        return !1
    }

    function k(n) {
        n.preventDefault();
        var t = e(this),
            r = t.parent().parent().parent().parent(),
            i = f(r),
            s = p(r),
            l = t.attr("href");
        switch (l.substring(l.lastIndexOf("#") + 1)) {
            case "cancel":
                a(r);
                break;
            case "finish":
                o(r, s);
                break;
            case "next":
                C(r, i, s);
                break;
            case "previous":
                b(r, i, s)
        }
    }

    function S(e, n, t) {
        if (n.enablePagination) {
            var r = e.find(".actions a[href$='#finish']").parent(),
                a = e.find(".actions a[href$='#next']").parent();
            if (!n.forceMoveForward) {
                var i = e.find(".actions a[href$='#previous']").parent();
                i._enableAria(t.currentIndex > 0)
            }
            n.enableFinishButton && n.showFinishButtonAlways ? (r._enableAria(t.stepCount > 0), a._enableAria(t.stepCount > 1 && t.stepCount > t.currentIndex + 1)) : (r._showAria(n.enableFinishButton && t.stepCount === t.currentIndex + 1), a._showAria(0 === t.stepCount || t.stepCount > t.currentIndex + 1)._enableAria(t.stepCount > t.currentIndex + 1 || !n.enableFinishButton))
        }
    }

    function q(n, t, r, a) {
        var i = d(n, r.currentIndex),
            s = e('<span class="current-info audible">' + t.labels.current + " </span>"),
            o = n.find(".content > .title");
        if (null != a) {
            var l = d(n, a);
            l.parent().addClass("done").removeClass("error")._selectAria(!1), o.eq(a).removeClass("current").next(".body").removeClass("current"), s = l.find(".current-info"), i.focus()
        }
        i.prepend(s).parent()._selectAria().removeClass("done")._enableAria(), o.eq(r.currentIndex).addClass("current").next(".body").addClass("current")
    }

    function D(e, n, t, r) {
        for (var a = m(e), i = r; i < t.stepCount; i++) {
            var s = a + V + i,
                o = a + W + i,
                l = a + G + i,
                d = e.find(".title").eq(i)._id(l);
            e.find(".steps a").eq(i)._id(s)._aria("controls", o).attr("href", "#" + l).html(H(n.titleTemplate, {
                index: i + 1,
                title: d.html()
            })), e.find(".body").eq(i)._id(o)._aria("labelledby", l)
        }
    }

    function E(e, n) {
        var t = l(e);
        e.bind("canceled" + t, n.onCanceled), e.bind("contentLoaded" + t, n.onContentLoaded), e.bind("finishing" + t, n.onFinishing), e.bind("finished" + t, n.onFinished), e.bind("init" + t, n.onInit), e.bind("stepChanging" + t, n.onStepChanging), e.bind("stepChanged" + t, n.onStepChanged), n.enableKeyNavigation && e.bind("keyup" + t, w), e.find(".actions a").bind("click" + t, k)
    }

    function M(e, n, t, r) {
        return 0 > r || r >= t.stepCount || t.currentIndex === r ? !1 : (N(e, r), t.currentIndex > r && (t.currentIndex--, j(e, n, t)), t.stepCount--, c(e, r).remove(), u(e, r).remove(), d(e, r).parent().remove(), 0 === r && e.find(".steps li").first().addClass("first"), r === t.stepCount && e.find(".steps li").eq(r).addClass("last"), D(e, n, t, r), S(e, n, t), !0)
    }

    function N(e, n) {
        h(e).splice(n, 1)
    }

    function L(n, t, r) {
        var a = '<{0} class="{1}">{2}</{0}>',
            i = g(Z, t.stepsOrientation),
            s = i === Z.vertical ? " vertical" : "",
            o = e(a.format(t.contentContainerTag, "content " + t.clearFixCssClass, n.html())),
            l = e(a.format(t.stepsContainerTag, "steps " + t.clearFixCssClass, '<ul role="tablist"></ul>')),
            d = o.children(t.headerTag),
            u = o.children(t.bodyTag);
        n.attr("role", "application").empty().append(l).append(o).addClass(t.cssClass + " " + t.clearFixCssClass + s), u.each(function(t) {
            O(n, r, e(this), t)
        }), d.each(function(a) {
            P(n, t, r, e(this), a)
        }), q(n, t, r), B(n, t, r)
    }

    function O(e, n, t, r) {
        var a = m(e),
            i = a + W + r,
            s = a + G + r;
        t._id(i).attr("role", "tabpanel")._aria("labelledby", s).addClass("body")._showAria(n.currentIndex === r)
    }

    function B(e, n, t) {
        if (n.enablePagination) {
            var r = '<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',
                a = '<li><a href="#{0}" role="menuitem">{1}</a></li>',
                i = "";
            n.forceMoveForward || (i += a.format("previous", n.labels.previous)), i += a.format("next", n.labels.next), n.enableFinishButton && (i += a.format("finish", n.labels.finish)), n.enableCancelButton && (i += a.format("cancel", n.labels.cancel)), e.append(r.format(n.actionContainerTag, n.clearFixCssClass, n.labels.pagination, i)), S(e, n, t), F(e, n, t)
        }
    }

    function H(e, t) {
        for (var r = e.match(/#([a-z]*)#/gi), a = 0; a < r.length; a++) {
            var i = r[a],
                s = i.substring(1, i.length - 1);
            t[s] === n && $("The key '{0}' does not exist in the substitute collection!", s), e = e.replace(i, t[s])
        }
        return e
    }

    function P(n, t, r, a, i) {
        var s = m(n),
            o = s + V + i,
            d = s + W + i,
            u = s + G + i,
            c = n.find(".steps > ul"),
            f = H(t.titleTemplate, {
                index: i + 1,
                title: a.html()
            }),
            p = e('<li role="tab"><a id="' + o + '" href="#' + u + '" aria-controls="' + d + '">' + f + "</a></li>");
        p._enableAria(t.enableAllSteps || r.currentIndex > i), r.currentIndex > i && p.addClass("done"), a._id(u).attr("tabindex", "-1").addClass("title"), 0 === i ? c.prepend(p) : c.find("li").eq(i - 1).after(p), 0 === i && c.find("li").removeClass("first").eq(i).addClass("first"), i === r.stepCount - 1 && c.find("li").removeClass("last").eq(i).addClass("last"), p.children("a").bind("click" + l(n), z)
    }

    function j(n, t, r) {
        t.saveState && e.cookie && e.cookie(R + m(n), r.currentIndex)
    }

    function U(n, t, r, a, i, s) {
        var o = n.find(".content > .body"),
            l = g(en, t.transitionEffect),
            d = t.transitionEffectSpeed,
            u = o.eq(a),
            c = o.eq(i);
        switch (l) {
            case en.fade:
            case en.slide:
                var f = l === en.fade ? "fadeOut" : "slideUp",
                    h = l === en.fade ? "fadeIn" : "slideDown";
                r.transitionElement = u, c[f](d, function() {
                    var n = e(this)._showAria(!1).parent().parent(),
                        t = p(n);
                    t.transitionElement && (t.transitionElement[h](d, function() {
                        e(this)._showAria()
                    }).promise().done(s), t.transitionElement = null)
                });
                break;
            case en.slideLeft:
                var v = c.outerWidth(!0),
                    m = a > i ? -v : v,
                    C = a > i ? v : -v;
                e.when(c.animate({
                    left: m
                }, d, function() {
                    e(this)._showAria(!1)
                }), u.css("left", C + "px")._showAria().animate({
                    left: 0
                }, d)).done(s);
                break;
            default:
                e.when(c._showAria(!1), u._showAria()).done(s)
        }
    }

    function z(n) {
        n.preventDefault();
        var t = e(this),
            r = t.parent().parent().parent().parent(),
            a = f(r),
            i = p(r),
            s = i.currentIndex;
        if (t.parent().is(":not(.disabled):not(.current)")) {
            var o = t.attr("href"),
                l = parseInt(o.substring(o.lastIndexOf("-") + 1), 0);
            x(r, a, i, l)
        }
        return s === i.currentIndex ? (d(r, s).focus(), !1) : void 0
    }

    function $(e) {
        throw arguments.length > 1 && (e = e.format(Array.prototype.slice.call(arguments, 1))), new Error(e)
    }

    function Q(e, n) {
        null == n && $("The argument '{0}' is null or undefined.", e)
    }
    e.fn.extend({
        _aria: function(e, n) {
            return this.attr("aria-" + e, n)
        },
        _removeAria: function(e) {
            return this.removeAttr("aria-" + e)
        },
        _enableAria: function(e) {
            return null == e || e ? this.removeClass("disabled")._aria("disabled", "false") : this.addClass("disabled")._aria("disabled", "true")
        },
        _showAria: function(e) {
            return null == e || e ? this.show()._aria("hidden", "false") : this.hide()._aria("hidden", "true")
        },
        _selectAria: function(e) {
            return null == e || e ? this.addClass("current")._aria("selected", "true") : this.removeClass("current")._aria("selected", "false")
        },
        _id: function(e) {
            return e ? this.attr("id", e) : this.attr("id")
        }
    }), String.prototype.format || (String.prototype.format = function() {
        for (var n = 1 === arguments.length && e.isArray(arguments[0]) ? arguments[0] : arguments, t = this, r = 0; r < n.length; r++) {
            var a = new RegExp("\\{" + r + "\\}", "gm");
            t = t.replace(a, n[r])
        }
        return t
    });
    var K = 0,
        R = "jQu3ry_5teps_St@te_",
        V = "-t-",
        W = "-p-",
        G = "-h-",
        J = "Index out of range.",
        X = "One or more corresponding step {0} are missing.";
    e.fn.steps = function(n) {
        return e.fn.steps[n] ? e.fn.steps[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.steps") : I.apply(this, arguments)
    }, e.fn.steps.add = function(e) {
        var n = p(this);
        return _(this, f(this), n, n.stepCount, e)
    }, e.fn.steps.destroy = function() {
        return s(this, f(this))
    }, e.fn.steps.finish = function() {
        o(this, p(this))
    }, e.fn.steps.getCurrentIndex = function() {
        return p(this).currentIndex
    }, e.fn.steps.getCurrentStep = function() {
        return v(this, p(this).currentIndex)
    }, e.fn.steps.getStep = function(e) {
        return v(this, e)
    }, e.fn.steps.insert = function(e, n) {
        return _(this, f(this), p(this), e, n)
    }, e.fn.steps.next = function() {
        return C(this, f(this), p(this))
    }, e.fn.steps.previous = function() {
        return b(this, f(this), p(this))
    }, e.fn.steps.remove = function(e) {
        return M(this, f(this), p(this), e)
    }, e.fn.steps.setStep = function() {
        throw new Error("Not yet implemented!")
    }, e.fn.steps.skip = function() {
        throw new Error("Not yet implemented!")
    };
    var Y = e.fn.steps.contentMode = {
            html: 0,
            iframe: 1,
            async: 2
        },
        Z = e.fn.steps.stepsOrientation = {
            horizontal: 0,
            vertical: 1
        },
        en = e.fn.steps.transitionEffect = {
            none: 0,
            fade: 1,
            slide: 2,
            slideLeft: 3
        },
        nn = e.fn.steps.stepModel = {
            title: "",
            content: "",
            contentUrl: "",
            contentMode: Y.html,
            contentLoaded: !1
        },
        tn = e.fn.steps.defaults = {
            headerTag: "h1",
            bodyTag: "div",
            contentContainerTag: "div",
            actionContainerTag: "div",
            stepsContainerTag: "div",
            cssClass: "wizard",
            clearFixCssClass: "clearfix",
            stepsOrientation: Z.horizontal,
            titleTemplate: '<span class="number">#index#.</span> #title#',
            loadingTemplate: '<span class="spinner"></span> #text#',
            autoFocus: !1,
            enableAllSteps: !1,
            enableKeyNavigation: !0,
            enablePagination: !0,
            suppressPaginationOnFocus: !0,
            enableContentCache: !0,
            enableCancelButton: !1,
            enableFinishButton: !0,
            preloadContent: !1,
            showFinishButtonAlways: !1,
            forceMoveForward: !1,
            saveState: !1,
            startIndex: 0,
            transitionEffect: en.none,
            transitionEffectSpeed: 200,
            onStepChanging: function() {
                return !0
            },
            onStepChanged: function() {},
            onCanceled: function() {},
            onFinishing: function() {
                return !0
            },
            onFinished: function() {},
            onContentLoaded: function() {},
            onInit: function() {},
            labels: {
                cancel: "Cancel",
                current: "current step:",
                pagination: "Pagination",
                finish: "Finish",
                next: "Next",
                previous: "Previous",
                loading: "Loading ..."
            }
        }
}(jQuery);
! function(e, s) {
    "use strict";
    var n = function() {
        var n = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            o = function() {
                var n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                return n && e(s).load(function() {
                    e("body").children().on("click", e.noop)
                }), n
            }(),
            t = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            i = function() {
                return !!s.PointerEvent
            }(),
            r = function(e, s) {
                var o = n.menuClass;
                s.cssArrows && (o += " " + n.menuArrowClass), e.toggleClass(o)
            },
            a = function(s, o) {
                return s.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n.bcClass).filter(function() {
                    return e(this).children(o.popUpSelector).hide().show().length
                }).removeClass(o.pathClass)
            },
            l = function(e) {
                e.children("a").toggleClass(n.anchorClass)
            },
            h = function(e) {
                var s = e.css("ms-touch-action"),
                    n = e.css("touch-action");
                n = n || s, n = "pan-y" === n ? "auto" : "pan-y", e.css({
                    "ms-touch-action": n,
                    "touch-action": n
                })
            },
            u = function(s, n) {
                var r = "li:has(" + n.popUpSelector + ")";
                e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
                var a = "MSPointerDown.superfish";
                i && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", n, p)
            },
            p = function(s) {
                var n = e(this),
                    o = n.siblings(s.data.popUpSelector);
                o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))())
            },
            c = function() {
                var s = e(this),
                    n = m(s);
                clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            f = function() {
                var s = e(this),
                    n = m(s);
                o ? e.proxy(d, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(d, s, n), n.delay))
            },
            d = function(s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)())
            },
            v = function(e) {
                return e.closest("." + n.menuClass)
            },
            m = function(e) {
                return v(e).data("sf-options")
            };
        return {
            hide: function(s) {
                if (this.length) {
                    var n = this,
                        o = m(n);
                    if (!o) return this;
                    var t = o.retainPath === !0 ? o.$path : "",
                        i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),
                        r = o.speedOut;
                    s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function() {
                        var s = e(this);
                        o.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = m(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    n = s.children(e.popUpSelector);
                return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(n)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var s, o = e(this),
                        t = o.data("sf-options");
                    return t ? (s = o.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(o, t), l(s), h(o), o.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), t.$path.removeClass(t.hoverClass + " " + n.bcClass).addClass(t.pathClass), o.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(o), void o.removeData("sf-options")) : !1
                })
            },
            init: function(s) {
                return this.each(function() {
                    var o = e(this);
                    if (o.data("sf-options")) return !1;
                    var t = e.extend({}, e.fn.superfish.defaults, s),
                        i = o.find(t.popUpSelector).parent("li");
                    t.$path = a(o, t), o.data("sf-options", t), r(o, t), l(i), h(o), u(o, t), i.not("." + n.bcClass).superfish("hide", !0), t.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(s) {
        return n[s] ? n[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }
}(jQuery, window);
! function(t) {
    t.fn.supersubs = function(i) {
        var e = t.extend({}, t.fn.supersubs.defaults, i);
        return this.each(function() {
            var i = t(this),
                s = t.meta ? t.extend({}, e, i.data()) : e,
                n = i.find("ul").show(),
                a = t('<li id="menu-fontsize">&#8212;</li>').css({
                    padding: 0,
                    position: "absolute",
                    top: "-999em",
                    width: "auto"
                }).appendTo(i)[0].clientWidth;
            t("#menu-fontsize").remove(), n.each(function() {
                var i = t(this),
                    e = i.children(),
                    n = e.children("a"),
                    d = e.css("white-space", "nowrap").css("float");
                i.add(e).add(n).css({
                    "float": "none",
                    width: "auto"
                });
                var h = i[0].clientWidth / a;
                h += s.extraWidth, h > s.maxWidth ? h = s.maxWidth : h < s.minWidth && (h = s.minWidth), h += "em", i.css("width", h), e.css({
                    "float": d,
                    width: "100%",
                    "white-space": "normal"
                }).each(function() {
                    var i = t(this).children("ul"),
                        e = void 0 !== i.css("left") ? "left" : "right";
                    i.css(e, "100%")
                })
            }).hide()
        })
    }, t.fn.supersubs.defaults = {
        minWidth: 9,
        maxWidth: 25,
        extraWidth: 0
    }
}(jQuery);
(function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = [].slice;
    ! function(n) {
        var i;
        return i = function() {
            function t(t, i) {
                this._eventHandler = e(this._eventHandler, this), this.options = n.extend({}, this.defaults, i), this.$el = n(t), this.elSelector = this._getSelector(this.$el), this.$el.addClass("tendina"), this.linkSelector = "" + this.elSelector + " a", this.$listElements = n(this.linkSelector).parent("li"), this._hideSubmenus(), this.mouseEvent = this.options.onHover === !0 ? "mouseenter.tendina" : "click.tendina", this._bindEvents(), null !== this.options.activeMenu && this._openActiveMenu(this.options.activeMenu)
            }
            return t.prototype.defaults = {
                animate: !0,
                speed: 500,
                onHover: !1,
                hoverDelay: 200,
                activeMenu: null
            }, t.prototype._bindEvents = function() {
                return n(document).on(this.mouseEvent, this.linkSelector, this._eventHandler)
            }, t.prototype._unbindEvents = function() {
                return n(document).off(this.mouseEvent)
            }, t.prototype._getSelector = function(e) {
                var t, i, s;
                return i = null != (s = n(e).attr("class")) ? s.split(" ")[0] : void 0, t = n(e).attr("id"), void 0 !== t ? "#" + t : "." + i
            }, t.prototype._isFirstLevel = function(e) {
                return n(e).parent().parent().hasClass("tendina") ? !0 : void 0
            }, t.prototype._eventHandler = function(e) {
                var t;
                return t = e.currentTarget, this._hasChildren(t) && this._IsChildrenHidden(t) ? (e.preventDefault(), this.options.onHover ? setTimeout(function(e) {
                    return function() {
                        return n(t).is(":hover") ? e._openSubmenu(t) : void 0
                    }
                }(this), this.options.hoverDelay) : this._openSubmenu(t)) : this._isCurrentlyOpen(t) && this._hasChildren(t) && (e.preventDefault(), !this.options.onHover) ? this._closeSubmenu(t) : void 0
            }, t.prototype._openSubmenu = function(e) {
                var t, i;
                return i = n(e).next("ul"), t = this.$el.find("> .selected ul").not(i).not(i.parents("ul")), n(e).parent("li").addClass("selected"), this._close(t), this.$el.find(".selected").not(i.parents("li")).removeClass("selected"), this._open(i), this.options.openCallback ? this.options.openCallback(n(e).parent()) : void 0
            }, t.prototype._closeSubmenu = function(e) {
                var t, i;
                return i = n(e).next("ul"), t = i.find("li.selected"), n(e).parent().removeClass("selected"), this._close(i), t.removeClass("selected"), this._close(t.find("ul")), this.options.closeCallback ? this.options.closeCallback(n(e).parent()) : void 0
            }, t.prototype._open = function(e) {
                return this.options.animate ? e.stop(!0, !0).slideDown(this.options.speed) : e.show()
            }, t.prototype._close = function(e) {
                return this.options.animate ? e.stop(!0, !0).slideUp(this.options.speed) : e.hide()
            }, t.prototype._hasChildren = function(e) {
                return n(e).next("ul").length > 0
            }, t.prototype._IsChildrenHidden = function(e) {
                return n(e).next("ul").is(":hidden")
            }, t.prototype._isCurrentlyOpen = function(e) {
                return n(e).parent().hasClass("selected")
            }, t.prototype._hideSubmenus = function() {
                return this.$el.find("ul").hide()
            }, t.prototype._showSubmenus = function() {
                return this.$el.find("ul").show(), this.$el.find("li").addClass("selected")
            }, t.prototype._openActiveMenu = function(e) {
                var t, n;
                return t = e instanceof jQuery ? e : this.$el.find(e), n = t.closest("ul").parents("li").find("> a"), this._hasChildren(n) && this._IsChildrenHidden(n) ? n.next("ul").show() : t.next("ul").show(), t.parent().addClass("selected"), n.parent().addClass("selected")
            }, t.prototype.destroy = function() {
                return this.$el.removeData("tendina"), this._unbindEvents(), this._showSubmenus(), this.$el.removeClass("tendina"), this.$el.find(".selected").removeClass("selected")
            }, t.prototype.hideAll = function() {
                return this._hideSubmenus()
            }, t.prototype.showAll = function() {
                return this._showSubmenus()
            }, t
        }(), n.fn.extend({
            tendina: function() {
                var e, s;
                return s = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], this.each(function() {
                    var t, o;
                    return t = n(this), o = t.data("tendina"), o || t.data("tendina", o = new i(this, s)), "string" == typeof s ? o[s].apply(o, e) : void 0
                })
            }
        })
    }(window.jQuery, window)
}).call(this);
! function(n) {
    function e(e) {
        function i(e, i, a, t) {
            function l(e, i) {
                var s = n("<li>").appendTo(i);
                if (a = a || t.length > 0, a ? s.append(n("<span>").text(e.label)) : s.text(e.label), t.length > 0) {
                    var d = "url(" + t[e.imageIndex] + ")",
                        o = s.find("span");
                    o.addClass("has-node-icon"), o.css("background-image", d)
                }
                if (void 0 != e.children && e.children.length > 0)
                    for (var r = n("<ul>").appendTo(s), c = 0; c < e.children.length; c++) {
                        var u = e.children[c];
                        l(u, r)
                    }
                return s
            }
            for (var s = 0; s < e.length; s++) l(e[s], i)
        }
        e.addClass("treeview");
        var a = e.find("li>ul").parent();
        return {
            init: function(t) {
                t = t || {};
                var l = {
                        model: null,
                        useSpan: !1,
                        imageList: [],
                        expanded: !1
                    },
                    s = {};
                "undefined" != typeof t.concat && (l.model = t, t = null), s = n.extend(l, t), null != s.model && (i(s.model, e, s.useSpan, s.imageList), a = e.find("li>ul").parent()), a.addClass("contains-items"), s.expanded ? a.addClass("items-expanded") : e.find("ul").css("display", "none"), e.find(".contains-items").on("click", function(e) {
                    if (n(e.target).hasClass("contains-items") || n(e.target).parent().hasClass("contains-items")) {
                        n(this).toggleClass("items-expanded");
                        var i = n(this).find(">ul");
                        i.slideToggle(), e.stopPropagation()
                    }
                })
            },
            expandAll: function() {
                var n = e.find(".contains-items");
                n.find("ul").slideDown(), n.addClass("items-expanded")
            },
            collapseAll: function() {
                var n = e.find(".contains-items");
                n.find("ul").slideUp(), n.removeClass("items-expanded")
            }
        }
    }
    n && (n.fn.treeView = function(i) {
        var a = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
        return this.each(function() {
            var t = new e(n(this));
            return t[i] ? t[i](a) : void t.init(i)
        })
    })
}(window.jQuery);
! function(t) {
    t.fn.twentytwenty = function(e) {
        var e = t.extend({
            default_offset_pct: .5,
            orientation: "horizontal"
        }, e);
        return this.each(function() {
            var n = e.default_offset_pct,
                i = t(this),
                a = e.orientation,
                s = "vertical" === a ? "down" : "left",
                d = "vertical" === a ? "up" : "right";
            i.wrap("<div class='twentytwenty-wrapper twentytwenty-" + a + "'></div>"), i.append("<div class='twentytwenty-overlay'></div>");
            var r = i.find("img:first"),
                w = i.find("img:last");
            i.append("<div class='twentytwenty-handle'></div>");
            var c = i.find(".twentytwenty-handle");
            c.append("<span class='twentytwenty-" + s + "-arrow'></span>"), c.append("<span class='twentytwenty-" + d + "-arrow'></span>"), i.addClass("twentytwenty-container"), r.addClass("twentytwenty-before"), w.addClass("twentytwenty-after");
            var o = i.find(".twentytwenty-overlay");
            o.append("<div class='twentytwenty-before-label'></div>"), o.append("<div class='twentytwenty-after-label'></div>");
            var f = function(t) {
                    var e = r.width(),
                        n = r.height();
                    return {
                        w: e + "px",
                        h: n + "px",
                        cw: t * e + "px",
                        ch: t * n + "px"
                    }
                },
                l = function(t) {
                    "vertical" === a ? r.css("clip", "rect(0," + t.w + "," + t.ch + ",0)") : r.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"), i.css("height", t.h)
                },
                v = function(t) {
                    var e = f(t);
                    c.css("vertical" === a ? "top" : "left", "vertical" === a ? e.ch : e.cw), l(e)
                };
            t(window).on("resize.twentytwenty", function() {
                v(n)
            });
            var p = 0,
                y = 0;
            c.on("movestart", function(t) {
                (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== a ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === a && t.preventDefault(), i.addClass("active"), p = i.offset().left, offsetY = i.offset().top, y = r.width(), imgHeight = r.height()
            }), c.on("moveend", function() {
                i.removeClass("active")
            }), c.on("move", function(t) {
                i.hasClass("active") && (n = "vertical" === a ? (t.pageY - offsetY) / imgHeight : (t.pageX - p) / y, 0 > n && (n = 0), n > 1 && (n = 1), v(n))
            }), i.find("img").on("mousedown", function(t) {
                t.preventDefault()
            }), t(window).trigger("resize.twentytwenty")
        })
    }
}(jQuery);
! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e) {
        var t, o, i, r, s, n, a, p = {};
        for (s = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), a = 0, n = s.length; n > a && (o = s[a], -1 === o.search(/^(http|https|ftp):\/\//) && -1 !== o.search(":")); a++) t = o.indexOf(":"), i = o.substring(0, t), r = o.substring(t + 1), r || (r = void 0), "string" == typeof r && (r = "true" === r || ("false" === r ? !1 : r)), "string" == typeof r && (r = isNaN(r) ? r : +r), p[i] = r;
        return null == i && null == r ? e : p
    }

    function o(e) {
        e = "" + e;
        var t, o, i, r = e.split(/\s+/),
            s = "50%",
            n = "50%";
        for (i = 0, t = r.length; t > i; i++) o = r[i], "left" === o ? s = "0%" : "right" === o ? s = "100%" : "top" === o ? n = "0%" : "bottom" === o ? n = "100%" : "center" === o ? 0 === i ? s = "50%" : n = "50%" : 0 === i ? s = o : n = o;
        return {
            x: s,
            y: n
        }
    }

    function i(t, o) {
        var i = function() {
            o(this.src)
        };
        e('<img src="' + t + '.gif">').load(i), e('<img src="' + t + '.jpg">').load(i), e('<img src="' + t + '.jpeg">').load(i), e('<img src="' + t + '.png">').load(i)
    }

    function r(o, i, r) {
        if (this.$element = e(o), "string" == typeof i && (i = t(i)), r ? "string" == typeof r && (r = t(r)) : r = {}, "string" == typeof i) i = i.replace(/\.\w*$/, "");
        else if ("object" == typeof i)
            for (var s in i) i.hasOwnProperty(s) && (i[s] = i[s].replace(/\.\w*$/, ""));
        this.settings = e.extend({}, n, r), this.path = i;
        try {
            this.init()
        } catch (p) {
            if (p.message !== a) throw p
        }
    }
    var s = "vide",
        n = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0,
            bgColor: "transparent",
            className: ""
        },
        a = "Not implemented";
    r.prototype.init = function() {
        var t, r, n = this,
            p = n.path,
            c = p,
            d = "",
            u = n.$element,
            l = n.settings,
            g = o(l.position),
            f = l.posterType;
        r = n.$wrapper = e("<div>").addClass(l.className).css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-color": l.bgColor,
            "background-repeat": "no-repeat",
            "background-position": g.x + " " + g.y
        }), "object" == typeof p && (p.poster ? c = p.poster : p.mp4 ? c = p.mp4 : p.webm ? c = p.webm : p.ogv && (c = p.ogv)), "detect" === f ? i(c, function(e) {
            r.css("background-image", "url(" + e + ")")
        }) : "none" !== f && r.css("background-image", "url(" + c + "." + f + ")"), "static" === u.css("position") && u.css("position", "relative"), u.prepend(r), "object" == typeof p ? (p.mp4 && (d += '<source src="' + p.mp4 + '.mp4" type="video/mp4">'), p.webm && (d += '<source src="' + p.webm + '.webm" type="video/webm">'), p.ogv && (d += '<source src="' + p.ogv + '.ogv" type="video/ogg">'), t = n.$video = e("<video>" + d + "</video>")) : t = n.$video = e('<video><source src="' + p + '.mp4" type="video/mp4"><source src="' + p + '.webm" type="video/webm"><source src="' + p + '.ogv" type="video/ogg"></video>');
        try {
            t.prop({
                autoplay: l.autoplay,
                loop: l.loop,
                volume: l.volume,
                muted: l.muted,
                defaultMuted: l.muted,
                playbackRate: l.playbackRate,
                defaultPlaybackRate: l.playbackRate
            })
        } catch (h) {
            throw new Error(a)
        }
        t.css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: g.y,
            left: g.x,
            "-webkit-transform": "translate(-" + g.x + ", -" + g.y + ")",
            "-ms-transform": "translate(-" + g.x + ", -" + g.y + ")",
            "-moz-transform": "translate(-" + g.x + ", -" + g.y + ")",
            transform: "translate(-" + g.x + ", -" + g.y + ")",
            visibility: "hidden",
            opacity: 0
        }).one("canplaythrough." + s, function() {
            n.resize()
        }).one("playing." + s, function() {
            t.css({
                visibility: "visible",
                opacity: 1
            }), r.css("background-image", "none")
        }), u.on("resize." + s, function() {
            l.resizing && n.resize()
        }), r.append(t)
    }, r.prototype.getVideoObject = function() {
        return this.$video[0]
    }, r.prototype.resize = function() {
        if (this.$video) {
            var e = this.$wrapper,
                t = this.$video,
                o = t[0],
                i = o.videoHeight,
                r = o.videoWidth,
                s = e.height(),
                n = e.width();
            t.css(n / r > s / i ? {
                width: n + 2,
                height: "auto"
            } : {
                width: "auto",
                height: s + 2
            })
        }
    }, r.prototype.destroy = function() {
        delete e[s].lookup[this.index], this.$video && this.$video.off(s), this.$element.off(s).removeData(s), this.$wrapper.remove()
    }, e[s] = {
        lookup: []
    }, e.fn[s] = function(t, o) {
        var i;
        return this.each(function() {
            i = e.data(this, s), i && i.destroy(), i = new r(this, t, o), i.index = e[s].lookup.push(i) - 1, e.data(this, s, i)
        }), this
    }, e(document).ready(function() {
        var t = e(window);
        t.on("resize." + s, function() {
            for (var t, o = e[s].lookup.length, i = 0; o > i; i++) t = e[s].lookup[i], t && t.settings.resizing && t.resize()
        }), t.on("unload." + s, function() {
            return !1
        }), e(document).find("[data-" + s + "-bg]").each(function(t, o) {
            var i = e(o),
                r = i.data(s + "-options"),
                n = i.data(s + "-bg");
            i[s](n, r)
        })
    })
});
(function(e, t) {
    "use strict";
    var a = a || function(a, i) {
        var s = function() {},
            n = {
                element: null,
                apiKey: "",
                user: null,
                channelId: null,
                fullscreen: !1,
                accent: "#fff",
                controls: !0,
                annotations: !1,
                autoplay: !1,
                chainVideos: !0,
                browsePlaylists: !1,
                playerTheme: "dark",
                listTheme: "dark",
                responsive: !1,
                playId: "",
                wmode: "opaque",
                events: {
                    videoReady: s,
                    stateChange: s
                }
            },
            l = {},
            o = {
                events: {
                    addEvent: function(e, t, a) {
                        return e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent ? e.attachEvent("on" + t, a) : void 0
                    },
                    removeEvent: function(e, t, a) {
                        return e.addEventListener ? e.removeEventListener(t, a, !1) : e.attachEvent ? e.detachEvent("on" + t, a) : void 0
                    },
                    prevent: function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }
                },
                addCSS: function(e) {
                    var a = t.getElementsByTagName("head")[0],
                        i = t.createElement("style");
                    i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), a.appendChild(i)
                },
                addCommas: function(e) {
                    for (var t = e.split("."), a = t[0], i = t.length > 1 ? "." + t[1] : "", s = /(\d+)(\d{3})/; s.test(a);) a = a.replace(s, "$1,$2");
                    return a + i
                },
                parentUntil: function(e, t) {
                    for (; e.parentNode;) {
                        if (e.getAttribute && e.getAttribute(t)) return e;
                        e = e.parentNode
                    }
                    return null
                },
                ajax: {
                    get: function(t, a) {
                        var i;
                        i = e.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), i.onreadystatechange = function() {
                            4 === i.readyState && 200 === i.status && a.call(this, JSON.parse(i.responseText))
                        }, i.open("GET", t, !0), i.send()
                    }
                },
                endpoints: {
                    base: "https://www.googleapis.com/youtube/v3/",
                    userInfo: function() {
                        return o.endpoints.base + "channels?" + n.cid + "&key=" + n.apiKey + "&part=snippet,contentDetails,statistics"
                    },
                    playlistInfo: function(e) {
                        return o.endpoints.base + "playlists?id=" + e + "&key=" + n.apiKey + "&maxResults=50&part=snippet"
                    },
                    userPlaylists: function() {
                        return o.endpoints.base + "playlists?channelId=" + n.channelId + "&key=" + n.apiKey + "&maxResults=50&part=snippet"
                    },
                    playlistVids: function() {
                        return o.endpoints.base + "playlistItems?playlistId=" + n.pid + "&key=" + n.apiKey + "&maxResults=50&part=contentDetails"
                    },
                    videoInfo: function() {
                        return o.endpoints.base + "videos?id=" + n.videoString + "&key=" + n.apiKey + "&maxResults=50&part=snippet,contentDetails,status,statistics"
                    }
                },
                deepExtend: function(e, t) {
                    var a;
                    for (a in t) t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {}, o.deepExtend(e[a], t[a])) : e[a] = t[a];
                    return e
                }
            },
            r = {
                youtube: function() {
                    if ("undefined" == typeof YT) {
                        var e = t.createElement("script");
                        e.src = "https://www.youtube.com/iframe_api";
                        var a = t.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(e, a)
                    }
                },
                build: function() {
                    n.channelId ? n.cid = "id=" + n.channelId : n.user && (n.cid = "forUsername=" + n.user), n.element.className = "ytv-canvas", n.fullscreen && (n.element.className += " ytv-full"), o.addCSS("#" + a + " .ytv-list .ytv-active a{border-left-color: " + n.accent + ";}"), n.responsive && o.addCSS("#" + a + " .ytv-video{position: relative; padding-bottom: 39.4%; /* 16:9 of 70%*/height: 0; width: 70%;} #" + a + " .ytv-video iframe{position: absolute; top: 0; left: 0;} #" + a + " .ytv-list{width: 30%;} #" + a + " .ytv-playlist-open .ytv-arrow{top: 0px;}@media only screen and (max-width:992px) {#" + a + " .ytv-list{position: relative; display: block;width: 0; padding-bottom: 40%;left: auto; right: auto;top: auto; width: 100%;} #" + a + " .ytv-video{position: relative; padding-bottom: 56.25%; /* 16:9 */height: 0; position: relative;display: block; left: auto;right: auto; top: auto; width: 100%;}}"), "dark" == n.listTheme && o.addCSS(" #" + a + ".ytv-canvas ::-webkit-scrollbar{border-left: 1px solid #000;} #" + a + ".ytv-canvas ::-webkit-scrollbar-thumb{background: rgba(255,255,255,0.2);}"), "light" == n.listTheme && o.addCSS(" #" + a + ".ytv-canvas{background: #ccc;} #" + a + ".ytv-canvas ::-webkit-scrollbar{border-left: 1px solid rgba(28,28,28,0.1);} #" + a + ".ytv-canvas ::-webkit-scrollbar-thumb{background: rgba(28,28,28,0.3);} #" + a + " .ytv-list .ytv-active a{background: rgba(0,0,0,0.2);} #" + a + " .ytv-list a{color: #282828; border-top: 1px solid rgba(0,0,0,0.1); border-bottom: 1px solid rgba(204,204,204,0.5);} #" + a + " .ytv-list a:hover, #" + a + " .ytv-list-header .ytv-playlists a:hover{ background: rgba(0,0,0,0.2);} #" + a + " .ytv-list a:active, #" + a + " .ytv-list-header .ytv-playlists a:active{ background: rgba(0,0,0,0.2);} #" + a + " .ytv-list .ytv-thumb-stroke{outline: 1px solid rgba(0,0,0,0.1);} #" + a + " .ytv-list .ytv-thumb{outline: 1px solid rgba(255,255,255,0.5);} #" + a + " .ytv-list-header{-webkit-box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2); -moz-box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2); box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);} #" + a + " .ytv-list-header a{background: rgba(0,0,0,0.2);} #" + a + " .ytv-playlists{background: #ccc;}")
                },
                userUploads: function(e) {
                    e && e.items && (n.pid = e.items[0].contentDetails.relatedPlaylists.uploads, o.ajax.get(o.endpoints.playlistVids(), r.compileVideos))
                },
                selectedPlaylist: function(e) {
                    e && e.items && (n.channelId || n.user || (n.cid = "id=" + (n.channelId = e.items[0].snippet.channelId)), n.currentPlaylist = e.items[0].snippet.title, n.pid = e.items[0].id, o.ajax.get(o.endpoints.playlistVids(), r.compileVideos))
                },
                compileVideos: function(e) {
                    if (e && e.items) {
                        var t, a = e.items;
                        for (n.videoString = "", t = 0; t < a.length; t++) n.videoString += a[t].contentDetails.videoId, t < a.length - 1 && (n.videoString += ",");
                        o.ajax.get(o.endpoints.videoInfo(), r.compileList)
                    }
                },
                playlists: function(e) {
                    if (e && e.items) {
                        var t, a = '<div class="ytv-playlists"><ul>',
                            i = e.items;
                        for (t = 0; t < i.length; t++) {
                            var s = {
                                title: i[t].snippet.title,
                                plid: i[t].id,
                                thumb: i[t].snippet.thumbnails.medium.url
                            };
                            a += '<a href="#" data-ytv-playlist="' + s.plid + '">', a += '<div class="ytv-thumb"><div class="ytv-thumb-stroke"></div><img src="' + s.thumb + '"></div>', a += "<span>" + s.title + "</span>", a += "</a>"
                        }
                        a += "</ul></div>";
                        var l = n.element.getElementsByClassName("ytv-list-header")[0],
                            o = l.children[0];
                        o.href = "#", o.target = "", o.setAttribute("data-ytv-playlist-toggle", "true"), n.element.getElementsByClassName("ytv-list-header")[0].innerHTML += a, l.className += " ytv-has-playlists"
                    }
                },
                compileList: function(e) {
                    e && e.items && o.ajax.get(o.endpoints.userInfo(), function(t) {
                        var a, i = "",
                            s = {
                                title: t.items[0].snippet.title,
                                url: "//youtube.com/channel/" + t.items[0].id,
                                thumb: t.items[0].snippet.thumbnails["default"].url,
                                summary: t.items[0].snippet.description,
                                subscribers: t.items[0].statistics.subscriberCount,
                                views: t.items[0].statistics.viewCount
                            },
                            l = e.items,
                            c = !0;
                        for (n.channelId = t.items[0].id, n.currentPlaylist && (s.title += " &middot; " + n.currentPlaylist), i += '<div class="ytv-list-header">', i += '<a href="' + s.url + '" target="_blank">', i += '<img src="' + s.thumb + '">', i += '<span><i class="ytv-arrow down"></i>' + s.title + "</span>", i += "</a>", i += "</div>", i += '<div class="ytv-list-inner"><ul>', a = 0; a < l.length; a++)
                            if (l[a].status.embeddable) {
                                var v = {
                                        title: l[a].snippet.title,
                                        slug: l[a].id,
                                        link: "https://www.youtube.com/watch?v=" + l[a].id,
                                        published: l[a].snippet.publishedAt,
                                        stats: l[a].statistics,
                                        duration: l[a].contentDetails.duration,
                                        thumb: l[a].snippet.thumbnails.medium.url
                                    },
                                    p = v.duration.match(/[0-9]+[HMS]/g),
                                    y = 0,
                                    u = 0,
                                    m = 0,
                                    g = "";
                                p.forEach(function(e) {
                                    var t = e.charAt(e.length - 1),
                                        a = parseInt(e.slice(0, -1));
                                    switch (t) {
                                        case "H":
                                            y = a > 9 ? "" + a : "0" + a;
                                            break;
                                        case "M":
                                            u = a > 9 ? "" + a : "0" + a;
                                            break;
                                        case "S":
                                            m = a > 9 ? "" + a : "0" + a
                                    }
                                }), y && (g += y + ":"), g += u ? u + ":" : "00:", g += m ? m : "00";
                                var f = "";
                                n.playId == v.slug ? (f = ' class="ytv-active"', c = v.slug) : c === !0 && (c = v.slug), i += "<li" + f + '><a href="#" data-ytv="' + v.slug + '" class="ytv-clear">', i += '<div class="ytv-thumb"><div class="ytv-thumb-stroke"></div><span>' + g + '</span><img src="' + v.thumb + '"></div>', i += '<div class="ytv-content"><b>' + v.title + "</b>", v.stats && (i += '</b><span class="ytv-views">' + o.addCommas(v.stats.viewCount) + " Views</span>"), i += "</div></a></li>"
                            }
                        i += "</ul></div>", n.element.innerHTML = '<div class="ytv-relative"><div class="ytv-video"><div id="ytv-video-player"></div></div><div class="ytv-list">' + i + "</div></div>", 0 === n.element.getElementsByClassName("ytv-active").length && (n.element.getElementsByTagName("li")[0].className = "ytv-active"), d.logic.loadVideo(c, n.autoplay), n.playlist ? o.ajax.get(o.endpoints.playlistInfo(n.playlist), r.playlists) : n.browsePlaylists && o.ajax.get(o.endpoints.userPlaylists(), r.playlists)
                    })
                }
            },
            d = {
                logic: {
                    playerStateChange: function(e) {
                        console.log(e)
                    },
                    loadVideo: function(e, i) {
                        var s = n.element.getElementsByClassName("ytv-video")[0],
                            o = n.element.getElementsByClassName("ytv-video-playerContainer").length;
                        s.innerHTML = '<div id="ytv-video-player' + a + o + '" class="ytv-video-playerContainer"></div>', l.player = new YT.Player("ytv-video-player" + a + o, {
                            videoId: e,
                            events: {
                                onReady: n.events.videoReady,
                                onStateChange: function(e) {
                                    if (0 === e.target.getPlayerState() && n.chainVideos) {
                                        var t = n.element.getElementsByClassName("ytv-active")[0].nextSibling,
                                            a = t.children[0];
                                        a.click()
                                    }
                                    n.events.stateChange.call(this, e)
                                }
                            },
                            playerVars: {
                                enablejsapi: 1,
                                origin: t.domain,
                                controls: n.controls ? 1 : 0,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: n.annotations ? "" : 3,
                                autoplay: i ? 1 : 0,
                                theme: n.playerTheme,
                                wmode: n.wmode
                            }
                        })
                    }
                },
                endpoints: {
                    videoClick: function(e) {
                        var t = o.parentUntil(e.target ? e.target : e.srcElement, "data-ytv");
                        if (t && t.getAttribute("data-ytv")) {
                            o.events.prevent(e);
                            var a, i = n.element.getElementsByClassName("ytv-active");
                            for (a = 0; a < i.length; a++) i[a].className = "";
                            t.parentNode.className = "ytv-active", d.logic.loadVideo(t.getAttribute("data-ytv"), !0)
                        }
                    },
                    playlistToggle: function(e) {
                        var t = o.parentUntil(e.target ? e.target : e.srcElement, "data-ytv-playlist-toggle");
                        if (t && t.getAttribute("data-ytv-playlist-toggle")) {
                            o.events.prevent(e);
                            var a = n.element.getElementsByClassName("ytv-list-header")[0]; - 1 === a.className.indexOf("ytv-playlist-open") ? a.className += " ytv-playlist-open" : a.className = a.className.replace(" ytv-playlist-open", "")
                        }
                    },
                    playlistClick: function(e) {
                        var t = o.parentUntil(e.target ? e.target : e.srcElement, "data-ytv-playlist");
                        t && t.getAttribute("data-ytv-playlist") && (o.events.prevent(e), n.pid = t.getAttribute("data-ytv-playlist"), t.children[1].innerHTML = "Loading...", o.ajax.get(o.endpoints.playlistInfo(n.pid), function(e) {
                            var t = n.element.getElementsByClassName("ytv-list-header")[0];
                            t.className = t.className.replace(" ytv-playlist-open", ""), r.selectedPlaylist(e)
                        }))
                    }
                },
                bindEvents: function() {
                    o.events.addEvent(n.element, "click", d.endpoints.videoClick), o.events.addEvent(n.element, "click", d.endpoints.playlistToggle), o.events.addEvent(n.element, "click", d.endpoints.playlistClick)
                }
            },
            c = function(e, a) {
                o.deepExtend(n, a), n.element = "string" == typeof e ? t.getElementById(e) : e, n.element && (n.user || n.channelId || n.playlist) && (r.youtube(), r.build(), d.bindEvents(), n.playlist ? o.ajax.get(o.endpoints.playlistInfo(n.playlist), r.selectedPlaylist) : o.ajax.get(o.endpoints.userInfo(), r.userUploads))
            };
        this.destroy = function() {
            o.events.removeEvent(n.element, "click", d.endpoints.videoClick), o.events.removeEvent(n.element, "click", d.endpoints.playlistToggle), o.events.removeEvent(n.element, "click", d.endpoints.playlistClick), n.element.className = "", n.element.innerHTML = ""
        }, this.fullscreen = {
            state: function() {
                return -1 !== n.element.className.indexOf("ytv-full")
            },
            enter: function() {
                -1 === n.element.className.indexOf("ytv-full") && (n.element.className += "ytv-full")
            },
            exit: function() {
                -1 !== n.element.className.indexOf("ytv-full") && (n.element.className = n.element.className.replace("ytv-full", ""))
            }
        }, c(a, i)
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" == typeof ender && (this.YTV = a), "function" == typeof define && define.amd && define("YTV", [], function() {
        return a
    }), "undefined" != typeof jQuery && jQuery.fn.extend({
        ytv: function(e) {
            return this.each(function() {
                new a(this.id, e)
            })
        }
    })
}).call(this, window, document);
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function() {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
        t = self.Prism = {
            util: {
                encode: function(e) {
                    return e instanceof a ? new a(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                },
                type: function(e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                },
                clone: function(e) {
                    var a = t.util.type(e);
                    switch (a) {
                        case "Object":
                            var n = {};
                            for (var i in e) e.hasOwnProperty(i) && (n[i] = t.util.clone(e[i]));
                            return n;
                        case "Array":
                            return e.map(function(e) {
                                return t.util.clone(e)
                            })
                    }
                    return e
                }
            },
            languages: {
                extend: function(e, a) {
                    var n = t.util.clone(t.languages[e]);
                    for (var i in a) n[i] = a[i];
                    return n
                },
                insertBefore: function(e, a, n, i) {
                    i = i || t.languages;
                    var s = i[e];
                    if (2 == arguments.length) {
                        n = arguments[1];
                        for (var r in n) n.hasOwnProperty(r) && (s[r] = n[r]);
                        return s
                    }
                    var o = {};
                    for (var l in s)
                        if (s.hasOwnProperty(l)) {
                            if (l == a)
                                for (var r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
                            o[l] = s[l]
                        }
                    return t.languages.DFS(t.languages, function(t, a) {
                        a === i[e] && t != e && (this[t] = o)
                    }), i[e] = o
                },
                DFS: function(e, a, n) {
                    for (var i in e) e.hasOwnProperty(i) && (a.call(e, i, e[i], n || i), "Object" === t.util.type(e[i]) ? t.languages.DFS(e[i], a) : "Array" === t.util.type(e[i]) && t.languages.DFS(e[i], a, i))
                }
            },
            highlightAll: function(e, a) {
                for (var n, i = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), s = 0; n = i[s++];) t.highlightElement(n, e === !0, a)
            },
            highlightElement: function(n, i, s) {
                for (var r, o, l = n; l && !e.test(l.className);) l = l.parentNode;
                if (l && (r = (l.className.match(e) || [, ""])[1], o = t.languages[r]), o) {
                    n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r);
                    var u = n.textContent;
                    if (u) {
                        u = u.replace(/^(?:\r?\n|\r)/, "");
                        var c = {
                            element: n,
                            language: r,
                            grammar: o,
                            code: u
                        };
                        if (t.hooks.run("before-highlight", c), i && self.Worker) {
                            var d = new Worker(t.filename);
                            d.onmessage = function(e) {
                                c.highlightedCode = a.stringify(JSON.parse(e.data), r), t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, s && s.call(c.element), t.hooks.run("after-highlight", c)
                            }, d.postMessage(JSON.stringify({
                                language: c.language,
                                code: c.code
                            }))
                        } else c.highlightedCode = t.highlight(c.code, c.grammar, c.language), t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, s && s.call(n), t.hooks.run("after-highlight", c)
                    }
                }
            },
            highlight: function(e, n, i) {
                var s = t.tokenize(e, n);
                return a.stringify(t.util.encode(s), i)
            },
            tokenize: function(e, a) {
                var n = t.Token,
                    i = [e],
                    s = a.rest;
                if (s) {
                    for (var r in s) a[r] = s[r];
                    delete a.rest
                }
                e: for (var r in a)
                    if (a.hasOwnProperty(r) && a[r]) {
                        var o = a[r];
                        o = "Array" === t.util.type(o) ? o : [o];
                        for (var l = 0; l < o.length; ++l) {
                            var u = o[l],
                                c = u.inside,
                                d = !!u.lookbehind,
                                g = 0,
                                p = u.alias;
                            u = u.pattern || u;
                            for (var m = 0; m < i.length; m++) {
                                var b = i[m];
                                if (i.length > e.length) break e;
                                if (!(b instanceof n)) {
                                    u.lastIndex = 0;
                                    var f = u.exec(b);
                                    if (f) {
                                        d && (g = f[1].length);
                                        var h = f.index - 1 + g,
                                            f = f[0].slice(g),
                                            E = f.length,
                                            w = h + E,
                                            k = b.slice(0, h + 1),
                                            T = b.slice(w + 1),
                                            y = [m, 1];
                                        k && y.push(k);
                                        var A = new n(r, c ? t.tokenize(f, c) : f, p);
                                        y.push(A), T && y.push(T), Array.prototype.splice.apply(i, y)
                                    }
                                }
                            }
                        }
                    }
                return i
            },
            hooks: {
                all: {},
                add: function(e, a) {
                    var n = t.hooks.all;
                    n[e] = n[e] || [], n[e].push(a)
                },
                run: function(e, a) {
                    var n = t.hooks.all[e];
                    if (n && n.length)
                        for (var i, s = 0; i = n[s++];) i(a)
                }
            }
        },
        a = t.Token = function(e, t, a) {
            this.type = e, this.content = t, this.alias = a
        };
    if (a.stringify = function(e, n, i) {
            if ("string" == typeof e) return e;
            if ("Array" === t.util.type(e)) return e.map(function(t) {
                return a.stringify(t, n, e)
            }).join("");
            var s = {
                type: e.type,
                content: a.stringify(e.content, n, i),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: n,
                parent: i
            };
            if ("comment" == s.type && (s.attributes.spellcheck = "true"), e.alias) {
                var r = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(s.classes, r)
            }
            t.hooks.run("wrap", s);
            var o = "";
            for (var l in s.attributes) o += l + '="' + (s.attributes[l] || "") + '"';
            return "<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + o + ">" + s.content + "</" + s.tag + ">"
        }, !self.document) return self.addEventListener ? (self.addEventListener("message", function(e) {
        var a = JSON.parse(e.data),
            n = a.language,
            i = a.code;
        self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i, t.languages[n])))), self.close()
    }, !1), self.Prism) : self.Prism;
    var n = document.getElementsByTagName("script");
    return n = n[n.length - 1], n && (t.filename = n.src, document.addEventListener && !n.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[\w:-]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /=|>|"/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[\w:-]+/,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            punctuation: /[;:]/
        }
    },
    url: /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/,
    string: /("|')(\\\n|\\?.)*?\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    punctuation: /[\{\};:]/,
    "function": /[-a-z0-9]+(?=\()/i
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
        inside: {
            tag: {
                pattern: /<style[\w\W]*?>|<\/style>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.css
        },
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.+/,
        lookbehind: !0
    }],
    string: /("|')(\\\n|\\?.)*?\1/,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": {
        pattern: /[a-z0-9_]+\(/i,
        inside: {
            punctuation: /\(/
        }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
    ignore: /&(lt|gt|amp);/i,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,
    "function": /(?!\d)[a-z0-9_$]+(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
        inside: {
            tag: {
                pattern: /<script[\w\W]*?>|<\/script>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.javascript
        },
        alias: "language-javascript"
    }
}), Prism.languages.applescript = {
    comment: [/\(\*[\w\W]*?\*\)/, /--.+/, /#.+/],
    string: /"(?:\\?.)*?"/,
    operator: [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],
    keyword: /\b(?:about|above|after|against|and|apart from|around|as|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|continue|copy|div|does|eighth|else|end|equal|equals|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|out of|over|prop|property|put|ref|reference|repeat|return|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
    "class": {
        pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
        alias: "builtin"
    },
    number: /\b-?\d*\.?\d+([Ee]-?\d+)?\b/,
    punctuation: /[{}():,¬«»《》]/
}, Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive tag": {
        pattern: /<%\s*@.*%>/i,
        inside: {
            "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master|MasterType|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
            rest: Prism.languages.markup.tag.inside
        }
    },
    "directive tag": {
        pattern: /<%.*%>/i,
        inside: {
            "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
            rest: Prism.languages.csharp
        }
    }
}), Prism.languages.insertBefore("inside", "punctuation", {
    "directive tag": Prism.languages.aspnet["directive tag"]
}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {
    "asp comment": /<%--[\w\W]*?--%>/
}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp script": {
        pattern: /<script(?=.*runat=['"]?server['"]?)[\w\W]*?>[\w\W]*?<\/script>/i,
        inside: {
            tag: {
                pattern: /<\/?script\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i,
                inside: Prism.languages.aspnet.tag.inside
            },
            rest: Prism.languages.csharp || {}
        }
    }
}), Prism.languages.aspnet.style && (Prism.languages.aspnet.style.inside.tag.pattern = /<\/?style\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i, Prism.languages.aspnet.style.inside.tag.inside = Prism.languages.aspnet.tag.inside), Prism.languages.aspnet.script && (Prism.languages.aspnet.script.inside.tag.pattern = Prism.languages.aspnet["asp script"].inside.tag.pattern, Prism.languages.aspnet.script.inside.tag.inside = Prism.languages.aspnet.tag.inside), Prism.languages.c = Prism.languages.extend("clike", {
    string: /("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/,
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//
}), Prism.languages.insertBefore("c", "string", {
    property: {
        pattern: /((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/i,
        lookbehind: !0,
        inside: {
            string: {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                lookbehind: !0
            }
        }
    }
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"], Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    string: /@?("|')(\\?.)*?\1/,
    preprocessor: /^\s*#.*/m,
    number: /\b-?(0x[\da-f]+|\d*\.?\d+)\b/i
}), Prism.languages.cpp = Prism.languages.extend("c", {
    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    "boolean": /\b(true|false)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}), Prism.languages.insertBefore("cpp", "keyword", {
    "class-name": {
        pattern: /(class\s+)[a-z0-9_]+/i,
        lookbehind: !0
    }
}), ! function(e) {
    var t = /#(?!\{).+/,
        a = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [/'(?:\\?[\s\S])*?'/, {
            pattern: /"(?:\\?[\s\S])*?"/,
            inside: {
                interpolation: a
            }
        }],
        keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }), e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: a
            }
        }
    }), e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\?[\s\S])*?`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                rest: e.languages.javascript
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            alias: "string",
            inside: {
                interpolation: a
            }
        }]
    }), e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    })
}(Prism), Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
    inside: {
        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        "pseudo-class": /:[-\w]+(?:\(.*\))?/,
        "class": /\.[-:\.\w]+/,
        id: /#[-:\.\w]+/
    }
}, Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/
}), Prism.languages.git = {
    comment: /^#.*$/m,
    string: /("|')(\\?.)*?\1/m,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s(--|-)\w+/m
        }
    },
    coord: /^@@.*@@$/m,
    deleted: /^-(?!-).+$/m,
    inserted: /^\+(?!\+).+$/m,
    commit_sha1: /^commit \w{40}$/m
}, ! function(e) {
    e.languages.haml = {
        "multiline-comment": [{
            pattern: /((?:^|\n)([\t ]*))\/.*(\n\2[\t ]+.+)*/,
            lookbehind: !0,
            alias: "comment"
        }, {
            pattern: /((?:^|\n)([\t ]*))-#.*(\n\2[\t ]+.+)*/,
            lookbehind: !0,
            alias: "comment"
        }],
        "multiline-code": [{
            pattern: /((?:^|\n)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(\n\2[\t ]+.*,[\t ]*)*(\n\2[\t ]+.+)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }, {
            pattern: /((?:^|\n)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(\n\2[\t ]+.*\|[\t ]*)*/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }],
        filter: {
            pattern: /((?:^|\n)([\t ]*)):[\w-]+(\n(?:\2[\t ]+.+|\s*?(?=\n)))+/,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        markup: {
            pattern: /((?:^|\n)[\t ]*)<.+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        doctype: {
            pattern: /((?:^|\n)[\t ]*)!!!(?: .+)?/,
            lookbehind: !0
        },
        tag: {
            pattern: /((?:^|\n)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: {
                        rest: e.languages.ruby
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,
                            lookbehind: !0
                        },
                        "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[=(),]/
                    }
                }, {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        rest: e.languages.ruby
                    }
                }],
                punctuation: /[<>]/
            }
        },
        code: {
            pattern: /((?:^|\n)[\t ]*(?:[~-]|[&!]?=)).+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        },
        interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "punctuation"
                },
                rest: e.languages.ruby
            }
        },
        punctuation: {
            pattern: /((?:^|\n)[\t ]*)[~=\-&!]/,
            lookbehind: !0
        }
    };
    for (var t = "((?:^|\\n)([\\t ]*)):{{filter_name}}(\\n(?:\\2[\\t ]+.+|\\s*?(?=\\n)))+", a = ["css", {
            filter: "coffee",
            language: "coffeescript"
        }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], n = {}, i = 0, s = a.length; s > i; i++) {
        var r = a[i];
        r = "string" == typeof r ? {
            filter: r,
            language: r
        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", r.filter)),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[r.language]
            }
        })
    }
    e.languages.insertBefore("haml", "filter", n)
}(Prism), ! function(e) {
    var t = /\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;
    e.languages.handlebars = e.languages.extend("markup", {
        handlebars: {
            pattern: t,
            inside: {
                delimiter: {
                    pattern: /^\{\{\{?|\}\}\}?$/i,
                    alias: "punctuation"
                },
                string: /(["'])(\\?.)+?\1/,
                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
                "boolean": /\b(true|false)\b/,
                block: {
                    pattern: /^(\s*~?\s*)[#\/]\w+/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                brackets: {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        punctuation: /\[|\]/,
                        variable: /[\w\W]+/
                    }
                },
                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/
            }
        }
    }), e.languages.insertBefore("handlebars", "tag", {
        "handlebars-comment": {
            pattern: /\{\{![\w\W]*?\}\}/,
            alias: ["handlebars", "comment"]
        }
    }), e.hooks.add("before-highlight", function(e) {
        "handlebars" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
            return e.tokenStack.push(t), "___HANDLEBARS" + e.tokenStack.length + "___"
        }))
    }), e.hooks.add("before-insert", function(e) {
        "handlebars" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), e.hooks.add("after-highlight", function(t) {
        if ("handlebars" === t.language) {
            for (var a, n = 0; a = t.tokenStack[n]; n++) t.highlightedCode = t.highlightedCode.replace("___HANDLEBARS" + (n + 1) + "___", e.highlight(a, t.grammar, "handlebars"));
            t.element.innerHTML = t.highlightedCode
        }
    })
}(Prism), ! function(e) {
    e.languages.jade = {
        "multiline-comment": {
            pattern: /((?:^|\n)([\t ]*))\/\/.*(\n\2[\t ]+.+)*/,
            lookbehind: !0,
            alias: "comment"
        },
        "multiline-script": {
            pattern: /((?:^|\n)([\t ]*)script\b.*\.[\t ]*)(\n(?:\2[\t ]+.+|\s*?(?=\n)))+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        filter: {
            pattern: /((?:^|\n)([\t ]*)):.+(\n(?:\2[\t ]+.+|\s*?(?=\n)))+/,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        "multiline-plain-text": {
            pattern: /((?:^|\n)([\t ]*)[\w\-#.]+\.[\t ]*)(\n(?:\2[\t ]+.+|\s*?(?=\n)))+/,
            lookbehind: !0
        },
        markup: {
            pattern: /((?:^|\n)[\t ]*)<.+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        comment: {
            pattern: /((?:^|\n)[\t ]*)\/\/.+/,
            lookbehind: !0
        },
        doctype: {
            pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
            lookbehind: !0
        },
        "flow-control": {
            pattern: /((?:^|\n)[\t ]*)(?:if|unless|else|case|when|default|each|while)(?: .+)?/,
            lookbehind: !0,
            inside: {
                each: {
                    pattern: /((?:^|\n)[\t ]*)each .+? in\b/,
                    lookbehind: !0,
                    inside: {
                        keyword: /\b(?:each|in)\b/,
                        punctuation: /,/
                    }
                },
                branch: {
                    pattern: /((?:^|\n)[\t ]*)(?:if|unless|else|case|when|default|while)/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                rest: e.languages.javascript
            }
        },
        keyword: {
            pattern: /((?:^|\n)[\t ]*)(?:block|extends|include|append|prepend)\b.+/,
            lookbehind: !0
        },
        mixin: [{
            pattern: /((?:^|\n)[\t ]*)mixin .+/,
            lookbehind: !0,
            inside: {
                keyword: /^mixin/,
                "function": /\w+(?=\s*\(|\s*$)/,
                punctuation: /[(),.]/
            }
        }, {
            pattern: /((?:^|\n)[\t ]*)\+.+/,
            lookbehind: !0,
            inside: {
                name: {
                    pattern: /^\+\w+/,
                    alias: "function"
                },
                rest: e.languages.javascript
            }
        }],
        script: {
            pattern: /((?:^|\n)[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*) .+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        "plain-text": {
            pattern: /((?:^|\n)[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/,
            lookbehind: !0
        },
        tag: {
            pattern: /((?:^|\n)[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: {
                        rest: e.languages.javascript
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\n]+)/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        },
                        "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[!=(),]/
                    }
                }],
                punctuation: /[:]/
            }
        },
        code: [{
            pattern: /((?:^|\n)[\t ]*(?:-|!?=)).+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        }],
        punctuation: /[.\-!=|]/
    };
    for (var t = "((?:^|\\n)([\\t ]*)):{{filter_name}}(\\n(?:\\2[\\t ]+.+|\\s*?(?=\\n)))+", a = [{
            filter: "atpl",
            language: "twig"
        }, {
            filter: "coffee",
            language: "coffeescript"
        }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
            filter: "sass",
            language: "scss"
        }, "stylus", "swig"], n = {}, i = 0, s = a.length; s > i; i++) {
        var r = a[i];
        r = "string" == typeof r ? {
            filter: r,
            language: r
        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", r.filter)),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[r.language]
            }
        })
    }
    e.languages.insertBefore("jade", "filter", n)
}(Prism), Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/i,
    operator: {
        pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/m,
        lookbehind: !0
    }
}), Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\w\W]*?\*\//, {
        pattern: /(^|[^\\])\/\/.+/,
        lookbehind: !0
    }],
    atrule: {
        pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
        inside: {
            punctuation: /[:()]/
        }
    },
    selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
        inside: {
            variable: /@+[\w-]+/
        }
    },
    property: /(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    punctuation: /[{}();:,]/,
    operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "punctuation", {
    "function": Prism.languages.less["function"]
}), Prism.languages.insertBefore("less", "property", {
    variable: [{
        pattern: /@[\w-]+\s*:/,
        inside: {
            punctuation: /:/
        }
    }, /@@?[\w-]+/],
    "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
        lookbehind: !0,
        alias: "function"
    }
}), Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
    blockquote: {
        pattern: /(^|\n)>(?:[\t ]*>)*/,
        lookbehind: !0,
        alias: "punctuation"
    },
    code: [{
        pattern: /(^|\n)(?: {4}|\t).+/,
        lookbehind: !0,
        alias: "keyword"
    }, {
        pattern: /``.+?``|`[^`\n]+`/,
        alias: "keyword"
    }],
    title: [{
        pattern: /\w+.*\n(?:==+|--+)/,
        alias: "important",
        inside: {
            punctuation: /==+$|--+$/
        }
    }, {
        pattern: /((?:^|\n)\s*)#+.+/,
        lookbehind: !0,
        alias: "important",
        inside: {
            punctuation: /^#+|#+$/
        }
    }],
    hr: {
        pattern: /((?:^|\n)\s*)([*-])([\t ]*\2){2,}(?=\s*(?:\n|$))/,
        lookbehind: !0,
        alias: "punctuation"
    },
    list: {
        pattern: /((?:^|\n)\s*)(?:[*+-]|\d+\.)(?=[\t ].)/,
        lookbehind: !0,
        alias: "punctuation"
    },
    "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:[^>]|\\>)+>)(?:[\t ]+(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\)))?/,
        inside: {
            variable: {
                pattern: /^(!?\[)[^\]]+/,
                lookbehind: !0
            },
            string: /(?:"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\((?:[^)]|\\\))*\))$/,
            punctuation: /[[\]\(\)<>:]/
        },
        alias: "url"
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:\n(?!\n)|.)+?\2/,
        lookbehind: !0,
        inside: {
            punctuation: /^\*\*|^__|\*\*\s*$|__\s*$/
        }
    },
    italic: {
        pattern: /(^|[^\\])(?:\*(?:\n(?!\n)|.)+?\*|_(?:\n(?!\n)|.)+?_)/,
        lookbehind: !0,
        inside: {
            punctuation: /^[*_]|[*_]$/
        }
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:[^"]|\\")*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: {
                pattern: /(!?\[)[^\]]+(?=\]$)/,
                lookbehind: !0
            },
            string: {
                pattern: /"(?:[^"]|\\")*"(?=\)$)/
            }
        }
    }
}), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold), Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/,
    string: /(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/
}), Prism.languages.perl = {
    comment: [{
        pattern: /((?:^|\n)\s*)=\w+[\s\S]*?=cut.*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\$])#.*?(\r?\n|$)/,
        lookbehind: !0
    }],
    string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s*\(([^()]|\\.)*\s*\)/, /\b(?:q|qq|qx|qw)\s*\{([^{}]|\\.)*\s*\}/, /\b(?:q|qq|qx|qw)\s*\[([^[\]]|\\.)*\s*\]/, /\b(?:q|qq|qx|qw)\s*<([^<>]|\\.)*\s*>/, /("|'|`)(\\?.)*?\1/],
    regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s*\(([^()]|\\.)*\s*\)[msixpodualgc]*/, /\b(?:m|qr)\s*\{([^{}]|\\.)*\s*\}[msixpodualgc]*/, /\b(?:m|qr)\s*\[([^[\]]|\\.)*\s*\][msixpodualgc]*/, /\b(?:m|qr)\s*<([^<>]|\\.)*\s*>[msixpodualgc]*/, /\b(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s+([a-zA-Z0-9])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\(([^()]|\\.)*\s*\)\s*\(\s*([^()]|\\.)*\s*\)[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\{([^{}]|\\.)*\s*\}\s*\{\s*([^{}]|\\.)*\s*\}[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\[([^[\]]|\\.)*\s*\]\s*\[\s*([^[\]]|\\.)*\s*\][msixpodualgcer]*/, /\b(?:s|tr|y)\s*<([^<>]|\\.)*\s*>\s*<\s*([^<>]|\\.)*\s*>[msixpodualgcer]*/, /\/(\[.+?]|\\.|[^\/\r\n])*\/[msixpodualgc]*(?=\s*($|[\r\n,.;})&|\-+*=~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
    variable: [/[&*\$@%]\{\^[A-Z]+\}/, /[&*\$@%]\^[A-Z_]/, /[&*\$@%]#?(?=\{)/, /[&*\$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*\$@%]\d+/, /[\$@%][!"#\$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
    filehandle: {
        pattern: /<(?!=).*>|\b_\b/,
        alias: "symbol"
    },
    vstring: {
        pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
        alias: "string"
    },
    "function": {
        pattern: /sub [a-z0-9_]+/i,
        inside: {
            keyword: /sub/
        }
    },
    keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /(\n|\b)-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee]-?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|[-+*=~\/|&]{1,2}|<=?|>=?|\.{1,3}|[!?\\^]|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b/,
    punctuation: /[{}[\];(),:]/
}, Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/,
        lookbehind: !0,
        alias: "comment"
    }
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/i,
    variable: /(\$\w+)\b/i,
    "package": {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: !0,
        inside: {
            punctuation: /\\/
        }
    }
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
    "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
        return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("before-insert", function(e) {
    "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
}), Prism.hooks.add("after-highlight", function(e) {
    if ("php" === e.language) {
        for (var t, a = 0; t = e.tokenStack[a]; a++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (a + 1) + "}}}", Prism.highlight(t, e.grammar, "php"));
        e.element.innerHTML = e.highlightedCode
    }
}), Prism.hooks.add("wrap", function(e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {
        pattern: /<[^?]\/?(.*?)>/,
        inside: Prism.languages.markup
    },
    php: /\{\{\{PHP[0-9]+\}\}\}/
})), Prism.languages.insertBefore("php", "variable", {
    "this": /\$this/,
    global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
    scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
            keyword: /(static|self|parent)/,
            punctuation: /(::|\\)/
        }
    }
}), Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/,
        lookbehind: !0
    },
    string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,
    keyword: /\b(as|assert|break|class|continue|def|del|elf|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    "boolean": /\b(True|False)\b/,
    number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+]|<=?|>=?|!|={1,2}|&{1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/
}, ! function(e) {
    var t = e.util.clone(e.languages.javascript);
    e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i, e.languages.insertBefore("inside", "attr-value", {
        script: {
            pattern: /=(\{[\w\W]*?\})/i,
            inside: {
                "function": e.languages.javascript["function"],
                punctuation: /[={}[\];(),.:]/,
                keyword: e.languages.javascript.keyword
            },
            alias: "language-javascript"
        }
    }, e.languages.jsx.tag)
}(Prism), Prism.languages.ruby = Prism.languages.extend("clike", {
    comment: /#[^\r\n]*(\r?\n|$)/,
    keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,
    builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/
}), Prism.languages.insertBefore("ruby", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    },
    variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/,
    symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/
}), Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,
        lookbehind: !0
    },
    atrule: /@[\w-]+(?=\s+(\(|\{|;))/i,
    url: /([-a-z]+-)*url(?=\()/i,
    selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
}), Prism.languages.insertBefore("scss", "property", {
    variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
}), Prism.languages.insertBefore("scss", "function", {
    placeholder: /%[-_\w]+/i,
    statement: /\B!(default|optional)\b/i,
    "boolean": /\b(true|false)\b/,
    "null": /\b(null)\b/,
    operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/
}), Prism.languages.scheme = {
    "boolean": /#(t|f){1}/,
    comment: /;.*/,
    keyword: {
        pattern: /([(])(define(-syntax|-library|-values)?|(case-)?lambda|let(-values|(rec)?(\*)?)?|else|if|cond|begin|delay|delay-force|parameterize|guard|set!|(quasi-)?quote|syntax-rules)/,
        lookbehind: !0
    },
    builtin: {
        pattern: /([(])(cons|car|cdr|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b/,
        lookbehind: !0
    },
    string: /(["])(?:(?=(\\?))\2.)*?\1|'[^('|\s)]+/,
    number: /(\s|\))[-+]?[0-9]*\.?[0-9]+((\s*)[-+]{1}(\s*)[0-9]*\.?[0-9]+i)?/,
    operator: /(\*|\+|\-|%|\/|<=|=>|>=|<|=|>)/,
    "function": {
        pattern: /([(])[^(\s|\))]*\s/,
        lookbehind: !0
    },
    punctuation: /[()]/
}, ! function(e) {
    var t = /\{\*[\w\W]+?\*\}|\{[\w\W]+?\}/g,
        a = "{literal}",
        n = "{/literal}",
        i = !1;
    e.languages.smarty = e.languages.extend("markup", {
        smarty: {
            pattern: t,
            inside: {
                delimiter: {
                    pattern: /^\{|\}$/i,
                    alias: "punctuation"
                },
                string: /(["'])(\\?.)*?\1/,
                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
                variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
                    pattern: /(\.|->)(?!\d)\w+/,
                    lookbehind: !0
                }, {
                    pattern: /(\[)(?!\d)\w+(?=\])/,
                    lookbehind: !0
                }],
                "function": [{
                    pattern: /(\|\s*)@?(?!\d)\w+/,
                    lookbehind: !0
                }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/],
                "attr-name": {
                    pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
                    inside: {
                        variable: {
                            pattern: /(=\s*)(?!\d)\w+/,
                            lookbehind: !0
                        },
                        punctuation: /=/
                    }
                },
                punctuation: /[\[\]().,=\|:`]|\->/,
                operator: [/[+\-*\/%]|===?|[!<>]=?|&&|\|\|/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],
                keyword: /\b(?:false|off|on|no|true|yes)\b/
            }
        }
    }), e.languages.insertBefore("smarty", "tag", {
        "smarty-comment": {
            pattern: /\{\*[\w\W]*?\*\}/,
            alias: ["smarty", "comment"]
        }
    }), e.hooks.add("before-highlight", function(e) {
        "smarty" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
            return t === n && (i = !1), i ? t : (t === a && (i = !0), e.tokenStack.push(t), "___SMARTY" + e.tokenStack.length + "___")
        }))
    }), e.hooks.add("before-insert", function(e) {
        "smarty" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), e.hooks.add("after-highlight", function(t) {
        if ("smarty" === t.language) {
            for (var a, n = 0; a = t.tokenStack[n]; n++) t.highlightedCode = t.highlightedCode.replace("___SMARTY" + (n + 1) + "___", e.highlight(a, t.grammar, "smarty"));
            t.element.innerHTML = t.highlightedCode
        }
    })
}(Prism), Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/,
        lookbehind: !0
    },
    string: {
        pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/,
        lookbehind: !0
    },
    variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/,
    "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/i,
    "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b-?(0x)?\d*\.?[\da-f]+\b/,
    operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//i,
    punctuation: /[;[\]()`,.]/
}, Prism.languages.stylus = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: !0
    },
    keyword: /(px|r?em|ex|ch|vw|vh|vmin|vmax|deg|grad|rad|turn|m?s|k?Hz|dpi|dppx|dpcm)\b|\b(is|defined|not|isnt|and|or|unless|for|in)\b/g,
    atrule: /@[\w-]+(?=\s+\S+)/gi,
    url: /url\((["']?).*?\1\)/gi,
    variable: /^\s*([\w-]+)(?=\s*[+-\\]?=)/gm,
    string: /("|')(\\\n|\\?.)*?\1/g,
    important: /\B!important\b/gi,
    hexcode: /#[\da-f]{3,6}/gi,
    entity: /\\[\da-f]{1,8}/gi,
    number: /\d+\.?\d*%?/g,
    selector: [{
        pattern: /::?(after|before|first-letter|first-line|selection)/g,
        alias: "pseudo-element"
    }, {
        pattern: /:(?:active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|in-range|invalid|lang|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-of-type|only-child|optional|out-of-range|read-only|read-write|required|root|target|valid|visited)(?:\(.*\))?/g,
        alias: "pseudo-class"
    }, {
        pattern: /\[[\w-]+?\s*[*~$^|=]?(?:=\s*\S+)?\]/g,
        inside: {
            "attr-name": {
                pattern: /(\[)([\w-]+)(?=\s*[*~$^|=]{0,2})/g,
                lookbehind: !0
            },
            punctuation: /\[|\]/g,
            operator: /[*~$^|=]/g,
            "attr-value": {
                pattern: /\S+/
            }
        },
        alias: "attr"
    }, {
        pattern: /\.[a-z-]+/i,
        alias: "class"
    }, {
        pattern: /#[a-z-]+/i,
        alias: "id"
    }, {
        pattern: /\b(html|head|title|base|link|meta|style|script|noscript|template|body|section|nav|article|aside|h[1-6]|header|footer|address|main|p|hr|pre|blockquote|ol|ul|li|dl|dt|dd|figure|figcaption|div|a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|dbo|span|br|wbr|ins|del|image|iframe|embed|object|param|video|audio|source|track|canvas|map|area|sv|math|table|caption|colgroup|col|tbody|thead|tfoot|tr|td|th|form|fieldset|legeng|label|input|button|select|datalist|optgroup|option|textarea|keygen|output|progress|meter|details|summary|menuitem|menu)\b/g,
        alias: "tag"
    }],
    property: [/^\s*([a-z-]+)(?=\s+[\w\W]+|\s*:)(?!\s*\{|\r?\n)/gim, {
        pattern: /(\(\s*)([a-z-]+)(?=\s*:)/gi,
        lookbehind: !0
    }],
    "function": /[-a-z0-9]+(?=\()/gi,
    punctuation: /[\{\};:]/g,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/g
}, Prism.languages.swift = Prism.languages.extend("clike", {
    keyword: /\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/,
    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/
}), Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
}), Prism.hooks.add("after-highlight", function(e) {
    var t = e.element.parentNode;
    if (t && /pre/i.test(t.nodeName) && -1 !== t.className.indexOf("line-numbers")) {
        var a, n = 1 + e.code.split("\n").length;
        lines = new Array(n), lines = lines.join("<span></span>"), a = document.createElement("span"), a.className = "line-numbers-rows", a.innerHTML = lines, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(a)
    }
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t, e) {
    "use strict";

    function i(t, e) {
        this.container = t, this.options = e, this.init()
    }

    function n(e, i) {
        this.widget = e, this.options = t.extend({}, i), this.detectService(), this.service && this.init()
    }

    function s(t) {
        function e(t, e) {
            return e.toUpper()
        }
        var i = {},
            n = t.data();
        for (var s in n) {
            var o = n[s];
            "yes" === o ? o = !0 : "no" === o && (o = !1), i[s.replace(/-(\w)/g, e)] = o
        }
        return i
    }

    function o(t, e) {
        return r(t, e, encodeURIComponent)
    }

    function r(t, e, i) {
        return t.replace(/\{([^\}]+)\}/g, function(t, n) {
            return n in e ? i ? i(e[n]) : e[n] : t
        })
    }

    function u(t, e) {
        var i = l + t;
        return i + " " + i + "_" + e
    }

    function a(e, i) {
        function n(r) {
            "keydown" === r.type && 27 !== r.which || t(r.target).closest(e).length || (e.removeClass(h), s.off(o, n), t.isFunction(i) && i())
        }
        var s = t(document),
            o = "click touchstart keydown";
        s.on(o, n)
    }

    function c(t) {
        var e = 10;
        if (document.documentElement.getBoundingClientRect) {
            var i = parseInt(t.css("left"), 10),
                n = parseInt(t.css("top"), 10),
                s = t[0].getBoundingClientRect();
            s.left < e ? t.css("left", e - s.left + i) : s.right > window.innerWidth - e && t.css("left", window.innerWidth - s.right - e + i), s.top < e ? t.css("top", e - s.top + n) : s.bottom > window.innerHeight - e && t.css("top", window.innerHeight - s.bottom - e + n)
        }
        t.addClass(h)
    }
    var p = "social-likes",
        l = p + "__",
        h = p + "_opened",
        d = "https:" === location.protocol ? "https:" : "https:",
        f = "https:" === d,
        g = {
            facebook: {
                counterUrl: "https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",
                convertNumber: function(t) {
                    return t.data[0].total_count
                },
                popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
                popupWidth: 600,
                popupHeight: 500
            },
            twitter: {
                popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
                popupWidth: 600,
                popupHeight: 450,
                click: function() {
                    return /[\.\?:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
                }
            },
            mailru: {
                counterUrl: d + "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",
                convertNumber: function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return t[e].shares
                },
                popupUrl: d + "//connect.mail.ru/share?share_url={url}&title={title}",
                popupWidth: 550,
                popupHeight: 360
            },
            vkontakte: {
                counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}",
                counter: function(e, i) {
                    var n = g.vkontakte;
                    n._ || (n._ = [], window.VK || (window.VK = {}), window.VK.Share = {
                        count: function(t, e) {
                            n._[t].resolve(e)
                        }
                    });
                    var s = n._.length;
                    n._.push(i), t.getScript(o(e, {
                        index: s
                    })).fail(i.reject)
                },
                popupUrl: d + "//vk.com/share.php?url={url}&title={title}",
                popupWidth: 550,
                popupHeight: 330
            },
            odnoklassniki: {
                counterUrl: f ? e : "https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
                counter: function(e, i) {
                    var n = g.odnoklassniki;
                    n._ || (n._ = [], window.ODKL || (window.ODKL = {}), window.ODKL.updateCount = function(t, e) {
                        n._[t].resolve(e)
                    });
                    var s = n._.length;
                    n._.push(i), t.getScript(o(e, {
                        index: s
                    })).fail(i.reject)
                },
                popupUrl: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
                popupWidth: 550,
                popupHeight: 360
            },
            plusone: {
                counterUrl: f ? e : "https://share.yandex.ru/gpp.xml?url={url}",
                counter: function(e, i) {
                    var n = g.plusone;
                    return n._ ? void i.reject() : (window.services || (window.services = {}), window.services.gplus = {
                        cb: function(t) {
                            "string" == typeof t && (t = t.replace(/\D/g, "")), n._.resolve(parseInt(t, 10))
                        }
                    }, n._ = i, void t.getScript(o(e)).fail(i.reject))
                },
                popupUrl: "https://plus.google.com/share?url={url}",
                popupWidth: 700,
                popupHeight: 500
            },
            pinterest: {
                counterUrl: d + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                convertNumber: function(t) {
                    return t.count
                },
                popupUrl: d + "//pinterest.com/pin/create/button/?url={url}&description={title}",
                popupWidth: 630,
                popupHeight: 270
            }
        },
        v = {
            promises: {},
            fetch: function(e, i, n) {
                v.promises[e] || (v.promises[e] = {});
                var s = v.promises[e];
                if (!n.forceUpdate && s[i]) return s[i];
                var r = t.extend({}, g[e], n),
                    u = t.Deferred(),
                    a = r.counterUrl && o(r.counterUrl, {
                        url: i
                    });
                return a && t.isFunction(r.counter) ? r.counter(a, u) : r.counterUrl ? t.getJSON(a).done(function(e) {
                    try {
                        var i = e;
                        t.isFunction(r.convertNumber) && (i = r.convertNumber(e)), u.resolve(i)
                    } catch (n) {
                        u.reject()
                    }
                }).fail(u.reject) : u.reject(), s[i] = u.promise(), s[i]
            }
        };
    t.fn.socialLikes = function(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data(p);
            o ? t.isPlainObject(e) && o.update(e) : (o = new i(n, t.extend({}, t.fn.socialLikes.defaults, e, s(n))), n.data(p, o))
        })
    }, t.fn.socialLikes.defaults = {
        url: window.location.href.replace(window.location.hash, ""),
        title: document.title,
        counters: !0,
        zeroes: !1,
        wait: 500,
        timeout: 1e4,
        popupCheckInterval: 500,
        singleTitle: "Share"
    }, i.prototype = {
        init: function() {
            this.container.addClass(p), this.single = this.container.hasClass(p + "_single"), this.initUserButtons(), this.countersLeft = 0, this.number = 0, this.container.on("counter." + p, t.proxy(this.updateCounter, this));
            var e = this.container.children();
            this.makeSingleButton(), this.buttons = [], e.each(t.proxy(function(e, i) {
                var s = new n(t(i), this.options);
                this.buttons.push(s), s.options.counterUrl && this.countersLeft++
            }, this)), this.options.counters ? (this.timer = setTimeout(t.proxy(this.appear, this), this.options.wait), this.timeout = setTimeout(t.proxy(this.ready, this, !0), this.options.timeout)) : this.appear()
        },
        initUserButtons: function() {
            !this.userButtonInited && window.socialLikesButtons && t.extend(!0, g, socialLikesButtons), this.userButtonInited = !0
        },
        makeSingleButton: function() {
            if (this.single) {
                var e = this.container;
                e.addClass(p + "_vertical"), e.wrap(t("<div>", {
                    "class": p + "_single-w"
                })), e.wrapInner(t("<div>", {
                    "class": p + "__single-container"
                }));
                var i = e.parent(),
                    n = t("<div>", {
                        "class": u("widget", "single")
                    }),
                    s = t(r('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>', {
                        buttonCls: u("button", "single"),
                        iconCls: u("icon", "single"),
                        title: this.options.singleTitle
                    }));
                n.append(s), i.append(n), n.on("click", function() {
                    var t = p + "__widget_active";
                    return n.toggleClass(t), n.hasClass(t) ? (e.css({
                        left: -(e.width() - n.width()) / 2,
                        top: -e.height()
                    }), c(e), a(e, function() {
                        n.removeClass(t)
                    })) : e.removeClass(h), !1
                }), this.widget = n
            }
        },
        update: function(e) {
            if (e.forceUpdate || e.url !== this.options.url) {
                this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + p + "__counter").remove(), t.extend(this.options, e);
                for (var i = 0; i < this.buttons.length; i++) this.buttons[i].update(e)
            }
        },
        updateCounter: function(t, e, i) {
            i = i || 0, (i || this.options.zeroes) && (this.number += i, this.single && this.getCounterElem().text(this.number)), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.ready())
        },
        appear: function() {
            this.container.addClass(p + "_visible")
        },
        ready: function(t) {
            this.timeout && clearTimeout(this.timeout), this.container.addClass(p + "_ready"), t || this.container.trigger("ready." + p, this.number)
        },
        getCounterElem: function() {
            var e = this.widget.find("." + l + "counter_single");
            return e.length || (e = t("<span>", {
                "class": u("counter", "single")
            }), this.widget.append(e)), e
        }
    }, n.prototype = {
        init: function() {
            this.detectParams(), this.initHtml(), setTimeout(t.proxy(this.initCounter, this), 0)
        },
        update: function(e) {
            t.extend(this.options, {
                forceUpdate: !1
            }, e), this.widget.find("." + p + "__counter").remove(), this.initCounter()
        },
        detectService: function() {
            var e = this.widget.data("service");
            if (!e) {
                for (var i = this.widget[0], n = i.classList || i.className.split(" "), s = 0; s < n.length; s++) {
                    var o = n[s];
                    if (g[o]) {
                        e = o;
                        break
                    }
                }
                if (!e) return
            }
            this.service = e, t.extend(this.options, g[e])
        },
        detectParams: function() {
            var t = this.widget.data();
            if (t.counter) {
                var e = parseInt(t.counter, 10);
                isNaN(e) ? this.options.counterUrl = t.counter : this.options.counterNumber = e
            }
            t.title && (this.options.title = t.title), t.url && (this.options.url = t.url)
        },
        initHtml: function() {
            var e = this.options,
                i = this.widget,
                n = i.find("a");
            n.length && this.cloneDataAttrs(n, i);
            var s = t("<span>", {
                "class": this.getElementClassNames("button"),
                text: i.text()
            });
            if (e.clickUrl) {
                var r = o(e.clickUrl, {
                        url: e.url,
                        title: e.title
                    }),
                    u = t("<a>", {
                        href: r
                    });
                this.cloneDataAttrs(i, u), i.replaceWith(u), this.widget = i = u
            } else i.on("click", t.proxy(this.click, this));
            i.removeClass(this.service), i.addClass(this.getElementClassNames("widget")), s.prepend(t("<span>", {
                "class": this.getElementClassNames("icon")
            })), i.empty().append(s), this.button = s
        },
        initCounter: function() {
            if (this.options.counters)
                if (this.options.counterNumber) this.updateCounter(this.options.counterNumber);
                else {
                    var e = {
                        counterUrl: this.options.counterUrl,
                        forceUpdate: this.options.forceUpdate
                    };
                    v.fetch(this.service, this.options.url, e).always(t.proxy(this.updateCounter, this))
                }
        },
        cloneDataAttrs: function(t, e) {
            var i = t.data();
            for (var n in i) i.hasOwnProperty(n) && e.data(n, i[n])
        },
        getElementClassNames: function(t) {
            return u(t, this.service)
        },
        updateCounter: function(e) {
            e = parseInt(e, 10) || 0;
            var i = {
                "class": this.getElementClassNames("counter"),
                text: e
            };
            e || this.options.zeroes || (i["class"] += " " + p + "__counter_empty", i.text = "");
            var n = t("<span>", i);
            this.widget.append(n), this.widget.trigger("counter." + p, [this.service, e])
        },
        click: function(e) {
            var i = this.options,
                n = !0;
            if (t.isFunction(i.click) && (n = i.click.call(this, e)), n) {
                var s = o(i.popupUrl, {
                    url: i.url,
                    title: i.title
                });
                s = this.addAdditionalParamsToUrl(s), this.openPopup(s, {
                    width: i.popupWidth,
                    height: i.popupHeight
                })
            }
            return !1
        },
        addAdditionalParamsToUrl: function(e) {
            var i = t.param(t.extend(this.widget.data(), this.options.data));
            if (t.isEmptyObject(i)) return e;
            var n = -1 === e.indexOf("?") ? "?" : "&";
            return e + n + i
        },
        openPopup: function(e, i) {
            var n = Math.round(screen.width / 2 - i.width / 2),
                s = 0;
            screen.height > i.height && (s = Math.round(screen.height / 3 - i.height / 2));
            var o = window.open(e, "sl_" + this.service, "left=" + n + ",top=" + s + ",width=" + i.width + ",height=" + i.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
            if (o) {
                o.focus(), this.widget.trigger("popup_opened." + p, [this.service, o]);
                var r = setInterval(t.proxy(function() {
                    o.closed && (clearInterval(r), this.widget.trigger("popup_closed." + p, this.service))
                }, this), this.options.popupCheckInterval)
            } else location.href = e
        }
    }, t(function() {
        t("." + p).socialLikes()
    })
});
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojs = t()
    }
}(function() {
    var t;
    return function e(t, n, o) {
        function r(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n ? n : e)
                }, c, c.exports, e, t, n, o)
            }
            return n[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < o.length; s++) r(o[s]);
        return r
    }({
        1: [function(t, e) {
            (function(n) {
                var o = "undefined" != typeof n ? n : "undefined" != typeof window ? window : {},
                    r = t("min-document");
                if ("undefined" != typeof document) e.exports = document;
                else {
                    var i = o["__GLOBAL_DOCUMENT_CACHE@4"];
                    i || (i = o["__GLOBAL_DOCUMENT_CACHE@4"] = r), e.exports = i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "min-document": 3
        }],
        2: [function(t, e) {
            (function(t) {
                e.exports = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        3: [function() {}, {}],
        4: [function(t, e) {
            var n = t("../internal/getNative"),
                o = n(Date, "now"),
                r = o || function() {
                    return (new Date).getTime()
                };
            e.exports = r
        }, {
            "../internal/getNative": 20
        }],
        5: [function(t, e) {
            function n(t, e, n) {
                function a() {
                    g && clearTimeout(g), h && clearTimeout(h), b = 0, h = g = m = void 0
                }

                function l(e, n) {
                    n && clearTimeout(n), h = g = m = void 0, e && (b = r(), d = t.apply(v, f), g || h || (f = v = void 0))
                }

                function u() {
                    var t = e - (r() - y);
                    0 >= t || t > e ? l(m, h) : g = setTimeout(u, t)
                }

                function c() {
                    l(j, g)
                }

                function p() {
                    if (f = arguments, y = r(), v = this, m = j && (g || !T), _ === !1) var n = T && !g;
                    else {
                        h || T || (b = y);
                        var o = _ - (y - b),
                            i = 0 >= o || o > _;
                        i ? (h && (h = clearTimeout(h)), b = y, d = t.apply(v, f)) : h || (h = setTimeout(c, o))
                    }
                    return i && g ? g = clearTimeout(g) : g || e === _ || (g = setTimeout(u, e)), n && (i = !0, d = t.apply(v, f)), !i || g || h || (f = v = void 0), d
                }
                var f, h, d, y, v, g, m, b = 0,
                    _ = !1,
                    j = !0;
                if ("function" != typeof t) throw new TypeError(i);
                if (e = 0 > e ? 0 : +e || 0, n === !0) {
                    var T = !0;
                    j = !1
                } else o(n) && (T = !!n.leading, _ = "maxWait" in n && s(+n.maxWait || 0, e), j = "trailing" in n ? !!n.trailing : j);
                return p.cancel = a, p
            }
            var o = t("../lang/isObject"),
                r = t("../date/now"),
                i = "Expected a function",
                s = Math.max;
            e.exports = n
        }, {
            "../date/now": 4,
            "../lang/isObject": 33
        }],
        6: [function(t, e) {
            function n(t, e) {
                if ("function" != typeof t) throw new TypeError(o);
                return e = r(void 0 === e ? t.length - 1 : +e || 0, 0),
                    function() {
                        for (var n = arguments, o = -1, i = r(n.length - e, 0), s = Array(i); ++o < i;) s[o] = n[e + o];
                        switch (e) {
                            case 0:
                                return t.call(this, s);
                            case 1:
                                return t.call(this, n[0], s);
                            case 2:
                                return t.call(this, n[0], n[1], s)
                        }
                        var a = Array(e + 1);
                        for (o = -1; ++o < e;) a[o] = n[o];
                        return a[e] = s, t.apply(this, a)
                    }
            }
            var o = "Expected a function",
                r = Math.max;
            e.exports = n
        }, {}],
        7: [function(t, e) {
            function n(t, e, n) {
                var s = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError(i);
                return n === !1 ? s = !1 : r(n) && (s = "leading" in n ? !!n.leading : s, a = "trailing" in n ? !!n.trailing : a), o(t, e, {
                    leading: s,
                    maxWait: +e,
                    trailing: a
                })
            }
            var o = t("./debounce"),
                r = t("../lang/isObject"),
                i = "Expected a function";
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "./debounce": 5
        }],
        8: [function(t, e) {
            function n(t, e) {
                var n = -1,
                    o = t.length;
                for (e || (e = Array(o)); ++n < o;) e[n] = t[n];
                return e
            }
            e.exports = n
        }, {}],
        9: [function(t, e) {
            function n(t, e) {
                for (var n = -1, o = t.length; ++n < o && e(t[n], n, t) !== !1;);
                return t
            }
            e.exports = n
        }, {}],
        10: [function(t, e) {
            function n(t, e, n) {
                n || (n = {});
                for (var o = -1, r = e.length; ++o < r;) {
                    var i = e[o];
                    n[i] = t[i]
                }
                return n
            }
            e.exports = n
        }, {}],
        11: [function(t, e) {
            var n = t("./createBaseFor"),
                o = n();
            e.exports = o
        }, {
            "./createBaseFor": 18
        }],
        12: [function(t, e) {
            function n(t, e) {
                return o(t, e, r)
            }
            var o = t("./baseFor"),
                r = t("../object/keysIn");
            e.exports = n
        }, {
            "../object/keysIn": 39,
            "./baseFor": 11
        }],
        13: [function(t, e) {
            function n(t, e, p, f, h) {
                if (!a(t)) return t;
                var d = s(e) && (i(e) || u(e)),
                    y = d ? void 0 : c(e);
                return o(y || e, function(o, i) {
                    if (y && (i = o, o = e[i]), l(o)) f || (f = []), h || (h = []), r(t, e, i, n, p, f, h);
                    else {
                        var s = t[i],
                            a = p ? p(s, o, i, t, e) : void 0,
                            u = void 0 === a;
                        u && (a = o), void 0 === a && (!d || i in t) || !u && (a === a ? a === s : s !== s) || (t[i] = a)
                    }
                }), t
            }
            var o = t("./arrayEach"),
                r = t("./baseMergeDeep"),
                i = t("../lang/isArray"),
                s = t("./isArrayLike"),
                a = t("../lang/isObject"),
                l = t("./isObjectLike"),
                u = t("../lang/isTypedArray"),
                c = t("../object/keys");
            e.exports = n
        }, {
            "../lang/isArray": 30,
            "../lang/isObject": 33,
            "../lang/isTypedArray": 36,
            "../object/keys": 38,
            "./arrayEach": 9,
            "./baseMergeDeep": 14,
            "./isArrayLike": 21,
            "./isObjectLike": 26
        }],
        14: [function(t, e) {
            function n(t, e, n, c, p, f, h) {
                for (var d = f.length, y = e[n]; d--;)
                    if (f[d] == y) return void(t[n] = h[d]);
                var v = t[n],
                    g = p ? p(v, y, n, t, e) : void 0,
                    m = void 0 === g;
                m && (g = y, s(y) && (i(y) || l(y)) ? g = i(v) ? v : s(v) ? o(v) : [] : a(y) || r(y) ? g = r(v) ? u(v) : a(v) ? v : {} : m = !1), f.push(y), h.push(g), m ? t[n] = c(g, y, p, f, h) : (g === g ? g !== v : v === v) && (t[n] = g)
            }
            var o = t("./arrayCopy"),
                r = t("../lang/isArguments"),
                i = t("../lang/isArray"),
                s = t("./isArrayLike"),
                a = t("../lang/isPlainObject"),
                l = t("../lang/isTypedArray"),
                u = t("../lang/toPlainObject");
            e.exports = n
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isPlainObject": 34,
            "../lang/isTypedArray": 36,
            "../lang/toPlainObject": 37,
            "./arrayCopy": 8,
            "./isArrayLike": 21
        }],
        15: [function(t, e) {
            function n(t) {
                return function(e) {
                    return null == e ? void 0 : o(e)[t]
                }
            }
            var o = t("./toObject");
            e.exports = n
        }, {
            "./toObject": 28
        }],
        16: [function(t, e) {
            function n(t, e, n) {
                if ("function" != typeof t) return o;
                if (void 0 === e) return t;
                switch (n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        };
                    case 3:
                        return function(n, o, r) {
                            return t.call(e, n, o, r)
                        };
                    case 4:
                        return function(n, o, r, i) {
                            return t.call(e, n, o, r, i)
                        };
                    case 5:
                        return function(n, o, r, i, s) {
                            return t.call(e, n, o, r, i, s)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var o = t("../utility/identity");
            e.exports = n
        }, {
            "../utility/identity": 42
        }],
        17: [function(t, e) {
            function n(t) {
                return i(function(e, n) {
                    var i = -1,
                        s = null == e ? 0 : n.length,
                        a = s > 2 ? n[s - 2] : void 0,
                        l = s > 2 ? n[2] : void 0,
                        u = s > 1 ? n[s - 1] : void 0;
                    for ("function" == typeof a ? (a = o(a, u, 5), s -= 2) : (a = "function" == typeof u ? u : void 0, s -= a ? 1 : 0), l && r(n[0], n[1], l) && (a = 3 > s ? void 0 : a, s = 1); ++i < s;) {
                        var c = n[i];
                        c && t(e, c, a)
                    }
                    return e
                })
            }
            var o = t("./bindCallback"),
                r = t("./isIterateeCall"),
                i = t("../function/restParam");
            e.exports = n
        }, {
            "../function/restParam": 6,
            "./bindCallback": 16,
            "./isIterateeCall": 24
        }],
        18: [function(t, e) {
            function n(t) {
                return function(e, n, r) {
                    for (var i = o(e), s = r(e), a = s.length, l = t ? a : -1; t ? l-- : ++l < a;) {
                        var u = s[l];
                        if (n(i[u], u, i) === !1) break
                    }
                    return e
                }
            }
            var o = t("./toObject");
            e.exports = n
        }, {
            "./toObject": 28
        }],
        19: [function(t, e) {
            var n = t("./baseProperty"),
                o = n("length");
            e.exports = o
        }, {
            "./baseProperty": 15
        }],
        20: [function(t, e) {
            function n(t, e) {
                var n = null == t ? void 0 : t[e];
                return o(n) ? n : void 0
            }
            var o = t("../lang/isNative");
            e.exports = n
        }, {
            "../lang/isNative": 32
        }],
        21: [function(t, e) {
            function n(t) {
                return null != t && r(o(t))
            }
            var o = t("./getLength"),
                r = t("./isLength");
            e.exports = n
        }, {
            "./getLength": 19,
            "./isLength": 25
        }],
        22: [function(t, e) {
            var n = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (t) {
                    return function() {
                        return !1
                    }
                }
                return function(t) {
                    return "function" != typeof t.toString && "string" == typeof(t + "")
                }
            }();
            e.exports = n
        }, {}],
        23: [function(t, e) {
            function n(t, e) {
                return t = "number" == typeof t || o.test(t) ? +t : -1, e = null == e ? r : e, t > -1 && t % 1 == 0 && e > t
            }
            var o = /^\d+$/,
                r = 9007199254740991;
            e.exports = n
        }, {}],
        24: [function(t, e) {
            function n(t, e, n) {
                if (!i(n)) return !1;
                var s = typeof e;
                if ("number" == s ? o(n) && r(e, n.length) : "string" == s && e in n) {
                    var a = n[e];
                    return t === t ? t === a : a !== a
                }
                return !1
            }
            var o = t("./isArrayLike"),
                r = t("./isIndex"),
                i = t("../lang/isObject");
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "./isArrayLike": 21,
            "./isIndex": 23
        }],
        25: [function(t, e) {
            function n(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && o >= t
            }
            var o = 9007199254740991;
            e.exports = n
        }, {}],
        26: [function(t, e) {
            function n(t) {
                return !!t && "object" == typeof t
            }
            e.exports = n
        }, {}],
        27: [function(t, e) {
            function n(t) {
                for (var e = l(t), n = e.length, u = n && t.length, p = !!u && s(u) && (r(t) || o(t) || a(t)), f = -1, h = []; ++f < n;) {
                    var d = e[f];
                    (p && i(d, u) || c.call(t, d)) && h.push(d)
                }
                return h
            }
            var o = t("../lang/isArguments"),
                r = t("../lang/isArray"),
                i = t("./isIndex"),
                s = t("./isLength"),
                a = t("../lang/isString"),
                l = t("../object/keysIn"),
                u = Object.prototype,
                c = u.hasOwnProperty;
            e.exports = n
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isString": 35,
            "../object/keysIn": 39,
            "./isIndex": 23,
            "./isLength": 25
        }],
        28: [function(t, e) {
            function n(t) {
                if (i.unindexedChars && r(t)) {
                    for (var e = -1, n = t.length, s = Object(t); ++e < n;) s[e] = t.charAt(e);
                    return s
                }
                return o(t) ? t : Object(t)
            }
            var o = t("../lang/isObject"),
                r = t("../lang/isString"),
                i = t("../support");
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        29: [function(t, e) {
            function n(t) {
                return r(t) && o(t) && s.call(t, "callee") && !a.call(t, "callee")
            }
            var o = t("../internal/isArrayLike"),
                r = t("../internal/isObjectLike"),
                i = Object.prototype,
                s = i.hasOwnProperty,
                a = i.propertyIsEnumerable;
            e.exports = n
        }, {
            "../internal/isArrayLike": 21,
            "../internal/isObjectLike": 26
        }],
        30: [function(t, e) {
            var n = t("../internal/getNative"),
                o = t("../internal/isLength"),
                r = t("../internal/isObjectLike"),
                i = "[object Array]",
                s = Object.prototype,
                a = s.toString,
                l = n(Array, "isArray"),
                u = l || function(t) {
                    return r(t) && o(t.length) && a.call(t) == i
                };
            e.exports = u
        }, {
            "../internal/getNative": 20,
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        31: [function(t, e) {
            function n(t) {
                return o(t) && s.call(t) == r
            }
            var o = t("./isObject"),
                r = "[object Function]",
                i = Object.prototype,
                s = i.toString;
            e.exports = n
        }, {
            "./isObject": 33
        }],
        32: [function(t, e) {
            function n(t) {
                return null == t ? !1 : o(t) ? c.test(l.call(t)) : i(t) && (r(t) ? c : s).test(t)
            }
            var o = t("./isFunction"),
                r = t("../internal/isHostObject"),
                i = t("../internal/isObjectLike"),
                s = /^\[object .+?Constructor\]$/,
                a = Object.prototype,
                l = Function.prototype.toString,
                u = a.hasOwnProperty,
                c = RegExp("^" + l.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = n
        }, {
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "./isFunction": 31
        }],
        33: [function(t, e) {
            function n(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            e.exports = n
        }, {}],
        34: [function(t, e) {
            function n(t) {
                var e;
                if (!s(t) || p.call(t) != l || i(t) || r(t) || !c.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
                var n;
                return a.ownLast ? (o(t, function(t, e, o) {
                    return n = c.call(o, e), !1
                }), n !== !1) : (o(t, function(t, e) {
                    n = e
                }), void 0 === n || c.call(t, n))
            }
            var o = t("../internal/baseForIn"),
                r = t("./isArguments"),
                i = t("../internal/isHostObject"),
                s = t("../internal/isObjectLike"),
                a = t("../support"),
                l = "[object Object]",
                u = Object.prototype,
                c = u.hasOwnProperty,
                p = u.toString;
            e.exports = n
        }, {
            "../internal/baseForIn": 12,
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "../support": 41,
            "./isArguments": 29
        }],
        35: [function(t, e) {
            function n(t) {
                return "string" == typeof t || o(t) && s.call(t) == r
            }
            var o = t("../internal/isObjectLike"),
                r = "[object String]",
                i = Object.prototype,
                s = i.toString;
            e.exports = n
        }, {
            "../internal/isObjectLike": 26
        }],
        36: [function(t, e) {
            function n(t) {
                return r(t) && o(t.length) && !!E[P.call(t)]
            }
            var o = t("../internal/isLength"),
                r = t("../internal/isObjectLike"),
                i = "[object Arguments]",
                s = "[object Array]",
                a = "[object Boolean]",
                l = "[object Date]",
                u = "[object Error]",
                c = "[object Function]",
                p = "[object Map]",
                f = "[object Number]",
                h = "[object Object]",
                d = "[object RegExp]",
                y = "[object Set]",
                v = "[object String]",
                g = "[object WeakMap]",
                m = "[object ArrayBuffer]",
                b = "[object Float32Array]",
                _ = "[object Float64Array]",
                j = "[object Int8Array]",
                T = "[object Int16Array]",
                w = "[object Int32Array]",
                k = "[object Uint8Array]",
                x = "[object Uint8ClampedArray]",
                C = "[object Uint16Array]",
                O = "[object Uint32Array]",
                E = {};
            E[b] = E[_] = E[j] = E[T] = E[w] = E[k] = E[x] = E[C] = E[O] = !0, E[i] = E[s] = E[m] = E[a] = E[l] = E[u] = E[c] = E[p] = E[f] = E[h] = E[d] = E[y] = E[v] = E[g] = !1;
            var S = Object.prototype,
                P = S.toString;
            e.exports = n
        }, {
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        37: [function(t, e) {
            function n(t) {
                return o(t, r(t))
            }
            var o = t("../internal/baseCopy"),
                r = t("../object/keysIn");
            e.exports = n
        }, {
            "../internal/baseCopy": 10,
            "../object/keysIn": 39
        }],
        38: [function(t, e) {
            var n = t("../internal/getNative"),
                o = t("../internal/isArrayLike"),
                r = t("../lang/isObject"),
                i = t("../internal/shimKeys"),
                s = t("../support"),
                a = n(Object, "keys"),
                l = a ? function(t) {
                    var e = null == t ? void 0 : t.constructor;
                    return "function" == typeof e && e.prototype === t || ("function" == typeof t ? s.enumPrototypes : o(t)) ? i(t) : r(t) ? a(t) : []
                } : i;
            e.exports = l
        }, {
            "../internal/getNative": 20,
            "../internal/isArrayLike": 21,
            "../internal/shimKeys": 27,
            "../lang/isObject": 33,
            "../support": 41
        }],
        39: [function(t, e) {
            function n(t) {
                if (null == t) return [];
                u(t) || (t = Object(t));
                var e = t.length;
                e = e && l(e) && (i(t) || r(t) || c(t)) && e || 0;
                for (var n = t.constructor, o = -1, f = s(n) && n.prototype || w, h = f === t, d = Array(e), v = e > 0, g = p.enumErrorProps && (t === T || t instanceof Error), b = p.enumPrototypes && s(t); ++o < e;) d[o] = o + "";
                for (var E in t) b && "prototype" == E || g && ("message" == E || "name" == E) || v && a(E, e) || "constructor" == E && (h || !x.call(t, E)) || d.push(E);
                if (p.nonEnumShadows && t !== w) {
                    var S = t === k ? _ : t === T ? y : C.call(t),
                        P = O[S] || O[m];
                    for (S == m && (f = w), e = j.length; e--;) {
                        E = j[e];
                        var M = P[E];
                        h && M || (M ? !x.call(t, E) : t[E] === f[E]) || d.push(E)
                    }
                }
                return d
            }
            var o = t("../internal/arrayEach"),
                r = t("../lang/isArguments"),
                i = t("../lang/isArray"),
                s = t("../lang/isFunction"),
                a = t("../internal/isIndex"),
                l = t("../internal/isLength"),
                u = t("../lang/isObject"),
                c = t("../lang/isString"),
                p = t("../support"),
                f = "[object Array]",
                h = "[object Boolean]",
                d = "[object Date]",
                y = "[object Error]",
                v = "[object Function]",
                g = "[object Number]",
                m = "[object Object]",
                b = "[object RegExp]",
                _ = "[object String]",
                j = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                T = Error.prototype,
                w = Object.prototype,
                k = String.prototype,
                x = w.hasOwnProperty,
                C = w.toString,
                O = {};
            O[f] = O[d] = O[g] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, O[h] = O[_] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, O[y] = O[v] = O[b] = {
                constructor: !0,
                toString: !0
            }, O[m] = {
                constructor: !0
            }, o(j, function(t) {
                for (var e in O)
                    if (x.call(O, e)) {
                        var n = O[e];
                        n[t] = x.call(n, t)
                    }
            }), e.exports = n
        }, {
            "../internal/arrayEach": 9,
            "../internal/isIndex": 23,
            "../internal/isLength": 25,
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isFunction": 31,
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        40: [function(t, e) {
            var n = t("../internal/baseMerge"),
                o = t("../internal/createAssigner"),
                r = o(n);
            e.exports = r
        }, {
            "../internal/baseMerge": 13,
            "../internal/createAssigner": 17
        }],
        41: [function(t, e) {
            var n = Array.prototype,
                o = Error.prototype,
                r = Object.prototype,
                i = r.propertyIsEnumerable,
                s = n.splice,
                a = {};
            ! function(t) {
                var e = function() {
                        this.x = t
                    },
                    n = {
                        0: t,
                        length: t
                    },
                    r = [];
                e.prototype = {
                    valueOf: t,
                    y: t
                };
                for (var l in new e) r.push(l);
                a.enumErrorProps = i.call(o, "message") || i.call(o, "name"), a.enumPrototypes = i.call(e, "prototype"), a.nonEnumShadows = !/valueOf/.test(r), a.ownLast = "x" != r[0], a.spliceObjects = (s.call(n, 0, 1), !n[0]), a.unindexedChars = "x" [0] + Object("x")[0] != "xx"
            }(1, 0), e.exports = a
        }, {}],
        42: [function(t, e) {
            function n(t) {
                return t
            }
            e.exports = n
        }, {}],
        43: [function(t, e) {
            "use strict";
            var n = t("object-keys");
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    e = Symbol("test");
                if ("string" == typeof e) return !1;
                if (e instanceof Symbol) return !1;
                t[e] = 42;
                for (e in t) return !1;
                if (0 !== n(t).length) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var o = Object.getOwnPropertySymbols(t);
                if (1 !== o.length || o[0] !== e) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (42 !== r.value || r.enumerable !== !0) return !1
                }
                return !0
            }
        }, {
            "object-keys": 49
        }],
        44: [function(t, e) {
            "use strict";
            var n = t("object-keys"),
                o = t("function-bind"),
                r = function(t) {
                    return "undefined" != typeof t && null !== t
                },
                i = t("./hasSymbols")(),
                s = Object,
                a = o.call(Function.call, Array.prototype.push),
                l = o.call(Function.call, Object.prototype.propertyIsEnumerable);
            e.exports = function(t) {
                if (!r(t)) throw new TypeError("target must be an object");
                var e, o, u, c, p, f = s(t);
                for (e = 1; e < arguments.length; ++e) {
                    if (o = s(arguments[e]), c = n(o), i && Object.getOwnPropertySymbols)
                        for (p = Object.getOwnPropertySymbols(o), u = 0; u < p.length; ++u) l(o, p[u]) && a(c, p[u]);
                    for (u = 0; u < c.length; ++u) f[c[u]] = o[c[u]]
                }
                return f
            }
        }, {
            "./hasSymbols": 43,
            "function-bind": 48,
            "object-keys": 49
        }],
        45: [function(t, e) {
            "use strict";
            var n = t("define-properties"),
                o = t("./implementation"),
                r = t("./polyfill"),
                i = t("./shim");
            n(o, {
                implementation: o,
                getPolyfill: r,
                shim: i
            }), e.exports = o
        }, {
            "./implementation": 44,
            "./polyfill": 51,
            "./shim": 52,
            "define-properties": 46
        }],
        46: [function(t, e) {
            "use strict";
            var n = t("object-keys"),
                o = t("foreach"),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol(),
                i = Object.prototype.toString,
                s = function(t) {
                    return "function" == typeof t && "[object Function]" === i.call(t)
                },
                a = function() {
                    var t = {};
                    try {
                        Object.defineProperty(t, "x", {
                            enumerable: !1,
                            value: t
                        });
                        for (var e in t) return !1;
                        return t.x === t
                    } catch (n) {
                        return !1
                    }
                },
                l = Object.defineProperty && a(),
                u = function(t, e, n, o) {
                    (!(e in t) || s(o) && o()) && (l ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: n,
                        writable: !0
                    }) : t[e] = n)
                },
                c = function(t, e) {
                    var i = arguments.length > 2 ? arguments[2] : {},
                        s = n(e);
                    r && (s = s.concat(Object.getOwnPropertySymbols(e))), o(s, function(n) {
                        u(t, n, e[n], i[n])
                    })
                };
            c.supportsDescriptors = !!l, e.exports = c
        }, {
            foreach: 47,
            "object-keys": 49
        }],
        47: [function(t, e) {
            var n = Object.prototype.hasOwnProperty,
                o = Object.prototype.toString;
            e.exports = function(t, e, r) {
                if ("[object Function]" !== o.call(e)) throw new TypeError("iterator must be a function");
                var i = t.length;
                if (i === +i)
                    for (var s = 0; i > s; s++) e.call(r, t[s], s, t);
                else
                    for (var a in t) n.call(t, a) && e.call(r, t[a], a, t)
            }
        }, {}],
        48: [function(t, e) {
            var n = "Function.prototype.bind called on incompatible ",
                o = Array.prototype.slice,
                r = Object.prototype.toString,
                i = "[object Function]";
            e.exports = function(t) {
                var e = this;
                if ("function" != typeof e || r.call(e) !== i) throw new TypeError(n + e);
                for (var s = o.call(arguments, 1), a = function() {
                        if (this instanceof p) {
                            var n = e.apply(this, s.concat(o.call(arguments)));
                            return Object(n) === n ? n : this
                        }
                        return e.apply(t, s.concat(o.call(arguments)))
                    }, l = Math.max(0, e.length - s.length), u = [], c = 0; l > c; c++) u.push("$" + c);
                var p = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a);
                if (e.prototype) {
                    var f = function() {};
                    f.prototype = e.prototype, p.prototype = new f, f.prototype = null
                }
                return p
            }
        }, {}],
        49: [function(t, e) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                o = Object.prototype.toString,
                r = Array.prototype.slice,
                i = t("./isArguments"),
                s = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                a = function() {}.propertyIsEnumerable("prototype"),
                l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                u = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                },
                c = {
                    $console: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $parent: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                p = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try {
                        if (!c["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                            u(window[t])
                        } catch (e) {
                            return !0
                        }
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(),
                f = function(t) {
                    if ("undefined" == typeof window || !p) return u(t);
                    try {
                        return u(t)
                    } catch (e) {
                        return !1
                    }
                },
                h = function(t) {
                    var e = null !== t && "object" == typeof t,
                        r = "[object Function]" === o.call(t),
                        u = i(t),
                        c = e && "[object String]" === o.call(t),
                        p = [];
                    if (!e && !r && !u) throw new TypeError("Object.keys called on a non-object");
                    var h = a && r;
                    if (c && t.length > 0 && !n.call(t, 0))
                        for (var d = 0; d < t.length; ++d) p.push(String(d));
                    if (u && t.length > 0)
                        for (var y = 0; y < t.length; ++y) p.push(String(y));
                    else
                        for (var v in t) h && "prototype" === v || !n.call(t, v) || p.push(String(v));
                    if (s)
                        for (var g = f(t), m = 0; m < l.length; ++m) g && "constructor" === l[m] || !n.call(t, l[m]) || p.push(l[m]);
                    return p
                };
            h.shim = function() {
                if (Object.keys) {
                    var t = function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2);
                    if (!t) {
                        var e = Object.keys;
                        Object.keys = function(t) {
                            return e(i(t) ? r.call(t) : t)
                        }
                    }
                } else Object.keys = h;
                return Object.keys || h
            }, e.exports = h
        }, {
            "./isArguments": 50
        }],
        50: [function(t, e) {
            "use strict";
            var n = Object.prototype.toString;
            e.exports = function(t) {
                var e = n.call(t),
                    o = "[object Arguments]" === e;
                return o || (o = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), o
            }
        }, {}],
        51: [function(t, e) {
            "use strict";
            var n = t("./implementation"),
                o = function() {
                    if (!Object.assign || !Object.preventExtensions) return !1;
                    var t = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(t, "xy")
                    } catch (e) {
                        return "y" === t[1]
                    }
                };
            e.exports = function() {
                return !Object.assign || o() ? n : Object.assign
            }
        }, {
            "./implementation": 44
        }],
        52: [function(t, e) {
            "use strict";
            var n = t("define-properties"),
                o = t("./polyfill");
            e.exports = function() {
                var t = o();
                return Object.assign !== t && n(Object, {
                    assign: t
                }), t
            }
        }, {
            "./polyfill": 51,
            "define-properties": 46
        }],
        53: [function(t, e) {
            function n(t, e) {
                var n, o = null;
                try {
                    n = JSON.parse(t, e)
                } catch (r) {
                    o = r
                }
                return [o, n]
            }
            e.exports = n
        }, {}],
        54: [function(t, e) {
            function n(t) {
                return t.replace(/\n\r?\s*/g, "")
            }
            e.exports = function(t) {
                for (var e = "", o = 0; o < arguments.length; o++) e += n(t[o]) + (arguments[o + 1] || "");
                return e
            }
        }, {}],
        55: [function(t, e) {
            "use strict";

            function n(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function o(t, e) {
                function r() {
                    4 === p.readyState && u()
                }

                function i() {
                    var t = void 0;
                    if (p.response ? t = p.response : "text" !== p.responseType && p.responseType || (t = p.responseText || p.responseXML), _) try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    return t
                }

                function l(t) {
                    clearTimeout(d), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, e(t, c)
                }

                function u() {
                    if (!h) {
                        var n;
                        clearTimeout(d), n = t.useXDR && void 0 === p.status ? 200 : 1223 === p.status ? 204 : p.status;
                        var o = c,
                            r = null;
                        0 !== n ? (o = {
                            body: i(),
                            statusCode: n,
                            method: v,
                            headers: {},
                            url: y,
                            rawRequest: p
                        }, p.getAllResponseHeaders && (o.headers = a(p.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), e(r, o, o.body)
                    }
                }
                var c = {
                    body: void 0,
                    headers: {},
                    statusCode: 0,
                    method: v,
                    url: y,
                    rawRequest: p
                };
                if ("string" == typeof t && (t = {
                        uri: t
                    }), t = t || {}, "undefined" == typeof e) throw new Error("callback argument missing");
                e = s(e);
                var p = t.xhr || null;
                p || (p = t.cors || t.useXDR ? new o.XDomainRequest : new o.XMLHttpRequest);
                var f, h, d, y = p.url = t.uri || t.url,
                    v = p.method = t.method || "GET",
                    g = t.body || t.data,
                    m = p.headers = t.headers || {},
                    b = !!t.sync,
                    _ = !1;
                if ("json" in t && (_ = !0, m.accept || m.Accept || (m.Accept = "application/json"), "GET" !== v && "HEAD" !== v && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"), g = JSON.stringify(t.json))), p.onreadystatechange = r, p.onload = u, p.onerror = l, p.onprogress = function() {}, p.ontimeout = l, p.open(v, y, !b, t.username, t.password), b || (p.withCredentials = !!t.withCredentials), !b && t.timeout > 0 && (d = setTimeout(function() {
                        h = !0, p.abort("timeout");
                        var t = new Error("XMLHttpRequest timeout");
                        t.code = "ETIMEDOUT", l(t)
                    }, t.timeout)), p.setRequestHeader)
                    for (f in m) m.hasOwnProperty(f) && p.setRequestHeader(f, m[f]);
                else if (t.headers && !n(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (p.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(p), p.send(g), p
            }

            function r() {}
            var i = t("global/window"),
                s = t("once"),
                a = t("parse-headers");
            e.exports = o, o.XMLHttpRequest = i.XMLHttpRequest || r, o.XDomainRequest = "withCredentials" in new o.XMLHttpRequest ? o.XMLHttpRequest : i.XDomainRequest
        }, {
            "global/window": 2,
            once: 56,
            "parse-headers": 60
        }],
        56: [function(t, e) {
            function n(t) {
                var e = !1;
                return function() {
                    return e ? void 0 : (e = !0, t.apply(this, arguments))
                }
            }
            e.exports = n, n.proto = n(function() {
                Object.defineProperty(Function.prototype, "once", {
                    value: function() {
                        return n(this)
                    },
                    configurable: !0
                })
            })
        }, {}],
        57: [function(t, e) {
            function n(t, e, n) {
                if (!s(e)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (n = this), "[object Array]" === a.call(t) ? o(t, e, n) : "string" == typeof t ? r(t, e, n) : i(t, e, n)
            }

            function o(t, e, n) {
                for (var o = 0, r = t.length; r > o; o++) l.call(t, o) && e.call(n, t[o], o, t)
            }

            function r(t, e, n) {
                for (var o = 0, r = t.length; r > o; o++) e.call(n, t.charAt(o), o, t)
            }

            function i(t, e, n) {
                for (var o in t) l.call(t, o) && e.call(n, t[o], o, t)
            }
            var s = t("is-function");
            e.exports = n;
            var a = Object.prototype.toString,
                l = Object.prototype.hasOwnProperty
        }, {
            "is-function": 58
        }],
        58: [function(t, e) {
            function n(t) {
                var e = o.call(t);
                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            }
            e.exports = n;
            var o = Object.prototype.toString
        }, {}],
        59: [function(t, e, n) {
            function o(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }
            n = e.exports = o, n.left = function(t) {
                return t.replace(/^\s*/, "")
            }, n.right = function(t) {
                return t.replace(/\s*$/, "")
            }
        }, {}],
        60: [function(t, e) {
            var n = t("trim"),
                o = t("for-each"),
                r = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
            e.exports = function(t) {
                if (!t) return {};
                var e = {};
                return o(n(t).split("\n"), function(t) {
                    var o = t.indexOf(":"),
                        i = n(t.slice(0, o)).toLowerCase(),
                        s = n(t.slice(o + 1));
                    "undefined" == typeof e[i] ? e[i] = s : r(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
                }), e
            }
        }, {
            "for-each": 57,
            trim: 59
        }],
        61: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./button.js"),
                a = o(s),
                l = t("./component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o) {
                        r(this, e), t.call(this, n, o)
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-big-play-button"
                    }, e.prototype.handleClick = function() {
                        this.player_.play()
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Play Video", u["default"].registerComponent("BigPlayButton", c), n["default"] = c, e.exports = n["default"]
        }, {
            "./button.js": 62,
            "./component.js": 63
        }],
        62: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./component"),
                l = r(a),
                u = t("./utils/dom.js"),
                c = o(u),
                p = t("./utils/events.js"),
                f = o(p),
                h = t("./utils/fn.js"),
                d = o(h),
                y = t("global/document"),
                v = r(y),
                g = t("object.assign"),
                m = r(g),
                b = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.emitTapEvents(), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "button" : arguments[0],
                            n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        n = m["default"]({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, n), o = m["default"]({
                            role: "button",
                            type: "button",
                            "aria-live": "polite"
                        }, o);
                        var r = t.prototype.createEl.call(this, e, n, o);
                        return this.controlTextEl_ = c.createEl("span", {
                            className: "vjs-control-text"
                        }), r.appendChild(this.controlTextEl_), this.controlText(this.controlText_), r
                    }, e.prototype.controlText = function(t) {
                        return t ? (this.controlText_ = t, this.controlTextEl_.innerHTML = this.localize(this.controlText_), this) : this.controlText_ || "Need Text"
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {}, e.prototype.handleFocus = function() {
                        f.on(v["default"], "keydown", d.bind(this, this.handleKeyPress))
                    }, e.prototype.handleKeyPress = function(t) {
                        (32 === t.which || 13 === t.which) && (t.preventDefault(), this.handleClick(t))
                    }, e.prototype.handleBlur = function() {
                        f.off(v["default"], "keydown", d.bind(this, this.handleKeyPress))
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Button", b), n["default"] = b, e.exports = n["default"]
        }, {
            "./component": 63,
            "./utils/dom.js": 123,
            "./utils/events.js": 124,
            "./utils/fn.js": 125,
            "global/document": 1,
            "object.assign": 45
        }],
        63: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var s = t("global/window"),
                a = r(s),
                l = t("./utils/dom.js"),
                u = o(l),
                c = t("./utils/fn.js"),
                p = o(c),
                f = t("./utils/guid.js"),
                h = o(f),
                d = t("./utils/events.js"),
                y = o(d),
                v = t("./utils/log.js"),
                g = r(v),
                m = t("./utils/to-title-case.js"),
                b = r(m),
                _ = t("object.assign"),
                j = r(_),
                T = t("./utils/merge-options.js"),
                w = r(T),
                k = function() {
                    function t(e, n, o) {
                        if (i(this, t), this.player_ = !e && this.play ? e = this : e, this.options_ = w["default"]({}, this.options_), n = this.options_ = w["default"](this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) {
                            var r = e && e.id && e.id() || "no_player";
                            this.id_ = r + "_component_" + h.newGUID()
                        }
                        this.name_ = n.name || null, n.el ? this.el_ = n.el : n.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, n.initChildren !== !1 && this.initChildren(), this.ready(o), n.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }
                    return t.prototype.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                    }, t.prototype.player = function() {
                        return this.player_
                    }, t.prototype.options = function(t) {
                        return g["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = w["default"](this.options_, t), this.options_) : this.options_
                    }, t.prototype.el = function() {
                        return this.el_
                    }, t.prototype.createEl = function(t, e, n) {
                        return u.createEl(t, e, n)
                    }, t.prototype.localize = function(t) {
                        var e = this.player_.language && this.player_.language(),
                            n = this.player_.languages && this.player_.languages();
                        if (!e || !n) return t;
                        var o = n[e];
                        if (o && o[t]) return o[t];
                        var r = e.split("-")[0],
                            i = n[r];
                        return i && i[t] ? i[t] : t
                    }, t.prototype.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, t.prototype.id = function() {
                        return this.id_
                    }, t.prototype.name = function() {
                        return this.name_
                    }, t.prototype.children = function() {
                        return this.children_
                    }, t.prototype.getChildById = function(t) {
                        return this.childIndex_[t]
                    }, t.prototype.getChild = function(t) {
                        return this.childNameIndex_[t]
                    }, t.prototype.addChild = function(e) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = void 0,
                            r = void 0;
                        if ("string" == typeof e) {
                            r = e, n || (n = {}), n === !0 && (g["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."), n = {});
                            var i = n.componentClass || b["default"](r);
                            n.name = r;
                            var s = t.getComponent(i);
                            o = new s(this.player_ || this, n)
                        } else o = e;
                        return this.children_.push(o), "function" == typeof o.id && (this.childIndex_[o.id()] = o), r = r || o.name && o.name(), r && (this.childNameIndex_[r] = o), "function" == typeof o.el && o.el() && this.contentEl().appendChild(o.el()), o
                    }, t.prototype.removeChild = function(t) {
                        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                            for (var e = !1, n = this.children_.length - 1; n >= 0; n--)
                                if (this.children_[n] === t) {
                                    e = !0, this.children_.splice(n, 1);
                                    break
                                }
                            if (e) {
                                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                var o = t.el();
                                o && o.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                            }
                        }
                    }, t.prototype.initChildren = function() {
                        var t = this,
                            e = this.options_.children;
                        e && ! function() {
                            var n = t.options_,
                                o = function(e, o) {
                                    void 0 !== n[e] && (o = n[e]), o !== !1 && (o === !0 && (o = {}), o.playerOptions = t.options_.playerOptions, t[e] = t.addChild(e, o))
                                };
                            if (Array.isArray(e))
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r],
                                        s = void 0,
                                        a = void 0;
                                    "string" == typeof i ? (s = i, a = {}) : (s = i.name, a = i), o(s, a)
                                } else Object.getOwnPropertyNames(e).forEach(function(t) {
                                    o(t, e[t])
                                })
                        }()
                    }, t.prototype.buildCSSClass = function() {
                        return ""
                    }, t.prototype.on = function(t, e, n) {
                        var o = this;
                        return "string" == typeof t || Array.isArray(t) ? y.on(this.el_, t, p.bind(this, e)) : ! function() {
                            var r = t,
                                i = e,
                                s = p.bind(o, n),
                                a = function() {
                                    return o.off(r, i, s)
                                };
                            a.guid = s.guid, o.on("dispose", a);
                            var l = function() {
                                return o.off("dispose", a)
                            };
                            l.guid = s.guid, t.nodeName ? (y.on(r, i, s), y.on(r, "dispose", l)) : "function" == typeof t.on && (r.on(i, s), r.on("dispose", l))
                        }(), this
                    }, t.prototype.off = function(t, e, n) {
                        if (!t || "string" == typeof t || Array.isArray(t)) y.off(this.el_, t, e);
                        else {
                            var o = t,
                                r = e,
                                i = p.bind(this, n);
                            this.off("dispose", i), t.nodeName ? (y.off(o, r, i), y.off(o, "dispose", i)) : (o.off(r, i), o.off("dispose", i))
                        }
                        return this
                    }, t.prototype.one = function(t, e, n) {
                        var o = this,
                            r = arguments;
                        return "string" == typeof t || Array.isArray(t) ? y.one(this.el_, t, p.bind(this, e)) : ! function() {
                            var i = t,
                                s = e,
                                a = p.bind(o, n),
                                l = function u() {
                                    o.off(i, s, u), a.apply(null, r)
                                };
                            l.guid = a.guid, o.on(i, s, l)
                        }(), this
                    }, t.prototype.trigger = function(t, e) {
                        return y.trigger(this.el_, t, e), this
                    }, t.prototype.ready = function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                        return t && (this.isReady_ ? e ? t.call(this) : this.setTimeout(t, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(t))), this
                    }, t.prototype.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var t = this.readyQueue_;
                            this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
                                t.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, t.prototype.hasClass = function(t) {
                        return u.hasElClass(this.el_, t)
                    }, t.prototype.addClass = function(t) {
                        return u.addElClass(this.el_, t), this
                    }, t.prototype.removeClass = function(t) {
                        return u.removeElClass(this.el_, t), this
                    }, t.prototype.show = function() {
                        return this.removeClass("vjs-hidden"), this
                    }, t.prototype.hide = function() {
                        return this.addClass("vjs-hidden"), this
                    }, t.prototype.lockShowing = function() {
                        return this.addClass("vjs-lock-showing"), this
                    }, t.prototype.unlockShowing = function() {
                        return this.removeClass("vjs-lock-showing"), this
                    }, t.prototype.width = function(t, e) {
                        return this.dimension("width", t, e)
                    }, t.prototype.height = function(t, e) {
                        return this.dimension("height", t, e)
                    }, t.prototype.dimensions = function(t, e) {
                        return this.width(t, !0).height(e)
                    }, t.prototype.dimension = function(t, e, n) {
                        if (void 0 !== e) return (null === e || e !== e) && (e = 0), this.el_.style[t] = -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? e : "auto" === e ? "" : e + "px", n || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var o = this.el_.style[t],
                            r = o.indexOf("px");
                        return -1 !== r ? parseInt(o.slice(0, r), 10) : parseInt(this.el_["offset" + b["default"](t)], 10)
                    }, t.prototype.emitTapEvents = function() {
                        var t = 0,
                            e = null,
                            n = 10,
                            o = 200,
                            r = void 0;
                        this.on("touchstart", function(n) {
                            1 === n.touches.length && (e = j["default"]({}, n.touches[0]), t = (new Date).getTime(), r = !0)
                        }), this.on("touchmove", function(t) {
                            if (t.touches.length > 1) r = !1;
                            else if (e) {
                                var o = t.touches[0].pageX - e.pageX,
                                    i = t.touches[0].pageY - e.pageY,
                                    s = Math.sqrt(o * o + i * i);
                                s > n && (r = !1)
                            }
                        });
                        var i = function() {
                            r = !1
                        };
                        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function(n) {
                            if (e = null, r === !0) {
                                var i = (new Date).getTime() - t;
                                o > i && (n.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, t.prototype.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var t = p.bind(this.player(), this.player().reportUserActivity),
                                e = void 0;
                            this.on("touchstart", function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var n = function() {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", n), this.on("touchcancel", n)
                        }
                    }, t.prototype.setTimeout = function(t, e) {
                        t = p.bind(this, t);
                        var n = a["default"].setTimeout(t, e),
                            o = function() {
                                this.clearTimeout(n)
                            };
                        return o.guid = "vjs-timeout-" + n, this.on("dispose", o), n
                    }, t.prototype.clearTimeout = function(t) {
                        a["default"].clearTimeout(t);
                        var e = function() {};
                        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                    }, t.prototype.setInterval = function(t, e) {
                        t = p.bind(this, t);
                        var n = a["default"].setInterval(t, e),
                            o = function() {
                                this.clearInterval(n)
                            };
                        return o.guid = "vjs-interval-" + n, this.on("dispose", o), n
                    }, t.prototype.clearInterval = function(t) {
                        a["default"].clearInterval(t);
                        var e = function() {};
                        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                    }, t.registerComponent = function(e, n) {
                        return t.components_ || (t.components_ = {}), t.components_[e] = n, n
                    }, t.getComponent = function(e) {
                        return t.components_ && t.components_[e] ? t.components_[e] : a["default"] && a["default"].videojs && a["default"].videojs[e] ? (g["default"].warn("The " + e + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), a["default"].videojs[e]) : void 0
                    }, t.extend = function(e) {
                        e = e || {}, g["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");
                        var n = e.init || e.init || this.prototype.init || this.prototype.init || function() {},
                            o = function() {
                                n.apply(this, arguments)
                            };
                        o.prototype = Object.create(this.prototype), o.prototype.constructor = o, o.extend = t.extend;
                        for (var r in e) e.hasOwnProperty(r) && (o.prototype[r] = e[r]);
                        return o
                    }, t
                }();
            k.registerComponent("Component", k), n["default"] = k, e.exports = n["default"]
        }, {
            "./utils/dom.js": 123,
            "./utils/events.js": 124,
            "./utils/fn.js": 125,
            "./utils/guid.js": 127,
            "./utils/log.js": 128,
            "./utils/merge-options.js": 129,
            "./utils/to-title-case.js": 132,
            "global/window": 2,
            "object.assign": 45
        }],
        64: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../component.js"),
                a = o(s),
                l = t("./play-toggle.js"),
                u = (o(l), t("./time-controls/current-time-display.js")),
                c = (o(u), t("./time-controls/duration-display.js")),
                p = (o(c), t("./time-controls/time-divider.js")),
                f = (o(p), t("./time-controls/remaining-time-display.js")),
                h = (o(f), t("./live-display.js")),
                d = (o(h), t("./progress-control/progress-control.js")),
                y = (o(d), t("./fullscreen-toggle.js")),
                v = (o(y), t("./volume-control/volume-control.js")),
                g = (o(v), t("./volume-menu-button.js")),
                m = (o(g), t("./mute-toggle.js")),
                b = (o(m), t("./text-track-controls/chapters-button.js")),
                _ = (o(b), t("./text-track-controls/subtitles-button.js")),
                j = (o(_), t("./text-track-controls/captions-button.js")),
                T = (o(j), t("./playback-rate-menu/playback-rate-menu-button.js")),
                w = (o(T), t("./spacer-controls/custom-control-spacer.js")),
                k = (o(w), function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-control-bar"
                        })
                    }, e
                }(a["default"]));
            k.prototype.options_ = {
                loadEvent: "play",
                children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "subtitlesButton", "captionsButton", "fullscreenToggle"]
            }, a["default"].registerComponent("ControlBar", k), n["default"] = k, e.exports = n["default"]
        }, {
            "../component.js": 63,
            "./fullscreen-toggle.js": 65,
            "./live-display.js": 66,
            "./mute-toggle.js": 67,
            "./play-toggle.js": 68,
            "./playback-rate-menu/playback-rate-menu-button.js": 69,
            "./progress-control/progress-control.js": 74,
            "./spacer-controls/custom-control-spacer.js": 76,
            "./text-track-controls/captions-button.js": 79,
            "./text-track-controls/chapters-button.js": 80,
            "./text-track-controls/subtitles-button.js": 83,
            "./time-controls/current-time-display.js": 86,
            "./time-controls/duration-display.js": 87,
            "./time-controls/remaining-time-display.js": 88,
            "./time-controls/time-divider.js": 89,
            "./volume-control/volume-control.js": 91,
            "./volume-menu-button.js": 93
        }],
        65: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../button.js"),
                a = o(s),
                l = t("../component.js"),
                u = o(l),
                c = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText("Non-Fullscreen"))
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Fullscreen", u["default"].registerComponent("FullscreenToggle", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../button.js": 62,
            "../component.js": 63
        }],
        66: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../component"),
                l = r(a),
                u = t("../utils/dom.js"),
                c = o(u),
                p = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.updateShowing(), this.on(this.player(), "durationchange", this.updateShowing)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateShowing = function() {
                        1 / 0 === this.player().duration() ? this.show() : this.hide()
                    }, e
                }(l["default"]);
            l["default"].registerComponent("LiveDisplay", p), n["default"] = p, e.exports = n["default"]
        }, {
            "../component": 63,
            "../utils/dom.js": 123
        }],
        67: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../button"),
                l = r(a),
                u = t("../component"),
                c = r(u),
                p = t("../utils/dom.js"),
                f = o(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "volumechange", this.update), n.tech_ && n.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(n, "loadstart", function() {
                            this.update(), n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        })
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.muted(this.player_.muted() ? !1 : !0)
                    }, e.prototype.update = function() {
                        var t = this.player_.volume(),
                            e = 3;
                        0 === t || this.player_.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2);
                        var n = this.player_.muted() ? "Unmute" : "Mute",
                            o = this.localize(n);
                        this.controlText() !== o && this.controlText(o);
                        for (var r = 0; 4 > r; r++) f.removeElClass(this.el_, "vjs-vol-" + r);
                        f.addElClass(this.el_, "vjs-vol-" + e)
                    }, e
                }(l["default"]);
            h.prototype.controlText_ = "Mute", c["default"].registerComponent("MuteToggle", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../button": 62,
            "../component": 63,
            "../utils/dom.js": 123
        }],
        68: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../button.js"),
                a = o(s),
                l = t("../component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o) {
                        r(this, e), t.call(this, n, o), this.on(n, "play", this.handlePlay), this.on(n, "pause", this.handlePause)
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e.prototype.handlePlay = function() {
                        this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, e.prototype.handlePause = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Play", u["default"].registerComponent("PlayToggle", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../button.js": 62,
            "../component.js": 63
        }],
        69: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../menu/menu-button.js"),
                l = r(a),
                u = t("../../menu/menu.js"),
                c = r(u),
                p = t("./playback-rate-menu-item.js"),
                f = r(p),
                h = t("../../component.js"),
                d = r(h),
                y = t("../../utils/dom.js"),
                v = o(y),
                g = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.updateVisibility(), this.updateLabel(), this.on(n, "loadstart", this.updateVisibility), this.on(n, "ratechange", this.updateLabel)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this);
                        return this.labelEl_ = v.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), e.appendChild(this.labelEl_), e
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createMenu = function() {
                        var t = new c["default"](this.player()),
                            e = this.playbackRates();
                        if (e)
                            for (var n = e.length - 1; n >= 0; n--) t.addChild(new f["default"](this.player(), {
                                rate: e[n] + "x"
                            }));
                        return t
                    }, e.prototype.updateARIAAttributes = function() {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, e.prototype.handleClick = function() {
                        for (var t = this.player().playbackRate(), e = this.playbackRates(), n = e[0], o = 0; o < e.length; o++)
                            if (e[o] > t) {
                                n = e[o];
                                break
                            }
                        this.player().playbackRate(n)
                    }, e.prototype.playbackRates = function() {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, e.prototype.playbackRateSupported = function() {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, e.prototype.updateVisibility = function() {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, e.prototype.updateLabel = function() {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, e
                }(l["default"]);
            g.prototype.controlText_ = "Playback Rate", d["default"].registerComponent("PlaybackRateMenuButton", g), n["default"] = g, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu-button.js": 100,
            "../../menu/menu.js": 102,
            "../../utils/dom.js": 123,
            "./playback-rate-menu-item.js": 70
        }],
        70: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../menu/menu-item.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o) {
                        r(this, e);
                        var i = o.rate,
                            s = parseFloat(i, 10);
                        o.label = i, o.selected = 1 === s, t.call(this, n, o), this.label = i, this.rate = s, this.on(n, "ratechange", this.update)
                    }
                    return i(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, e.prototype.update = function() {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, e
                }(a["default"]);
            c.prototype.contentElType = "button", u["default"].registerComponent("PlaybackRateMenuItem", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu-item.js": 101
        }],
        71: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/dom.js"),
                c = o(u),
                p = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "progress", this.update)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, e.prototype.update = function() {
                        var t = this.player_.buffered(),
                            e = this.player_.duration(),
                            n = this.player_.bufferedEnd(),
                            o = this.el_.children,
                            r = function(t, e) {
                                var n = t / e || 0;
                                return 100 * (n >= 1 ? 1 : n) + "%"
                            };
                        this.el_.style.width = r(n, e);
                        for (var i = 0; i < t.length; i++) {
                            var s = t.start(i),
                                a = t.end(i),
                                l = o[i];
                            l || (l = this.el_.appendChild(c.createEl())), l.style.left = r(s, n), l.style.width = r(a - s, n)
                        }
                        for (var i = o.length; i > t.length; i--) this.el_.removeChild(o[i - 1])
                    }, e
                }(l["default"]);
            l["default"].registerComponent("LoadProgressBar", p), n["default"] = p, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/dom.js": 123
        }],
        72: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/dom.js"),
                c = o(u),
                p = t("../../utils/fn.js"),
                f = o(p),
                h = t("../../utils/format-time.js"),
                d = r(h),
                y = t("lodash-compat/function/throttle"),
                v = r(y),
                g = function(t) {
                    function e(n, o) {
                        var r = this;
                        i(this, e), t.call(this, n, o), this.update(0, 0), n.on("ready", function() {
                            r.on(n.controlBar.progressControl.el(), "mousemove", v["default"](f.bind(r, r.handleMouseMove), 25))
                        })
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, e.prototype.handleMouseMove = function(t) {
                        var e = this.player_.duration(),
                            n = this.calculateDistance(t) * e,
                            o = t.pageX - c.findElPosition(this.el().parentNode).left;
                        this.update(n, o)
                    }, e.prototype.update = function(t, e) {
                        var n = d["default"](t, this.player_.duration());
                        this.el().style.left = e + "px", this.el().setAttribute("data-current-time", n)
                    }, e.prototype.calculateDistance = function(t) {
                        return c.getPointerPosition(this.el().parentNode, t).x
                    }, e
                }(l["default"]);
            l["default"].registerComponent("MouseTimeDisplay", g), n["default"] = g, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/dom.js": 123,
            "../../utils/fn.js": 125,
            "../../utils/format-time.js": 126,
            "lodash-compat/function/throttle": 7
        }],
        73: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/fn.js"),
                c = o(u),
                p = t("../../utils/format-time.js"),
                f = r(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.updateDataAttr(), this.on(n, "timeupdate", this.updateDataAttr), n.ready(c.bind(this, this.updateDataAttr))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, e.prototype.updateDataAttr = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("data-current-time", f["default"](t, this.player_.duration()))
                    }, e
                }(l["default"]);
            l["default"].registerComponent("PlayProgressBar", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/fn.js": 125,
            "../../utils/format-time.js": 126
        }],
        74: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../component.js"),
                a = o(s),
                l = t("./seek-bar.js"),
                u = (o(l), t("./mouse-time-display.js")),
                c = (o(u), function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-control vjs-control"
                        })
                    }, e
                }(a["default"]));
            c.prototype.options_ = {
                children: ["seekBar"]
            }, a["default"].registerComponent("ProgressControl", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./mouse-time-display.js": 72,
            "./seek-bar.js": 75
        }],
        75: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../slider/slider.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("./load-progress-bar.js"),
                f = (r(p), t("./play-progress-bar.js")),
                h = (r(f), t("../../utils/fn.js")),
                d = o(h),
                y = t("../../utils/format-time.js"),
                v = r(y),
                g = t("object.assign"),
                m = (r(g), function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "timeupdate", this.updateARIAAttributes), n.ready(d.bind(this, this.updateARIAAttributes))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-holder"
                        }, {
                            "aria-label": "video progress bar"
                        })
                    }, e.prototype.updateARIAAttributes = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), this.el_.setAttribute("aria-valuetext", v["default"](t, this.player_.duration()))
                    }, e.prototype.getPercent = function() {
                        var t = this.player_.currentTime() / this.player_.duration();
                        return t >= 1 ? 1 : t
                    }, e.prototype.handleMouseDown = function(e) {
                        t.prototype.handleMouseDown.call(this, e), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
                    }, e.prototype.handleMouseMove = function(t) {
                        var e = this.calculateDistance(t) * this.player_.duration();
                        e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                    }, e.prototype.handleMouseUp = function(e) {
                        t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                    }, e.prototype.stepForward = function() {
                        this.player_.currentTime(this.player_.currentTime() + 5)
                    }, e.prototype.stepBack = function() {
                        this.player_.currentTime(this.player_.currentTime() - 5)
                    }, e
                }(l["default"]));
            m.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, m.prototype.playerEvent = "timeupdate", c["default"].registerComponent("SeekBar", m), n["default"] = m, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../slider/slider.js": 107,
            "../../utils/fn.js": 125,
            "../../utils/format-time.js": 126,
            "./load-progress-bar.js": 71,
            "./play-progress-bar.js": 73,
            "object.assign": 45
        }],
        76: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./spacer.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return e.innerHTML = "&nbsp;", e
                    }, e
                }(a["default"]);
            u["default"].registerComponent("CustomControlSpacer", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./spacer.js": 77
        }],
        77: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../component.js"),
                a = o(s),
                l = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("Spacer", l), n["default"] = l, e.exports = n["default"]
        }, {
            "../../component.js": 63
        }],
        78: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./text-track-menu-item.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o) {
                        r(this, e), o.track = {
                            kind: o.kind,
                            player: n,
                            label: o.kind + " settings",
                            "default": !1,
                            mode: "disabled"
                        }, t.call(this, n, o), this.addClass("vjs-texttrack-settings")
                    }
                    return i(e, t), e.prototype.handleClick = function() {
                        this.player().getChild("textTrackSettings").show()
                    }, e
                }(a["default"]);
            u["default"].registerComponent("CaptionSettingsMenuItem", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./text-track-menu-item.js": 85
        }],
        79: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./text-track-button.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = t("./caption-settings-menu-item.js"),
                p = o(c),
                f = function(t) {
                    function e(n, o, i) {
                        r(this, e), t.call(this, n, o, i), this.el_.setAttribute("aria-label", "Captions Menu")
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.update = function() {
                        var e = 2;
                        t.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
                    }, e.prototype.createItems = function() {
                        var e = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || e.push(new p["default"](this.player_, {
                            kind: this.kind_
                        })), t.prototype.createItems.call(this, e)
                    }, e
                }(a["default"]);
            f.prototype.kind_ = "captions", f.prototype.controlText_ = "Captions", u["default"].registerComponent("CaptionsButton", f), n["default"] = f, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./caption-settings-menu-item.js": 78,
            "./text-track-button.js": 84
        }],
        80: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./text-track-button.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("./text-track-menu-item.js"),
                f = r(p),
                h = t("./chapters-track-menu-item.js"),
                d = r(h),
                y = t("../../menu/menu.js"),
                v = r(y),
                g = t("../../utils/dom.js"),
                m = o(g),
                b = t("../../utils/fn.js"),
                _ = o(b),
                j = t("../../utils/to-title-case.js"),
                T = r(j),
                w = t("global/window"),
                k = r(w),
                x = function(t) {
                    function e(n, o, r) {
                        i(this, e), t.call(this, n, o, r), this.el_.setAttribute("aria-label", "Chapters Menu")
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createItems = function() {
                        var t = [],
                            e = this.player_.textTracks();
                        if (!e) return t;
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.kind === this.kind_ && t.push(new f["default"](this.player_, {
                                track: o
                            }))
                        }
                        return t
                    }, e.prototype.createMenu = function() {
                        for (var t = this.player_.textTracks() || [], e = void 0, n = this.items = [], o = 0, r = t.length; r > o; o++) {
                            var i = t[o];
                            if (i.kind === this.kind_) {
                                if (i.cues) {
                                    e = i;
                                    break
                                }
                                i.mode = "hidden", k["default"].setTimeout(_.bind(this, function() {
                                    this.createMenu()
                                }), 100)
                            }
                        }
                        var s = this.menu;
                        if (void 0 === s && (s = new v["default"](this.player_), s.contentEl().appendChild(m.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: T["default"](this.kind_),
                                tabIndex: -1
                            }))), e) {
                            for (var a = e.cues, l = void 0, o = 0, r = a.length; r > o; o++) {
                                l = a[o];
                                var u = new d["default"](this.player_, {
                                    track: e,
                                    cue: l
                                });
                                n.push(u), s.addChild(u)
                            }
                            this.addChild(s)
                        }
                        return this.items.length > 0 && this.show(), s
                    }, e
                }(l["default"]);
            x.prototype.kind_ = "chapters", x.prototype.controlText_ = "Chapters", c["default"].registerComponent("ChaptersButton", x), n["default"] = x, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu.js": 102,
            "../../utils/dom.js": 123,
            "../../utils/fn.js": 125,
            "../../utils/to-title-case.js": 132,
            "./chapters-track-menu-item.js": 81,
            "./text-track-button.js": 84,
            "./text-track-menu-item.js": 85,
            "global/window": 2
        }],
        81: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../menu/menu-item.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("../../utils/fn.js"),
                f = o(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e);
                        var r = o.track,
                            s = o.cue,
                            a = n.currentTime();
                        o.label = s.text, o.selected = s.startTime <= a && a < s.endTime, t.call(this, n, o), this.track = r, this.cue = s, r.addEventListener("cuechange", f.bind(this, this.update))
                    }
                    return s(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, e.prototype.update = function() {
                        var t = this.cue,
                            e = this.player_.currentTime();
                        this.selected(t.startTime <= e && e < t.endTime)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("ChaptersTrackMenuItem", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu-item.js": 101,
            "../../utils/fn.js": 125
        }],
        82: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./text-track-menu-item.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o) {
                        r(this, e), o.track = {
                            kind: o.kind,
                            player: n,
                            label: o.kind + " off",
                            "default": !1,
                            mode: "disabled"
                        }, t.call(this, n, o), this.selected(!0)
                    }
                    return i(e, t), e.prototype.handleTracksChange = function() {
                        for (var t = this.player().textTracks(), e = !0, n = 0, o = t.length; o > n; n++) {
                            var r = t[n];
                            if (r.kind === this.track.kind && "showing" === r.mode) {
                                e = !1;
                                break
                            }
                        }
                        this.selected(e)
                    }, e
                }(a["default"]);
            u["default"].registerComponent("OffTextTrackMenuItem", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./text-track-menu-item.js": 85
        }],
        83: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./text-track-button.js"),
                a = o(s),
                l = t("../../component.js"),
                u = o(l),
                c = function(t) {
                    function e(n, o, i) {
                        r(this, e), t.call(this, n, o, i), this.el_.setAttribute("aria-label", "Subtitles Menu")
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(a["default"]);
            c.prototype.kind_ = "subtitles", c.prototype.controlText_ = "Subtitles", u["default"].registerComponent("SubtitlesButton", c), n["default"] = c, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./text-track-button.js": 84
        }],
        84: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../menu/menu-button.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("../../utils/fn.js"),
                f = o(p),
                h = t("./text-track-menu-item.js"),
                d = r(h),
                y = t("./off-text-track-menu-item.js"),
                v = r(y),
                g = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o);
                        var r = this.player_.textTracks();
                        if (this.items.length <= 1 && this.hide(), r) {
                            var s = f.bind(this, this.update);
                            r.addEventListener("removetrack", s), r.addEventListener("addtrack", s), this.player_.on("dispose", function() {
                                r.removeEventListener("removetrack", s), r.removeEventListener("addtrack", s)
                            })
                        }
                    }
                    return s(e, t), e.prototype.createItems = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        t.push(new v["default"](this.player_, {
                            kind: this.kind_
                        }));
                        var e = this.player_.textTracks();
                        if (!e) return t;
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.kind === this.kind_ && t.push(new d["default"](this.player_, {
                                track: o
                            }))
                        }
                        return t
                    }, e
                }(l["default"]);
            c["default"].registerComponent("TextTrackButton", g), n["default"] = g, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu-button.js": 100,
            "../../utils/fn.js": 125,
            "./off-text-track-menu-item.js": 82,
            "./text-track-menu-item.js": 85
        }],
        85: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../menu/menu-item.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("../../utils/fn.js"),
                f = o(p),
                h = t("global/window"),
                d = r(h),
                y = t("global/document"),
                v = r(y),
                g = function(t) {
                    function e(n, o) {
                        var r = this;
                        i(this, e);
                        var s = o.track,
                            a = n.textTracks();
                        o.label = s.label || s.language || "Unknown", o.selected = s["default"] || "showing" === s.mode, t.call(this, n, o), this.track = s, a && ! function() {
                            var t = f.bind(r, r.handleTracksChange);
                            a.addEventListener("change", t), r.on("dispose", function() {
                                a.removeEventListener("change", t)
                            })
                        }(), a && void 0 === a.onchange && ! function() {
                            var t = void 0;
                            r.on(["tap", "click"], function() {
                                if ("object" != typeof d["default"].Event) try {
                                    t = new d["default"].Event("change")
                                } catch (e) {}
                                t || (t = v["default"].createEvent("Event"), t.initEvent("change", !0, !0)), a.dispatchEvent(t)
                            })
                        }()
                    }
                    return s(e, t), e.prototype.handleClick = function(e) {
                        var n = this.track.kind,
                            o = this.player_.textTracks();
                        if (t.prototype.handleClick.call(this, e), o)
                            for (var r = 0; r < o.length; r++) {
                                var i = o[r];
                                i.kind === n && (i.mode = i === this.track ? "showing" : "disabled")
                            }
                    }, e.prototype.handleTracksChange = function() {
                        this.selected("showing" === this.track.mode)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("TextTrackMenuItem", g), n["default"] = g, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../menu/menu-item.js": 101,
            "../../utils/fn.js": 125,
            "global/document": 1,
            "global/window": 2
        }],
        86: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/dom.js"),
                c = o(u),
                p = t("../../utils/format-time.js"),
                f = r(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "timeupdate", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-current-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-current-time-display",
                            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            e = this.localize("Current Time"),
                            n = f["default"](t, this.player_.duration());
                        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + n
                    }, e
                }(l["default"]);
            l["default"].registerComponent("CurrentTimeDisplay", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/dom.js": 123,
            "../../utils/format-time.js": 126
        }],
        87: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/dom.js"),
                c = o(u),
                p = t("../../utils/format-time.js"),
                f = r(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "timeupdate", this.updateContent), this.on(n, "loadedmetadata", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-duration vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-duration-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.duration();
                        if (t) {
                            var e = this.localize("Duration Time"),
                                n = f["default"](t);
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + n
                        }
                    }, e
                }(l["default"]);
            l["default"].registerComponent("DurationDisplay", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/dom.js": 123,
            "../../utils/format-time.js": 126
        }],
        88: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../component.js"),
                l = r(a),
                u = t("../../utils/dom.js"),
                c = o(u),
                p = t("../../utils/format-time.js"),
                f = r(p),
                h = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "timeupdate", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-remaining-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-remaining-time-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        if (this.player_.duration()) {
                            var t = this.localize("Remaining Time"),
                                e = f["default"](this.player_.remainingTime());
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> -" + e
                        }
                    }, e
                }(l["default"]);
            l["default"].registerComponent("RemainingTimeDisplay", h), n["default"] = h, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../utils/dom.js": 123,
            "../../utils/format-time.js": 126
        }],
        89: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../component.js"),
                a = o(s),
                l = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("TimeDivider", l), n["default"] = l, e.exports = n["default"]
        }, {
            "../../component.js": 63
        }],
        90: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../../slider/slider.js"),
                l = r(a),
                u = t("../../component.js"),
                c = r(u),
                p = t("../../utils/fn.js"),
                f = o(p),
                h = t("./volume-level.js"),
                d = (r(h), function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.on(n, "volumechange", this.updateARIAAttributes), n.ready(f.bind(this, this.updateARIAAttributes))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-bar vjs-slider-bar"
                        }, {
                            "aria-label": "volume level"
                        })
                    }, e.prototype.handleMouseMove = function(t) {
                        this.player_.muted() && this.player_.muted(!1), this.player_.volume(this.calculateDistance(t))
                    }, e.prototype.getPercent = function() {
                        return this.player_.muted() ? 0 : this.player_.volume()
                    }, e.prototype.stepForward = function() {
                        this.player_.volume(this.player_.volume() + .1)
                    }, e.prototype.stepBack = function() {
                        this.player_.volume(this.player_.volume() - .1)
                    }, e.prototype.updateARIAAttributes = function() {
                        var t = (100 * this.player_.volume()).toFixed(2);
                        this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                    }, e
                }(l["default"]));
            d.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, d.prototype.playerEvent = "volumechange", c["default"].registerComponent("VolumeBar", d), n["default"] = d, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "../../slider/slider.js": 107,
            "../../utils/fn.js": 125,
            "./volume-level.js": 92
        }],
        91: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../component.js"),
                a = o(s),
                l = t("./volume-bar.js"),
                u = (o(l), function(t) {
                    function e(n, o) {
                        r(this, e), t.call(this, n, o), n.tech_ && n.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(n, "loadstart", function() {
                            n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        })
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-control vjs-control"
                        })
                    }, e
                }(a["default"]));
            u.prototype.options_ = {
                children: ["volumeBar"]
            }, a["default"].registerComponent("VolumeControl", u), n["default"] = u, e.exports = n["default"]
        }, {
            "../../component.js": 63,
            "./volume-bar.js": 90
        }],
        92: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../../component.js"),
                a = o(s),
                l = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("VolumeLevel", l), n["default"] = l, e.exports = n["default"]
        }, {
            "../../component.js": 63
        }],
        93: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../button.js"),
                a = (o(s), t("../component.js")),
                l = o(a),
                u = t("../menu/menu.js"),
                c = o(u),
                p = t("../menu/menu-button.js"),
                f = o(p),
                h = t("./mute-toggle.js"),
                d = o(h),
                y = t("./volume-control/volume-bar.js"),
                v = o(y),
                g = function(t) {
                    function e(n) {
                        function o() {
                            n.tech_ && n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }
                        var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        r(this, e), void 0 === i.inline && (i.inline = !0), void 0 === i.vertical && (i.vertical = i.inline ? !1 : !0), i.volumeBar = i.volumeBar || {}, i.volumeBar.vertical = !!i.vertical, t.call(this, n, i), this.on(n, "volumechange", this.volumeUpdate), this.on(n, "loadstart", this.volumeUpdate), o.call(this), this.on(n, "loadstart", o), this.on(this.volumeBar, ["slideractive", "focus"], function() {
                            this.addClass("vjs-slider-active")
                        }), this.on(this.volumeBar, ["sliderinactive", "blur"], function() {
                            this.removeClass("vjs-slider-active")
                        })
                    }
                    return i(e, t), e.prototype.buildCSSClass = function() {
                        var e = "";
                        return e = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + t.prototype.buildCSSClass.call(this) + " " + e
                    }, e.prototype.createMenu = function() {
                        var t = new c["default"](this.player_, {
                                contentElType: "div"
                            }),
                            e = new v["default"](this.player_, this.options_.volumeBar);
                        return t.addChild(e), this.volumeBar = e, t
                    }, e.prototype.handleClick = function() {
                        d["default"].prototype.handleClick.call(this), t.prototype.handleClick.call(this)
                    }, e
                }(f["default"]);
            g.prototype.volumeUpdate = d["default"].prototype.update, g.prototype.controlText_ = "Mute", l["default"].registerComponent("VolumeMenuButton", g), n["default"] = g, e.exports = n["default"]
        }, {
            "../button.js": 62,
            "../component.js": 63,
            "../menu/menu-button.js": 100,
            "../menu/menu.js": 102,
            "./mute-toggle.js": 67,
            "./volume-control/volume-bar.js": 90
        }],
        94: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./component"),
                l = r(a),
                u = t("./utils/dom.js"),
                c = o(u),
                p = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.update(), this.on(n, "error", this.update)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-error-display"
                        });
                        return this.contentEl_ = c.createEl("div"), e.appendChild(this.contentEl_), e
                    }, e.prototype.update = function() {
                        this.player().error() && (this.contentEl_.innerHTML = this.localize(this.player().error().message))
                    }, e
                }(l["default"]);
            l["default"].registerComponent("ErrorDisplay", p), n["default"] = p, e.exports = n["default"]
        }, {
            "./component": 63,
            "./utils/dom.js": 123
        }],
        95: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }
            n.__esModule = !0;
            var r = t("./utils/events.js"),
                i = o(r),
                s = function() {};
            s.prototype.allowedEvents_ = {}, s.prototype.on = function(t, e) {
                var n = this.addEventListener;
                this.addEventListener = Function.prototype, i.on(this, t, e), this.addEventListener = n
            }, s.prototype.addEventListener = s.prototype.on, s.prototype.off = function(t, e) {
                i.off(this, t, e)
            }, s.prototype.removeEventListener = s.prototype.off, s.prototype.one = function(t, e) {
                i.one(this, t, e)
            }, s.prototype.trigger = function(t) {
                var e = t.type || t;
                "string" == typeof t && (t = {
                    type: e
                }), t = i.fixEvent(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), i.trigger(this, t)
            }, s.prototype.dispatchEvent = s.prototype.trigger, n["default"] = s, e.exports = n["default"]
        }, {
            "./utils/events.js": 124
        }],
        96: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("./utils/log"),
                i = o(r),
                s = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (t.super_ = e)
                },
                a = function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = function() {
                            t.apply(this, arguments)
                        },
                        o = {};
                    "object" == typeof e ? ("function" == typeof e.init && (i["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), e.constructor = e.init), e.constructor !== Object.prototype.constructor && (n = e.constructor), o = e) : "function" == typeof e && (n = e), s(n, t);
                    for (var r in o) o.hasOwnProperty(r) && (n.prototype[r] = o[r]);
                    return n
                };
            n["default"] = a, e.exports = n["default"]
        }, {
            "./utils/log": 128
        }],
        97: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            for (var r = t("global/document"), i = o(r), s = {}, a = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], l = a[0], u = void 0, c = 0; c < a.length; c++)
                if (a[c][1] in i["default"]) {
                    u = a[c];
                    break
                }
            if (u)
                for (var c = 0; c < u.length; c++) s[l[c]] = u[c];
            n["default"] = s, e.exports = n["default"]
        }, {
            "global/document": 1
        }],
        98: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("./component"),
                a = o(s),
                l = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner"
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("LoadingSpinner", l), n["default"] = l, e.exports = n["default"]
        }, {
            "./component": 63
        }],
        99: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("object.assign"),
                i = o(r),
                s = function l(t) {
                    "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" == typeof t && i["default"](this, t), this.message || (this.message = l.defaultMessages[this.code] || "")
                };
            s.prototype.code = 0, s.prototype.message = "", s.prototype.status = null, s.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], s.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var a = 0; a < s.errorTypes.length; a++) s[s.errorTypes[a]] = a, s.prototype[s.errorTypes[a]] = a;
            n["default"] = s, e.exports = n["default"]
        }, {
            "object.assign": 45
        }],
        100: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../button.js"),
                l = r(a),
                u = t("../component.js"),
                c = r(u),
                p = t("./menu.js"),
                f = r(p),
                h = t("../utils/dom.js"),
                d = o(h),
                y = t("../utils/fn.js"),
                v = o(y),
                g = t("../utils/to-title-case.js"),
                m = r(g),
                b = function(t) {
                    function e(n) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        i(this, e), t.call(this, n, o), this.update(), this.on("keydown", this.handleKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
                    }
                    return s(e, t), e.prototype.update = function() {
                        var t = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createMenu = function() {
                        var t = new f["default"](this.player_);
                        if (this.options_.title && t.contentEl().appendChild(d.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: m["default"](this.options_.title),
                                tabIndex: -1
                            })), this.items = this.createItems(), this.items)
                            for (var e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
                        return t
                    }, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e.prototype.buildCSSClass = function() {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleFocus = function() {}, e.prototype.handleBlur = function() {}, e.prototype.handleClick = function() {
                        this.one("mouseout", v.bind(this, function() {
                            this.menu.unlockShowing(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, e.prototype.handleKeyPress = function(t) {
                        32 === t.which || 13 === t.which ? (this.buttonPressed_ ? this.unpressButton() : this.pressButton(), t.preventDefault()) : 27 === t.which && (this.buttonPressed_ && this.unpressButton(), t.preventDefault())
                    }, e.prototype.pressButton = function() {
                        this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
                    }, e.prototype.unpressButton = function() {
                        this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("MenuButton", b), n["default"] = b, e.exports = n["default"]
        }, {
            "../button.js": 62,
            "../component.js": 63,
            "../utils/dom.js": 123,
            "../utils/fn.js": 125,
            "../utils/to-title-case.js": 132,
            "./menu.js": 102
        }],
        101: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../button.js"),
                a = o(s),
                l = t("../component.js"),
                u = o(l),
                c = t("object.assign"),
                p = o(c),
                f = function(t) {
                    function e(n, o) {
                        r(this, e), t.call(this, n, o), this.selected(o.selected)
                    }
                    return i(e, t), e.prototype.createEl = function(e, n, o) {
                        return t.prototype.createEl.call(this, "li", p["default"]({
                            className: "vjs-menu-item",
                            innerHTML: this.localize(this.options_.label)
                        }, n), o)
                    }, e.prototype.handleClick = function() {
                        this.selected(!0)
                    }, e.prototype.selected = function(t) {
                        t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
                    }, e
                }(a["default"]);
            u["default"].registerComponent("MenuItem", f), n["default"] = f, e.exports = n["default"]
        }, {
            "../button.js": 62,
            "../component.js": 63,
            "object.assign": 45
        }],
        102: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../component.js"),
                l = r(a),
                u = t("../utils/dom.js"),
                c = o(u),
                p = t("../utils/fn.js"),
                f = o(p),
                h = t("../utils/events.js"),
                d = o(h),
                y = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return s(e, t), e.prototype.addItem = function(t) {
                        this.addChild(t), t.on("click", f.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, e.prototype.createEl = function() {
                        var e = this.options_.contentElType || "ul";
                        this.contentEl_ = c.createEl(e, {
                            className: "vjs-menu-content"
                        });
                        var n = t.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return n.appendChild(this.contentEl_), d.on(n, "click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation()
                        }), n
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Menu", y), n["default"] = y, e.exports = n["default"]
        }, {
            "../component.js": 63,
            "../utils/dom.js": 123,
            "../utils/events.js": 124,
            "../utils/fn.js": 125
        }],
        103: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./component.js"),
                l = r(a),
                u = t("global/document"),
                c = r(u),
                p = t("global/window"),
                f = r(p),
                h = t("./utils/events.js"),
                d = o(h),
                y = t("./utils/dom.js"),
                v = o(y),
                g = t("./utils/fn.js"),
                m = o(g),
                b = t("./utils/guid.js"),
                _ = o(b),
                j = t("./utils/browser.js"),
                T = (o(j), t("./utils/log.js")),
                w = r(T),
                k = t("./utils/to-title-case.js"),
                x = r(k),
                C = t("./utils/time-ranges.js"),
                O = t("./utils/buffer.js"),
                E = t("./utils/stylesheet.js"),
                S = o(E),
                P = t("./fullscreen-api.js"),
                M = r(P),
                A = t("./media-error.js"),
                I = r(A),
                F = t("safe-json-parse/tuple"),
                R = r(F),
                D = t("object.assign"),
                N = r(D),
                L = t("./utils/merge-options.js"),
                B = r(L),
                H = t("./tracks/text-track-list-converter.js"),
                V = r(H),
                U = t("./tech/loader.js"),
                q = (r(U), t("./poster-image.js")),
                W = (r(q), t("./tracks/text-track-display.js")),
                z = (r(W), t("./loading-spinner.js")),
                X = (r(z), t("./big-play-button.js")),
                G = (r(X), t("./control-bar/control-bar.js")),
                $ = (r(G), t("./error-display.js")),
                Y = (r($), t("./tracks/text-track-settings.js")),
                K = (r(Y), t("./tech/html5.js")),
                J = (r(K), function(t) {
                    function e(n, o, r) {
                        var s = this;
                        if (i(this, e), n.id = n.id || "vjs_video_" + _.newGUID(), o = N["default"](e.getTagSettings(n), o), o.initChildren = !1, o.createEl = !1, o.reportTouchActivity = !1, t.call(this, null, o, r), !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        this.tag = n, this.tagAttributes = n && v.getElAttributes(n), this.language(this.options_.language), o.languages ? ! function() {
                            var t = {};
                            Object.getOwnPropertyNames(o.languages).forEach(function(e) {
                                t[e.toLowerCase()] = o.languages[e]
                            }), s.languages_ = t
                        }() : this.languages_ = e.prototype.options_.languages, this.cache_ = {}, this.poster_ = o.poster || "", this.controls_ = !!o.controls, n.controls = !1, this.scrubbing_ = !1, this.el_ = this.createEl();
                        var a = B["default"](this.options_);
                        o.plugins && ! function() {
                            var t = o.plugins;
                            Object.getOwnPropertyNames(t).forEach(function(e) {
                                "function" == typeof this[e] ? this[e](t[e]) : w["default"].error("Unable to find plugin:", e)
                            }, s)
                        }(), this.options_.playerOptions = a, this.initChildren(), this.isAudio("audio" === n.nodeName.toLowerCase()), this.addClass(this.controls() ? "vjs-controls-enabled" : "vjs-controls-disabled"), this.isAudio() && this.addClass("vjs-audio"), this.flexNotSupported_() && this.addClass("vjs-no-flex"), e.players[this.id_] = this, this.userActive(!0), this.reportUserActivity(), this.listenForUserActivity_(), this.on("fullscreenchange", this.handleFullscreenChange_), this.on("stageclick", this.handleStageClick_)
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var e = this.el_ = t.prototype.createEl.call(this, "div"),
                            n = this.tag;
                        n.removeAttribute("width"), n.removeAttribute("height");
                        var o = v.getElAttributes(n);
                        Object.getOwnPropertyNames(o).forEach(function(t) {
                            "class" === t ? e.className = o[t] : e.setAttribute(t, o[t])
                        }), n.id += "_html5_api", n.className = "vjs-tech", n.player = e.player = this, this.addClass("vjs-paused"), this.styleEl_ = S.createStyleElement("vjs-styles-dimensions");
                        var r = c["default"].querySelector(".vjs-styles-defaults"),
                            i = c["default"].querySelector("head");
                        return i.insertBefore(this.styleEl_, r ? r.nextSibling : i.firstChild), this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), n.initNetworkState_ = n.networkState, n.parentNode && n.parentNode.insertBefore(e, n), v.insertElFirst(n, e), this.el_ = e, e
                    }, e.prototype.width = function(t) {
                        return this.dimension("width", t)
                    }, e.prototype.height = function(t) {
                        return this.dimension("height", t)
                    }, e.prototype.dimension = function(t, e) {
                        var n = t + "_";
                        if (void 0 === e) return this[n] || 0;
                        if ("" === e) this[n] = void 0;
                        else {
                            var o = parseFloat(e);
                            if (isNaN(o)) return w["default"].error('Improper value "' + e + '" supplied for for ' + t), this;
                            this[n] = o
                        }
                        return this.updateStyleEl_(), this
                    }, e.prototype.fluid = function(t) {
                        return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t, void(t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid")))
                    }, e.prototype.aspectRatio = function(t) {
                        if (void 0 === t) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                    }, e.prototype.updateStyleEl_ = function() {
                        var t = void 0,
                            e = void 0,
                            n = void 0;
                        n = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var o = n.split(":"),
                            r = o[1] / o[0];
                        t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * r;
                        var i = this.id() + "-dimensions";
                        this.addClass(i), S.setTextContent(this.styleEl_, "\n      ." + i + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
                    }, e.prototype.loadTech_ = function(t, e) {
                        this.tech_ && this.unloadTech_(), "Html5" !== t && this.tag && (l["default"].getComponent("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = t, this.isReady_ = !1;
                        var n = N["default"]({
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            source: e,
                            playerId: this.id(),
                            techId: this.id() + "_" + t + "_api",
                            textTracks: this.textTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[t.toLowerCase()]);
                        this.tag && (n.tag = this.tag), e && (this.currentType_ = e.type, e.src === this.cache_.src && this.cache_.currentTime > 0 && (n.startTime = this.cache_.currentTime), this.cache_.src = e.src);
                        var o = l["default"].getComponent(t);
                        this.tech_ = new o(n), this.tech_.ready(m.bind(this, this.handleTechReady_), !0), V["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "progress", this.handleTechProgress_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "suspend", this.handleTechSuspend_), this.on(this.tech_, "abort", this.handleTechAbort_), this.on(this.tech_, "emptied", this.handleTechEmptied_), this.on(this.tech_, "stalled", this.handleTechStalled_), this.on(this.tech_, "loadedmetadata", this.handleTechLoadedMetaData_), this.on(this.tech_, "loadeddata", this.handleTechLoadedData_), this.on(this.tech_, "timeupdate", this.handleTechTimeUpdate_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.on(this.tech_, "volumechange", this.handleTechVolumeChange_), this.on(this.tech_, "texttrackchange", this.handleTechTextTrackChange_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === t && this.tag || v.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, e.prototype.unloadTech_ = function() {
                        this.textTracks_ = this.textTracks(), this.textTracksJson_ = V["default"].textTracksToJson(this), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, e.prototype.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, e.prototype.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, e.prototype.handleTechReady_ = function() {
                        this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                    }, e.prototype.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, e.prototype.hasStarted = function(t) {
                        return void 0 !== t ? (this.hasStarted_ !== t && (this.hasStarted_ = t, t ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, e.prototype.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, e.prototype.handleTechWaiting_ = function() {
                        this.addClass("vjs-waiting"), this.trigger("waiting")
                    }, e.prototype.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, e.prototype.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, e.prototype.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, e.prototype.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, e.prototype.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, e.prototype.handleTechFirstPlay_ = function() {
                        this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, e.prototype.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.prototype.handleTechProgress_ = function() {
                        this.trigger("progress")
                    }, e.prototype.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, e.prototype.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, e.prototype.handleTechClick_ = function(t) {
                        0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, e.prototype.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, e.prototype.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, e.prototype.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, e.prototype.handleTechTouchEnd_ = function(t) {
                        t.preventDefault()
                    }, e.prototype.handleFullscreenChange_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, e.prototype.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, e.prototype.handleTechFullscreenChange_ = function(t, e) {
                        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                    }, e.prototype.handleTechError_ = function() {
                        var t = this.tech_.error();
                        this.error(t && t.code)
                    }, e.prototype.handleTechSuspend_ = function() {
                        this.trigger("suspend")
                    }, e.prototype.handleTechAbort_ = function() {
                        this.trigger("abort")
                    }, e.prototype.handleTechEmptied_ = function() {
                        this.trigger("emptied")
                    }, e.prototype.handleTechStalled_ = function() {
                        this.trigger("stalled")
                    }, e.prototype.handleTechLoadedMetaData_ = function() {
                        this.trigger("loadedmetadata")
                    }, e.prototype.handleTechLoadedData_ = function() {
                        this.trigger("loadeddata")
                    }, e.prototype.handleTechTimeUpdate_ = function() {
                        this.trigger("timeupdate")
                    }, e.prototype.handleTechRateChange_ = function() {
                        this.trigger("ratechange")
                    }, e.prototype.handleTechVolumeChange_ = function() {
                        this.trigger("volumechange")
                    }, e.prototype.handleTechTextTrackChange_ = function() {
                        this.trigger("texttrackchange")
                    }, e.prototype.getCache = function() {
                        return this.cache_
                    }, e.prototype.techCall_ = function(t, e) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function() {
                            this[t](e)
                        }, !0);
                        else try {
                            this.tech_[t](e)
                        } catch (n) {
                            throw w["default"](n), n
                        }
                    }, e.prototype.techGet_ = function(t) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[t]()
                        } catch (e) {
                            throw void 0 === this.tech_[t] ? w["default"]("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e) : "TypeError" === e.name ? (w["default"]("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1) : w["default"](e), e
                        }
                    }, e.prototype.play = function() {
                        return this.techCall_("play"), this
                    }, e.prototype.pause = function() {
                        return this.techCall_("pause"), this
                    }, e.prototype.paused = function() {
                        return this.techGet_("paused") === !1 ? !1 : !0
                    }, e.prototype.scrubbing = function(t) {
                        return void 0 !== t ? (this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, e.prototype.currentTime = function(t) {
                        return void 0 !== t ? (this.techCall_("setCurrentTime", t), this) : this.cache_.currentTime = this.techGet_("currentTime") || 0
                    }, e.prototype.duration = function(t) {
                        return void 0 === t ? this.cache_.duration || 0 : (t = parseFloat(t) || 0, 0 > t && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, 1 / 0 === t ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, e.prototype.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, e.prototype.buffered = function n() {
                        var n = this.techGet_("buffered");
                        return n && n.length || (n = C.createTimeRange(0, 0)), n
                    }, e.prototype.bufferedPercent = function() {
                        return O.bufferedPercent(this.buffered(), this.duration())
                    }, e.prototype.bufferedEnd = function() {
                        var t = this.buffered(),
                            e = this.duration(),
                            n = t.end(t.length - 1);
                        return n > e && (n = e), n
                    }, e.prototype.volume = function(t) {
                        var e = void 0;
                        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), this) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                    }, e.prototype.muted = function(t) {
                        return void 0 !== t ? (this.techCall_("setMuted", t), this) : this.techGet_("muted") || !1
                    }, e.prototype.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, e.prototype.isFullscreen = function(t) {
                        return void 0 !== t ? (this.isFullscreen_ = !!t, this) : !!this.isFullscreen_
                    }, e.prototype.requestFullscreen = function() {
                        var t = M["default"];
                        return this.isFullscreen(!0), t.requestFullscreen ? (d.on(c["default"], t.fullscreenchange, m.bind(this, function e() {
                            this.isFullscreen(c["default"][t.fullscreenElement]), this.isFullscreen() === !1 && d.off(c["default"], t.fullscreenchange, e), this.trigger("fullscreenchange")
                        })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.exitFullscreen = function() {
                        var t = M["default"];
                        return this.isFullscreen(!1), t.requestFullscreen ? c["default"][t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.enterFullWindow = function() {
                        this.isFullWindow = !0, this.docOrigOverflow = c["default"].documentElement.style.overflow, d.on(c["default"], "keydown", m.bind(this, this.fullWindowOnEscKey)), c["default"].documentElement.style.overflow = "hidden", v.addElClass(c["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.prototype.fullWindowOnEscKey = function(t) {
                        27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, e.prototype.exitFullWindow = function() {
                        this.isFullWindow = !1, d.off(c["default"], "keydown", this.fullWindowOnEscKey), c["default"].documentElement.style.overflow = this.docOrigOverflow, v.removeElClass(c["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, e.prototype.selectSource = function(t) {
                        for (var e = 0, n = this.options_.techOrder; e < n.length; e++) {
                            var o = x["default"](n[e]),
                                r = l["default"].getComponent(o);
                            if (r) {
                                if (r.isSupported())
                                    for (var i = 0, s = t; i < s.length; i++) {
                                        var a = s[i];
                                        if (r.canPlaySource(a)) return {
                                            source: a,
                                            tech: o
                                        }
                                    }
                            } else w["default"].error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return !1
                    }, e.prototype.src = function(t) {
                        if (void 0 === t) return this.techGet_("src");
                        var e = l["default"].getComponent(this.techName_);
                        return Array.isArray(t) ? this.sourceList_(t) : "string" == typeof t ? this.src({
                            src: t
                        }) : t instanceof Object && (t.type && !e.canPlaySource(t) ? this.sourceList_([t]) : (this.cache_.src = t.src, this.currentType_ = t.type || "", this.ready(function() {
                            e.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, e.prototype.sourceList_ = function(t) {
                        var e = this.selectSource(t);
                        e ? e.tech === this.techName_ ? this.src(e.source) : this.loadTech_(e.tech, e.source) : (this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0), this.triggerReady())
                    }, e.prototype.load = function() {
                        return this.techCall_("load"), this
                    }, e.prototype.currentSrc = function() {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, e.prototype.currentType = function() {
                        return this.currentType_ || ""
                    }, e.prototype.preload = function(t) {
                        return void 0 !== t ? (this.techCall_("setPreload", t), this.options_.preload = t, this) : this.techGet_("preload")
                    }, e.prototype.autoplay = function(t) {
                        return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet_("autoplay", t)
                    }, e.prototype.loop = function(t) {
                        return void 0 !== t ? (this.techCall_("setLoop", t), this.options_.loop = t, this) : this.techGet_("loop")
                    }, e.prototype.poster = function(t) {
                        return void 0 === t ? this.poster_ : (t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange"), this)
                    }, e.prototype.handleTechPosterChange_ = function() {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, e.prototype.controls = function(t) {
                        return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, e.prototype.usingNativeControls = function(t) {
                        return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, e.prototype.error = function(t) {
                        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this) : (this.error_ = t instanceof I["default"] ? t : new I["default"](t), this.trigger("error"), this.addClass("vjs-error"), w["default"].error("(CODE:" + this.error_.code + " " + I["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this)
                    }, e.prototype.ended = function() {
                        return this.techGet_("ended")
                    }, e.prototype.seeking = function() {
                        return this.techGet_("seeking")
                    }, e.prototype.seekable = function() {
                        return this.techGet_("seekable")
                    }, e.prototype.reportUserActivity = function() {
                        this.userActivity_ = !0
                    }, e.prototype.userActive = function(t) {
                        return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, e.prototype.listenForUserActivity_ = function() {
                        var t = void 0,
                            e = void 0,
                            n = void 0,
                            o = m.bind(this, this.reportUserActivity),
                            r = function(t) {
                                (t.screenX !== e || t.screenY !== n) && (e = t.screenX, n = t.screenY, o())
                            },
                            i = function() {
                                o(), this.clearInterval(t), t = this.setInterval(o, 250)
                            },
                            s = function() {
                                o(), this.clearInterval(t)
                            };
                        this.on("mousedown", i), this.on("mousemove", r), this.on("mouseup", s), this.on("keydown", o), this.on("keyup", o); {
                            var a = void 0;
                            this.setInterval(function() {
                                if (this.userActivity_) {
                                    this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                    var t = this.options_.inactivityTimeout;
                                    t > 0 && (a = this.setTimeout(function() {
                                        this.userActivity_ || this.userActive(!1)
                                    }, t))
                                }
                            }, 250)
                        }
                    }, e.prototype.playbackRate = function(t) {
                        return void 0 !== t ? (this.techCall_("setPlaybackRate", t), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, e.prototype.isAudio = function(t) {
                        return void 0 !== t ? (this.isAudio_ = !!t, this) : !!this.isAudio_
                    }, e.prototype.networkState = function() {
                        return this.techGet_("networkState")
                    }, e.prototype.readyState = function() {
                        return this.techGet_("readyState")
                    }, e.prototype.textTracks = function() {
                        return this.tech_ && this.tech_.textTracks()
                    }, e.prototype.remoteTextTracks = function() {
                        return this.tech_ && this.tech_.remoteTextTracks()
                    }, e.prototype.addTextTrack = function(t, e, n) {
                        return this.tech_ && this.tech_.addTextTrack(t, e, n)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        return this.tech_ && this.tech_.addRemoteTextTrack(t)
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        this.tech_ && this.tech_.removeRemoteTextTrack(t)
                    }, e.prototype.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, e.prototype.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, e.prototype.language = function(t) {
                        return void 0 === t ? this.language_ : (this.language_ = ("" + t).toLowerCase(), this)
                    }, e.prototype.languages = function() {
                        return B["default"](e.prototype.options_.languages, this.languages_)
                    }, e.prototype.toJSON = function() {
                        var t = B["default"](this.options_),
                            e = t.tracks;
                        t.tracks = [];
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o = B["default"](o), o.player = void 0, t.tracks[n] = o
                        }
                        return t
                    }, e.getTagSettings = function(t) {
                        var e = {
                                sources: [],
                                tracks: []
                            },
                            n = v.getElAttributes(t),
                            o = n["data-setup"];
                        if (null !== o) {
                            var r = R["default"](o || "{}"),
                                i = r[0],
                                s = r[1];
                            i && w["default"].error(i), N["default"](n, s)
                        }
                        if (N["default"](e, n), t.hasChildNodes())
                            for (var a = t.childNodes, l = 0, u = a.length; u > l; l++) {
                                var c = a[l],
                                    p = c.nodeName.toLowerCase();
                                "source" === p ? e.sources.push(v.getElAttributes(c)) : "track" === p && e.tracks.push(v.getElAttributes(c))
                            }
                        return e
                    }, e
                }(l["default"]));
            J.players = {};
            var Q = f["default"].navigator;
            J.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: c["default"].getElementsByTagName("html")[0].getAttribute("lang") || Q.languages && Q.languages[0] || Q.userLanguage || Q.language || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this video."
            }, J.prototype.handleLoadedMetaData_, J.prototype.handleLoadedData_, J.prototype.handleUserActive_, J.prototype.handleUserInactive_, J.prototype.handleTimeUpdate_, J.prototype.handleVolumeChange_, J.prototype.handleError_, J.prototype.flexNotSupported_ = function() {
                var t = c["default"].createElement("i");
                return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
            }, l["default"].registerComponent("Player", J), n["default"] = J, e.exports = n["default"]
        }, {
            "./big-play-button.js": 61,
            "./component.js": 63,
            "./control-bar/control-bar.js": 64,
            "./error-display.js": 94,
            "./fullscreen-api.js": 97,
            "./loading-spinner.js": 98,
            "./media-error.js": 99,
            "./poster-image.js": 105,
            "./tech/html5.js": 110,
            "./tech/loader.js": 111,
            "./tracks/text-track-display.js": 114,
            "./tracks/text-track-list-converter.js": 116,
            "./tracks/text-track-settings.js": 118,
            "./utils/browser.js": 120,
            "./utils/buffer.js": 121,
            "./utils/dom.js": 123,
            "./utils/events.js": 124,
            "./utils/fn.js": 125,
            "./utils/guid.js": 127,
            "./utils/log.js": 128,
            "./utils/merge-options.js": 129,
            "./utils/stylesheet.js": 130,
            "./utils/time-ranges.js": 131,
            "./utils/to-title-case.js": 132,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45,
            "safe-json-parse/tuple": 53
        }],
        104: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("./player.js"),
                i = o(r),
                s = function(t, e) {
                    i["default"].prototype[t] = e
                };
            n["default"] = s, e.exports = n["default"]
        }, {
            "./player.js": 103
        }],
        105: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./button.js"),
                l = r(a),
                u = t("./component.js"),
                c = r(u),
                p = t("./utils/fn.js"),
                f = o(p),
                h = t("./utils/dom.js"),
                d = o(h),
                y = t("./utils/browser.js"),
                v = o(y),
                g = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.update(), n.on("posterchange", f.bind(this, this.update))
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = d.createEl("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return v.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = d.createEl("img"), t.appendChild(this.fallbackImg_)), t
                    }, e.prototype.update = function() {
                        var t = this.player().poster();
                        this.setSrc(t), t ? this.show() : this.hide()
                    }, e.prototype.setSrc = function(t) {
                        if (this.fallbackImg_) this.fallbackImg_.src = t;
                        else {
                            var e = "";
                            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                        }
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e
                }(l["default"]);
            c["default"].registerComponent("PosterImage", g), n["default"] = g, e.exports = n["default"]
        }, {
            "./button.js": 62,
            "./component.js": 63,
            "./utils/browser.js": 120,
            "./utils/dom.js": 123,
            "./utils/fn.js": 125
        }],
        106: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }
            n.__esModule = !0;
            var i = t("./utils/events.js"),
                s = r(i),
                a = t("global/document"),
                l = o(a),
                u = t("global/window"),
                c = o(u),
                p = !1,
                f = void 0,
                h = function() {
                    var t = l["default"].getElementsByTagName("video"),
                        e = l["default"].getElementsByTagName("audio"),
                        n = [];
                    if (t && t.length > 0)
                        for (var o = 0, r = t.length; r > o; o++) n.push(t[o]);
                    if (e && e.length > 0)
                        for (var o = 0, r = e.length; r > o; o++) n.push(e[o]);
                    if (n && n.length > 0)
                        for (var o = 0, r = n.length; r > o; o++) {
                            var i = n[o];
                            if (!i || !i.getAttribute) {
                                d(1);
                                break
                            }
                            if (void 0 === i.player) {
                                var s = i.getAttribute("data-setup");
                                if (null !== s) {
                                    f(i)
                                }
                            }
                        } else p || d(1)
                },
                d = function(t, e) {
                    f = e, setTimeout(h, t)
                };
            "complete" === l["default"].readyState ? p = !0 : s.one(c["default"], "load", function() {
                p = !0
            });
            var y = function() {
                return p
            };
            n.autoSetup = h, n.autoSetupTimeout = d, n.hasLoaded = y
        }, {
            "./utils/events.js": 124,
            "global/document": 1,
            "global/window": 2
        }],
        107: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../component.js"),
                l = r(a),
                u = t("../utils/dom.js"),
                c = o(u),
                p = t("global/document"),
                f = r(p),
                h = t("object.assign"),
                d = r(h),
                y = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(n, "controlsvisible", this.update), this.on(n, this.playerEvent, this.update)
                    }
                    return s(e, t), e.prototype.createEl = function(e) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        return n.className = n.className + " vjs-slider", n = d["default"]({
                            tabIndex: 0
                        }, n), o = d["default"]({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, o), t.prototype.createEl.call(this, e, n, o)
                    }, e.prototype.handleMouseDown = function(t) {
                        t.preventDefault(), c.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(f["default"], "mousemove", this.handleMouseMove), this.on(f["default"], "mouseup", this.handleMouseUp), this.on(f["default"], "touchmove", this.handleMouseMove), this.on(f["default"], "touchend", this.handleMouseUp), this.handleMouseMove(t)
                    }, e.prototype.handleMouseMove = function() {}, e.prototype.handleMouseUp = function() {
                        c.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(f["default"], "mousemove", this.handleMouseMove), this.off(f["default"], "mouseup", this.handleMouseUp), this.off(f["default"], "touchmove", this.handleMouseMove), this.off(f["default"], "touchend", this.handleMouseUp), this.update()
                    }, e.prototype.update = function() {
                        if (this.el_) {
                            var t = this.getPercent(),
                                e = this.bar;
                            if (e) {
                                ("number" != typeof t || t !== t || 0 > t || 1 / 0 === t) && (t = 0);
                                var n = (100 * t).toFixed(2) + "%";
                                this.vertical() ? e.el().style.height = n : e.el().style.width = n
                            }
                        }
                    }, e.prototype.calculateDistance = function(t) {
                        var e = c.getPointerPosition(this.el_, t);
                        return this.vertical() ? e.y : e.x
                    }, e.prototype.handleFocus = function() {
                        this.on(f["default"], "keydown", this.handleKeyPress)
                    }, e.prototype.handleKeyPress = function(t) {
                        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : (38 === t.which || 39 === t.which) && (t.preventDefault(), this.stepForward())
                    }, e.prototype.handleBlur = function() {
                        this.off(f["default"], "keydown", this.handleKeyPress)
                    }, e.prototype.handleClick = function(t) {
                        t.stopImmediatePropagation(), t.preventDefault()
                    }, e.prototype.vertical = function(t) {
                        return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t, this.addClass(this.vertical_ ? "vjs-slider-vertical" : "vjs-slider-horizontal"), this)
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Slider", y), n["default"] = y, e.exports = n["default"]
        }, {
            "../component.js": 63,
            "../utils/dom.js": 123,
            "global/document": 1,
            "object.assign": 45
        }],
        108: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, t.streamFromParts = function(t, e) {
                    return t + "&" + e
                }, t.streamToParts = function(t) {
                    var e = {
                        connection: "",
                        stream: ""
                    };
                    if (!t) return e;
                    var n = t.indexOf("&"),
                        o = void 0;
                    return -1 !== n ? o = n + 1 : (n = o = t.lastIndexOf("/") + 1, 0 === n && (n = o = t.length)), e.connection = t.substring(0, n), e.stream = t.substring(o, t.length), e
                }, t.isStreamingType = function(e) {
                    return e in t.streamingFormats
                }, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function(e) {
                    return t.RTMP_RE.test(e)
                }, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canHandleSource = function(e) {
                    return t.isStreamingType(e.type) || t.isStreamingSrc(e.src) ? "maybe" : ""
                }, t.rtmpSourceHandler.handleSource = function(e, n) {
                    var o = t.streamToParts(e.src);
                    n.setRtmpConnection(o.connection), n.setRtmpStream(o.stream)
                }, t.registerSourceHandler(t.rtmpSourceHandler), t
            }
            n.__esModule = !0, n["default"] = o, e.exports = n["default"]
        }, {}],
        109: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t) {
                var e = t.charAt(0).toUpperCase() + t.slice(1);
                C["set" + e] = function(e) {
                    return this.el_.vjs_setProperty(t, e)
                }
            }

            function l(t) {
                C[t] = function() {
                    return this.el_.vjs_getProperty(t)
                }
            }
            n.__esModule = !0;
            for (var u = t("./tech"), c = r(u), p = t("../utils/dom.js"), f = o(p), h = t("../utils/url.js"), d = o(h), y = t("../utils/time-ranges.js"), v = t("./flash-rtmp"), g = r(v), m = t("../component"), b = r(m), _ = t("global/window"), j = r(_), T = t("object.assign"), w = r(T), k = j["default"].navigator, x = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), n.source && this.ready(function() {
                            this.setSource(n.source)
                        }, !0), n.startTime && this.ready(function() {
                            this.load(), this.play(), this.currentTime(n.startTime)
                        }, !0), j["default"].videojs = j["default"].videojs || {}, j["default"].videojs.Flash = j["default"].videojs.Flash || {}, j["default"].videojs.Flash.onReady = e.onReady, j["default"].videojs.Flash.onEvent = e.onEvent, j["default"].videojs.Flash.onError = e.onError, this.on("seeked", function() {
                            this.lastSeekTarget_ = void 0
                        })
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var t = this.options_;
                        t.swf || (t.swf = "//vjs.zencdn.net/swf/5.0.0-rc1/video-js.swf");
                        var n = t.techId,
                            o = w["default"]({
                                readyFunction: "videojs.Flash.onReady",
                                eventProxyFunction: "videojs.Flash.onEvent",
                                errorEventProxyFunction: "videojs.Flash.onError",
                                autoplay: t.autoplay,
                                preload: t.preload,
                                loop: t.loop,
                                muted: t.muted
                            }, t.flashVars),
                            r = w["default"]({
                                wmode: "opaque",
                                bgcolor: "#000000"
                            }, t.params),
                            i = w["default"]({
                                id: n,
                                name: n,
                                "class": "vjs-tech"
                            }, t.attributes);
                        return this.el_ = e.embed(t.swf, o, r, i), this.el_.tech = this, this.el_
                    }, e.prototype.play = function() {
                        this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                    }, e.prototype.pause = function() {
                        this.el_.vjs_pause()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.currentSrc() : this.setSrc(t)
                    }, e.prototype.setSrc = function(t) {
                        if (t = d.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay()) {
                            var e = this;
                            this.setTimeout(function() {
                                e.play()
                            }, 0)
                        }
                    }, e.prototype.seeking = function() {
                        return void 0 !== this.lastSeekTarget_
                    }, e.prototype.setCurrentTime = function(e) {
                        var n = this.seekable();
                        n.length && (e = e > n.start(0) ? e : n.start(0), e = e < n.end(n.length - 1) ? e : n.end(n.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
                    }, e.prototype.currentTime = function() {
                        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                    }, e.prototype.load = function() {
                        this.el_.vjs_load()
                    }, e.prototype.poster = function() {
                        this.el_.vjs_getProperty("poster")
                    }, e.prototype.setPoster = function() {}, e.prototype.seekable = function() {
                        var t = this.duration();
                        return 0 === t ? y.createTimeRange() : y.createTimeRange(0, t)
                    }, e.prototype.buffered = function() {
                        var t = this.el_.vjs_getProperty("buffered");
                        return 0 === t.length ? y.createTimeRange() : y.createTimeRange(t[0][0], t[0][1])
                    }, e.prototype.supportsFullScreen = function() {
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        return !1
                    }, e
                }(c["default"]), C = x.prototype, O = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), E = "networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(","), S = 0; S < O.length; S++) l(O[S]), a(O[S]);
            for (var S = 0; S < E.length; S++) l(E[S]);
            x.isSupported = function() {
                return x.version()[0] >= 10
            }, c["default"].withSourceHandlers(x), x.nativeSourceHandler = {}, x.nativeSourceHandler.canHandleSource = function(t) {
                function e(t) {
                    var e = d.getFileExtension(t);
                    return e ? "video/" + e : ""
                }
                var n;
                return n = t.type ? t.type.replace(/;.*/, "").toLowerCase() : e(t.src), n in x.formats ? "maybe" : ""
            }, x.nativeSourceHandler.handleSource = function(t, e) {
                e.setSrc(t.src)
            }, x.nativeSourceHandler.dispose = function() {}, x.registerSourceHandler(x.nativeSourceHandler), x.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, x.onReady = function(t) {
                var e = f.getEl(t),
                    n = e && e.tech;
                n && n.el() && x.checkReady(n)
            }, x.checkReady = function(t) {
                t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
                    x.checkReady(t)
                }, 50))
            }, x.onEvent = function(t, e) {
                var n = f.getEl(t).tech;
                n.trigger(e)
            }, x.onError = function(t, e) {
                var n = f.getEl(t).tech;
                return "srcnotfound" === e ? n.error(4) : void n.error("FLASH: " + e)
            }, x.version = function() {
                var t = "0,0,0";
                try {
                    t = new j["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        k.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (k.plugins["Shockwave Flash 2.0"] || k.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (n) {}
                }
                return t.split(",")
            }, x.embed = function(t, e, n, o) {
                var r = x.getEmbedCode(t, e, n, o),
                    i = f.createEl("div", {
                        innerHTML: r
                    }).childNodes[0];
                return i
            }, x.getEmbedCode = function(t, e, n, o) {
                var r = '<object type="application/x-shockwave-flash" ',
                    i = "",
                    s = "",
                    a = "";
                return e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    i += t + "=" + e[t] + "&amp;"
                }), n = w["default"]({
                    movie: t,
                    flashvars: i,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, n), Object.getOwnPropertyNames(n).forEach(function(t) {
                    s += '<param name="' + t + '" value="' + n[t] + '" />'
                }), o = w["default"]({
                    data: t,
                    width: "100%",
                    height: "100%"
                }, o), Object.getOwnPropertyNames(o).forEach(function(t) {
                    a += t + '="' + o[t] + '" '
                }), "" + r + a + ">" + s + "</object>"
            }, g["default"](x), b["default"].registerComponent("Flash", x), n["default"] = x, e.exports = n["default"]
        }, {
            "../component": 63,
            "../utils/dom.js": 123,
            "../utils/time-ranges.js": 131,
            "../utils/url.js": 133,
            "./flash-rtmp": 108,
            "./tech": 112,
            "global/window": 2,
            "object.assign": 45
        }],
        110: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("./tech.js"),
                l = r(a),
                u = t("../component"),
                c = r(u),
                p = t("../utils/dom.js"),
                f = o(p),
                h = t("../utils/url.js"),
                d = o(h),
                y = t("../utils/fn.js"),
                v = o(y),
                g = t("../utils/log.js"),
                m = r(g),
                b = t("../utils/browser.js"),
                _ = o(b),
                j = t("global/document"),
                T = r(j),
                w = t("global/window"),
                k = r(w),
                x = t("object.assign"),
                C = r(x),
                O = t("../utils/merge-options.js"),
                E = r(O),
                S = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o);
                        var r = n.source;
                        if (r && (this.el_.currentSrc !== r.src || n.tag && 3 === n.tag.initNetworkState_) ? this.setSource(r) : this.handleLateInit_(this.el_), this.el_.hasChildNodes()) {
                            for (var s = this.el_.childNodes, a = s.length, l = []; a--;) {
                                var u = s[a],
                                    c = u.nodeName.toLowerCase();
                                "track" === c && (this.featuresNativeTextTracks ? this.remoteTextTracks().addTrack_(u.track) : l.push(u))
                            }
                            for (var p = 0; p < l.length; p++) this.el_.removeChild(l[p])
                        }
                        this.featuresNativeTextTracks && (this.handleTextTrackChange_ = v.bind(this, this.handleTextTrackChange), this.handleTextTrackAdd_ = v.bind(this, this.handleTextTrackAdd), this.handleTextTrackRemove_ = v.bind(this, this.handleTextTrackRemove), this.proxyNativeTextTracks_()), (_.TOUCH_ENABLED && n.nativeControlsForTouch === !0 || _.IS_IPHONE || _.IS_NATIVE_ANDROID) && this.setControls(!0), this.triggerReady()
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        var n = this.el().textTracks,
                            o = this.textTracks();
                        n && n.removeEventListener && (n.removeEventListener("change", this.handleTextTrackChange_), n.removeEventListener("addtrack", this.handleTextTrackAdd_), n.removeEventListener("removetrack", this.handleTextTrackRemove_));
                        for (var r = o.length; r--;) o.removeTrack_(o[r]);
                        e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = this.options_.tag;
                        if (!t || this.movingMediaElementInDOM === !1)
                            if (t) {
                                var n = t.cloneNode(!0);
                                t.parentNode.insertBefore(n, t), e.disposeMediaElement(t), t = n
                            } else {
                                t = T["default"].createElement("video");
                                var o = this.options_.tag && f.getElAttributes(this.options_.tag),
                                    r = E["default"]({}, o);
                                _.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete r.controls, f.setElAttributes(t, C["default"](r, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                        for (var i = ["autoplay", "preload", "loop", "muted"], s = i.length - 1; s >= 0; s--) {
                            var a = i[s],
                                l = {};
                            "undefined" != typeof this.options_[a] && (l[a] = this.options_[a]), f.setElAttributes(t, l)
                        }
                        return t
                    }, e.prototype.handleLateInit_ = function(t) {
                        var e = this;
                        if (0 !== t.networkState && 3 !== t.networkState) {
                            if (0 === t.readyState) {
                                var n = function() {
                                    var t = !1,
                                        n = function() {
                                            t = !0
                                        };
                                    e.on("loadstart", n);
                                    var o = function() {
                                        t || this.trigger("loadstart")
                                    };
                                    return e.on("loadedmetadata", o), e.ready(function() {
                                        this.off("loadstart", n), this.off("loadedmetadata", o), t || this.trigger("loadstart")
                                    }), {
                                        v: void 0
                                    }
                                }();
                                if ("object" == typeof n) return n.v
                            }
                            var o = ["loadstart"];
                            o.push("loadedmetadata"), t.readyState >= 2 && o.push("loadeddata"), t.readyState >= 3 && o.push("canplay"), t.readyState >= 4 && o.push("canplaythrough"), this.ready(function() {
                                o.forEach(function(t) {
                                    this.trigger(t)
                                }, this)
                            })
                        }
                    }, e.prototype.proxyNativeTextTracks_ = function() {
                        var t = this.el().textTracks;
                        t && t.addEventListener && (t.addEventListener("change", this.handleTextTrackChange_), t.addEventListener("addtrack", this.handleTextTrackAdd_), t.addEventListener("removetrack", this.handleTextTrackRemove_))
                    }, e.prototype.handleTextTrackChange = function() {
                        var t = this.textTracks();
                        this.textTracks().trigger({
                            type: "change",
                            target: t,
                            currentTarget: t,
                            srcElement: t
                        })
                    }, e.prototype.handleTextTrackAdd = function(t) {
                        this.textTracks().addTrack_(t.track)
                    }, e.prototype.handleTextTrackRemove = function(t) {
                        this.textTracks().removeTrack_(t.track)
                    }, e.prototype.play = function() {
                        this.el_.play()
                    }, e.prototype.pause = function() {
                        this.el_.pause()
                    }, e.prototype.paused = function() {
                        return this.el_.paused
                    }, e.prototype.currentTime = function() {
                        return this.el_.currentTime
                    }, e.prototype.setCurrentTime = function(t) {
                        try {
                            this.el_.currentTime = t
                        } catch (e) {
                            m["default"](e, "Video is not ready. (Video.js)")
                        }
                    }, e.prototype.duration = function() {
                        return this.el_.duration || 0
                    }, e.prototype.buffered = function() {
                        return this.el_.buffered
                    }, e.prototype.volume = function() {
                        return this.el_.volume
                    }, e.prototype.setVolume = function(t) {
                        this.el_.volume = t
                    }, e.prototype.muted = function() {
                        return this.el_.muted
                    }, e.prototype.setMuted = function(t) {
                        this.el_.muted = t
                    }, e.prototype.width = function() {
                        return this.el_.offsetWidth
                    }, e.prototype.height = function() {
                        return this.el_.offsetHeight
                    }, e.prototype.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = k["default"].navigator.userAgent;
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        var t = this.el_;
                        "webkitDisplayingFullscreen" in t && this.one("webkitbeginfullscreen", function() {
                            this.one("webkitendfullscreen", function() {
                                this.trigger("fullscreenchange", {
                                    isFullscreen: !1
                                })
                            }), this.trigger("fullscreenchange", {
                                isFullscreen: !0
                            })
                        }), t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            t.pause(), t.webkitEnterFullScreen()
                        }, 0)) : t.webkitEnterFullScreen()
                    }, e.prototype.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.el_.src : void this.setSrc(t)
                    }, e.prototype.setSrc = function(t) {
                        this.el_.src = t
                    }, e.prototype.load = function() {
                        this.el_.load()
                    }, e.prototype.currentSrc = function() {
                        return this.el_.currentSrc
                    }, e.prototype.poster = function() {
                        return this.el_.poster
                    }, e.prototype.setPoster = function(t) {
                        this.el_.poster = t
                    }, e.prototype.preload = function() {
                        return this.el_.preload
                    }, e.prototype.setPreload = function(t) {
                        this.el_.preload = t
                    }, e.prototype.autoplay = function() {
                        return this.el_.autoplay
                    }, e.prototype.setAutoplay = function(t) {
                        this.el_.autoplay = t
                    }, e.prototype.controls = function() {
                        return this.el_.controls
                    }, e.prototype.setControls = function(t) {
                        this.el_.controls = !!t
                    }, e.prototype.loop = function() {
                        return this.el_.loop
                    }, e.prototype.setLoop = function(t) {
                        this.el_.loop = t
                    }, e.prototype.error = function() {
                        return this.el_.error
                    }, e.prototype.seeking = function() {
                        return this.el_.seeking
                    }, e.prototype.seekable = function() {
                        return this.el_.seekable
                    }, e.prototype.ended = function() {
                        return this.el_.ended
                    }, e.prototype.defaultMuted = function() {
                        return this.el_.defaultMuted
                    }, e.prototype.playbackRate = function() {
                        return this.el_.playbackRate
                    }, e.prototype.played = function() {
                        return this.el_.played
                    }, e.prototype.setPlaybackRate = function(t) {
                        this.el_.playbackRate = t
                    }, e.prototype.networkState = function() {
                        return this.el_.networkState
                    }, e.prototype.readyState = function() {
                        return this.el_.readyState
                    }, e.prototype.videoWidth = function() {
                        return this.el_.videoWidth
                    }, e.prototype.videoHeight = function() {
                        return this.el_.videoHeight
                    }, e.prototype.textTracks = function() {
                        return t.prototype.textTracks.call(this)
                    }, e.prototype.addTextTrack = function(e, n, o) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, n, o) : t.prototype.addTextTrack.call(this, e, n, o)
                    }, e.prototype.addRemoteTextTrack = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        if (!this.featuresNativeTextTracks) return t.prototype.addRemoteTextTrack.call(this, e);
                        var n = T["default"].createElement("track");
                        return e.kind && (n.kind = e.kind), e.label && (n.label = e.label), (e.language || e.srclang) && (n.srclang = e.language || e.srclang), e["default"] && (n["default"] = e["default"]), e.id && (n.id = e.id), e.src && (n.src = e.src), this.el().appendChild(n), this.remoteTextTracks().addTrack_(n.track), n
                    }, e.prototype.removeRemoteTextTrack = function(e) {
                        if (!this.featuresNativeTextTracks) return t.prototype.removeRemoteTextTrack.call(this, e);
                        var n, o;
                        for (this.remoteTextTracks().removeTrack_(e), n = this.el().querySelectorAll("track"), o = n.length; o--;)(e === n[o] || e === n[o].track) && this.el().removeChild(n[o])
                    }, e
                }(l["default"]);
            S.TEST_VID = T["default"].createElement("video");
            var P = T["default"].createElement("track");
            P.kind = "captions", P.srclang = "en", P.label = "English", S.TEST_VID.appendChild(P), S.isSupported = function() {
                try {
                    S.TEST_VID.volume = .5
                } catch (t) {
                    return !1
                }
                return !!S.TEST_VID.canPlayType
            }, l["default"].withSourceHandlers(S), S.nativeSourceHandler = {}, S.nativeSourceHandler.canHandleSource = function(t) {
                function e(t) {
                    try {
                        return S.TEST_VID.canPlayType(t)
                    } catch (e) {
                        return ""
                    }
                }
                var n;
                return t.type ? e(t.type) : t.src ? (n = d.getFileExtension(t.src), e("video/" + n)) : ""
            }, S.nativeSourceHandler.handleSource = function(t, e) {
                e.setSrc(t.src)
            }, S.nativeSourceHandler.dispose = function() {}, S.registerSourceHandler(S.nativeSourceHandler), S.canControlVolume = function() {
                var t = S.TEST_VID.volume;
                return S.TEST_VID.volume = t / 2 + .1, t !== S.TEST_VID.volume
            }, S.canControlPlaybackRate = function() {
                var t = S.TEST_VID.playbackRate;
                return S.TEST_VID.playbackRate = t / 2 + .1, t !== S.TEST_VID.playbackRate
            }, S.supportsNativeTextTracks = function() {
                var t;
                return t = !!S.TEST_VID.textTracks, t && S.TEST_VID.textTracks.length > 0 && (t = "number" != typeof S.TEST_VID.textTracks[0].mode), t && _.IS_FIREFOX && (t = !1), !t || "onremovetrack" in S.TEST_VID.textTracks || (t = !1), t
            }, S.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], S.prototype.featuresVolumeControl = S.canControlVolume(), S.prototype.featuresPlaybackRate = S.canControlPlaybackRate(), S.prototype.movingMediaElementInDOM = !_.IS_IOS, S.prototype.featuresFullscreenResize = !0, S.prototype.featuresProgressEvents = !0, S.prototype.featuresNativeTextTracks = S.supportsNativeTextTracks();
            var M = void 0,
                A = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                I = /^video\/mp4/i;
            S.patchCanPlayType = function() {
                _.ANDROID_VERSION >= 4 && (M || (M = S.TEST_VID.constructor.prototype.canPlayType), S.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && A.test(t) ? "maybe" : M.call(this, t)
                }), _.IS_OLD_ANDROID && (M || (M = S.TEST_VID.constructor.prototype.canPlayType), S.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && I.test(t) ? "maybe" : M.call(this, t)
                })
            }, S.unpatchCanPlayType = function() {
                var t = S.TEST_VID.constructor.prototype.canPlayType;
                return S.TEST_VID.constructor.prototype.canPlayType = M, M = null, t
            }, S.patchCanPlayType(), S.disposeMediaElement = function(t) {
                if (t) {
                    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                        try {
                            t.load()
                        } catch (e) {}
                    }()
                }
            }, c["default"].registerComponent("Html5", S), n["default"] = S, e.exports = n["default"]
        }, {
            "../component": 63,
            "../utils/browser.js": 120,
            "../utils/dom.js": 123,
            "../utils/fn.js": 125,
            "../utils/log.js": 128,
            "../utils/merge-options.js": 129,
            "../utils/url.js": 133,
            "./tech.js": 112,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45
        }],
        111: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var s = t("../component"),
                a = o(s),
                l = t("global/window"),
                u = (o(l), t("../utils/to-title-case.js")),
                c = o(u),
                p = function(t) {
                    function e(n, o, i) {
                        if (r(this, e), t.call(this, n, o, i), o.playerOptions.sources && 0 !== o.playerOptions.sources.length) n.src(o.playerOptions.sources);
                        else
                            for (var s = 0, l = o.playerOptions.techOrder; s < l.length; s++) {
                                var u = c["default"](l[s]),
                                    p = a["default"].getComponent(u);
                                if (p && p.isSupported()) {
                                    n.loadTech_(u);
                                    break
                                }
                            }
                    }
                    return i(e, t), e
                }(a["default"]);
            a["default"].registerComponent("MediaLoader", p), n["default"] = p, e.exports = n["default"]
        }, {
            "../component": 63,
            "../utils/to-title-case.js": 132,
            "global/window": 2
        }],
        112: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            n.__esModule = !0;
            var a = t("../component"),
                l = r(a),
                u = t("../tracks/text-track"),
                c = r(u),
                p = t("../tracks/text-track-list"),
                f = r(p),
                h = t("../utils/fn.js"),
                d = o(h),
                y = t("../utils/log.js"),
                v = r(y),
                g = t("../utils/time-ranges.js"),
                m = t("../utils/buffer.js"),
                b = t("../media-error.js"),
                _ = r(b),
                j = t("global/window"),
                T = r(j),
                w = t("global/document"),
                k = r(w),
                x = function(t) {
                    function e() {
                        var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            o = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                        i(this, e), n.reportTouchActivity = !1, t.call(this, null, n, o), this.hasStarted_ = !1, this.on("playing", function() {
                            this.hasStarted_ = !0
                        }), this.on("loadstart", function() {
                            this.hasStarted_ = !1
                        }), this.textTracks_ = n.textTracks, this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), (n.nativeCaptions === !1 || n.nativeTextTracks === !1) && (this.featuresNativeTextTracks = !1), this.featuresNativeTextTracks || this.on("ready", this.emulateTextTracks), this.initTextTrackListeners(), this.emitTapEvents()
                    }
                    return s(e, t), e.prototype.manualProgressOn = function() {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, e.prototype.manualProgressOff = function() {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, e.prototype.trackProgress = function() {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(d.bind(this, function() {
                            var t = this.bufferedPercent();
                            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                        }), 500)
                    }, e.prototype.onDurationChange = function() {
                        this.duration_ = this.duration()
                    }, e.prototype.buffered = function() {
                        return g.createTimeRange(0, 0)
                    }, e.prototype.bufferedPercent = function() {
                        return m.bufferedPercent(this.buffered(), this.duration_)
                    }, e.prototype.stopTrackingProgress = function() {
                        this.clearInterval(this.progressInterval)
                    }, e.prototype.manualTimeUpdatesOn = function() {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.manualTimeUpdatesOff = function() {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.trackCurrentTime = function() {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, e.prototype.stopTrackingCurrentTime = function() {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.dispose = function() {
                        var e = this.textTracks();
                        if (e)
                            for (var n = e.length; n--;) this.removeRemoteTextTrack(e[n]);
                        this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                    }, e.prototype.error = function(t) {
                        return void 0 !== t && (this.error_ = t instanceof _["default"] ? t : new _["default"](t), this.trigger("error")), this.error_
                    }, e.prototype.played = function() {
                        return this.hasStarted_ ? g.createTimeRange(0, 0) : g.createTimeRange()
                    }, e.prototype.setCurrentTime = function() {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.initTextTrackListeners = function() {
                        var t = d.bind(this, function() {
                                this.trigger("texttrackchange")
                            }),
                            e = this.textTracks();
                        e && (e.addEventListener("removetrack", t), e.addEventListener("addtrack", t), this.on("dispose", d.bind(this, function() {
                            e.removeEventListener("removetrack", t), e.removeEventListener("addtrack", t)
                        })))
                    }, e.prototype.emulateTextTracks = function() {
                        if (!T["default"].WebVTT && null != this.el().parentNode) {
                            var t = k["default"].createElement("script");
                            t.src = this.options_["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", this.el().parentNode.appendChild(t), T["default"].WebVTT = !0
                        }
                        var e = this.textTracks();
                        if (e) {
                            var n = d.bind(this, function() {
                                var t = this,
                                    n = function() {
                                        return t.trigger("texttrackchange")
                                    };
                                n();
                                for (var o = 0; o < e.length; o++) {
                                    var r = e[o];
                                    r.removeEventListener("cuechange", n), "showing" === r.mode && r.addEventListener("cuechange", n)
                                }
                            });
                            e.addEventListener("change", n), this.on("dispose", function() {
                                e.removeEventListener("change", n)
                            })
                        }
                    }, e.prototype.textTracks = function() {
                        return this.textTracks_ = this.textTracks_ || new f["default"], this.textTracks_
                    }, e.prototype.remoteTextTracks = function() {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new f["default"], this.remoteTextTracks_
                    }, e.prototype.addTextTrack = function(t, e, n) {
                        if (!t) throw new Error("TextTrack kind is required but was not provided");
                        return C(this, t, e, n)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        var e = C(this, t.kind, t.label, t.language, t);
                        return this.remoteTextTracks().addTrack_(e), {
                            track: e
                        }
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        this.textTracks().removeTrack_(t), this.remoteTextTracks().removeTrack_(t)
                    }, e.prototype.setPoster = function() {}, e
                }(l["default"]);
            x.prototype.textTracks_;
            var C = function(t, e, n, o) {
                var r = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4],
                    i = t.textTracks();
                r.kind = e, n && (r.label = n), o && (r.language = o), r.tech = t;
                var s = new c["default"](r);
                return i.addTrack_(s), s
            };
            x.prototype.featuresVolumeControl = !0, x.prototype.featuresFullscreenResize = !1, x.prototype.featuresPlaybackRate = !1, x.prototype.featuresProgressEvents = !1, x.prototype.featuresTimeupdateEvents = !1, x.prototype.featuresNativeTextTracks = !1, x.withSourceHandlers = function(t) {
                t.registerSourceHandler = function(e, n) {
                    var o = t.sourceHandlers;
                    o || (o = t.sourceHandlers = []), void 0 === n && (n = o.length), o.splice(n, 0, e)
                }, t.selectSourceHandler = function(e) {
                    for (var n = t.sourceHandlers || [], o = void 0, r = 0; r < n.length; r++)
                        if (o = n[r].canHandleSource(e)) return n[r];
                    return null
                }, t.canPlaySource = function(e) {
                    var n = t.selectSourceHandler(e);
                    return n ? n.canHandleSource(e) : ""
                };
                var e = t.prototype.seekable;
                t.prototype.seekable = function() {
                    return this.sourceHandler_ && this.sourceHandler_.seekable ? this.sourceHandler_.seekable() : e.call(this)
                }, t.prototype.setSource = function(e) {
                    var n = t.selectSourceHandler(e);
                    return n || (t.nativeSourceHandler ? n = t.nativeSourceHandler : v["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = e, this.sourceHandler_ = n.handleSource(e, this), this.on("dispose", this.disposeSourceHandler), this
                }, t.prototype.disposeSourceHandler = function() {
                    this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
                }
            }, l["default"].registerComponent("Tech", x), l["default"].registerComponent("MediaTechController", x), n["default"] = x, e.exports = n["default"]
        }, {
            "../component": 63,
            "../media-error.js": 99,
            "../tracks/text-track": 119,
            "../tracks/text-track-list": 117,
            "../utils/buffer.js": 121,
            "../utils/fn.js": 125,
            "../utils/log.js": 128,
            "../utils/time-ranges.js": 131,
            "global/document": 1,
            "global/window": 2
        }],
        113: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }
            n.__esModule = !0;
            var i = t("../utils/browser.js"),
                s = r(i),
                a = t("global/document"),
                l = o(a),
                u = function c(t) {
                    var e = this;
                    if (s.IS_IE8) {
                        e = l["default"].createElement("custom");
                        for (var n in c.prototype) e[n] = c.prototype[n]
                    }
                    return c.prototype.setCues_.call(e, t), Object.defineProperty(e, "length", {
                        get: function() {
                            return this.length_
                        }
                    }), s.IS_IE8 ? e : void 0
                };
            u.prototype.setCues_ = function(t) {
                var e = this.length || 0,
                    n = 0,
                    o = t.length;
                this.cues_ = t, this.length_ = t.length;
                var r = function(t) {
                    "" + t in this || Object.defineProperty(this, "" + t, {
                        get: function() {
                            return this.cues_[t]
                        }
                    })
                };
                if (o > e)
                    for (n = e; o > n; n++) r.call(this, n)
            }, u.prototype.getCueById = function(t) {
                for (var e = null, n = 0, o = this.length; o > n; n++) {
                    var r = this[n];
                    if (r.id === t) {
                        e = r;
                        break
                    }
                }
                return e
            }, n["default"] = u, e.exports = n["default"]
        }, {
            "../utils/browser.js": 120,
            "global/document": 1
        }],
        114: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t, e) {
                return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
            }

            function l(t, e, n) {
                try {
                    t.style[e] = n
                } catch (o) {}
            }
            n.__esModule = !0;
            var u = t("../component"),
                c = r(u),
                p = t("../menu/menu.js"),
                f = (r(p), t("../menu/menu-item.js")),
                h = (r(f), t("../menu/menu-button.js")),
                d = (r(h), t("../utils/fn.js")),
                y = o(d),
                v = t("global/document"),
                g = (r(v), t("global/window")),
                m = r(g),
                b = "#222",
                _ = "#ccc",
                j = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                T = function(t) {
                    function e(n, o, r) {
                        i(this, e), t.call(this, n, o, r), n.on("loadstart", y.bind(this, this.toggleDisplay)), n.on("texttrackchange", y.bind(this, this.updateDisplay)), n.ready(y.bind(this, function() {
                            if (n.tech_ && n.tech_.featuresNativeTextTracks) return void this.hide();
                            n.on("fullscreenchange", y.bind(this, this.updateDisplay));
                            for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) {
                                var o = t[e];
                                this.player_.addRemoteTextTrack(o)
                            }
                        }))
                    }
                    return s(e, t), e.prototype.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        })
                    }, e.prototype.clearDisplay = function() {
                        "function" == typeof m["default"].WebVTT && m["default"].WebVTT.processCues(m["default"], [], this.el_)
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.textTracks();
                        if (this.clearDisplay(), t)
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                "showing" === n.mode && this.updateForTrack(n)
                            }
                    }, e.prototype.updateForTrack = function(t) {
                        if ("function" == typeof m["default"].WebVTT && t.activeCues) {
                            for (var e = this.player_.textTrackSettings.getValues(), n = [], o = 0; o < t.activeCues.length; o++) n.push(t.activeCues[o]);
                            m["default"].WebVTT.processCues(m["default"], t.activeCues, this.el_);
                            for (var r = n.length; r--;) {
                                var i = n[r].displayState;
                                if (e.color && (i.firstChild.style.color = e.color), e.textOpacity && l(i.firstChild, "color", a(e.color || "#fff", e.textOpacity)), e.backgroundColor && (i.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && l(i.firstChild, "backgroundColor", a(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? l(i, "backgroundColor", a(e.windowColor, e.windowOpacity)) : i.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? i.firstChild.style.textShadow = "2px 2px 3px " + b + ", 2px 2px 4px " + b + ", 2px 2px 5px " + b : "raised" === e.edgeStyle ? i.firstChild.style.textShadow = "1px 1px " + b + ", 2px 2px " + b + ", 3px 3px " + b : "depressed" === e.edgeStyle ? i.firstChild.style.textShadow = "1px 1px " + _ + ", 0 1px " + _ + ", -1px -1px " + b + ", 0 -1px " + b : "uniform" === e.edgeStyle && (i.firstChild.style.textShadow = "0 0 4px " + b + ", 0 0 4px " + b + ", 0 0 4px " + b + ", 0 0 4px " + b)), e.fontPercent && 1 !== e.fontPercent) {
                                    var s = m["default"].parseFloat(i.style.fontSize);
                                    i.style.fontSize = s * e.fontPercent + "px", i.style.height = "auto", i.style.top = "auto", i.style.bottom = "2px"
                                }
                                e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? i.firstChild.style.fontVariant = "small-caps" : i.firstChild.style.fontFamily = j[e.fontFamily])
                            }
                        }
                    }, e
                }(c["default"]);
            c["default"].registerComponent("TextTrackDisplay", T), n["default"] = T, e.exports = n["default"]
        }, {
            "../component": 63,
            "../menu/menu-button.js": 100,
            "../menu/menu-item.js": 101,
            "../menu/menu.js": 102,
            "../utils/fn.js": 125,
            "global/document": 1,
            "global/window": 2
        }],
        115: [function(t, e, n) {
            "use strict";
            n.__esModule = !0;
            var o = {
                    disabled: "disabled",
                    hidden: "hidden",
                    showing: "showing"
                },
                r = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                };
            n.TextTrackMode = o, n.TextTrackKind = r
        }, {}],
        116: [function(t, e, n) {
            "use strict";
            n.__esModule = !0;
            var o = function(t) {
                    return {
                        kind: t.kind,
                        label: t.label,
                        language: t.language,
                        id: t.id,
                        inBandMetadataTrackDispatchType: t.inBandMetadataTrackDispatchType,
                        mode: t.mode,
                        cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                            return {
                                startTime: t.startTime,
                                endTime: t.endTime,
                                text: t.text,
                                id: t.id
                            }
                        }),
                        src: t.src
                    }
                },
                r = function(t) {
                    var e = t.el().querySelectorAll("track"),
                        n = Array.prototype.map.call(e, function(t) {
                            return t.track
                        }),
                        r = Array.prototype.map.call(e, function(t) {
                            var e = o(t.track);
                            return e.src = t.src, e
                        });
                    return r.concat(Array.prototype.filter.call(t.textTracks(), function(t) {
                        return -1 === n.indexOf(t)
                    }).map(o))
                },
                i = function(t, e) {
                    return t.forEach(function(t) {
                        var n = e.addRemoteTextTrack(t).track;
                        !t.src && t.cues && t.cues.forEach(function(t) {
                            return n.addCue(t)
                        })
                    }), e.textTracks()
                };
            n["default"] = {
                textTracksToJson: r,
                jsonToTextTracks: i,
                trackToJson_: o
            }, e.exports = n["default"]
        }, {}],
        117: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var i = t("../event-target"),
                s = r(i),
                a = t("../utils/fn.js"),
                l = o(a),
                u = t("../utils/browser.js"),
                c = o(u),
                p = t("global/document"),
                f = r(p),
                h = function y(t) {
                    var e = this;
                    if (c.IS_IE8) {
                        e = f["default"].createElement("custom");
                        for (var n in y.prototype) e[n] = y.prototype[n]
                    }
                    t = t || [], e.tracks_ = [], Object.defineProperty(e, "length", {
                        get: function() {
                            return this.tracks_.length
                        }
                    });
                    for (var o = 0; o < t.length; o++) e.addTrack_(t[o]);
                    return c.IS_IE8 ? e : void 0
                };
            h.prototype = Object.create(s["default"].prototype), h.prototype.constructor = h, h.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var d in h.prototype.allowedEvents_) h.prototype["on" + d] = null;
            h.prototype.addTrack_ = function(t) {
                var e = this.tracks_.length;
                "" + e in this || Object.defineProperty(this, e, {
                    get: function() {
                        return this.tracks_[e]
                    }
                }), t.addEventListener("modechange", l.bind(this, function() {
                    this.trigger("change")
                })), this.tracks_.push(t), this.trigger({
                    type: "addtrack",
                    track: t
                })
            }, h.prototype.removeTrack_ = function(t) {
                for (var e = void 0, n = 0, o = this.length; o > n; n++)
                    if (e = this[n], e === t) {
                        this.tracks_.splice(n, 1);
                        break
                    }
                this.trigger({
                    type: "removetrack",
                    track: e
                })
            }, h.prototype.getTrackById = function(t) {
                for (var e = null, n = 0, o = this.length; o > n; n++) {
                    var r = this[n];
                    if (r.id === t) {
                        e = r;
                        break
                    }
                }
                return e
            }, n["default"] = h, e.exports = n["default"]
        }, {
            "../event-target": 95,
            "../utils/browser.js": 120,
            "../utils/fn.js": 125,
            "global/document": 1
        }],
        118: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t) {
                var e = void 0;
                return t.selectedOptions ? e = t.selectedOptions[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
            }

            function l(t, e) {
                if (e) {
                    var n = void 0;
                    for (n = 0; n < t.options.length; n++) {
                        var o = t.options[n];
                        if (o.value === e) break
                    }
                    t.selectedIndex = n
                }
            }

            function u() {
                var t = '<div class="vjs-tracksettings">\n      <div class="vjs-tracksettings-colors">\n        <div class="vjs-fg-color vjs-tracksetting">\n            <label class="vjs-label">Foreground</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <select>\n                <option value="">---</option>\n                <option value="1">Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n        </div> <!-- vjs-fg-color -->\n        <div class="vjs-bg-color vjs-tracksetting">\n            <label class="vjs-label">Background</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-bg-color -->\n        <div class="window-color vjs-tracksetting">\n            <label class="vjs-label">Window</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-window-color -->\n      </div> <!-- vjs-tracksettings -->\n      <div class="vjs-tracksettings-font">\n        <div class="vjs-font-percent vjs-tracksetting">\n          <label class="vjs-label">Font Size</label>\n          <select>\n            <option value="0.50">50%</option>\n            <option value="0.75">75%</option>\n            <option value="1.00" selected>100%</option>\n            <option value="1.25">125%</option>\n            <option value="1.50">150%</option>\n            <option value="1.75">175%</option>\n            <option value="2.00">200%</option>\n            <option value="3.00">300%</option>\n            <option value="4.00">400%</option>\n          </select>\n        </div> <!-- vjs-font-percent -->\n        <div class="vjs-edge-style vjs-tracksetting">\n          <label class="vjs-label">Text Edge Style</label>\n          <select>\n            <option value="none">None</option>\n            <option value="raised">Raised</option>\n            <option value="depressed">Depressed</option>\n            <option value="uniform">Uniform</option>\n            <option value="dropshadow">Dropshadow</option>\n          </select>\n        </div> <!-- vjs-edge-style -->\n        <div class="vjs-font-family vjs-tracksetting">\n          <label class="vjs-label">Font Family</label>\n          <select>\n            <option value="">Default</option>\n            <option value="monospaceSerif">Monospace Serif</option>\n            <option value="proportionalSerif">Proportional Serif</option>\n            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n            <option value="casual">Casual</option>\n            <option value="script">Script</option>\n            <option value="small-caps">Small Caps</option>\n          </select>\n        </div> <!-- vjs-font-family -->\n      </div>\n    </div>\n    <div class="vjs-tracksettings-controls">\n      <button class="vjs-default-button">Defaults</button>\n      <button class="vjs-done-button">Done</button>\n    </div>';
                return t
            }
            n.__esModule = !0;
            var c = t("../component"),
                p = r(c),
                f = t("../utils/events.js"),
                h = o(f),
                d = t("../utils/fn.js"),
                y = o(d),
                v = t("../utils/log.js"),
                g = r(v),
                m = t("safe-json-parse/tuple"),
                b = r(m),
                _ = t("global/window"),
                j = r(_),
                T = function(t) {
                    function e(n, o) {
                        i(this, e), t.call(this, n, o), this.hide(), void 0 === o.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), h.on(this.el().querySelector(".vjs-done-button"), "click", y.bind(this, function() {
                            this.saveSettings(), this.hide()
                        })), h.on(this.el().querySelector(".vjs-default-button"), "click", y.bind(this, function() {
                            this.el().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.el().querySelector(".window-color > select").selectedIndex = 0, this.el().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-edge-style select").selectedIndex = 0, this.el().querySelector(".vjs-font-family select").selectedIndex = 0, this.el().querySelector(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                        })), h.on(this.el().querySelector(".vjs-fg-color > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-bg-color > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".window-color > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-text-opacity > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-bg-opacity > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-window-opacity > select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-font-percent select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-edge-style select"), "change", y.bind(this, this.updateDisplay)), h.on(this.el().querySelector(".vjs-font-family select"), "change", y.bind(this, this.updateDisplay)), this.options_.persistTextTrackSettings && this.restoreSettings()
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-caption-settings vjs-modal-overlay",
                            innerHTML: u()
                        })
                    }, e.prototype.getValues = function() {
                        var t = this.el(),
                            e = a(t.querySelector(".vjs-edge-style select")),
                            n = a(t.querySelector(".vjs-font-family select")),
                            o = a(t.querySelector(".vjs-fg-color > select")),
                            r = a(t.querySelector(".vjs-text-opacity > select")),
                            i = a(t.querySelector(".vjs-bg-color > select")),
                            s = a(t.querySelector(".vjs-bg-opacity > select")),
                            l = a(t.querySelector(".window-color > select")),
                            u = a(t.querySelector(".vjs-window-opacity > select")),
                            c = j["default"].parseFloat(a(t.querySelector(".vjs-font-percent > select"))),
                            p = {
                                backgroundOpacity: s,
                                textOpacity: r,
                                windowOpacity: u,
                                edgeStyle: e,
                                fontFamily: n,
                                color: o,
                                backgroundColor: i,
                                windowColor: l,
                                fontPercent: c
                            };
                        for (var f in p)("" === p[f] || "none" === p[f] || "fontPercent" === f && 1 === p[f]) && delete p[f];
                        return p
                    }, e.prototype.setValues = function(t) {
                        var e = this.el();
                        l(e.querySelector(".vjs-edge-style select"), t.edgeStyle), l(e.querySelector(".vjs-font-family select"), t.fontFamily), l(e.querySelector(".vjs-fg-color > select"), t.color), l(e.querySelector(".vjs-text-opacity > select"), t.textOpacity), l(e.querySelector(".vjs-bg-color > select"), t.backgroundColor), l(e.querySelector(".vjs-bg-opacity > select"), t.backgroundOpacity), l(e.querySelector(".window-color > select"), t.windowColor), l(e.querySelector(".vjs-window-opacity > select"), t.windowOpacity);
                        var n = t.fontPercent;
                        n && (n = n.toFixed(2)), l(e.querySelector(".vjs-font-percent > select"), n)
                    }, e.prototype.restoreSettings = function() {
                        var t = b["default"](j["default"].localStorage.getItem("vjs-text-track-settings")),
                            e = t[0],
                            n = t[1];
                        e && g["default"].error(e), n && this.setValues(n)
                    }, e.prototype.saveSettings = function() {
                        if (this.options_.persistTextTrackSettings) {
                            var t = this.getValues();
                            try {
                                Object.getOwnPropertyNames(t).length > 0 ? j["default"].localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : j["default"].localStorage.removeItem("vjs-text-track-settings")
                            } catch (e) {}
                        }
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.getChild("textTrackDisplay");
                        t && t.updateDisplay()
                    }, e
                }(p["default"]);
            p["default"].registerComponent("TextTrackSettings", T), n["default"] = T, e.exports = n["default"]
        }, {
            "../component": 63,
            "../utils/events.js": 124,
            "../utils/fn.js": 125,
            "../utils/log.js": 128,
            "global/window": 2,
            "safe-json-parse/tuple": 53
        }],
        119: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var i = t("./text-track-cue-list"),
                s = r(i),
                a = t("../utils/fn.js"),
                l = o(a),
                u = t("../utils/guid.js"),
                c = o(u),
                p = t("../utils/browser.js"),
                f = o(p),
                h = t("./text-track-enums"),
                d = o(h),
                y = t("../utils/log.js"),
                v = r(y),
                g = t("../event-target"),
                m = r(g),
                b = t("global/document"),
                _ = r(b),
                j = t("global/window"),
                T = r(j),
                w = t("../utils/url.js"),
                k = t("xhr"),
                x = r(k),
                C = function P() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (!t.tech) throw new Error("A tech was not provided.");
                    var e = this;
                    if (f.IS_IE8) {
                        e = _["default"].createElement("custom");
                        for (var n in P.prototype) e[n] = P.prototype[n]
                    }
                    e.tech_ = t.tech;
                    var o = d.TextTrackMode[t.mode] || "disabled",
                        r = d.TextTrackKind[t.kind] || "subtitles",
                        i = t.label || "",
                        a = t.language || t.srclang || "",
                        u = t.id || "vjs_text_track_" + c.newGUID();
                    ("metadata" === r || "chapters" === r) && (o = "hidden"), e.cues_ = [], e.activeCues_ = [];
                    var p = new s["default"](e.cues_),
                        h = new s["default"](e.activeCues_),
                        y = !1,
                        v = l.bind(e, function() {
                            this.activeCues, y && (this.trigger("cuechange"), y = !1)
                        });
                    return "disabled" !== o && e.tech_.on("timeupdate", v), Object.defineProperty(e, "kind", {
                        get: function() {
                            return r
                        },
                        set: Function.prototype
                    }), Object.defineProperty(e, "label", {
                        get: function() {
                            return i
                        },
                        set: Function.prototype
                    }), Object.defineProperty(e, "language", {
                        get: function() {
                            return a
                        },
                        set: Function.prototype
                    }), Object.defineProperty(e, "id", {
                        get: function() {
                            return u
                        },
                        set: Function.prototype
                    }), Object.defineProperty(e, "mode", {
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            d.TextTrackMode[t] && (o = t, "showing" === o && this.tech_.on("timeupdate", v), this.trigger("modechange"))
                        }
                    }), Object.defineProperty(e, "cues", {
                        get: function() {
                            return this.loaded_ ? p : null
                        },
                        set: Function.prototype
                    }), Object.defineProperty(e, "activeCues", {
                        get: function() {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return h;
                            for (var t = this.tech_.currentTime(), e = [], n = 0, o = this.cues.length; o > n; n++) {
                                var r = this.cues[n];
                                r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
                            }
                            if (y = !1, e.length !== this.activeCues_.length) y = !0;
                            else
                                for (var n = 0; n < e.length; n++) - 1 === S.call(this.activeCues_, e[n]) && (y = !0);
                            return this.activeCues_ = e, h.setCues_(this.activeCues_), h
                        },
                        set: Function.prototype
                    }), t.src ? (e.src = t.src, E(t.src, e)) : e.loaded_ = !0, f.IS_IE8 ? e : void 0
                };
            C.prototype = Object.create(m["default"].prototype), C.prototype.constructor = C, C.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, C.prototype.addCue = function(t) {
                var e = this.tech_.textTracks();
                if (e)
                    for (var n = 0; n < e.length; n++) e[n] !== this && e[n].removeCue(t);
                this.cues_.push(t), this.cues.setCues_(this.cues_)
            }, C.prototype.removeCue = function(t) {
                for (var e = !1, n = 0, o = this.cues_.length; o > n; n++) {
                    var r = this.cues_[n];
                    r === t && (this.cues_.splice(n, 1), e = !0)
                }
                e && this.cues.setCues_(this.cues_)
            };
            var O = function M(t, e) {
                    if ("function" != typeof T["default"].WebVTT) return T["default"].setTimeout(function() {
                        M(t, e)
                    }, 25);
                    var n = new T["default"].WebVTT.Parser(T["default"], T["default"].vttjs, T["default"].WebVTT.StringDecoder());
                    n.oncue = function(t) {
                        e.addCue(t)
                    }, n.onparsingerror = function(t) {
                        v["default"].error(t)
                    }, n.parse(t), n.flush()
                },
                E = function(t, e) {
                    var n = {
                            uri: t
                        },
                        o = w.isCrossOrigin(t);
                    o && (n.cors = o), x["default"](n, l.bind(this, function(t, n, o) {
                        return t ? v["default"].error(t, n) : (e.loaded_ = !0, void O(o, e))
                    }))
                },
                S = function(t, e) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        o = n.length >>> 0;
                    if (0 === o) return -1;
                    var r = +e || 0;
                    if (1 / 0 === Math.abs(r) && (r = 0), r >= o) return -1;
                    for (var i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); o > i;) {
                        if (i in n && n[i] === t) return i;
                        i++
                    }
                    return -1
                };
            n["default"] = C, e.exports = n["default"]
        }, {
            "../event-target": 95,
            "../utils/browser.js": 120,
            "../utils/fn.js": 125,
            "../utils/guid.js": 127,
            "../utils/log.js": 128,
            "../utils/url.js": 133,
            "./text-track-cue-list": 113,
            "./text-track-enums": 115,
            "global/document": 1,
            "global/window": 2,
            xhr: 55
        }],
        120: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("global/document"),
                i = o(r),
                s = t("global/window"),
                a = o(s),
                l = a["default"].navigator.userAgent,
                u = /AppleWebKit\/([\d.]+)/i.exec(l),
                c = u ? parseFloat(u.pop()) : null,
                p = /iPhone/i.test(l);
            n.IS_IPHONE = p;
            var f = /iPad/i.test(l);
            n.IS_IPAD = f;
            var h = /iPod/i.test(l);
            n.IS_IPOD = h;
            var d = p || f || h;
            n.IS_IOS = d;
            var y = function() {
                var t = l.match(/OS (\d+)_/i);
                return t && t[1] ? t[1] : void 0
            }();
            n.IOS_VERSION = y;
            var v = /Android/i.test(l);
            n.IS_ANDROID = v;
            var g = function() {
                var t, e, n = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                return n ? (t = n[1] && parseFloat(n[1]), e = n[2] && parseFloat(n[2]), t && e ? parseFloat(n[1] + "." + n[2]) : t ? t : null) : null
            }();
            n.ANDROID_VERSION = g;
            var m = v && /webkit/i.test(l) && 2.3 > g;
            n.IS_OLD_ANDROID = m;
            var b = v && 5 > g && 537 > c;
            n.IS_NATIVE_ANDROID = b;
            var _ = /Firefox/i.test(l);
            n.IS_FIREFOX = _;
            var j = /Chrome/i.test(l);
            n.IS_CHROME = j;
            var T = /MSIE\s8\.0/.test(l);
            n.IS_IE8 = T;
            var w = !!("ontouchstart" in a["default"] || a["default"].DocumentTouch && i["default"] instanceof a["default"].DocumentTouch);
            n.TOUCH_ENABLED = w;
            var k = "backgroundSize" in i["default"].createElement("video").style;
            n.BACKGROUND_SIZE_SUPPORTED = k
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        121: [function(t, e, n) {
            "use strict";

            function o(t, e) {
                var n, o, i = 0;
                if (!e) return 0;
                t && t.length || (t = r.createTimeRange(0, 0));
                for (var s = 0; s < t.length; s++) n = t.start(s), o = t.end(s), o > e && (o = e), i += o - n;
                return i / e
            }
            n.__esModule = !0, n.bufferedPercent = o;
            var r = t("./time-ranges.js")
        }, {
            "./time-ranges.js": 131
        }],
        122: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("./log.js"),
                i = o(r),
                s = {
                    get: function(t, e) {
                        return t[e]
                    },
                    set: function(t, e, n) {
                        return t[e] = n, !0
                    }
                };
            n["default"] = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if ("function" == typeof Proxy) {
                    var n = function() {
                        var n = {};
                        return Object.keys(e).forEach(function(t) {
                            s.hasOwnProperty(t) && (n[t] = function() {
                                return i["default"].warn(e[t]), s[t].apply(this, arguments)
                            })
                        }), {
                            v: new Proxy(t, n)
                        }
                    }();
                    if ("object" == typeof n) return n.v
                }
                return t
            }, e.exports = n["default"]
        }, {
            "./log.js": 128
        }],
        123: [function(t, e, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                return t.raw = e, t
            }

            function s(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), w["default"].getElementById(t)
            }

            function a() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    o = w["default"].createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    var n = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (S["default"].warn(M["default"](j, t, n)), o.setAttribute(t, n)) : o[t] = n
                }), Object.getOwnPropertyNames(n).forEach(function(t) {
                    n[t];
                    o.setAttribute(t, n[t])
                }), o
            }

            function l(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }

            function u(t) {
                var e = t[I];
                return e || (e = t[I] = O.newGUID()), A[e] || (A[e] = {}), A[e]
            }

            function c(t) {
                var e = t[I];
                return e ? !!Object.getOwnPropertyNames(A[e]).length : !1
            }

            function p(t) {
                var e = t[I];
                if (e) {
                    delete A[e];
                    try {
                        delete t[I]
                    } catch (n) {
                        t.removeAttribute ? t.removeAttribute(I) : t[I] = null
                    }
                }
            }

            function f(t, e) {
                return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
            }

            function h(t, e) {
                f(t, e) || (t.className = "" === t.className ? e : t.className + " " + e)
            }

            function d(t, e) {
                if (f(t, e)) {
                    for (var n = t.className.split(" "), o = n.length - 1; o >= 0; o--) n[o] === e && n.splice(o, 1);
                    t.className = n.join(" ")
                }
            }

            function y(t, e) {
                Object.getOwnPropertyNames(e).forEach(function(n) {
                    var o = e[n];
                    null === o || "undefined" == typeof o || o === !1 ? t.removeAttribute(n) : t.setAttribute(n, o === !0 ? "" : o)
                })
            }

            function v(t) {
                var e, n, o, r, i;
                if (e = {}, n = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
                    o = t.attributes;
                    for (var s = o.length - 1; s >= 0; s--) r = o[s].name, i = o[s].value, ("boolean" == typeof t[r] || -1 !== n.indexOf("," + r + ",")) && (i = null !== i ? !0 : !1), e[r] = i
                }
                return e
            }

            function g() {
                w["default"].body.focus(), w["default"].onselectstart = function() {
                    return !1
                }
            }

            function m() {
                w["default"].onselectstart = function() {
                    return !0
                }
            }

            function b(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                    left: 0,
                    top: 0
                };
                var n = w["default"].documentElement,
                    o = w["default"].body,
                    r = n.clientLeft || o.clientLeft || 0,
                    i = x["default"].pageXOffset || o.scrollLeft,
                    s = e.left + i - r,
                    a = n.clientTop || o.clientTop || 0,
                    l = x["default"].pageYOffset || o.scrollTop,
                    u = e.top + l - a;
                return {
                    left: Math.round(s),
                    top: Math.round(u)
                }
            }

            function _(t, e) {
                var n = {},
                    o = b(t),
                    r = t.offsetWidth,
                    i = t.offsetHeight,
                    s = o.top,
                    a = o.left,
                    l = e.pageY,
                    u = e.pageX;
                return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (s - l + i) / i)), n.x = Math.max(0, Math.min(1, (u - a) / r)), n
            }
            n.__esModule = !0, n.getEl = s, n.createEl = a, n.insertElFirst = l, n.getElData = u, n.hasElData = c, n.removeElData = p, n.hasElClass = f, n.addElClass = h, n.removeElClass = d, n.setElAttributes = y, n.getElAttributes = v, n.blockTextSelection = g, n.unblockTextSelection = m, n.findElPosition = b, n.getPointerPosition = _;
            var j = i(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
                T = t("global/document"),
                w = r(T),
                k = t("global/window"),
                x = r(k),
                C = t("./guid.js"),
                O = o(C),
                E = t("./log.js"),
                S = r(E),
                P = t("tsml"),
                M = r(P),
                A = {},
                I = "vdata" + (new Date).getTime()
        }, {
            "./guid.js": 127,
            "./log.js": 128,
            "global/document": 1,
            "global/window": 2,
            tsml: 54
        }],
        124: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function i(t, e, n) {
                if (Array.isArray(e)) return p(i, t, e, n);
                var o = h.getElData(t);
                o.handlers || (o.handlers = {}), o.handlers[e] || (o.handlers[e] = []), n.guid || (n.guid = y.newGUID()), o.handlers[e].push(n), o.dispatcher || (o.disabled = !1, o.dispatcher = function(e, n) {
                    if (!o.disabled) {
                        e = u(e);
                        var r = o.handlers[e.type];
                        if (r)
                            for (var i = r.slice(0), s = 0, a = i.length; a > s && !e.isImmediatePropagationStopped(); s++) i[s].call(t, e, n)
                    }
                }), 1 === o.handlers[e].length && (t.addEventListener ? t.addEventListener(e, o.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, o.dispatcher))
            }

            function s(t, e, n) {
                if (h.hasElData(t)) {
                    var o = h.getElData(t);
                    if (o.handlers) {
                        if (Array.isArray(e)) return p(s, t, e, n);
                        var r = function(e) {
                            o.handlers[e] = [], c(t, e)
                        };
                        if (e) {
                            var i = o.handlers[e];
                            if (i) {
                                if (!n) return void r(e);
                                if (n.guid)
                                    for (var a = 0; a < i.length; a++) i[a].guid === n.guid && i.splice(a--, 1);
                                c(t, e)
                            }
                        } else
                            for (var l in o.handlers) r(l)
                    }
                }
            }

            function a(t, e, n) {
                var o = h.hasElData(t) ? h.getElData(t) : {},
                    r = t.parentNode || t.ownerDocument;
                if ("string" == typeof e && (e = {
                        type: e,
                        target: t
                    }), e = u(e), o.dispatcher && o.dispatcher.call(t, e, n), r && !e.isPropagationStopped() && e.bubbles === !0) a.call(null, r, e, n);
                else if (!r && !e.defaultPrevented) {
                    var i = h.getElData(e.target);
                    e.target[e.type] && (i.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), i.disabled = !1)
                }
                return !e.defaultPrevented
            }

            function l(t, e, n) {
                if (Array.isArray(e)) return p(l, t, e, n);
                var o = function r() {
                    s(t, e, r), n.apply(this, arguments)
                };
                o.guid = n.guid = n.guid || y.newGUID(), i(t, e, o)
            }

            function u(t) {
                function e() {
                    return !0
                }

                function n() {
                    return !1
                }
                if (!t || !t.isPropagationStopped) {
                    var o = t || g["default"].event;
                    t = {};
                    for (var r in o) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && o.preventDefault || (t[r] = o[r]));
                    if (t.target || (t.target = t.srcElement || b["default"]), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                            o.preventDefault && o.preventDefault(), t.returnValue = !1, o.returnValue = !1, t.defaultPrevented = !0
                        }, t.defaultPrevented = !1, t.stopPropagation = function() {
                            o.stopPropagation && o.stopPropagation(), t.cancelBubble = !0, o.cancelBubble = !0, t.isPropagationStopped = e
                        }, t.isPropagationStopped = n, t.stopImmediatePropagation = function() {
                            o.stopImmediatePropagation && o.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                        }, t.isImmediatePropagationStopped = n, null != t.clientX) {
                        var i = b["default"].documentElement,
                            s = b["default"].body;
                        t.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }
                return t
            }

            function c(t, e) {
                var n = h.getElData(t);
                0 === n.handlers[e].length && (delete n.handlers[e], t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && h.removeElData(t)
            }

            function p(t, e, n, o) {
                n.forEach(function(n) {
                    t(e, n, o)
                })
            }
            n.__esModule = !0, n.on = i, n.off = s, n.trigger = a, n.one = l, n.fixEvent = u;
            var f = t("./dom.js"),
                h = r(f),
                d = t("./guid.js"),
                y = r(d),
                v = t("global/window"),
                g = o(v),
                m = t("global/document"),
                b = o(m)
        }, {
            "./dom.js": 123,
            "./guid.js": 127,
            "global/document": 1,
            "global/window": 2
        }],
        125: [function(t, e, n) {
            "use strict";
            n.__esModule = !0;
            var o = t("./guid.js"),
                r = function(t, e, n) {
                    e.guid || (e.guid = o.newGUID());
                    var r = function() {
                        return e.apply(t, arguments)
                    };
                    return r.guid = n ? n + "_" + e.guid : e.guid, r
                };
            n.bind = r
        }, {
            "./guid.js": 127
        }],
        126: [function(t, e, n) {
            "use strict";

            function o(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? t : arguments[1];
                return function() {
                    var n = Math.floor(t % 60),
                        o = Math.floor(t / 60 % 60),
                        r = Math.floor(t / 3600),
                        i = Math.floor(e / 60 % 60),
                        s = Math.floor(e / 3600);
                    return (isNaN(t) || 1 / 0 === t) && (r = o = n = "-"), r = r > 0 || s > 0 ? r + ":" : "", o = ((r || i >= 10) && 10 > o ? "0" + o : o) + ":", n = 10 > n ? "0" + n : n, r + o + n
                }()
            }
            n.__esModule = !0, n["default"] = o, e.exports = n["default"]
        }, {}],
        127: [function(t, e, n) {
            "use strict";

            function o() {
                return r++
            }
            n.__esModule = !0, n.newGUID = o;
            var r = 1
        }, {}],
        128: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                var n = Array.prototype.slice.call(e),
                    o = function() {},
                    r = s["default"].console || {
                        log: o,
                        warn: o,
                        error: o
                    };
                t ? n.unshift(t.toUpperCase() + ":") : t = "log", a.history.push(n), n.unshift("VIDEOJS:"), r[t].apply ? r[t].apply(r, n) : r[t](n.join(" "))
            }
            n.__esModule = !0;
            var i = t("global/window"),
                s = o(i),
                a = function() {
                    r(null, arguments)
                };
            a.history = [], a.error = function() {
                r("error", arguments)
            }, a.warn = function() {
                r("warn", arguments)
            }, n["default"] = a, e.exports = n["default"]
        }, {
            "global/window": 2
        }],
        129: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
            }

            function i() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift({}), t.push(l), a["default"].apply(null, t), t[0]
            }
            n.__esModule = !0, n["default"] = i;
            var s = t("lodash-compat/object/merge"),
                a = o(s),
                l = function(t, e) {
                    return r(e) ? r(t) ? void 0 : i(e) : e
                };
            e.exports = n["default"]
        }, {
            "lodash-compat/object/merge": 40
        }],
        130: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("global/document"),
                i = o(r),
                s = function(t) {
                    var e = i["default"].createElement("style");
                    return e.className = t, e
                };
            n.createStyleElement = s;
            var a = function(t, e) {
                t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
            };
            n.setTextContent = a
        }, {
            "global/document": 1
        }],
        131: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                return Array.isArray(t) ? i(t) : void 0 === t || void 0 === e ? i() : i([
                    [t, e]
                ])
            }

            function i(t) {
                return void 0 === t || 0 === t.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: t.length,
                    start: s.bind(null, "start", 0, t),
                    end: s.bind(null, "end", 1, t)
                }
            }

            function s(t, e, n, o) {
                return void 0 === o && (u["default"].warn("DEPRECATED: Function '" + t + "' on 'TimeRanges' called without an index argument."), o = 0), a(t, o, n.length - 1), n[o][e]
            }

            function a(t, e, n) {
                if (0 > e || e > n) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is greater than or equal to the maximum bound (" + n + ").")
            }
            n.__esModule = !0, n.createTimeRanges = r;
            var l = t("./log.js"),
                u = o(l);
            n.createTimeRange = r
        }, {
            "./log.js": 128
        }],
        132: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            n.__esModule = !0, n["default"] = o, e.exports = n["default"]
        }, {}],
        133: [function(t, e, n) {
            "use strict";

            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var r = t("global/document"),
                i = o(r),
                s = t("global/window"),
                a = o(s),
                l = function(t) {
                    var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        n = i["default"].createElement("a");
                    n.href = t;
                    var o = "" === n.host && "file:" !== n.protocol,
                        r = void 0;
                    o && (r = i["default"].createElement("div"), r.innerHTML = '<a href="' + t + '"></a>', n = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), i["default"].body.appendChild(r));
                    for (var s = {}, a = 0; a < e.length; a++) s[e[a]] = n[e[a]];
                    return "https:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), o && i["default"].body.removeChild(r), s
                };
            n.parseUrl = l;
            var u = function(t) {
                if (!t.match(/^https?:\/\//)) {
                    var e = i["default"].createElement("div");
                    e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                }
                return t
            };
            n.getAbsoluteURL = u;
            var c = function(t) {
                if ("string" == typeof t) {
                    var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                        n = e.exec(t);
                    if (n) return n.pop().toLowerCase()
                }
                return ""
            };
            n.getFileExtension = c;
            var p = function(t) {
                var e = l(t),
                    n = a["default"].location,
                    o = ":" === e.protocol ? n.protocol : e.protocol,
                    r = o + e.host !== n.protocol + n.host;
                return r
            };
            n.isCrossOrigin = p
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        134: [function(e, n, o) {
            "use strict";

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0; {
                var s = e("global/document"),
                    a = i(s),
                    l = e("./setup"),
                    u = r(l),
                    c = e("./utils/stylesheet.js"),
                    p = r(c),
                    f = e("./component"),
                    h = i(f),
                    d = e("./event-target"),
                    y = i(d),
                    v = e("./utils/events.js"),
                    g = r(v),
                    m = e("./player"),
                    b = i(m),
                    _ = e("./plugins.js"),
                    j = i(_),
                    T = e("../../src/js/utils/merge-options.js"),
                    w = i(T),
                    k = e("./utils/fn.js"),
                    x = r(k),
                    C = e("./tracks/text-track.js"),
                    O = i(C),
                    E = e("object.assign"),
                    S = (i(E), e("./utils/time-ranges.js")),
                    P = e("./utils/format-time.js"),
                    M = i(P),
                    A = e("./utils/log.js"),
                    I = i(A),
                    F = e("./utils/dom.js"),
                    R = r(F),
                    D = e("./utils/browser.js"),
                    N = r(D),
                    L = e("./utils/url.js"),
                    B = r(L),
                    H = e("./extend.js"),
                    V = i(H),
                    U = e("lodash-compat/object/merge"),
                    q = i(U),
                    W = e("./utils/create-deprecation-proxy.js"),
                    z = i(W),
                    X = e("xhr"),
                    G = i(X),
                    $ = e("./tech/html5.js"),
                    Y = (i($), e("./tech/flash.js"));
                i(Y)
            }
            "undefined" == typeof HTMLVideoElement && (a["default"].createElement("video"), a["default"].createElement("audio"), a["default"].createElement("track"));
            var K = function Z(t, e, n) {
                    var o;
                    if ("string" == typeof t) {
                        if (0 === t.indexOf("#") && (t = t.slice(1)), Z.getPlayers()[t]) return e && I["default"].warn('Player "' + t + '" is already initialised. Options will not be applied.'), n && Z.getPlayers()[t].ready(n), Z.getPlayers()[t];
                        o = R.getEl(t)
                    } else o = t;
                    if (!o || !o.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                    return o.player || new b["default"](o, e, n)
                },
                J = a["default"].querySelector(".vjs-styles-defaults");
            if (!J) {
                J = p.createStyleElement("vjs-styles-defaults");
                var Q = a["default"].querySelector("head");
                Q.insertBefore(J, Q.firstChild), p.setTextContent(J, "\n    .video-js {\n      width: 300px;\n      height: 150px;\n    }\n\n    .vjs-fluid {\n      padding-top: 56.25%\n    }\n  ")
            }
            u.autoSetupTimeout(1, K), K.VERSION = "5.0.2", K.options = b["default"].prototype.options_, K.getPlayers = function() {
                return b["default"].players
            }, K.players = z["default"](b["default"].players, {
                get: "Access to videojs.players is deprecated; use videojs.getPlayers instead",
                set: "Modification of videojs.players is deprecated"
            }), K.getComponent = h["default"].getComponent, K.registerComponent = h["default"].registerComponent, K.browser = N, K.TOUCH_ENABLED = N.TOUCH_ENABLED, K.extend = V["default"], K.mergeOptions = w["default"], K.bind = x.bind, K.plugin = j["default"], K.addLanguage = function(t, e) {
                var n;
                return t = ("" + t).toLowerCase(), q["default"](K.options.languages, (n = {}, n[t] = e, n))[t]
            }, K.log = I["default"], K.createTimeRange = K.createTimeRanges = S.createTimeRanges, K.formatTime = M["default"], K.parseUrl = B.parseUrl, K.isCrossOrigin = B.isCrossOrigin, K.EventTarget = y["default"], K.on = g.on, K.one = g.one, K.off = g.off, K.trigger = g.trigger, K.xhr = G["default"], K.TextTrack = O["default"], "function" == typeof t && t.amd ? t("videojs", [], function() {
                return K
            }) : "object" == typeof o && "object" == typeof n && (n.exports = K), o["default"] = K, n.exports = o["default"]
        }, {
            "../../src/js/utils/merge-options.js": 129,
            "./component": 63,
            "./event-target": 95,
            "./extend.js": 96,
            "./player": 103,
            "./plugins.js": 104,
            "./setup": 106,
            "./tech/flash.js": 109,
            "./tech/html5.js": 110,
            "./tracks/text-track.js": 119,
            "./utils/browser.js": 120,
            "./utils/create-deprecation-proxy.js": 122,
            "./utils/dom.js": 123,
            "./utils/events.js": 124,
            "./utils/fn.js": 125,
            "./utils/format-time.js": 126,
            "./utils/log.js": 128,
            "./utils/stylesheet.js": 130,
            "./utils/time-ranges.js": 131,
            "./utils/url.js": 133,
            "global/document": 1,
            "lodash-compat/object/merge": 40,
            "object.assign": 45,
            xhr: 55
        }]
    }, {}, [134])(134)
}),
function(t) {
    var e = t.vttjs = {},
        n = e.VTTCue,
        o = e.VTTRegion,
        r = t.VTTCue,
        i = t.VTTRegion;
    e.shim = function() {
        e.VTTCue = n, e.VTTRegion = o
    }, e.restore = function() {
        e.VTTCue = r, e.VTTRegion = i
    }
}(this),
function(t, e) {
    function n(t) {
        if ("string" != typeof t) return !1;
        var e = a[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function o(t) {
        if ("string" != typeof t) return !1;
        var e = l[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) t[o] = n[o]
        }
        return t
    }

    function i(t, e, i) {
        var a = this,
            l = /MSIE\s8\.0/.test(navigator.userAgent),
            u = {};
        l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
        var c = "",
            p = !1,
            f = t,
            h = e,
            d = i,
            y = null,
            v = "",
            g = !0,
            m = "auto",
            b = "start",
            _ = 50,
            j = "middle",
            T = 50,
            w = "middle";
        return Object.defineProperty(a, "id", r({}, u, {
            get: function() {
                return c
            },
            set: function(t) {
                c = "" + t
            }
        })), Object.defineProperty(a, "pauseOnExit", r({}, u, {
            get: function() {
                return p
            },
            set: function(t) {
                p = !!t
            }
        })), Object.defineProperty(a, "startTime", r({}, u, {
            get: function() {
                return f
            },
            set: function(t) {
                if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                f = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "endTime", r({}, u, {
            get: function() {
                return h
            },
            set: function(t) {
                if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                h = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "text", r({}, u, {
            get: function() {
                return d
            },
            set: function(t) {
                d = "" + t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "region", r({}, u, {
            get: function() {
                return y
            },
            set: function(t) {
                y = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "vertical", r({}, u, {
            get: function() {
                return v
            },
            set: function(t) {
                var e = n(t);
                if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                v = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "snapToLines", r({}, u, {
            get: function() {
                return g
            },
            set: function(t) {
                g = !!t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "line", r({}, u, {
            get: function() {
                return m
            },
            set: function(t) {
                if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                m = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "lineAlign", r({}, u, {
            get: function() {
                return b
            },
            set: function(t) {
                var e = o(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                b = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "position", r({}, u, {
            get: function() {
                return _
            },
            set: function(t) {
                if (0 > t || t > 100) throw new Error("Position must be between 0 and 100.");
                _ = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "positionAlign", r({}, u, {
            get: function() {
                return j
            },
            set: function(t) {
                var e = o(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                j = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "size", r({}, u, {
            get: function() {
                return T
            },
            set: function(t) {
                if (0 > t || t > 100) throw new Error("Size must be between 0 and 100.");
                T = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "align", r({}, u, {
            get: function() {
                return w
            },
            set: function(t) {
                var e = o(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                w = e, this.hasBeenReset = !0
            }
        })), a.displayState = void 0, l ? a : void 0
    }
    var s = "auto",
        a = {
            "": !0,
            lr: !0,
            rl: !0
        },
        l = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
    i.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, t.VTTCue = t.VTTCue || i, e.VTTCue = i
}(this, this.vttjs || {}),
function(t, e) {
    function n(t) {
        if ("string" != typeof t) return !1;
        var e = i[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function o(t) {
        return "number" == typeof t && t >= 0 && 100 >= t
    }

    function r() {
        var t = 100,
            e = 3,
            r = 0,
            i = 100,
            s = 0,
            a = 100,
            l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!o(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(t) {
                    if (!o(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    i = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!o(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    r = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!o(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if (!o(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = n(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e
                }
            }
        })
    }
    var i = {
        "": !0,
        up: !0
    };
    t.VTTRegion = t.VTTRegion || r, e.VTTRegion = r
}(this, this.vttjs || {}),
function(t) {
    function e(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function n(t) {
        function e(t, e, n, o) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | o) / 1e3
        }
        var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
    }

    function o() {
        this.values = d(null)
    }

    function r(t, e, n, o) {
        var r = o ? t.split(o) : [t];
        for (var i in r)
            if ("string" == typeof r[i]) {
                var s = r[i].split(n);
                if (2 === s.length) {
                    var a = s[0],
                        l = s[1];
                    e(a, l)
                }
            }
    }

    function i(t, i, s) {
        function a() {
            var o = n(t);
            if (null === o) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + c);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), o
        }

        function l(t, e) {
            var n = new o;
            r(t, function(t, e) {
                switch (t) {
                    case "region":
                        for (var o = s.length - 1; o >= 0; o--)
                            if (s[o].id === e) {
                                n.set(t, s[o].region);
                                break
                            }
                        break;
                    case "vertical":
                        n.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        var r = e.split(","),
                            i = r[0];
                        n.integer(t, i), n.percent(t, i) ? n.set("snapToLines", !1) : null, n.alt(t, i, ["auto"]), 2 === r.length && n.alt("lineAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case "position":
                        r = e.split(","), n.percent(t, r[0]), 2 === r.length && n.alt("positionAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case "size":
                        n.percent(t, e);
                        break;
                    case "align":
                        n.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), e.line = n.get("line", "auto"), e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", "middle"), e.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align), e.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }

        function u() {
            t = t.replace(/^\s+/, "")
        }
        var c = t;
        if (u(), i.startTime = a(), u(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
        t = t.substr(3), u(), i.endTime = a(), u(), l(t, i)
    }

    function s(t, e) {
        function o() {
            function t(t) {
                return e = e.substr(t.length), t
            }
            if (!e) return null;
            var n = e.match(/^([^<]*)(<[^>]+>?)?/);
            return t(n[1] ? n[1] : n[2])
        }

        function r(t) {
            return y[t]
        }

        function i(t) {
            for (; d = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(d[0], r);
            return t
        }

        function s(t, e) {
            return !m[e.localName] || m[e.localName] === t.localName
        }

        function a(e, n) {
            var o = v[e];
            if (!o) return null;
            var r = t.document.createElement(o);
            r.localName = o;
            var i = g[e];
            return i && n && (r[i] = n.trim()), r
        }
        for (var l, u = t.document.createElement("div"), c = u, p = []; null !== (l = o());)
            if ("<" !== l[0]) c.appendChild(t.document.createTextNode(i(l)));
            else {
                if ("/" === l[1]) {
                    p.length && p[p.length - 1] === l.substr(2).replace(">", "") && (p.pop(), c = c.parentNode);
                    continue
                }
                var f, h = n(l.substr(1, l.length - 2));
                if (h) {
                    f = t.document.createProcessingInstruction("timestamp", h), c.appendChild(f);
                    continue
                }
                var d = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!d) continue;
                if (f = a(d[1], d[3]), !f) continue;
                if (!s(c, f)) continue;
                d[2] && (f.className = d[2].substr(1).replace(".", " ")), p.push(d[1]), c.appendChild(f), c = f
            }
        return u
    }

    function a(t) {
        function e(t, e) {
            for (var n = e.childNodes.length - 1; n >= 0; n--) t.push(e.childNodes[n])
        }

        function n(t) {
            if (!t || !t.length) return null;
            var o = t.pop(),
                r = o.textContent || o.innerText;
            if (r) {
                var i = r.match(/^.*(\n|\r)/);
                return i ? (t.length = 0, i[0]) : r
            }
            return "ruby" === o.tagName ? n(t) : o.childNodes ? (e(t, o), n(t)) : void 0
        }
        var o, r = [],
            i = "";
        if (!t || !t.childNodes) return "ltr";
        for (e(r, t); i = n(r);)
            for (var s = 0; s < i.length; s++) {
                o = i.charCodeAt(s);
                for (var a = 0; a < b.length; a++)
                    if (b[a] === o) return "rtl"
            }
        return "ltr"
    }

    function l(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, n = e.textTrackList, o = 0, r = 0; r < n.length && n[r] !== e; r++) "showing" === n[r].mode && o++;
        return -1 * ++o
    }

    function u() {}

    function c(t, e, n) {
        var o = /MSIE\s8\.0/.test(navigator.userAgent),
            r = "rgba(255, 255, 255, 1)",
            i = "rgba(0, 0, 0, 0.8)";
        o && (r = "rgb(255, 255, 255)", i = "rgb(0, 0, 0)"), u.call(this), this.cue = e, this.cueDiv = s(t, e.text);
        var l = {
            color: r,
            backgroundColor: i,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        o || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: n.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, o || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var c = 0;
        switch (e.positionAlign) {
            case "start":
                c = e.position;
                break;
            case "middle":
                c = e.position - e.size / 2;
                break;
            case "end":
                c = e.position - e.size
        }
        this.applyStyles("" === e.vertical ? {
            left: this.formatStyle(c, "%"),
            width: this.formatStyle(e.size, "%")
        } : {
            top: this.formatStyle(c, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function p(t) {
        var e, n, o, r, i = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            n = t.div.offsetHeight, o = t.div.offsetWidth, r = t.div.offsetTop;
            var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || r, this.height = t.height || n, this.bottom = t.bottom || r + (t.height || n), this.width = t.width || o, this.lineHeight = void 0 !== e ? e : t.lineHeight, i && !this.lineHeight && (this.lineHeight = 13)
    }

    function f(t, e, n, o) {
        function r(t, e) {
            for (var r, i = new p(t), s = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(n, e[a]) || t.within(n) && t.overlapsAny(o);) t.move(e[a]);
                if (t.within(n)) return t;
                var l = t.intersectPercentage(n);
                s > l && (r = new p(t), s = l), t = new p(i)
            }
            return r || i
        }
        var i = new p(e),
            s = e.cue,
            a = l(s),
            u = [];
        if (s.snapToLines) {
            var c;
            switch (s.vertical) {
                case "":
                    u = ["+y", "-y"], c = "height";
                    break;
                case "rl":
                    u = ["+x", "-x"], c = "width";
                    break;
                case "lr":
                    u = ["-x", "+x"], c = "width"
            }
            var f = i.lineHeight,
                h = f * Math.round(a),
                d = n[c] + f,
                y = u[0];
            Math.abs(h) > d && (h = 0 > h ? -1 : 1, h *= Math.ceil(d / f) * f), 0 > a && (h += "" === s.vertical ? n.height : n.width, u = u.reverse()), i.move(y, h)
        } else {
            var v = i.lineHeight / n.height * 100;
            switch (s.lineAlign) {
                case "middle":
                    a -= v / 2;
                    break;
                case "end":
                    a -= v
            }
            switch (s.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(a, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(a, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(a, "%")
                    })
            }
            u = ["+y", "-x", "+x", "-y"], i = new p(e)
        }
        var g = r(i, u);
        e.move(g.toCSSCompatValues(n))
    }

    function h() {}
    var d = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();
    e.prototype = d(Error.prototype), e.prototype.constructor = e, e.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, o.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, n) {
            return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, n) {
            for (var o = 0; o < n.length; ++o)
                if (e === n[o]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            var n;
            return (n = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && 100 >= e) ? (this.set(t, e), !0) : !1
        }
    };
    var y = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        v = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        g = {
            v: "title",
            lang: "lang"
        },
        m = {
            rt: "ruby"
        },
        b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    u.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
    }, u.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }, c.prototype = d(u.prototype), c.prototype.constructor = c, p.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, p.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, p.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, p.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, p.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, p.prototype.intersectPercentage = function(t) {
        var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
            n = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
            o = e * n;
        return o / (this.height * this.width)
    }, p.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, p.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            o = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
        var r = {
            left: t.left,
            right: t.right,
            top: t.top || o,
            height: t.height || e,
            bottom: t.bottom || o + (t.height || e),
            width: t.width || n
        };
        return r
    }, h.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, h.convertCueToDOMTree = function(t, e) {
        return t && e ? s(t, e) : null
    };
    var _ = .05,
        j = "sans-serif",
        T = "1.5%";
    h.processCues = function(t, e, n) {
        function o(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState) return !0;
            return !1
        }
        if (!t || !e || !n) return null;
        for (; n.firstChild;) n.removeChild(n.firstChild);
        var r = t.document.createElement("div");
        if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = T, n.appendChild(r), o(e)) {
            var i = [],
                s = p.getSimpleBoxPosition(r),
                a = Math.round(s.height * _ * 100) / 100,
                l = {
                    font: a + "px " + j
                };
            ! function() {
                for (var n, o, a = 0; a < e.length; a++) o = e[a], n = new c(t, o, l), r.appendChild(n.div), f(t, n, s, i), o.displayState = n.div, i.push(p.getSimpleBoxPosition(n))
            }()
        } else
            for (var u = 0; u < e.length; u++) r.appendChild(e[u].displayState)
    }, h.Parser = function(t, e, n) {
        n || (n = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
    }, h.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof e)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function n() {
                for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                var n = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), n
            }

            function s(t) {
                var e = new o;
                if (r(t, function(t, n) {
                        switch (t) {
                            case "id":
                                e.set(t, n);
                                break;
                            case "width":
                                e.percent(t, n);
                                break;
                            case "lines":
                                e.integer(t, n);
                                break;
                            case "regionanchor":
                            case "viewportanchor":
                                var r = n.split(",");
                                if (2 !== r.length) break;
                                var i = new o;
                                if (i.percent("x", r[0]), i.percent("y", r[1]), !i.has("x") || !i.has("y")) break;
                                e.set(t + "X", i.get("x")), e.set(t + "Y", i.get("y"));
                                break;
                            case "scroll":
                                e.alt(t, n, ["up"])
                        }
                    }, /=/, /\s/), e.has("id")) {
                    var n = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                    n.width = e.get("width", 100), n.lines = e.get("lines", 3), n.regionAnchorX = e.get("regionanchorX", 0), n.regionAnchorY = e.get("regionanchorY", 100), n.viewportAnchorX = e.get("viewportanchorX", 0), n.viewportAnchorY = e.get("viewportanchorY", 100), n.scroll = e.get("scroll", ""), l.onregion && l.onregion(n), l.regionList.push({
                        id: e.get("id"),
                        region: n
                    })
                }
            }

            function a(t) {
                r(t, function(t, e) {
                    switch (t) {
                        case "Region":
                            s(e)
                    }
                }, /:/)
            }
            var l = this;
            t && (l.buffer += l.decoder.decode(t, {
                stream: !0
            }));
            try {
                var u;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    u = n();
                    var c = u.match(/^WEBVTT([ \t].*)?$/);
                    if (!c || !c[0]) throw new e(e.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var p = !1; l.buffer;) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    switch (p ? p = !1 : u = n(), l.state) {
                        case "HEADER":
                            /:/.test(u) ? a(u) : u || (l.state = "ID");
                            continue;
                        case "NOTE":
                            u || (l.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(u)) {
                                l.state = "NOTE";
                                break
                            }
                            if (!u) continue;
                            if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === u.indexOf("-->")) {
                                l.cue.id = u;
                                continue
                            }
                        case "CUE":
                            try {
                                i(u, l.cue, l.regionList)
                            } catch (f) {
                                l.reportOrThrowError(f), l.cue = null, l.state = "BADCUE";
                                continue
                            }
                            l.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var h = -1 !== u.indexOf("-->");
                            if (!u || h && (p = !0)) {
                                l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                continue
                            }
                            l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                            continue;
                        case "BADCUE":
                            u || (l.state = "ID");
                            continue
                    }
                }
            } catch (f) {
                l.reportOrThrowError(f), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
            } catch (n) {
                t.reportOrThrowError(n)
            }
            return t.onflush && t.onflush(), this
        }
    }, t.WebVTT = h
}(this, this.vttjs || {});
! function() {
    videojs.plugin("playlist", function(e) {
        for (var t = this.el().id, a = document.querySelectorAll("#" + t + "-vjs-playlist .vjs-track"), n = a.length, r = this, c = a[0], i = 0, o = !0, s = e.onTrackSelected, u = 0; n > u; u++) a[u].onclick = function() {
            d(this)
        };
        ("undefined" == typeof e.continuous || 1 == e.continuous) && r.on("ended", function() {
            i++, i >= n && (i = 0), a[i].click()
        });
        var d = function(t) {
            var c = t.getAttribute("data-src");
            i = parseInt(t.getAttribute("data-index")) || i, r.src("youtube" == r.techName ? [{
                type: type = "video/youtube",
                src: c
            }] : "AUDIO" == r.el().firstChild.tagName || "undefined" != typeof e.mediaType && "audio" == e.mediaType ? [{
                type: "audio/mp4",
                src: c + ".m4a"
            }, {
                type: "audio/webm",
                src: c + ".webm"
            }, {
                type: type = "video/youtube",
                src: c
            }, {
                type: "audio/ogg",
                src: c + ".ogg"
            }] : [{
                type: "video/mp4",
                src: c + ".mp4"
            }, {
                type: type = "video/youtube",
                src: c
            }, {
                type: "video/webm",
                src: c + ".webm"
            }]), o && r.play();
            for (var u = 0; n > u; u++) - 1 !== a[u].className.indexOf("currentTrack") && (a[u].className = a[u].className.replace(/\bcurrentTrack\b/, "nonPlayingTrack"));
            t.className = t.className + " currentTrack", "function" == typeof s && s.apply(t)
        };
        if ("undefined" != typeof e.setTrack && (e.setTrack = parseInt(e.setTrack), c = a[e.setTrack], i = e.setTrack, o = !1, d(a[i]), o = !0), window.location.hash) {
            var p = window.location.hash.substring(9);
            o = !1, d(a[p])
        }
        var y = {
            tracks: a,
            trackCount: n,
            play: function() {
                return o
            },
            index: function() {
                return i
            },
            prev: function() {
                var e = i - 1;
                (0 > e || e > n) && (e = 0), d(a[e])
            },
            next: function() {
                var e = i + 1;
                (0 > e || e > n) && (e = 0), d(a[e])
            }
        };
        return y
    })
}();
! function(e) {
    "use strict";
    var t = function() {
            var t = e(".js-header-fixed"),
                n = e('<div class="header-fixed-wrapper">'),
                i = {};
            i.isPresent = function() {
                return t.length
            }, i.isOver = function() {
                return t.hasClass("header-over")
            }, i.getHeight = function() {
                return t.outerHeight()
            }, i.getOffset = function() {
                return i.isPresent() ? i.getHeight() : 0
            };
            var a = function(n) {
                    0 === e(window).scrollTop() ? t.removeClass("header-fixed").addClass(n) : t.addClass("header-fixed").removeClass(n)
                },
                o = function() {
                    if (i.isOver()) {
                        var o = "";
                        t.hasClass("large") ? o = "large" : t.hasClass("small") && (o = "small"), a(o), e(window).scroll(function() {
                            a(o)
                        })
                    } else t.wrap(n.height(t.outerHeight())), t.addClass("header-fixed")
                };
            return i.isPresent() && o(), i
        }(),
        n = function(e) {
            var t = "",
                n = "cut" === e ? "X" : "C";
            return t = /iPhone|iPad/i.test(navigator.userAgent) ? "no support :(" : /Mac/i.test(navigator.userAgent) ? "press ⌘-" + n + " to " + e : "press Ctrl-" + n + " to " + e
        };
    ! function() {
        var t = new Clipboard(".js-copy-to-clipboard", {
            target: function(t) {
                return e(t).parent().find(".js-code")[0]
            }
        });
        t.on("success", function(t) {
            t.clearSelection(), e(t.trigger).text("copied"), setTimeout(function() {
                e(t.trigger).text("copy")
            }, 700)
        }), t.on("error", function(t) {
            e(t.trigger).text(n(t.action)).addClass("copy-code-error"), setTimeout(function() {
                e(t.trigger).text("copy").removeClass("copy-code-error")
            }, 1400)
        })
    }(),
    function() {
        e(".js-file-tree").each(function() {
            var t = e(this),
                n = t.data("expanded");
            t.treeView(), n === !0 && t.treeView("expandAll"), e(".js-expand", t.parent()).click(function() {
                t.treeView("expandAll")
            }), e(".js-collapse", t.parent()).click(function() {
                t.treeView("collapseAll")
            })
        })
    }(),
    function() {
        e(".js-file-tree-text").each(function() {
            var t = ".file-tree-text-folder",
                n = ".file-tree-text-name",
                i = e(this),
                a = "│&nbsp;&nbsp;&nbsp;",
                o = "├──&nbsp;",
                s = function(e) {
                    for (var t = "", n = 0; e > n; n++) t += n === e - 1 ? o : a;
                    return t
                };
            i.find("li").each(function() {
                var i = e(this).parents(t).length;
                e(this).children(n).first().prepend(s(i))
            })
        })
    }(),
    function() {
        e(".js-open-modal").click(function(t) {
            t.preventDefault();
            var n = e(this),
                i = e(n.data("target")),
                a = n.data("config"),
                o = {
                    closeClass: "js-close-modal-button"
                };
            e.extend(o, a), i.bPopup(o)
        })
    }(),
    function() {
        e(window).load(function() {
            e(".js-ba").twentytwenty()
        })
    }(),
    function() {
        var t = e(".js-accordion");
        t.each(function() {
            var t = e(this),
                n = t.find(".accordion-title");
            n.click(function(t) {
                t.preventDefault();
                var n = e(this),
                    i = n.closest(".accordion-item"),
                    a = e(".accordion-description", i);
                a.hasClass("active") ? (i.removeClass("active"), a.stop().slideUp().removeClass("active")) : (i.addClass("active"), a.stop().slideDown().addClass("active"))
            })
        })
    }(),
    function() {
        var t = e(".js-faq-filter"),
            n = e(".js-faq");
        t.each(function() {
            var t = e(this),
                n = t.find("input"),
                i = t.data("target");
            "undefined" != typeof i && n.fastLiveFilter(i, {
                selector: e(i).find(".faq-question")
            })
        }), n.each(function() {
            var t = e(this),
                n = t.find(".faq-question");
            n.click(function(t) {
                t.preventDefault();
                var n = e(this),
                    i = n.closest(".faq-item"),
                    a = e(".faq-answer", i);
                a.hasClass("active") ? (n.removeClass("active"), a.stop().slideUp().removeClass("active")) : (n.addClass("active"), a.stop().slideDown().addClass("active"))
            })
        })
    }(),
    function() {
        var t = e(".js-steps-interactive");
        t.each(function() {
            var n = e(this),
                i = {
                    headerTag: "h4",
                    transitionEffect: "fade",
                    enableAllSteps: !0,
                    labels: {
                        current: ""
                    }
                },
                a = n.data("config");
            e.extend(!0, i, a), t.steps(i)
        })
    }(),
    function() {
        var t = e(".js-tabs");
        t.each(function() {
            var t = e(this),
                n = {
                    headerTag: "h4",
                    bodyTag: "div",
                    titleTemplate: "#title#",
                    transitionEffect: "fade",
                    enableFinishButton: !1,
                    enablePagination: !1,
                    enableAllSteps: !0,
                    labels: {
                        current: ""
                    }
                },
                i = t.data("config");
            e.extend(!0, n, i), t.steps(n)
        })
    }(),
    function() {
        e("body").fitVids()
    }(),
    function() {
        var t = e(".js-video-advanced");
        t.each(function() {
            var t = e(this),
                n = {
                    apiKey: t.data("api")
                },
                i = t.data("config");
            e.extend(!0, n, i), t.ytv(n), t.removeAttr("data-api")
        })
    }(),
    function() {
        var t = e(".js-menu");
        t.each(function() {
            var t = e(this),
                n = {
                    label: "",
                    prependTo: t.parent(),
                    closedSymbol: "&#xf054",
                    openedSymbol: "&#xf078",
                    allowParentLinks: !0
                },
                i = t.data("config");
            e.extend(!0, n, i), t.slicknav(n), t.superfish({
                delay: 300,
                autoArrows: !1,
                speed: "fast",
                disableHI: !0
            }), t.hasClass("menu-light") && e(".slicknav_menu").addClass("menu-light"), e("body").click(function() {
                e(".slicknav_btn").hasClass("slicknav_open") && t.slicknav("close")
            }), e(".slicknav_btn, .slicknav_nav").on("click", function(e) {
                e.stopPropagation()
            })
        })
    }(),
    function() {
        var t = "left",
            n = e(".js-menu-side");
        n.length && ("right" === n.data("position") && (t = "right"), n.sidr({
            source: ".js-menu-side-content",
            side: t
        }), e(".page").click(function() {
            e("#sidr").is(":visible") && e.sidr("close")
        }), n.click(function(e) {
            e.stopPropagation()
        }))
    }();
    var i = function() {
        if (!t.isPresent()) {
            var n = e(".js-sidebar-fixed"),
                i = 30,
                a = {};
            return a.updateSidebarWidth = function(e) {
                e && e.outerWidth(e.parent().outerWidth())
            }, a.updateFixedSidebar = function(t) {
                var n = e(window).scrollTop(),
                    o = t.closest(".js-layout"),
                    s = o.outerHeight(),
                    r = o.offset().top - i,
                    c = t.outerHeight(),
                    l = n + c - s - r;
                t.closest(".js-sidebar-wrapper").height(t.outerHeight()), n > r && 0 >= l ? (t.addClass("sidebar-is-fixed").removeClass("sidebar-is-bottom"), a.updateSidebarWidth(t)) : n > r && l > 0 ? (t.removeClass("sidebar-is-fixed").addClass("sidebar-is-bottom"), a.updateSidebarWidth(t)) : t.removeClass("sidebar-is-fixed sidebar-is-bottom")
            }, n.each(function() {
                var t, n = e(this);
                n.wrap('<div class="js-sidebar-wrapper">'), a.updateFixedSidebar(n), a.updateSidebarWidth(n), e(window).on("resize", function() {
                    clearTimeout(t), t = setTimeout(function() {
                        n.is(":visible") && (a.updateSidebarWidth(n), a.updateFixedSidebar(n))
                    }, 250)
                }), e(window).scroll(function() {
                    n.is(":visible") && a.updateFixedSidebar(n)
                })
            }), a
        }
    }();
    ! function() {
        var t = e(".js-menu-vertical");
        t.each(function() {
            var t = e(this),
                n = t.data("prepend-to"),
                a = t.data("select");
            t.find("li").each(function() {
                e(this).has("ul").length && e(this).addClass("has-children")
            }), t.tendina({
                animate: !1,
                activeMenu: ".selected",
                openCallback: function() {
                    i && i.updateFixedSidebar(t.closest(".js-sidebar-fixed"))
                }
            }), t.ReSmenu({
                maxWidth: 974,
                prependTo: n,
                menuClass: "vertical-menu-select",
                selectId: "vertical-menu-dropdown",
                activeClass: "selected",
                selectOption: a
            })
        })
    }(),
    function() {
        var t = e(".js-search-minimal-icon");
        t.each(function() {
            var t = e(this),
                n = t.closest(".js-search-minimal"),
                i = n.find(".js-search-minimal-input");
            t.click(function() {
                i.is(":visible") ? i.fadeOut("fast") : (i.fadeIn("fast"), e("input", i).focus())
            })
        })
    }(),
    function() {
        var t = e(".js-scroll-top");
        t.click(function(t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: "0px"
            })
        })
    }(),
    function() {
        function t() {
            a = e(window).height(), i.outerHeight(a)
        }
        var n, i = e(".js-full-page"),
            a = e(window).height();
        i.outerHeight(a), window.onresize = function() {
            clearTimeout(n), n = setTimeout(t, 100)
        }
    }(),
    function() {
        var n = e(".js-scroll-to");
        n.each(function() {
            var n = e(this),
                i = n.data("target"),
                a = n.data("speed") ? n.data("speed") : 1e3;
            "undefined" != typeof i && e(i).length && n.click(function(n) {
                n.preventDefault(), e("html, body").animate({
                    scrollTop: e(i).first().offset().top - t.getOffset()
                }, a)
            })
        })
    }(),
    function() {
        var t = e(".js-docs-version"),
            n = t.find(".js-docs-current-version"),
            i = t.find(".js-docs-version-list");
        t.length && (n.click(function(e) {
            e.preventDefault(), e.stopPropagation(), i.is(":visible") ? i.fadeOut("fast") : i.fadeIn("fast")
        }), e("body").click(function() {
            i.is(":visible") && i.fadeOut("fast")
        }))
    }(),
    function() {
        var t = e(".js-note");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-close");
            n.click(function(e) {
                e.preventDefault(), t.fadeOut()
            })
        })
    }(),
    function() {
        var t = e(".js-grid-view"),
            n = t.find(".js-grid-view-elem");
        n.responsiveEqualHeightGrid()
    }(),
    function() {
        var t = e(".js-steps-slider");
        t.owlCarousel({
            items: 1,
            margin: 5,
            nav: !0,
            navText: ["&#xf104;", "&#xf105;"],
            navSpeed: 600,
            dragEndSpeed: 600
        })
    }(),
    function() {
        var t = e(".js-gif-player");
        t.gifplayer({
            label: "&#xf04b;"
        })
    }(),
    function() {
        var t = e(".js-rotator");
        t.Morphext({
            animation: "bounceIn",
            separator: ",",
            speed: 2e3
        })
    }(),
    function() {
        var t = e(".js-notification");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-close");
            n.click(function(e) {
                e.preventDefault(), t.slideUp(500)
            })
        })
    }(),
    function() {
        var t = e(".js-languages");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-languages-list");
            t.mouseenter(function() {
                n.stop().fadeIn()
            }).mouseleave(function() {
                n.stop().fadeOut()
            })
        })
    }(),
    function() {
        var t = e(".js-parallax");
        t.each(function() {
            var t = e(this),
                n = t.outerHeight(),
                i = .4 * n;
            t.css("background-size", "120%"), e(window).scroll(function() {
                var a = e(window).scrollTop(),
                    o = t.offset().top + n,
                    s = 100 * a / n,
                    r = -(i * s) / 100;
                o > a && t.css("background-position", "center " + r + "px")
            })
        })
    }(),
    function() {
        var t = e(".js-animate-number"),
            n = function(t) {
                if (t.data("animated") !== !0) {
                    var n = e(window).scrollTop() + e(window).outerHeight(),
                        i = t.offset().top + t.outerHeight();
                    n > i && (t.data("animated", !0), t.animateNumbers(t.data("number"), !1, 2e3, "swing"))
                }
            };
        t.each(function() {
            var t = e(this);
            n(t), e(window).scroll(function() {
                n(t)
            })
        })
    }(),
    function() {
        e("input, textarea").placeholder()
    }(),
    function() {
        var t = e(".js-info");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-info-close");
            n.click(function(e) {
                e.preventDefault(), t.slideUp()
            })
        })
    }(),
    function() {
        var t = e(".js-changelog");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-changelog-item"),
                i = t.find(".js-changelog-input").instaFilta({
                    scope: ".js-changelog",
                    targets: ".js-changelog-update-description"
                }),
                a = t.find(".js-changelog-checkbox");
            n.each(function() {
                var t = e(this),
                    n = t.find(".js-changelog-switch"),
                    i = t.find(".js-changelog-file-filter"),
                    a = t.find(".js-changelog-files-scope").instaFilta({
                        targets: ".js-changelog-file",
                        scope: ".js-changelog-files-scope"
                    });
                i.click(function() {
                    var t = [];
                    e(this).toggleClass("inactive"), i.each(function() {
                        e(this).hasClass("inactive") || t.push(e(this).data("type"))
                    }), a.filterCategory(t)
                }), n.click(function(e) {
                    e.preventDefault(), t.toggleClass("changelog-view-files")
                })
            }), a.on("change", function() {
                var t = [];
                a.each(function() {
                    e(this).prop("checked") && t.push(e(this).val())
                }), i.filterCategory(t)
            })
        })
    }(),
    function() {
        var t = e(".js-video-playlist");
        t.each(function() {
            var t = e(this),
                n = t.attr("id"),
                i = t.data("config");
            videojs(n, {
                controlBar: {
                    fullscreenToggle: !1
                }
            }).ready(function() {
                var e = this,
                    t = null;
                t = i ? e.playlist(i) : e.playlist(), e.controlBar.addChild("button").addClass("vjs-prev-button").on("click", function() {
                    t.prev()
                }), e.controlBar.addChild("button").addClass("vjs-next-button").on("click", function() {
                    t.next()
                }), e.controlBar.addChild("fullscreenToggle")
            })
        }), e(".js-video-playlist-item-download").click(function(e) {
            e.stopPropagation()
        })
    }(),
    function() {
        e(".js-video-trigger").click(function(t) {
            t.preventDefault();
            var n = e(this),
                i = n.data("video"),
                a = e(".js-video-trigger-modal-content");
            e(".js-video-trigger-modal").bPopup({
                onOpen: function() {
                    a.html(i || "")
                },
                onClose: function() {
                    a.empty()
                }
            })
        });
        var t = e(this),
            n = e(".content");
        e("element_to_pop_up").bPopup({
            onOpen: function() {
                n.html(t.data("bpopup") || "")
            },
            onClose: function() {
                n.empty()
            }
        })
    }(),
    function() {
        var n = new Clipboard(".js-fragment-identifier", {
            text: function(t) {
                return window.location.host + window.location.pathname + e(t).attr("href")
            }
        });
        n.on("success", function(t) {
            t.clearSelection(), e(t.trigger).addClass("fragment-identifier-copied"), setTimeout(function() {
                e(t.trigger).removeClass("fragment-identifier-copied")
            }, 1e3)
        }), n.on("error", function(t) {
            e(t.trigger).addClass("fragment-identifier-error"), setTimeout(function() {
                e(t.trigger).removeClass("fragment-identifier-error")
            }, 1400)
        }), e(".js-fragment-identifier").click(function(n) {
            n.preventDefault();
            var i = e(this),
                a = i.attr("href");
            i.hasClass("fragment-identifier-scroll") && e("html, body").animate({
                scrollTop: e(a).offset().top - t.getOffset()
            }, 500)
        })
    }(),
    function() {
        var t = e("#js-contact-form");
        if (t.length) {
            var n = function(t) {
                var n = t.attr("action"),
                    i = t.serialize(),
                    a = e(".js-contacts-success");
                return e.ajax({
                    url: n,
                    type: "POST",
                    data: i,
                    success: function() {
                        t.find("input:text, textarea").val(""), a.fadeIn().delay(2e3).fadeOut()
                    }
                }), !1
            };
            e.validate({
                form: t,
                onSuccess: n
            })
        }
    }(),
    function() {
        var t, n = e(".js-footer-is-fixed"),
            i = e(".js-page"),
            a = function() {
                var e = n.outerHeight();
                i.css("padding-bottom", e + "px")
            };
        n.length && (n.addClass("footer-is-fixed"), a(), e(window).on("resize", function() {
            clearTimeout(t), t = setTimeout(function() {
                a()
            }, 250)
        }))
    }(),
    function() {
        if (e(".js-video-background").length) {
            var t = e(".js-video-background"),
                n = t.data("video");
            t.vide(n, {
                posterType: "jpg",
                bgColor: "#000"
            })
        }
    }(),
    function() {
        var t = e(".js-custom-scrollbar");
        t.each(function() {
            var t, n, i = e(this);
            i.jScrollPane({
                mouseWheelSpeed: 40
            }), n = i.data("jsp"), e(window).on("resize", function() {
                clearTimeout(t), t = setTimeout(function() {
                    n.reinitialise()
                }, 250)
            })
        })
    }(),
    function() {
        var n = e(".js-one-page-nav");
        n.each(function() {
            var n = e(this);
            n.onePageNav({
                currentClass: "is-active",
                filter: ":not(.is-external)",
                scrollOffset: t.getOffset()
            })
        })
    }(),
    function() {
        var t = e(".js-rate-wrapper");
        t.each(function() {
            var t = e(this),
                n = t.find(".js-rate"),
                i = t.find(".js-rate-current");
            n.rating({
                extendSymbol: function() {
                    e(this).on("rating.rateenter", function(e, t) {
                        i.text(t)
                    }).on("rating.rateleave", function() {
                        i.text(n.val() ? n.val() : "-")
                    })
                }
            })
        })
    }(),
    function() {
        var t = e(".js-preloader"),
            n = e(".js-preload-me").length;
        n && e(window).load(function() {
            t.fadeOut("slow", function() {
                e(this).remove()
            })
        })
    }()
}(jQuery);