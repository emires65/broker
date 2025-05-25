"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [28749, 32565, 62193], {
        192784: (e, t, s) => {
            s.d(t, {
                flushDelegate: () => i
            });
            const i = new(s(547465).Delegate)
        },
        226722: (e, t, s) => {
            s.d(t, {
                TVXWindowEvents: () => a
            });
            s(142492);
            var i = s(735566),
                r = s(49437);
            const n = (0, i.getLogger)("XWindowEvents");
            var a;
            ! function(e) {
                const t = "tvxwevents.",
                    s = {};
                let i;
                window.BroadcastChannel ? (i = new BroadcastChannel("tvxwevents"), i.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: i
                        }
                    } = e;
                    s[t] && s[t].forEach((e => {
                        e(i)
                    }))
                })), function() {
                    const e = [],
                        s = performance.now();
                    for (let s = 0; s < r.TVLocalStorage.length; s++) {
                        const i = r.TVLocalStorage.key(s);
                        i.startsWith(t) && e.push(i)
                    }
                    const i = r.TVLocalStorage.length;
                    for (const t of e) r.TVLocalStorage.removeItem(t);
                    const a = performance.now() - s;
                    n.logNormal(`Total keys amount in local storage on operation start: ${i}`), n.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), n.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), n.logNormal(`Removing keys from local storage took ${a} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: i,
                        key: n
                    } = e;
                    if (null === i || !n || !n.startsWith(t)) return;
                    const a = n.substring(11);
                    s[a] && s[a].forEach((t => {
                        t(e.newValue)
                    }));
                    r.TVLocalStorage.removeItem(n)
                })), e.on = function(e, t) {
                    s[e] || (s[e] = []), s[e].push(t)
                }, e.off = function(e, t) {
                    if (!s[e]) return;
                    const i = s[e].indexOf(t); - 1 !== i && (1 === s[e].length ? delete s[e] : s[e].splice(i, 1))
                }, e.emit = function(e, s = Date.now()) {
                    try {
                        i ? i.postMessage({
                            event: e,
                            value: s
                        }) : r.TVLocalStorage.setItem(t + e, s.toString())
                    } catch (e) {
                        n.logError(e.message)
                    }
                }
            }(a || (a = {}))
        },
        423623: (e, t, s) => {
            s.d(t, {
                ChartSession: () => h
            });
            var i = s(547465),
                r = s(650151),
                n = s(820028),
                a = s(623213);
            const o = (0, s(735566).getLogger)("ChartApi.AbstractSession");
            class l {
                constructor(e, t, s) {
                    this._isConnected = new n.WatchedValue(!1), this._state = 0, this._isConnectForbidden = !1, this._sessionId = "", this._sessionIdChanged = new i.Delegate, this._chartApi = e, this._sessionPrefix = t, this._shouldReconnectAfterCriticalError = s
                }
                destroy() {
                    this._logNormal("Destroying session"), this._isConnected.unsubscribe(), this.disconnect(), this._sessionIdChanged.destroy(), delete this._chartApi, this._logNormal("Session has been destroyed")
                }
                isConnected() {
                    return this._isConnected
                }
                sessionId() {
                    return this._sessionId
                }
                onSessionIdChanged() {
                    return this._sessionIdChanged
                }
                connect() {
                    0 === this._state && ((0, r.assert)(!this._isConnectForbidden, "Cannot call connect because it is forbidden at this moment"), this._setSessionId(`${this._sessionPrefix}_${(0,a.randomHash)()}`), this._logNormal("Connecting session - wait until transport stay connected"), this._state = 1, this._chartApi.createSession(this._sessionId, this))
                }
                disconnect() {
                    0 !== this._state && ((0, r.assert)("" !== this._sessionId, "sessionId must not be invalid"), this._logNormal("Disconnecting session..."), this._forbidConnectWhile((() => {
                        this._chartApi.connected() && this._sendRemoveSession(), this._processDestroyingOnServer()
                    })))
                }
                onMessage(e) {
                    switch (e.method) {
                        case "connected":
                            return void this._onChartApiConnected();
                        case "disconnected":
                            return void this._onChartApiDisconnected();
                        case "critical_error":
                            const t = String(e.params[0]),
                                s = String(e.params[1]);
                            return void this._onCriticalError(t, s)
                    }
                    this._onMessage(e)
                }
                serverTime() {
                    return this._chartApi.serverTime()
                }
                _getChartApi() {
                    return this._chartApi
                }
                _generateLogMessage(e) {
                    return `[${this._sessionId}] ${e}`
                }
                _onCriticalError(e, t) {
                    this._logError(`Critical error. Reason=${e}, info=${t}.`), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this._shouldReconnectAfterCriticalError ? (this._logNormal("Reconnecting after critical error..."), this.connect()) : this._logNormal("Reconnecting after critical error skipped")
                }
                _onChartApiConnected() {
                    (0, r.assert)(1 === this._state, "Session is not registered"), this._logNormal("Transport is connected. Creating session on the server"), this._sendCreateSession(), this._state = 2, this._isConnected.setValue(!0)
                }
                _onChartApiDisconnected() {
                    this._logNormal("Transport is disconnected. Reconnecting..."), this._forbidConnectWhile((() => {
                        this._processDestroyingOnServer()
                    })), this.connect()
                }
                _setSessionId(e) {
                    const t = this._sessionId;
                    this._logNormal(`Changing sessionId: old=${t}, new=${e}`), this._sessionId = e, this._sessionIdChanged.fire(e, t)
                }
                _logNormal(e) {
                    o.logNormal(this._generateLogMessage(e))
                }
                _logError(e) {
                    o.logError(this._generateLogMessage(e))
                }
                _processDestroyingOnServer() {
                    this._state = 0, this._isConnected.setValue(!1), this._chartApi.removeSession(this._sessionId), this._setSessionId("")
                }
                _forbidConnectWhile(e) {
                    this._isConnectForbidden = !0, e(), this._isConnectForbidden = !1
                }
            }
            class h extends l {
                constructor(e, t = !1) {
                    super(e, "cs", !1), this._sessionDisabled = !1, this._handler = null, this._criticalError = new i.Delegate, this._symbolResolveMap = new Map, this._lastSymbolResolveInfoMap = new Map, this._disableStatistics = t
                }
                destroy() {
                    this._criticalError.destroy(), this._handler = null, this._symbolResolveMap.clear(), super.destroy()
                }
                switchTimezone(e) {
                    return this._getChartApi().switchTimezone(this.sessionId(), e)
                }
                defaultResolutions() {
                    return this._getChartApi().defaultResolutions()
                }
                availableCurrencies() {
                    return this._getChartApi().availableCurrencies()
                }
                availableUnits() {
                    return this._getChartApi().availableUnits()
                }
                availablePriceSources(e) {
                    return this._getChartApi().availablePriceSources(e)
                }
                resolveSymbol(e, t, s) {
                    if (this._symbolResolveMap.has(t)) {
                        const [e, i] = this._symbolResolveMap.get(t);
                        return Array.isArray(i) ? i.push(s) : i.then(s), e
                    } {
                        const i = [s];
                        return this._getChartApi().resolveSymbol(this.sessionId(), e, t, (s => {
                            if ("symbol_error" === s.method) this._symbolResolveMap.delete(t);
                            else {
                                this._symbolResolveMap.set(t, [e, Promise.resolve(s)]);
                                const [, i] = s.params, r = {
                                    pro_name: i.pro_name,
                                    ticker: i.ticker
                                };
                                this._lastSymbolResolveInfoMap.set(t, r), r.pro_name && this._lastSymbolResolveInfoMap.set(r.pro_name, r), i.full_name && this._lastSymbolResolveInfoMap.set(i.full_name, r), r.ticker && this._lastSymbolResolveInfoMap.set(r.ticker, r)
                            }
                            i.forEach((e => e(s)))
                        })), this._symbolResolveMap.set(t, [e, i]), e
                    }
                }
                requestFirstBarTime(e, t, s) {
                    return this._getChartApi().requestFirstBarTime(this.sessionId(), e, t, s)
                }
                lastSymbolResolveInfo(e) {
                    return this._lastSymbolResolveInfoMap.get(e) ? ? null
                }
                createSeries(e, t, s, i, r, n, a) {
                    return this._getChartApi().createSeries(this.sessionId(), e, t, s, i, r, n, a)
                }
                modifySeries(e, t, s, i, r, n, a) {
                    return this._getChartApi().modifySeries(this.sessionId(), e, t, s, i, r, n, a)
                }
                removeSeries(e) {
                    return !!this.isConnected().value() && this._getChartApi().removeSeries(this.sessionId(), e)
                }
                requestMoreData(e, t, s) {
                    return "number" == typeof e ? this._getChartApi().requestMoreData(this.sessionId(), e) : this._getChartApi().requestMoreData(this.sessionId(), e, t, s)
                }
                requestMoreTickmarks(e, t, s) {
                    return this._getChartApi().requestMoreTickmarks(this.sessionId(), e, t, s)
                }
                setFutureTickmarksMode(e) {
                    return this._getChartApi().setFutureTickmarksMode(this.sessionId(), e)
                }
                canCreateStudy(e, t) {
                    return this._getChartApi().canCreateStudy(this.sessionId(), e, t)
                }
                getStudyCounter() {
                    return this._getChartApi().getStudyCounter(this.sessionId())
                }
                getFundamentalCounter() {
                    return this._getChartApi().getFundamentalCounter(this.sessionId())
                }
                createStudy(e, t, s, i, r, n, a) {
                    return this._getChartApi().createStudy(this.sessionId(), e, t, s, i, r, n, a)
                }
                modifyStudy(e, t, s, i, r) {
                    return this._getChartApi().modifyStudy(this.sessionId(), e, t, s, i, r)
                }
                notifyStudy(e, t, s) {
                    return this._getChartApi().notifyStudy(this.sessionId(), e, t, s)
                }
                removeStudy(e) {
                    return this._getChartApi().removeStudy(this.sessionId(), e)
                }
                createPointset(e, t, s, i, r, n) {
                    return this._getChartApi().createPointset(this.sessionId(), e, t, s, i, r, n)
                }
                modifyPointset(e, t, s, i) {
                    return this._getChartApi().modifyPointset(this.sessionId(), e, t, s, i)
                }
                removePointset(e) {
                    return this._getChartApi().removePointset(this.sessionId(), e)
                }
                setVisibleTimeRange(e, t, s, i, r, n, a) {
                    0
                }
                criticalError() {
                    return this._criticalError
                }
                connect(e = null) {
                    null !== e && (this._handler = e), this._symbolResolveMap.clear(), super.connect()
                }
                setHandler(e) {
                    this._handler = e
                }
                connected() {
                    return this.isConnected().value() && !this._sessionDisabled
                }
                disable() {
                    this._sessionDisabled = !0
                }
                chartApi() {
                    return this._getChartApi()
                }
                _sendCreateSession() {
                    Object.keys(this).forEach((e => {
                        /^(s|st|symbol_)\d+$/.test(e) && delete this[e]
                    })), this._getChartApi().chartCreateSession(this.sessionId(), this._disableStatistics)
                }
                _sendRemoveSession() {
                    this._getChartApi().chartDeleteSession(this.sessionId())
                }
                _onMessage(e) {
                    this._handler && this._handler(e)
                }
                _onCriticalError(e, t) {
                    this._criticalError.fire(e, t), super._onCriticalError(e, t)
                }
            }
        },
        306543: (e, t, s) => {
            s.d(t, {
                getServerInterval: () => r
            });
            var i = s(477786);

            function r(e) {
                return i.Interval.isRange(e) ? "1" : e
            }
        },
        660439: (e, t, s) => {
            s.d(t, {
                lowerbound: () => i,
                upperbound: () => r
            });
            s(650151);

            function i(e, t, s, i = 0, r = e.length) {
                return function(e, t, s, i, r) {
                    let n = r - i;
                    for (; 0 < n;) {
                        const r = n >> 1,
                            a = i + r;
                        s(e(a), t) ? (i = a + 1, n -= r + 1) : n = r
                    }
                    return i
                }((t => e[t]), t, s, i, r)
            }

            function r(e, t, s, i = 0, r = e.length) {
                let n = r - i;
                for (; 0 < n;) {
                    const r = n >> 1,
                        a = i + r;
                    s(t, e[a]) ? n = r : (i = a + 1, n -= r + 1)
                }
                return i
            }
        },
        68777: (e, t, s) => {
            s.d(t, {
                combine: () => n
            });
            var i = s(820028);

            function r(e, t, ...s) {
                let r = null;
                const n = (...t) => e(...t.map((e => e.value())), r ? .value()),
                    a = r = new i.WatchedValue(n(...s)),
                    o = () => {
                        const e = s.map(((e, t) => e.value()));
                        t(...e) && a.setValue(n(...s))
                    },
                    l = s.map((e => e.spawn()));
                for (const e of l) e.subscribe(o);
                return a.readonly().spawn((() => {
                    l.forEach((e => e.destroy())), s.forEach((e => e.release()))
                }))
            }

            function n(e, ...t) {
                return r(e, (() => !0), ...t)
            }
        },
        20019: (e, t, s) => {
            s.d(t, {
                ConflatedChunksBuilder: () => a
            });
            var i = s(650151),
                r = s(660439);
            const n = [{
                barsToMerge: 10,
                forBarspacingLargerThen: .03
            }, {
                barsToMerge: 30,
                forBarspacingLargerThen: .01
            }, {
                barsToMerge: 100,
                forBarspacingLargerThen: .003
            }, {
                barsToMerge: 500,
                forBarspacingLargerThen: 0
            }];
            class a {
                constructor(e, t) {
                    this._plots = e, this._conflatedChunks = {
                        chunks: new Map,
                        priceSource: null,
                        priceSourcesProvider: t
                    }, this._clearConflatedChunks()
                }
                conflatedChunks(e, t) {
                    if (t !== this._conflatedChunks.priceSource) {
                        this._conflatedChunks.priceSource = t;
                        const e = this._plots.first();
                        e && (this._clearConflatedChunks(), this._rebuildConflatedChunks(e))
                    }
                    const s = (0, i.ensureDefined)(n.find((t => t.forBarspacingLargerThen <= e)));
                    return (0, i.ensureDefined)(this._conflatedChunks.chunks.get(s.barsToMerge))
                }
                mergeData(e) {
                    const t = this._plots.size(),
                        s = this._plots.merge(e);
                    return s && null !== this._conflatedChunks.priceSource && (t === this._plots.size() && s.index === this._plots.lastIndex() ? this._updateLatestChunks() : this._rebuildConflatedChunks(s)), s
                }
                moveData(e) {
                    this._plots.move(e), this._plots.size() > 0 && this._clearConflatedChunks()
                }
                clearData() {
                    this._plots.clear(), this._clearConflatedChunks()
                }
                _rebuildConflatedChunks(e) {
                    const t = this._conflatedChunks.priceSource;
                    if (null === t) return;
                    const s = e.index,
                        a = this._conflatedChunks.priceSourcesProvider(t),
                        o = (e, t, s) => {
                            let i = null;
                            for (const r of e) {
                                const e = a(r.value);
                                i && r.index - i.startTime >= s.barsToMerge && (t.push(i), i = null), i ? (i.endTime = r.index, i.high = Math.max(i.high, e), i.low = Math.min(i.low, e), i.close = e) : i = {
                                    startTime: r.index,
                                    endTime: r.index,
                                    open: e,
                                    high: e,
                                    low: e,
                                    close: e
                                }
                            }
                            i && t.push(i)
                        };
                    n.forEach((e => {
                        const t = (0, i.ensureDefined)(this._conflatedChunks.chunks.get(e.barsToMerge)),
                            n = (0, r.lowerbound)(t, s, ((e, t) => e.endTime < t));
                        if (0 === n && t.length > 0) {
                            const s = t[0].startTime - 1,
                                r = (0, i.ensureNotNull)(this._plots.firstIndex()),
                                n = this._plots.rangeIterator(r, s),
                                a = [];
                            o(n, a, e);
                            const l = a.concat(t);
                            this._conflatedChunks.chunks.set(e.barsToMerge, l)
                        } else {
                            const s = (0, i.ensureNotNull)(this._plots.lastIndex());
                            t.splice(n);
                            let r = (0, i.ensureNotNull)(this._plots.firstIndex());
                            t.length && (r = t[t.length - 1].endTime + 1);
                            const a = this._plots.rangeIterator(r, s);
                            o(a, t, e)
                        }
                    }))
                }
                _updateLatestChunks() {
                    const e = (0, i.ensureNotNull)(this._plots.last()),
                        t = this._conflatedChunks.priceSourcesProvider("close");
                    n.forEach((s => {
                        const r = (0, i.ensureDefined)(this._conflatedChunks.chunks.get(s.barsToMerge)),
                            n = t(e.value),
                            a = r[r.length - 1];
                        a.high = Math.max(a.high, n), a.low = Math.min(a.low, n), a.close = n, a.endTime = e.index
                    }))
                }
                _clearConflatedChunks() {
                    n.forEach((e => this._conflatedChunks.chunks.set(e.barsToMerge, [])))
                }
            }
        },
        191914: (e, t, s) => {
            s.d(t, {
                customFormatters: () => i
            });
            const i = {
                dateFormatter: null,
                timeFormatter: null,
                tickMarkFormatter: null,
                priceFormatterFactory: null,
                studyFormatterFactory: null
            }
        },
        477786: (e, t, s) => {
            s.d(t, {
                Interval: () => d,
                ResolutionKind: () => n
            });
            const i = /^(\d*)([TSHDWMR])$/,
                r = /^(\d+)$/;
            var n, a;
            ! function(e) {
                e.Ticks = "ticks", e.Seconds = "seconds", e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months",
                    e.Range = "range", e.Invalid = "invalid"
            }(n || (n = {})),
            function(e) {
                e.Hours = "hours"
            }(a || (a = {}));
            const o = {};
            o[n.Ticks] = 1e3, o[n.Seconds] = 1e3, o[n.Minutes] = 60 * o[n.Seconds], o[n.Days] = 1440 * o[n.Minutes], o[n.Weeks] = 7 * o[n.Days];
            const l = {
                    T: n.Ticks,
                    S: n.Seconds,
                    D: n.Days,
                    W: n.Weeks,
                    M: n.Months,
                    R: n.Range
                },
                h = new Set([n.Ticks, n.Seconds, n.Minutes]);
            class d {
                constructor(e, t) {
                    this._kind = n.Invalid, this._multiplier = 0, e !== n.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
                }
                kind() {
                    return this._kind
                }
                guiKind() {
                    return this.isMinuteHours() ? a.Hours : this._kind
                }
                multiplier() {
                    return this._multiplier
                }
                isValid() {
                    return this.kind() !== n.Invalid && this.multiplier() > 0
                }
                isDWM() {
                    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
                }
                isIntraday() {
                    const e = h.has(this.kind());
                    return this.isValid() && e
                }
                isSeconds() {
                    return this.kind() === n.Seconds
                }
                isMinutes() {
                    return this.kind() === n.Minutes
                }
                isMinuteHours() {
                    return this.kind() === n.Minutes && ((e = this.multiplier()) >= 60 && !(e % 60));
                    var e
                }
                isDays() {
                    return this.kind() === n.Days
                }
                isWeeks() {
                    return this.kind() === n.Weeks
                }
                isMonths() {
                    return this.kind() === n.Months
                }
                isRange() {
                    return this.kind() === n.Range
                }
                isTicks() {
                    return this.kind() === n.Ticks
                }
                is1Tick() {
                    return this.isTicks() && 1 === this.multiplier()
                }
                isTimeBased() {
                    return !this.isRange()
                }
                letter() {
                    return this.isValid() && this.kind() !== n.Minutes ? this.kind()[0].toUpperCase() : ""
                }
                value() {
                    return this.isValid() ? this.kind() === n.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
                }
                isEqualTo(e) {
                    if (!(e instanceof d)) throw new Error("Argument is not an Interval");
                    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
                }
                inMilliseconds(e = Date.now()) {
                    if (!this.isValid() || this.isRange()) return NaN;
                    if (this.isMonths()) {
                        const t = new Date(e);
                        t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                        return +t - e
                    }
                    const t = this.multiplier();
                    return o[this.kind()] * t
                }
                static isEqual(e, t) {
                    return e === t || d.parse(e).isEqualTo(d.parse(t))
                }
                static parseExt(e) {
                    e = (e + "").toUpperCase().split(",")[0];
                    let t = i.exec(e);
                    return null !== t ? "H" === t[2] ? {
                        interval: new d(n.Minutes, 60 * c(t[1])),
                        guiResolutionKind: a.Hours
                    } : {
                        interval: new d(l[t[2]], c(t[1])),
                        guiResolutionKind: l[t[2]]
                    } : (t = r.exec(e), null !== t ? {
                        interval: new d(n.Minutes, c(t[1])),
                        guiResolutionKind: n.Minutes
                    } : {
                        interval: new d(n.Invalid, 0),
                        guiResolutionKind: n.Invalid
                    })
                }
                static parse(e) {
                    return d.parseExt(e).interval
                }
                static kind(e) {
                    return d.parse(e).kind()
                }
                static isValid(e) {
                    return d.parse(e).isValid()
                }
                static isDWM(e) {
                    return d.parse(e).isDWM()
                }
                static isIntraday(e) {
                    return d.parse(e).isIntraday()
                }
                static isSeconds(e) {
                    return d.parse(e).isSeconds()
                }
                static isMinutes(e) {
                    return d.parse(e).isMinutes()
                }
                static isMinuteHours(e) {
                    return d.parse(e).isMinuteHours()
                }
                static isDays(e) {
                    return d.parse(e).isDays()
                }
                static isWeeks(e) {
                    return d.parse(e).isWeeks()
                }
                static isMonths(e) {
                    return d.parse(e).isMonths()
                }
                static isRange(e) {
                    return d.parse(e).isRange()
                }
                static isTicks(e) {
                    return d.parse(e).isTicks()
                }
                static isTimeBased(e) {
                    return d.parse(e).isTimeBased()
                }
                static normalize(e) {
                    const t = d.parse(e);
                    return t.isValid() ? t.value() : null
                }
            }

            function c(e) {
                return 0 === e.length ? 1 : parseInt(e, 10)
            }
        },
        584785: (e, t, s) => {
            var i;
            s.d(t, {
                    PlotRowSearchMode: () => i
                }),
                function(e) {
                    e[e.NearestLeft = -1] = "NearestLeft", e[e.Exact = 0] = "Exact", e[e.NearestRight = 1] = "NearestRight"
                }(i || (i = {}))
        },
        847774: (e, t, s) => {
            var i;
            s.d(t, {
                    SymbolErrorPermissionDeniedReason: () => i,
                    invalidSymbol: () => n,
                    permissionDenied: () => r
                }),
                function(e) {
                    e.Symbol = "symbol", e.GroupPermission = "group"
                }(i || (i = {}));
            const r = "permission denied",
                n = "invalid symbol"
        },
        359035: (e, t, s) => {
            s.d(t, {
                unpackNonSeriesData: () => o
            });
            var i = s(130551),
                r = s(650151);

            function n(e) {
                if (!(0, i.isObject)(e)) throw new Error("Graphics commands should be wrapped in an object");
                if ((0, i.hasProperty)(e, "create"), (0, i.hasProperty)(e, "erase")) {
                    const t = e.erase;
                    (0, r.assert)(Array.isArray(t), "Collection of erase commands should be array");
                    for (const e of t) {
                        if (!(0, i.isObject)(e) || !(0, i.hasProperty)(e, "action")) throw new Error("Command should be an object with 'action' property");
                        (0, r.assert)("all" === e.action || "one" === e.action, "Erase command action should be 'all' or 'one'")
                    }
                }
                return e
            }
            async function a(e) {
                {
                    const [{
                        inflateZlib: t,
                        inflateRaw: i
                    }, {
                        unpackImpl: r
                    }] = await Promise.all(["function" == typeof DecompressionStream ? s.e(95465).then(s.bind(s, 552243)) : Promise.all([s.e(84069), s.e(82170)]).then(s.bind(s, 392592)), s.e(95465).then(s.bind(s, 321672))]);
                    return r(t, i, e)
                }
            }
            async function o(e) {
                if ("" === e) return null;
                const t = JSON.parse(e);
                if (!(0, i.isObject)(t) || "function" == typeof t) throw new Error("Non-object content in the non-series envelope");
                if ((0, i.hasProperty)(t, "indexes_replace")) return {
                    indexes_replace: !0
                };
                const s = {
                    indexes_replace: !1
                };
                if ((0, i.hasProperty)(t, "offsets") && (s.offsets = t.offsets), (0, i.hasProperty)(t, "isUpdate")) {
                    if ("boolean" != typeof t.isUpdate) throw new Error('Invalid type of "isUpdate" field');
                    s.isUpdate = t.isUpdate
                }
                return (0, i.hasProperty)(t, "data") && (s.data = t.data), (0, i.hasProperty)(t, "graphicsCmds") && (s.graphicsCmds = n(t.graphicsCmds)), (0, i.hasProperty)(t, "dataCompressed") && (s.data = await a(t.dataCompressed)), (0, i.hasProperty)(t, "graphicsCmdsCompressed") && (s.graphicsCmds = n(await a(t.graphicsCmdsCompressed))), s
            }
        },
        132565: (e, t, s) => {
            s.d(t, {
                PlotList: () => u
            });
            var i = s(650151),
                r = s(660439),
                n = s(707771),
                a = s(735566),
                o = s(584785);
            const l = (0, a.getLogger)("Chart.PlotList"),
                h = 30;

            function d(e) {
                return e.index
            }

            function c(e) {
                return e.value[0]
            }
            class u {
                constructor(e = null, t = null) {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this._plotFunctions = e || new Map, this._emptyValuePredicate = t
                }
                clear() {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache.clear(), this._invalidateSearchCaches()
                }
                first() {
                    return this.size() > 0 ? this._items[this._start] : null
                }
                last() {
                    return this.size() > 0 ? this._items[this._end - 1] : null
                }
                firstIndex() {
                    return this.size() > 0 ? this._indexAt(this._start) : null
                }
                lastIndex() {
                    return this.size() > 0 ? this._indexAt(this._end - 1) : null
                }
                clone() {
                    const e = this.firstIndex(),
                        t = this.lastIndex();
                    return null === e || null === t ? new u : this.range(e, t)
                }
                size() {
                    return this._end - this._start
                }
                isEmpty() {
                    return 0 === this.size()
                }
                contains(e) {
                    return null !== this.search(e, o.PlotRowSearchMode.Exact)
                }
                valueAt(e) {
                    const t = this.search(e);
                    return null !== t ? t.value : null
                }
                add(e, t) {
                    if (this._shareRead) return l.logDebug("add: readonly collection modification attempt"), !1;
                    const s = {
                            index: e,
                            value: t
                        },
                        i = this._nonCachedSearch(e, o.PlotRowSearchMode.Exact, d);
                    return this._invalidateSearchCaches(), null === i ? (this._items.splice(this._lowerbound(e, d), 0, s), this._start = 0, this._end = this._items.length, !0) : (this._items[i] = s, !1)
                }
                search(e, t = o.PlotRowSearchMode.Exact, s) {
                    return this._searchImpl(e, t, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, d, s)
                }
                searchByTime(e, t = o.PlotRowSearchMode.Exact, s) {
                    return this._searchImpl(e, t, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, c, s)
                }
                fold(e, t) {
                    let s = t;
                    for (let t = this._start; t < this._end; ++t) {
                        s = e(this._indexAt(t), this._valueAt(t), s)
                    }
                    return s
                }
                findFirst(e, t) {
                    const s = void 0 !== t && Math.min(this._start + t, this._end) || this._end;
                    for (let t = this._start; t < s; ++t) {
                        const s = this._indexAt(t),
                            i = this._valueAt(t);
                        if (e(s, i)) return {
                            index: s,
                            value: i
                        }
                    }
                    return null
                }
                findLast(e, t) {
                    const s = void 0 !== t && Math.max(this._end - t, this._start) || this._start;
                    for (let t = this._end - 1; t >= s; --t) {
                        const s = this._indexAt(t),
                            i = this._valueAt(t);
                        if (e(s, i)) return {
                            index: s,
                            value: i
                        }
                    }
                    return null
                }
                each(e) {
                    for (let t = this._start; t < this._end; ++t) {
                        if (e(this._indexAt(t), this._valueAt(t))) break
                    }
                }
                reduce(e, t) {
                    let s = t;
                    for (let t = this._start; t < this._end; ++t) {
                        s = e(s, this._indexAt(t), this._valueAt(t))
                    }
                    return s
                }
                range(e, t) {
                    const s = new u(this._plotFunctions, this._emptyValuePredicate);
                    return s._items = this._items, s._start = this._lowerbound(e, d), s._end = this._upperbound(t), s._shareRead = !0, s
                }
                plottableRange(e) {
                    const t = new u(this._plotFunctions, this._emptyValuePredicate);
                    return t._items = this._items, t._start = this._upperbound(n.UNPLOTTABLE_TIME_POINT_INDEX), t._end = this._end, t._shareRead = !0, !0 === e && t._start > this._start && (t._start -= 1), t
                }
                rangeCountback(e, t) {
                    if (null === this.firstIndex()) return new u;
                    const s = new u(this._plotFunctions, this._emptyValuePredicate);
                    return s._items = this._items, s._end = this._upperbound(e), s._start = Math.max(this._start, s._end - t), s._shareRead = !0, s
                }
                rangeIterator(e, t) {
                    const s = this._lowerbound(e, d),
                        i = this._upperbound(t);
                    return this._rangeIteratorImpl(s, i)
                }
                fullRangeIterator() {
                    return this._rangeIteratorImpl(this._start, this._end)
                }
                minMaxOnRangeCached(e, t, s) {
                    if (this.isEmpty()) return null;
                    let i = null;
                    for (const r of s) {
                        i = _(i, this._minMaxOnRangeCachedImpl(e - r.offset, t - r.offset, r.name))
                    }
                    return i
                }
                minMaxOnRange(e, t, s) {
                    if (this.isEmpty()) return null;
                    let i = null;
                    for (const r of s) {
                        i = _(i, this._minMaxOnRange(e - r.offset, t - r.offset, r.name))
                    }
                    return i
                }
                merge(e) {
                    return this._shareRead ? (l.logDebug("merge: readonly collection modification attempt"),
                        null) : 0 === e.length ? null : this.isEmpty() || e[e.length - 1].index < this._items[0].index ? this._prepend(e) : e[0].index > this._items[this._items.length - 1].index ? this._append(e) : 1 === e.length && e[0].index === this._items[this._items.length - 1].index ? (this._updateLast(e[0]), e[0]) : this._merge(e)
                }
                addTail(e, t = !1) {
                    if (0 === e.length) return;
                    let s = 0;
                    t && this._end - this._start > 0 && (s = 1, this._items[this._end - this._start - 1].value = e[0].value);
                    for (let t = s; t < e.length; ++t) {
                        const s = e[t],
                            i = this.lastIndex();
                        if (null === i) {
                            l.logError("Can't add tail to the empty plotlist");
                            break
                        }
                        this.add(i + 1, s.value)
                    }
                    this._invalidateSearchCaches()
                }
                move(e) {
                    if (this._shareRead) return void l.logDebug("move: readonly collection modification attempt");
                    if (0 === e.length) return;
                    const t = this._items.slice();
                    for (const s of e) {
                        const e = this._bsearch(s.old, d);
                        if (null !== e && void 0 !== t[e])
                            if (s.new === n.INVALID_TIME_POINT_INDEX) t[e] = void 0;
                            else {
                                t[e] = {
                                    index: s.new,
                                    value: t[e].value
                                };
                                const i = this._bsearch(s.new, d);
                                if (null !== i) {
                                    const e = t[i];
                                    void 0 !== e && e.index === s.new && (t[i] = void 0)
                                }
                            }
                    }
                    this._items = t.filter((e => void 0 !== e)).sort(((e, t) => e.index - t.index)), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
                }
                remove(e) {
                    if (this._shareRead) return l.logDebug("remove: readonly collection modification attempt"), null;
                    const t = this._nonCachedSearch(e, o.PlotRowSearchMode.NearestRight, d);
                    if (null === t) return null;
                    const s = this._items.splice(t);
                    return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), s.length > 0 ? s[0] : null
                }
                state() {
                    const e = this._items.slice(this._start, this._end);
                    return {
                        start: 0,
                        end: e.length,
                        data: e
                    }
                }
                restoreState(e) {
                    e ? (this._start = e.start, this._end = e.end, this._shareRead = !1, this._items = e.data, this._minMaxCache.clear(), this._invalidateSearchCaches()) : this.clear()
                }
                _indexAt(e) {
                    return this._items[e].index
                }
                _valueAt(e) {
                    return this._items[e].value
                }
                _length() {
                    return this._items.length
                }
                _searchImpl(e, t, s, i, r, n) {
                    const a = void 0 !== n ? s : i,
                        o = void 0 !== n ? 1e4 * (t + 1) + n : t;
                    let l = a.get(e);
                    if (void 0 !== l) {
                        const e = l.get(o);
                        if (void 0 !== e) return e
                    }
                    const h = this._nonCachedSearch(e, t, r, n);
                    if (null === h) return null;
                    const d = {
                        index: this._indexAt(h),
                        value: this._valueAt(h)
                    };
                    return void 0 === l && (l = new Map, a.set(e, l)), l.set(o, d), d
                }
                _nonCachedSearch(e, t, s, i) {
                    const r = this._lowerbound(e, s),
                        n = r === this._end || e !== s(this._items[r]);
                    if (n && t !== o.PlotRowSearchMode.Exact) switch (t) {
                        case o.PlotRowSearchMode.NearestLeft:
                            return this._searchNearestLeft(r, i);
                        case o.PlotRowSearchMode.NearestRight:
                            return this._searchNearestRight(r, i);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                    if (void 0 === i || n || t === o.PlotRowSearchMode.Exact) return n ? null : r;
                    switch (t) {
                        case o.PlotRowSearchMode.NearestLeft:
                            return this._nonEmptyNearestLeft(r, i);
                        case o.PlotRowSearchMode.NearestRight:
                            return this._nonEmptyNearestRight(r, i);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                }
                _nonEmptyNearestRight(e, t) {
                    const s = (0, i.ensure)(this._emptyValuePredicate),
                        r = (0, i.ensure)(t);
                    for (; e < this._end && s(this._valueAt(e), r);) e += 1;
                    return e === this._end ? null : e
                }
                _nonEmptyNearestLeft(e, t) {
                    const s = (0,
                            i.ensureNotNull)(this._emptyValuePredicate),
                        r = (0, i.ensure)(t);
                    for (; e >= this._start && s(this._valueAt(e), r);) e -= 1;
                    return e < this._start ? null : e
                }
                _searchNearestLeft(e, t) {
                    if (e === this._start) return null;
                    const s = e - 1,
                        i = s !== this._end ? s : null;
                    return void 0 !== t && null !== i ? this._nonEmptyNearestLeft(i, t) : i
                }
                _searchNearestRight(e, t) {
                    const s = e,
                        i = s !== this._end ? s : null;
                    return void 0 !== t && null !== i ? this._nonEmptyNearestRight(i, t) : i
                }
                _bsearch(e, t) {
                    const s = this._lowerbound(e, t);
                    return s !== this._end && e === t(this._items[s]) ? s : null
                }
                _lowerbound(e, t) {
                    return (0, r.lowerbound)(this._items, e, ((e, s) => t(e) < s), this._start, this._end)
                }
                _upperbound(e) {
                    return (0, r.upperbound)(this._items, e, ((e, t) => t.index > e), this._start, this._end)
                }
                _plotMinMax(e, t, s) {
                    let i = null;
                    const r = this._plotFunctions.get(s);
                    if (void 0 === r) throw new Error(`Plot "${s}" is not registered`);
                    for (let s = e; s < t; s++) {
                        const e = r(this._items[s].value);
                        null == e || Number.isNaN(e) || (null === i ? i = {
                            min: e,
                            max: e
                        } : (e < i.min && (i.min = e), e > i.max && (i.max = e)))
                    }
                    return i
                }
                _invalidateCacheForRow(e) {
                    const t = Math.floor(e.index / h);
                    this._minMaxCache.forEach((e => e.delete(t)))
                }
                _prepend(e) {
                    return (0, i.assert)(!this._shareRead, "collection should not be readonly"), (0, i.assert)(0 !== e.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = e.concat(this._items), this._start = 0, this._end = this._items.length, e[0]
                }
                _append(e) {
                    return (0, i.assert)(!this._shareRead, "collection should not be readonly"), (0, i.assert)(0 !== e.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = this._items.concat(e), this._start = 0, this._end = this._items.length, e[0]
                }
                _updateLast(e) {
                    (0, i.assert)(!this.isEmpty(), "plot list should not be empty");
                    const t = this._items[this._end - 1];
                    (0, i.assert)(t.index === e.index, "last row index should match new row index"), this._invalidateCacheForRow(e), this._invalidateSearchCaches(), this._items[this._end - 1] = e
                }
                _merge(e) {
                    return (0, i.assert)(0 !== e.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = function(e, t) {
                        const s = function(e, t) {
                                const s = e.length,
                                    i = t.length;
                                let r = s + i,
                                    n = 0,
                                    a = 0;
                                for (; n < s && a < i;) e[n].index < t[a].index ? n++ : e[n].index > t[a].index ? a++ : (n++, a++, r--);
                                return r
                            }(e, t),
                            i = new Array(s);
                        let r = 0,
                            n = 0;
                        const a = e.length,
                            o = t.length;
                        let l = 0;
                        for (; r < a && n < o;) e[r].index < t[n].index ? (i[l] = e[r], r++) : e[r].index > t[n].index ? (i[l] = t[n], n++) : (i[l] = t[n], r++, n++), l++;
                        for (; r < a;) i[l] = e[r], r++, l++;
                        for (; n < o;) i[l] = t[n], n++, l++;
                        return i
                    }(this._items, e), this._start = 0, this._end = this._items.length, e[0]
                }
                _minMaxOnRangeCachedImpl(e, t, s) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    const n = (0, i.ensureNotNull)(this.firstIndex()),
                        a = (0, i.ensureNotNull)(this.lastIndex()),
                        o = Math.max(e, n),
                        l = Math.min(t, a),
                        d = Math.ceil(o / h) * h,
                        c = Math.max(d, Math.floor(l / h) * h);
                    r = _(r, this._minMaxOnRange(o, Math.min(d, t, l), s));
                    let u = this._minMaxCache.get(s);
                    void 0 === u && (u = new Map, this._minMaxCache.set(s, u));
                    for (let e = Math.max(d + 1, o); e < c; e += h) {
                        const t = Math.floor(e / h);
                        let i = u.get(t);
                        if (void 0 === i) {
                            const e = t * h,
                                r = (t + 1) * h - 1;
                            i = this._minMaxOnRange(e, r, s), u.set(t, i)
                        }
                        r = _(r, i)
                    }
                    r = _(r, this._minMaxOnRange(c, l, s));
                    return r
                }
                _minMaxOnRange(e, t, s) {
                    return this._plotMinMax(this._lowerbound(e, d), this._upperbound(t), s)
                }
                _rangeIteratorImpl(e, t) {
                    let s = e - 1;
                    return {
                        [Symbol.iterator]() {
                            return this
                        },
                        next: () => (s += 1, s >= t ? {
                            done: !0,
                            value: void 0
                        } : {
                            done: !1,
                            value: this._items[s]
                        })
                    }
                }
                _invalidateSearchCaches() {
                    this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
                }
            }

            function _(e, t) {
                if (null === e) return t;
                if (null === t) return e;
                return {
                    min: Math.min(e.min, t.min),
                    max: Math.max(e.max, t.max)
                }
            }
        },
        781567: (e, t, s) => {
            s(905520)
        },
        421566: (e, t, s) => {
            s(650151), s(547465)
        },
        690370: (e, t, s) => {
            var i;
            ! function(e) {
                e.STRING = "string", e.NUMBER = "number", e.BOOLEAN = "boolean", e.OBJECT = "object", e.ARRAY = "array", e.UNKNOWN = "unknown"
            }(i || (i = {}))
        },
        506649: (e, t, s) => {
            s(781567)
        },
        288789: (e, t, s) => {
            s(900210), s(582441), s(720727), s(781567);
            s(506649)
        },
        900210: (e, t, s) => {
            s(820028)
        },
        582441: (e, t, s) => {
            s(820028)
        },
        720727: (e, t, s) => {
            s(900210)
        },
        905520: (e, t, s) => {
            s(650151);
            var i = s(735566);
            s(421566), s(690370);
            (0, i.getLogger)("Property")
        },
        326488: (e, t, s) => {
            s.d(t, {
                SeriesData: () => c
            });
            var i, r = s(650151),
                n = s(132565),
                a = s(20019);
            ! function(e) {
                e[e.FromLeft = -1] = "FromLeft", e[e.FromRight = 1] = "FromRight"
            }(i || (i = {}));
            const o = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
                l = {
                    open: e => e[1],
                    high: e => e[2],
                    low: e => e[3],
                    close: e => e[4],
                    hl2: e => (e[2] + e[3]) / 2,
                    hlc3: e => (e[2] + e[3] + e[4]) / 3,
                    ohlc4: e => (e[1] + e[2] + e[3] + e[4]) / 4
                };

            function h() {
                const e = new Map;
                return o.forEach(((t, s) => {
                    e.set(t, function(e, t, s) {
                        const i = l[t ? ? e],
                            r = l[e],
                            n = l[s ? ? e];
                        return (e, t) => {
                            switch (t) {
                                case 0:
                                    return i(e);
                                case 2:
                                    return n(e);
                                default:
                                    return r(e)
                            }
                        }
                    }(t))
                })), e
            }

            function d(e, t) {
                return null == e[t]
            }
            class c {
                constructor() {
                    this.m_bars = new n.PlotList(h(), d), this.m_nsBars = new n.PlotList(h(), d), this._conflatedChunksBuilder = new a.ConflatedChunksBuilder(this.m_bars, (e => l[e]))
                }
                bars() {
                    return this.m_bars
                }
                nsBars() {
                    return this.m_nsBars
                }
                conflatedChunks(e, t) {
                    return this._conflatedChunksBuilder.conflatedChunks(e, t)
                }
                mergeRegularBars(e) {
                    return this._conflatedChunksBuilder.mergeData(e)
                }
                size() {
                    return this.m_bars.size() + this.m_nsBars.size()
                }
                each(e) {
                    this.m_bars.each(e), this.m_nsBars.each(e)
                }
                clear() {
                    this.m_nsBars.clear(), this.lastProjectionPrice = void 0, this._conflatedChunksBuilder.clearData()
                }
                clone() {
                    const e = new c;
                    return e.lastProjectionPrice = this.lastProjectionPrice, e.boxSize = this.boxSize, e.reversalAmount = this.reversalAmount, e.m_bars = this.m_bars.clone(), e.m_nsBars = this.m_bars.clone(), e
                }
                isEmpty() {
                    return this.m_bars.isEmpty() && this.m_nsBars.isEmpty()
                }
                first() {
                    return this.m_bars.isEmpty() ? this.m_nsBars.first() : this.m_bars.first()
                }
                last() {
                    return this.m_nsBars.isEmpty() ? this.m_bars.last() : this.m_nsBars.last()
                }
                search(e, t, s) {
                    return this.nsBars().isEmpty() ? this.bars().search(e, t, s) : this.bars().isEmpty() || (0, r.ensureNotNull)(this.nsBars().firstIndex()) <= e ? this.nsBars().search(e, t, s) : this.bars().search(e, t, s)
                }
                valueAt(e) {
                    const t = this.search(e);
                    return null !== t ? t.value : null
                }
                plotValueToTimePointIndex(e, t, s) {
                    if (s === i.FromRight) {
                        const s = (s, i) => {
                                const r = i[t];
                                return null != r && e >= r
                            },
                            i = this.m_bars.findLast(s);
                        if (null !== i) return i.index;
                        const r = this.m_nsBars.findLast(s);
                        return null !== r ? r.index : this.m_bars.firstIndex()
                    }
                    if (s === i.FromLeft) {
                        const s = (s, i) => {
                                const r = i[t];
                                return null != r && e <= r
                            },
                            i = this.m_bars.findFirst(s);
                        if (null !== i) return i.index;
                        const r = this.m_nsBars.findFirst(s);
                        return null !== r ? r.index : this.m_bars.lastIndex()
                    }
                    throw new Error("plotValueToTimePointIndex: unsupported search mode")
                }
                moveData(e) {
                    this._conflatedChunksBuilder.moveData(e), this.m_nsBars.move(e)
                }
            }
        },
        388741: (e, t, s) => {
            s.d(t, {
                createSeriesFormatter: () => c,
                extractSymbolNameFromSymbolInfo: () => u
            });
            s(444372), s(62802), s(638456), s(870855), s(477786);
            var i = s(89831),
                r = s(931924),
                n = s(51196),
                a = s(722652);
            s(68777), s(288789);
            const o = r.enabled("pay_attention_to_ticker_not_symbol"),
                l = r.enabled("uppercase_instrument_names"),
                h = r.enabled("charting_library_single_symbol_request"),
                d = r.enabled("use_ticker_on_symbol_info_update");
            r.enabled("hide_object_tree_and_price_scale_exchange_label");

            function c(e, t, s = !1) {
                const {
                    priceScale: r,
                    minMove: o,
                    fractional: l,
                    minMove2: h,
                    variableMinTick: d
                } = function(e, t = "default", s = !1) {
                    let i, r, n, a = 100,
                        o = 1;
                    if ("default" === t) null != e && (({
                        pricescale: a,
                        minmov: o,
                        minmove2: r,
                        fractional: i
                    } = e), n = e.variable_tick_size || void 0);
                    else {
                        let e = t.split(",");
                        3 !== e.length && (e = ["100", "1", "false"]), a = parseInt(e[0]), o = parseInt(e[1]), i = "true" === e[2]
                    }
                    return s && (o = 1), {
                        priceScale: a,
                        minMove: o,
                        fractional: i,
                        minMove2: r,
                        variableMinTick: n,
                        ignoreMinMove: s
                    }
                }(e, t, s);
                if (null != e) {
                    const i = e.format;
                    if ("default" === t && "volume" === i) return new n.VolumeFormatter({
                        precision: 2
                    });
                    if ("percent" === i) return new a.PercentageFormatter({
                        priceScale: r,
                        minMove: o,
                        fractional: l,
                        minMove2: h,
                        variableMinTick: d,
                        ignoreMinMove: s
                    })
                }
                return new i.PriceFormatter({
                    priceScale: r,
                    minMove: o,
                    fractional: l,
                    minMove2: h,
                    variableMinTick: d,
                    ignoreMinMove: s
                })
            }

            function u(e, t, s, i) {
                let r = e && (s && e.pro_name || e.full_name || e.name);
                return h && t ? r = t : (d || !i && o) && e && e.ticker && (r = e.ticker), l && r && (r = r.toUpperCase()), r
            }
        },
        535422: (e, t, s) => {
            s.d(t, {
                SeriesDataSource: () => I
            });
            var i = s(650151),
                r = s(536794),
                n = s(955722),
                a = s(477786),
                o = s(326488),
                l = s(359035),
                h = s(847774),
                d = s(547465);
            class c {
                constructor() {
                    this._created = new d.Delegate, this._modified = new d.Delegate, this._loading = new d.Delegate, this._completed = new d.Delegate, this._error = new d.Delegate, this._symbolError = new d.Delegate, this._symbolResolved = new d.Delegate, this._seriesError = new d.Delegate, this._symbolNotPermitted = new d.Delegate, this._symbolInvalid = new d.Delegate, this._symbolGroupNotPermitted = new d.Delegate, this._chartTypeNotPermitted = new d.Delegate, this._intradaySpreadNotPermitted = new d.Delegate, this._intradayExchangeNotPermitted = new d.Delegate, this._customIntervalNotPermitted = new d.Delegate, this._secondsIntervalNotPermitted = new d.Delegate, this._ticksIntervalNotPermitted = new d.Delegate, this._barReceived = new d.Delegate, this._seriesTimeFrame = new d.Delegate, this._dataUpdated = new d.Delegate, this._unsupportedResolutionRequested = new d.Delegate
                }
                destroy() {
                    this._created.destroy(), this._modified.destroy(), this._loading.destroy(), this._completed.destroy(), this._error.destroy(),
                        this._symbolError.destroy(), this._symbolResolved.destroy(), this._seriesError.destroy(), this._symbolInvalid.destroy(), this._symbolNotPermitted.destroy(), this._symbolGroupNotPermitted.destroy(), this._chartTypeNotPermitted.destroy(), this._intradaySpreadNotPermitted.destroy(), this._intradayExchangeNotPermitted.destroy(), this._customIntervalNotPermitted.destroy(), this._secondsIntervalNotPermitted.destroy(), this._ticksIntervalNotPermitted.destroy(), this._barReceived.destroy(), this._seriesTimeFrame.destroy(), this._dataUpdated.destroy(), this._unsupportedResolutionRequested.destroy()
                }
                created() {
                    return this._created
                }
                modified() {
                    return this._modified
                }
                loading() {
                    return this._loading
                }
                completed() {
                    return this._completed
                }
                error() {
                    return this._error
                }
                symbolError() {
                    return this._symbolError
                }
                symbolResolved() {
                    return this._symbolResolved
                }
                seriesError() {
                    return this._seriesError
                }
                symbolInvalid() {
                    return this._symbolInvalid
                }
                symbolNotPermitted() {
                    return this._symbolNotPermitted
                }
                symbolGroupNotPermitted() {
                    return this._symbolGroupNotPermitted
                }
                chartTypeNotPermitted() {
                    return this._chartTypeNotPermitted
                }
                intradaySpreadNotPermitted() {
                    return this._intradaySpreadNotPermitted
                }
                intradayExchangeNotPermitted() {
                    return this._intradayExchangeNotPermitted
                }
                customIntervalNotPermitted() {
                    return this._customIntervalNotPermitted
                }
                secondsIntervalNotPermitted() {
                    return this._secondsIntervalNotPermitted
                }
                ticksIntervalNotPermitted() {
                    return this._ticksIntervalNotPermitted
                }
                barReceived() {
                    return this._barReceived
                }
                seriesTimeFrame() {
                    return this._seriesTimeFrame
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                unsupportedResolutionRequested() {
                    return this._unsupportedResolutionRequested
                }
                fireCompleted(e) {
                    this._completed.fire(e)
                }
                fireCreated(e) {
                    this._created.fire(e)
                }
                fireModified() {
                    this._modified.fire()
                }
                fireLoading(e) {
                    this._loading.fire(e)
                }
                fireError() {
                    this._error.fire()
                }
                fireSymbolError(e) {
                    this._symbolError.fire(e), this.fireError()
                }
                fireSymbolResolved(e) {
                    this._symbolResolved.fire(e)
                }
                fireSeriesError(e) {
                    this._seriesError.fire(e), this.fireError()
                }
                fireSymbolInvalid() {
                    this._symbolInvalid.fire()
                }
                fireSymbolNotPermitted(e) {
                    this._symbolNotPermitted.fire(e)
                }
                fireSymbolGroupNotPermitted(e) {
                    this._symbolGroupNotPermitted.fire(e)
                }
                fireChartTypeNotPermitted(e) {
                    this._chartTypeNotPermitted.fire(e), this.fireError()
                }
                fireIntradaySpreadNotPermitted() {
                    this._intradaySpreadNotPermitted.fire(), this.fireError()
                }
                fireIntradayExchangeNotPermitted() {
                    this._intradayExchangeNotPermitted.fire(), this.fireError()
                }
                fireCustomIntervalNotPermitted(e) {
                    this._customIntervalNotPermitted.fire(e), this.fireError()
                }
                fireSecondsIntervalNotPermitted() {
                    this._secondsIntervalNotPermitted.fire(), this.fireError()
                }
                fireTicksIntervalNotPermitted() {
                    this._ticksIntervalNotPermitted.fire(), this.fireError()
                }
                fireBarReceived(e) {
                    this._barReceived.fire(e)
                }
                fireSeriesTimeFrame(e, t, s, i, r) {
                    this._seriesTimeFrame.fire(e, t, s, i, r)
                }
                fireDataUpdated(e, t, s, i, r) {
                    this._dataUpdated.fire(e, t, s, i, r)
                }
                fireUnsupportedResolutionRequested() {
                    this._unsupportedResolutionRequested.fire()
                }
            }
            var u = s(735566),
                _ = s(388741),
                m = s(641208);
            const p = (0, u.getLogger)("Chart.SeriesDataSource");
            var f;
            ! function(e) {
                e[e.Idle = 0] = "Idle", e[e.AwaitingConnection = 1] = "AwaitingConnection", e[e.AwaitingFirstDataUpdate = 2] = "AwaitingFirstDataUpdate", e[e.Active = 3] = "Active"
            }(f || (f = {}));
            let g = 1;
            let y = 1;

            function b(e) {
                return e.startDate ? e.endDate || e.count ? e.endDate ? ["from_to", e.startDate, e.endDate] : ["bar_count", e.startDate, (0, i.ensure)(e.count)] : ["from_to", e.startDate] : e.count || 300
            }

            function v(e) {
                return (0, r.isString)(e.symbol) ? e.symbol : e.symbol.symbol
            }

            function S(e, t) {
                (0, r.isString)(e.symbol) ? e.symbol = t: e.symbol.symbol = t
            }
            class I {
                constructor(e, t, s, i) {
                    this._extSymbol = null, this._lastResolvedSymbol = "", this._createSeriesOverriddenParams = 0, this._instanceId = null, this._symbolInstanceId = null, this._resolution = null, this._timeFrame = null, this._data = new o.SeriesData, this._dataEvents = new c, this._status = f.Idle, this._turnaroundCounter = 1, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this._ongoingDataUpdate = Promise.resolve(), this._gateway = e, this._turnaroundPrefix = t, this._createSeriesParams = b(s ? ? {
                        count: 300
                    }), this._timeFrame = i || null, this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged)
                }
                destroy() {
                    this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged), this._dataEvents.destroy()
                }
                modifySeries(e, t, s = null, n = !1, o = null) {
                    n && (p.logNormal("Due to force flag clearing symbol & resolution to force re-requesting data."), this._extSymbol = null, this._resolution = null);
                    const l = v(e),
                        h = !this.symbolSameAsResolved(l);
                    if (h && (this._lastResolvedSymbol = ""), this._extSymbol && !h) {
                        S(e, v(this._extSymbol))
                    }
                    const d = this._extSymbol,
                        c = this._resolution;
                    if (this._extSymbol = e, this._resolution = t, null === this._instanceId) return void(this._timeFrame = s);
                    const u = !(0, r.deepEquals)(d, e)[0];
                    u && S(this._extSymbol, l);
                    const _ = null === c || !a.Interval.isEqual(c, t);
                    (u || _ || null !== s) && (this._timeFrame = null, (u || _) && this._turnaroundCounter++, u && this._resolveSymbol(), this._gateway.modifySeries(this._instanceId, this.turnaround(), (0, i.ensureNotNull)(this._symbolInstanceId), this._resolution, o, s, this._onMessage.bind(this)), this._dataEvents.fireModified())
                }
                requestMoreData(e) {
                    null !== this._instanceId && this._gateway.requestMoreData(this._instanceId, e, this._onMessage.bind(this))
                }
                requestMoreTickmarks(e) {
                    null !== this._instanceId && this._gateway.requestMoreTickmarks(this._instanceId, e, this._onMessage.bind(this))
                }
                setFutureTickmarksMode(e) {
                    null !== this._instanceId && this._gateway.setFutureTickmarksMode(e)
                }
                isStarted() {
                    return this._status !== f.Idle
                }
                isActive() {
                    return this._status === f.Active
                }
                resolution() {
                    return this._resolution
                }
                start() {
                    this.isStarted() ? p.logNormal("start: data source is already started, nothing to do") : ((0, i.assert)(null !== this._extSymbol, "symbol must be set before start"), (0, i.assert)(null !== this._resolution, "resolution must be set before start"), this._gateway.isConnected().value() ? this._createSeries() : this._changeStatusTo(f.AwaitingConnection))
                }
                stop() {
                    this.isStarted() ? (null !== this._instanceId && (this._gateway.removeSeries(this._instanceId), this._instanceId = null), this._symbolInstanceId = null,
                        this._changeStatusTo(f.Idle)) : p.logNormal("stop: data source is already stopped, nothing to do")
                }
                instanceId() {
                    return this._instanceId
                }
                data() {
                    return this._data
                }
                setData(e) {
                    this._data = e
                }
                clearData() {
                    this.isStarted() ? this._enqueueUpdate((() => this._clearDataImpl())) : this._clearDataImpl()
                }
                dataEvents() {
                    return this._dataEvents
                }
                turnaround() {
                    return `${this._turnaroundPrefix}${this._turnaroundCounter}`
                }
                symbolInstanceId() {
                    return this._symbolInstanceId
                }
                symbol() {
                    return this._extSymbol
                }
                moveData(e) {
                    this._enqueueUpdate((() => this._data.moveData(e)))
                }
                setInitialRequestOptions(e) {
                    this._createSeriesOverriddenParams = b(e)
                }
                symbolSameAsResolved(e) {
                    return null !== this._extSymbol && (0, m.symbolSameAsResolved)(e, v(this._extSymbol), this._lastResolvedSymbol)
                }
                resolvedSymbol() {
                    return null === this._extSymbol ? null : v(this._extSymbol)
                }
                _resolveSymbol() {
                    null !== this._extSymbol && (this._symbolInstanceId = this._gateway.resolveSymbol("sds_sym_" + g++, (0, n.encodeExtendedSymbolOrGetSimpleSymbolString)(this._extSymbol), this._onMessage.bind(this)))
                }
                _clearDataImpl() {
                    this._data.clear()
                }
                _changeStatusTo(e) {
                    (0, i.assert)(this._status !== e, "Source and destination status should be distinct"), p.logNormal(`Status changed from ${f[this._status]} to ${f[e]}`), this._status = e
                }
                _createSeries() {
                    (0, i.assert)(this._status !== f.Active, 'Status should not be "Active" when creating a study'), this._instanceId = "sds_" + y++, this._resolveSymbol();
                    const e = this._createSeriesOverriddenParams || this._createSeriesParams;
                    this._createSeriesOverriddenParams && (this._createSeriesOverriddenParams = 0), this._gateway.createSeries(this._instanceId, this.turnaround(), (0, i.ensureNotNull)(this._symbolInstanceId), (0, i.ensureNotNull)(this._resolution), e, this._timeFrame, this._onMessage.bind(this)), this._timeFrame = null, this._changeStatusTo(f.AwaitingFirstDataUpdate), this._dataEvents.fireCreated(this._instanceId)
                }
                _onGatewayIsConnectedChanged(e) {
                    e ? this._onGatewayConnected() : this._onGatewayDisconnected()
                }
                _onGatewayConnected() {
                    this._status === f.AwaitingConnection && this._createSeries()
                }
                _onGatewayDisconnected() {
                    this._status !== f.Idle && this._status !== f.AwaitingConnection && (this._instanceId = null, this._changeStatusTo(f.AwaitingConnection)), this._turnaroundCounter = 1
                }
                _onMessage(e) {
                    this._enqueueUpdate((() => this._onMessageImpl(e)))
                }
                async _onMessageImpl(e) {
                    switch (e.method) {
                        case "symbol_resolved":
                            {
                                const [t, s] = e.params;
                                if (t !== this._symbolInstanceId) {
                                    null !== this._symbolInstanceId && p.logNormal(`Resolve for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
                                    break
                                }
                                this._onSymbolResolved(s);
                                break
                            }
                        case "symbol_error":
                            if (e.params[0] !== this._symbolInstanceId) {
                                null !== this._symbolInstanceId && p.logNormal(`Symbol error for old symbol, expected: ${this._symbolInstanceId}, actual ${e.params[0]}`);
                                break
                            }
                            this._onSymbolError(e);
                            break;
                        case "series_timeframe":
                            {
                                const [t, s, i, r, n, a, o] = e.params;
                                if (!this._checkTurnaround(t, s)) {
                                    p.logNormal(`Time frame for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${s})`);
                                    break
                                }
                                this._onSeriesTimeFrame(i, r, n, a, o);
                                break
                            }
                        case "series_error":
                            {
                                const [t, s] = e.params;
                                if (!this._checkTurnaround(t, s)) {
                                    p.logNormal(`Series error for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${s})`);
                                    break
                                }
                                this._onSeriesError(e.params[2]);
                                break
                            }
                        case "series_loading":
                            {
                                const [t, s] = e.params;
                                if (!this._checkTurnaround(t, s)) break;this._onSeriesLoading(e.time);
                                break
                            }
                        case "series_completed":
                            {
                                const [t, s, i, r] = e.params;
                                if (!this._checkTurnaround(t, i)) {
                                    p.logNormal(`Series completed for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t} (${i})`);
                                    break
                                }
                                this._onSeriesCompleted(s, e.time, r);
                                break
                            }
                        case "data_update":
                            if (!this._checkTurnaround(e.params.customId, e.params.turnaround)) {
                                p.logNormal(`Data update for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e.params.customId} (${e.params.turnaround})`);
                                break
                            }
                            await this._onDataUpdate(e.params.plots, e.params.nonseries, e.params.lastBar);
                            break;
                        case "clear_data":
                            {
                                if (e.params.turnaround !== this.turnaround()) {
                                    p.logNormal(`Clear data for old data, expected: ${this.turnaround()}, actual ${e.params.turnaround}`);
                                    break
                                }
                                const t = this._data.first();this._clearDataImpl(),
                                this._dataEvents.fireDataUpdated(void 0, !1, null, !1, t);
                                break
                            }
                    }
                }
                _onSeriesError(e) {
                    let t, s;
                    if ("string" == typeof e) s = {
                        error: e
                    }, t = e;
                    else if (s = e, e.ctx) {
                        const s = {};
                        Object.entries(e.ctx).forEach((([e, t]) => {
                            s[e] = t.toString()
                        })), t = e.error.format(s)
                    } else t = e.error;
                    if (t.startsWith("study_not_auth:")) {
                        const e = t.split(":", 2)[1].split("@", 2)[0];
                        if (["BarSetRenko", "BarSetPriceBreak", "BarSetKagi", "BarSetPnF"].includes(e)) this._dataEvents.fireChartTypeNotPermitted(e);
                        else {
                            if ("BarSetSpread" === e) return void this._dataEvents.fireIntradaySpreadNotPermitted();
                            if ("BarSetRange" === e) {
                                const e = `${(0,i.ensureNotNull)(this._extSymbol).inputs.range}R`;
                                this._dataEvents.fireCustomIntervalNotPermitted(e)
                            }
                        }
                    } else {
                        if (t.startsWith("unsupported")) return void this._dataEvents.fireUnsupportedResolutionRequested();
                        "resolution_not_entitled" === t ? this._dataEvents.fireIntradayExchangeNotPermitted() : "custom_resolution" === t ? this._dataEvents.fireCustomIntervalNotPermitted((0, i.ensureNotNull)(this._resolution)) : "seconds_not_entitled" === t ? this._dataEvents.fireSecondsIntervalNotPermitted() : "ticks_not_entitled" === t && this._dataEvents.fireTicksIntervalNotPermitted()
                    }
                    this._dataEvents.fireSeriesError(s)
                }
                _onSeriesTimeFrame(e, t, s, i, r) {
                    this._dataEvents.fireSeriesTimeFrame(e, t, s, i ? ? !0, r)
                }
                _onSymbolError(e) {
                    if (e.params[1] === h.permissionDenied) switch (e.params[2]) {
                        case h.SymbolErrorPermissionDeniedReason.Symbol:
                            this._dataEvents.fireSymbolNotPermitted(e.params[3]);
                            break;
                        case h.SymbolErrorPermissionDeniedReason.GroupPermission:
                            this._dataEvents.fireSymbolGroupNotPermitted(e.params[3]);
                            break;
                        default:
                            this._dataEvents.fireSymbolNotPermitted(e.params[2])
                    } else e.params[1] === h.invalidSymbol && this._dataEvents.fireSymbolInvalid();
                    this._dataEvents.fireSymbolError(e.params[1])
                }
                _onSymbolResolved(e) {
                    this._lastResolvedSymbol = (0, i.ensureNotNull)((0, _.extractSymbolNameFromSymbolInfo)(e, "")), this._dataEvents.fireSymbolResolved(e)
                }
                async _onDataUpdate(e, t, s) {
                    this._onDataUnpacked(e, s, await async function(e) {
                        if (void 0 === e) return {
                            projectionPlots: [],
                            boxSize: null
                        };
                        if ("" === e.d || "nochange" === e.indexes) return null;
                        const t = await (0, l.unpackNonSeriesData)(e.d);
                        if (null === t || t.indexes_replace) return null;
                        const s = e.indexes,
                            {
                                bars: i,
                                price: r,
                                boxSize: n,
                                reversalAmount: a
                            } = t.data,
                            o = (i || []).map((e => {
                                let t;
                                return "factor" in e ? t = e.factor : "additionalPrice" in e && (t = e.additionalPrice), {
                                    index: s[e.time],
                                    value: [0, e.open, e.high, e.low, e.close, e.volume, t]
                                }
                            }));
                        return {
                            lastPrice: r,
                            projectionPlots: o,
                            reversalAmount: a,
                            boxSize: n
                        }
                    }(t))
                }
                _enqueueUpdate(e) {
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then(e, e), this._ongoingDataUpdate
                }
                _onDataUnpacked(e, t, s) {
                    if (this._status === f.Idle) return;
                    this._status === f.AwaitingFirstDataUpdate && (this._changeStatusTo(f.Active), this._clearDataImpl());
                    const i = this._data.bars().size(),
                        r = this._data.first(),
                        n = this._data.bars().firstIndex(),
                        a = this._data.mergeRegularBars(e);
                    null !== s && (this._data.nsBars().clear(), this._data.nsBars().merge(s.projectionPlots), this._data.lastProjectionPrice = s.lastPrice, null !== s.boxSize && (this._data.boxSize = s.boxSize), this._data.reversalAmount = s.reversalAmount);
                    const o = null === n,
                        l = o || null !== a && a.index < n;
                    this._dataEvents.fireDataUpdated(t, l, a, o, r), i !== this._data.bars().size() && null !== a && this._dataEvents.fireBarReceived(a)
                }
                _onSeriesLoading(e) {
                    this._dataEvents.fireLoading(e)
                }
                _onSeriesCompleted(e, t, s) {
                    this._dataEvents.fireCompleted({
                        updateMode: e,
                        time: t,
                        flags: s
                    })
                }
                _checkTurnaround(e, t) {
                    return this._instanceId === e && (void 0 === t || t === this.turnaround())
                }
            }
        },
        641208: (e, t, s) => {
            function i(e, t, s) {
                return e === t || e === s
            }
            s.d(t, {
                symbolSameAsResolved: () => i
            })
        },
        707771: (e, t, s) => {
            s.d(t, {
                INVALID_TIME_POINT_INDEX: () => i,
                UNPLOTTABLE_TIME_POINT_INDEX: () => r
            });
            const i = -2e6,
                r = -1e6
        },
        482030: (e, t, s) => {
            function i(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            s.d(t, {
                regExpEscape: () => i
            })
        }
    }
]);