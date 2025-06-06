(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20708], {
        650151: (e, t) => {
            "use strict";

            function n(e, t) {
                if (void 0 === e) throw new Error("".concat(null != t ? t : "Value", " is undefined"));
                return e
            }

            function r(e, t) {
                if (null === e) throw new Error("".concat(null != t ? t : "Value", " is null"));
                return e
            }
            t.ensure = t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
            }, t.ensureDefined = n, t.ensureNotNull = r, t.ensure = function(e, t) {
                return r(n(e, t), t)
            }
        },
        213398: function(e, t) {
            var n, r, i, o;
            o = function(e) {
                var t = Object.prototype.toString,
                    n = Array.isArray || function(e) {
                        return "[object Array]" === t.call(e)
                    };

                function r(e) {
                    return "function" == typeof e
                }

                function i(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                function o(e, t) {
                    return null != e && "object" == typeof e && t in e
                }
                var s = RegExp.prototype.test,
                    a = /\S/;

                function u(e) {
                    return ! function(e, t) {
                        return s.call(e, t)
                    }(a, e)
                }
                var c = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    },
                    l = /\s*/,
                    h = /\s+/,
                    f = /\s*=/,
                    p = /\s*\}/,
                    d = /#|\^|\/|>|\{|&|=|!/;

                function v(e) {
                    this.string = e, this.tail = e, this.pos = 0
                }

                function g(e, t) {
                    this.view = e, this.cache = {
                        ".": this.view
                    }, this.parent = t
                }

                function w() {
                    this.cache = {}
                }
                v.prototype.eos = function() {
                    return "" === this.tail
                }, v.prototype.scan = function(e) {
                    var t = this.tail.match(e);
                    if (!t || 0 !== t.index) return "";
                    var n = t[0];
                    return this.tail = this.tail.substring(n.length), this.pos += n.length, n
                }, v.prototype.scanUntil = function(e) {
                    var t, n = this.tail.search(e);
                    switch (n) {
                        case -1:
                            t = this.tail, this.tail = "";
                            break;
                        case 0:
                            t = "";
                            break;
                        default:
                            t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
                    }
                    return this.pos += t.length, t
                }, g.prototype.push = function(e) {
                    return new g(e, this)
                }, g.prototype.lookup = function(e) {
                    var t, n = this.cache;
                    if (n.hasOwnProperty(e)) t = n[e];
                    else {
                        for (var i, s, a = this, u = !1; a;) {
                            if (e.indexOf(".") > 0)
                                for (t = a.view, i = e.split("."), s = 0; null != t && s < i.length;) s === i.length - 1 && (u = o(t, i[s])), t = t[i[s++]];
                            else t = a.view[e], u = o(a.view, e);
                            if (u) break;
                            a = a.parent
                        }
                        n[e] = t
                    }
                    return r(t) && (t = t.call(this.view)), t
                }, w.prototype.clearCache = function() {
                    this.cache = {}
                }, w.prototype.parse = function(t, r) {
                    var o = this.cache,
                        s = o[t];
                    return null == s && (s = o[t] = function(t, r) {
                        if (!t) return [];
                        var o, s, a, c = [],
                            g = [],
                            w = [],
                            y = !1,
                            b = !1;

                        function m() {
                            if (y && !b)
                                for (; w.length;) delete g[w.pop()];
                            else w = [];
                            y = !1, b = !1
                        }

                        function k(e) {
                            if ("string" == typeof e && (e = e.split(h, 2)), !n(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                            o = new RegExp(i(e[0]) + "\\s*"), s = new RegExp("\\s*" + i(e[1])), a = new RegExp("\\s*" + i("}" + e[1]))
                        }
                        k(r || e.tags);
                        for (var _, E, x, U, T, A, C = new v(t); !C.eos();) {
                            if (_ = C.pos, x = C.scanUntil(o))
                                for (var S = 0, V = x.length; S < V; ++S) u(U = x.charAt(S)) ? w.push(g.length) : b = !0, g.push(["text", U, _, _ + 1]), _ += 1, "\n" === U && m();
                            if (!C.scan(o)) break;
                            if (y = !0, E = C.scan(d) || "name", C.scan(l), "=" === E ? (x = C.scanUntil(f), C.scan(f), C.scanUntil(s)) : "{" === E ? (x = C.scanUntil(a), C.scan(p), C.scanUntil(s), E = "&") : x = C.scanUntil(s), !C.scan(s)) throw new Error("Unclosed tag at " + C.pos);
                            if (T = [E, x, _, C.pos], g.push(T), "#" === E || "^" === E) c.push(T);
                            else if ("/" === E) {
                                if (!(A = c.pop())) throw new Error('Unopened section "' + x + '" at ' + _);
                                if (A[1] !== x) throw new Error('Unclosed section "' + A[1] + '" at ' + _)
                            } else "name" === E || "{" === E || "&" === E ? b = !0 : "=" === E && k(x)
                        }
                        if (A = c.pop()) throw new Error('Unclosed section "' + A[1] + '" at ' + C.pos);
                        return function(e) {
                            for (var t, n = [], r = n, i = [], o = 0, s = e.length; o < s; ++o) switch ((t = e[o])[0]) {
                                case "#":
                                case "^":
                                    r.push(t), i.push(t), r = t[4] = [];
                                    break;
                                case "/":
                                    i.pop()[5] = t[2], r = i.length > 0 ? i[i.length - 1][4] : n;
                                    break;
                                default:
                                    r.push(t)
                            }
                            return n
                        }(function(e) {
                            for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)(t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
                            return r
                        }(g))
                    }(t, r)), s
                }, w.prototype.render = function(e, t, n) {
                    var r = this.parse(e),
                        i = t instanceof g ? t : new g(t);
                    return this.renderTokens(r, i, n, e)
                }, w.prototype.renderTokens = function(e, t, n, r) {
                    for (var i, o, s, a = "", u = 0, c = e.length; u < c; ++u) s = void 0, "#" === (o = (i = e[u])[0]) ? s = this.renderSection(i, t, n, r) : "^" === o ? s = this.renderInverted(i, t, n, r) : ">" === o ? s = this.renderPartial(i, t, n, r) : "&" === o ? s = this.unescapedValue(i, t) : "name" === o ? s = this.escapedValue(i, t) : "text" === o && (s = this.rawValue(i)), void 0 !== s && (a += s);
                    return a
                }, w.prototype.renderSection = function(e, t, i, o) {
                    var s = this,
                        a = "",
                        u = t.lookup(e[1]);
                    if (u) {
                        if (n(u))
                            for (var c = 0, l = u.length; c < l; ++c) a += this.renderTokens(e[4], t.push(u[c]), i, o);
                        else if ("object" == typeof u || "string" == typeof u || "number" == typeof u) a += this.renderTokens(e[4], t.push(u), i, o);
                        else if (r(u)) {
                            if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                            null != (u = u.call(t.view, o.slice(e[3], e[5]), (function(e) {
                                return s.render(e, t, i)
                            }))) && (a += u)
                        } else a += this.renderTokens(e[4], t, i, o);
                        return a
                    }
                }, w.prototype.renderInverted = function(e, t, r, i) {
                    var o = t.lookup(e[1]);
                    if (!o || n(o) && 0 === o.length) return this.renderTokens(e[4], t, r, i)
                }, w.prototype.renderPartial = function(e, t, n) {
                    if (n) {
                        var i = r(n) ? n(e[1]) : n[e[1]];
                        return null != i ? this.renderTokens(this.parse(i), t, n, i) : void 0
                    }
                }, w.prototype.unescapedValue = function(e, t) {
                    var n = t.lookup(e[1]);
                    if (null != n) return n
                }, w.prototype.escapedValue = function(t, n) {
                    var r = n.lookup(t[1]);
                    if (null != r) return e.escape(r)
                }, w.prototype.rawValue = function(e) {
                    return e[1]
                }, e.name = "mustache.js", e.version = "2.2.1", e.tags = ["{{", "}}"];
                var y = new w;
                e.clearCache = function() {
                    return y.clearCache()
                }, e.parse = function(e, t) {
                    return y.parse(e, t)
                }, e.render = function(e, t, r) {
                    if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(i = e) ? "array" : typeof i) + '" was given as the first argument for mustache#render(template, view, partials)');
                    var i;
                    return y.render(e, t, r)
                }, e.to_html = function(t, n, i, o) {
                    var s = e.render(t, n, i);
                    if (!r(o)) return s;
                    o(s)
                }, e.escape = function(e) {
                    return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                        return c[e]
                    }))
                }, e.Scanner = v, e.Context = g, e.Writer = w
            }, t && "string" != typeof t.nodeName ? o(t) : (r = [t], void 0 === (i = "function" == typeof(n = o) ? n.apply(t, r) : n) || (e.exports = i))
        },
        778785: (e, t, n) => {
            "use strict";
            n.d(t, {
                mobiletouch: () => i,
                setClasses: () => o
            });
            var r = n(23482);
            const i = r.mobiletouch;
            r.touch;

            function o() {
                document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        39654: (e, t, n) => {
            "use strict";
            n.d(t, {
                getIsoLanguageCodeFromLanguage: () => i
            });
            const r = {
                ar_AE: "ar",
                br: "pt",
                de_DE: "de",
                ca_ES: "ca",
                he_IL: "he",
                id_ID: "id",
                in: "en",
                kr: "ko",
                ms_MY: "ms",
                sv_SE: "sv",
                th_TH: "th",
                uk: "en",
                vi_VN: "vi",
                zh_CN: "zh-Hans",
                zh_TW: "zh-Hant",
                zh: "zh-Hans",
                hu_HU: "hu-HU"
            };

            function i(e) {
                return r[e] || e
            }
        },
        931924: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                enabled: () => u
            });
            var i = n(6283);
            const o = new Map,
                s = new Map,
                a = new Set;

            function u(e) {
                const t = o.get(e);
                if (void 0 !== t) return t;
                const n = s.get(e);
                return !!n && n.some(u)
            }

            function c(e, t) {
                o.set(String(e), Boolean(t))
            }

            function l(e) {
                c(e, !0)
            }

            function h(e) {
                c(e, !1)
            }! function() {
                for (const [e, t] of Object.entries(r || (r = n.t(i, 2))))
                    if (a.add(e), "subsets" in t)
                        for (const n of t.subsets) {
                            a.add(n);
                            let t = s.get(n);
                            void 0 === t && (t = [], s.set(n, t)), t.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(h), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(l)
            }()
        }
    }
]);