(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [49351, 78775, 78326], {
        411881: e => {
            e.exports = {}
        },
        302489: e => {
            e.exports = {}
        },
        617525: e => {
            e.exports = {}
        },
        691625: e => {
            e.exports = {}
        },
        737643: e => {
            e.exports = {
                pair: "pair-ocURKVwI",
                xxceptionallysmalldonotusebrv1023: "xxceptionallysmalldonotusebrv1023-ocURKVwI",
                xxxxsmall: "xxxxsmall-ocURKVwI",
                xxxsmall: "xxxsmall-ocURKVwI",
                xxsmall: "xxsmall-ocURKVwI",
                xsmall: "xsmall-ocURKVwI",
                small: "small-ocURKVwI",
                medium: "medium-ocURKVwI",
                large: "large-ocURKVwI",
                xlarge: "xlarge-ocURKVwI",
                xxlarge: "xxlarge-ocURKVwI",
                xxxlarge: "xxxlarge-ocURKVwI",
                logo: "logo-ocURKVwI",
                skeleton: "skeleton-ocURKVwI",
                empty: "empty-ocURKVwI"
            }
        },
        757554: e => {
            e.exports = {
                logo: "logo-PsAlMQQF",
                hidden: "hidden-PsAlMQQF",
                xxceptionallysmalldonotusebrv1023: "xxceptionallysmalldonotusebrv1023-PsAlMQQF",
                xxxsmall: "xxxsmall-PsAlMQQF",
                xxsmall: "xxsmall-PsAlMQQF",
                xsmall: "xsmall-PsAlMQQF",
                small: "small-PsAlMQQF",
                medium: "medium-PsAlMQQF",
                large: "large-PsAlMQQF",
                xlarge: "xlarge-PsAlMQQF",
                xxlarge: "xxlarge-PsAlMQQF",
                xxxlarge: "xxxlarge-PsAlMQQF",
                skeleton: "skeleton-PsAlMQQF",
                letter: "letter-PsAlMQQF"
            }
        },
        140987: e => {
            e.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-aLqboHuu"
            }
        },
        828133: e => {
            e.exports = {
                "css-value-copyright-transition-params": ".6s 0s cubic-bezier(.4, .01, .22, 1)",
                "css-value-copyright-transition-params-half-time": ".3s 0s cubic-bezier(.4, .01, .22, 1)",
                label: "label-dzbd7lyV",
                logoWrap: "logoWrap-dzbd7lyV",
                expandedWithTransition: "expandedWithTransition-dzbd7lyV",
                expandedByClick: "expandedByClick-dzbd7lyV",
                start: "start-dzbd7lyV",
                end: "end-dzbd7lyV",
                snap: "snap-dzbd7lyV",
                top: "top-dzbd7lyV",
                bottom: "bottom-dzbd7lyV",
                large: "large-dzbd7lyV",
                expanded: "expanded-dzbd7lyV",
                label__link: "label__link-dzbd7lyV"
            }
        },
        615350: e => {
            e.exports = {}
        },
        158942: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedObject: () => o.WatchedObject,
                WatchedValue: () => r.WatchedValue
            });
            var r = n(597773),
                o = n(390251)
        },
        536794: (e, t, n) => {
            "use strict";

            function r(e) {
                return "number" == typeof e && isFinite(e)
            }

            function o(e) {
                if (!e || "object" != typeof e) return e;
                let t;
                t = Array.isArray(e) ? [] : {};
                for (const n in e)
                    if (e.hasOwnProperty(n)) {
                        const r = e[n];
                        t[n] = r && "object" == typeof r ? o(r) : r
                    }
                return t
            }

            function i(e) {
                return "object" == typeof e && null !== e
            }

            function s(e) {
                return null != e && (e.constructor === Function || "[object Function]" === Object.prototype.toString.call(e))
            }

            function a(e, t, n = "") {
                if (e === t) return [!0, n];
                if (s(e) && (e = void 0), s(t) && (t = void 0), null == e || null == t) return [e === t, n];
                if ("object" != typeof e && "object" != typeof t) return [e === t, n];
                if (Array.isArray(e) && Array.isArray(t)) {
                    const r = e.length;
                    if (r !== t.length) return [!1, n];
                    for (let o = 0; o < r; o++) {
                        const r = a(e[o], t[o], n + "[" + o + "]");
                        if (!r[0]) return r
                    }
                    return [!0, n]
                }
                if (Array.isArray(e) || Array.isArray(t)) return [!1, n];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, n];
                for (const r in e) {
                    const o = a(e[r], t[r], n + "[" + r + "]");
                    if (!o[0]) return o
                }
                return [!0, n]
            }
            n.d(t, {
                clone: () => o,
                deepEquals: () => a,
                isArray: () => c,
                isInteger: () => l,
                isNumber: () => r,
                isObject: () => i,
                isString: () => u
            });
            const c = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };

            function l(e) {
                return "number" == typeof e && e % 1 == 0
            }

            function u(e) {
                return null != e && e.constructor === String
            }
            Number.isNaN = Number.isNaN || function(e) {
                return e != e
            }
        },
        390251: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedObject: () => s
            });
            var r = n(536794),
                o = n(597773);

            function i(e, t) {
                return (0, r.deepEquals)(e, t)[0]
            }
            class s extends o.WatchedValue {
                constructor(e, t = i) {
                    super(e), this._comparator = t
                }
                setValue(e, t) {
                    !t && this._comparator(this.value(), e) || super.setValue(e, t)
                }
            }
        },
        597773: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedValue: () => a
            });
            var r = n(735566),
                o = n(954992);
            const i = (0, r.getLogger)("Common.WatchedValue");

            function s(e) {
                i.logError(`${e&&(e.stack||e.message)}`)
            }
            class a {
                constructor(...e) {
                    this._listeners = [], e.length > 0 ? this._value = e[0] : delete this._value
                }
                destroy() {
                    this.unsubscribe()
                }
                value() {
                    return this._owner ? this._owner._value : this._value
                }
                setValue(e, t) {
                    const n = this._owner ? this._owner : this;
                    if (n.writeLock) return;
                    const r = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                    if (!t && r && n.hasOwnProperty("_value")) return;
                    n._value = e;
                    const o = n._listeners.slice();
                    let i = 0;
                    for (let t = 0; t < o.length; t++) {
                        o[t].once && (n._listeners.splice(t - i, 1), i++);
                        try {
                            o[t].cb(e)
                        } catch (e) {
                            s(e)
                        }
                    }
                }
                deleteValue() {
                    this.setValue(void 0)
                }
                subscribe(e, t) {
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    const n = !!t && !!t.once,
                        r = !!t && !!t.callWithLast,
                        o = this._owner ? this._owner : this;
                    if (r && o.hasOwnProperty("_value")) {
                        try {
                            e(o._value)
                        } catch (e) {
                            s(e)
                        }
                        if (n) return
                    }
                    o._listeners.push({
                        cb: e,
                        owner: this,
                        once: !!t && !!t.once
                    })
                }
                unsubscribe(e) {
                    const t = this._owner ? this._owner : this;
                    void 0 === e && (e = null);
                    const n = t._listeners;
                    for (let r = n.length; r--;) n[r].owner !== this && t !== this || n[r].cb !== e && null !== e || n.splice(r, 1)
                }
                readonly() {
                    if (this._readonlyInstance) return this._readonlyInstance;
                    const e = {
                        subscribe: this.subscribe.bind(this),
                        unsubscribe: this.unsubscribe.bind(this),
                        value: this.value.bind(this),
                        when: this.when.bind(this),
                        ownership: this.ownership.bind(this),
                        spawnOwnership: this.spawnOwnership.bind(this),
                        weakReference: this.weakReference.bind(this),
                        spawn: e => this.spawn(e).readonly(),
                        destroy: this.destroy.bind(this)
                    };
                    return this._readonlyInstance = e, e
                }
                spawn(e) {
                    return this._spawn(e)
                }
                when(e) {
                    (0, o.callWhen)(this, (e => Boolean(e)), (() => {
                        try {
                            e(this.value())
                        } catch (e) {
                            s(e)
                        }
                    }))
                }
                assertNoSubscriptions() {
                    0
                }
                ownership() {
                    return this
                }
                release() {
                    this.destroy()
                }
                spawnOwnership() {
                    return this._spawn()
                }
                weakReference() {
                    return this._spawn(void 0, !0)
                }
                _spawn(e, t) {
                    return new c(this._owner || this, e, t)
                }
            }
            class c extends a {
                constructor(e, t, n) {
                    super(), delete this._listeners, this._owner = e, this._onDestroy = t, this._weakReference = !!n
                }
                destroy() {
                    try {
                        this._onDestroy ? .()
                    } catch (e) {
                        s(e)
                    }
                    super.destroy()
                }
                readonly() {
                    return super.readonly()
                }
                release() {
                    this._weakReference || super.release()
                }
            }
        },
        607423: (e, t, n) => {
            "use strict";
            n.d(t, {
                isNativeUIInteraction: () => i,
                isTextEditingField: () => o
            });
            var r = n(591800);

            function o(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function i(e, t) {
                if (!t) return !1;
                const n = 255 & e;
                if (27 === n || n >>> 4 == 7) return !1;
                switch (e ^ n) {
                    case r.Modifiers.Alt:
                        return (38 === n || 40 === n) && "SELECT" === t.tagName || o(t);
                    case r.Modifiers.Alt + r.Modifiers.Shift:
                        return o(t);
                    case r.Modifiers.Mod:
                        if (67 === n || !r.isMacKeyboard && 45 === n) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return o(t);
                    case r.Modifiers.Mod + r.Modifiers.Shift:
                        return n >= 33 && n <= 40 && o(t);
                    case r.Modifiers.Shift:
                    case 0:
                        return 9 === n ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t) || 13 === n || 32 === n || 9 === n) && ("form" in t || t.isContentEditable)
                }
                return !1
            }
        },
        467236: (e, t, n) => {
            "use strict";
            n.d(t, {
                getCircleLogoAnyHtml: () => i
            });
            var r = n(857430),
                o = n(348091);

            function i(e) {
                const {
                    logoUrls: t,
                    ...n
                } = e;
                return 1 === t.length ? (0, r.getCircleLogoHtml)({
                    logoUrl: t[0],
                    ...n
                }) : 2 === t.length ? (0, o.getCircleLogoPairHtml)({
                    primaryLogoUrl: t[0],
                    secondaryLogoUrl: t[1],
                    ...n
                }) : (0, r.getCircleLogoHtml)({
                    logoUrl: void 0,
                    ...n
                })
            }
        },
        348091: (e, t, n) => {
            "use strict";
            n.d(t, {
                getCircleLogoPairHtml: () => o
            });
            var r = n(115078);

            function o(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: n,
                    size: o,
                    className: s
                } = e;
                return `<span class="${(0,r.getBlockStyleClasses)(o,s)}">\n\t\t\t${i({logoUrl:n,size:o})}\n\t\t\t${i({logoUrl:t,size:o})}\n\t\t</span>`
            }

            function i(e) {
                const {
                    logoUrl: t,
                    size: n
                } = e, o = (0, r.getLogoStyleClasses)(n, 2, Boolean(t));
                return void 0 === t ? `<span class="${o}"></span>` : `<img class="${o}" crossorigin src="${t}" alt="" />`
            }
        },
        115078: (e, t, n) => {
            "use strict";
            n.d(t, {
                getBlockStyleClasses: () => c,
                getLogoStyleClasses: () => l
            });
            var r = n(497754),
                o = n.n(r),
                i = n(548729),
                s = n(737643),
                a = n.n(s);

            function c(e, t) {
                return o()(a().pair, a()[e], t)
            }

            function l(e, t = 2, n = !0) {
                return o()(a().logo, a()[e], a().skeleton, i.skeletonTheme.wrapper, !n && a().empty, 1 === t && o()(i.skeletonTheme.animated))
            }
        },
        857430: (e, t, n) => {
            "use strict";
            n.d(t, {
                getCircleLogoHtml: () => o
            });
            var r = n(842060);
            n(757554);

            function o(e) {
                const t = (0, r.getStyleClasses)(e.size, 2, e.className);
                return (0, r.isCircleLogoWithUrlProps)(e) ? `<img class="${t}" crossorigin src="${e.logoUrl}" alt="">` : `<span class="${t}">${e.placeholderLetter||""}</span>`
            }
        },
        336748: (e, t, n) => {
            "use strict";
            n.d(t, {
                colorsPalette: () => d,
                getHexColorByName: () => p
            });
            var r = n(130714),
                o = n(410515),
                i = n(650151);
            const s = { ...r,
                    ...o
                },
                a = {},
                c = Object.keys(s).length,
                l = /^#(([a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i;

            function u(e, t = [], n = s) {
                const r = n[e];
                if (!r) return null;
                if (l.test(r)) return r;
                const o = r;
                return t.push(e), -1 !== t.indexOf(o) ? (console.warn("Colors definitions cycled"), r) : t.length > c ? (console.warn("Too many variables-link in HEX-color search: " + t[0]), null) : u(o, t, n)
            }
            Object.keys(s).forEach((e => {
                const t = u(e);
                a[e] = (0, i.ensureNotNull)(t)
            }));
            const d = a;

            function p(e, t = d) {
                const n = t[e];
                if (!n) {
                    if (l.test(e)) return e;
                    throw new Error("No such color " + e)
                }
                return n
            }
        },
        790188: (e, t, n) => {
            "use strict";
            n.d(t, {
                colorsPalette: () => r.colorsPalette,
                getHexColorByName: () => r.getHexColorByName
            });
            var r = n(336748)
        },
        745269: (e, t, n) => {
            "use strict";
            n.d(t, {
                color: () => i,
                dur: () => r,
                easingFunc: () => o
            });
            const r = 350,
                o = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => --e * e * e + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - --e * e * e * e,
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 + --e * e * e * e * e,
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                };
            const i = {
                black70: "#4A4A4A",
                black80: "#535353"
            }
        },
        685023: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_SIZE: () => r,
                spinnerSizeMap: () => o
            });
            const r = "large",
                o = {
                    mini: "xsmall",
                    xxsmall: "xxsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        673747: (e, t, n) => {
            "use strict";
            var r = n(778785),
                o = n(650151),
                i = n(799786),
                s = n(112539),
                a = n(630112),
                c = n(471802);
            let l = !1,
                u = null,
                d = null;
            r.mobiletouch || (document.addEventListener("mouseover", f, !0), document.addEventListener("focus", (function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible"))) return;
                f(e, !0)
            }), {
                capture: !0
            }), document.addEventListener("active-descendant-focus", (function(e) {
                e.target instanceof HTMLElement && f(e, !0)
            }), {
                capture: !0
            }));
            const p = new MutationObserver((() => {
                    if (u && u.options.target) {
                        let e;
                        e = "isConnected" in u.options.target ? u.options.target.isConnected : document.body.contains(u.options.target), e || y()
                    }
                })),
                g = (e, t = {}) => {
                    const {
                        content: n,
                        ...r
                    } = w(t), o = c.getDataFromTarget(e), i = Object.assign(o, r);
                    return "none" !== n.type && (i.content = n), !("none" === i.content.type && !i.hotkey) && (i.target = e, h(i), !0)
                },
                h = e => {
                    const t = w(e),
                        n = c.getTooltip(t);
                    if (u = {
                            options: t,
                            element: n
                        }, (0, a.setTooltip)(n), (0, s.clearSchedule)(), !l) return c.hideTooltip(n), void(0, s.scheduleRender)((() => v(n)), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: r
                    } = e;
                    "number" != typeof r || isNaN(r) ? v(n) : (0, s.scheduleRender)((() => v(n)), r)
                };

            function f(e, t) {
                if ("sourceCapabilities" in e && e.sourceCapabilities ? .firesTouchEvents) return;
                const n = function(e, t, n) {
                    const r = [];
                    for (; e && e !== t;) e.classList && e.classList.contains(n) && r.push(e), e = e.parentElement || b(e.parentNode);
                    return r
                }(e.target, e.currentTarget, "apply-common-tooltip");
                for (const r of n) {
                    if (e instanceof MouseEvent)
                        if ("buttons" in e) {
                            if (1 & e.buttons) continue
                        } else if (1 === e.which) continue;
                    const n = () => g(r);
                    if (n()) {
                        const e = e => o(null, !0),
                            o = (i, s = !1) => {
                                r.removeEventListener("common-tooltip-update", n), r.removeEventListener("mouseleave", o), r.removeEventListener("mousedown", o), document.removeEventListener("scroll", e, {
                                    capture: !0
                                }), t && (r.removeEventListener("blur", o), r.removeEventListener("active-descendant-blur", o)), d && (d.destroy(), d = null), y(s)
                            };
                        r.addEventListener("common-tooltip-update", n), r.addEventListener("mouseleave", o), r.addEventListener("mousedown", o), document.addEventListener("scroll", e, {
                            capture: !0
                        }), t && (r.addEventListener("blur", o), r.addEventListener("active-descendant-blur", o)), null === d && (d = (0, i.createGroup)({
                            desc: "Tooltip"
                        }), d.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: o
                        }));
                        break
                    }
                }
            }

            function m() {
                (0, a.empty)(), l = !1, u = null
            }
            const y = (e, t) => {
                if ((0,
                        s.clearSchedule)(), (0, o.ensureNotNull)(p).disconnect(), !u) return;
                if (!e && !l) return;
                const {
                    element: n,
                    options: r
                } = u, i = () => {
                    n.removeEventListener("mouseleave", i), c.hideTooltip(n), e ? m() : (0, s.scheduleRemove)((() => {
                        m()
                    }), 250), t ? .()
                };
                r.tooltipHideDelay ? (0, s.scheduleHide)((() => {
                    n.querySelector(":hover") ? n.addEventListener("mouseleave", i) : i()
                }), r.tooltipHideDelay) : i()
            };

            function v(e) {
                const {
                    options: t
                } = (0, o.ensureNotNull)(u);
                if (c.setStyle(e, t), c.showTooltip(e), (0, o.ensureNotNull)(p).observe(document, {
                        childList: !0,
                        subtree: !0
                    }), l = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), y()
                    };
                    document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
                }
            }

            function b(e) {
                return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
            }

            function w(e) {
                if (function(e) {
                        return "content" in e
                    }(e)) return e;
                const {
                    inner: t,
                    html: n,
                    text: r,
                    ...o
                } = e;
                let i = {
                    type: "none"
                };
                return t && (i = {
                    type: "element",
                    data: t
                }), r && (i = {
                    type: n ? "html" : "text",
                    data: r
                }), {
                    content: i,
                    ...o
                }
            }
        },
        62889: (e, t, n) => {
            "use strict";
            n.d(t, {
                copyrightLabel: () => l
            });
            var r, o = n(444372),
                i = n(497754),
                s = n(536794),
                a = n(995683),
                c = n(828133);

            function l({
                svgText: e,
                icon: t,
                theme: l,
                url: u,
                mode: d,
                verticalPosition: p = r.Vertical.Bottom,
                horizontalPosition: g = r.Horizontal.End,
                snapToEdge: h = !0,
                isExpanded: f = !1,
                className: m
            }) {
                let y;
                switch (d) {
                    case "new":
                    case "with_border":
                    case "large_trade":
                        y = (0, s.clone)(l);
                        break;
                    default:
                        y = (0, a.mergeThemes)((0, s.clone)(c), l)
                }
                const v = document.createElement("span");
                let b;
                u && (b = document.createElement("a"), b.classList.add(...y.label__link.split(/\s/)), b.href = u, b.target = "_blank", b.rel = "noopener noreferrer", b.setAttribute("data-target-type", "copyright"), b.ariaLabel = o.t(null, void 0, n(15572)), v.append(b)), v.className = i(y.label, g === r.Horizontal.Start && y.start, g === r.Horizontal.End && y.end, p === r.Vertical.Top && y.top, p === r.Vertical.Bottom && y.bottom, h && "large_trade" !== d && y.snap, "large_old" === d && y.large, (f || "large_trade" === d) && y.expanded, m, "js-copyright-label"), v.addEventListener("click", (() => {
                    function e() {
                        v.classList.remove(y.expandedByClick), v.removeEventListener("mouseleave", e)
                    }
                    v.classList.contains(y.expandedWithTransition) || v.classList.contains(y.expanded) || (v.classList.contains(y.expandedByClick) ? u || e() : (v.classList.add(y.expandedByClick), v.addEventListener("mouseleave", e)))
                }));
                const w = document.createElement("span");
                w.className = y.logoWrap, w.innerHTML = t;
                const _ = document.createElement("span");
                return _.className = y.svgTextWrap, _.innerHTML = e, v.append(w, _), [v, y]
            }! function(e) {
                let t, n;
                ! function(e) {
                    e[e.Bottom = 0] = "Bottom", e[e.Top = 1] = "Top"
                }(t = e.Vertical || (e.Vertical = {})),
                function(e) {
                    e[e.Start = 0] = "Start", e[e.End = 1] = "End"
                }(n = e.Horizontal || (e.Horizontal = {}))
            }(r || (r = {}))
        },
        351079: (e, t, n) => {
            "use strict";
            n.d(t, {
                createCopyrightLabel: () => s
            });
            var r = n(497754),
                o = n(62889),
                i = n(952598);

            function s({
                sheriffOptions: e,
                ...t
            }) {
                const [n, s] = (0, o.copyrightLabel)(t), a = e && e.includes(i.KnownAction.Expand), c = e && e.includes(i.KnownAction.LargeTradeLogo);
                return n.className = r(n.className, (a || c) && s.expandedWithTransition), n
            }
        },
        952598: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    KnownAction: () => r,
                    widgetSheriffActions: () => o
                }),
                function(e) {
                    e.Expand = "expand-logo", e.LargeTradeLogo = "large-trade-logo"
                }(r || (r = {}));
            const o = new Set([r.Expand, r.LargeTradeLogo])
        },
        871591: (e, t, n) => {
            "use strict";
            n.d(t, {
                createFloatingTooltip: () => s
            });
            var r = n(735566),
                o = n(490716);
            const i = (0, r.getLogger)("useFloatingTooltip");

            function s(e) {
                const {
                    coloredBorderVisible: t,
                    lightweightMiniChart: r,
                    tooltipContainer: s,
                    crosshairMoveDataGetter: a = o.getCrosshairMoveData,
                    reversePrices: c = !1
                } = e;
                let l, u = !1;
                if (s) {
                    const {
                        position: e
                    } = window.getComputedStyle(s), t = ["relative", "fixed", "absolute"];
                    t.includes(e) || i.logWarn("Container position property must be: " + t.join(", "))
                }
                let d;
                const p = e => {
                    const o = a(r, e);
                    let i;
                    if (c && o && o.prices && (o.prices = o.prices.slice().reverse()), o) {
                        const {
                            point: e,
                            ...n
                        } = o;
                        i = { ...n,
                            cursorPosition: {
                                x: r.widget().priceScale("left").width() + e.x,
                                y: e.y
                            },
                            lineColor: t ? n.prices[0] ? .color : void 0
                        }
                    }
                    l ? l.update(i) : (d = d || (async () => {
                        const e = await Promise.all([n.e(51727), n.e(82321), n.e(10748)]).then(n.bind(n, 667704));
                        u || (l = new e.FloatingPriceTimeTooltipRenderer(s ? ? void 0, r.innerContainer()))
                    })(), d.then((() => l ? .update(i))))
                };
                return r.subscribeCrosshairMove(p), () => {
                    u = !0, l ? .destroy(), r.unsubscribeCrosshairMove(p)
                }
            }
        },
        490716: (e, t, n) => {
            "use strict";

            function r(e, t) {
                const {
                    point: n,
                    time: r,
                    seriesData: o
                } = t;
                if (void 0 === n || void 0 === r) return;
                const i = e.mainPlot(),
                    s = i.series();
                if (void 0 === o.get(s)) return;
                let a;
                const c = [],
                    l = i.currentSeriesOptions();
                if (a = "Area" === s.seriesType() || "Line" === s.seriesType() ? l.tooltipType || "line" : l.tooltipType || "ohlc", c.push(...i.getLegendData(t)), e.studyPlots().forEach((e => {
                        c.push(...e.getLegendData(t))
                    })), 0 === c.length) return;
                const u = l.tooltipLegendColorOrder;
                u ? .size && c.sort(((e, t) => {
                    const n = u.get(e.color) ? ? -1,
                        r = u.get(t.color) ? ? -1;
                    return (n > -1 ? n : 1 / 0) - (r > -1 ? r : 1 / 0)
                }));
                const d = new Date(1e3 * r);
                let p = e.dateTimeFormatter().format(d, {
                    dateTimeSeparator: "\n"
                });
                return e.isDWMResolution() || (p += " " + function(e) {
                    if (0 === e) return "UTC";
                    const t = Math.abs(e),
                        n = Math.floor(t / 60),
                        r = t - 60 * n;
                    return `UTC${Math.sign(e)<=0?"+":"-"}${n}${r>0?`:${r}`:""}`
                }(d.getTimezoneOffset())), {
                    point: n,
                    time: p,
                    prices: c,
                    type: a
                }
            }
            n.d(t, {
                getCrosshairMoveData: () => r
            })
        },
        133691: (e, t, n) => {
            "use strict";

            function r(e) {
                return "period-back" === e.type ? e.value : "r," + e.from + ":" + e.to
            }

            function o(e) {
                const t = /r,(\d+):(\d+)/.exec(e);
                return null !== t ? {
                    from: Number(t[1]),
                    to: Number(t[2]),
                    type: "time-range"
                } : {
                    value: e,
                    type: "period-back"
                }
            }
            n.d(t, {
                convertStrToTimeFrame: () => o,
                convertTimeFrameToStr: () => r
            })
        },
        941285: (e, t, n) => {
            "use strict";
            n.d(t, {
                Spinner: () => i
            });
            n(140987);
            var r = n(760863),
                o = n(685023);
            class i {
                constructor(e) {
                    this._shown = !1, this._el = (0, r.parseHtmlElement)(function(e = "") {
                        return `<div class="tv-spinner ${e}" role="progressbar"></div>`
                    }()), this.setSize(o.spinnerSizeMap[e || o.DEFAULT_SIZE])
                }
                spin(e) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = e, void 0 !== e && e.appendChild(this._el)), this._shown = !0, this
                }
                stop(e) {
                    return e && void 0 !== this._container && this._container.removeChild(this._el), this._el && this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(e) {
                    return Object.keys(e).forEach((t => {
                        const n = e[t];
                        void 0 !== n && this._el.style.setProperty(t, n)
                    })), this
                }
                style() {
                    return this._el.style
                }
                setSize(e) {
                    const t = void 0 !== e ? `tv-spinner--size_${e}` : "";
                    return this._el.className = `tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        596080: (e, t, n) => {
            "use strict";
            var r, o;
            n.d(t, {
                    IFrameEvents: () => o
                }),
                function(e) {
                    let t;
                    ! function(e) {
                        e.SetSymbol = "set-symbol", e.SetInterval = "set-interval"
                    }(t = e.Names || (e.Names = {}))
                }(r || (r = {})),
                function(e) {
                    let t;
                    ! function(e) {
                        e.SymbolClick = "tv-widget-symbol-click", e.WidgetLoad = "tv-widget-load", e.WidgetReady = "tv-widget-ready", e.ResizeIframe = "tv-widget-resize-iframe", e.NoData = "tv-widget-no-data"
                    }(t = e.Names || (e.Names = {}))
                }(o || (o = {}))
        },
        410899: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                const r = {
                    name: e,
                    frameElementId: t,
                    data: n
                };
                window.parent.postMessage(r, "*")
            }
            n.d(t, {
                dispatchEventToParent: () => r
            })
        },
        746849: (e, t, n) => {
            "use strict";
            n.d(t, {
                checkIfExchangeAvailable: () => i
            });
            n(142492);
            var r = n(406103);

            function o(e) {
                if (!(0, r.isIDCExchange)(e)) return !1;
                e = s(e);
                const t = window.pro,
                    n = t.getProduct(e);
                return void 0 !== n.idc_service_codes_delay && ((!Array.isArray(n.included_exchanges) || !n.included_exchanges.some((e => t.hasPackage(s(e))))) && ! function(e) {
                    const t = window.pro;
                    return t.hasPackage(e) || t.hasPackage(e + "_dly")
                }(e))
            }

            function i(e) {
                const t = window.pro;
                return new Promise((n => {
                    window.is_authenticated ? !t.getIDCExchanges(!0).length || t.isInvalidShopConf() ? t.updateShopConf().then((() => {
                        n(!o(e))
                    })).catch((() => {
                        n(!0)
                    })) : n(!o(e)) : n(!0)
                }))
            }

            function s(e) {
                return e.startsWith("exchange-") ? e : "exchange-{0}".format(e.toLowerCase())
            }
        },
        630440: (e, t, n) => {
            "use strict";
            n.d(t, {
                getWarningTextForFreeUsers: () => o
            });
            var r = n(444372);

            function o() {
                return window.is_authenticated ? r.t(null, void 0, n(401369)) : r.t(null, void 0, n(668083))
            }
        },
        406103: (e, t, n) => {
            "use strict";
            n.d(t, {
                isIDCExchange: () => o
            });
            var r = n(184026);

            function o(e, t = !1) {
                if (e && e.startsWith("exchange-")) return function(e, t = !1) {
                    const n = window.pro ? .getProduct(e);
                    return !(void 0 === n || !(0, r.isProductDefined)(n) || (t ? !n.idc_service_codes_delay : !n.idc_service_codes))
                }(e, t);
                const n = (e || "").toLowerCase();
                return window.pro ? .getIDCExchanges(t) ? .includes(n) ? ? !1
            }
        },
        599612: (e, t, n) => {
            "use strict";
            n.d(t, {
                check: () => c
            });
            var r = n(212363),
                o = n(803912),
                i = n(778016),
                s = n(746849),
                a = n(261963);

            function c(e, t = !0) {
                return new Promise(((n, c) => {
                    const l = (0, r.getExchange)(e);
                    l ? (0, s.checkIfExchangeAvailable)(l).then((r => r ? n(e) : (0, i.enabled)("IDC_AVAILABLE_DELAY") ? t ? void(0, o.fetch)(`/idc-sign-agreement-check/${l}/`, {
                        credentials: "include"
                    }).then((t => t.json().then((t => t.res === a.SymbolAvailabilityCodes.DELAY_NOT_AVAILABLE ? c({
                        exchange: l,
                        errCode: t.res,
                        reason: "delay not available",
                        symbol: e
                    }) : t.res === a.SymbolAvailabilityCodes.NEED_SIGN_AGREEMENT ? c({
                        exchange: l,
                        errCode: t.res,
                        reason: "need sign agreement",
                        symbol: e
                    }) : t.res === a.SymbolAvailabilityCodes.NEED_ADD_SERVICE ? c({
                        exchange: l,
                        errCode: t.res,
                        reason: "need add service",
                        symbol: e
                    }) : n(e))))).catch((() => {
                        n(e)
                    })) : n(e) : c({
                        exchange: l,
                        errCode: a.SymbolAvailabilityCodes.DELAY_NOT_AVAILABLE,
                        reason: "delay not available",
                        symbol: e
                    }))) : n(e)
                }))
            }
        },
        261963: (e, t, n) => {
            "use strict";
            n.d(t, {
                SymbolAvailabilityCodes: () => r
            });
            const r = JSON.parse('{"OK":"OK","ERR":"ERR","SYMBOL_NOT_AVAILABLE_FOR_ANON":"SYMBOL_NOT_AVAILABLE_FOR_ANON","DELAY_NOT_AVAILABLE":"DELAY_NOT_AVAILABLE","NEED_SIGN_AGREEMENT":"NEED_SIGN_AGREEMENT","NEED_ADD_SERVICE":"NEED_ADD_SERVICE"}')
        },
        62802: (e, t, n) => {
            "use strict";
            n.d(t, {
                getJSON: () => N,
                getValue: () => F,
                keys: () => R,
                remove: () => $,
                setJSON: () => I
            });
            var r = n(735566),
                o = n(125226),
                i = n(192784),
                s = (n(638456), n(803912)),
                a = n(482030),
                c = n(226722),
                l = n(49437),
                u = n(547465),
                d = n(931924);
            window.TradingView = window.TradingView || {};
            const p = ["s.tradingview.com", "betacdn.tradingview.com"],
                g = (d.enabled("use_localstorage_for_settings"), "local" === window.environment ? 5e3 : 12e4),
                h = 10,
                f = window.TradingView.onWidget ? .() ? "tradingview-widget" : "tradingview",
                m = f + ".";
            let y, v, b, w = !1,
                _ = null,
                x = {},
                E = [];
            const S = [/^widgetbar\.widget\.watchlist.+/, /.+quicks$/, /^widgetbar\.layout-settings$/, /^ChartSideToolbarWidget\.visible$/, /^onwidget\.watchlist$/, /^chart\.favoriteDrawings$/, /^chart\.favoriteDrawingsPosition$/, /^chart\.favoriteLibraryIndicators$/, /^loadChartDialog.favorites$/, /^ChartFavoriteDrawingToolbarWidget\.visible/, /^trading\.chart\.proterty$/, /^trading_floating_toolbar\.position$/, /^trading\.orderWidgetMode\./, /^symbolWatermark$/, /^pinereference\.size$/, /^pinereference\.position$/, /^hint\.+/, /^ChartDrawingToolbarWidget\.visible/];
            const k = () => !(_ || window.is_authenticated),
                L = e => m + e,
                T = (0, r.getLogger)("Lib.TVSettings"),
                M = e => {
                    if (w || b) return;
                    if ((0, o.isFeatureEnabled)("disable_save_settings")) return void T ? .logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");
                    if (d.enabled("widget")) return;
                    if (k()) return;
                    if (0 === E.length) return;
                    const t = E;
                    E = [];
                    const n = {};
                    for (let e = t.length; e--;) {
                        const r = t[e];
                        n[r] = x[r] ? ? null
                    }
                    const r = new FormData;
                    r.append("delta", JSON.stringify(n)), e && navigator.sendBeacon ? navigator.sendBeacon("/savesettings/", r) : (0, s.fetch)("/savesettings/", {
                        method: "POST",
                        credentials: "include",
                        body: r
                    }).then((n => {
                        if (n.ok || (E = E.concat(t)), [429, 503].includes(n.status)) {
                            const t = 1e3 * +(n.headers.get("retry-after") || 0) || 3e5;
                            b = setTimeout((() => {
                                b = void 0, M(e)
                            }), t)
                        }
                    })).catch((() => {
                        E = E.concat(t)
                    }))
                },
                A = () => {
                    y = void 0, E.length && M()
                },
                C = (e, t = {}) => {
                    if (_) null == x[e] ? _.removeValue(e) : _.setValue(e, x[e]);
                    else if (k()) try {
                        null == x[e] ? l.TVLocalStorage.removeItem(L(e)) : l.TVLocalStorage.setItem(L(e), x[e])
                    } catch (e) {} else E.push(e), y || (y = setTimeout(A, g));
                    t.skipCrossWindowEvent || c.TVXWindowEvents.emit("settings", JSON.stringify({
                        key: e,
                        value: x[e]
                    }))
                };

            function F(e, t) {
                const n = x[e];
                return n ? ? t
            }

            function N(e, t) {
                const n = F(e);
                if (null == n) return t;
                try {
                    return JSON.parse(n)
                } catch (n) {
                    return $(e), t
                }
            }

            function $(e, t = {}) {
                return null != x[e] && (delete x[e], C(e)), t.forceFlush && M(), W
            }

            function O(e, t, n = {}) {
                const r = "" + t;
                return x[e] !== r && (x[e] = r, C(e, n)), n.forceFlush && !v && (v = setTimeout((() => {
                    v = void 0, M()
                }), h)), W
            }

            function I(e, t, n) {
                return O(e, JSON.stringify(t), n), W
            }

            function R() {
                return Object.keys(x)
            }
            c.TVXWindowEvents.on("settings", (e => {
                const t = JSON.parse(e);
                null == t.value ? delete x[t.key] : x[t.key] = t.value
            }));
            const P = e => {
                    for (let t = 0; t < S.length; ++t)
                        if (S[t].exec(e)) return !0;
                    return !1
                },
                D = e => e.substring(0, m.length) === m,
                V = e => {
                    x = {};
                    const t = 0 === Object.keys(e).length;
                    t || (e => {
                        Object.keys(e).forEach((t => {
                            x[t] = e[t] + ""
                        }))
                    })(e), (e => {
                        for (let t = l.TVLocalStorage.length; t--;) {
                            const n = l.TVLocalStorage.key(t);
                            n && D(n) && (e && O(n.substring(m.length), l.TVLocalStorage.getItem(n)), l.TVLocalStorage.removeItem(n))
                        }
                    })(t)
                },
                U = new u.Delegate;
            const W = {
                loaded: !1,
                loadedModel: !1,
                getValue: F,
                getJSON: N,
                getBool: function(e, t) {
                    const n = F(e);
                    return null == n ? t : !(!n || "false" === n || 0 == +n)
                },
                getFloat: function(e, t) {
                    const n = F(e);
                    if (null == n) return t;
                    const r = parseFloat(n);
                    if (!isFinite(r)) throw new TypeError('"' + n + '" is not float (key: "' + e + '")');
                    return r
                },
                getInt: function(e, t) {
                    const n = F(e);
                    if (null == n) return t;
                    const r = parseInt(n, 10);
                    if (!isFinite(r)) throw new TypeError('"' + n + '" is not int (key: "' + e + '")');
                    return r
                },
                setValue: O,
                setJSON: I,
                remove: $,
                keys: R,
                keysMask: function(e) {
                    const t = R(),
                        n = [],
                        r = new RegExp("^" + (0, a.regExpEscape)(e).replace(/\\\*\\\*/gi, ".+").replace(/\\\*/gi, "[^.]+") + "$", "gi");
                    for (let e = t.length - 1; e >= 0; e--) r.test(t[e]) && n.push(t[e]), r.lastIndex = 0;
                    return n
                },
                sync: function(e) {
                    null !== e ? (_ ? V(_.initialSettings || {}) : k() ? ((() => {
                        if (!window.TradingView.onWidget ? .() || !p.includes(window.location.host)) return;
                        const e = "tradingview.";
                        for (let t = l.TVLocalStorage.length; t--;) {
                            const n = l.TVLocalStorage.key(t);
                            if (0 === n.indexOf(e)) {
                                const t = n.replace(e, f + ".");
                                l.TVLocalStorage.setItem(t, l.TVLocalStorage.getItem(n)), l.TVLocalStorage.removeItem(n)
                            }
                        }
                    })(), (() => {
                        x = {};
                        const e = !d.enabled("save_chart_properties_to_local_storage");
                        for (let t = l.TVLocalStorage.length; t--;) {
                            const n = l.TVLocalStorage.key(t);
                            if (!n || !D(n)) continue;
                            const r = n.substring(m.length);
                            e && !P(r) || (x[r] = l.TVLocalStorage.getItem(n))
                        }
                    })()) : V(e || {}), U.fire()) : w = !0
                },
                onSync: U,
                setSettingsAdapter: function(e) {
                    _ = e
                }
            };
            window.TVSettings = W, document.addEventListener("visibilitychange", (() => {
                "hidden" !== document.visibilityState && !0 !== document.hidden || M()
            })), window.addEventListener("pagehide", (() => {
                M(!0)
            })), window.addEventListener("beforeunload", (() => {
                M(!0)
            })), i.flushDelegate.subscribe(null, (() => {
                M()
            })), setTimeout((async () => {
                const {
                    clearOldSettings: e
                } = await n.e(30362).then(n.bind(n, 276141));
                e()
            }), 3e4)
        },
        889267: (e, t, n) => {
            "use strict";
            n.d(t, {
                isSpread: () => u,
                shortNameFromTokens: () => d,
                tokenize: () => c
            });
            var r = n(173777),
                o = n(125226);
            const i = /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                s = (e = (0, o.isFeatureEnabled)("allow_trailing_whitespace_in_number_token")) => ({
                    number: e ? /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))(?:\s*(?=\s*$))?|\.\d+(?:\s*(?=\s*$))?/ : /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: i,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: r.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                }),
                a = (e = s()) => new RegExp(Object.values(e).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function c(e, t = s()) {
                if (!e) return [];
                const n = [],
                    r = Object.keys(t);
                let o;
                const i = a(t);
                for (; o = i.exec(e);) {
                    let e = !1;
                    for (let t = r.length; t--;)
                        if (o[t + 1]) {
                            r[t] && n.push({
                                value: o[t + 1],
                                type: r[t],
                                precedence: 0,
                                offset: o.index
                            }), e = !0;
                            break
                        }
                    e || n.push({
                        value: o[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: o.index
                    })
                }
                return n
            }

            function l(e) {
                return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e
            }

            function u(e) {
                return e.length > 1 && e.some((e => l(e.type)))
            }

            function d(e) {
                return function(e) {
                    e = function(e) {
                        const t = [];
                        for (const n of e) "whitespace" !== n.type && t.push(n);
                        return t
                    }(e);
                    const t = [],
                        n = [];
                    let r;
                    for (let o = 0; o < e.length; o++) {
                        const i = e[o];
                        switch (i.type) {
                            case "plus":
                            case "minus":
                            case "multiply":
                            case "divide":
                            case "power":
                                n.length && n[n.length - 1].minPrecedence > i.precedence && (n[n.length - 1].minPrecedence = i.precedence);
                                break;
                            case "openBrace":
                                r = {
                                    minPrecedence: 1 / 0,
                                    openBraceIndex: o
                                }, n.push(r);
                                break;
                            case "closeBrace":
                                {
                                    if (r = n.pop(), !r) break;
                                    const i = e[r.openBraceIndex - 1],
                                        s = e[o + 1],
                                        a = i && ("plus" === i.type || "multiply" === i.type);
                                    (!l(s ? .type) || s ? .precedence <= r.minPrecedence) && (!l(i ? .type) || i ? .precedence < r ? .minPrecedence || i ? .precedence === r ? .minPrecedence && a) && (t.unshift(r.openBraceIndex), t.push(o), n.length && n[n.length - 1].minPrecedence > r.minPrecedence && (n[n.length - 1].minPrecedence = r.minPrecedence))
                                }
                        }
                    }
                    for (let n = t.length; n--;) e.splice(t[n], 1);
                    return e
                }(e).reduce(((e, t) => {
                    if ("symbol" !== t.type) return e + t.value;
                    const [, n] = function(e) {
                        const t = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i.exec(e.value);
                        if (null === t) return [void 0, void 0];
                        return [t[1], t[2]]
                    }(t);
                    return n ? e + n : e
                }), "")
            }
        },
        17966: (e, t, n) => {
            "use strict";
            n.d(t, {
                getCircleLogoAnyHtml: () => r.getCircleLogoAnyHtml
            });
            var r = n(467236)
        },
        607546: (e, t, n) => {
            "use strict";
            n.d(t, {
                getLogoUrlsHook: () => r.getLogoUrlsHook
            });
            var r = n(526639)
        },
        526639: (e, t, n) => {
            "use strict";
            n.d(t, {
                getLogoUrlsHook: () => i
            });
            var r = n(849204);
            const o = (0, r.getLogoUrlResolver)();

            function i(e, t) {
                let n = !1;
                return (i, a, c) => {
                    const l = i["currency-logoid"] && i["base-currency-logoid"];
                    if (!n && (i.logoid || l || c)) {
                        n = !0;
                        const a = function(e) {
                            if (2 !== e.length) return e;
                            if (function(e) {
                                    return e.some((e => s(e)))
                                }(e) && ! function(e) {
                                    return e.some((e => e.includes("country") && !s(e)))
                                }(e)) return e.filter((e => !s(e)));
                            return e
                        }(function(e, t = r.LogoSize.Medium) {
                            const n = e.logoid,
                                i = e["base-currency-logoid"],
                                s = e["currency-logoid"],
                                a = n && o.getSymbolLogoUrl(n, t);
                            if (a) return [a];
                            const c = i && o.getSymbolLogoUrl(i, t),
                                l = s && o.getSymbolLogoUrl(s, t);
                            return c && l ? [c, l] : c ? [c] : l ? [l] : []
                        }({
                            logoid: i.logoid,
                            "base-currency-logoid": i["base-currency-logoid"],
                            "currency-logoid": i["currency-logoid"]
                        }, t));
                        e(a)
                    }
                }
            }

            function s(e) {
                return e.includes("country/US")
            }
        },
        547465: (e, t, n) => {
            "use strict";
            n.d(t, {
                Delegate: () => i
            });
            const r = (0, n(735566).getLogger)("Common.Delegate");

            function o(e) {
                return !e.singleShot
            }
            class i {
                constructor() {
                    this.fire = this._fireImpl.bind(this), this._listeners = []
                }
                subscribe(e, t, n) {
                    this._listeners.push({
                        object: e,
                        member: t,
                        singleShot: !!n,
                        skip: !1
                    })
                }
                unsubscribe(e, t) {
                    for (let n = 0; n < this._listeners.length; ++n) {
                        const r = this._listeners[n];
                        if (r.object === e && r.member === t) {
                            r.skip = !0, this._listeners.splice(n, 1);
                            break
                        }
                    }
                }
                unsubscribeAll(e) {
                    for (let t = this._listeners.length - 1; t >= 0; --t) {
                        const n = this._listeners[t];
                        n.object === e && (n.skip = !0, this._listeners.splice(t, 1))
                    }
                }
                destroy() {
                    this._listeners = []
                }
                _fireImpl(...e) {
                    const t = this._listeners;
                    this._listeners = this._listeners.filter(o);
                    const n = t.length;
                    for (let o = 0; o < n; ++o) {
                        const n = t[o];
                        if (!n.skip) try {
                            n.member.apply(n.object || null, e)
                        } catch (e) {
                            r.logError(`${e&&(e.stack||e.message)}`)
                        }
                    }
                }
            }
        },
        862150: (e, t, n) => {
            "use strict";

            function r(e) {
                const t = e;
                return t.release = () => t.destroy(), t.ownership = () => t, t
            }
            n.d(t, {
                ownership: () => r
            })
        },
        212363: e => {
            "use strict";
            var t = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                n = function() {
                    var e = [{
                        pattern: "(",
                        ctor: i
                    }, {
                        pattern: ")",
                        ctor: s
                    }, {
                        pattern: "+",
                        ctor: c
                    }, {
                        pattern: "-",
                        ctor: l
                    }, {
                        pattern: "*",
                        ctor: u
                    }, {
                        pattern: "/",
                        ctor: d
                    }, {
                        pattern: "^",
                        ctor: p
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: m
                    }, {
                        pattern: /\./,
                        ctor: b
                    }, {
                        pattern: /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: f
                    }, {
                        pattern: /'[^']*/,
                        ctor: v
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: o
                    }];

                    function n(e, t) {
                        var n = function() {};
                        return n.prototype = t.prototype, e.prototype = new n, e
                    }

                    function r() {}

                    function o(e) {
                        this.value = e
                    }

                    function i() {}

                    function s() {}

                    function a() {}

                    function c() {}

                    function l() {}

                    function u() {}

                    function d() {}

                    function p() {}
                    r.prototype.toString = function() {
                        return this.value
                    }, n(o, r), n(i, r), i.prototype.value = "(", n(s, r), s.prototype.value = ")", n(a, r), n(c, a), c.prototype.value = "+", c.prototype.precedence = 0, c.prototype.commutative = !0, n(l, a), l.prototype.value = "-", l.prototype.precedence = 0, l.prototype.commutative = !1, n(u, a), u.prototype.value = "*", u.prototype.precedence = 1, u.prototype.commutative = !0, n(d, a), d.prototype.value = "/", d.prototype.precedence = 1, d.prototype.commutative = !1, n(p, a), p.prototype.value = "^", p.prototype.precedence = 2, p.prototype.commutative = !1;
                    var g = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        h = /[+\-/*]/;

                    function f(e) {
                        this.value = e
                    }

                    function m(e) {
                        this.value = e
                    }

                    function y(e) {
                        this.value = e
                    }

                    function v() {
                        f.apply(this, arguments)
                    }

                    function b() {
                        m.apply(this, arguments)
                    }
                    n(f, r), f.prototype.toString = function() {
                            if (this.hasOwnProperty("_ticker")) {
                                var e = h.test(this._ticker) ? "'" : "";
                                return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                            }
                            return this.value
                        }, f.prototype.parse = function() {
                            var e = g.exec(this.value);
                            e[1] && (this._exchange = e[1]), this._ticker = e[2]
                        }, f.prototype.parseAsFutures = function() {
                            this.hasOwnProperty("_ticker") || this.parse();
                            for (var e = function(e) {
                                    return t.some((function(t) {
                                        return t.t === e
                                    }))
                                }, n = 2; n >= 1; --n) {
                                var r = this._ticker.slice(0, n);
                                if (e(r)) {
                                    this._root = r, this._contract = this._ticker.slice(n);
                                    break
                                }
                            }
                        },
                        f.prototype.exchange = function(e) {
                            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                            null == e ? delete this._exchange : this._exchange = e + ""
                        }, f.prototype.ticker = function(e) {
                            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                            null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
                        }, f.prototype.root = function(e) {
                            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                            null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this._contract || "")))
                        }, f.prototype.contract = function(e) {
                            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                            null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                        }, n(m, r), m.prototype.toString = function() {
                            return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                        }, m.prototype.parse = function() {
                            this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                        }, y.prototype.toString = function() {
                            return this.value
                        }, n(v, f), v.prototype.isIncomplete = !0, v.prototype.incompleteSuggest = function() {
                            if ("'" !== this.value) return String("'")
                        }, n(b, m), b.prototype.isIncomplete = !0;
                    var w = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function _(t, n) {
                        var r, i = [];
                        e: for (; r = w.exec(t);) {
                            for (var s = e.length; s--;)
                                if (r[s + 1]) {
                                    if (e[s].ctor) {
                                        var a = new e[s].ctor(r[s + 1]);
                                        a._offset = r.index, i.push(a)
                                    }
                                    continue e
                                }
                            var c = new y(r[0]);
                            c._offset = r.index, i.push(c)
                        }
                        if (n && n.recover) {
                            var l;
                            for (s = i.length; s--;) {
                                var u = i[s];
                                if (u instanceof m || u instanceof f) {
                                    if (void 0 !== l) {
                                        var d = new f(""),
                                            p = i.splice(s, l - s + 1, d);
                                        d.value = p.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    l = s
                                } else u instanceof o || (l = void 0)
                            }
                        }
                        return i
                    }

                    function x(e) {
                        for (var t = [], n = 0; n < e.length; n++) e[n] instanceof o || t.push(e[n]);
                        return t
                    }

                    function E(e) {
                        e = x(e);
                        for (var t, n = [], r = [], o = 0; o < e.length; o++) {
                            var c = e[o];
                            if (c instanceof a) r.length && r[r.length - 1].minPrecedence > c.precedence && (r[r.length - 1].minPrecedence = c.precedence);
                            else if (c instanceof i) r.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: o
                            });
                            else if (c instanceof s) {
                                var l = e[(t = r.pop()).openBraceIndex - 1],
                                    u = e[o + 1];
                                u instanceof a && !(u.precedence <= t.minPrecedence) || !(!(l instanceof a) || l.precedence < t.minPrecedence || l.precedence === t.minPrecedence && l.commutative) || (n.unshift(t.openBraceIndex), n.push(o), r.length && r[r.length - 1].minPrecedence > t.minPrecedence && (r[r.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (o = n.length; o--;) e.splice(n[o], 1);
                        return e
                    }

                    function S(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = _(e)).filter((function(e) {
                            return e instanceof f
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function k(e) {
                        return 1 !== (e = S(e)).length ? null : e[0]
                    }

                    function L(e, t) {
                        return (e = S(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function T(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: _,
                        validate: function(e) {
                            for (var t = "init", n = "var", r = t, c = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, l = [], u = 0; u < e.length; u++) {
                                if (!((p = e[u]) instanceof o)) {
                                    if (delete c.isEmpty, p.isIncomplete) {
                                        var d = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: p._offset,
                                            token: p
                                        };
                                        if (p.incompleteSuggest && (d.recover = {
                                                append: p.incompleteSuggest()
                                            }), c.warnings.push(d), u !== e.length - 1) {
                                            d.status = "error";
                                            continue
                                        }
                                    }
                                    if (p instanceof f || p instanceof m) {
                                        if (r === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        r = n
                                    } else if (p instanceof a) {
                                        if (r !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        r = "operator"
                                    } else if (p instanceof i) {
                                        if (r === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        l.push(p), r = t
                                    } else if (p instanceof s) {
                                        if (r !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: p._offset,
                                                token: p
                                            });
                                            continue
                                        }
                                        l.pop() || c.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: p._offset,
                                            token: p,
                                            recover: {
                                                prepend: new i
                                            }
                                        }), r = n
                                    } else p instanceof y && c.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: p._offset,
                                        token: p
                                    })
                                }
                            }
                            for (c.braceBalance = l.length, r !== n && c.warnings.push({
                                    status: "incomplete"
                                }); l.length;) {
                                var p;
                                d = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (p = l.pop())._offset,
                                    token: p
                                };
                                r === n && (d.recover = {
                                    append: new s
                                }), c.warnings.push(d)
                            }
                            return c.currentState = r, 0 === c.warnings.length && delete c.warnings, 0 === c.errors.length && delete c.errors, c
                        },
                        factorOutBraces: E,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, n = 0, r = 1, c = 2, l = 3, u = n, p = 0, g = 0; g < e.length; g++) {
                                    var h = e[g];
                                    if (!(h instanceof o)) switch (u) {
                                        case n:
                                            if (!(h instanceof m && 1 == +h.value)) return !1;
                                            u = r;
                                            break;
                                        case r:
                                            if (!(u === r && h instanceof d)) return !1;
                                            u = c, t = g + 1;
                                            break;
                                        case c:
                                            if (h instanceof i) u = l, p = 1;
                                            else if (h instanceof a) return !1;
                                            break;
                                        case l:
                                            h instanceof i ? p++ : h instanceof s && --p <= 0 && (u = c)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return E(t || [new m("1"), new d, new i].concat(e).concat(new s))
                        },
                        hasBatsSymbols: function(e) {
                            return L(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = k(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return L(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return L(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: k,
                        getExchanges: S,
                        isExchange: function(e, t) {
                            return !!(e = k(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: f,
                        IncompleteSymbolToken: v,
                        NumberToken: m,
                        BinaryOperatorToken: a,
                        OpenBraceToken: i,
                        CloseBraceToken: s,
                        ticker: function(e) {
                            return new f(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = E(x(_(e)));
                            return t.forEach((function(e) {
                                e instanceof f && e.exchange(null)
                            })), T(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return T(E(x(_(e))))
                        }
                    }
                }();
            e.exports = n
        },
        820028: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedValue: () => r.WatchedValue
            });
            var r = n(158942)
        },
        955722: (e, t, n) => {
            "use strict";
            n.d(t, {
                compareSymbols: () => a,
                encodeExtendedSymbolOrGetSimpleSymbolString: () => i
            });

            function r(e) {
                return "=" + JSON.stringify(o(e))
            }

            function o(e) {
                return Object.keys(e).sort().reduce(((t, n) => ("[object Object]" === Object.prototype.toString.call(e[n]) ? t[n] = o(e[n]) : t[n] = e[n], t)), {})
            }

            function i(e) {
                return Boolean(e.inputs) || function(e) {
                    return Boolean(e.replay)
                }(e) || e.session || e.adjustment || e["currency-id"] || e["unit-id"] ? r(e) : e.symbol
            }
            const s = ["symbol", "session", "unit-id", "currency-id", "adjustment", "backadjustment", "settlement-as-close"];

            function a(e, t) {
                return s.every((n => e[n] === t[n]))
            }
        },
        608571: (e, t, n) => {
            "use strict";
            n.d(t, {
                dateFormatFunctions: () => y,
                getDateFormatWithWeekday: () => v
            });
            var r = n(444372),
                o = n(39654),
                i = n(909456);
            const s = {
                    1: () => r.t(null, void 0, n(562310)),
                    2: () => r.t(null, void 0, n(302507)),
                    3: () => r.t(null, void 0, n(92767)),
                    4: () => r.t(null, void 0, n(227072)),
                    5: () => r.t(null, {
                        context: "short"
                    }, n(13132)),
                    6: () => r.t(null, void 0, n(800429)),
                    7: () => r.t(null, void 0, n(853786)),
                    8: () => r.t(null, void 0, n(546450)),
                    9: () => r.t(null, void 0, n(806816)),
                    10: () => r.t(null, void 0, n(912179)),
                    11: () => r.t(null, void 0, n(526899)),
                    12: () => r.t(null, void 0, n(532084))
                },
                a = {
                    1: () => r.t(null, void 0, n(914568)),
                    2: () => r.t(null, void 0, n(913534)),
                    3: () => r.t(null, void 0, n(914530)),
                    4: () => r.t(null, void 0, n(903762))
                },
                c = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
                l = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
                u = (e, t) => e.toLocaleDateString(window.language ? (0, o.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
                    weekday: "short",
                    timeZone: "local" === t ? void 0 : t
                }),
                d = (e, t) => a[((e, t) => Math.floor((c(e, t) - 1) / 3) + 1)(e, t)](),
                p = (e, t) => (0, i.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
                g = (e, t) => s[c(e, t)](),
                h = (e, t) => (0, i.numberToStringWithLeadingZero)(c(e, t), 2),
                f = (e, t) => (0, i.numberToStringWithLeadingZero)(l(e, t) % 100, 2),
                m = (e, t) => (0, i.numberToStringWithLeadingZero)(l(e, t), 4),
                y = {
                    "qq 'yy": (e, t) => `${d(e,t)} '${f(e,t)}`,
                    "qq yyyy": (e, t) => `${d(e,t)} ${m(e,t)}`,
                    "dd MMM 'yy": (e, t) => `${p(e,t)} ${g(e,t)} '${f(e,t)}`,
                    "MMM 'yy": (e, t) => `${g(e,t)} '${f(e,t)}`,
                    "MMM dd, yyyy": (e, t) => `${g(e,t)} ${p(e,t)}, ${m(e,t)}`,
                    "MMM yyyy": (e, t) => `${g(e,t)} ${m(e,t)}`,
                    "MMM dd": (e, t) => `${g(e,t)} ${p(e,t)}`,
                    "dd MMM": (e, t) => `${p(e,t)} ${g(e,t)}`,
                    "yyyy-MM-dd": (e, t) => `${m(e,t)}-${h(e,t)}-${p(e,t)}`,
                    "yy-MM-dd": (e, t) => `${f(e,t)}-${h(e,t)}-${p(e,t)}`,
                    "yy/MM/dd": (e, t) => `${f(e,t)}/${h(e,t)}/${p(e,t)}`,
                    "yyyy/MM/dd": (e, t) => `${m(e,t)}/${h(e,t)}/${p(e,t)}`,
                    "dd-MM-yyyy": (e, t) => `${p(e,t)}-${h(e,t)}-${m(e,t)}`,
                    "dd-MM-yy": (e, t) => `${p(e,t)}-${h(e,t)}-${f(e,t)}`,
                    "dd/MM/yy": (e, t) => `${p(e,t)}/${h(e,t)}/${f(e,t)}`,
                    "dd/MM/yyyy": (e, t) => `${p(e,t)}/${h(e,t)}/${m(e,t)}`,
                    "MM/dd/yy": (e, t) => `${h(e,t)}/${p(e,t)}/${f(e,t)}`,
                    "MM/dd/yyyy": (e, t) => `${h(e,t)}/${p(e,t)}/${m(e,t)}`
                };

            function v(e, t) {
                return "ja" === window.language ? (n, r) => `${y[e](n,r)} (${u(n,t)})` : (n, r) => `${u(n,t)} ${y[e](n,r)}`
            }
            Object.keys(y)
        },
        870855: (e, t, n) => {
            "use strict";
            new Set([3, 6, 7, 8, 9, 11]), new Set([1, 2])
        },
        67231: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTimeFormatForInterval: () => o
            });
            var r = n(74752);

            function o(e, t) {
                if (e.isRange()) return function(e) {
                    return "12-hours" === e ? r.twelveHourMinuteNonZeroSecondFormat : r.hourMinuteNonZeroSecondFormat
                }(t);
                if (e.isTicks()) return r.hourMinuteSecondMillisecFormat;
                return e.isSeconds() || e.isTicks() ? function(e) {
                    return "12-hours" === e ? r.twelveHourMinuteSecondFormat : r.hourMinuteSecondFormat
                }(t) : function(e) {
                    return "12-hours" === e ? r.twelveHourMinuteFormat : r.hourMinuteFormat
                }(t)
            }
        },
        804617: (e, t, n) => {
            "use strict";
            async function r(e, t, r, o, i, s) {
                return (await Promise.all([n.e(37117), n.e(98185), n.e(61681), n.e(98933), n.e(98158), n.e(50874), n.e(30869), n.e(88620), n.e(76072), n.e(82321), n.e(70978), n.e(11233)]).then(n.bind(n, 427929))).createTabLabelsImp(e, t, r, o, i, s)
            }
            n.d(t, {
                createTabLabels: () => r
            })
        },
        780664: (e, t, n) => {
            "use strict";
            n.d(t, {
                frameElementId: () => o
            });
            const r = window.initData.hashSettings || {},
                o = "string" == typeof r.frameElementId ? r.frameElementId : null
        },
        534328: (e, t, n) => {
            "use strict";
            n.d(t, {
                applyAlpha: () => i,
                applyTransparency: () => a,
                generateColor: () => o,
                resetTransparency: () => c
            });
            var r = n(724377);

            function o(e, t, n) {
                if (t = t || 0, !l(e)) return n ? (0, r.rgbaToString)((0, r.rgba)((0, r.parseRgb)(e), (0, r.normalizeAlphaComponent)(s(t)))) : e;
                const [o, i, a] = (0, r.parseRgb)(e), c = (0, r.normalizeAlphaComponent)(s(t));
                return (0, r.rgbaToString)([o, i, a, c])
            }

            function i(e, t, n) {
                const o = (0, r.tryParseRgba)(e);
                if (null === o) throw new Error(`Invalid color: ${e}`);
                const [i, s, a, c] = o, l = (0, r.normalizeAlphaComponent)(t * (n ? c : 1));
                return (0, r.rgbaToString)((0, r.rgba)([i, s, a], l))
            }

            function s(e) {
                if (e < 0 || e > 100) throw new Error("invalid transparency");
                return 1 - e / 100
            }

            function a(e, t) {
                if ("transparent" === e) return e;
                const n = (0, r.parseRgba)(e),
                    o = n[3];
                return (0, r.rgbaToString)((0, r.rgba)(n[0], n[1], n[2], s(t) * o))
            }

            function c(e) {
                return "transparent" === e ? e : l(e) ? e.slice(0, 7) : (0, r.rgbaToString)((0, r.rgba)((0, r.parseRgb)(e), (0, r.normalizeAlphaComponent)(1)))
            }

            function l(e) {
                return 0 === e.indexOf("#")
            }
        },
        969680: (e, t, n) => {
            "use strict";
            n.d(t, {
                forceLTRStr: () => c,
                isRtl: () => r,
                stripLTRMarks: () => a
            });
            n(64531);
            const r = () => "rtl" === window.document.dir,
                o = "‪",
                i = "‬",
                s = new RegExp("‎|" + o + "|‫|" + i, "g");

            function a(e) {
                return "" !== e && r() && null != e ? e.replace(s, "") : e
            }

            function c(e) {
                return "" !== e && r() && null != e ? o + e + i : e
            }
        },
        184026: (e, t, n) => {
            "use strict";
            var r;

            function o(e) {
                return !(!e || !Object.keys(e).length)
            }
            n.d(t, {
                    isProductDefined: () => o
                }),
                function(e) {
                    e[e.ProPlan = 1] = "ProPlan", e[e.NewsFeed = 3] = "NewsFeed", e[e.Exchange = 4] = "Exchange", e[e.Connection = 6] = "Connection", e[e.Coins = 8] = "Coins"
                }(r || (r = {}))
        },
        224528: (e, t, n) => {
            "use strict";

            function r() {
                try {
                    return JSON.parse(decodeURIComponent(location.hash.substring(1)))
                } catch (e) {
                    return {}
                }
            }
            n.d(t, {
                parseUrlHashParams: () => r
            })
        },
        779893: (e, t, n) => {
            const r = n(647793);
            e.exports = r, r(document).ajaxSend(((e, t, n) => {
                n.crossDomain && !n.forceLanguageHeader || (window.locale ? t.setRequestHeader("X-Language", window.locale) : console.warn("window.locale is not defined"))
            }))
        },
        981191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getMiniTimeFrameOptions: () => a
            });
            var r = n(873146);
            const o = Date.now();

            function i(e) {
                const t = new Date(o);
                return t.setMonth(t.getMonth() - e), Math.trunc(t.valueOf() / 1e3)
            }

            function s(e) {
                const t = new Date(o);
                return t.setFullYear(t.getFullYear() - e), Math.trunc(t.valueOf() / 1e3)
            }

            function a(e) {
                const t = (0, r.getTimeFrames)();
                return [{ ...t[e ? "lastsession" : "1d"]
                }, { ...t["1m"],
                    targetResolution: "1D",
                    from: i(1)
                }, { ...t["3m"],
                    targetResolution: "1D",
                    from: i(3)
                }, { ...t["12m"],
                    from: s(1)
                }, { ...t["60m"],
                    targetResolution: "1M",
                    from: s(5)
                }, { ...t.all
                }]
            }
        },
        873146: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTimeFrames: () => i
            });
            var r = n(444372),
                o = n(737986);

            function i(e) {
                return {
                    "1d": {
                        text: r.t(null, void 0, n(207075)),
                        value: {
                            value: "1D",
                            type: "period-back"
                        },
                        targetResolution: e ? .["1D"] ? ? (0, o.stringAsResolution)("1"),
                        description: (0, o.daysStringLiteral)(1)
                    },
                    "5d": {
                        text: r.t(null, void 0, n(558628)),
                        value: {
                            value: "5D",
                            type: "period-back"
                        },
                        targetResolution: e ? .["5D"] ? ? (0, o.stringAsResolution)("5"),
                        description: (0, o.daysStringLiteral)(5)
                    },
                    "1w": {
                        text: r.t(null, void 0, n(189696)),
                        value: {
                            value: "7D",
                            type: "period-back"
                        },
                        targetResolution: e ? .["5W"] ? ? (0, o.stringAsResolution)("15"),
                        description: (0, o.weeksStringLiteral)(1)
                    },
                    "1m": {
                        text: r.t(null, void 0, n(333493)),
                        value: {
                            value: "1M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["1M"] ? ? (0, o.stringAsResolution)("30"),
                        description: (0, o.monthsStringLiteral)(1)
                    },
                    "3m": {
                        text: r.t(null, void 0, n(318717)),
                        value: {
                            value: "3M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["3M"] ? ? (0, o.stringAsResolution)("60"),
                        description: (0, o.monthsStringLiteral)(3)
                    },
                    "6m": {
                        text: r.t(null, void 0, n(869411)),
                        value: {
                            value: "6M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["6M"] ? ? (0, o.stringAsResolution)("120"),
                        description: (0, o.monthsStringLiteral)(6)
                    },
                    "12m": {
                        text: r.t(null, void 0, n(186322)),
                        value: {
                            value: "12M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["12M"] ? ? (0, o.stringAsResolution)("1D"),
                        description: (0, o.yearsStringLiteral)(1)
                    },
                    "24m": {
                        text: r.t(null, void 0, n(745391)),
                        value: {
                            value: "24M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["24M"] ? ? (0, o.stringAsResolution)("1W"),
                        description: (0, o.yearsStringLiteral)(2)
                    },
                    "36m": {
                        text: r.t(null, void 0, n(189992)),
                        value: {
                            value: "36M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["36M"] ? ? (0, o.stringAsResolution)("1W"),
                        description: (0, o.yearsStringLiteral)(3)
                    },
                    "60m": {
                        text: r.t(null, void 0, n(772834)),
                        value: {
                            value: "60M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["60M"] ? ? (0, o.stringAsResolution)("1W"),
                        description: (0, o.yearsStringLiteral)(5)
                    },
                    "120m": {
                        text: r.t(null, void 0, n(27969)),
                        value: {
                            value: "120M",
                            type: "period-back"
                        },
                        targetResolution: e ? .["120M"] ? ? (0, o.stringAsResolution)("1M"),
                        description: (0, o.yearsStringLiteral)(10)
                    },
                    ytd: {
                        text: r.t(null, void 0, n(168881)),
                        value: {
                            value: "YTD",
                            type: "period-back"
                        },
                        targetResolution: e ? .YTD ? ? (0, o.stringAsResolution)("1D"),
                        description: r.t(null, void 0, n(251478))
                    },
                    all: {
                        text: r.t(null, void 0, n(580066)),
                        value: {
                            value: "ALL",
                            type: "period-back"
                        },
                        targetResolution: e ? .ALL ? ? (0, o.stringAsResolution)("1M")
                    },
                    lastsession: {
                        text: r.t(null, void 0, n(207075)),
                        value: {
                            value: "LASTSESSION",
                            type: "period-back"
                        },
                        targetResolution: e ? .LASTSESSION ? ? (0, o.stringAsResolution)("1"),
                        description: (0, o.daysStringLiteral)(1)
                    }
                }
            }
        },
        737986: (e, t, n) => {
            "use strict";
            n.d(t, {
                daysStringLiteral: () => o,
                monthsStringLiteral: () => s,
                stringAsResolution: () => c,
                weeksStringLiteral: () => i,
                yearsStringLiteral: () => a
            });
            var r = n(444372);
            const o = e => r.t(null, {
                    plural: "{str} days",
                    count: e,
                    replace: {
                        str: `${e}`
                    }
                }, n(862368)),
                i = e => r.t(null, {
                    plural: "{str} weeks",
                    count: e,
                    replace: {
                        str: `${e}`
                    }
                }, n(149306)),
                s = e => r.t(null, {
                    plural: "{str} months",
                    count: e,
                    replace: {
                        str: `${e}`
                    }
                }, n(520062)),
                a = e => r.t(null, {
                    plural: "{str} years",
                    count: e,
                    replace: {
                        str: `${e}`
                    }
                }, n(791549)),
                c = e => e
        },
        412541: (e, t, n) => {
            "use strict";
            n.d(t, {
                getActualTimeFrame: () => o
            });
            var r = n(873146);

            function o(e) {
                const t = new Set(Object.values((0, r.getTimeFrames)()).map((e => e.value.value)));
                if (t.has(e)) return e;
                const n = e.toUpperCase();
                return t.has(n) ? n : "12M"
            }
        },
        950668: (e, t, n) => {
            "use strict";
            n.d(t, {
                timeFrames: () => r
            });
            const r = (0, n(873146).getTimeFrames)()
        },
        623213: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                guid: () => i,
                randomHash: () => s,
                randomHashN: () => a
            });
            const r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
                o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function i() {
                return r.replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function s() {
                return a(12)
            }

            function a(e) {
                let t = "";
                for (let n = 0; n < e; ++n) {
                    const e = Math.floor(Math.random() * o.length);
                    t += o[e]
                }
                return t
            }
        },
        202726: (e, t, n) => {
            "use strict";

            function r(e, t) {
                const n = Object.create(Object.getPrototypeOf(e));
                for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            n.d(t, {
                pickFields: () => r
            })
        },
        437861: (e, t, n) => {
            "use strict";
            n.d(t, {
                handleTVLinksClick: () => s
            });
            var r = n(439563),
                o = n(283834),
                i = n(974629);

            function s() {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(":link");
                    if (!t ? .hostname || !(0, i.isInternalHost)(t.hostname, "tradingview.com")) return;
                    const n = t.dataset.targetType || null;
                    ! function(e, t) {
                        const n = function() {
                                const e = window.initData.hashSettings;
                                if (Object.keys(e).length > 0) return (0, o.filterUtmInfo)(e);
                                const t = new URLSearchParams(location.href);
                                return {
                                    utm_campaign: t.get("utm_campaign") || void 0,
                                    utm_source: t.get("utm_source") || void 0
                                }
                            }(),
                            i = function(e) {
                                const t = location.ancestorOrigins ? .[0] || document.referrer;
                                return e.utm_source || function(e) {
                                    try {
                                        return new URL(e).host
                                    } catch (e) {
                                        return ""
                                    }
                                }(t)
                            }(n),
                            s = {
                                widget_type: a(n),
                                domain: i,
                                link: e,
                                target_type: t
                            };
                        !async function(e) {
                            (await (0, r.getEmbedWidgetTracker)()) ? .trackWidgetTVLinkClick(e)
                        }(s)
                    }(t.href, n)
                }))
            }

            function a(e) {
                if (e.utm_campaign) return e.utm_campaign;
                const t = location.pathname;
                return t.includes("embed-widget") ? t.split("/")[2] : t
            }
        },
        631013: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackWidgetLoadMetaInfo: () => o
            });
            var r = n(439563);
            async function o(e) {
                Math.random() > .005 || (await (0, r.getEmbedWidgetTracker)()) ? .trackWidgetLoadMetaInfo(e)
            }
        },
        108999: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="14"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"/></svg>'
        }
    }
]);