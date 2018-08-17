!
function(e, t) {
    "use strict";
    function n(e) {
        var t = e.length,
        n = se.type(e);
        return se.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = we[e] = {};
        return se.each(e.match(le) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (se.acceptData(e)) {
            var o, a, s = se.expando,
            u = "string" == typeof n,
            l = e.nodeType,
            c = l ? se.cache: e,
            f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.pop() || se.guid++:f = s),
            c[f] || (c[f] = {},
            l || (c[f].toJSON = se.noop)),
            ("object" == typeof n || "function" == typeof n) && (i ? c[f] = se.extend(c[f], n) : c[f].data = se.extend(c[f].data, n)),
            o = c[f],
            i || (o.data || (o.data = {}), o = o.data),
            r !== t && (o[se.camelCase(n)] = r),
            u ? (a = o[n], null == a && (a = o[se.camelCase(n)])) : a = o,
            a
        }
    }
    function o(e, t, n) {
        if (se.acceptData(e)) {
            var r, i, o, a = e.nodeType,
            u = a ? se.cache: e,
            l = a ? e[se.expando] : se.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    se.isArray(t) ? t = t.concat(se.map(t, se.camelCase)) : t in r ? t = [t] : (t = se.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                    if (! (n ? s: se.isEmptyObject)(r)) return
                } (n || (delete u[l].data, s(u[l]))) && (a ? se.cleanData([e], !0) : se.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: Te.test(r) ? se.parseJSON(r) : r
                } catch(o) {}
                se.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !se.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (t = t || 0, se.isFunction(t)) return se.grep(e,
        function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return se.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = se.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (We.test(t)) return se.filter(t, r, !n);
            t = se.filter(t, r)
        }
        return se.grep(e,
        function(e) {
            return se.inArray(e, t) >= 0 === n
        })
    }
    function p(e) {
        var t = ze.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function g(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) se._data(n, "globalEval", !t || se._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && se.hasData(e)) {
            var n, r, i, o = se._data(e),
            a = se._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) se.event.add(t, n, s[n][r])
            }
            a.data && (a.data = se.extend({},
            a.data))
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !se.support.noCloneEvent && t[se.expando]) {
                r = se._data(t);
                for (i in r.events) se.removeEvent(t, i, r.handle);
                t.removeAttribute(se.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), se.support.html5Clone && e.innerHTML && !se.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function b(e, n) {
        var r, i, o = 0,
        a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || se.nodeName(i, n) ? a.push(i) : se.merge(a, b(i, n));
        return n === t || n && se.nodeName(e, n) ? se.merge([e], a) : a
    }
    function x(e) {
        Ze.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Tt.length; i--;) if (t = Tt[i] + n, t in e) return t;
        return r
    }
    function T(e, t) {
        return e = t || e,
        "none" === se.css(e, "display") || !se.contains(e.ownerDocument, e)
    }
    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++) n = e[i],
        n.style && (r[i] = se._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && T(n) && (r[i] = se._data(n, "olddisplay", S(n.nodeName)))) : r[i] || T(n) || se._data(n, "olddisplay", se.css(n, "display")));
        for (i = 0; o > i; i++) n = e[i],
        n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "": "none"));
        return e
    }
    function C(e, t, n) {
        var r = gt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += se.css(e, n + wt[o], !0, i)),
        r ? ("content" === n && (a -= se.css(e, "padding" + wt[o], !0, i)), "margin" !== n && (a -= se.css(e, "border" + wt[o] + "Width", !0, i))) : (a += se.css(e, "padding" + wt[o], !0, i), "padding" !== n && (a += se.css(e, "border" + wt[o] + "Width", !0, i)));
        return a
    }
    function E(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = ut(e),
        a = se.support.boxSizing && "border-box" === se.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = st(e, t, o), (0 > i || null == i) && (i = e.style[t]), mt.test(i)) return i;
            r = a && (se.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function S(e) {
        var t = V,
        n = vt[e];
        return n || (n = A(e, t), "none" !== n && n || (lt = (lt || se("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), lt.detach()), vt[e] = n),
        n
    }
    function A(e, t) {
        var n = se(t.createElement(e)).appendTo(t.body),
        r = se.css(n[0], "display");
        return n.remove(),
        r
    }
    function j(e, t, n, r) {
        var i;
        if (se.isArray(t)) se.each(t,
        function(t, i) {
            n || Ct.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== se.type(t)) r(e, t);
        else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }
    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(le) || [];
            if (se.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            se.each(e[s] || [],
            function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }),
            u
        }
        var o = {},
        a = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function H(e, n) {
        var r, i, o = se.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
        return i && se.extend(!0, e, i),
        e
    }
    function M(e, n, r) {
        var i, o, a, s, u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
        "*" === l[0];) l.shift(),
        i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
    }
    function q(e, t) {
        var n, r, i, o, a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = u[++s];) if ("*" !== i) {
            if ("*" !== l && l !== i) {
                if (n = a[l + " " + i] || a["* " + i], !n) for (r in a) if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                    n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                    break
                }
                if (n !== !0) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: n ? c: "No conversion from " + l + " to " + i
                    }
                }
            }
            l = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function _() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function O() {
        return setTimeout(function() {
            Gt = t
        }),
        Gt = se.now()
    }
    function B(e, t) {
        se.each(t,
        function(t, n) {
            for (var r = (nn[t] || []).concat(nn["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function P(e, t, n) {
        var r, i, o = 0,
        a = tn.length,
        s = se.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Gt || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: se.extend({},
            t),
            opts: se.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Gt || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = se.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++) if (r = tn[o].call(l, e, c, l.opts)) return r;
        return B(l, c),
        se.isFunction(l.opts.start) && l.opts.start.call(e, l),
        se.fx.timer(se.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = se.camelCase(n), i = t[r], o = e[n], se.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = se.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
        d = e.style,
        h = {},
        g = [],
        m = e.nodeType && T(e);
        n.queue || (c = se._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f()
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--,
                se.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === se.css(e, "display") && "none" === se.css(e, "float") && (se.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", se.support.shrinkWrapBlocks || p.done(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t) if (o = t[r], Kt.exec(o)) {
            if (delete t[r], u = u || "toggle" === o, o === (m ? "hide": "show")) continue;
            g.push(r)
        }
        if (a = g.length) {
            s = se._data(e, "fxshow") || se._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            u && (s.hidden = !m),
            m ? se(e).show() : p.done(function() {
                se(e).hide()
            }),
            p.done(function() {
                var t;
                se._removeData(e, "fxshow");
                for (t in h) se.style(e, t, h[t])
            });
            for (r = 0; a > r; r++) i = g[r],
            l = p.createTween(i, m ? s[i] : 0),
            h[i] = s[i] || se.style(e, i),
            i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }
    function I(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wt[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function z(e) {
        return se.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var X, U, V = e.document,
    Y = e.location,
    J = e.jQuery,
    G = e.$,
    Q = {},
    K = [],
    Z = "1.9.0",
    ee = K.concat,
    te = K.push,
    ne = K.slice,
    re = K.indexOf,
    ie = Q.toString,
    oe = Q.hasOwnProperty,
    ae = Z.trim,
    se = function(e, t) {
        return new se.fn.init(e, t, X)
    },
    ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    le = /\S+/g,
    ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    fe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    de = /^[\],:{}\s]*$/,
    he = /(?:^|:|,)(?:\s*\[)+/g,
    ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    me = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ye = /^-ms-/,
    ve = /-([\da-z])/gi,
    be = function(e, t) {
        return t.toUpperCase()
    },
    xe = function() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xe, !1), se.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", xe), se.ready())
    };
    se.fn = se.prototype = {
        jquery: Z,
        constructor: se,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof se ? n[0] : n, se.merge(this, se.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: V, !0)), pe.test(i[1]) && se.isPlainObject(n)) for (i in n) se.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = V.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = V,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : se.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), se.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ne.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = se.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return se.each(this, e, t)
        },
        ready: function(e) {
            return se.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(ne.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(se.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: te,
        sort: [].sort,
        splice: [].splice
    },
    se.fn.init.prototype = se.fn,
    se.extend = se.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || se.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n],
        i = e[n],
        s !== i && (c && i && (se.isPlainObject(i) || (o = se.isArray(i))) ? (o ? (o = !1, a = r && se.isArray(r) ? r: []) : a = r && se.isPlainObject(r) ? r: {},
        s[n] = se.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    },
    se.extend({
        noConflict: function(t) {
            return e.$ === se && (e.$ = G),
            t && e.jQuery === se && (e.jQuery = J),
            se
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? se.readyWait++:se.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--se.readyWait: !se.isReady) {
                if (!V.body) return setTimeout(se.ready);
                se.isReady = !0,
                e !== !0 && --se.readyWait > 0 || (U.resolveWith(V, [se]), se.fn.trigger && se(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === se.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === se.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Q[ie.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== se.type(e) || e.nodeType || se.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e);
            return r === t || oe.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || V;
            var r = pe.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = se.buildFragment([e], t, i), i && se(i).remove(), se.merge([], r.childNodes))
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = se.trim(t), t && de.test(t.replace(ge, "@").replace(me, "]").replace(he, ""))) ? new Function("return " + t)() : void se.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && se.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ye, "ms-").replace(ve, be)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: ae && !ae.call("\ufeff?") ?
        function(e) {
            return null == e ? "": ae.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ce, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? se.merge(r, "string" == typeof e ? [e] : e) : te.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (re) return re.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o),
            n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            return ee.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r),
            se.isFunction(e) ? (i = ne.call(arguments, 2), o = function() {
                return e.apply(n || this, i.concat(ne.call(arguments)))
            },
            o.guid = e.guid = e.guid || se.guid++, o) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === se.type(r)) {
                o = !0;
                for (u in r) se.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, se.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(se(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    se.ready.promise = function(t) {
        if (!U) if (U = se.Deferred(), "complete" === V.readyState) setTimeout(se.ready);
        else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xe, !1),
        e.addEventListener("load", se.ready, !1);
        else {
            V.attachEvent("onreadystatechange", xe),
            e.attachEvent("onload", se.ready);
            var n = !1;
            try {
                n = null == e.frameElement && V.documentElement
            } catch(r) {}
            n && n.doScroll && !
            function i() {
                if (!se.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    se.ready()
                }
            } ()
        }
        return U.promise(t)
    },
    se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }),
    X = se(V);
    var we = {};
    se.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || r(e) : se.extend({},
        e);
        var n, i, o, a, s, u, l = [],
        c = !e.once && [],
        f = function(t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            o = !1,
            l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; !
                    function r(t) {
                        se.each(t,
                        function(t, n) {
                            var i = se.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    } (arguments),
                    o ? s = l.length: n && (a = t, f(n))
                }
                return this
            },
            remove: function() {
                return l && se.each(arguments,
                function(e, t) {
                    for (var n; (n = se.inArray(t, l, n)) > -1;) l.splice(n, 1),
                    o && (s >= n && s--, u >= n && u--)
                }),
                this
            },
            has: function(e) {
                return se.inArray(e, l) > -1
            },
            empty: function() {
                return l = [],
                this
            },
            disable: function() {
                return l = c = n = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = t,
                n || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !l || i && !c || (o ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    se.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", se.Callbacks("once memory"), "resolved"], ["reject", "fail", se.Callbacks("once memory"), "rejected"], ["notify", "progress", se.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return se.Deferred(function(n) {
                        se.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = se.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && se.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? se.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            se.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = ne.call(arguments),
            a = o.length,
            s = 1 !== a || e && se.isFunction(e.promise) ? a: 0,
            u = 1 === s ? e: se.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? ne.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && se.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    se.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f = V.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        i = V.createElement("select"),
        o = i.appendChild(V.createElement("option")),
        a = f.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: o.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        a.checked = !0,
        t.noCloneChecked = a.cloneNode(!0).checked,
        i.disabled = !0,
        t.optDisabled = !o.disabled;
        try {
            delete f.test
        } catch(p) {
            t.deleteExpando = !1
        }
        a = V.createElement("input"),
        a.setAttribute("value", ""),
        t.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        t.radioValue = "t" === a.value,
        a.setAttribute("checked", "t"),
        a.setAttribute("name", "t"),
        s = V.createDocumentFragment(),
        s.appendChild(a),
        t.appendChecked = a.checked,
        t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        f.attachEvent && (f.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"),
        t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === f.style.backgroundClip,
        se(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = V.getElementsByTagName("body")[0];
            a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(V.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), "undefined" != typeof f.style.zoom && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, a.style.zoom = 1), a.removeChild(n), n = f = i = r = null)
        }),
        n = i = s = o = r = a = null,
        t
    } ();
    var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Ne = /([A-Z])/g;
    se.extend({
        cache: {},
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? se.cache[e[se.expando]] : e[se.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function(e, t) {
            return o(e, t, !1)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && se.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    se.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
            s = 0,
            u = null;
            if (e === t) {
                if (this.length && (u = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++) i = r[s].name,
                    i.indexOf("data-") || (i = se.camelCase(i.substring(5)), a(o, i, u[i]));
                    se._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                se.data(this, e)
            }) : se.access(this,
            function(n) {
                return n === t ? o ? a(o, e, se.data(o, e)) : null: void this.each(function() {
                    se.data(this, e, n)
                })
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                se.removeData(this, e)
            })
        }
    }),
    se.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = se._data(e, t), n && (!r || se.isArray(n) ? r = se._data(e, t, se.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = se.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = se._queueHooks(e, t),
            a = function() {
                se.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return se._data(e, n) || se._data(e, n, {
                empty: se.Callbacks("once memory").add(function() {
                    se._removeData(e, t + "queue"),
                    se._removeData(e, n)
                })
            })
        }
    }),
    se.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            arguments.length < r ? se.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = se.queue(this, e, n);
                se._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && se.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                se.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = se.fx ? se.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = se.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = se._data(a[s], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(u));
            return u(),
            o.promise(n)
        }
    });
    var Ce, ke, Ee = /[\t\r\n]/g,
    Se = /\r/g,
    Ae = /^(?:input|select|textarea|button|object)$/i,
    je = /^(?:a|area)$/i,
    De = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Le = /^(?:checked|selected)$/i,
    He = se.support.getSetAttribute,
    Me = se.support.input;
    se.fn.extend({
        attr: function(e, t) {
            return se.access(this, se.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                se.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return se.access(this, se.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = se.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (se.isFunction(e)) return this.each(function(t) {
                se(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(le) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = se.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (se.isFunction(e)) return this.each(function(t) {
                se(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(le) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? se.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return se.isFunction(e) ? this.each(function(n) {
                se(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0,
                a = se(this), s = t, u = e.match(le) || []; i = u[o++];) s = r ? s: !a.hasClass(i),
                a[s ? "addClass": "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": se._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = se.isFunction(e),
                this.each(function(r) {
                    var o, a = se(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": se.isArray(o) && (o = se.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), n = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = se.valHooks[o.type] || se.valHooks[o.nodeName.toLowerCase()],
                n && "get" in n && (r = n.get(o, "value")) !== t ? r: (r = o.value, "string" == typeof r ? r.replace(Se, "") : null == r ? "": r)
            }
        }
    }),
    se.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], (n.selected || u === i) && (se.support.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !se.nodeName(n.parentNode, "optgroup"))) {
                        if (t = se(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = se.makeArray(t);
                    return se(e).find("option").each(function() {
                        this.selected = se.inArray(se(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? se.prop(e, n, r) : (a = 1 !== s || !se.isXMLDoc(e), a && (n = n.toLowerCase(), o = se.attrHooks[n] || (De.test(n) ? ke: Ce)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i: ("undefined" != typeof e.getAttribute && (i = e.getAttribute(n)), null == i ? t: i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i: (e.setAttribute(n, r + ""), r) : void se.removeAttr(e, n))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(le);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = se.propFix[n] || n,
            De.test(n) ? !He && Le.test(n) ? e[se.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : se.attr(e, n, ""),
            e.removeAttribute(He ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!se.support.radioValue && "radio" === t && se.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !se.isXMLDoc(e),
            a && (n = se.propFix[n] || n, o = se.propHooks[n]),
            r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Ae.test(e.nodeName) || je.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    ke = {
        get: function(e, n) {
            var r = se.prop(e, n),
            i = "boolean" == typeof r && e.getAttribute(n),
            o = "boolean" == typeof r ? Me && He ? null != i: Le.test(n) ? e[se.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? se.removeAttr(e, n) : Me && He || !Le.test(n) ? e.setAttribute(!He && se.propFix[n] || n, n) : e[se.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    Me && He || (se.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return se.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, t, n) {
            return se.nodeName(e, "input") ? void(e.defaultValue = t) : Ce && Ce.set(e, t, n)
        }
    }),
    He || (Ce = se.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    se.attrHooks.contenteditable = {
        get: Ce.get,
        set: function(e, t, n) {
            Ce.set(e, "" === t ? !1 : t, n)
        }
    },
    se.each(["width", "height"],
    function(e, t) {
        se.attrHooks[t] = se.extend(se.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    })),
    se.support.hrefNormalized || (se.each(["href", "src", "width", "height"],
    function(e, n) {
        se.attrHooks[n] = se.extend(se.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), se.each(["href", "src"],
    function(e, t) {
        se.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    se.support.style || (se.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    se.support.optSelected || (se.propHooks.selected = se.extend(se.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    se.support.enctype || (se.propFix.enctype = "encoding"),
    se.support.checkOn || se.each(["radio", "checkbox"],
    function() {
        se.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    se.each(["radio", "checkbox"],
    function() {
        se.valHooks[this] = se.extend(se.valHooks[this], {
            set: function(e, t) {
                return se.isArray(t) ? e.checked = se.inArray(se(e).val(), t) >= 0 : void 0
            }
        })
    });
    var qe = /^(?:input|select|textarea)$/i,
    _e = /^key/,
    Fe = /^(?:mouse|contextmenu)|click/,
    Oe = /^(?:focusinfocus|focusoutblur)$/,
    Be = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && se._data(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = se.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                    return "undefined" == typeof se || e && se.event.triggered === e.type ? t: se.event.dispatch.apply(s.elem, arguments)
                },
                s.elem = e), n = (n || "").match(le) || [""], c = n.length; c--;) u = Be.exec(n[c]) || [],
                h = m = u[1],
                g = (u[2] || "").split(".").sort(),
                p = se.event.special[h] || {},
                h = (o ? p.delegateType: p.bindType) || h,
                p = se.event.special[h] || {},
                f = se.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && se.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                },
                a),
                (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))),
                p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)),
                o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                se.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = se.hasData(e) && se._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(le) || [""], l = t.length; l--;) if (s = Be.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = se.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || se.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) se.event.remove(e, d + t[l], n, r, !0);
                se.isEmptyObject(u) && (delete m.handle, se._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V],
            h = n.type || n,
            g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(h + se.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, n = n[se.expando] ? n: new se.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : se.makeArray(r, [n]), p = se.event.special[h] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !se.isWindow(i)) {
                    for (l = p.delegateType || h, Oe.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    u = s;
                    u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? l: p.bindType || h,
                f = (se._data(s, "events") || {})[n.type] && se._data(s, "handle"),
                f && f.apply(s, r),
                f = c && s[c],
                f && se.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(i.ownerDocument, r) === !1) && ("click" !== h || !se.nodeName(i, "a")) && se.acceptData(i) && c && i[h] && !se.isWindow(i)) {
                    u = i[c],
                    u && (i[c] = null),
                    se.event.triggered = h;
                    try {
                        i[h]()
                    } catch(m) {}
                    se.event.triggered = t,
                    u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = se.event.fix(e);
            var n, r, i, o, a, s = [],
            u = ne.call(arguments),
            l = (se._data(this, "events") || {})[e.type] || [],
            c = se.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = se.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((se.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], r = 0; u > r; r++) a = n[r],
                o = a.selector + " ",
                i[o] === t && (i[o] = a.needsContext ? se(o, this).index(l) >= 0 : se.find(o, this, null, [l]).length),
                i[o] && i.push(a);
                i.length && s.push({
                    elem: l,
                    handlers: i
                })
            }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[se.expando]) return e;
            var t, n, r = e,
            i = se.event.fixHooks[e.type] || {},
            o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new se.Event(r), t = o.length; t--;) n = o[t],
            e[n] = r[n];
            return e.target || (e.target = r.srcElement || V),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function() {
                    if (this !== V.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = se.extend(new se.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? se.event.trigger(i, null, t) : se.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    se.removeEvent = V.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    },
    se.Event = function(e, t) {
        return this instanceof se.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u: l) : this.type = e, t && se.extend(this, t), this.timeStamp = e && e.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(e, t)
    },
    se.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u,
            this.stopPropagation()
        }
    },
    se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        se.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !se.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    se.support.submitBubbles || (se.event.special.submit = {
        setup: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = se.nodeName(n, "input") || se.nodeName(n, "button") ? n.form: t;
                r && !se._data(r, "submitBubbles") && (se.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), se._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && se.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
        }
    }),
    se.support.changeBubbles || (se.event.special.change = {
        setup: function() {
            return qe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), se.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                se.event.simulate("change", this, e, !0)
            })), !1) : void se.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                qe.test(t.nodeName) && !se._data(t, "changeBubbles") && (se.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || se.event.simulate("change", this.parentNode, e, !0)
                }), se._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return se.event.remove(this, "._change"),
            !qe.test(this.nodeName)
        }
    }),
    se.support.focusinBubbles || se.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            se.event.simulate(t, e.target, se.event.fix(e), !0)
        };
        se.event.special[t] = {
            setup: function() {
                0 === n++&&V.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && V.removeEventListener(e, r, !0)
            }
        }
    }),
    se.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return se().off(e),
                a.apply(this, arguments)
            },
            i.guid = a.guid || (a.guid = se.guid++)),
            this.each(function() {
                se.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            se(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = l),
            this.each(function() {
                se.event.remove(this, e, r, n)
            })
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
        },
        trigger: function(e, t) {
            return this.each(function() {
                se.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? se.event.trigger(e, t, n, !0) : void 0
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        se.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        },
        _e.test(t) && (se.event.fixHooks[t] = se.event.keyHooks),
        Fe.test(t) && (se.event.fixHooks[t] = se.event.mouseHooks)
    }),
    function(e, t) {
        function n(e) {
            return he.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t: R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!M && !r) {
                if (i = ge.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (W.qsa && !q.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(ve, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = de.test(e) && t.parentNode || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)),
                        n
                    } catch(m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(ae, "$1"), t, n, r)
        }
        function s(e, t) {
            for (var n = e && t && e.nextSibling; n; n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) { (!n || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])),
                n = !1,
                (r = le.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(ae, " ")
                }), s = s.slice(n.length));
                for (o in C.filter) ! (r = pe[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : X(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === t.dir,
            o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return ! 0
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)),
            o && !o[P] && (o = m(o, a)),
            i(function(i, a, s, u) {
                var l, c, f, p = [],
                d = [],
                h = a.length,
                m = i || b(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !i && t ? m: g(m, p, e, s, u),
                v = n ? o || (i ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v),
                o ? o(null, a, v, u) : Q.apply(a, v)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            a, !0), l = d(function(e) {
                return Z.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(ae, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function v(e, t) {
            var n = 0,
            r = t.length > 0,
            o = e.length > 0,
            s = function(i, s, u, l, c) {
                var f, p, d, h = [],
                m = 0,
                y = "0",
                v = i && [],
                b = null != c,
                x = j,
                w = i || o && C.find.TAG("*", c && s.parentNode || s),
                T = $ += null == x ? 1 : Math.E;
                for (b && (j = s !== L && s, N = n); null != (f = w[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p]; p++) if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && ($ = T, N = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p]; p++) d(v, h, s, u);
                    if (i) {
                        if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                        h = g(h)
                    }
                    Q.apply(l, h),
                    b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = T, j = x),
                v
            };
            return r ? i(s) : s
        }
        function b(e, t, n) {
            for (var r = 0,
            i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xe, we), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !C.relative[s = a.type]); i--) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xe, we), de.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)),
                    n;
                    break
                }
            }
            return S(e, l)(r, t, M, n, de.test(e)),
            n
        }
        function w() {}
        var T, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O, B, P = "sizzle" + -new Date,
        R = e.document,
        W = {},
        $ = 0,
        I = 0,
        z = r(),
        X = r(),
        U = r(),
        V = typeof t,
        Y = 1 << 31,
        J = [],
        G = J.pop,
        Q = J.push,
        K = J.slice,
        Z = J.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = te.replace("w", "w#"),
        re = "([*^$|!~]?=)",
        ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
        oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
        ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        ue = new RegExp("^" + ee + "*," + ee + "*"),
        le = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
        ce = new RegExp(oe),
        fe = new RegExp("^" + ne + "$"),
        pe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        de = /[\x20\t\r\n\f]*[+~]/,
        he = /\{\s*\[native code\]\s*\}/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        me = /^(?:input|select|textarea|button)$/i,
        ye = /^h\d$/i,
        ve = /'|\\/g,
        be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        we = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            K.call(H.childNodes, 0)[0].nodeType
        } catch(Te) {
            K = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        E = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        D = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e: R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, M = E(r), W.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }), W.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function(e) {
                e.id = P + 0,
                e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>",
                H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P),
                H.removeChild(e),
                t
            }), C.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            W.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && !M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== V && !M) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ?
            function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            C.find.NAME = W.getByName &&
            function(e, t) {
                return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
            },
            C.find.CLASS = W.getByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName === V || M ? void 0 : t.getElementsByClassName(e)
            },
            _ = [], q = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + ee + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                W.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                _.push("!=", oe)
            }), q = new RegExp(q.join("|")), _ = new RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            B = H.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (e === t) return A = !0,
                0;
                if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (O(R, e) && ~e.sourceIndex || Y);
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            },
            A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(be, "='$1']"), W.matchesSelector && !M && (!_ || !_.test(t)) && !q.test(t)) try {
                var n = F.call(e, t);
                if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(r) {}
            return a(t, L, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            O(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e),
            M || (t = t.toLowerCase()),
            (n = C.attrHandle[t]) ? n(e) : M || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        },
        k = a.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += k(t);
            return n
        },
        C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
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
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return pe.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ce.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
                            else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                            return p -= i,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]),
                        e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = S(e.replace(ae, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
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
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return ye.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        };
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[T] = u(T);
        for (T in {
            submit: !0,
            reset: !0
        }) C.pseudos[T] = l(T);
        S = a.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = U(e, v(i, r))
            }
            return o
        },
        C.pseudos.nth = C.pseudos.eq,
        C.filters = w.prototype = C.pseudos,
        C.setFilters = new w,
        D(),
        a.attr = se.attr,
        se.find = a,
        se.expr = a.selectors,
        se.expr[":"] = se.expr.pseudos,
        se.unique = a.uniqueSort,
        se.text = a.getText,
        se.isXMLDoc = a.isXML,
        se.contains = a.contains
    } (e);
    var Pe = /Until$/,
    Re = /^(?:parents|prev(?:Until|All))/,
    We = /^.[^:#\[\.,]*$/,
    $e = se.expr.match.needsContext,
    Ie = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    se.fn.extend({
        find: function(e) {
            var t, n, r;
            if ("string" != typeof e) return r = this,
            this.pushStack(se(e).filter(function() {
                for (t = 0; t < r.length; t++) if (se.contains(r[t], this)) return ! 0
            }));
            for (n = [], t = 0; t < this.length; t++) se.find(e, this[t], n);
            return n = this.pushStack(se.unique(n)),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = se(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (se.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? $e.test(e) ? se(e, this.context).index(this[0]) >= 0 : se.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = $e.test(e) || "string" != typeof e ? se(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : se.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? se.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.inArray(this[0], se(e)) : se.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? se(e, t) : se.makeArray(e && e.nodeType ? [e] : e),
            r = se.merge(this.get(), n);
            return this.pushStack(se.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e));
        }
    }),
    se.fn.andSelf = se.fn.addBack,
    se.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return se.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return se.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return se.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return se.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return se.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return se.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return se.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return se.sibling(e.firstChild)
        },
        contents: function(e) {
            return se.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: se.merge([], e.childNodes)
        }
    },
    function(e, t) {
        se.fn[e] = function(n, r) {
            var i = se.map(this, t, n);
            return Pe.test(e) || (r = n),
            r && "string" == typeof r && (i = se.filter(r, i)),
            i = this.length > 1 && !Ie[e] ? se.unique(i) : i,
            this.length > 1 && Re.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }),
    se.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? se.find.matchesSelector(t[0], e) ? [t[0]] : [] : se.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !se(o).is(r));) 1 === o.nodeType && i.push(o),
            o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xe = / jQuery\d+="(?:null|\d+)"/g,
    Ue = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
    Ve = /^\s+/,
    Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Je = /<([\w:]+)/,
    Ge = /<tbody/i,
    Qe = /<|&#?\w+;/,
    Ke = /<(?:script|style|link)/i,
    Ze = /^(?:checkbox|radio)$/i,
    et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tt = /^$|\/(?:java|ecma)script/i,
    nt = /^true\/(.*)/,
    rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    it = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: se.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ot = p(V),
    at = ot.appendChild(V.createElement("div"));
    it.optgroup = it.option,
    it.tbody = it.tfoot = it.colgroup = it.caption = it.thead,
    it.th = it.td,
    se.fn.extend({
        text: function(e) {
            return se.access(this,
            function(e) {
                return e === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (se.isFunction(e)) return this.each(function(t) {
                se(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = se(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return se.isFunction(e) ? this.each(function(t) {
                se(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = se(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = se.isFunction(e);
            return this.each(function(n) {
                se(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || se.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || se.cleanData(b(n)), n.parentNode && (t && se.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && se.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && se.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return se.clone(this, e, t)
            })
        },
        html: function(e) {
            return se.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xe, "") : t;
                if ("string" == typeof e && !Ke.test(e) && (se.support.htmlSerialize || !Ue.test(e)) && (se.support.leadingWhitespace || !Ve.test(e)) && !it[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ye, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (se.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = se.isFunction(e);
            return t || "string" == typeof e || (e = se(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode; (n && 1 === this.nodeType || 11 === this.nodeType) && (se(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = ee.apply([], e);
            var i, o, a, s, u, l, c = 0,
            f = this.length,
            p = this,
            m = f - 1,
            y = e[0],
            v = se.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || se.support.checkClone) && et.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)),
                o.domManip(e, n, r)
            });
            if (f && (i = se.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && se.nodeName(o, "tr"), a = se.map(b(i, "script"), h), s = a.length; f > c; c++) u = i,
                c !== m && (u = se.clone(u, !0, !0), s && se.merge(a, b(u, "script"))),
                r.call(n && se.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c);
                if (s) for (l = a[a.length - 1].ownerDocument, se.map(a, g), c = 0; s > c; c++) u = a[c],
                tt.test(u.type || "") && !se._data(u, "globalEval") && se.contains(l, u) && (u.src ? se.ajax({
                    url: u.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : se.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rt, "")));
                i = o = null
            }
            return this
        }
    }),
    se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        se.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = se(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            se(o[r])[t](n),
            te.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    se.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = se.contains(e.ownerDocument, e);
            if (se.support.html5Clone || se.isXMLDoc(e) || !Ue.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(s = at.firstChild)), !(se.support.noCloneEvent && se.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || se.isXMLDoc(e))) for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) r[a] && v(o, r[a]);
            if (t) if (n) for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) y(o, r[a]);
            else y(e, s);
            return r = b(s, "script"),
            r.length > 0 && m(r, !u && b(e, "script")),
            r = i = o = null,
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length,
            d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === se.type(o)) se.merge(h, o.nodeType ? [o] : o);
            else if (Qe.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Je.exec(o) || ["", ""])[1].toLowerCase(), u = it[a] || it._default, s.innerHTML = u[1] + o.replace(Ye, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                if (!se.support.leadingWhitespace && Ve.test(o) && h.push(t.createTextNode(Ve.exec(o)[0])), !se.support.tbody) for (o = "table" !== a || Ge.test(o) ? "<table>" !== u[1] || Ge.test(o) ? 0 : s: s.firstChild, c = o && o.childNodes.length; c--;) se.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (se.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), se.support.appendChecked || se.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === se.inArray(o, r)) && (i = se.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) for (c = 0; o = s[c++];) tt.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0,
            s = se.expando,
            u = se.cache,
            l = se.support.deleteExpando,
            c = se.event.special; null != (i = e[a]); a++) if ((t || se.acceptData(i)) && (r = i[s], n = r && u[r])) {
                if (n.events) for (o in n.events) c[o] ? se.event.remove(i, o) : se.removeEvent(i, o, n.handle);
                u[r] && (delete u[r], l ? delete i[s] : "undefined" != typeof i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.push(r))
            }
        }
    });
    var st, ut, lt, ct = /alpha\([^)]*\)/i,
    ft = /opacity\s*=\s*([^)]*)/,
    pt = /^(top|right|bottom|left)$/,
    dt = /^(none|table(?!-c[ea]).+)/,
    ht = /^margin/,
    gt = new RegExp("^(" + ue + ")(.*)$", "i"),
    mt = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
    yt = new RegExp("^([+-])=(" + ue + ")", "i"),
    vt = {
        BODY: "block"
    },
    bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    xt = {
        letterSpacing: 0,
        fontWeight: 400
    },
    wt = ["Top", "Right", "Bottom", "Left"],
    Tt = ["Webkit", "O", "Moz", "ms"];
    se.fn.extend({
        css: function(e, n) {
            return se.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (se.isArray(n)) {
                    for (i = ut(e), o = n.length; o > s; s++) a[n[s]] = se.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? se.style(e, n, r) : se.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: T(this)) ? se(this).show() : se(this).hide()
            })
        }
    }),
    se.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = st(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": se.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = se.camelCase(n),
                l = e.style;
                if (n = se.cssProps[u] || (se.cssProps[u] = w(l, u)), s = se.cssHooks[n] || se.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                if (a = typeof r, "string" === a && (o = yt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(se.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || se.cssNumber[u] || (r += "px"), se.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = se.camelCase(n);
            return n = se.cssProps[u] || (se.cssProps[u] = w(e.style, u)),
            s = se.cssHooks[n] || se.cssHooks[u],
            s && "get" in s && (o = s.get(e, !0, r)),
            o === t && (o = st(e, n, i)),
            "normal" === o && n in xt && (o = xt[n]),
            r ? (a = parseFloat(o), r === !0 || se.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }),
    e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null)
    },
    st = function(e, n, r) {
        var i, o, a, s = r || ut(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || se.contains(e.ownerDocument, e) || (u = se.style(e, n)), mt.test(u) && ht.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : V.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    },
    st = function(e, n, r) {
        var i, o, a, s = r || ut(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        mt.test(u) && !pt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    }),
    se.each(["height", "width"],
    function(e, t) {
        se.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && dt.test(se.css(e, "display")) ? se.swap(e, bt,
                function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && ut(e);
                return C(e, n, r ? k(e, t, r, se.support.boxSizing && "border-box" === se.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    se.support.opacity || (se.cssHooks.opacity = {
        get: function(e, t) {
            return ft.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = se.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === se.trim(o.replace(ct, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ct.test(o) ? o.replace(ct, i) : o + " " + i)
        }
    }),
    se(function() {
        se.support.reliableMarginRight || (se.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? se.swap(e, {
                    display: "inline-block"
                },
                st, [e, "marginRight"]) : void 0
            }
        }),
        !se.support.pixelPosition && se.fn.position && se.each(["top", "left"],
        function(e, t) {
            se.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = st(e, t), mt.test(n) ? se(e).position()[t] + "px": n) : void 0
                }
            }
        })
    }),
    se.expr && se.expr.filters && (se.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !se.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || se.css(e, "display"))
    },
    se.expr.filters.visible = function(e) {
        return ! se.expr.filters.hidden(e)
    }),
    se.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        se.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ht.test(e) || (se.cssHooks[e + t].set = C)
    });
    var Nt = /%20/g,
    Ct = /\[\]$/,
    kt = /\r?\n/g,
    Et = /^(?:submit|button|image|reset)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
    se.fn.extend({
        serialize: function() {
            return se.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = se.prop(this, "elements");
                return e ? se.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !se(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ze.test(e))
            }).map(function(e, t) {
                var n = se(this).val();
                return null == n ? null: se.isArray(n) ? se.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }),
    se.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = se.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(e) || e.jquery && !se.isPlainObject(e)) se.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(Nt, "+")
    };
    var At, jt, Dt = se.now(),
    Lt = /\?/,
    Ht = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ft = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    Bt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Pt = se.fn.load,
    Rt = {},
    Wt = {},
    $t = "*/".concat("*");
    try {
        jt = Y.href
    } catch(It) {
        jt = V.createElement("a"),
        jt.href = "",
        jt = jt.href
    }
    At = Bt.exec(jt.toLowerCase()) || [],
    se.fn.load = function(e, n, r) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        se.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"),
        s.length > 0 && se.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            a = arguments,
            s.html(i ? se("<div>").append(se.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, a || [e.responseText, t, e])
        }),
        this
    },
    se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        se.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    se.each(["get", "post"],
    function(e, n) {
        se[n] = function(e, r, i, o) {
            return se.isFunction(r) && (o = o || i, i = r, r = t),
            se.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt,
            type: "GET",
            isLocal: _t.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": se.parseJSON,
                "text xml": se.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, se.ajaxSettings), t) : H(se.ajaxSettings, e)
        },
        ajaxPrefilter: D(Rt),
        ajaxTransport: D(Wt),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var l, f, v, b, w, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", T.readyState = e > 0 ? 4 : 0, r && (b = M(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (se.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (se.etag[o] = w)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]), T.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess": "ajaxError", [T, p, l ? f: v]), m.fireWith(d, [T, N]), c && (h.trigger("ajaxComplete", [T, p]), --se.active || se.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, o, a, s, u, l, c, f, p = se.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? se(d) : se.event,
            g = se.Deferred(),
            m = se.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            w = "canceled",
            T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = qt.exec(a);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || jt) + "").replace(Ht, "").replace(Ot, At[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = se.trim(p.dataType || "*").toLowerCase().match(le) || [""], null == p.crossDomain && (l = Bt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === At[1] && l[2] === At[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (At[3] || ("http:" === At[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = se.param(p.data, p.traditional)), L(Rt, p, n, T), 2 === x) return T;
            c = p.global,
            c && 0 === se.active++&&se.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ft.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (Lt.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mt.test(o) ? o.replace(Mt, "$1_=" + Dt++) : o + (Lt.test(o) ? "&": "?") + "_=" + Dt++)),
            p.ifModified && (se.lastModified[o] && T.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && T.setRequestHeader("If-None-Match", se.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01": "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) T[f](p[f]);
            if (i = L(Wt, p, n, T)) {
                T.readyState = 1,
                c && h.trigger("ajaxSend", [T, p]),
                p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    i.send(v, r)
                } catch(N) {
                    if (! (2 > x)) throw N;
                    r( - 1, N)
                }
            } else r( - 1, "No Transport");
            return T
        },
        getScript: function(e, n) {
            return se.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return se.get(e, t, n, "json")
        }
    }),
    se.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return se.globalEval(e),
                e
            }
        }
    }),
    se.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    se.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = V.head || se("head")[0] || V.documentElement;
            return {
                send: function(t, i) {
                    n = V.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var zt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || se.expando + "_" + Dt++;
            return this[e] = !0,
            e
        }
    }),
    se.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Xt.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = se.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Xt, "$1" + o) : n.jsonp !== !1 && (n.url += (Lt.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || se.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, zt.push(o)),
            s && se.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : void 0
    });
    var Ut, Vt, Yt = 0,
    Jt = e.ActiveXObject &&
    function() {
        var e;
        for (e in Ut) Ut[e](t, !0)
    };
    se.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && _() || F()
    }: _,
    Vt = se.ajaxSettings.xhr(),
    se.support.cors = !!Vt && "withCredentials" in Vt,
    Vt = se.support.ajax = !!Vt,
    Vt && se.ajaxTransport(function(n) {
        if (!n.crossDomain || se.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = se.noop, Jt && delete Ut[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {},
                                s = u.status,
                                p = u.responseXML,
                                c = u.getAllResponseHeaders(),
                                p && p.documentElement && (f.xml = p),
                                "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    l = u.statusText
                                } catch(d) {
                                    l = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(h) {
                            i || o( - 1, h)
                        }
                        f && o(s, l, f, c)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Yt, Jt && (Ut || (Ut = {},
                    se(e).unload(Jt)), Ut[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Gt, Qt, Kt = /^(?:toggle|show|hide)$/,
    Zt = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
    en = /queueHooks$/,
    tn = [W],
    nn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = Zt.exec(t),
            a = i.cur(),
            s = +a || 0,
            u = 1,
            l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (se.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = se.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5",
                    s /= u,
                    se.style(i.elem, e, s + r);
                    while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    se.Animation = se.extend(P, {
        tweener: function(e, t) {
            se.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            nn[n] = nn[n] || [],
            nn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }),
    se.Tween = $,
    $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (se.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : $.propHooks._default.set(this),
            this
        }
    },
    $.prototype.init.prototype = $.prototype,
    $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = se.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                se.fx.step[e.prop] ? se.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[se.cssProps[e.prop]] || se.cssHooks[e.prop]) ? se.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    se.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = se.fn[t];
        se.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }),
    se.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = se.isEmptyObject(e),
            o = se.speed(t, n, r),
            a = function() {
                var t = P(this, se.extend({},
                e), o);
                a.finish = function() {
                    t.stop(!0)
                },
                (i || se._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = se.timers,
                a = se._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && en.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && se.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = se._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = se.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, se.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    se.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        se.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    se.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? se.extend({},
        e) : {
            complete: n || !n && t || se.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !se.isFunction(t) && t
        };
        return r.duration = se.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in se.fx.speeds ? se.fx.speeds[r.duration] : se.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            se.isFunction(r.old) && r.old.call(this),
            r.queue && se.dequeue(this, r.queue)
        },
        r
    },
    se.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    se.timers = [],
    se.fx = $.prototype.init,
    se.fx.tick = function() {
        var e, n = se.timers,
        r = 0;
        for (Gt = se.now(); r < n.length; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || se.fx.stop(),
        Gt = t
    },
    se.fx.timer = function(e) {
        e() && se.timers.push(e) && se.fx.start()
    },
    se.fx.interval = 13,
    se.fx.start = function() {
        Qt || (Qt = setInterval(se.fx.tick, se.fx.interval))
    },
    se.fx.stop = function() {
        clearInterval(Qt),
        Qt = null
    },
    se.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    se.fx.step = {},
    se.expr && se.expr.filters && (se.expr.filters.animated = function(e) {
        return se.grep(se.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    se.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            se.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        o = this[0],
        a = o && o.ownerDocument;
        if (a) return n = a.documentElement,
        se.contains(n, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    },
    se.offset = {
        setOffset: function(e, t, n) {
            var r = se.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = se(e),
            s = a.offset(),
            u = se.css(e, "top"),
            l = se.css(e, "left"),
            c = ("absolute" === r || "fixed" === r) && se.inArray("auto", [u, l]) > -1,
            f = {},
            p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0),
            se.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + i),
            null != t.left && (f.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, f) : a.css(f)
        }
    },
    se.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === se.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), se.nodeName(e[0], "html") || (n = e.offset()), n.top += se.css(e[0], "borderTopWidth", !0), n.left += se.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - se.css(r, "marginTop", !0),
                    left: t.left - n.left - se.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || V.documentElement; e && !se.nodeName(e, "html") && "static" === se.css(e, "position");) e = e.offsetParent;
                return e || V.documentElement
            })
        }
    }),
    se.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        se.fn[e] = function(i) {
            return se.access(this,
            function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? se(a).scrollLeft() : o, r ? o: se(a).scrollTop()) : e[i] = o)
            },
            e, i, arguments.length, null)
        }
    }),
    se.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        se.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            se.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return se.access(this,
                function(n, r, i) {
                    var o;
                    return se.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? se.css(n, r, s) : se.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = se,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return se
    })
} (window);