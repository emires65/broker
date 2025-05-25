(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [36511], {
        116313: t => {
            t.exports = {
                wrapper: "wrapper-TJ9ObuLF",
                animated: "animated-TJ9ObuLF",
                pulsation: "pulsation-TJ9ObuLF"
            }
        },
        686962: t => {
            t.exports = {}
        },
        646021: t => {
            t.exports = {
                "common-tooltip": "common-tooltip-EJBD96zX",
                "common-tooltip--hidden": "common-tooltip--hidden-EJBD96zX",
                "common-tooltip--horizontal": "common-tooltip--horizontal-EJBD96zX",
                "common-tooltip--farther": "common-tooltip--farther-EJBD96zX",
                "common-tooltip--vertical": "common-tooltip--vertical-EJBD96zX",
                "common-tooltip-farther": "common-tooltip-farther-EJBD96zX",
                "common-tooltip--direction_normal": "common-tooltip--direction_normal-EJBD96zX",
                "common-tooltip__body": "common-tooltip__body-EJBD96zX",
                "common-tooltip__button-container": "common-tooltip__button-container-EJBD96zX",
                "common-tooltip__body--no-buttons": "common-tooltip__body--no-buttons-EJBD96zX",
                "common-tooltip__button": "common-tooltip__button-EJBD96zX",
                "common-tooltip--direction_reversed": "common-tooltip--direction_reversed-EJBD96zX",
                "common-tooltip__ear-holder": "common-tooltip__ear-holder-EJBD96zX",
                "common-tooltip__ear-holder--below": "common-tooltip__ear-holder--below-EJBD96zX",
                "common-tooltip__ear-holder--above": "common-tooltip__ear-holder--above-EJBD96zX",
                "common-tooltip__ear-holder--before": "common-tooltip__ear-holder--before-EJBD96zX",
                "common-tooltip__ear-holder--after": "common-tooltip__ear-holder--after-EJBD96zX",
                "common-tooltip__body--with-hotkey": "common-tooltip__body--with-hotkey-EJBD96zX",
                "common-tooltip__body--width_wide": "common-tooltip__body--width_wide-EJBD96zX",
                "common-tooltip__body--width_narrow": "common-tooltip__body--width_narrow-EJBD96zX",
                "common-tooltip__body--no-padding": "common-tooltip__body--no-padding-EJBD96zX",
                "common-tooltip__hotkey-block": "common-tooltip__hotkey-block-EJBD96zX",
                "common-tooltip__hotkey-block--divider": "common-tooltip__hotkey-block--divider-EJBD96zX",
                "common-tooltip__hotkey-text": "common-tooltip__hotkey-text-EJBD96zX",
                "common-tooltip__hotkey-button": "common-tooltip__hotkey-button-EJBD96zX",
                "common-tooltip__plus-sign": "common-tooltip__plus-sign-EJBD96zX"
            }
        },
        764250: (t, e, o) => {
            "use strict";
            o.d(e, {
                ActionGroup: () => i
            });
            class n {
                constructor(t, e) {
                    this._group = t;
                    const {
                        hotkey: o,
                        handler: n,
                        desc: i,
                        isDisabled: r,
                        element: s = null,
                        isRepeatAccepted: a = !1
                    } = e;
                    this.hotkey = o, this.handler = n, this.desc = i, this.element = s, this.isRepeatAccepted = a, this.isDisabled = r ? "function" == typeof r ? r : () => !0 : () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class i {
                constructor(t, e) {
                    this._actions = new Map, this._manager = t, this.order = e ? .order ? ? 0, this.modal = !(!e || !e.modal), e && (this.desc = e.desc), e && e.isDisabled ? "function" == typeof e.isDisabled ? this.isDisabled = e.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(t) {
                    let e = this._actions.get(t.hotkey);
                    e || (e = [], this._actions.set(t.hotkey, e));
                    const o = new n(this, t);
                    return e.push(o), o
                }
                remove(t) {
                    const e = this._actions.get(t.hotkey);
                    if (!e) return;
                    const o = e.findIndex((e => e === t));
                    o >= 0 && (1 === e.length ? this._actions.delete(t.hotkey) : e.splice(o, 1))
                }
                handleHotkey(t, e) {
                    const o = this._actions.get(t);
                    if (!o) return !1;
                    for (const n of o)
                        if ((!n.element || e.target && n.element.contains(e.target)) && !n.isDisabled(e)) return e.repeat && !n.isRepeatAccepted || (n.handler(e), this._callMatchedHotkeyHandler(t)), e.preventDefault(), !0;
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    for (const [, t] of this._actions)
                        for (const e of t) e.destroy();
                    this._actions.clear(), this._manager.unregisterGroup(this)
                }
                static setMatchedHotkeyHandler(t) {
                    i._matchedHotkeyHandler = t
                }
                _callMatchedHotkeyHandler(t) {
                    i._matchedHotkeyHandler && i._matchedHotkeyHandler(t)
                }
            }
        },
        163586: (t, e, o) => {
            "use strict";
            o.d(e, {
                ActionManager: () => l
            });
            var n = o(158942),
                i = o(591800),
                r = o(607423);
            class s {
                constructor(t, e) {
                    this.modifiers = t, this.code = e
                }
                altOrOptionCode() {
                    return "AltLeft" === this.code || "AltRight" === this.code
                }
                controlOrMetaCode() {
                    return i.isMacKeyboard ? "MetaLeft" === this.code || "MetaRight" === this.code || "OSLeft" === this.code || "OSRight" === this.code : "ControlLeft" === this.code || "ControlRight" === this.code
                }
            }
            class a extends n.WatchedValue {
                setValue(t, e) {
                    const o = this.value();
                    (e || void 0 === o || o.code !== t.code || o.modifiers !== t.modifiers) && super.setValue(t)
                }
            }
            class l {
                constructor() {
                    this._groups = [], this._pressedKeys = new n.WatchedValue(0), this._keyboardPressedKeysState = new a(new s(0)), this._keyDownListener = t => {
                        if (t.defaultPrevented) return;
                        const e = (0, i.hashFromEvent)(t);
                        if (this._pressedKeys.setValue(e), this._keyboardPressedKeysState.setValue(new s((0, i.modifiersFromEvent)(t), t.code)), !(0, r.isNativeUIInteraction)(e, t.target))
                            for (let o = this._groups.length; o-- > 0;) {
                                const n = this._groups[o];
                                if (!n.isDisabled()) {
                                    if (n.handleHotkey(e, t)) return;
                                    if (n.modal) return
                                }
                            }
                    }, this._keyUpListener = t => {
                        const e = (0, i.hashFromEvent)(t);
                        this._pressedKeys.setValue(e), this._keyboardPressedKeysState.setValue(new s((0, i.modifiersFromEvent)(t), ""))
                    }, this._blurEvent = () => {
                        this._pressedKeys.setValue(0), this._keyboardPressedKeysState.setValue(new s(0, ""))
                    }, this._mouseEvent = t => {
                        const e = (0, i.modifiersFromEvent)(t),
                            o = 255 & (this._pressedKeys.value() ? ? 0);
                        this._pressedKeys.setValue(e | o)
                    }
                }
                listen(t) {
                    t.addEventListener("keydown", this._keyDownListener), t.addEventListener("keyup", this._keyUpListener), t.addEventListener("blur", this._blurEvent), t.addEventListener("mousemove", this._mouseEvent)
                }
                unlisten(t) {
                    t.removeEventListener("keydown", this._keyDownListener), t.removeEventListener("keyup", this._keyUpListener), t.removeEventListener("blur", this._blurEvent), t.removeEventListener("mousemove", this._mouseEvent)
                }
                registerGroup(t) {
                    this._groups.push(t), this.sortGroups()
                }
                unregisterGroup(t) {
                    for (let e = this._groups.length; e--;) this._groups[e] === t && this._groups.splice(e, 1)
                }
                promoteGroup(t) {
                    const e = this._getModalOrderEpoch(),
                        o = c(t, e);
                    let n = this._groups.findIndex((t => c(t, e) === o)),
                        i = 0;
                    for (; n < this._groups.length && c(this._groups[n], e) === o;) {
                        const r = this._groups[n];
                        r === t ? i = 1 : c(r, e) === o && (this._groups[n - i] = r), n++
                    }
                    this._groups[n - i] = t
                }
                pressedKeys() {
                    return this._pressedKeys.readonly()
                }
                keyboardPressedKeysState() {
                    return this._keyboardPressedKeysState.readonly()
                }
                sortGroups() {
                    const t = this._getModalOrderEpoch();
                    this._groups.sort(((e, o) => c(o, t) - c(e, t)))
                }
                _getMinOrder() {
                    return this._groups.reduce(((t, e) => Math.min(t, e.order)), 0)
                }
                _getModalOrderEpoch() {
                    return -2 * (Math.abs(this._getMinOrder()) - 1)
                }
            }

            function c(t, e) {
                return t.order + (t.modal ? e : 0)
            }
        },
        129592: (t, e, o) => {
            "use strict";
            o.d(e, {
                createGroup: () => s,
                registerWindow: () => a
            });
            var n = o(163586),
                i = o(764250);
            o(591800);
            const r = new n.ActionManager;
            r.pressedKeys(), r.keyboardPressedKeysState();

            function s(t) {
                return new i.ActionGroup(r, t)
            }

            function a(t) {
                r.listen(t)
            }
        },
        378338: (t, e, o) => {
            "use strict";
            o.d(e, {
                t: () => n
            });
            const n = o.i18next
        },
        842060: (t, e, o) => {
            "use strict";
            o.d(e, {
                getStyleClasses: () => l,
                isCircleLogoWithUrlProps: () => c
            });
            var n = o(497754),
                i = o.n(n),
                r = o(548729),
                s = o(757554),
                a = o.n(s);

            function l(t, e = 2, o) {
                return i()(a().logo, a()[t], o, 0 === e || 1 === e ? i()(r.skeletonTheme.wrapper, a().skeleton) : a().letter, 1 === e && r.skeletonTheme.animated)
            }

            function c(t) {
                return "logoUrl" in t && null !== t.logoUrl && void 0 !== t.logoUrl && 0 !== t.logoUrl.length
            }
        },
        548729: (t, e, o) => {
            "use strict";
            o.d(e, {
                skeletonTheme: () => i
            });
            var n = o(116313);
            const i = n
        },
        499994: (t, e, o) => {
            "use strict";
            o.d(e, {
                getTooltipData: () => i,
                setTooltipData: () => r
            });
            const n = new WeakMap;

            function i(t, e) {
                const o = n.get(t);
                return o instanceof Function ? o(e) : o && o[e]
            }

            function r(t, e, o) {
                if (o instanceof Function) return void n.set(t, o);
                const i = n.get(t),
                    r = void 0 === i || i instanceof Function ? {} : i;
                r[e] = o, n.set(t, r)
            }
        },
        471802: (t, e, o) => {
            "use strict";
            o.d(e, {
                getDataFromTarget: () => p,
                getTooltip: () => g,
                hideTooltip: () => _,
                setStyle: () => f,
                showTooltip: () => y
            });
            var n = o(650151),
                i = o(760863),
                r = o(969680),
                s = (o(142492), o(982528)),
                a = o(982367),
                l = o(638456);
            const c = {
                    default: "",
                    white: "theme-white",
                    chart: "theme-chart",
                    "round-shadow": "theme-round-shadow"
                },
                d = Object.keys(c);
            var u = o(499994),
                m = o(604286),
                h = o(646021);

            function p(t) {
                const e = function(t) {
                        const e = t.hasAttribute("data-tooltip") ? t.getAttribute("data-tooltip") : t.getAttribute("title");
                        return e && ((0, u.setTooltipData)(t, "text", e), t.removeAttribute("title")), (0, u.getTooltipData)(t, "text") || ""
                    }(t),
                    o = t.getBoundingClientRect(),
                    n = {
                        h: o.height,
                        w: o.width,
                        x: o.left,
                        y: o.top
                    },
                    i = t.getAttribute("data-color-theme") || "",
                    r = t.classList.contains("common-tooltip-html"),
                    s = parseInt(t.getAttribute("data-tooltip-delay") || ""),
                    a = parseInt(t.getAttribute("data-tooltip-debounce") || "");
                let l = {
                    type: "none"
                };
                return e && (l = {
                    type: r ? "html" : "text",
                    data: e
                }), {
                    above: t.classList.contains("common-tooltip-above"),
                    below: t.classList.contains("common-tooltip-below"),
                    otl: t.classList.contains("common-tooltip-otl"),
                    otr: t.classList.contains("common-tooltip-otr"),
                    vertical: t.classList.contains("common-tooltip-vertical"),
                    hotkey: t.getAttribute("data-tooltip-hotkey"),
                    narrow: t.classList.contains("common-tooltip-narrow"),
                    wide: t.classList.contains("common-tooltip-wide"),
                    colorTheme: i,
                    tooltipDelay: s,
                    tooltipDebounce: a,
                    rect: n,
                    content: l,
                    target: t
                }
            }

            function g(t) {
                const e = (0, n.ensureNotNull)(L).cloneNode(!0),
                    o = T(e),
                    {
                        content: i
                    } = t;
                switch (i.type) {
                    case "element":
                        o.innerHTML = "", o.appendChild(i.data);
                        break;
                    case "html":
                        o.innerHTML = i.data;
                        break;
                    case "text":
                        if (t.hotkey) {
                            const t = (0, n.ensureNotNull)(S).cloneNode(!0);
                            t.innerText = i.data, o.appendChild(t)
                        } else o.innerText = i.data
                }
                if (t.hotkey) {
                    const e = "none" !== i.type,
                        r = (0, n.ensureNotNull)(E).cloneNode(!0),
                        s = (0, m.hotKeyDeserialize)(t.hotkey),
                        a = s.keys.map((t => `<span class="${h["common-tooltip__hotkey-button"]}">${t}</span>`));
                    r.innerHTML = function(t, e) {
                        const o = /{\d}|{hotkey_\d}/gi;
                        return t.replace(o, (t => {
                            const o = Number(t.match(/\d/));
                            return e[o]
                        }))
                    }(s.text, a).replace(/\s\+\s/g, `<span class="${h["common-tooltip__plus-sign"]}">+</span>`), o.classList.add(h["common-tooltip__body--with-hotkey"]), e && r.classList.add(h["common-tooltip__hotkey-block--divider"]), o.appendChild(r)
                }
                return e.addEventListener("contextmenu", s.preventDefault), e
            }

            function f(t, e) {
                const o = e.rect;
                if (!o) return;
                ! function(t, e) {
                    const o = d.includes(e) ? c[e] : "";
                    t.classList.remove(...d.map((t => c[t])).filter((t => !!t))), o && !t.classList.contains(o) && t.classList.add(o)
                }(t, e.colorTheme || "default"), e.addClass && t.classList.add(e.addClass);
                const n = T(t),
                    i = t.querySelector(`.${h["common-tooltip__button-container"]}`);
                n.classList.toggle(h["common-tooltip__body--width_wide"], Boolean(e.wide)), n.classList.toggle(h["common-tooltip__body--no-padding"], Boolean(e.noPadding)), n.classList.toggle(h["common-tooltip__body--width_narrow"], Boolean(e.narrow)), n.classList.toggle(h["common-tooltip__body--no-buttons"], !0), n.style.left = w(0), n.style.width = w(n.clientWidth + (Boolean(e.noPadding) ? 0 : 2));
                const s = document.body.clientWidth,
                    u = l.CheckMobile.iOS() || l.CheckMobile.Android() || (0, l.supportTouch)() && (0, l.isMac)() ? window.innerHeight : document.body.clientHeight,
                    m = e.vertical,
                    p = e.extendMargin || m && o.w < 20 || !m && o.h < 20;
                t.classList.toggle(h["common-tooltip--farther"], p), t.classList.toggle(h["common-tooltip--vertical"], m), t.classList.toggle(h["common-tooltip--horizontal"], !m);
                const g = function(t) {
                        return t.querySelector(`.${h["common-tooltip__ear-holder"]}`)
                    }(t),
                    f = t.offsetHeight;
                if (m) {
                    const l = 10,
                        c = u - 10,
                        d = 12,
                        m = l + d,
                        p = c - d,
                        y = (0, a.clamp)(o.y + o.h / 2, m, p) - f / 2,
                        _ = y + f;
                    t.style.left = w(o.x + o.w), t.style.top = w(y), y < l ? n.style.top = i.style.top = w(l - y) : _ > c && (n.style.top = i.style.top = w(c - _));
                    const {
                        right: b
                    } = (t.querySelector(":last-child") || n).getBoundingClientRect(), v = b + 10 > s;
                    t.classList.toggle(h["common-tooltip--direction_reversed"], v), t.classList.toggle(h["common-tooltip--direction_normal"], !v);
                    let k = v ? "after" : "before";
                    (0, r.isRtl)() ? (k = e.otr ? "after" : k, k = e.otl ? "before" : k) : (k = e.otr ? "before" : k, k = e.otl ? "after" : k), g.classList.toggle(h["common-tooltip__ear-holder--before"], "before" === k), g.classList.toggle(h["common-tooltip__ear-holder--after"], "after" === k), "after" === k && (t.style.left = "auto", t.style.right = w(s - o.x))
                } else {
                    const r = o.x - (n.offsetWidth - o.w) / 2,
                        a = s - t.offsetWidth - 20 <= 0 ? (s - t.offsetWidth) / 2 : 10,
                        l = s - a - t.offsetWidth,
                        c = Math.max(a, Math.min(r, l));
                    t.style.left = w(c);
                    const d = l < r;
                    t.classList.toggle(h["common-tooltip--direction_reversed"], d), t.classList.toggle(h["common-tooltip--direction_normal"], !d);
                    const m = function(t, e, o, n) {
                        if (t.above) return D(e, n) ? "above" : "below";
                        if (t.below) return function(t, e, o) {
                            return o.y + o.h + e + 10 < t
                        }(e, o, n) ? "below" : "above";
                        return D(o, n) ? "above" : "below"
                    }(e, u, f, o);
                    "above" === m ? t.style.bottom = w(u - o.y) : t.style.top = w(o.y + o.h),
                        g.classList.add("above" === m ? h["common-tooltip__ear-holder--above"] : h["common-tooltip__ear-holder--below"]);
                    const {
                        left: p
                    } = n.getBoundingClientRect();
                    let y = Math.trunc(o.x + o.w / 2 - (p + n.clientWidth / 2));
                    t.style.left = w(c + y), t.style.width = w(n.clientWidth + i.clientWidth), y = d ? Math.max(0, y) : Math.min(0, y), i.style.left = w(-y), n.style.left = w(-y)
                }
            }

            function y(t) {
                t.classList.toggle(h["common-tooltip--hidden"], !1)
            }

            function _(t) {
                t.classList.toggle(h["common-tooltip--hidden"], !0)
            }

            function w(t) {
                return `${Math.floor(t)}px`
            }
            const b = `\n\t<div id="common-tooltip-wrapper" class="${h["common-tooltip"]}">\n\t\t<div class="${h["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${h["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${h["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                v = `\n\t<div class="${h["common-tooltip__hotkey-block"]}"></div>\n`,
                k = `\n\t<div class="${h["common-tooltip__hotkey-text"]}"></div>\n`,
                L = (0, i.parseHtmlElement)(b),
                E = (0, i.parseHtmlElement)(v),
                S = (0, i.parseHtmlElement)(k);

            function T(t) {
                return t.querySelector(`.${h["common-tooltip__body"]}`)
            }

            function D(t, e) {
                return 10 + t < e.y
            }
        },
        630112: (t, e, o) => {
            "use strict";
            o.d(e, {
                empty: () => s,
                setTooltip: () => a
            });
            const n = "tooltip-root-element";
            let i;

            function r() {
                const t = document.getElementById(n);
                t ? i = t : (i = document.createElement("div"), i.id = n, document.body.appendChild(i))
            }

            function s() {
                i && (i.innerHTML = "")
            }

            function a(t) {
                s(), i && i.appendChild(t)
            }
            "interactive" === document.readyState ? r() : document.addEventListener("DOMContentLoaded", r)
        },
        112539: (t, e, o) => {
            "use strict";
            o.d(e, {
                clearSchedule: () => s,
                scheduleHide: () => l,
                scheduleRemove: () => a,
                scheduleRender: () => c
            });
            let n = 0,
                i = 0,
                r = 0;

            function s() {
                clearTimeout(n), clearTimeout(i), clearTimeout(r)
            }

            function a(t, e) {
                r = setTimeout(t, e)
            }

            function l(t, e) {
                i = setTimeout(t, e)
            }

            function c(t, e) {
                n = setTimeout(t, e)
            }
        },
        23580: (t, e, o) => {
            "use strict";

            function n(t, e) {
                return t && t.utm_campaign && (t.utm_campaign += `-${e}`), t
            }
            async function i(t, e, n, i) {
                if ("lentaru" === t) {
                    const {
                        getLentaCopyrightData: t
                    } = await Promise.all([o.e(90431), o.e(1523)]).then(o.bind(o, 466672));
                    return t()
                }
                if ("cmoneycomtw" === t) {
                    const {
                        getCmoneycomtwCopyrightData: t
                    } = await Promise.all([o.e(47597), o.e(99578), o.e(42091)]).then(o.bind(o, 20922));
                    return t(e, n)
                }
                if ("new" === i) {
                    const {
                        getTradingViewCopyrightData: t
                    } = await Promise.all([o.e(88380), o.e(36228)]).then(o.bind(o, 703094));
                    return t(e, n)
                }
                if ("with_border" === i) {
                    const {
                        getTradingViewCopyrightData: t
                    } = await Promise.all([o.e(62764), o.e(37753)]).then(o.bind(o, 513316));
                    return t(e, n)
                }
                if ("large_trade" === i) {
                    const {
                        getTradingViewCopyrightData: t
                    } = await Promise.all([o.e(52431), o.e(47259)]).then(o.bind(o, 203515));
                    return t(e, n)
                } {
                    const {
                        getTradingViewCopyrightData: t
                    } = await Promise.all([o.e(47597), o.e(53259)]).then(o.bind(o, 88136));
                    return t(e, n)
                }
            }
            o.d(e, {
                addUtmCampaignSource: () => n,
                getCustomerCopyrightData: () => i
            })
        },
        650401: (t, e, o) => {
            "use strict";
            o.d(e, {
                getWidgetSheriffActions: () => c
            });
            var n = o(735566),
                i = o(803912),
                r = o(952598);
            const s = window.WIDGET_SHERIFF_HOST || "https://widget-sheriff.xstaging-widget.tv",
                a = (0, n.getLogger)("WidgetSheriff.Widget");
            let l = null;
            async function c() {
                return null === l && (l = await async function() {
                    const t = function() {
                        if (document.location.ancestorOrigins && document.location.ancestorOrigins.length) return document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1];
                        try {
                            return new URL(document.referrer).origin
                        } catch (t) {
                            return document.location.origin || null
                        }
                    }();
                    if (null === t) return a.logWarn("ancestorOrigin is undefined"), Promise.resolve([]);
                    const e = new URL("/sheriff/api/v1/rules/search", s);
                    e.searchParams.append("origin", t);
                    return (await (0, i.fetch)(e.toJSON()).then((t => {
                        if (!t.ok) throw new Error("Guard request error occured");
                        return 204 === t.status ? Promise.resolve({
                            actions: []
                        }) : t.json()
                    })).catch((t => (a.logWarn(t.message), Promise.resolve({
                        actions: []
                    }))))).actions.filter((t => r.widgetSheriffActions.has(t)))
                }()), Promise.resolve(l)
            }
        },
        175341: (t, e, o) => {
            "use strict";
            o.d(e, {
                createEmbedWidgetWrapper: () => l
            });
            var n = o(650151),
                i = o(650401),
                r = o(351079),
                s = o(23580),
                a = o(952598);

            function l(t, e, o, l = {}) {
                if (null === t.parentElement) return console.warn("Can not wrap 'elWidgetContainer' because it has no parentElement"), t;
                let c = null,
                    d = document.querySelector(".js-embed-widget-body");
                const u = null !== d;
                if (u) {
                    d = (0, n.ensureNotNull)(d), c = (0, n.ensureNotNull)(d.parentElement);
                    let t = document.querySelector(".js-embed-widget-head");
                    null === t && (t = document.createElement("div"), t.classList.add("tv-embed-widget-wrapper__header"), t.classList.add("js-embed-widget-head"), c.insertBefore(t, d))
                } else c = document.createElement("div"), c.classList.add("tv-embed-widget-wrapper"), c.innerHTML = '<div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div><div class="tv-embed-widget-wrapper__body js-embed-widget-body"></div>', d = c.querySelector(".js-embed-widget-body");
                if (l.overflowAuto && d.classList.add("tv-embed-widget-wrapper__body--overflow_auto"), l.showBorderOnTransparent && d.classList.add("tv-embed-widget-wrapper__body--border-on-transparent"), !l.isWhiteLabel) {
                    !async function(t, e, o, l, c = {}) {
                        const d = c.isSheriffDisabled ? [] : await (0, i.getWidgetSheriffActions)(),
                            u = d.includes(a.KnownAction.LargeTradeLogo),
                            m = function(t) {
                                return ["crypto-coins-heatmap", "forex-cross-rates", "market-overview", "symbol-overview", "market-quotes", "stock-heatmap", "screener", "forex-heat-map", "crypto-mkt-screener", "events", "hotlists"].includes(t)
                            }(e),
                            h = u && m ? "large_trade" : void 0,
                            p = await (0, s.getCustomerCopyrightData)(c.customer, c.locale, (0, s.addUtmCampaignSource)(l, "logo"), h),
                            g = h ? ? c.copyrightOptions ? .mode ? ? "small_old";
                        (0, n.ensureNotNull)(t).appendChild((0, r.createCopyrightLabel)({
                            sheriffOptions: d,
                            snapToEdge: o,
                            ...c.copyrightOptions,
                            ...p,
                            mode: g
                        }))
                    }(d, e, !document.documentElement.classList.contains("is-transparent") || Boolean(l.showBorderOnTransparent), o, l)
                }
                return u || (t.parentElement.insertBefore(c, t), d.appendChild(t)), t
            }
        },
        901107: (t, e, o) => {
            "use strict";
            o.d(e, {
                createEmbedWidgetWrapper: () => n.createEmbedWidgetWrapper
            });
            o(686962);
            var n = o(175341)
        },
        125226: (t, e, o) => {
            "use strict";
            o.d(e, {
                isFeatureEnabled: () => d
            });
            var n = o(49437),
                i = o(547465),
                r = o(584878);
            o(638456);
            const s = new i.Delegate,
                a = "forcefeaturetoggle.";
            const l = new class {
                enableFeature(t) {
                    n.TVLocalStorage.setItem(a + t, "true"), s.fire(t)
                }
                disableFeature(t) {
                    n.TVLocalStorage.setItem(a + t, "false"), s.fire(t)
                }
                resetFeature(t) {
                    n.TVLocalStorage.removeItem(a + t), s.fire(t)
                }
                onFeaturesStateChanged() {
                    return s
                }
            };

            function c(t, e) {
                return (!t[e] || -1 !== t[e]) && (!!("true" === n.TVLocalStorage.getItem(a + e) || window.is_authenticated && "true" === window.user ? .settings ? .[a + e]) || !("false" === n.TVLocalStorage.getItem(a + e) || window.is_authenticated && "false" === window.user ? .settings ? .[a + e]) && (!!t[e] && (1 === t[e] || (0, r.shouldAffectUser)(e, t[e]))))
            }
            window.TradingView = window.TradingView || {}, window.TradingView.FeatureToggle = l;
            const d = (u = window.featureToggleState || {}, window.TradingView.onWidget ? .() || Promise.all([o.e(80349), o.e(34604)]).then(o.bind(o, 180349)).then((t => {
                t.pushStreamMultiplexer.on("featuretoggle", (t => {
                    const e = c(u, t.name);
                    u[t.name] = t.state, e !== c(u, t.name) && s.fire(t.name)
                }))
            })), c.bind(null, u));
            var u;
            window.TradingView.isFeatureEnabled = d
        },
        251954: (t, e, o) => {
            "use strict";
            o.d(e, {
                emit: () => c,
                subscribe: () => l,
                unsubscribe: () => a
            });
            var n = o(547465);
            const i = {},
                r = [],
                s = {};

            function a(t, e, o) {
                i[t].unsubscribe(o, e)
            }

            function l(t, e, o, r) {
                i.hasOwnProperty(t) || (i[t] = new n.Delegate), s[t] ? e.call(o) : i[t].subscribe(o, e, r)
            }

            function c(t, ...e) {
                const o = [t].concat(e);
                r.forEach((t => {
                    t.apply(null, o)
                })), i.hasOwnProperty(t) && i[t].fire.apply(i[t], e)
            }
        },
        799786: (t, e, o) => {
            "use strict";
            o.d(e, {
                createGroup: () => n.createGroup
            });
            var n = o(129592),
                i = o(764250),
                r = o(591800),
                s = o(345848);
            (0, n.registerWindow)(window), i.ActionGroup.setMatchedHotkeyHandler((t => {
                (0, s.trackEvent)("Keyboard Shortcuts", (0, r.humanReadableHash)(t))
            }))
        },
        588948: (t, e, o) => {
            "use strict";
            o.d(e, {
                getInitData: () => i
            });
            o(650151);
            (0, o(735566).getLogger)("Common.InitData");
            const n = window.initData || {};

            function i() {
                return n
            }
        },
        49437: (t, e, o) => {
            "use strict";
            const {
                getLogger: n
            } = o(735566), i = n("TVLocalStorage");
            var r = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (t) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (t) {}
            };
            r.prototype._report = function() {
                if (this.isAvailable) {
                    const t = 10,
                        e = [];
                    for (let t = 0; t < this.localStorage.length; t++) {
                        const o = this.key(t);
                        e.push({
                            key: o,
                            length: String(this.getItem(o)).length
                        })
                    }
                    e.sort(((t, e) => e.length - t.length));
                    const o = e.slice(0, t);
                    e.sort(((t, e) => e.key.length - t.key.length));
                    const n = e.slice(0, t);
                    i.logNormal(`Total amount of keys in Local Storage: ${this.length}`), i.logNormal(`Top ${t} keys with longest values: ${JSON.stringify(o)}`), i.logNormal(`Top ${t} longest key names: ${JSON.stringify(n)}`);
                    try {
                        navigator.storage.estimate().then((t => {
                            i.logNormal(`Storage estimate: ${JSON.stringify(t)}`)
                        }))
                    } catch (t) {}
                }
            }, r.prototype.length = 0, r.prototype.isAvailable = !1, r.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, r.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var t, e = 0;
                    for (t in this.localStorage) this.localStorage.hasOwnProperty(t) && e++;
                    this.length = e
                }
            }, r.prototype.key = function(t) {
                return this.isAvailable ? this.localStorage.key(t) : Object.keys(this.localStorage)[t]
            }, r.prototype.getItem = function(t) {
                return this.isAvailable ? this.localStorage.getItem(t) : void 0 === this.localStorage[t] ? null : this.localStorage[t]
            }, r.prototype.setItem = function(t, e) {
                this.isAvailable ? this.localStorage.setItem(t, e) : this.localStorage[t] = e, this._updateLength()
            }, r.prototype.removeItem = function(t) {
                this.isAvailable ? this.localStorage.removeItem(t) : delete this.localStorage[t], this._updateLength()
            }, r.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            }, window.TVLocalStorage = new r, t.exports.TVLocalStorage = window.TVLocalStorage
        },
        314802: (t, e, o) => {
            "use strict";
            o.d(e, {
                isOnMobileAppPage: () => i
            });
            var n = o(639247);

            function i(t, e = !1) {
                const {
                    searchParams: o
                } = new URL(String(location));
                let i = "true" === o.get("mobileapp_new"),
                    r = "true" === o.get("mobileapp");
                if (!e) {
                    const t = n.get("tv_app") || "";
                    i || = ["android", "android_nps"].includes(t), r || = "ios" === t
                }
                return !("new" !== t && "any" !== t || !i) || !("new" === t || !r)
            }
        },
        439563: (t, e, o) => {
            "use strict";
            async function n() {
                const t = (await Promise.all([o.e(73034), o.e(3567), o.e(36683)]).then(o.bind(o, 469449))).getTrackerInstance();
                return t || null
            }
            o.d(e, {
                getEmbedWidgetTracker: () => n
            })
        },
        584878: (t, e, o) => {
            "use strict";
            o.d(e, {
                shouldAffectUser: () => l
            });
            var n = o(855385),
                i = o.n(n),
                r = o(49437);
            const s = "featuretoggle_seed";

            function a(t) {
                try {
                    const e = i()(t + function() {
                            if (window.user && window.user.id) return window.user.id;
                            const t = r.TVLocalStorage.getItem(s);
                            if (null !== t) return t;
                            const e = Math.floor(1e6 * Math.random());
                            return r.TVLocalStorage.setItem(s, `${e}`), e
                        }()),
                        o = new DataView(e);
                    return o.getUint32(0, !0) / 4294967296
                } catch (t) {
                    return .5
                }
            }

            function l(t, e) {
                return a(t) <= e
            }
        },
        995683: (t, e, o) => {
            "use strict";

            function n(t, e, o = {}) {
                return Object.assign({}, t, function(t, e, o = {}) {
                    const n = Object.assign({}, e);
                    for (const i of Object.keys(e)) {
                        const r = o[i] || i;
                        r in t && (n[i] = [t[r], e[i]].join(" "))
                    }
                    return n
                }(t, e, o))
            }
            o.d(e, {
                mergeThemes: () => n
            })
        },
        256225: (t, e, o) => {
            o(778785).setClasses();
            var n = o(709903).whenDocumentReady,
                i = o(437861).handleTVLinksClick;
            n((() => {
                i()
            }))
        },
        803912: (t, e, o) => {
            "use strict";
            o.d(e, {
                fetch: () => r
            });
            var n = o(735566);
            o(659863);
            const i = (0, n.getLogger)("Fetch");

            function r(t, e, o = {}) {
                {
                    const {
                        logOnErrorStatus: n = !0,
                        logBodyOnError: r = !1
                    } = o;
                    e = e || {},
                        function(t) {
                            return new URL(t, document.baseURI).origin === location.origin
                        }(t) && (e.headers ? e.headers instanceof Headers || (e.headers = new Headers(e.headers)) : e.headers = new Headers, window.locale && e.headers.set("X-Language", window.locale), e.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === e.credentials && (e.credentials = "same-origin");
                    const s = window.fetch(t, e);
                    return s.then((o => {
                        if (!o.ok && n) {
                            let n = "";
                            e.method && (n += `${e.method.toUpperCase()} `), n += t, n += `. Status ${o.status}`, o.statusText && (n += `. ${o.statusText}`), o.headers.via && (n += `. Via: ${o.headers.via}`), r && "string" == typeof e.body && (n += `. Body: ${e.body.slice(0,1024)}`), i.logError(n)
                        }
                        return o
                    }), (o => {
                        if (o && "AbortError" === o.name) return;
                        let n = "";
                        e.method && (n += `${e.method.toUpperCase()} `), n += t,
                            navigator.onLine ? n += `. ${o}` : n += ". User is offline.", i.logError(n)
                    })), s
                }
            }
        },
        760863: (t, e, o) => {
            "use strict";
            o.d(e, {
                parseHtmlElement: () => i
            });
            const n = new WeakMap;

            function i(t, e) {
                const o = function(t, e) {
                        let o, i;
                        return o = null == e ? document.documentElement : 9 === e.nodeType ? e.documentElement : e, n && (i = n.get(o)), i || (i = o.ownerDocument.createRange(), i.selectNodeContents(o), n && n.set(o, i)), i.createContextualFragment(t)
                    }(t, e),
                    i = o.firstElementChild;
                return null !== i && o.removeChild(i), i
            }
        },
        728104: (t, e, o) => {
            "use strict";

            function n(t) {
                const e = [];
                for (const o in t) t.hasOwnProperty(o) && null != t[o] && e.push({
                    key: o,
                    pair: encodeURIComponent(o) + "=" + encodeURIComponent(t[o])
                });
                return e.sort(((t, e) => t.key > e.key ? 1 : t.key < e.key ? -1 : 0)).map((t => t.pair)).join("&")
            }
            o.d(e, {
                createUrlParams: () => n
            })
        },
        283834: (t, e, o) => {
            "use strict";
            o.d(e, {
                buildUtmQueryString: () => a,
                filterUtmInfo: () => s
            });
            var n = o(728104),
                i = o(927301);
            const r = ["utm_source", "utm_medium", "utm_campaign"];

            function s(t) {
                const e = {};
                return r.forEach((o => {
                    const n = t[o];
                    "string" == typeof n && "" !== n && (e[o] = (0, i.htmlEscape)(n))
                })), e
            }

            function a(t, e = !1) {
                const o = (0, n.createUrlParams)(t);
                return o && e ? "?" + o : o
            }
        },
        23482: (t, e, o) => {
            "use strict";
            o.d(e, {
                isAndroid: () => m,
                isAnyMobile: () => y,
                isBlackBerry: () => h,
                isChrome: () => a,
                isEdge: () => c,
                isFF: () => l,
                isIOS: () => p,
                isIPad: () => f,
                isMac: () => u,
                isOperaMini: () => g,
                isSafari: () => d,
                mobiletouch: () => r,
                touch: () => s
            });
            const n = "undefined" != typeof window && "undefined" != typeof navigator,
                i = n && "ontouchstart" in window,
                r = n && i && "onorientationchange" in window,
                s = n && (i || !!navigator.maxTouchPoints),
                a = n && window.chrome && window.chrome.runtime,
                l = n && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                c = n && /\sEdge\/\d\d\b/.test(navigator.userAgent),
                d = n && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
                u = n && /mac/i.test(navigator.platform),
                m = (n && /Win32|Win64/i.test(navigator.platform), n && /Linux/i.test(navigator.platform), n && /Android/i.test(navigator.userAgent)),
                h = n && /BlackBerry/i.test(navigator.userAgent),
                p = n && /iPhone|iPad|iPod/.test(navigator.platform),
                g = n && /Opera Mini/i.test(navigator.userAgent),
                f = n && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform)),
                y = m || h || p || g
        }
    }
]);