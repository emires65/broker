"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [42824], {
        173777: (e, t, n) => {
            n.d(t, {
                SEPARATOR_PREFIX: () => s
            });
            const s = "###"
        },
        778016: (e, t, n) => {
            n.d(t, {
                enabled: () => a,
                getConfig: () => c
            });
            n(650151);
            var s = n(729551),
                i = n(209044),
                o = n(638456),
                r = n(232759);

            function a(e, t, n) {
                let s = window.user;
                n && (s = n);
                const i = c(e, t, s);
                if (!i) return !1;
                if (i.disable_on_trial && (!s || s.is_trial)) return !1;
                const r = i.disable_on_lite_plan;
                if (r && s.is_lite_plan) {
                    if ("all" === r) return !1;
                    if ("exclude_mobile" === r && !o.CheckMobile.any()) return !1
                }
                return !0
            }

            function _(e) {
                const t = s[e];
                return t ? t.extends ? Object.assign({}, _(t.extends), t) : t : null
            }

            function c(e, t, n) {
                let s = _(t || (function(e) {
                    let t = window.user;
                    "undefined" != typeof window && window.user && (t = window.user), e && (t = e);
                    let n = t ? .pro_plan || "free";
                    return "free" !== n && !(0, r.isTrialProduct)(n) || (n = (0, r.getProductForTrial)(n)), n
                }(n) ? ? ""));
                if (!s) return null;
                const o = window.TradingView ? .widgetCustomer;
                return o && i[o] && (s = Object.assign({}, s, i[o])), s && s[e] || null
            }
        },
        849204: (e, t, n) => {
            n.d(t, {
                LogoSize: () => s,
                getLogoUrlResolver: () => _
            });
            var s, i = n(650151),
                o = n(588948);
            ! function(e) {
                e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large"
            }(s || (s = {}));
            class r {
                constructor(e) {
                    (0, i.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getSymbolLogoUrl(e, t) {
                    switch ((0, i.assert)("" !== e, "logo id must be a non-empty string"), t) {
                        case s.Medium:
                            return this._baseUrl + `${e}.svg`;
                        case s.Large:
                            return this._baseUrl + `${e}--big.svg`
                    }
                }
                collectSymbolLogoUrls(e, t) {
                    const {
                        logoId: n,
                        baseCurrencyLogoId: i,
                        currencyLogoId: o
                    } = e;
                    if (n) return [this.getSymbolLogoUrl(n, t)];
                    const r = [];
                    if (i && r.push(this.getSymbolLogoUrl(i, t)), o && r.push(this.getSymbolLogoUrl(o, s.Medium)), r.length < 2) return r;
                    const a = r.some((e => c(e))),
                        _ = r.every((e => !e.includes("country") || c(e)));
                    return a && _ ? r.filter((e => !c(e))) : r;

                    function c(e) {
                        return e.includes("country/US")
                    }
                }
                getCountryFlagUrl(e, t) {
                    return this.getSymbolLogoUrl("country/" + e, t)
                }
                getCryptoLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("crypto/" + e, t)
                }
                getProviderLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("provider/" + e, t)
                }
                getSourceLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("source/" + e, t)
                }
                getBlockchainContractLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("blockchain/" + e, t)
                }
            }
            let a;

            function _() {
                return function() {
                    if (!a) {
                        const e = (0, o.getInitData)(),
                            t = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                        a = new r(t)
                    }
                    return a
                }()
            }
        },
        519073: (e, t, n) => {
            function s(e) {
                return void 0 !== e && e.includes("crypto")
            }
            n.d(t, {
                hasCryptoTypespec: () => s
            })
        },
        175203: (e, t, n) => {
            n.d(t, {
                telemetry: () => l
            });
            var s = n(547465),
                i = n(803912),
                o = n(638456),
                r = n(314802);
            n(659863);
            const a = (0, n(735566).getLogger)("Common.Telemetry"),
                _ = {
                    default: 15e3,
                    site: 3e5
                },
                c = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const l = new class {
                constructor() {
                    this.reportSent = new s.Delegate, this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(e) {
                    const t = this._parseCluster(e);
                    null !== t && (this._commonAdditionalData.cluster = t)
                }
                sendReport(e, t, n) {
                    if (!this._isAbleToSendReport(t)) return;
                    const s = this._getSubserviceType(e),
                        i = this._getHost(e, s);
                    if (null !== i) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, t, i), !this._timeoutIds[e]) {
                            const t = _[e] ? ? _.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, i), t)
                        }
                    } else a.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${s}`)
                }
                sendChartReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("charts", e, t, n)
                }
                sendLineToolsStorageReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("line_tools_storage", e, t, n)
                }
                _sendServiceSpecifiedReport(e, t, n, s = !0) {
                    this._updateUserInfo(), n = void 0 === n ? {
                        count: 1
                    } : n, s && (n = this._appendCommonAdditionalInfo(n, ["cluster", "userId"])), this.sendReport(e, t, n)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        n = c.includes(e),
                        s = Boolean(window.TradingView ? .onChartPage || (0, o.onWidget)());
                    return t && (!n || s)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            n = this._renameAllParams(e),
                            s = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        a.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, i.fetch)(`${t}/report`, {
                            method: "POST",
                            body: JSON.stringify(s)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const n = window.TELEMETRY_HOSTS,
                        s = n[e] && n[e][t];
                    return Boolean(s) ? s : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const n = window.user.is_pro;
                    return "charts" === e && (0, r.isOnMobileAppPage)("old") ? t = n ? "ios_pro" : "ios_free" : "charts" === e && (0, r.isOnMobileAppPage)("new") ? t = n ? "android_pro" : "android_free" : (0, o.onWidget)() ? t = "widget" : n && (t = "pro"), t
                }
                _parseCluster(e) {
                    let t;
                    try {
                        t = JSON.parse(e).session_id
                    } catch (e) {
                        return a.logError("Could not parse cluster id (session id)"), null
                    }
                    const n = /(.*@)(.*)/gi.exec(t);
                    return null !== n && n.length >= 3 ? n[2] : null
                }
                _appendCommonAdditionalInfo(e, t) {
                    return t.forEach((t => {
                        t in this._commonAdditionalData && (e.additional = e.additional || {}, e.additional[t] = this._commonAdditionalData[t])
                    })), e
                }
                _cropParams(e) {
                    for (const t in e) e.hasOwnProperty(t) && e[t].length > 1e3 && (e.too_much_metrics_frame = e.too_much_metrics_frame ? ? [], e.too_much_metrics_frame.push({
                        value: e[t].length,
                        additional: {
                            event: t
                        }
                    }), delete e[t]);
                    return e
                }
                _renameAllParams(e) {
                    const t = {};
                    for (const n in e) e.hasOwnProperty(n) && (t[n] = [], e[n].forEach((e => {
                        t[n].push(this._renameEntryParams(e))
                    })));
                    return t
                }
                _renameEntryParams(e) {
                    const t = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(e).reduce(((n, s) => (n[t[s]] = e[s], n)), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const n in e)
                        if (e.hasOwnProperty(n)) {
                            t[n] = [];
                            const s = {
                                c: 0
                            };
                            e[n].forEach((e => {
                                const i = this._cleanEntryParams(e),
                                    o = Object.keys(i).length;
                                1 === o && void 0 !== i.c ? s.c += i.c : o > 0 && t[n].push(i)
                            })), s.c > 0 && t[n].push(s), 0 === t[n].length && delete t[n]
                        }
                    return t
                }
                _cleanEntryParams(e) {
                    const t = Object.keys(e).reduce(((t, n) => "c" !== n && "t" !== n || e[n] ? (t[n] = e[n], t) : t), {});
                    return "c" in t || "v" in t || "t" in t ? t : {}
                }
                _addReportToStash(e, t, n) {
                    n in this._reportStash || (this._reportStash[n] = {}), t in this._reportStash[n] || (this._reportStash[n][t] = []), Object.keys(e).length > 0 && this._reportStash[n][t].push(e)
                }
            }
        },
        779923: (e, t, n) => {
            async function s(e, t) {
                const s = await Promise.all([n.e(61560), n.e(18883), n.e(98185), n.e(46195), n.e(92537), n.e(15371), n.e(32937), n.e(61171), n.e(61681), n.e(67780), n.e(78894), n.e(66032), n.e(65743), n.e(79317), n.e(13672), n.e(30158), n.e(44213), n.e(30683), n.e(9323), n.e(60159), n.e(61144), n.e(99778), n.e(87473), n.e(29614), n.e(62526), n.e(50362), n.e(48661), n.e(38890)]).then(n.bind(n, 409128));
                return s.showSimpleDialog(e, s.warningModule, t)
            }
            n.d(t, {
                showWarning: () => s
            })
        },
        957259: (e, t, n) => {
            var s = n(154834),
                i = n(290484),
                o = n(569708),
                r = n(650151),
                a = n(735566),
                _ = n(37010),
                c = n(181929),
                l = n(931924),
                d = n(894645),
                u = n(13692),
                h = n(496499),
                m = n(803155),
                f = n(803912),
                p = n(659923),
                g = n(925049),
                y = n(107447),
                b = n(800828),
                v = n(778016),
                w = n(125226),
                S = n(849204),
                C = n(314802),
                q = n(175203),
                k = n(982367),
                R = n(820028),
                M = n(646244),
                T = n(241361),
                N = n(403526),
                D = n(903656);
            const x = (0, a.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
                    color: "#606"
                }),
                I = (0, a.getLogger)("ChartApi.TrafficMeter", {
                    maxCount: 20,
                    color: "#268"
                }),
                P = (0, a.getLogger)("ChartApi.Core", {
                    color: "#706"
                }),
                E = (0, a.getLogger)("ChartApi.ChartSession", {
                    color: "#706"
                }),
                L = (0, a.getLogger)("ChartApi.ChartSession", {
                    highRate: !0,
                    maxCount: 100,
                    color: "#706"
                }),
                O = (0, a.getLogger)("ChartApi.ChartSession", {
                    maxCount: 0,
                    color: "#706"
                }),
                H = (0, a.getLogger)("ChartApi.ChartSession", {
                    maxCount: 50,
                    color: "#706"
                }),
                A = (0, a.getLogger)("ChartApi.QuoteSession", {
                    maxCount: 50,
                    color: "#660"
                }),
                U = (0, a.getLogger)("ChartApi.QuoteSession", {
                    highRate: !0,
                    maxCount: 10,
                    color: "#660"
                }),
                B = !(0, C.isOnMobileAppPage)("any"),
                $ = (0, w.isFeatureEnabled)("broker_id_session");
            let F = !1,
                W = !1,
                Q = !1;
            const V = ["", "KB", "MB", "GB", "TB"];

            function j(e) {
                if (0 === e) return "0";
                const t = (0, k.toInt)(Math.floor(Math.log(e) / Math.log(1024)));
                return (e / Math.pow(1024, t)).toFixed(2) + V[t]
            }

            function G(e, t) {
                return `${e}__${t}`
            }

            function z(e, t, n) {
                const s = t[n] ? ? 0;
                t[n] = s + e
            }
            const J = z.bind(null, 1),
                Y = z.bind(null, -1),
                Z = l.enabled("widget") ? "studies_metadata_widget" : "studies_metadata",
                K = "/chart-api/pro_hash",
                X = l.enabled("widget") ? "/chart-api/studies_metadata_widget" : "/chart-api/studies_metadata";

            function ee(e) {
                if (null === e) return "";
                if ("period-back" === e.type) {
                    let t = e.value;
                    return "YTD" !== t && "D" === t.slice(-1) && (t = t.slice(0, -1)), t
                }
                return "r," + e.from + ":" + e.to
            }
            let te = null;

            function ne() {
                if (null === te) {
                    const e = document.querySelector('link[rel~="conversions-config"]'),
                        t = new URL((0, r.ensureNotNull)(e).href);
                    te = (0, f.fetch)(t.toString(), {
                        method: "GET"
                    }).then((e => {
                        if (!e.ok) throw new Error("Response status is not success");
                        return e.json()
                    })).then((e => {
                        const t = (0, S.getLogoUrlResolver)();
                        return e.currencies.forEach((e => {
                            void 0 !== e.logoid && (e.logoUrl = t.getSymbolLogoUrl(e.logoid, S.LogoSize.Medium))
                        })), e
                    }))
                }
                return te
            }
            class se {
                constructor(e) {
                    this.sessionid = null, this._banInfo = new R.WatchedValue(null),
                        this._isAuthTokenLoaded = !1, this._authTokenDfd = null, this._serverTimeBasePoint = Date.now() - performance.now(), this._initCachePromise = (0, b.createCache)("TVChartApi"), this._trafficStats = {
                            total: 0,
                            sinceConnect: 0,
                            lastChunk: 0
                        }, this._lowQualityEnabled = !1, this._brokerId = "", this._sendingQueuedRequestsCount = 0, this._modifyStudyMap = new Map, this._disconnectCount = 0, this._isConnected = !1, this._metadataDeferredPromise = null, this._dataHandleModule = new N.JSONDataHandler, this._sessions = {}, this._notificationHandlers = {}, this._pendingMessagesQueue = [], this._loadNewBars = !1, this._metadataRequestNextNumber = 1, this._fundamentalCounter = {}, this._studyCounter = {}, this._childStudyCounter = {}, this._studySpecs = new Map, this._connectionsLimitReached = new R.WatchedValue(!1), this._sentMethodsCounters = new Map, this._receivedMethodsCounters = new Map, this._requestDataProblemsPromise = null, this._wsBackendConnection = e, this._wsBackendConnection.onReconnect(this._bindSocketEvents.bind(this)), this._wsBackendConnection.setLogger(P, a.getLogHistory), this._wsBackendConnection.setTelemetry(q.telemetry), this._bindSocketEvents(), this._isNonCountedStudy = () => !0, setInterval((() => {
                            I.logNormal("Last 30 seconds:" + j(this._trafficStats.lastChunk) + " Since last connect:" + j(this._trafficStats.sinceConnect) + " Total traffic:" + j(this._trafficStats.total)), this._trafficStats.lastChunk = 0
                        }), 3e4), this._connectionsLimitReached.subscribe((e => {
                            e && this.disconnect()
                        }))
                }
                connect(e) {
                    this._connectOnlyOptions = e, this._wsBackendConnection.isConnected() || this._wsBackendConnection.isConnecting() || this._wsBackendConnection.connect()
                }
                disconnect() {
                    this._wsBackendConnection.disconnect()
                }
                sentMethodsCounters() {
                    return this._sentMethodsCounters
                }
                receivedMethodsCounters() {
                    return this._receivedMethodsCounters
                }
                defaultResolutions() {
                    return (0, d.getDefaultResolutions)()
                }
                availableCurrencies() {
                    return ne().then((e => e.currencies))
                }
                availableUnits() {
                    return ne().then((e => {
                        const t = {};
                        for (const n of e.units) t[n.type] || (t[n.type] = []), t[n.type].push(n);
                        return t
                    }))
                }
                availablePriceSources() {
                    return Promise.resolve([])
                }
                supportedSymbolsTypes() {
                    const e = window.TradingView ? .widgetCustomer ? ? "";
                    return "bovespa" === e ? m.filter((e => ["", "stock", "futures", "index"].includes(e.value))) : "cme" === e ? m.filter((e => e.value !== u.types.QUANDL)) : m
                }
                symbolsGrouping() {
                    return {
                        futures: /^(.+?)([12]!|\w\d{4})?$/
                    }
                }
                connected() {
                    return !!this._isConnected
                }
                authTokenManager() {
                    return (0, r.ensureDefined)(this._authTokenManager)
                }
                createSession(e, t) {
                    this._sessions[e] = t, this._notificationHandlers[e] = {}, this.connected() && this._isAuthTokenLoaded && t.onMessage({
                        method: c.ChartApiMessageMethod.Connected,
                        params: []
                    })
                }
                removeSession(e) {
                    delete this._sessions[e], delete this._notificationHandlers[e]
                }
                disconnectCount() {
                    return this._disconnectCount || 0
                }
                getPingInfo() {
                    return this._wsBackendConnection.getPingInfo()
                }
                connectionBanInfo() {
                    return this._banInfo.readonly()
                }
                connectionsLimitReached() {
                    return this._connectionsLimitReached.readonly()
                }
                serverTime() {
                    return Math.round(this._serverTimeBasePoint + performance.now())
                }
                compensateConnectionLag(e) {
                    const t = this.serverTime(),
                        n = Math.floor(e - t);
                    n > 0 && (this._serverTimeBasePoint += n)
                }
                setBroker(e) {
                    return e === this._brokerId || (this._brokerId = e, this._sendBrokerIdToSession(this._brokerId))
                }
                chartCreateSession(e, t) {
                    return this._sendRequest("chart_create_session", [e, t])
                }
                chartDeleteSession(e) {
                    return this._sendRequest("chart_delete_session", [e])
                }
                switchTimezone(e, t) {
                    return this._sendRequest("switch_timezone", [e, t])
                }
                resolveSymbol(e, t, n, s) {
                    return q.telemetry.timeCounters.series["resolve_symbol_" + e] = window.performance.now(), this._notificationHandlers[e][t] = new D.HandlerInfo(s, t, !0), this._sendRequest("resolve_symbol", [e, t, n])
                }
                requestFirstBarTime(e, t, n, s) {
                    return this._notificationHandlers[e][t] = new D.HandlerInfo(s, t, !0), this._sendRequest("get_first_bar_time", [e, t, n])
                }
                createSeries(e, t, n, s, i, o, r, a) {
                    q.telemetry.timeCounters.series.marks.push("create_series_" + e), this._notificationHandlers[e][t] = new D.HandlerInfo(a, t);
                    const _ = ee(r);
                    return this._sendRequest("create_series", [e, t, n, s, i, o, _])
                }
                removeSeries(e, t) {
                    return delete this._notificationHandlers[e][t], this._sendRequest("remove_series", [e, t])
                }
                modifySeries(e, t, n, s, i, o, r, a) {
                    this._notificationHandlers[e][t] = new D.HandlerInfo(a, t);
                    const _ = ee(r);
                    return this._sendRequest("modify_series", [e, t, n, s, i, _])
                }
                getStudyCounter(e) {
                    return this._studyCounter[e] ? ? 0
                }
                getFundamentalCounter(e) {
                    return this._fundamentalCounter[e] ? ? 0
                }
                requestMoreData(e, t, n, s) {
                    if (void 0 === n || void 0 === s) throw new Error("unsupported request to load more data, bars=" + n);
                    const i = t;
                    return this._notificationHandlers[e][i] = new D.HandlerInfo(s, i), this._sendRequest("request_more_data", [e, i, n])
                }
                requestMoreTickmarks(e, t, n, s) {
                    return s && (this._notificationHandlers[e][t] = new D.HandlerInfo(s, t)), this._sendRequest("request_more_tickmarks", [e, t, n])
                }
                setFutureTickmarksMode(e, t) {
                    this._sendRequest("set_future_tickmarks_mode", [e, t])
                }
                requestDataProblems() {
                    return this._requestDataProblemsPromise || (this._requestDataProblemsPromise = this.connectDfd.then((() => new Promise(((e, t) => {
                        this._onDataProblemsPromiseErrback = t, this._sendRequest("request_data_problems", []) ? this._onDataProblemsPromiseCb = e : t()
                    })))).finally((() => {
                        this._requestDataProblemsPromise = null
                    }))), this._requestDataProblemsPromise
                }
                async requestMetadata() {
                    return null === this._metadataDeferredPromise && (this._metadataDeferredPromise = (0, g.createDeferredPromise)(), this._metadataDeferredPromise.promise.finally((() => {
                        this._metadataDeferredPromise = null
                    })), this._requestMetadata()), this._metadataDeferredPromise.promise
                }
                allStudiesMetadata() {
                    throw new Error("This method is not implemented")
                }
                setLoadNew(e) {
                    this._loadNewBars = !!e
                }
                setIsNonCountedStudyFn(e) {
                    this._isNonCountedStudy = e
                }
                canCreateStudy(e, t, n) {
                    const {
                        id: s,
                        child: i,
                        fundamental: o
                    } = t, a = (0, r.ensureNotNull)((0, v.getConfig)("STUDY_ON_STUDY")).child_limit;
                    if (i && (!(0, v.enabled)("STUDY_ON_STUDY") || (this._childStudyCounter[e] ? ? 0) >= a)) return {
                        success: !1,
                        reason: "child",
                        limitValue: a
                    };
                    if (n) return {
                        success: !0
                    };
                    const _ = (0, r.ensureNotNull)((0, v.getConfig)("FUNDAMENTALS_ON_CHART")).limit;
                    if (o && (!(0, v.enabled)("FUNDAMENTALS_ON_CHART") || this.getFundamentalCounter(e) >= _)) return {
                        success: !1,
                        reason: "fundamental",
                        limitValue: _
                    };
                    const c = (0, r.ensureNotNull)((0, v.getConfig)("INDICATORS_ON_CHART")).limit;
                    return o || this._isNonCountedStudy(s) || (0, v.enabled)("INDICATORS_ON_CHART") && !(this.getStudyCounter(e) >= c) ? {
                        success: !0
                    } : {
                        success: !1,
                        reason: "general",
                        limitValue: c
                    }
                }
                createStudy(e, t, n, s, i, o, r, a) {
                    const _ = this.canCreateStudy(e, a);
                    return _.success || "child" !== _.reason ? (this._notificationHandlers[e][t] = new D.HandlerInfo(r, t), this._sendRequest("create_study", [e, t, n, s, i, o]), a.fundamental ? J(this._fundamentalCounter, e) : this._isNonCountedStudy(a.id) || J(this._studyCounter, e), a.child && J(this._childStudyCounter, e), this._studySpecs.set(G(e, t), a), !0) : ((0, p.showTooManyStudiesNotice)(_.limitValue), !1)
                }
                modifyStudy(e, t, n, s, o, a) {
                    z(a = a ? ? 0, this._childStudyCounter, e), 0 !== a && ((0, r.ensureDefined)(this._studySpecs.get(G(e, t))).child = a > 0), this._notificationHandlers[e][t] = new D.HandlerInfo(o, t);
                    const _ = e + t;
                    if (this._modifyStudyMap.has(_)) {
                        return (0, r.ensureDefined)(this._modifyStudyMap.get(_))(e, t, n, s) ? ? !0
                    } {
                        const o = (0, i.default)(((e, t, n, s) => this._sendRequest("modify_study", [e, t, n, s])), 500, {
                            maxWait: 550
                        });
                        return this._modifyStudyMap.set(_, o), o(e, t, n, s) ? ? !0
                    }
                }
                notifyStudy(e, t, n, s) {
                    return P.logNormal(`Send notify_study, [${e}, ${t}, ${n}, ${JSON.stringify(s)}]`), this._sendRequest("notify_study", [e, t, n, JSON.stringify(s)])
                }
                removeStudy(e, t) {
                    const n = e + t;
                    delete this._notificationHandlers[e][t], this._modifyStudyMap.get(n) ? .flush();
                    const s = this._sendRequest("remove_study", [e, t]);
                    if (!1 === s) return !1;
                    this._modifyStudyMap.delete(n);
                    const i = G(e, t),
                        o = (0, r.ensureDefined)(this._studySpecs.get(i));
                    return this._studySpecs.delete(i), o.fundamental ? Y(this._fundamentalCounter, e) : this._isNonCountedStudy(o.id) || Y(this._studyCounter, e), o.child && Y(this._childStudyCounter, e), s
                }
                createPointset(e, t, n, s, i, o, r) {
                    return this._notificationHandlers[e][t] = new D.HandlerInfo(r, t), this._sendRequest("create_pointset", [e, t, n, s, i, o])
                }
                modifyPointset(e, t, n, s, i) {
                    return this._notificationHandlers[e][t] = new D.HandlerInfo(i, t), this._sendRequest("modify_pointset", [e, t, n, s])
                }
                removePointset(e, t) {
                    return delete this._notificationHandlers[e][t], this._sendRequest("remove_pointset", [e, t])
                }
                getMarks(e, t, n, s, i) {
                    throw Error("This method is not implemented")
                }
                getTimescaleMarks(e, t, n, s, i) {
                    throw Error("This method is not implemented")
                }
                quoteCreateSession(e) {
                    return this._sendRequest("quote_create_session", [e])
                }
                quoteDeleteSession(e) {
                    return this._sendRequest("quote_delete_session", [e])
                }
                quoteAddSymbols(e, t) {
                    return this._sendRequest("quote_add_symbols", [e, t])
                }
                quoteRemoveSymbols(e, t) {
                    return this._sendRequest("quote_remove_symbols", [e, t])
                }
                quoteFastSymbols(e, t) {
                    return this._sendRequest("quote_fast_symbols", [e, t])
                }
                quoteSetFields(e, t) {
                    return this._sendRequest("quote_set_fields", [e, t])
                }
                quoteHibernateAll(e) {
                    return this._sendRequest("quote_hibernate_all", [e])
                }
                depthCreateSession(e, t, n) {
                    return this._sendRequest("depth_create_session", [e, t, n])
                }
                depthDeleteSession(e) {
                    return this._sendRequest("depth_delete_session", [e])
                }
                depthSetSymbol(e, t) {
                    return this._sendRequest("depth_set_symbol", [e, t])
                }
                depthClearSymbol(e) {
                    return this._sendRequest("depth_clear_symbol", [e])
                }
                depthSetScale(e, t) {
                    return this._sendRequest("depth_set_scale", [e, t])
                }
                unpack(e) {
                    return this._dataHandleModule.unpack(e)
                }
                sendRequest(e, t) {
                    return this._sendRequest(e, t)
                }
                enableLowQualityMode() {
                    this._lowQualityEnabled = !0, this._sendLowQualityModeIfEnabled()
                }
                resetCache() {
                    throw new Error("This method should only be called in Charting Library")
                }
                _init() {
                    this._notificationHandlers = {}, this._studyCounter = {}, this._childStudyCounter = {}, this._fundamentalCounter = {}, this._modifyStudyMap = new Map
                }
                _sendRequest(e, t) {
                    const n = this._sentMethodsCounters.get(e) ? ? 0;
                    if (this._sentMethodsCounters.set(e, n + 1), 0 !== this._sendingQueuedRequestsCount) return this._pendingMessagesQueue.push({
                        method: e,
                        args: t
                    }), !0;
                    const s = this._dataHandleModule[e].apply(this._dataHandleModule, t),
                        i = {
                            m: e,
                            p: s
                        },
                        o = JSON.stringify(i);
                    if (s.length > 0) {
                        const e = s[0];
                        e.startsWith("qs_") ? A.logNormal("send: " + o) : e.startsWith("cs_") && E.logNormal("send: " + o)
                    } else P.logNormal("send: " + o);
                    const r = this._dataHandleModule.prepareEncodeMessage(e, s);
                    return this._wsBackendConnection.send(r)
                }
                _onConnect() {
                    if (this.connected()) return;
                    if (this._trafficStats.sinceConnect = 0, this._isAuthTokenLoaded = !1, this._connectOnlyOptions = this._connectOnlyOptions || {}, this._authTokenDfd = this._getAuthTokenDfd(this._connectOnlyOptions.tokenGrabSession), this._connectOnlyOptions = {}, this.sessionid = this._wsBackendConnection.getSessionId(), !this.sessionid || this._isConnected) return;
                    this._pendingMessagesQueue = [], this._sendingQueuedRequestsCount = 0, this._studyCounter = {}, this._childStudyCounter = {}, this._fundamentalCounter = {}, this._studySpecs.clear(), this._isConnected = !0, this._banInfo.setValue(null), this._connectionsLimitReached.setValue(!1);
                    const e = JSON.parse(this.sessionid);
                    this._sendLowQualityModeIfEnabled(), this._metadataServerHash = e.studies_metadata_hash || null;
                    const t = this._wsBackendConnection.getConnectionEstablished();
                    try {
                        this._serverTimeBasePoint = Math.round(e.timestampMs - t)
                    } catch (e) {
                        this._serverTimeBasePoint = Date.now() - performance.now()
                    }
                    if (P.logInfo("Time shift with server: " + this._formatTime(this.serverTime() - Date.now())), this._authTokenDfd) {
                        this._sendingQueuedRequestsCount += 1, P.logInfo("Wait for auth token before send messages");
                        const e = this._authTokenDfd;
                        e.then((t => {
                            if (null !== this._authTokenDfd && this._authTokenDfd === e) {
                                if (P.logNormal("Auth token request is finished, token: " + Boolean(t)), this._authTokenDfd = null, t) {
                                    const e = [{
                                        method: "set_auth_token",
                                        args: [t]
                                    }];
                                    if (B) {
                                        const t = window.initData && window.initData.currentLocaleInfo;
                                        t && e.push({
                                            method: "set_locale",
                                            args: [t.iso, t.flag.toUpperCase()]
                                        })
                                    }
                                    this._pendingMessagesQueue.unshift(...e)
                                }
                                this._onSendingQueueRequestFinished(), this._isAuthTokenLoaded = !0, this._notifySessions({
                                    method: c.ChartApiMessageMethod.Connected,
                                    params: []
                                })
                            } else P.logNormal("Comes auth token after requesting new token or after socket disconnected")
                        })).catch((e => {
                            P.logNormal((0, y.errorToString)(e))
                        }))
                    } else P.logWarn("Deferred auth token object is not valid"), this._isAuthTokenLoaded = !0;
                    "" !== this._brokerId && this._sendBrokerIdToSession(this._brokerId);
                    const n = this._wsBackendConnection.getConnectionStart();
                    q.telemetry.setSessionInfo(this.sessionid), q.telemetry.sendChartReport("websocket_connected"), q.telemetry.sendChartReport("websocket_connection_time_frame", {
                        value: t - n
                    }), q.telemetry.sendChartReport("reconnect_count_frame", {
                        value: this._wsBackendConnection.getReconnectCount()
                    }), q.telemetry.sendChartReport("redirect_count_frame", {
                        value: this._wsBackendConnection.getRedirectCount()
                    }), F || (F = !0, q.telemetry.sendChartReport("before_websocket_connection_time_frame", {
                        value: n
                    })), this._wsBackendConnection.resetCounters(), clearTimeout(this._telemetryDisconnectTimeout)
                }
                _formatTime(e) {
                    return `${(e/1e3).toFixed(2)} seconds.`
                }
                _dispatchNotification(e, t) {
                    if ("request_data_problems" === e.method && this._onDataProblemsPromiseCb) return void this._onDataProblemsPromiseCb(e.params);
                    if (e.method === T.WebchartChartSessionResponseMethod.StudiesMetadata && null !== this._metadataDeferredPromise) return void this._processedMetadata(e);
                    const n = e.params.shift();
                    if (!this._notificationHandlers[n]) return;
                    if ("symbol_resolved" === e.method) {
                        const t = e.params[1].full_name;
                        q.telemetry.sendChartReport("symbol_resolved", {
                            count: 1,
                            additional: {
                                symbol: t
                            }
                        });
                        const s = q.telemetry.timeCounters.series["resolve_symbol_" + n];
                        "number" == typeof s && q.telemetry.sendChartReport("symbol_resolve_time_frame", {
                            value: window.performance.now() - s,
                            additional: {
                                symbol: t
                            }
                        })
                    }
                    if (["series_error", "series_completed"].includes(e.method) && q.telemetry.timeCounters.series.marks.length > 0) {
                        const e = "create_series_" + n,
                            t = q.telemetry.timeCounters.series.marks.indexOf(e);
                        t >= 0 && q.telemetry.timeCounters.series.marks.splice(t, 1)
                    }
                    Q || "series_error" !== e.method || (Q = !0);
                    const s = this._wsBackendConnection.getConnectionEstablished();
                    if (null !== s && "series_completed" === e.method && (Q || (Q = !0, q.telemetry.sendChartReport("first_series_full_time_frame", {
                            value: window.performance.now() - s
                        }), q.telemetry.timeCounters.series.marks = []), W || (W = !0, q.telemetry.sendChartReport("page_full_load_time_frame", {
                            value: window.performance.now()
                        }))), n.startsWith("cs_")) {
                        let n = "recv: " + t;
                        "data_update" === e.method ? (n = (0, a.isHighRateEnabled)() ? n : n.slice(0, 500), L.logNormal(this._appendDuration(n, e.time))) : "study_loading" === e.method ? O.logNormal(this._appendDuration(n, e.time)) : "tickmark_update" === e.method ? H.logNormal(this._appendDuration(n, e.time)) : E.logNormal(this._appendDuration(n, e.time))
                    }
                    if (n.startsWith("qs_")) {
                        ("quote_symbol_data" === e.method ? U.logNormal : A.logNormal)("recv: " + t)
                    }
                    switch (e.method) {
                        case T.WebchartChartSessionResponseMethod.TimeScaleUpdate:
                            {
                                const t = this._dataHandleModule.getTimescaleObjects(e),
                                    s = this._dataHandleModule.getTimescaleChangeset(e),
                                    i = this._convertTimescaleResponse(s);this._sessions[n].onMessage({
                                    method: T.WebchartChartSessionResponseMethod.TimeScaleUpdate,
                                    params: i
                                }),
                                this._dataHandleModule.prepareDataUpdateObjects(n, t, ((e, t, n) => {
                                    this._invokeNotificationHandler(e, t, n)
                                }));
                                break
                            }
                        case "tickmark_update":
                            const t = { ...this._convertTimescaleResponse(e.params[0]),
                                changes: []
                            };
                            this._sessions[n].onMessage({
                                method: T.WebchartChartSessionResponseMethod.TimeScaleUpdate,
                                params: t
                            });
                            break;
                        case T.WebchartChartSessionResponseMethod.DataUpdate:
                            {
                                const t = this._dataHandleModule.getDataUpdateObjects(e);this._dataHandleModule.prepareDataUpdateObjects(n, t, ((e, t, n) => {
                                    this._invokeNotificationHandler(e, t, n)
                                }));
                                break
                            }
                        case "index_update":
                            for (const t in e.params[0])
                                if (e.params[0].hasOwnProperty(t)) {
                                    const s = {
                                        method: "index_update",
                                        params: e.params[0][t]
                                    };
                                    this._invokeNotificationHandler(n, t, s)
                                }
                            break;
                        case T.WebchartResponseMethod.CriticalError:
                            P.logInfo(new Date + " critical_error session:" + this.sessionid + " reason:" + e.params[0]), q.telemetry.sendChartReport("critical_error"), this._sessions[n].onMessage({
                                method: T.WebchartResponseMethod.CriticalError,
                                params: e.params
                            });
                            break;
                        case "timescale_completed":
                        case "quote_symbol_data":
                        case "quote_list_fields":
                        case "quote_completed":
                        case "depth_symbol_error":
                        case "depth_symbol_success":
                        case "dd":
                        case "dpu":
                        case "depth_bar_last_value":
                            this._sessions[n].onMessage({
                                method: e.method,
                                params: e.params
                            });
                            break;
                        case "clear_data":
                            for (const t in e.params[0]) e.params[0].hasOwnProperty(t) && this._invokeNotificationHandler(n, t, {
                                method: T.WebchartChartSessionResponseMethod.ClearData,
                                params: e.params[0][t]
                            });
                            break;
                        case T.WebchartReplaySessionResponseMethod.ReplayPoint:
                        case T.WebchartReplaySessionResponseMethod.ReplayResolutions:
                        case T.WebchartReplaySessionResponseMethod.ReplayDataEnd:
                        case T.WebchartReplaySessionResponseMethod.ReplayInstanceId:
                        case T.WebchartReplaySessionResponseMethod.ReplayDepth:
                        case T.WebchartReplaySessionResponseMethod.ReplayError:
                        case T.WebchartReplaySessionResponseMethod.ReplayOk:
                            this._sessions[n].onMessage(e);
                            break;
                        case "series_timeframe":
                            e.params[4] = function(e) {
                                if (null == e) return null;
                                const t = /r,(\d+):(\d+)/.exec(e);
                                return null !== t ? {
                                    from: Number(t[1]),
                                    to: Number(t[2]),
                                    type: "time-range"
                                } : {
                                    value: e,
                                    type: "period-back"
                                }
                            }(e.params[4]), this._invokeNotificationHandler(n, e.params[0], e);
                            break;
                        case "symbol_resolved":
                            ! function(e) {
                                if (void 0 === e.corrections) {
                                    const t = (e.subsessions ? ? []).find((t => t.id === e.subsession_id));
                                    void 0 !== t && (e.corrections = t["session-correction"])
                                }
                            }(e.params[1]), this._invokeNotificationHandler(n, e.params[0], e);
                            break;
                        default:
                            this._invokeNotificationHandler(n, e.params[0], e)
                    }
                }
                _notifySessions(e) {
                    for (const t in this._sessions)
                        if (this._sessions.hasOwnProperty(t)) {
                            const n = this._sessions[t];
                            "function" == typeof n.onMessage && n.onMessage(e)
                        }
                }
                _onMessage(e) {
                    this._calcTrafficStats(e);
                    const t = this.unpack(e);
                    this._receivedMethodsCounters.set(t.method, (this._receivedMethodsCounters.get(t.method) ? ? 0) + 1), "t_ms" in t && (0, o.default)(t.t_ms) && window.ChartApiInstance.compensateConnectionLag(t.t_ms), "protocol_switched" !== t.method ? "protocol_error" !== t.method ? this._dispatchNotification(t, e) : this._processProtocolError(t) : P.logError("Unexpected protocol changing request, try skipping. Requested protocol:" + t.params[0])
                }
                async _processedMetadata(e) {
                    const t = (0, r.ensureNotNull)(this._metadataDeferredPromise),
                        n = await this._initCachePromise,
                        i = window.pro.hash(),
                        o = l.enabled("widget");
                    try {
                        await n.setValue(X, (0, s.default)(e));
                        const r = Array.from(new Set(e.params[1].metainfo.map((e => {
                            return `${(t=(0,M.parseIdString)(e.id)).packageId}-${t.version}`;
                            var t
                        }))));
                        if (P.logNormal(`Updated studies_metadata cache, unique package ids: ${r.join(", ")}`), !o) try {
                            await n.setValue(K, (0, s.default)(i)), P.logNormal("Updated pro_hash cache")
                        } catch (e) {
                            t.reject(), P.logError("Cannot update pro_hash cache, reason: " + e)
                        }
                    } catch (e) {
                        t.reject(), P.logError("Cannot update studies_metadata cache, reason: " + e)
                    }
                    t.resolve((0, s.default)(e))
                }
                _invokeNotificationHandler(e, t, n) {
                    if (void 0 === t) return;
                    const s = this._notificationHandlers[e][t];
                    void 0 !== s && (s.singleShot && delete this._notificationHandlers[e][t], s.handler ? .(n))
                }
                _convertTimescaleResponse(e) {
                    return this._dataHandleModule.convertTimescaleResponse(e)
                }
                _appendDuration(e, t) {
                    return t ? `${e}, duration: ${this._formatTime(this.serverTime()-1e3*t)}` : e
                }
                async _requestMetadata() {
                    const e = this._makeNextRequestId();
                    x.logNormal(`Requesting metainfo #${e}`);
                    const t = (0, r.ensureNotNull)(this._metadataDeferredPromise),
                        n = window.pro,
                        i = n.hash(),
                        o = l.enabled("widget");
                    P.logNormal("Requesting pro hash");
                    try {
                        const r = await this._initCachePromise;
                        await r.migrateValue("pro_hash", K), await r.migrateValue(Z, X);
                        const a = await r.getValue(K);
                        if (null !== a && a === i || o) {
                            P.logNormal("Pro hash has not changed, requesting from local");
                            const o = await r.getValue(X),
                                a = null !== o && o.params[1].hash || null;
                            if (null === a || null === this._metadataServerHash || this._metadataServerHash !== a) P.logNormal(`Metadata hash has changed (cached: '${a}', server: '${this._metadataServerHash}')`), this._requestMetadataFromServer(e);
                            else {
                                if (!n.hasPackage("tv-volumebyprice") || void 0 !== o.params[1].metainfo.find((e => e.id.includes("@tv-volumebyprice")))) return P.logNormal("Using studies_metadata from browser cache"), void t.resolve((0, s.default)(o));
                                P.logNormal(`De-sync detected! pro.hash contains VbPR studies, but data from cache doesn't and pro.hash isn't changed, pro.hash=${i}`), this._requestMetadataFromServer(e)
                            }
                        } else P.logNormal(`Pro hash has changed (cached: '${a}', current: '${i}')`), this._requestMetadataFromServer(e)
                    } catch (t) {
                        P.logError("Cannot get studies_metadata, reason: " + t), this._requestMetadataFromServer(e)
                    } finally {
                        x.logNormal(`Requesting studies metadata #${e} finished`)
                    }
                }
                _makeNextRequestId() {
                    return "metadata_" + this._metadataRequestNextNumber++
                }
                _processProtocolError(e) {
                    const t = e.params[0];
                    P.logError(`Protocol error. Reason=${t}.`), "banned" !== t && "banned by user_id" !== t && "banned by ip" !== t || (this._banInfo.setValue({
                        reason: t
                    }), this.disconnect()), this._connectionsLimitReached.setValue("user connections limit reached" === t)
                }
                _requestMetadataFromServer(e) {
                    return P.logNormal("Request studies_metadata from server"), this._sendRequest("request_studies_metadata", [e])
                }
                _bindSocketEvents() {
                    this.connectDfd = new Promise(((e, t) => {
                        this._wsBackendConnection.on("connect", (() => {
                            this._onConnect(), e()
                        })), this._wsBackendConnection.on("message", this._onMessage.bind(this)), this._wsBackendConnection.on("disconnect", (() => {
                            this._authTokenDfd && (this._authTokenDfd = null), this._onDataProblemsPromiseErrback && this._onDataProblemsPromiseErrback(), this._isConnected = !1, this._notifySessions({
                                    method: c.ChartApiMessageMethod.Disconnected,
                                    params: []
                                }),
                                this._banInfo.value() || (this._metadataDeferredPromise = null), this._disconnectCount = (this._disconnectCount || 0) + 1, this._wsBackendConnection.isConnected() && (this._telemetryDisconnectTimeout = setTimeout((() => {
                                    q.telemetry.sendChartReport("disconnect")
                                }), 5e3), this._wsBackendConnection.isMaxReconnects() && (this._notifySessions({
                                    method: c.ChartApiMessageMethod.ReconnectBailout,
                                    params: []
                                }), t(), q.telemetry.sendChartReport("reconnect_bailout")))
                        }))
                    }))
                }
                _calcTrafficStats(e) {
                    const t = e.length;
                    this._trafficStats.total += t, this._trafficStats.sinceConnect += t, this._trafficStats.lastChunk += t
                }
                _sendBrokerIdToSession(e) {
                    return !$ || this._sendRequest("set_broker", [e])
                }
                _sendLowQualityModeIfEnabled() {
                    this._lowQualityEnabled && this.connected() && this._sendRequest("set_data_quality", [])
                }
                _getAuthTokenDfd(e) {
                    if (this._loadNewBars) return Promise.resolve("load_new_token");
                    if (l.enabled("widget") || -1 !== window.location.search.indexOf("widget_token") || -1 !== window.location.hash.indexOf("widget_token")) {
                        const e = window.TradingView && window.TradingView.widgetCustomer || "";
                        return Promise.resolve(h[e] || "widget_user_token")
                    }
                    return window.is_authenticated ? (this._authTokenManager || (this._authTokenManager = new _.AuthToken, this._authTokenManager.invalidated.subscribe(null, (() => {
                        this._authTokenManager ? .get().then((e => {
                            e && this.connected() && this._sendRequest("set_auth_token", [e])
                        }))
                    }))), this._authTokenManager.get(e)) : Promise.resolve("unauthorized_user_token")
                }
                _onSendingQueueRequestFinished() {
                    this._sendingQueuedRequestsCount -= 1, P.logInfo(`Sending queue request finished. Remaining pending requests=${this._sendingQueuedRequestsCount}`), this._sendingQueuedRequestsCount < 0 && P.logError(`Invalid queue state=${this._sendingQueuedRequestsCount}`), 0 === this._sendingQueuedRequestsCount && this._flushPendingMessages()
                }
                _flushPendingMessages() {
                    P.logInfo(`Flush pending messages. Count=${this._pendingMessagesQueue.length}`), this._pendingMessagesQueue.forEach((e => this._sendRequest(e.method, e.args))), this._pendingMessagesQueue = []
                }
            }
            "undefined" != typeof window && (window.ChartApiInstance = new se(window.WSBackendConnection))
        },
        207815: (e, t, n) => {
            n.r(t), n.d(t, {
                QUOTE_FIELDS: () => o,
                QUOTE_FIELDS_CACHE: () => r,
                QuoteCache: () => i
            });
            var s = n(650151);
            class i {
                constructor(e) {
                    this._cache = new Map, this._fields = [...e.fields]
                }
                update(e, t, n) {
                    const i = (0, s.ensureDefined)(e.symbolname);
                    if (this._cache.has(i) || this._cache.set(i, {
                            symbolname: i,
                            status: e.status,
                            values: {}
                        }), "error" === e.status) return;
                    const o = (0, s.ensureDefined)(this._cache.get(i));
                    o.status = e.status;
                    for (const s of this._fields) t.has(s) && (n || void 0 !== e.values[s]) && (o.values[s] = e.values[s])
                }
                get(e) {
                    return this._cache.get(e) ? ? null
                }
                fields() {
                    return this._fields
                }
            }
            const o = new Set(["pro_name", "base_name", "logoid", "currency-logoid", "base-currency-logoid", "source-logoid", "short_name", "web_site_url", "pro_perm", "timezone", "current_session", "last_price", "lp_time", "prev_close_price", "open_price", "high_price", "low_price", "price_52_week_high", "price_52_week_low", "ask", "ask_size", "bid", "bid_size", "rch", "rchp", "rtc", "rtc_time", "data_frequency", "reference-last-period-start", "business_description", "web_site_url", "figi", "number_of_employees", "float_shares_outstanding", "earnings_release_next_calendar_date", "root", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "visible-plots-set", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "variable_tick_size", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "market_cap_calc", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_publication_type_next_fq", "earnings_release_date", "earnings_per_share_fq", "earnings_per_share_forecast_fq", "forecast_raw", "last_release_date", "next_release_date", "reference_last_period", "fundamental_currency_code", "number_of_employees", "web_site_url", "business_description", "founded", "ceo", "float_shares_outstanding", "total_shares_outstanding", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h", "dividend_payment_date_upcoming", "dividend_payment_date_recent", "total_revenue_fq_h", "total_revenue_fy_h", "net_income_fy_h", "net_income_fq_h", "total_assets_fy_h", "total_assets_fq_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_next_date_fq", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_fq_h", "earnings_per_share_fq_h", "earnings_fiscal_period_fq_h", "next_earnings_fiscal_period_fq", "is_next_earnings_release_date_estimated", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "measure", "value_unit_id", "value-unit-id", "update_mode", "language", "local_description", "short_description", "source", "source2", "format", "recommendation_mark", "last_report_frequency", "price_target_estimates_num", "price_target_average", "update_mode_seconds", "recommendation_total", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_high", "price_target_low", "rates_pt", "rates_pt", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy", "fiscal_period_fq", "fiscal_period_fh", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "earnings_release_time", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "revenue_seg_by_business_h", "revenue_seg_by_region_h", "total_revenue_fy", "total_revenue_fq", "total_revenue_fh", "gross_profit_fy", "gross_profit_fq", "gross_profit_fh", "ebitda_fy", "ebit_fy", "net_income_fy", "net_income_fq", "net_income_fh", "total_debt_fy_h", "total_debt_fq_h", "total_debt_fh_h", "free_cash_flow_fy_h", "free_cash_flow_fq_h", "free_cash_flow_fh_h", "cash_n_equivalents_fy_h", "cash_n_equivalents_fq_h", "cash_n_equivalents_fh_h", "total_current_assets_fy", "total_current_assets_fq", "total_current_assets_fh", "total_current_liabilities_fy", "total_current_liabilities_fq", "total_current_liabilities_fh", "total_non_current_assets_fy", "total_non_current_assets_fq", "total_non_current_assets_fh", "total_non_current_liabilities_fy", "total_non_current_liabilities_fq", "total_non_current_liabilities_fh", "loans_net_fy", "loans_net_fy_h", "loans_net_fq_h", "loans_net_fh_h", "total_deposits_fy", "total_deposits_fy_h", "total_deposits_fq_h", "total_deposits_fh_h", "loan_loss_allowances_fy", "loan_loss_allowances_fy_h", "loan_loss_allowances_fq_h", "loan_loss_allowances_fh_h", "reserve_to_total_capital_fy_h", "reserve_to_total_capital_fq_h", "reserve_to_total_capital_fh_h", "unearned_premium_to_total_capital_fy_h", "unearned_premium_to_total_capital_fq_h", "unearned_premium_to_total_capital_fh_h", "insurance_reserves_fy_h", "insurance_reserves_fq_h", "insurance_reserves_fh_h", "policy_claims_fy_h", "policy_claims_fq_h", "policy_claims_fh_h", "premiums_earned_fy_h", "premiums_earned_fq_h", "premiums_earned_fh_h", "price_earnings_fq_h", "price_earnings_fy_h", "price_earnings_fh_h", "price_sales_fq_h", "price_sales_fy_h", "price_sales_fh_h", "diluted_net_income_ttm", "total_revenue_ttm", "price_earnings_current", "price_sales_current", "isin-displayed", "interest_income_fy_h", "interest_income_fq_h", "interest_income_fh_h", "non_interest_income_fy_h", "non_interest_income_fq_h", "non_interest_income_fh_h", "website", "doc", "explorer", "sources", "contracts", "crypto_common_categories", "crypto_asset", "community", "dividends_availability", "earnings_availability", "financials_availability", "etf_asset_type_exposure", "etf_region_exposure", "top_holdings", "unit-id", "options-info", "interest_income_fy", "interest_income_fq", "interest_income_fh", "non_interest_income_fy", "non_interest_income_fq", "non_interest_income_fh", "interest_expense_fy", "interest_expense_fq", "interest_expense_fh", "loan_loss_provision_fy", "loan_loss_provision_fq", "loan_loss_provision_fh", "non_interest_expense_fy", "non_interest_expense_fq", "non_interest_expense_fh", "non_oper_income_fy", "non_oper_income_fq", "non_oper_income_fh", "unusual_expense_inc_fy", "unusual_expense_inc_fq", "unusual_expense_inc_fh", "pretax_income_fy", "pretax_income_fq", "pretax_income_fh", "income_tax_fy", "income_tax_fq", "income_tax_fh", "after_tax_other_income_fy", "after_tax_other_income_fq", "after_tax_other_income_fh", "total_non_oper_income_fy", "total_non_oper_income_fq", "total_non_oper_income_fh", "oper_income_fy", "oper_income_fq", "oper_income_fh", "operating_expenses_fy", "operating_expenses_fq", "operating_expenses_fh", "cost_of_goods_fy", "cost_of_goods_fq", "cost_of_goods_fh", "equity_in_earnings_fy", "equity_in_earnings_fq", "equity_in_earnings_fh", "minority_interest_exp_fy", "minority_interest_exp_fq", "minority_interest_exp_fh", "discontinued_operations_fy", "discontinued_operations_fq", "discontinued_operations_fh", "front_contract", "pointvalue", "unit_id", "expiration", "aum", "asset_class", "focus", "expense_ratio", "launch_date", "issuer", "brand", "homepage", "index_tracked", "actively_managed", "fund_view_mode", "common_equity_tier1_ratio_fy_h", "common_equity_tier1_ratio_fq_h", "common_equity_tier1_ratio_fh_h", "tier1_capital_ratio_fy_h", "tier1_capital_ratio_fq_h", "tier1_capital_ratio_fh_h", "total_capital_ratio_fy_h", "total_capital_ratio_fq_h", "total_capital_ratio_fh_h", "preferred_stock_carrying_value_fh", "preferred_stock_carrying_value_fq", "total_debt_fq", "minority_interest_fh", "minority_interest_fq", "cash_n_short_term_invest_fq", "cash_n_due_f_banks_fh", "cash_n_due_f_banks_fq", "enterprise_value_current", "etf_holdings_count", "contract-description", "reference-last-period", "all_time_high", "all_time_high_day", "all_time_low", "all_time_low_day", "outstanding_amount", "nominal_value", "denom_min", "current_coupon", "coupon_type_general", "coupon_frequency", "yield_to_maturity", "maturity-date", "days_to_maturity", "bond_issuer", "issue_date", "bond_issuer_stock_symbol", "total_issued_amount", "paid_amount", "bond_snp_rating_lt_h", "placement_type", "duration_type", "maturity_type", "offer_type", "redemption_type", "conversion_option", "sinking_fund", "ownership_form", "daily-summary-ast", "issue_status", "coupon_h", "sinking_fund_next_date", "sinking_fund_min_amount_next", "call_next_date", "redemptions_h", "call_notice_days", "put_next_date", "put_notice_days_min", "seniority_level", "inflation_protection", "pledge_status", "bond_issuer_country_of_risk", "bond_issuer_cr_parent", "credit_enhancement_type", "credit_enhancement_status", "use_of_proceeds", "bond_issuer_snp_rating_lt_h", "bond_issuer_snp_rating_st_h", "bond_agents_tr", "first_bar_time_1d", "financial-indicator-id", "exchange-info", "underlying-symbol", "strike", "lotsize", "option-style"]),
                r = new i({
                    fields: o
                })
        },
        534197: (e, t, n) => {
            n.d(t, {
                getQuoteSessionInstance: () => o
            });
            var s = n(288533);
            const i = {};

            function o(e = "full") {
                return i[e] || function(e = "full", t) {
                    i[e] = t
                }(e, new s(e)), i[e]
            }
        },
        778003: (e, t, n) => {
            function s(e) {
                if (void 0 === e) return null;
                const t = e.match(/(delayed_streaming)_(\d+)/);
                return null === t ? null : {
                    mode: t[1],
                    interval: parseInt(t[2])
                }
            }

            function i(e) {
                const t = s(e.update_mode);
                return null === t || (e.update_mode = t.mode, e.update_mode_seconds = t.interval), e
            }
            n.r(t), n.d(t, {
                normalizeUpdateMode: () => i,
                parseUpdateMode: () => s
            })
        },
        982367: (e, t, n) => {
            function s(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }

            function i(e) {
                return e > 0 ? Math.floor(e) : Math.ceil(e)
            }

            function o(e) {
                return e % 2 == 0
            }
            n.d(t, {
                clamp: () => s,
                isEven: () => o,
                toInt: () => i
            })
        },
        544151: (e, t, n) => {
            n.d(t, {
                getMinTickData: () => _,
                makeVariableMinTickData: () => l
            });
            var s = n(960521),
                i = n(150335),
                o = n(982367),
                r = n(855247);

            function a(e) {
                return e ? (0, s.Big)(e.minMove).div(e.priceScale).toNumber() : NaN
            }

            function _(e) {
                const {
                    minTick: t,
                    price: n,
                    variableMinTickData: s,
                    shouldCheckForEquality: o
                } = e, r = (0, i.isNumber)(t) ? c(t) : t;
                return void 0 === s ? r : function(e, t, n = !1) {
                    for (let s = 0; s < t.length; s++) {
                        if (e < t[s].price) return t[s].minTick;
                        if (n && e === t[s].price) return t[s].minTick
                    }
                    return t[t.length - 1].minTick
                }(n, s, o)
            }

            function c(e) {
                const t = (0, r.numOfDecimalPlaces)(e),
                    n = Math.pow(10, t);
                return {
                    priceScale: n,
                    minMove: (0, s.Big)(e).mul(n).toNumber()
                }
            }

            function l(e, t) {
                const n = [{
                    minTick: (0, i.isNumber)(e) ? c(e) : e,
                    price: 1 / 0,
                    maxIndex: 1 / 0
                }];
                try {
                    const e = t.split(" ").map(((e, t) => (0, o.isEven)(t) ? function(e) {
                        const t = Number(e);
                        if (Number.isFinite(t)) return c(t); {
                            const t = e.split("/");
                            if (t.length < 2 || t.length > 3) throw new Error(`Unexpected mintick: ${e}`);
                            const n = Number(t[1]),
                                s = Number(t[0]);
                            if (!Number.isFinite(n) || !Number.isFinite(s)) throw new Error(`Unexpected mintick: ${e}`);
                            const i = 3 === t.length ? Number(t[2]) : void 0;
                            if (void 0 !== i && !Number.isFinite(i)) throw new Error(`Unexpected mintick: ${e}`);
                            const o = {
                                priceScale: n,
                                minMove: s
                            };
                            return void 0 !== i && (o.minMove2 = i), o
                        }
                    }(e) : function(e) {
                        const t = Number(e);
                        if (Number.isNaN(t)) throw new Error(`Unexpected price limit: ${e}`);
                        return t
                    }(e)));
                    if ((0, o.isEven)(e.length)) throw new Error("Theme must not be event number of elements");
                    const n = [];
                    for (let t = 0; t < e.length; t += 2) {
                        const i = e[t + 1] ? ? 1 / 0,
                            o = n[n.length - 1] ? .price ? ? 0,
                            r = n[n.length - 1] ? .maxIndex ? ? 0,
                            _ = i === 1 / 0 ? 1 / 0 : new s.Big(i).minus(o).div(a(e[t])).plus(r).toNumber();
                        n.push({
                            minTick: e[t],
                            price: i,
                            maxIndex: _
                        })
                    }
                    return n
                } catch {
                    return n
                }
            }
        },
        909456: (e, t, n) => {
            n.d(t, {
                numberToStringWithLeadingZero: () => i
            });
            var s = n(536794);

            function i(e, t) {
                if (!(0, s.isNumber)(e)) return "n/a";
                if (!(0, s.isInteger)(t)) throw new TypeError("invalid length");
                if (t < 0 || t > 24) throw new TypeError("invalid length");
                if (0 === t) return e.toString();
                return ("0000000000000000" + e.toString()).slice(-t)
            }
        },
        89831: (e, t, n) => {
            n.d(t, {
                PriceFormatter: () => a
            });
            var s = n(618648),
                i = n(803431),
                o = n(536794),
                r = n(47522);
            class a {
                constructor(e = {}) {
                    this.type = "price";
                    const {
                        minMove2: t,
                        fractional: n,
                        variableMinTick: a,
                        ignoreMinMove: _,
                        ignoreLocaleNumberFormat: c
                    } = e, l = !e.minMove || _ ? 1 : e.minMove, d = (0, o.isNumber)(e.priceScale) && (0, o.isInteger)(e.priceScale) ? e.priceScale : 100, u = (0,
                        r.calculateDecimal)(d, l, n, t), h = { ...e,
                        minMove: l,
                        priceScale: d,
                        fractionalLength: u
                    };
                    if (d < 0) throw new TypeError("invalid base");
                    this._priceScale = d, this._minMove = l, this._minMove2 = t, this._fractional = n, this._variableMinTick = a, this._ignoreMinMove = _, this._fractionalLength = u, this._ignoreLocaleNumberFormat = c, this._implementation = n ? new i.FractionalPriceFormatterImpl(h) : new s.DecimalPriceFormatterImpl(h)
                }
                isFractional() {
                    return !!this._fractional
                }
                state() {
                    return {
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        priceScale: this._priceScale,
                        variableMinTick: this._variableMinTick,
                        ignoreMinMove: this._ignoreMinMove,
                        fractional: this._fractional
                    }
                }
                formatChange(e, t, n) {
                    return this._implementation.formatImpl(e - t, { ...n,
                        variableMinTickDataPrice: Math.min(Math.abs(e), Math.abs(t))
                    })
                }
                format(e, t) {
                    return this._implementation.formatImpl(e, t)
                }
                parse(e, t) {
                    return this._implementation.parse(e, t)
                }
                hasForexAdditionalPrecision() {
                    return this._implementation.hasForexAdditionalPrecision()
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new a(e)
                }
            }
        },
        303999: (e, t, n) => {
            n.d(t, {
                isTicksEnabled: () => i
            });
            var s = n(638456);
            n(931924);

            function i() {
                return !(0, s.onWidget)()
            }
        },
        302221: (e, t, n) => {
            var s;
            ! function(e) {
                e.Monthly = "m", e.ThreeMonths = "3m", e.OneYear = "y"
            }(s || (s = {}))
        },
        912465: (e, t, n) => {
            function s(e, t) {
                const n = t || window.locale || "en";
                let s = e[n] ? e[n] : e.en;
                return s = "tradingview.com" === s ? "www.tradingview.com" : s, s ? document.location.protocol + "//" + s : ""
            }
            n.d(t, {
                determineBaseUrl: () => s
            })
        },
        659923: (e, t, n) => {
            n.d(t, {
                showTooManyStudiesNotice: () => o
            });
            var s = n(444372),
                i = n(779923);

            function o(e) {
                (0, i.showWarning)({
                    title: s.t(null, void 0, n(966719)),
                    text: s.t(null, {
                        replace: {
                            number: `${e}`
                        }
                    }, n(586146))
                })
            }
        },
        232759: (e, t, n) => {
            n.d(t, {
                getProductForTrial: () => o,
                isTrialProduct: () => i
            });
            n(142492), n(444372), n(302221);
            const s = "_trial";

            function i(e) {
                return new RegExp(s + "$").test(e)
            }

            function o(e) {
                return e.split(s)[0]
            }
        },
        925049: (e, t, n) => {
            function s() {
                let e, t;
                return {
                    promise: new Promise(((n, s) => {
                        e = n, t = s
                    })),
                    reject: t,
                    resolve: e
                }
            }
            n.d(t, {
                createDeferredPromise: () => s
            })
        },
        999102: (e, t, n) => {
            function s(e) {
                return e.reduce((function(e, t, n) {
                    return ~e.indexOf(t) || e.push(t), e
                }), [])
            }
            n.r(t), n.d(t, {
                uniq: () => s
            })
        },
        974629: (e, t, n) => {
            function s(e) {
                const t = new URL(e, document.baseURI);
                return o(t) && i(t)
            }
            n.d(t, {
                isInternalHost: () => r,
                isSafeUrl: () => s
            });
            const i = e => !e.username,
                o = e => "http:" === e.protocol || "https:" === e.protocol;

            function r(e, t = window.location.hostname) {
                const n = "." === t.slice(-1) ? 3 : 2,
                    s = t.toLowerCase().split(".").slice(-n),
                    i = e.toLowerCase().split(".").slice(-s.length);
                return s.join(".") === i.join(".")
            }
        },
        199583: (e, t, n) => {
            n.d(t, {
                addUtmToUrl: () => i
            });
            var s = n(283834);

            function i(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const n = (0, s.buildUtmQueryString)(t);
                if ("" === n) return e;
                const i = e.indexOf("?"),
                    o = e.indexOf("#"),
                    r = -1 !== o;
                if (-1 !== i && (!r || i < o)) {
                    return `${e.slice(0,i)}?${r?e.slice(i+1,o):e.slice(i+1)}&${n}${r?e.slice(o):""}`
                }
                if (r) {
                    return `${e.slice(0,o)}?${n}${e.slice(o)}`
                }
                return `${e}?${n}`
            }
        },
        735566: (e, t, n) => {
            var s;
            n.r(t), n.d(t, {
                    LOGLEVEL: () => s,
                    getLogHistory: () => y,
                    getLogLevel: () => u,
                    getLogger: () => v,
                    getRawLogHistory: () => p,
                    isHighRateEnabled: () => h,
                    loggingOff: () => S,
                    loggingOn: () => w,
                    serializeLogHistoryEntry: () => g,
                    setHighRateStatus: () => f,
                    setLogLevel: () => m
                }),
                function(e) {
                    e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
                }(s || (s = {}));
            let i = 0;
            const o = [];
            let r = null,
                a = null,
                _ = null,
                c = null,
                l = s.WARNING,
                d = !1;

            function u() {
                return l
            }

            function h() {
                return d
            }

            function m(e) {
                e = Math.max(s.ERROR, Math.min(s.DEBUG, e)), l = e
            }

            function f(e) {
                d = e
            }

            function p(e, t) {
                let n = o.reduce(((e, t) => e.concat(t)), []);
                return n.sort(((e, t) => e.id - t.id)), void 0 !== t && (n = n.filter((e => e.subSystemId === t))), "number" == typeof e && (n = n.slice(-e)), n
            }

            function g(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }
            const y = (e, t) => function(e, t) {
                let n, s = 0,
                    i = 0;
                for (n = e.length - 1; n >= 1 && (s += 8 * (1 + encodeURIComponent(e[n]).length), !(n - 1 > 0 && (i = 8 * (1 + encodeURIComponent(e[n - 1]).length), s + i > t))); n--);
                return e.slice(n)
            }(p(e, t).map(g), 75497472);

            function b(e, t, n, o) {
                if (t === a && o.id === _) return;
                const d = new Date;
                if (e <= s.NORMAL && function(e, t, n, s, o) {
                        "function" == typeof structuredClone && (t = structuredClone(t));
                        const r = {
                            id: i,
                            message: t,
                            subSystemId: s,
                            timestamp: Number(e)
                        };
                        i += 1, n.push(r), void 0 !== o && n.length > o && n.splice(0, 1)
                    }(d, t, n, o.id, o.maxCount), e <= l && (!o.highRate || h()) && (!r || o.id.match(r))) {
                    const n = d.toISOString() + ":" + o.id + ":" + t;
                    switch (e) {
                        case s.DEBUG:
                            console.debug(n);
                            break;
                        case s.INFO:
                        case s.NORMAL:
                            o.color ? console.log("%c" + n, "color: " + o.color) : console.log(n);
                            break;
                        case s.WARNING:
                            console.warn(n);
                            break;
                        case s.ERROR:
                            console.error(n)
                    }
                    a = t, _ = o.id, null !== c && clearTimeout(c), c = setTimeout((() => {
                        a = null, _ = null, c = null
                    }), 1e3)
                }
            }

            function v(e, t = {}) {
                const n = [];
                o.push(n);
                const i = Object.assign(t, {
                    id: e
                });

                function r(e) {
                    return t => b(e, String(t), n, i)
                }
                return {
                    logDebug: r(s.DEBUG),
                    logError: r(s.ERROR),
                    logInfo: r(s.INFO),
                    logNormal: r(s.NORMAL),
                    logWarn: r(s.WARNING)
                }
            }
            const w = (e, t) => {
                    m(s.DEBUG), d = Boolean(e), r = t || null
                },
                S = () => {
                    m(s.INFO)
                }
        }
    }
]);