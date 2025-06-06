"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [41050], {
        340159: (t, e, n) => {
            n.d(e, {
                createObservable: () => i
            });
            var r = function() {
                function t(t) {
                    var e = this;
                    this._resolutionListener = function() {
                        return e._onResolutionChanged()
                    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
                }
                return t.prototype.dispose = function() {
                    this._uninstallResolutionListener(), this._window = null
                }, Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._window.devicePixelRatio
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.subscribe = function(t) {
                    var e = this,
                        n = {
                            next: t
                        };
                    return this._observers.push(n), {
                        unsubscribe: function() {
                            e._observers = e._observers.filter((function(t) {
                                return t !== n
                            }))
                        }
                    }
                }, t.prototype._installResolutionListener = function() {
                    if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
                    var t = this._window.devicePixelRatio;
                    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
                }, t.prototype._uninstallResolutionListener = function() {
                    null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
                }, t.prototype._reinstallResolutionListener = function() {
                    this._uninstallResolutionListener(), this._installResolutionListener()
                }, t.prototype._onResolutionChanged = function() {
                    var t = this;
                    this._observers.forEach((function(e) {
                        return e.next(t._window.devicePixelRatio)
                    })), this._reinstallResolutionListener()
                }, t
            }();

            function i(t) {
                return new r(t)
            }
        },
        341161: (t, e, n) => {
            function r(t) {
                var e = t.width,
                    n = t.height;
                if (e < 0) throw new Error("Negative width is not allowed for Size");
                if (n < 0) throw new Error("Negative height is not allowed for Size");
                return {
                    width: e,
                    height: n
                }
            }

            function i(t, e) {
                return t.width === e.width && t.height === e.height
            }
            n.d(e, {
                equalSizes: () => i,
                size: () => r
            })
        },
        492438: (t, e, n) => {
            n.d(e, {
                default: () => r
            });
            const r = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        },
        876507: (t, e, n) => {
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return function(e, n, r) {
                    for (var i = -1, o = Object(e), u = r(e), a = u.length; a--;) {
                        var l = u[t ? a : ++i];
                        if (!1 === n(o[l], l, o)) break
                    }
                    return e
                }
            }()
        },
        846197: (t, e, n) => {
            n.d(e, {
                default: () => Q
            });
            var r = n(87593),
                i = n(600857),
                o = n(554523);
            const u = function(t, e, n) {
                (void 0 !== n && !(0, o.default)(t[e], n) || void 0 === n && !(e in t)) && (0, i.default)(t, e, n)
            };
            var a = n(876507),
                l = n(414054),
                s = n(411523),
                f = n(232126),
                d = n(865607),
                c = n(154404),
                h = n(456052),
                v = n(649634),
                p = n(513795);
            const w = function(t) {
                return (0, p.default)(t) && (0, v.default)(t)
            };
            var _ = n(232437),
                b = n(688987),
                y = n(182433),
                g = n(554098),
                L = n(109125);
            const R = function(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
            };
            var M = n(652949),
                j = n(602960);
            const O = function(t) {
                return (0, M.default)(t, (0, j.default)(t))
            };
            const x = function(t, e, n, r, i, o, a) {
                var v = R(t, n),
                    p = R(e, n),
                    M = a.get(p);
                if (M) u(t, n, M);
                else {
                    var j = o ? o(v, p, n + "", t, e, a) : void 0,
                        x = void 0 === j;
                    if (x) {
                        var Q = (0, h.default)(p),
                            m = !Q && (0, _.default)(p),
                            S = !Q && !m && (0, L.default)(p);
                        j = p, Q || m || S ? (0, h.default)(v) ? j = v : w(v) ? j = (0, f.default)(v) : m ? (x = !1, j = (0, l.default)(p, !0)) : S ? (x = !1, j = (0, s.default)(p, !0)) : j = [] : (0, g.default)(p) || (0, c.default)(p) ? (j = v, (0, c.default)(v) ? j = O(v) : (0, y.default)(v) && !(0, b.default)(v) || (j = (0, d.default)(p))) : x = !1
                    }
                    x && (a.set(p, j), i(j, p, r, o, a), a.delete(p)), u(t, n, j)
                }
            };
            const Q = function t(e, n, i, o, l) {
                e !== n && (0, a.default)(n, (function(a, s) {
                    if (l || (l = new r.default), (0, y.default)(a)) x(e, n, s, i, t, o, l);
                    else {
                        var f = o ? o(R(e, s), a, s + "", e, n, l) : void 0;
                        void 0 === f && (f = a), u(e, s, f)
                    }
                }), j.default)
            }
        },
        919851: (t, e, n) => {
            n.d(e, {
                default: () => u
            });
            var r = n(876402),
                i = n(175933),
                o = n(634451);
            const u = function(t, e) {
                return (0, o.default)((0, i.default)(t, e, r.default), t + "")
            }
        },
        631543: (t, e, n) => {
            n.d(e, {
                default: () => o
            });
            var r = n(919851),
                i = n(61833);
            const o = function(t) {
                return (0, r.default)((function(e, n) {
                    var r = -1,
                        o = n.length,
                        u = o > 1 ? n[o - 1] : void 0,
                        a = o > 2 ? n[2] : void 0;
                    for (u = t.length > 3 && "function" == typeof u ? (o--, u) : void 0, a && (0, i.default)(n[0], n[1], a) && (u = o < 3 ? void 0 : u, o = 1), e = Object(e); ++r < o;) {
                        var l = n[r];
                        l && t(e, l, r, u)
                    }
                    return e
                }))
            }
        },
        61833: (t, e, n) => {
            n.d(e, {
                default: () => a
            });
            var r = n(554523),
                i = n(649634),
                o = n(399313),
                u = n(182433);
            const a = function(t, e, n) {
                if (!(0, u.default)(n)) return !1;
                var a = typeof e;
                return !!("number" == a ? (0, i.default)(n) && (0, o.default)(e, n.length) : "string" == a && e in n) && (0, r.default)(n[e], t)
            }
        },
        175933: (t, e, n) => {
            n.d(e, {
                default: () => o
            });
            var r = n(492438),
                i = Math.max;
            const o = function(t, e, n) {
                return e = i(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var o = arguments, u = -1, a = i(o.length - e, 0), l = Array(a); ++u < a;) l[u] = o[e + u];
                        u = -1;
                        for (var s = Array(e + 1); ++u < e;) s[u] = o[u];
                        return s[e] = n(l), (0, r.default)(t, this, s)
                    }
            }
        },
        634451: (t, e, n) => {
            n.d(e, {
                default: () => a
            });
            const r = function(t) {
                return function() {
                    return t
                }
            };
            var i = n(355136),
                o = n(876402);
            const u = i.default ? function(t, e) {
                return (0, i.default)(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                })
            } : o.default;
            const a = (0, n(117717).default)(u)
        },
        117717: (t, e, n) => {
            n.d(e, {
                default: () => i
            });
            var r = Date.now;
            const i = function(t) {
                var e = 0,
                    n = 0;
                return function() {
                    var i = r(),
                        o = 16 - (i - n);
                    if (n = i, o > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        876402: (t, e, n) => {
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return t
            }
        },
        554098: (t, e, n) => {
            n.d(e, {
                default: () => d
            });
            var r = n(194138),
                i = n(110964),
                o = n(513795),
                u = Function.prototype,
                a = Object.prototype,
                l = u.toString,
                s = a.hasOwnProperty,
                f = l.call(Object);
            const d = function(t) {
                if (!(0, o.default)(t) || "[object Object]" != (0, r.default)(t)) return !1;
                var e = (0, i.default)(t);
                if (null === e) return !0;
                var n = s.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && l.call(n) == f
            }
        },
        283873: (t, e, n) => {
            n.d(e, {
                default: () => u
            });
            var r = n(194138),
                i = n(456052),
                o = n(513795);
            const u = function(t) {
                return "string" == typeof t || !(0, i.default)(t) && (0, o.default)(t) && "[object String]" == (0, r.default)(t)
            }
        },
        998034: (t, e, n) => {
            n.d(e, {
                default: () => i
            });
            var r = n(846197);
            const i = (0, n(631543).default)((function(t, e, n) {
                (0, r.default)(t, e, n)
            }))
        }
    }
]);