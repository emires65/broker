(self.webpackChunkwidget_react = self.webpackChunkwidget_react || []).push([
    [963], {
        93379: function(e) {
            var t = {
                animationIterationCount: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridColumn: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                stopOpacity: !0,
                strokeDashoffset: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            };
            e.exports = function(e, l) {
                return "number" != typeof l || t[e] ? l : l + "px"
            }
        },
        99393: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ORIENTATION = void 0;
            t.ORIENTATION = {
                LEFT: "left",
                RIGHT: "right",
                BOTTOM: "bottom"
            }
        },
        18619: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(23101)),
                i = n(l(88436)),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var l = c(t);
                    if (l && l.has(e)) return l.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                        }
                    n.default = e, l && l.set(e, n);
                    return n
                }(l(98661)),
                a = n(l(45697)),
                s = n(l(70147));
            const u = ["component"];

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    l = new WeakMap;
                return (c = function(e) {
                    return e ? l : t
                })(e)
            }
            const d = (0, r.forwardRef)(((e, t) => {
                let l = e.component,
                    n = (0, i.default)(e, u);
                const a = l || "jdiv";
                return r.default.createElement(a, (0, o.default)({
                    ref: t,
                    className: s.default.main
                }, n))
            }));
            d.displayName = "Overlay", d.propTypes = {
                component: a.default.any
            };
            var f = d;
            t.default = f
        },
        13114: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(23101)),
                i = n(l(88436)),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var l = d(t);
                    if (l && l.has(e)) return l.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                        }
                    n.default = e, l && l.set(e, n);
                    return n
                }(l(98661)),
                a = n(l(45697)),
                s = n(l(94184)),
                u = n(l(80810));
            const c = ["children", "component", "radius", "shadow", "padding", "withBorder", "addClassname"];

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    l = new WeakMap;
                return (d = function(e) {
                    return e ? l : t
                })(e)
            }
            const f = (0, r.forwardRef)(((e, t) => {
                let l = e.children,
                    n = e.component,
                    a = e.radius,
                    d = e.shadow,
                    f = e.padding,
                    h = e.withBorder,
                    p = e.addClassname,
                    g = (0, i.default)(e, c);
                const v = n || "jdiv",
                    m = (0, s.default)({
                        [u.default.root]: !0,
                        [u.default["__" + a + "Radius"]]: a,
                        [u.default["__" + f + "Padding"]]: f,
                        [u.default["__" + d + "Shadow"]]: d,
                        [u.default.__withBorder]: h,
                        [p]: p
                    });
                return r.default.createElement(v, (0, o.default)({
                    ref: t,
                    className: m
                }, g), l)
            }));
            f.defaultProps = {
                radius: "sm",
                shadow: "sm"
            }, f.displayName = "Paper", f.propTypes = {
                children: a.default.node.isRequired,
                component: a.default.any,
                radius: a.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
                padding: a.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
                shadow: a.default.oneOf(["xs", "sm", "md", "lg", "xl"]),
                withBorder: a.default.bool,
                addClassname: a.default.string
            };
            var h = f;
            t.default = h
        },
        88155: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(33119)),
                i = n(l(92664)),
                r = n(l(7819)),
                a = n(l(84827)),
                s = n(l(85299)),
                u = n(l(55536)),
                c = n(l(61125)),
                d = n(l(88436)),
                f = n(l(23101)),
                h = O(l(98661)),
                p = n(l(53879)),
                g = O(l(54087)),
                v = l(21951),
                m = l(32183),
                b = l(23267),
                w = l(73422),
                y = l(94903),
                k = l(61699);
            const _ = ["style"],
                T = ["style"],
                S = ["style"],
                C = ["style"],
                M = ["onScroll", "onScrollFrame", "onScrollStart", "onScrollStop", "onUpdate", "renderView", "renderTrackHorizontal", "renderTrackVertical", "renderThumbHorizontal", "renderThumbVertical", "tagName", "hideTracksWhenNotNeeded", "autoHide", "autoHideTimeout", "autoHideDuration", "thumbSize", "thumbMinSize", "onlyY", "universal", "autoHeight", "autoHeightMin", "autoHeightMax", "scrollMarginTop", "railClass", "scrollWrapClass", "position", "style", "children"];

            function E(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    l = new WeakMap;
                return (E = function(e) {
                    return e ? l : t
                })(e)
            }

            function O(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var l = E(t);
                if (l && l.has(e)) return l.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                    }
                return n.default = e, l && l.set(e, n), n
            }

            function H(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var l, n = (0, u.default)(e);
                    if (t) {
                        var o = (0, u.default)(this).constructor;
                        l = Reflect.construct(n, arguments, o)
                    } else l = n.apply(this, arguments);
                    return (0, s.default)(this, l)
                }
            }

            function D(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), l.push.apply(l, n)
                }
                return l
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(l), !0).forEach((function(t) {
                        (0, c.default)(e, t, l[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : D(Object(l)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                    }))
                }
                return e
            }
            const I = () => !1;
            let P, j;
            Math.easeInOutQuad = function(e, t, l, n) {
                return (e /= n / 2) < 1 ? l / 2 * e * e + t : -l / 2 * (--e * (e - 2) - 1) + t
            };
            let R = function(e) {
                (0, a.default)(l, e);
                var t = H(l);

                function l(e) {
                    var n;
                    (0, o.default)(this, l);
                    for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                    return (n = t.call.apply(t, [this, e].concat(a))).getScrollLeft = n.getScrollLeft.bind((0, r.default)(n)), n.getScrollTop = n.getScrollTop.bind((0, r.default)(n)), n.getScrollWidth = n.getScrollWidth.bind((0, r.default)(n)), n.getScrollHeight = n.getScrollHeight.bind((0, r.default)(n)), n.getClientWidth = n.getClientWidth.bind((0, r.default)(n)), n.getClientHeight = n.getClientHeight.bind((0, r.default)(n)), n.getValues = n.getValues.bind((0, r.default)(n)), n.getThumbHorizontalWidth = n.getThumbHorizontalWidth.bind((0, r.default)(n)), n.getThumbVerticalHeight = n.getThumbVerticalHeight.bind((0, r.default)(n)), n.getScrollLeftForOffset = n.getScrollLeftForOffset.bind((0, r.default)(n)), n.getScrollTopForOffset = n.getScrollTopForOffset.bind((0, r.default)(n)), n.getScrollDiff = n.getScrollDiff.bind((0, r.default)(n)), n.scrollLeft = n.scrollLeft.bind((0, r.default)(n)), n.scrollTop = n.scrollTop.bind((0, r.default)(n)), n.scrollToLeft = n.scrollToLeft.bind((0, r.default)(n)), n.scrollToTop = n.scrollToTop.bind((0, r.default)(n)), n.scrollToRight = n.scrollToRight.bind((0, r.default)(n)), n.scrollToBottom = n.scrollToBottom.bind((0, r.default)(n)), n.handleTrackMouseEnter = n.handleTrackMouseEnter.bind((0, r.default)(n)), n.handleTrackMouseLeave = n.handleTrackMouseLeave.bind((0, r.default)(n)), n.handleHorizontalTrackMouseDown = n.handleHorizontalTrackMouseDown.bind((0, r.default)(n)), n.handleVerticalTrackMouseDown = n.handleVerticalTrackMouseDown.bind((0, r.default)(n)), n.handleHorizontalThumbMouseDown = n.handleHorizontalThumbMouseDown.bind((0, r.default)(n)), n.handleVerticalThumbMouseDown = n.handleVerticalThumbMouseDown.bind((0, r.default)(n)), n.handleWindowResize = n.handleWindowResize.bind((0, r.default)(n)), n.handleScroll = n.handleScroll.bind((0, r.default)(n)), n.handleMouseWheel = n.handleMouseWheel.bind((0, r.default)(n)), n.handleDrag = n.handleDrag.bind((0, r.default)(n)), n.handleDragEnd = n.handleDragEnd.bind((0, r.default)(n)), n.state = {
                        didMountUniversal: !1
                    }, n.animated = !1, n.ignore = !1, n.callbackCounter = 0, n.view = {}, n
                }
                return (0, i.default)(l, [{
                    key: "componentDidMount",
                    value: function() {
                        this.addListeners(), this.update(), this.componentDidMountUniversal()
                    }
                }, {
                    key: "componentDidMountUniversal",
                    value: function() {
                        this.props.universal && this.setState({
                            didMountUniversal: !0
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.update()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListeners(), this.requestFrame && (0, g.cancel)(this.requestFrame), clearTimeout(this.hideTracksTimeout), clearInterval(this.detectScrollingInterval)
                    }
                }, {
                    key: "setIgnore",
                    value: function(e) {
                        this.ignore = e
                    }
                }, {
                    key: "getIgnore",
                    value: function() {
                        return this.ignore
                    }
                }, {
                    key: "getScrollLeft",
                    value: function() {
                        return this.view ? this.view.scrollLeft : 0
                    }
                }, {
                    key: "getScrollTop",
                    value: function() {
                        return this.view.scrollTop
                    }
                }, {
                    key: "getScrollWidth",
                    value: function() {
                        return this.view.scrollWidth
                    }
                }, {
                    key: "getScrollHeight",
                    value: function() {
                        return this.view.scrollHeight
                    }
                }, {
                    key: "getScrollDiff",
                    value: function() {
                        return this.getScrollHeight() - this.getScrollTop() - this.getClientHeight()
                    }
                }, {
                    key: "hasScroll",
                    value: function() {
                        return this.getScrollHeight() > this.getClientHeight()
                    }
                }, {
                    key: "getClientWidth",
                    value: function() {
                        return this.view.clientWidth
                    }
                }, {
                    key: "getClientHeight",
                    value: function() {
                        return this.view.clientHeight
                    }
                }, {
                    key: "getValues",
                    value: function() {
                        const e = this.view,
                            t = e.scrollLeft,
                            l = e.scrollTop,
                            n = e.scrollWidth,
                            o = e.scrollHeight,
                            i = e.clientWidth,
                            r = e.clientHeight;
                        return {
                            left: t / (n - i) || 0,
                            top: l / (o - r) || 0,
                            scrollLeft: t,
                            scrollTop: l,
                            scrollWidth: n,
                            scrollHeight: o,
                            clientWidth: i,
                            clientHeight: r
                        }
                    }
                }, {
                    key: "getThumbHorizontalWidth",
                    value: function() {
                        const e = this.props,
                            t = e.thumbSize,
                            l = e.thumbMinSize,
                            n = this.view,
                            o = n.scrollWidth,
                            i = n.clientWidth,
                            r = (0, m.getInnerWidth)(this.trackHorizontal),
                            a = Math.ceil(i / o * r);
                        return r === a ? 0 : t || Math.max(a, l)
                    }
                }, {
                    key: "getThumbVerticalHeight",
                    value: function() {
                        const e = this.props,
                            t = e.thumbSize,
                            l = e.thumbMinSize,
                            n = this.view,
                            o = n.scrollHeight,
                            i = n.clientHeight,
                            r = (0, m.getInnerHeight)(this.trackVertical),
                            a = Math.ceil(i / o * r);
                        return r === a ? 0 : t || Math.max(a, l)
                    }
                }, {
                    key: "getScrollLeftForOffset",
                    value: function(e) {
                        const t = this.view,
                            l = t.scrollWidth,
                            n = t.clientWidth;
                        return e / ((0, m.getInnerWidth)(this.trackHorizontal) - this.getThumbHorizontalWidth()) * (l - n)
                    }
                }, {
                    key: "getScrollTopForOffset",
                    value: function(e) {
                        const t = this.view,
                            l = t.scrollHeight,
                            n = t.clientHeight;
                        return e / ((0, m.getInnerHeight)(this.trackVertical) - this.getThumbVerticalHeight()) * (l - n)
                    }
                }, {
                    key: "scrollLeft",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.view.scrollLeft = e
                    }
                }, {
                    key: "scrollTop",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.view.scrollTop = e
                    }
                }, {
                    key: "scrollToLeft",
                    value: function() {
                        this.view.scrollLeft = 0
                    }
                }, {
                    key: "scrollToTop",
                    value: function() {
                        this.view.scrollTop = 0
                    }
                }, {
                    key: "scrollToRight",
                    value: function() {
                        this.view.scrollLeft = this.view.scrollWidth
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!this.hasScroll()) return;
                        const t = this.getScrollHeight();
                        0 !== t ? e ? this.view.scrollTo({
                            top: t,
                            behavior: "smooth"
                        }) : this.view.scrollTop = this.view.scrollHeight : this.view.scrollTop = t
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        if ("undefined" == typeof document) return;
                        const e = this.view,
                            t = this.trackHorizontal,
                            l = this.trackVertical,
                            n = this.thumbHorizontal,
                            o = this.thumbVertical,
                            i = this.container;
                        (0, v.addListener)(e, "scroll", this.handleScroll, !0), (0, v.addListener)(e, "mousewheel", this.handleMouseWheel), (0, m.getScrollBarWidth)() && (t && (t.addEventListener("mouseenter", this.handleTrackMouseEnter), t.addEventListener("mouseleave", this.handleTrackMouseLeave), t.addEventListener("mousedown", this.handleHorizontalTrackMouseDown)), i && i.addEventListener("mouseenter", this.handleTrackCheckHide.bind(this)), l && (l.addEventListener("mouseenter", this.handleTrackMouseEnter), l.addEventListener("mouseleave", this.handleTrackMouseLeave), l.addEventListener("mousedown", this.handleVerticalTrackMouseDown)), n && n.addEventListener("mousedown", this.handleHorizontalThumbMouseDown), o && o.addEventListener("mousedown", this.handleVerticalThumbMouseDown), window.addEventListener("resize", this.handleWindowResize))
                    }
                }, {
                    key: "removeListeners",
                    value: function() {
                        if ("undefined" == typeof document) return;
                        const e = this.view,
                            t = this.trackHorizontal,
                            l = this.trackVertical,
                            n = this.thumbHorizontal,
                            o = this.thumbVertical;
                        e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("mousewheel", this.handleMouseWheel), (0, m.getScrollBarWidth)() && (t && (t.removeEventListener("mouseenter", this.handleTrackMouseEnter), t.removeEventListener("mouseleave", this.handleTrackMouseLeave), t.removeEventListener("mousedown", this.handleHorizontalTrackMouseDown)), l && (l.removeEventListener("mouseenter", this.handleTrackMouseEnter), l.removeEventListener("mouseleave", this.handleTrackMouseLeave), l.removeEventListener("mousedown", this.handleVerticalTrackMouseDown)), n && n.removeEventListener("mousedown", this.handleHorizontalThumbMouseDown), o && o.removeEventListener("mousedown", this.handleVerticalThumbMouseDown), window.removeEventListener("resize", this.handleWindowResize), this.teardownDragging())
                    }
                }, {
                    key: "handleScroll",
                    value: function(e) {
                        const t = this.props,
                            l = t.onScroll,
                            n = t.onScrollFrame;
                        l && l(e), this.update((e => {
                            const t = e.scrollLeft,
                                l = e.scrollTop;
                            this.viewScrollLeft = t, this.viewScrollTop = l, n && n(e)
                        })), this.detectScrolling()
                    }
                }, {
                    key: "handleTouchMove",
                    value: function(e) {
                        if ((0, m.isInput)(e.target.tagName)) {
                            e.stopPropagation(), e.preventDefault();
                            const t = this.view.childNodes[0].clientHeight - this.container.parentNode.clientHeight,
                                l = P - (e.touches[0].pageY + j);
                            t > l && 0 < l && (P -= e.touches[0].pageY + j, this.view.style.bottom = P + "px")
                        }
                    }
                }, {
                    key: "handleTouchStart",
                    value: function(e) {
                        -1 === ["INPUT", "TEXTAREA", "A"].indexOf(e.target.tagName) && (e.stopPropagation(), e.preventDefault(), j = -1 * e.touches[0].pageY)
                    }
                }, {
                    key: "handleMouseWheel",
                    value: function(e) {
                        e.stopPropagation();
                        const t = e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail,
                            l = this.view.scrollTop + this.view.clientHeight - this.view.scrollHeight >= 0,
                            n = this.view.scrollTop <= 0;
                        (t < 0 && l || t > 0 && n) && e.preventDefault()
                    }
                }, {
                    key: "handleScrollStart",
                    value: function() {
                        const e = this.props.onScrollStart;
                        e && e(), this.handleScrollStartAutoHide()
                    }
                }, {
                    key: "handleScrollStartAutoHide",
                    value: function() {
                        this.props.autoHide && this.showTracks()
                    }
                }, {
                    key: "handleScrollStop",
                    value: function() {
                        const e = this.props.onScrollStop;
                        e && e(), this.handleScrollStopAutoHide()
                    }
                }, {
                    key: "handleScrollStopAutoHide",
                    value: function() {
                        this.props.autoHide && this.hideTracks()
                    }
                }, {
                    key: "handleWindowResize",
                    value: function() {
                        this.update()
                    }
                }, {
                    key: "handleHorizontalTrackMouseDown",
                    value: function(e) {
                        e.preventDefault();
                        const t = e.target,
                            l = e.clientX,
                            n = t.getBoundingClientRect().left,
                            o = this.getThumbHorizontalWidth(),
                            i = Math.abs(n - l) - o / 2;
                        this.view.scrollLeft = this.getScrollLeftForOffset(i)
                    }
                }, {
                    key: "handleVerticalTrackMouseDown",
                    value: function(e) {
                        e.preventDefault();
                        const t = e.target,
                            l = e.clientY,
                            n = t.getBoundingClientRect().top,
                            o = this.getThumbVerticalHeight(),
                            i = Math.abs(n - l) - o / 2;
                        this.view.scrollTop = this.getScrollTopForOffset(i)
                    }
                }, {
                    key: "handleHorizontalThumbMouseDown",
                    value: function(e) {
                        e.preventDefault(), this.handleDragStart(e);
                        const t = e.target,
                            l = e.clientX,
                            n = t.offsetWidth,
                            o = t.getBoundingClientRect().left;
                        this.prevPageX = n - (l - o)
                    }
                }, {
                    key: "handleVerticalThumbMouseDown",
                    value: function(e) {
                        e.preventDefault(), this.handleDragStart(e);
                        const t = e.target,
                            l = e.clientY,
                            n = t.offsetHeight,
                            o = t.getBoundingClientRect().top;
                        this.prevPageY = n - (l - o)
                    }
                }, {
                    key: "setupDragging",
                    value: function() {
                        const e = (0, b.getPageWindow)().document;
                        (0, p.default)(e.body, k.disableSelectStyle), e.addEventListener("mousemove", this.handleDrag), e.addEventListener("mouseup", this.handleDragEnd), e.onselectstart = I
                    }
                }, {
                    key: "teardownDragging",
                    value: function() {
                        const e = (0, b.getPageWindow)().document;
                        (0, p.default)(e.body, k.disableSelectStyleReset), e.removeEventListener("mousemove", this.handleDrag), e.removeEventListener("mouseup", this.handleDragEnd), e.onselectstart = void 0
                    }
                }, {
                    key: "handleDragStart",
                    value: function(e) {
                        this.dragging = !0, e.stopImmediatePropagation(), this.setupDragging()
                    }
                }, {
                    key: "handleDrag",
                    value: function(e) {
                        if (this.prevPageX) {
                            const t = e.clientX,
                                l = this.trackHorizontal.getBoundingClientRect().left,
                                n = this.getThumbHorizontalWidth() - this.prevPageX,
                                o = -l + t - n;
                            this.view.scrollLeft = this.getScrollLeftForOffset(o)
                        }
                        if (this.prevPageY) {
                            const t = e.clientY,
                                l = this.trackVertical.getBoundingClientRect().top,
                                n = this.getThumbVerticalHeight() - this.prevPageY,
                                o = -l + t - n;
                            this.view.scrollTop = this.getScrollTopForOffset(o)
                        }
                        return !1
                    }
                }, {
                    key: "handleDragEnd",
                    value: function() {
                        this.dragging = !1, this.prevPageX = this.prevPageY = 0, this.teardownDragging(), this.handleDragEndAutoHide()
                    }
                }, {
                    key: "handleDragEndAutoHide",
                    value: function() {
                        this.props.autoHide && this.hideTracks()
                    }
                }, {
                    key: "handleTrackCheckHide",
                    value: function() {
                        this.props.autoHide && this.view && this.trackVertical && (this.hasScroll() ? this.showTracks() : (0, p.default)(this.trackVertical, {
                            opacity: 0
                        }))
                    }
                }, {
                    key: "handleTrackMouseEnter",
                    value: function() {
                        this.hasScroll() && (this.trackMouseOver = !0, this.handleTrackMouseEnterAutoHide())
                    }
                }, {
                    key: "handleTrackMouseEnterAutoHide",
                    value: function() {
                        this.props.autoHide && this.showTracks()
                    }
                }, {
                    key: "handleTrackMouseLeave",
                    value: function() {
                        this.dragging || (this.trackMouseOver = !1, this.handleTrackMouseLeaveAutoHide())
                    }
                }, {
                    key: "handleTrackMouseLeaveAutoHide",
                    value: function() {
                        this.props.autoHide && this.hideTracks()
                    }
                }, {
                    key: "showTracks",
                    value: function() {
                        clearTimeout(this.hideTracksTimeout), this.trackHorizontal && (0, p.default)(this.trackHorizontal, {
                            opacity: 1
                        }), (0, p.default)(this.trackVertical, {
                            opacity: 1
                        })
                    }
                }, {
                    key: "hideTracks",
                    value: function() {
                        if (this.dragging) return;
                        if (this.scrolling) return;
                        if (this.trackMouseOver) return;
                        const e = this.props.autoHideTimeout;
                        clearTimeout(this.hideTracksTimeout), this.hideTracksTimeout = setTimeout((() => {
                            this.trackHorizontal && (0, p.default)(this.trackHorizontal, {
                                opacity: 0
                            }), (0, p.default)(this.trackVertical, {
                                opacity: 0
                            })
                        }), e)
                    }
                }, {
                    key: "detectScrolling",
                    value: function() {
                        this.scrolling || (this.scrolling = !0, this.handleScrollStart(), this.detectScrollingInterval = setInterval((() => {
                            this.lastViewScrollLeft === this.viewScrollLeft && this.lastViewScrollTop === this.viewScrollTop && (clearInterval(this.detectScrollingInterval), this.scrolling = !1, this.handleScrollStop()), this.lastViewScrollLeft = this.viewScrollLeft, this.lastViewScrollTop = this.viewScrollTop
                        }), 100))
                    }
                }, {
                    key: "raf",
                    value: function(e) {
                        this.requestFrame && (0, g.cancel)(this.requestFrame);
                        const t = this.enableFallback ? (0, b.getPageWindow)().requestAnimationFrame : g.default;
                        this.requestFrame = t((() => {
                            this.requestFrame = void 0, this.callbackCounter++, e()
                        }))
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.raf((() => this._update(e))), setTimeout((() => {
                            const e = (0, b.getPageWindow)();
                            !this.callbackCounter && e.requestAnimationFrame && (this.enableFallback = !0)
                        }), 1e3)
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        const t = this.props,
                            l = t.onUpdate,
                            n = t.hideTracksWhenNotNeeded;
                        if (!this.view) return;
                        const o = this.getValues();
                        if ((0, m.getScrollBarWidth)()) {
                            const e = o.scrollTop,
                                t = o.clientHeight,
                                l = o.scrollHeight,
                                i = (0, m.getInnerHeight)(this.trackVertical),
                                r = this.getThumbVerticalHeight(),
                                a = {
                                    height: r,
                                    transform: `translateY(${e/(l-t)*(i-r)}px)`
                                };
                            if (n) {
                                if (this.trackHorizontal) {
                                    const e = {
                                        visibility: scrollWidth > clientWidth ? "visible" : "hidden"
                                    };
                                    (0, p.default)(this.trackHorizontal, e)
                                }
                                const e = {
                                    visibility: l > t ? "visible" : "hidden"
                                };
                                (0, p.default)(this.trackVertical, e)
                            }
                            this.thumbHorizontal && (0, p.default)(this.thumbHorizontal, thumbHorizontalStyle), (0, p.default)(this.thumbVertical, a)
                        }
                        l && l(o), "function" == typeof e && e(o)
                    }
                }, {
                    key: "render",
                    value: function() {
                        const e = (0, m.getScrollBarWidth)(),
                            t = this.props,
                            l = (t.onScroll, t.onScrollFrame, t.onScrollStart, t.onScrollStop, t.onUpdate, t.renderView),
                            n = t.renderTrackHorizontal,
                            o = t.renderTrackVertical,
                            i = t.renderThumbHorizontal,
                            r = t.renderThumbVertical,
                            a = t.tagName,
                            s = (t.hideTracksWhenNotNeeded, t.autoHide),
                            u = (t.autoHideTimeout, t.autoHideDuration),
                            c = (t.thumbSize, t.thumbMinSize, t.onlyY),
                            f = t.universal,
                            p = t.autoHeight,
                            g = t.autoHeightMin,
                            v = t.autoHeightMax,
                            b = (t.scrollMarginTop, t.railClass, t.scrollWrapClass),
                            _ = t.position,
                            T = t.style,
                            S = t.children,
                            C = (0, d.default)(t, M),
                            E = this.state.didMountUniversal,
                            O = x(x(x({}, k.containerStyleDefault), p && x(x({}, k.containerStyleAutoHeight), {}, {
                                minHeight: g,
                                maxHeight: v
                            })), T),
                            H = x(x(x(x({}, k.viewStyleDefault), {}, {
                                display: "block",
                                marginRight: e ? -e : 0,
                                marginBottom: !c && e ? -e : 0
                            }, p && x(x({}, k.viewStyleAutoHeight), {}, {
                                minHeight: (0, w.isString)(g) ? `calc(${g} + ${e}px)` : g + e,
                                maxHeight: (0, w.isString)(v) ? `calc(${v} + ${e}px)` : v + e
                            })), p && f && !E && {
                                minHeight: g,
                                maxHeight: v
                            }), f && !E && k.viewStyleUniversalInitial);
                        _ && (H.position = _), c && (H.overflowX = "hidden", y.platform.isMobileOrTablet || (H.overflowY = "scroll"));
                        const D = {
                                transition: `opacity ${u}ms`,
                                opacity: 0
                            },
                            I = x(x(x({}, k.trackHorizontalStyleDefault), s && D), (!e || f && !E) && {
                                display: "none"
                            }),
                            P = x(x(x({}, k.trackVerticalStyleDefault), s && D), (!e || f && !E) && {
                                display: "none"
                            }),
                            j = [(0, h.cloneElement)(l({
                                style: H
                            }, b), {
                                key: "view",
                                ref: e => {
                                    this.view = e
                                }
                            }, S)];
                        return c || j.push((0, h.cloneElement)(n({
                            style: I
                        }), {
                            key: "trackHorizontal",
                            ref: e => {
                                this.trackHorizontal = e
                            }
                        }, (0, h.cloneElement)(i({
                            style: k.thumbHorizontalStyleDefault
                        }), {
                            ref: e => {
                                this.thumbHorizontal = e
                            }
                        }))), j.push((0, h.cloneElement)(o({
                            style: P
                        }, this.props.scrollMarginTop, this.props.railClass), {
                            key: "trackVertical",
                            ref: e => {
                                this.trackVertical = e
                            }
                        }, (0, h.cloneElement)(r({
                            style: k.thumbVerticalStyleDefault
                        }), {
                            ref: e => {
                                this.thumbVertical = e
                            }
                        }))), (0, h.createElement)(a, x(x({}, C), {}, {
                            style: O,
                            ref: e => {
                                this.container = e
                            }
                        }), j)
                    }
                }]), l
            }(h.Component);
            t.default = R, R.defaultProps = {
                renderView: function(e, t) {
                    return h.default.createElement("jdiv", (0, f.default)({
                        className: t
                    }, e))
                },
                renderTrackHorizontal: function(e) {
                    let t = e.style,
                        l = (0, d.default)(e, _);
                    const n = x(x({}, t), {}, {
                        right: 2,
                        bottom: 2,
                        left: 2,
                        borderRadius: 3
                    });
                    return h.default.createElement("jdiv", (0, f.default)({
                        style: n
                    }, l))
                },
                renderTrackVertical: function(e, t, l) {
                    let n = e.style,
                        o = (0, d.default)(e, T);
                    const i = x(x({}, n), {}, {
                        right: 3,
                        bottom: 2,
                        top: t || 2,
                        borderRadius: 4,
                        width: 8
                    });
                    return h.default.createElement("jdiv", (0, f.default)({
                        className: l,
                        style: i
                    }, o))
                },
                renderThumbHorizontal: function(e) {
                    let t = e.style,
                        l = (0, d.default)(e, S);
                    const n = x(x({}, t), {}, {
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "#d6dce4"
                    });
                    return h.default.createElement("jdiv", (0, f.default)({
                        style: n
                    }, l))
                },
                renderThumbVertical: function(e) {
                    let t = e.style,
                        l = (0, d.default)(e, C);
                    const n = x(x({}, t), {}, {
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "#d6d4d4"
                    });
                    return h.default.createElement("jdiv", (0, f.default)({
                        style: n
                    }, l))
                },
                tagName: "jdiv",
                thumbMinSize: 30,
                hideTracksWhenNotNeeded: !0,
                autoHide: !1,
                autoHideTimeout: 1e3,
                autoHideDuration: 200,
                autoHeight: !1,
                autoHeightMin: 0,
                autoHeightMax: 200,
                onlyY: !0,
                universal: !1,
                railClass: "null",
                scrollWrapClass: null
            }
        },
        61699: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.viewStyleUniversalInitial = t.viewStyleDefault = t.viewStyleAutoHeight = t.trackVerticalStyleDefault = t.trackHorizontalStyleDefault = t.thumbVerticalStyleDefault = t.thumbHorizontalStyleDefault = t.disableSelectStyleReset = t.disableSelectStyle = t.containerStyleDefault = t.containerStyleAutoHeight = void 0;
            t.containerStyleDefault = {
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                display: "block",
                WebkitOverflowScrolling: "touch"
            };
            t.containerStyleAutoHeight = {
                height: "auto"
            };
            t.viewStyleDefault = {
                position: "absolute",
                maxHeight: "100%",
                top: "auto",
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "scroll",
                WebkitOverflowScrolling: "touch"
            };
            const l = {
                position: "relative",
                top: void 0,
                left: void 0,
                right: void 0,
                bottom: void 0
            };
            t.viewStyleAutoHeight = l;
            t.viewStyleUniversalInitial = {
                overflow: "hidden",
                marginRight: 0,
                marginBottom: 0
            };
            t.trackHorizontalStyleDefault = {
                position: "absolute",
                height: 0
            };
            t.trackVerticalStyleDefault = {
                position: "absolute",
                width: 8
            };
            t.thumbHorizontalStyleDefault = {
                position: "relative",
                display: "block",
                height: "100%"
            };
            t.thumbVerticalStyleDefault = {
                position: "relative",
                display: "block",
                width: "100%"
            };
            t.disableSelectStyle = {
                userSelect: "none"
            };
            t.disableSelectStyleReset = {
                userSelect: ""
            }
        },
        68408: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.onHeaderClick = t.onDebugClick = t.onCloseClick = t.onCallClick = t.isPowerPhone = t.getPowerPhone = void 0;
            var o = l(21476),
                i = l(97490),
                r = l(26932),
                a = l(44145),
                s = n(l(4855)),
                u = l(50402),
                c = n(l(138)),
                d = l(34930),
                f = l(94903),
                h = l(66434);
            const p = s.default.name("HeaderContainer"),
                g = () => !(0, a.getCallback)().available && (0, a.getUserSettings)().powerButtonPhone && f.platform.isMobileOrChatpage;
            t.isPowerPhone = g;
            t.getPowerPhone = () => `tel:${(0,a.getUserSettings)().powerButtonPhone}`;
            t.onCallClick = () => {
                p.log("onCallClick");
                const e = o.Router.getCurrentRoute();
                g() ? c.default.trackMobileCallClick() : e === i.Route.CHAT_MIN ? (o.Router.next(i.RouterEvent.ToCall), r.transitionDispatchers.startTransition(u.ScriptName.MAXIMIZE_WIDGET)) : o.Router.getCurrentRoute() === i.Route.CHAT_CALL ? o.Router.next(i.RouterEvent.ToChat) : o.Router.next(i.RouterEvent.ToCall)
            };
            t.onCloseClick = e => {
                (0, d.closeWidget)(), o.Router.next(i.RouterEvent.CloseWindow), (0, h.telemetry)("mobile_chat_close", {
                    param1: e ? "bySwipeDown" : "byTap"
                })
            };
            t.onHeaderClick = () => {
                (0, a.getApp)().route === i.Route.CHAT_MIN && (r.appDispatchers.setAppIsFocused(!0), o.Router.next(i.RouterEvent.Navigate), r.transitionDispatchers.startTransition(u.ScriptName.MAXIMIZE_WIDGET))
            };
            t.onDebugClick = () => {
                o.Router.next(i.RouterEvent.ToDebug)
            }
        },
        38245: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OmnichannelCancelButton = void 0;
            var o = n(l(23101)),
                i = n(l(98661)),
                r = n(l(45697)),
                a = l(52947),
                s = l(43417),
                u = l(20344),
                c = n(l(55955)),
                d = l(24785),
                f = n(l(36599));
            const h = e => {
                let t = e.device,
                    l = e.onClick;
                return i.default.createElement("jdiv", (0, o.default)({
                    className: c.default[t]
                }, (0, s.onClickHandler)(l, !0, !0)), t === a.DEVICE.ANDROID && i.default.createElement(d.SvgIcon, {
                    icon: f.default,
                    className: c.default.backIcon
                }), i.default.createElement("jdiv", {
                    className: c.default.text
                }, (0, u.l10n)("cancel")))
            };
            t.OmnichannelCancelButton = h, h.propTypes = {
                device: r.default.oneOf([a.DEVICE.IOS, a.DEVICE.ANDROID]).isRequired,
                onClick: r.default.func.isRequired
            }
        },
        61914: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(98661)),
                i = n(l(45697)),
                r = n(l(94184)),
                a = l(20344),
                s = n(l(40704)),
                u = n(l(62992));
            const c = e => {
                let t = e.url,
                    l = e.icon;
                const n = (0, r.default)({
                    [u.default.logoIcon]: !0,
                    [u.default.__ru]: "logo-jivosite-white" === l
                });
                return o.default.createElement("jdiv", {
                    className: u.default.wrap
                }, o.default.createElement("jdiv", {
                    className: u.default.copyright
                }, o.default.createElement("a", {
                    href: t,
                    target: "_blank",
                    rel: "nofollow noopener noreferrer"
                }, o.default.createElement("jdiv", null, (0, a.l10n)("service_from")), o.default.createElement(s.default, {
                    iconName: l,
                    className: n
                }))))
            };
            c.propTypes = {
                url: i.default.string,
                icon: i.default.string
            };
            var d = c;
            t.default = d
        },
        13032: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var l = h(t);
                    if (l && l.has(e)) return l.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                        }
                    n.default = e, l && l.set(e, n);
                    return n
                }(l(98661)),
                i = n(l(45697)),
                r = l(20827),
                a = l(52947),
                s = n(l(88983)),
                u = n(l(19192)),
                c = l(96905),
                d = l(4096),
                f = l(94903);

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    l = new WeakMap;
                return (h = function(e) {
                    return e ? l : t
                })(e)
            }
            const p = e => {
                let t = e.show,
                    l = e.copyright,
                    n = e.device,
                    i = e.orientation,
                    h = e.menuProps,
                    p = e.onOverlayClick,
                    g = e.onCancelClick;
                const v = (0, o.useMemo)((() => (f.platform.isMobileOrTablet ? c.getMobileMenuItems : d.getDesktopMenuItems)(h)), [h]);
                return !t || (0, r.isEmpty)(v) ? null : n === a.DEVICE.IOS || n === a.DEVICE.ANDROID ? o.default.createElement(s.default, {
                    copyright: l,
                    device: n,
                    menuItems: v,
                    onClickOutside: p,
                    onCancelClick: g
                }) : o.default.createElement(u.default, {
                    device: n,
                    menuItems: v,
                    orientation: i
                })
            };
            p.propTypes = {
                show: i.default.bool.isRequired,
                menuProps: i.default.object.isRequired,
                copyright: i.default.shape({
                    show: i.default.bool,
                    link: i.default.string,
                    icon: i.default.string
                }).isRequired,
                device: i.default.oneOf(Object.values(a.DEVICE)).isRequired,
                orientation: i.default.oneOf(["left", "bottom", "right"]).isRequired,
                referenceElement: i.default.oneOfType([i.default.element, () => null]),
                onCancelClick: i.default.func,
                onOverlayClick: i.default.func
            };
            var g = p;
            t.default = g
        },
        64221: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(23101)),
                i = n(l(98661)),
                r = n(l(45697)),
                a = n(l(94184)),
                s = l(43417),
                u = l(24785),
                c = l(15496),
                d = l(52947),
                f = n(l(27752));
            const h = e => {
                let t = e.device,
                    l = e.iconColor,
                    n = e.iconName,
                    r = e.title,
                    d = e.subTitle,
                    h = e.url,
                    p = e.onClick,
                    g = e["data-qa-id"];
                const v = () => i.default.createElement("jdiv", {
                    className: f.default[t]
                }, i.default.createElement(u.SvgIcon, {
                    icon: n,
                    color: l,
                    className: f.default.icon
                }), i.default.createElement("jdiv", {
                    className: f.default.title
                }, r, d && i.default.createElement("jdiv", {
                    className: f.default.subTitle
                }, d)));
                return h ? i.default.createElement("a", (0, o.default)({
                    href: h,
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                    className: (0, a.default)(f.default.link, f.default.item)
                }, (0, s.onClickHandler)(p), (0, c.withLocator)(g)), v()) : i.default.createElement("jdiv", (0, o.default)({
                    className: f.default.item
                }, (0, s.onClickHandler)(p, !0, !0), (0, c.withLocator)(g)), v())
            };
            h.propTypes = {
                url: r.default.string,
                device: r.default.oneOf(Object.values(d.DEVICE)).isRequired,
                iconName: r.default.string.isRequired,
                iconColor: r.default.string,
                title: r.default.string.isRequired,
                subTitle: r.default.string,
                onClick: r.default.func.isRequired
            };
            var p = h;
            t.default = p
        },
        88983: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = E;
            var o = n(l(23101)),
                i = n(l(67375)),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var l = S(t);
                    if (l && l.has(e)) return l.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = e[i]
                        }
                    n.default = e, l && l.set(e, n);
                    return n
                }(l(98661)),
                a = l(29865),
                s = n(l(94184)),
                u = n(l(45697)),
                c = l(20344),
                d = l(37419),
                f = l(87869),
                h = l(80598),
                p = l(49862),
                g = l(42601),
                v = n(l(18619)),
                m = n(l(13114)),
                b = n(l(88155)),
                w = n(l(61914)),
                y = n(l(64221)),
                k = n(l(68184)),
                _ = l(52947),
                T = l(38245);

            function S(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    l = new WeakMap;
                return (S = function(e) {
                    return e ? l : t
                })(e)
            }
            const C = {
                transform: "translateY(120%)",
                transition: "transform 120ms ease-in-out"
            };

            function M() {
                return r.default.createElement("jdiv", {
                    className: k.default.menuTitle
                }, (0, c.l10n)("powerBtnMenuTitle"))
            }

            function E(e) {
                let t = e.device,
                    l = e.menuItems,
                    n = e.copyright,
                    u = e.onCancelClick,
                    c = e.onClickOutside;
                const S = (0, r.useRef)(null),
                    E = (0, r.useRef)(null),
                    O = (0, r.useState)(!1),
                    H = (0, i.default)(O, 2),
                    D = H[0],
                    x = H[1],
                    I = () => x(!0);
                (0, d.useTimeout)(u, D ? 120 : null), (0, f.useClickListener)(E, null != c ? c : I);
                const P = () => l.map((e => r.default.createElement(y.default, (0, o.default)({}, e, {
                        key: e.iconName,
                        onClick: t => !D && e.onClick(t)
                    })))),
                    j = () => r.default.createElement(T.OmnichannelCancelButton, {
                        device: t,
                        onClick: I
                    }),
                    R = (0, a.useSelector)(g.selectZoom).app,
                    N = (0, r.useState)((0, h.getTextSize)(R)),
                    L = (0, i.default)(N, 2),
                    W = L[0],
                    z = L[1],
                    A = t === _.DEVICE.IOS,
                    V = (0, r.useState)(!1),
                    F = (0, i.default)(V, 2),
                    B = F[0],
                    U = F[1];
                return (0, p.useDidUpdate)((e => {
                    A && (1 === e || Number.isNaN(e) ? z("100%") : z((0, h.getTextSize)(e)))
                }), [R]), (0, r.useEffect)((() => {
                    A && setTimeout((() => {
                        U(!0)
                    }), 200)
                }), []), r.default.createElement("jdiv", {
                    className: k.default.wrapper,
                    style: {
                        zoom: R
                    }
                }, r.default.createElement("jdiv", {
                    ref: S,
                    style: A ? {
                        "-webkit-text-size-adjust": W
                    } : null,
                    className: (0, s.default)({
                        [k.default.menuWrapper]: !0,
                        [k.default[t]]: !0
                    })
                }, r.default.createElement("jdiv", {
                    className: (0, s.default)(k.default.menu, {
                        [k.default.__show]: B
                    }),
                    style: D ? C : null
                }, n.show && r.default.createElement(w.default, {
                    url: n.link,
                    icon: n.icon
                }), t === _.DEVICE.IOS && r.default.createElement(r.default.Fragment, null, r.default.createElement(m.default, {
                    radius: "lg"
                }, r.default.createElement(b.default, {
                    autoHeight: !0,
                    autoHeightMax: 420
                }, r.default.createElement(M, null), P())), r.default.createElement(m.default, {
                    radius: "lg"
                }, j())), t === _.DEVICE.ANDROID && r.default.createElement(m.default, {
                    radius: null
                }, r.default.createElement(M, null), P(), j()))), r.default.createElement(v.default, {
                    ref: E
                }))
            }
            E.propTypes = {
                menuItems: u.default.arrayOf(u.default.object).isRequired,
                copyright: u.default.shape({
                    show: u.default.bool,
                    link: u.default.string,
                    icon: u.default.string
                }).isRequired,
                device: u.default.oneOf([_.DEVICE.IOS, _.DEVICE.ANDROID]).isRequired,
                onCancelClick: u.default.func.isRequired,
                onClickOutside: u.default.func
            }
        },
        19192: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(l(23101)),
                i = n(l(98661)),
                r = l(29865),
                a = n(l(45697)),
                s = n(l(94184)),
                u = n(l(13114)),
                c = l(94903),
                d = l(87692),
                f = l(15496),
                h = l(29853),
                p = l(52947),
                g = n(l(64221)),
                v = n(l(68184));
            const m = e => {
                let t = e.device,
                    l = e.menuItems,
                    n = e.orientation;
                const a = (0, r.useSelector)(d.selectLabelBubble);
                return i.default.createElement(u.default, {
                    style: c.platform.isChatPage ? h.chatPageStyle : t === p.DEVICE.TABLET || a ? h.tabletStyle : (0, h.desktopStyle)({
                        orientation: n
                    }),
                    radius: "lg",
                    shadow: null
                }, i.default.createElement("jdiv", (0, o.default)({
                    className: (0, s.default)(v.default.menuWrapper, v.default[t])
                }, (0, f.withLocator)("OMNICHANNEL_MENU_CONTAINER")), i.default.createElement("jdiv", {
                    className: v.default.menu
                }, l.map(((e, t) => i.default.createElement(g.default, (0, o.default)({
                    key: e.iconName
                }, e, {
                    "data-qa-id": `OMNICHANNEL_MENU_ITEM_${t+1}`
                })))))))
            };
            m.propTypes = {
                menuItems: a.default.arrayOf(a.default.object).isRequired,
                device: a.default.oneOf([p.DEVICE.TABLET, p.DEVICE.DESKTOP]).isRequired,
                referenceElement: a.default.oneOfType([a.default.element, () => null]),
                orientation: a.default.oneOf(["left", "bottom", "right"]).isRequired,
                onCancelClick: a.default.func
            };
            var b = m;
            t.default = b
        },
        4096: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDesktopMenuItems = void 0;
            var o = l(97490),
                i = n(l(138)),
                r = l(94903),
                a = l(20344),
                s = l(36874),
                u = l(16217),
                c = l(52947),
                d = l(84781),
                f = l(66434);
            const h = (0, c.getDevice)(),
                p = (e, t) => e ? (0, a.l10n)("social_text_" + (t || 1)) : null,
                g = e => {
                    i.default.trackSocial(e), (0, f.telemetry)(`label_buttons_${e}`)
                };
            t.getDesktopMenuItems = e => {
                let t = e.app,
                    l = e.callback,
                    n = e.settings,
                    i = e.onApp,
                    c = e.onMessage,
                    f = e.onChat,
                    v = e.onUser;
                const m = [],
                    b = t.isOnline,
                    w = n.features,
                    y = n.user;
                if (w.joint) {
                    const e = w.joint,
                        t = e.tg,
                        l = e.im,
                        n = e.vk,
                        o = e.fb,
                        i = e.ig,
                        s = e.wa;
                    t && (t.botname || t.customUrl) && m.push({
                        url: t.customUrl || "https://t.me/" + t.botname,
                        title: "Telegram",
                        subTitle: null,
                        iconName: d.telegramIcon,
                        iconColor: null,
                        device: h,
                        onClick: () => g("tg")
                    }), l && l.joint_id && r.platform.supports.appleBusinessChat && m.push({
                        url: `sms://open?service=iMessage&recipient=urn:biz:${l.joint_id}&biz-intent-id=click_in_jivo_desktop`,
                        title: (0, a.l10n)("lbAbcText"),
                        subTitle: null,
                        iconName: d.iconIm,
                        iconColor: null,
                        device: h,
                        onClick: () => g("im")
                    }), n && (n.joint_id || n.customUrl) && m.push({
                        url: n.customUrl || "https://vk.com/im?sel=-" + n.joint_id,
                        title: (0, a.l10n)("label_vk_text"),
                        subTitle: p(b, y.socialResponse),
                        iconName: d.vkIcon,
                        iconColor: null,
                        device: h,
                        onClick: () => g("vk")
                    }), o && o.joint_id && m.push({
                        url: "https://www.facebook.com/messages/t/" + o.joint_id,
                        title: (0, a.l10n)("label_fb_text"),
                        subTitle: p(b, y.socialResponse),
                        iconName: d.fbIcon,
                        iconColor: null,
                        device: h,
                        onClick: () => g("fb")
                    }), i && i.group_name && m.push({
                        url: "https://www.instagram.com/" + i.group_name,
                        title: "Instagram",
                        subTitle: null,
                        iconName: d.igIcon,
                        iconColor: null,
                        device: h,
                        onClick: () => g("ig")
                    }), s && m.push({
                        url: s.customUrl || "https://wa.me/" + s,
                        title: "WhatsApp",
                        subTitle: null,
                        iconName: d.waIcon,
                        iconColor: null,
                        device: h,
                        onClick: () => g("wa")
                    })
                }
                return l.available && m.push({
                    url: null,
                    title: l.isDelayed && n.user.callback ? (0, a.l10n)("callback_delayed_button_submit") : `${(0,a.l10n)("cw_callAfter")} ${n.user.callback.time} ${(0,u.getSeconds)(n.user.callback.time)}!`,
                    subTitle: null,
                    iconName: d.callbackBtnIcon,
                    iconColor: s.colorsFromFigma.GREEN_80,
                    device: h,
                    onClick: () => {
                        v.setCallHeaderText(null), f(b, o.RouterEvent.ToCall), g("call")
                    }
                }), !r.platform.isChatPage && m.length && m.push({
                    url: null,
                    title: b ? (0, a.l10n)("cw_typeInChat") : (0, a.l10n)("lblLeaveMessage"),
                    subTitle: null,
                    iconName: d.chatIcon,
                    iconColor: s.colorsFromFigma.GREEN_80,
                    device: h,
                    onClick: () => {
                        i.setAppIsFocused(!0), c.addPrechatMessage(), f(b, o.RouterEvent.Navigate), g("chat")
                    }
                }), m
            }
        },
        96905: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMobileMenuItems = void 0;
            var o = l(68408),
                i = l(21476),
                r = l(97490),
                a = n(l(138)),
                s = l(20344),
                u = l(67597),
                c = l(36874),
                d = l(16217),
                f = l(94903),
                h = l(21115),
                p = l(52947),
                g = l(84781),
                v = l(66434);
            const m = (0, p.getDevice)(),
                b = e => {
                    a.default.trackMobileSocial(e), (0, v.telemetry)(`powerbtn_open_${e}`)
                },
                w = e => {
                    let t = e.onApp,
                        l = e.onMessage,
                        n = e.onChat;
                    (0, o.isPowerPhone)() || (t.setAppIsFocused(!0), l.deleteUnansweredOfflineSystemInvite(), l.offlineSystemInvite(), i.Router.next(r.RouterEvent.ToCall), n()), a.default.trackMobileCallClick(), (0, v.telemetry)("powerbtn_open_callback")
                },
                y = () => {
                    (0, h.sendVideoCallChatMessage)(), (0, v.telemetry)("powerbtn_open_video_call")
                };
            t.getMobileMenuItems = e => {
                let t = e.app,
                    l = e.callback,
                    n = e.settings,
                    o = e.onApp,
                    a = e.onChat,
                    h = e.onMessage;
                const p = [],
                    k = t.isOnline,
                    _ = n.features,
                    T = n.system;
                if (_.joint) {
                    const e = _.joint,
                        t = e.tg,
                        l = e.im,
                        n = e.vk,
                        o = e.fb,
                        i = e.ig,
                        r = e.vb,
                        a = e.wa;
                    t && (t.botname || t.customUrl) && p.push({
                        url: t.customUrl || (0, u.getTgLink)(T.geoIp) + t.botname,
                        title: "Telegram",
                        subTitle: null,
                        iconName: g.telegramIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("tg")
                    }), l && l.joint_id && f.platform.supports.iMessage && p.push({
                        url: `sms://open?service=iMessage&recipient=urn:biz:${l.joint_id}&biz-intent-id=click_in_jivo`,
                        title: (0, s.l10n)("lblMessagesApp"),
                        subTitle: null,
                        iconName: g.iconIm,
                        iconColor: null,
                        device: m,
                        onClick: () => b("im")
                    }), n && (n.joint_id || n.customUrl) && p.push({
                        url: n.customUrl || "https://vk.me/club" + n.joint_id,
                        title: (0, s.l10n)("social_vk"),
                        subTitle: null,
                        iconName: g.vkIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("vk")
                    }), o && o.joint_id && p.push({
                        url: "https://m.me/" + o.joint_id,
                        title: "Facebook Messenger",
                        subTitle: null,
                        iconName: g.fbIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("fb")
                    }), i && i.group_name && p.push({
                        url: "https://www.instagram.com/" + i.group_name,
                        title: "Instagram",
                        subTitle: null,
                        iconName: g.igIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("ig")
                    }), r && r.botname && p.push({
                        url: "viber://pa?chatURI=" + r.botname,
                        title: "Viber",
                        subTitle: null,
                        iconName: g.viberIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("vb")
                    }), a && p.push({
                        url: a.customUrl || "https://wa.me/" + a,
                        title: "WhatsApp",
                        subTitle: null,
                        iconName: g.waIcon,
                        iconColor: null,
                        device: m,
                        onClick: () => b("wa")
                    })
                }
                return (0, d.isVideoCallAvailable)() && p.push({
                    url: null,
                    title: (0, s.l10n)("webrtc_video_text_popup"),
                    subTitle: null,
                    iconName: g.iconVideo,
                    iconColor: c.colorsFromFigma.GREEN_80,
                    device: m,
                    onClick: y
                }), l.available ? p.push({
                    url: null,
                    title: l.isDelayed && n.user.callback ? (0, s.l10n)("callback_delayed_button_submit") : `${(0,s.l10n)("cw_callAfter")} ${n.user.callback.time} ${(0,d.getSeconds)(n.user.callback.time)}!`,
                    subTitle: null,
                    iconName: g.callbackBtnIcon,
                    iconColor: c.colorsFromFigma.GREEN_80,
                    device: m,
                    onClick: () => w({
                        onApp: o,
                        onChat: a,
                        onMessage: h
                    })
                }) : n.user.powerButtonPhone && p.push({
                    url: `tel:${n.user.powerButtonPhone}`,
                    title: `${(0,s.l10n)("lblCallMe")} ${n.user.powerButtonPhone}`,
                    subTitle: null,
                    iconName: g.callbackBtnIcon,
                    iconColor: c.colorsFromFigma.GREEN_80,
                    device: m,
                    onClick: () => w({
                        onApp: o,
                        onChat: a,
                        onMessage: h
                    })
                }), f.platform.isChatPage || p.push({
                    url: null,
                    title: k ? (0, s.l10n)("onlineChat") : (0, s.l10n)("lblLeaveMessage"),
                    subTitle: null,
                    iconName: g.chatIcon,
                    iconColor: c.colorsFromFigma.GREEN_80,
                    device: m,
                    onClick: () => (e => {
                        let t = e.onApp,
                            l = e.onMessage,
                            n = e.onChat;
                        t.setAppIsFocused(!0), t.setChatOpenByClient(!0), l.deleteUnansweredOfflineSystemInvite(), l.addPrechatMessage(), l.offlineSystemInvite(), i.Router.next(r.RouterEvent.ToChat), n(), (0, v.telemetry)("powerbtn_open_chat")
                    })({
                        onApp: o,
                        onChat: a,
                        onMessage: h
                    })
                }), p
            }
        },
        84781: function(e, t, l) {
            "use strict";
            var n = l(17907);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "callbackBtnIcon", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "chatIcon", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "fbIcon", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "iconIm", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "iconVideo", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "igIcon", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "telegramIcon", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "viberIcon", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "vkIcon", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "waIcon", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            });
            var o = n(l(33825)),
                i = n(l(70099)),
                r = n(l(74783)),
                a = n(l(36683)),
                s = n(l(15455)),
                u = n(l(64924)),
                c = n(l(82671)),
                d = n(l(28843)),
                f = n(l(75001)),
                h = n(l(43055))
        },
        29853: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.tabletStyle = t.desktopStyle = t.chatPageStyle = void 0;
            var n = l(52274),
                o = l(99393);
            const i = 280,
                r = "0px 1px 17px 1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.16)";
            t.desktopStyle = e => {
                let t = e.orientation;
                return {
                    [o.ORIENTATION.LEFT]: {
                        boxShadow: r,
                        width: i,
                        transformOrigin: "top right",
                        transform: `rotate(90deg) translate(calc(100% + ${n.LABEL_HEIGHT+16}px), calc(280px - 100%))`
                    },
                    [o.ORIENTATION.RIGHT]: {
                        boxShadow: r,
                        width: i,
                        transformOrigin: "top right",
                        transform: "rotate(90deg) translate(-16px, calc(280px - 100%))"
                    },
                    [o.ORIENTATION.BOTTOM]: {
                        boxShadow: r,
                        width: i,
                        transform: "translate(0, calc(-100% - 16px))"
                    }
                }[t]
            };
            const a = {
                boxShadow: r,
                width: i
            };
            t.tabletStyle = a;
            const s = {
                boxShadow: r,
                width: i,
                position: "absolute",
                right: 16,
                transform: "translateY(16px)"
            };
            t.chatPageStyle = s
        },
        87869: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useClickListener = function(e, t) {
                (0, n.useEffect)((() => {
                    if ((0, o.isFunction)(t) && e.current) {
                        const l = l => {
                                e.current && (l.preventDefault(), t(l))
                            },
                            n = e.current;
                        return n.addEventListener("mousedown", l), n.addEventListener("touchstart", l), () => {
                            n.removeEventListener("mousedown", l), n.removeEventListener("touchstart", l)
                        }
                    }
                }), [e, t])
            };
            var n = l(98661),
                o = l(73422)
        },
        73151: function(e, t, l) {
            var n = l(9534);
            e.exports = n
        },
        45012: function(e, t, l) {
            var n = l(23059);
            e.exports = n
        },
        30498: function(e, t, l) {
            l(35824);
            var n = l(54058);
            e.exports = n.Object.getOwnPropertySymbols
        },
        48494: function(e, t, l) {
            l(21724);
            var n = l(54058);
            e.exports = n.Object.keys
        },
        84710: function(e, t, l) {
            e.exports = l(14058)
        },
        93799: function(e, t, l) {
            e.exports = l(92093)
        },
        14058: function(e, t, l) {
            var n = l(73151);
            e.exports = n
        },
        92093: function(e, t, l) {
            var n = l(45012);
            e.exports = n
        },
        21724: function(e, t, l) {
            var n = l(76887),
                o = l(89678),
                i = l(14771);
            n({
                target: "Object",
                stat: !0,
                forced: l(95981)((function() {
                    i(1)
                }))
            }, {
                keys: function(e) {
                    return i(o(e))
                }
            })
        },
        9534: function(e, t, l) {
            var n = l(30498);
            e.exports = n
        },
        23059: function(e, t, l) {
            var n = l(48494);
            e.exports = n
        },
        53879: function(e, t, l) {
            var n = l(87236),
                o = l(6189),
                i = {
                    float: "cssFloat"
                },
                r = l(93379);

            function a(e, t, l) {
                var a = i[t];
                if (void 0 === a && (a = function(e) {
                        var t = o(e),
                            l = n(t);
                        return i[t] = i[e] = i[l] = l, l
                    }(t)), a) {
                    if (void 0 === l) return e.style[a];
                    e.style[a] = r(a, l)
                }
            }

            function s(e, t) {
                for (var l in t) t.hasOwnProperty(l) && a(e, l, t[l])
            }

            function u() {
                2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : s(arguments[0], arguments[1]) : a(arguments[0], arguments[1], arguments[2])
            }
            e.exports = u, e.exports.set = u, e.exports.get = function(e, t) {
                return Array.isArray(t) ? t.reduce((function(t, l) {
                    return t[l] = a(e, l || ""), t
                }), {}) : a(e, t || "")
            }
        },
        70147: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                main: "main__BQLCd"
            }
        },
        80810: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                root: "root__iqAmf",
                __withBorder: "__withBorder__UBp0K",
                __xsShadow: "__xsShadow__pLkH3",
                __smShadow: "__smShadow__uL0zs",
                __mdShadow: "__mdShadow__DPPiV",
                __lgShadow: "__lgShadow__p2f96",
                __xlShadow: "__xlShadow__tWVch",
                __xsRadius: "__xsRadius__TQJUT",
                __smRadius: "__smRadius__OXlDl",
                __mdRadius: "__mdRadius__eDUlL",
                __lgRadius: "__lgRadius__aAceq",
                __xlRadius: "__xlRadius__WNx8T",
                __xsPadding: "__xsPadding__cFyZ4",
                __smPadding: "__smPadding__I8MmB",
                __mdPadding: "__mdPadding__EetFU",
                __lgPadding: "__lgPadding__ZS3dz",
                __xlPadding: "__xlPadding__JJ5P8"
            }
        },
        55955: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                android: "android__EdUO9",
                backIcon: "backIcon__ANuny",
                text: "text__dEJNg",
                ios: "ios__wMmPt"
            }
        },
        62992: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                wrap: "wrap__b29U2",
                copyright: "copyright__Y_Awi",
                logoIcon: "logoIcon__jI4QF",
                __ru: "__ru__YFVl1"
            }
        },
        68184: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                wrapper: "wrapper__XnU1q",
                menuWrapper: "menuWrapper__qW1ci",
                menu: "menu__oEgiN",
                android: "android__vYVJG",
                ios: "ios__Ixa64",
                showMenu: "showMenu__tYCAS",
                __show: "__show__WTiX7",
                tablet: "tablet__PrwKP",
                desktop: "desktop__TuVsY",
                menuTitle: "menuTitle__K9Gjm"
            }
        },
        27752: function(e, t, l) {
            "use strict";
            l.r(t), t.default = {
                android: "android__R3L4G",
                ios: "ios__IbR3P",
                title: "title__lcE8Y",
                tablet: "tablet__ZbDiC",
                desktop: "desktop__BEKuM",
                icon: "icon__ga9wh",
                link: "link__AeSxx",
                subTitle: "subTitle__yqi3B",
                item: "item__PtJd5"
            }
        },
        75: function(e) {
            (function() {
                var t, l, n, o, i, r;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                    return (t() - i) / 1e6
                }, l = process.hrtime, o = (t = function() {
                    var e;
                    return 1e9 * (e = l())[0] + e[1]
                })(), r = 1e9 * process.uptime(), i = o - r) : Date.now ? (e.exports = function() {
                    return Date.now() - n
                }, n = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - n
                }, n = (new Date).getTime())
            }).call(this)
        },
        87236: function(e) {
            var t = null,
                l = ["Webkit", "Moz", "O", "ms"];
            e.exports = function(e) {
                t || (t = document.createElement("div"));
                var n = t.style;
                if (e in n) return e;
                for (var o = e.charAt(0).toUpperCase() + e.slice(1), i = l.length; i >= 0; i--) {
                    var r = l[i] + o;
                    if (r in n) return r
                }
                return !1
            }
        },
        54087: function(e, t, l) {
            for (var n = l(75), o = "undefined" == typeof window ? l.g : window, i = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], s = o["cancel" + r] || o["cancelRequest" + r], u = 0; !a && u < i.length; u++) a = o[i[u] + "Request" + r], s = o[i[u] + "Cancel" + r] || o[i[u] + "CancelRequest" + r];
            if (!a || !s) {
                var c = 0,
                    d = 0,
                    f = [];
                a = function(e) {
                    if (0 === f.length) {
                        var t = n(),
                            l = Math.max(0, 16.666666666666668 - (t - c));
                        c = l + t, setTimeout((function() {
                            var e = f.slice(0);
                            f.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(c)
                                } catch (e) {
                                    setTimeout((function() {
                                        throw e
                                    }), 0)
                                }
                        }), Math.round(l))
                    }
                    return f.push({
                        handle: ++d,
                        callback: e,
                        cancelled: !1
                    }), d
                }, s = function(e) {
                    for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return a.call(o, e)
            }, e.exports.cancel = function() {
                s.apply(o, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = o), e.requestAnimationFrame = a, e.cancelAnimationFrame = s
            }
        },
        36599: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" fill-opacity=".87" fill="black"/></svg>'
        },
        70099: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="76.5" height="76.5" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">\n  <path fill="#0076ff" d="M22.5 45C10.0736 45 0 34.9264 0 22.5S10.0736 0 22.5 0 45 10.0736 45 22.5 34.9264 45 22.5 45zm-.038-14.2213c6.3812 0 11.5542-4.177 11.5542-9.3295 0-5.1526-5.173-9.3295-11.5543-9.3295-6.3812 0-11.5542 4.177-11.5542 9.3295 0 3.1476 1.9304 5.931 4.8874 7.6207l.0752.0424a.1523.1523 0 0 1 .0745.1016c.2544 1.2152-1.4097 2.3051-2.5218 3.0324 3.6862.232 5.546-1.2438 6.0782-1.7276.9024.1827 1.9882.26 2.9607.26z"/>\n  <path fill="#ffffff" stroke="#ffffff" stroke-width="2" d="M22.462 30.7787c6.3812 0 11.5542-4.177 11.5542-9.3295 0-5.1526-5.173-9.3295-11.5543-9.3295-6.3812 0-11.5542 4.177-11.5542 9.3295 0 3.1476 1.9304 5.931 4.8874 7.6207l.0752.0424a.1524.1524 0 0 1 .0745.1016c.2544 1.2152-1.4097 2.3051-2.5218 3.0324 3.6862.232 5.546-1.2438 6.0782-1.7276.9024.1827 1.9882.26 2.9607.26z"/>\n</svg>'
        },
        82671: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.86c4.97 0 9-3.297 9-7.364s-4.03-7.364-9-7.364-9 3.297-9 7.364c0 2.452 1.465 4.624 3.717 5.962-.677 2.418-1.837 4.41-1.837 4.41s3.568-.864 6.327-3.037c.26.019.526.029.793.029Z" fill="_COLOR1_"/></svg>'
        },
        36683: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="3.556%" x2="50%" y2="97.988%" id="a"><stop stop-color="#00C6FF" offset="0%"/><stop stop-color="#0371FF" offset="100%"/></linearGradient></defs><path d="M7.5 0C3.375 0 0 3.105 0 6.938c0 2.16 1.065 4.087 2.737 5.362l.046 2.7 2.587-1.41-.022-.008a8.106 8.106 0 0 0 2.152.293c4.125 0 7.5-3.105 7.5-6.938C15 3.106 11.625 0 7.5 0zm.773 9.307L6.405 7.335l-3.78 1.972L6.66 5.085l1.935 1.853 3.637-1.853-3.96 4.222z" transform="translate(1)" fill="url(#a)"/></svg>'
        },
        15455: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.004.75c-4.698 0-6.072.005-6.34.027-.964.08-1.564.232-2.217.557-.504.25-.901.54-1.293.947C1.44 3.022 1.007 3.934.85 5.018c-.076.526-.098.633-.102 3.321-.002.896 0 2.075 0 3.657 0 4.694.005 6.066.027 6.333.078.938.225 1.528.537 2.174a4.74 4.74 0 0 0 3.072 2.51c.464.12.976.185 1.634.216.279.012 3.12.021 5.962.021 2.842 0 5.684-.003 5.956-.017.761-.036 1.203-.096 1.692-.222a4.711 4.711 0 0 0 3.073-2.515c.305-.63.46-1.243.53-2.132.016-.194.022-3.285.022-6.371 0-3.088-.007-6.173-.022-6.367-.071-.903-.226-1.51-.542-2.153a4.46 4.46 0 0 0-.963-1.32c-.744-.71-1.654-1.143-2.74-1.3-.525-.076-.63-.098-3.32-.103h-3.662Z" fill="url(#a)"/><path d="M12.004.75c-4.698 0-6.072.005-6.34.027-.964.08-1.564.232-2.217.557-.504.25-.901.54-1.293.947C1.44 3.022 1.007 3.934.85 5.018c-.076.526-.098.633-.102 3.321-.002.896 0 2.075 0 3.657 0 4.694.005 6.066.027 6.333.078.938.225 1.528.537 2.174a4.74 4.74 0 0 0 3.072 2.51c.464.12.976.185 1.634.216.279.012 3.12.021 5.962.021 2.842 0 5.684-.003 5.956-.017.761-.036 1.203-.096 1.692-.222a4.711 4.711 0 0 0 3.073-2.515c.305-.63.46-1.243.53-2.132.016-.194.022-3.285.022-6.371 0-3.088-.007-6.173-.022-6.367-.071-.903-.226-1.51-.542-2.153a4.46 4.46 0 0 0-.963-1.32c-.744-.71-1.654-1.143-2.74-1.3-.525-.076-.63-.098-3.32-.103h-3.662Z" fill="url(#b)"/><path d="M11.998 3.693c-2.256 0-2.54.01-3.425.05-.885.04-1.489.18-2.017.386a4.068 4.068 0 0 0-1.472.958 4.078 4.078 0 0 0-.959 1.471c-.206.529-.346 1.133-.386 2.017-.04.886-.05 1.17-.05 3.426 0 2.256.01 2.539.05 3.425.041.884.181 1.488.387 2.016a4.07 4.07 0 0 0 .958 1.472c.462.462.925.747 1.471.96.529.205 1.133.345 2.017.385.886.04 1.17.05 3.426.05 2.256 0 2.538-.01 3.425-.05.884-.04 1.489-.18 2.017-.386a4.066 4.066 0 0 0 1.471-.959c.462-.462.746-.925.959-1.471.204-.529.344-1.133.386-2.017.04-.886.05-1.169.05-3.425s-.01-2.54-.05-3.426c-.042-.884-.182-1.488-.386-2.016a4.078 4.078 0 0 0-.959-1.472 4.062 4.062 0 0 0-1.471-.958c-.53-.206-1.134-.346-2.019-.386-.886-.04-1.168-.05-3.425-.05h.002Zm-.745 1.497h.745c2.219 0 2.482.008 3.358.048.81.037 1.25.172 1.542.286.388.15.664.33.955.621.29.29.47.568.622.956.113.292.249.732.286 1.542.04.876.048 1.139.048 3.356 0 2.217-.008 2.48-.048 3.356-.037.81-.172 1.25-.286 1.543a2.57 2.57 0 0 1-.622.954c-.29.29-.567.47-.955.621-.292.115-.732.25-1.542.287-.876.04-1.14.048-3.358.048s-2.481-.009-3.357-.048c-.81-.038-1.25-.173-1.543-.287a2.573 2.573 0 0 1-.955-.621c-.29-.291-.471-.567-.622-.955-.114-.293-.25-.732-.286-1.542-.04-.876-.048-1.14-.048-3.358 0-2.219.008-2.48.048-3.356.037-.81.172-1.25.286-1.543.15-.388.331-.665.622-.955.29-.291.568-.471.955-.622.293-.114.733-.25 1.543-.287.767-.034 1.064-.045 2.612-.046v.002Zm5.18 1.38a.997.997 0 1 0 0 1.993.997.997 0 0 0 0-1.994Zm-4.435 1.164A4.267 4.267 0 1 0 12 16.268a4.267 4.267 0 0 0 0-8.534Zm0 1.497a2.77 2.77 0 1 1 0 5.54 2.77 2.77 0 0 1 0-5.54Z" fill="#fff"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -22.2992 20.7456 0 6.725 24.983)"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(78.678 -2.958 -.659) scale(9.96792 41.0985)"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></svg>'
        },
        33825: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014-.568.226-.866.447-.893.663-.046.366.412.51 1.034.705.085.027.173.054.263.084.613.199 1.437.432 1.865.441.389.008.823-.152 1.302-.48 3.268-2.207 4.955-3.322 5.061-3.346.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504-.094.097-.19.19-.282.279-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943.14.092.274.187.405.28.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2.112 2.112 0 0 0-.02-.472.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635Z" fill="#54A6E4"/></svg>'
        },
        75001: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.811 2.34c-.596-.55-3.006-2.299-8.375-2.323 0 0-6.33-.382-9.417 2.45C1.302 4.184.697 6.698.633 9.815.57 12.933.487 18.775 6.118 20.358h.006l-.004 2.418s-.036.978.608 1.178c.78.242 1.237-.502 1.981-1.304.409-.44.973-1.086 1.398-1.58 3.85.324 6.813-.417 7.149-.527.777-.252 5.177-.816 5.893-6.657.739-6.02-.357-9.829-2.338-11.545Z" fill="#fff"/><path d="M19.559 3.557c-.504-.458-2.68-1.825-7.222-1.845 0 0-5.377-.354-7.987 2.01C2.897 5.158 2.407 7.29 2.354 9.895c-.054 2.603-.332 7.576 4.43 8.899l-.021 4.016c0 .227.036.382.165.414.093.023.233-.025.352-.144.761-.765 3.199-3.705 3.199-3.705 3.27.213 5.873-.432 6.152-.524.66-.212 4.229-.518 4.833-5.397.624-5.029-.23-8.461-1.905-9.896Z" fill="#7360F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.529 7.788a.304.304 0 0 1 .319-.288c.626.033 1.147.223 1.519.607.37.382.55.916.582 1.558a.304.304 0 1 1-.606.03c-.027-.55-.178-.923-.413-1.166-.233-.242-.59-.395-1.114-.422a.304.304 0 0 1-.287-.32Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.068 6.152a.304.304 0 0 1 .325-.28c1.275.093 2.301.529 3.049 1.344.74.809 1.09 1.814 1.065 2.993a.304.304 0 0 1-.607-.014c.023-1.04-.283-1.888-.906-2.568-.62-.678-1.49-1.065-2.645-1.15a.304.304 0 0 1-.28-.325Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.532 4.597a.304.304 0 0 1 .306-.301c1.762.012 3.251.599 4.447 1.764 1.206 1.176 1.802 2.776 1.817 4.763a.304.304 0 1 1-.607.005c-.014-1.862-.568-3.294-1.634-4.333-1.075-1.048-2.41-1.58-4.027-1.592a.304.304 0 0 1-.302-.306Z" fill="#fff"/><path d="M12.892 13.746s.427.036.657-.247l.447-.564c.217-.279.738-.457 1.249-.173.383.218.754.456 1.113.711.339.25 1.033.829 1.035.829.33.279.407.689.182 1.12l-.002.01c-.248.43-.563.817-.932 1.148-.005.002-.005.004-.009.006-.32.269-.636.421-.946.458a1.263 1.263 0 0 1-.541-.053l-.01-.015c-.478-.135-1.275-.472-2.603-1.204-.769-.42-1.5-.902-2.187-1.445a11.464 11.464 0 0 1-.984-.872l-.033-.033-.033-.034-.033-.033-.033-.033c-.31-.31-.6-.639-.872-.983a15.514 15.514 0 0 1-1.445-2.187c-.733-1.328-1.07-2.125-1.204-2.603l-.015-.01a1.26 1.26 0 0 1-.053-.541c.038-.31.191-.625.458-.948.002-.003.004-.003.007-.008.33-.37.718-.684 1.148-.932l.009-.002c.432-.225.842-.149 1.12.18.003.002.58.696.829 1.035.255.36.493.731.71 1.114.285.51.107 1.033-.172 1.249l-.564.448c-.285.23-.247.656-.247.656s.835 3.16 3.954 3.956Z" fill="#fff"/></svg>'
        },
        74783: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><mask id="a" width="14" height="14" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M14.9307 1H1.06934v14H14.9307V1Z"/></mask><g mask="url(#a)"><path fill="#07F" d="M1.06934 7.72c0-3.16784 0-4.75175.97437-5.73588C3.01809 1 4.58633 1 7.7228 1h.55446c3.13644 0 4.70474 0 5.67904.98412.9744.98413.9744 2.56804.9744 5.73588v.56c0 3.1678 0 4.7518-.9744 5.7359C12.982 15 11.4137 15 8.27726 15H7.7228c-3.13647 0-4.70471 0-5.67909-.9841-.97437-.9841-.97437-2.5681-.97437-5.7359v-.56Z"/><path fill="#fff" d="M8.44475 11.0859c-3.15925 0-4.96122-2.18754-5.0363-5.82754h1.58251c.05198 2.67166 1.21862 3.80333 2.14271 4.03666V5.25836h1.49015v2.30415c.91254-.09916 1.87118-1.14915 2.19458-2.30415h1.4902c-.2484 1.42334-1.288 2.47333-2.0273 2.90499.7393.35 1.9234 1.26584 2.3739 2.92255h-1.6404c-.3523-1.10838-1.23009-1.96588-2.39098-2.08255v2.08255h-.17907Z"/></g></svg>'
        },
        64924: function(e, t, l) {
            "use strict";
            l.r(t), t.default = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.564 11.896c-.001 2.023.528 3.998 1.533 5.74l-1.63 5.949 6.089-1.597a11.482 11.482 0 0 0 5.487 1.398h.006c6.329 0 11.481-5.15 11.484-11.481a11.408 11.408 0 0 0-3.361-8.122A11.412 11.412 0 0 0 12.048.416C5.718.416.566 5.566.564 11.896" fill="url(#a)"/><path d="M.153 11.892c0 2.096.547 4.142 1.588 5.946L.054 24l6.306-1.654a11.887 11.887 0 0 0 5.685 1.448h.005c6.556 0 11.894-5.336 11.896-11.892a11.82 11.82 0 0 0-3.48-8.414A11.823 11.823 0 0 0 12.05 0C5.493 0 .156 5.335.153 11.892Zm3.756 5.635-.235-.374a9.857 9.857 0 0 1-1.512-5.26c.002-5.45 4.438-9.884 9.892-9.884a9.824 9.824 0 0 1 6.99 2.899 9.824 9.824 0 0 1 2.894 6.993c-.002 5.45-4.438 9.885-9.888 9.885h-.004a9.875 9.875 0 0 1-5.032-1.379l-.362-.214-3.742.982 1-3.648Z" fill="url(#b)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.077 6.92c-.223-.494-.457-.504-.67-.513-.173-.008-.37-.007-.569-.007-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.214 3.074c.148.198 2.056 3.295 5.077 4.487 2.511.99 3.022.793 3.567.743.545-.05 1.76-.718 2.007-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.174.199-.347.224-.645.075-.297-.15-1.254-.463-2.39-1.475-.884-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.148-.174.198-.298.297-.496.099-.199.05-.372-.025-.521-.074-.149-.652-1.619-.916-2.206Z" fill="#fff"/><defs><linearGradient id="a" x1="12" y1="23.585" x2="12" y2=".416" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"/><stop offset="1" stop-color="#60D66A"/></linearGradient><linearGradient id="b" x1="12" y1="24" x2="12" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></svg>'
        },
        6189: function(e, t, l) {
            var n = l(7966);
            e.exports = function(e) {
                return n(e).replace(/\s(\w)/g, (function(e, t) {
                    return t.toUpperCase()
                }))
            }
        },
        71788: function(e) {
            e.exports = function(e) {
                return t.test(e) ? e.toLowerCase() : l.test(e) ? (function(e) {
                    return e.replace(o, (function(e, t) {
                        return t ? " " + t : ""
                    }))
                }(e) || e).toLowerCase() : n.test(e) ? function(e) {
                    return e.replace(i, (function(e, t, l) {
                        return t + " " + l.toLowerCase().split("").join(" ")
                    }))
                }(e).toLowerCase() : e.toLowerCase()
            };
            var t = /\s/,
                l = /(_|-|\.|:)/,
                n = /([a-z][A-Z]|[A-Z][a-z])/;
            var o = /[\W_]+(.|$)/g;
            var i = /(.)([A-Z]+)/g
        },
        7966: function(e, t, l) {
            var n = l(71788);
            e.exports = function(e) {
                return n(e).replace(/[\W_]+(.|$)/g, (function(e, t) {
                    return t ? " " + t : ""
                })).trim()
            }
        },
        37419: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useTimeout: function() {
                    return o
                }
            });
            var n = l(98661);
            const o = (e, t) => {
                const l = (0, n.useRef)(e);
                (0, n.useEffect)((() => {
                    l.current = e
                }), [e]), (0, n.useEffect)((() => {
                    if (!t && 0 !== t) return;
                    const e = setTimeout((() => {
                        l.current()
                    }), t);
                    return () => {
                        clearTimeout(e)
                    }
                }), [t])
            }
        },
        52020: function(e, t, l) {
            e.exports = l(84710)
        },
        62079: function(e, t, l) {
            e.exports = l(93799)
        },
        88436: function(e, t, l) {
            var n = l(52020),
                o = l(51791),
                i = l(80300);
            e.exports = function(e, t) {
                if (null == e) return {};
                var l, r, a = i(e, t);
                if (n) {
                    var s = n(e);
                    for (r = 0; r < s.length; r++) l = s[r], o(t).call(t, l) >= 0 || Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l])
                }
                return a
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        80300: function(e, t, l) {
            var n = l(62079),
                o = l(51791);
            e.exports = function(e, t) {
                if (null == e) return {};
                var l, i, r = {},
                    a = n(e);
                for (i = 0; i < a.length; i++) l = a[i], o(t).call(t, l) >= 0 || (r[l] = e[l]);
                return r
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }
]);