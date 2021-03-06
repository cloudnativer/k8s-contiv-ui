webpackJsonp([2], [function(e, t, n) {
    "use strict";
    var o = n(2),
        i = n(165),
        r = n(404);
    o.enableProdMode(), i.platformBrowserDynamic().bootstrapModule(r.AppModule)
}, , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(102),
        s = function() {
            function CRUDHelperService() {
                this.message = "", this.item = ""
            }
            return CRUDHelperService.prototype.startLoader = function(e) {
                e.showLoader = !0
            }, CRUDHelperService.prototype.stopLoader = function(e) {
                e.showLoader = !1
            }, CRUDHelperService.prototype.showNotification = function(e, t, n) {
                this.message = e, this.item = t, this.notificationType = n, this.displayNotify = !0
            }, CRUDHelperService.prototype.showServerError = function(e, t) {
                var n = t.status,
                    o = "";
                "401" != n && "402" != n || (o = "Unauthorized Operation"), o = t.text().length > 0 ? t.text() : t.toString(), this.showNotification(e, o, a.NotificationType.alert)
            }, CRUDHelperService = o([r.Injectable(), i("design:paramtypes", [])], CRUDHelperService)
        }();
    t.CRUDHelperService = s
}, , , , function(e, t) {
    "use strict";
    t.ContivGlobals = {
        NETWORKS_ENDPOINT: "/api/v1/networks/",
        NETWORKS_INSPECT_ENDPOINT: "/api/v1/inspect/networks/",
        SERVICELBS_INSPECT_ENDPOINT: "/api/v1/inspect/serviceLBs/",
        POLICIES_ENDPOINT: "/api/v1/policys/",
        POLICIES_INSPECT_ENDPOINT: "/api/v1/inspect/policys/",
        RULES_ENDPOINT: "/api/v1/rules/",
        APPLICATIONGROUPS_ENDPOINT: "/api/v1/endpointGroups/",
        APPLICATIONGROUPS_INSPECT_ENDPOINT: "/api/v1/inspect/endpointGroups/",
        SERVICELBS_ENDPOINT: "/api/v1/serviceLBs/",
        ORGANIZATIONS_ENDPOINT: "/api/v1/tenants/",
        NETWORK_SETTINGS_ENDPOINT: "/api/v1/globals/",
        GLOBAL_NETWORK_INSPECT_ENDPOINT: "/api/v1/inspect/globals/",
        ACI_SETTINGS_ENDPOINT: "/api/v1/aciGws/",
        NETPROFILES_ENDPOINT: "/api/v1/netprofiles/",
        BGPS_ENDPOINT: "/api/v1/Bgps/",
        BGPS_INSPECT_ENDPOINT: "/api/v1/inspect/Bgps/",
        APP_PROFILES_ENDPOINT: "/api/v1/appProfiles/",
        CONTRACTS_ENDPOINT: "/api/v1/extContractsGroups/",
        VISUALIZATION_ENDPOINT: "/visualization/",
        LOGIN_ENDPOINT: "/api/v1/auth_proxy/login/",
        USERS_ENDPOINT: "/api/v1/auth_proxy/local_users/",
        LDAP_ENDPOINT: "/api/v1/auth_proxy/ldap_configuration/",
        AUTHORIZATION_ENDPOINT: "/api/v1/auth_proxy/authorizations/",
        REFRESH_INTERVAL: 5e3,
        CIDR_REGEX: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(/([0-9]|[1-2][0-9]|3[0-2]))$",
        PVTSUBNET_REGEX: "^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])).0.0)/16$",
        VLAN_REGEX: "^([0-9]{1,4}?-[0-9]{1,4}?)$",
        VXLAN_REGEX: "^([0-9]{1,8}?-[0-9]{1,8}?)$",
        NUMBER_REGEX: "^[0-9]*$",
        USERNAME_REGEX: /^([a-zA-Z0-9\_\-\.\@])+$/,
        LDAPGROUP_REGEX: /([\=])+/g,
        NETWORK_NAME_REGEX: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/,
        PRODUCT_NAME: "HousjNet",
        PRODUCT_VERSION: "TP_1.0.0"
    }
}, , , function(e, t, n) {
    (function(e, o) {
        function inspect(e, n) {
            var o = {
                seen: [],
                stylize: stylizeNoColor
            };
            return arguments.length >= 3 && (o.depth = arguments[2]), arguments.length >= 4 && (o.colors = arguments[3]), isBoolean(n) ? o.showHidden = n : n && t._extend(o, n), isUndefined(o.showHidden) && (o.showHidden = !1), isUndefined(o.depth) && (o.depth = 2), isUndefined(o.colors) && (o.colors = !1), isUndefined(o.customInspect) && (o.customInspect = !0), o.colors && (o.stylize = stylizeWithColor), formatValue(o, e, o.depth)
        }
        function stylizeWithColor(e, t) {
            var n = inspect.styles[t];
            return n ? "[" + inspect.colors[n][0] + "m" + e + "[" + inspect.colors[n][1] + "m" : e
        }
        function stylizeNoColor(e, t) {
            return e
        }
        function arrayToHash(e) {
            var t = {};
            return e.forEach(function(e, n) {
                t[e] = !0
            }), t
        }
        function formatValue(e, n, o) {
            if (e.customInspect && n && isFunction(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var i = n.inspect(o, e);
                return isString(i) || (i = formatValue(e, i, o)), i
            }
            var r = formatPrimitive(e, n);
            if (r)
                return r;
            var a = Object.keys(n),
                s = arrayToHash(a);
            if (e.showHidden && (a = Object.getOwnPropertyNames(n)), isError(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
                return formatError(n);
            if (0 === a.length) {
                if (isFunction(n)) {
                    var c = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + c + "]", "special")
                }
                if (isRegExp(n))
                    return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (isDate(n))
                    return e.stylize(Date.prototype.toString.call(n), "date");
                if (isError(n))
                    return formatError(n)
            }
            var l = "",
                d = !1,
                p = ["{", "}"];
            if (isArray(n) && (d = !0, p = ["[", "]"]), isFunction(n)) {
                var u = n.name ? ": " + n.name : "";
                l = " [Function" + u + "]"
            }
            if (isRegExp(n) && (l = " " + RegExp.prototype.toString.call(n)), isDate(n) && (l = " " + Date.prototype.toUTCString.call(n)), isError(n) && (l = " " + formatError(n)), 0 === a.length && (!d || 0 == n.length))
                return p[0] + l + p[1];
            if (0 > o)
                return isRegExp(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(n);
            var f;
            return f = d ? formatArray(e, n, o, s, a) : a.map(function(t) {
                return formatProperty(e, n, o, s, t, d)
            }), e.seen.pop(), reduceToSingleString(f, l, p)
        }
        function formatPrimitive(e, t) {
            if (isUndefined(t))
                return e.stylize("undefined", "undefined");
            if (isString(t)) {
                var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(n, "string")
            }
            return isNumber(t) ? e.stylize("" + t, "number") : isBoolean(t) ? e.stylize("" + t, "boolean") : isNull(t) ? e.stylize("null", "null") : void 0
        }
        function formatError(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }
        function formatArray(e, t, n, o, i) {
            for (var r = [], a = 0, s = t.length; s > a; ++a)
                hasOwnProperty(t, String(a)) ? r.push(formatProperty(e, t, n, o, String(a), !0)) : r.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || r.push(formatProperty(e, t, n, o, i, !0))
            }), r
        }
        function formatProperty(e, t, n, o, i, r) {
            var a,
                s,
                c;
            if (c = Object.getOwnPropertyDescriptor(t, i) || {
                value: t[i]
            }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), hasOwnProperty(o, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = isNull(n) ? formatValue(e, c.value, null) : formatValue(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = r ? s.split("\n").map(function(e) {
                return "  " + e
            }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                return "   " + e
            }).join("\n"))) : s = e.stylize("[Circular]", "special")), isUndefined(a)) {
                if (r && i.match(/^\d+$/))
                    return s;
                a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
            }
            return a + ": " + s
        }
        function reduceToSingleString(e, t, n) {
            var o = 0,
                i = e.reduce(function(e, t) {
                    return o++, t.indexOf("\n") >= 0 && o++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
            return i > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
        }
        function isArray(e) {
            return Array.isArray(e)
        }
        function isBoolean(e) {
            return "boolean" == typeof e
        }
        function isNull(e) {
            return null === e
        }
        function isNullOrUndefined(e) {
            return null == e
        }
        function isNumber(e) {
            return "number" == typeof e
        }
        function isString(e) {
            return "string" == typeof e
        }
        function isSymbol(e) {
            return "symbol" == typeof e
        }
        function isUndefined(e) {
            return void 0 === e
        }
        function isRegExp(e) {
            return isObject(e) && "[object RegExp]" === objectToString(e)
        }
        function isObject(e) {
            return "object" == typeof e && null !== e
        }
        function isDate(e) {
            return isObject(e) && "[object Date]" === objectToString(e)
        }
        function isError(e) {
            return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error)
        }
        function isFunction(e) {
            return "function" == typeof e
        }
        function isPrimitive(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
        }
        function objectToString(e) {
            return Object.prototype.toString.call(e)
        }
        function pad(e) {
            return 10 > e ? "0" + e.toString(10) : e.toString(10)
        }
        function timestamp() {
            var e = new Date,
                t = [pad(e.getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":");
            return [e.getDate(), s[e.getMonth()], t].join(" ")
        }
        function hasOwnProperty(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        var i = /%[sdj%]/g;
        t.format = function(e) {
            if (!isString(e)) {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t.push(inspect(arguments[n]));
                return t.join(" ")
            }
            for (var n = 1, o = arguments, r = o.length, a = String(e).replace(i, function(e) {
                    if ("%%" === e)
                        return "%";
                    if (n >= r)
                        return e;
                    switch (e) {
                    case "%s":
                        return String(o[n++]);
                    case "%d":
                        return Number(o[n++]);
                    case "%j":
                        try {
                            return JSON.stringify(o[n++])
                        } catch (t) {
                            return "[Circular]"
                        }
                    default:
                        return e
                    }
                }), s = o[n]; r > n; s = o[++n])
                a += isNull(s) || !isObject(s) ? " " + s : " " + inspect(s);
            return a
        }, t.deprecate = function(n, i) {
            function deprecated() {
                if (!r) {
                    if (o.throwDeprecation)
                        throw new Error(i);
                    o.traceDeprecation ? console.trace(i) : console.error(i), r = !0
                }
                return n.apply(this, arguments)
            }
            if (isUndefined(e.process))
                return function() {
                    return t.deprecate(n, i).apply(this, arguments)
                };
            if (o.noDeprecation === !0)
                return n;
            var r = !1;
            return deprecated
        };
        var r,
            a = {};
        t.debuglog = function(e) {
            if (isUndefined(r) && (r = {
                ENV: "production"
            }.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e])
                if (new RegExp("\\b" + e + "\\b", "i").test(r)) {
                    var n = o.pid;
                    a[e] = function() {
                        var o = t.format.apply(t, arguments);
                        console.error("%s %d: %s", e, n, o)
                    }
                } else
                    a[e] = function() {};
            return a[e]
        }, t.inspect = inspect, inspect.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, inspect.styles = {
            special: "cyan",
            number: "yellow",
            "boolean": "yellow",
            undefined: "grey",
            "null": "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = isArray, t.isBoolean = isBoolean, t.isNull = isNull, t.isNullOrUndefined = isNullOrUndefined, t.isNumber = isNumber, t.isString = isString, t.isSymbol = isSymbol, t.isUndefined = isUndefined, t.isRegExp = isRegExp, t.isObject = isObject, t.isDate = isDate, t.isError = isError, t.isFunction = isFunction, t.isPrimitive = isPrimitive, t.isBuffer = n(1031);
        var s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function() {
            console.log("%s - %s", timestamp(), t.format.apply(t, arguments))
        }, t.inherits = n(1030), t._extend = function(e, t) {
            if (!t || !isObject(t))
                return e;
            for (var n = Object.keys(t), o = n.length; o--;)
                e[n[o]] = t[n[o]];
            return e
        }
    }).call(t, function() {
        return this
    }(), n(368))
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(24),
        s = n(16),
        c = n(49),
        l = function() {
            function ApiService(e, t) {
                this.http = e, this.authService = t, this.authServiceRef = t
            }
            return ApiService.prototype.get = function(e) {
                var t = this,
                    n = this.prepareHeader("get");
                return this.http.get(e, n)["catch"](function(e) {
                    return t.checkUnauthorized(e), s.Observable["throw"](e)
                })
            }, ApiService.prototype.put = function(e, t) {
                var n = this,
                    o = this.prepareHeader("put");
                return this.http.put(e, t, o)["catch"](function(e) {
                    return n.checkUnauthorized(e), s.Observable["throw"](e)
                })
            }, ApiService.prototype.post = function(e, t) {
                var n = this,
                    o = this.prepareHeader("post");
                return this.http.post(e, t, o)["catch"](function(e) {
                    return n.checkUnauthorized(e), s.Observable["throw"](e)
                })
            }, ApiService.prototype["delete"] = function(e) {
                var t = this,
                    n = this.prepareHeader("delete");
                return this.http["delete"](e, n)["catch"](function(e) {
                    return t.checkUnauthorized(e), s.Observable["throw"](e)
                })
            }, ApiService.prototype.patch = function(e, t) {
                var n = this,
                    o = this.prepareHeader("patch");
                return this.http.patch(e, t, o)["catch"](function(e) {
                    return n.checkUnauthorized(e), s.Observable["throw"](e)
                })
            }, ApiService.prototype.prepareHeader = function(e) {
                this.headers = new a.Headers, "get" != e && "delete" != e && this.headers.append("Content-Type", "application/json"), this.authService.authToken.length > 0 && this.headers.append("X-Auth-Token", this.authService.authToken);
                var t = new a.RequestOptions({
                    headers: this.headers
                });
                return t
            }, ApiService.prototype.checkUnauthorized = function(e) {
                this.authService.isLoggedIn && (401 !== e.status && 403 !== e.status || (this.authService.isLoggedIn = !1))
            }, ApiService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.Http && a.Http) && e || Object, "function" == typeof (t = "undefined" != typeof c.AuthService && c.AuthService) && t || Object])], ApiService);
            var e,
                t
        }();
    t.ApiService = l
}, , , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = function(e) {
            function OrganizationsModel(t, n) {
                e.call(this, t, l.ContivGlobals.ORGANIZATIONS_ENDPOINT, n)
            }
            return o(OrganizationsModel, e), OrganizationsModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], OrganizationsModel);
            var t,
                n
        }(c.Collection);
    t.OrganizationsModel = p
}, , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(20),
        s = n(413),
        c = n(420),
        l = n(23),
        d = n(411),
        p = n(412),
        u = n(415),
        f = n(419),
        v = n(416),
        h = n(414),
        m = n(150),
        g = n(102),
        y = n(417),
        b = n(421),
        w = n(124),
        C = n(422),
        R = n(418),
        S = n(123),
        k = function() {
            function DirectivesModule() {}
            return DirectivesModule = o([r.NgModule({
                imports: [a.CommonModule, l.FormsModule, m.ChartsModule, l.ReactiveFormsModule],
                declarations: [s.ErrorMessageComponent, c.CtvTableComponent, c.CtvThComponent, c.CtvSearchComponent, c.CtvTpaginationComponent, d.CtvAccordionComponent, p.CtvCollapsibleComponent, u.CtvNamevalueComponent, C.VerifydomDirective, f.NetworkSettingComponent, v.AciSettingComponent, h.LineGraphComponent, g.NotificationComponent, y.LdapSettingsComponent, b.TooltipComponent, w.UserProfileEditComponent, R.NetworkCreateformComponent, S.TenantCreateComponent],
                exports: [s.ErrorMessageComponent, c.CtvTableComponent, c.CtvThComponent, c.CtvSearchComponent, c.CtvTpaginationComponent, d.CtvAccordionComponent, p.CtvCollapsibleComponent, u.CtvNamevalueComponent, C.VerifydomDirective, f.NetworkSettingComponent, v.AciSettingComponent, h.LineGraphComponent, g.NotificationComponent, y.LdapSettingsComponent, b.TooltipComponent, w.UserProfileEditComponent, R.NetworkCreateformComponent, S.TenantCreateComponent]
            }), i("design:paramtypes", [])], DirectivesModule)
        }();
    t.DirectivesModule = k
}, , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = n(423),
        r = n(28),
        a = n(14),
        s = function(e) {
            function Collection(t, n, o) {
                e.call(this, t, n, o), this.inspectStats = {}, this.cudOperationFlag = !1
            }
            return o(Collection, e), Collection.prototype.create = function(e, t, n) {
                var o = this;
                a.isUndefined(n) && (n = "key");
                var i = new Promise(function(i, a) {
                    void 0 === t && (t = o.url + e.key + "/"), o.cudOperationFlag = !0, o.apiService.post(t, e).map(function(e) {
                        return o.filterAsyncReq(e)
                    }).toPromise().then(function(t) {
                        var a = t;
                        void 0 !== a && "" !== a || (a = e), r.remove(o.models, function(t) {
                            return t[n] == e[n]
                        }), o.models.push(a), o.cudOperationFlag = !1, i(a)
                    }, function(e) {
                        o.cudOperationFlag = !1, a(e)
                    })
                });
                return i
            }, Collection.prototype.save = function(e) {
                var t = this,
                    n = new Promise(function(n, o) {
                        var i = t.url + e.key + "/";
                        t.cudOperationFlag = !0, t.apiService.put(i, e).map(function(e) {
                            return t.filterAsyncReq(e)
                        }).toPromise().then(function(o) {
                            r.remove(t.models, function(t) {
                                return t.key == e.key
                            }), t.models.push(o), t.cudOperationFlag = !1, n(o)
                        }, function(e) {
                            t.cudOperationFlag = !1, o(e)
                        })
                    });
                return n
            }, Collection.prototype["delete"] = function(e) {
                var t = this,
                    n = new Promise(function(n, o) {
                        var i = t.url + e.key + "/";
                        t.cudOperationFlag = !0, t.apiService["delete"](i).map(function(e) {
                            return t.filterAsyncReq(e)
                        }).toPromise().then(function(o) {
                            r.remove(t.models, function(t) {
                                return t.key == e.key
                            }), t.cudOperationFlag = !1, n(o)
                        }, function(e) {
                            t.cudOperationFlag = !1, o(e)
                        })
                    });
                return n
            }, Collection.prototype.deleteUsingKey = function(e, t, n) {
                var o = this;
                void 0 === t && (t = "key");
                var i = new Promise(function(i, a) {
                    void 0 === n && (n = o.url + e + "/"), o.cudOperationFlag = !0, o.apiService["delete"](n).map(function(t) {
                        return "No Content" === t.statusText ? e : o.filterAsyncReq(t)
                    }).toPromise().then(function(n) {
                        r.remove(o.models, function(n) {
                            return n[t] == e
                        }), o.cudOperationFlag = !1, i(n)
                    }, function(e) {
                        o.cudOperationFlag = !1, a(e)
                    })
                });
                return i
            }, Collection.prototype.getInspectByKey = function(e, t, n) {
                var o = this,
                    i = new Promise(function(i, r) {
                        e in o.inspectStats && 0 == n ? i(o.inspectStats[e]) : o.apiService.get(t + e + "/").map(function(e) {
                            return o.filterAsyncReq(e)
                        }).toPromise().then(function(t) {
                            var n = t;
                            o.inspectStats[e] = n, i(n)
                        }, function(e) {
                            r(e)
                        })
                    });
                return i
            }, Collection
        }(i.BaseCollection);
    t.Collection = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(14),
        d = n(11),
        p = n(27),
        u = function(e) {
            function NetworksModel(t, n) {
                e.call(this, t, d.ContivGlobals.NETWORKS_ENDPOINT, n)
            }
            return o(NetworksModel, e), NetworksModel.prototype.getInspectByKey = function(t, n, o) {
                return e.prototype.getInspectByKey.call(this, t, n, o).then(function(e) {
                    if (!l.isUndefined(e.Oper.endpoints)) {
                        for (var t = e.Oper.endpoints, n = 0; n < t.length; n++)
                            l.isUndefined(t[n].containerID) && (t[n].containerID = t[n].endpointID, t[n].containerName = t[n].endpointID.toString().substr(0, 6));
                        e.Oper.endpoints = t
                    }
                    return e
                })
            }, NetworksModel.prototype.get = function(t) {
                var n = this;
                return n.cudOperationFlag ? new Promise(function(e, t) {
                    e(n.models)
                }) : e.prototype.get.call(this, t)
            }, NetworksModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof p.ApiService && p.ApiService) && n || Object])], NetworksModel);
            var t,
                n
        }(c.Collection);
    t.NetworksModel = u
}, , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = n(14),
        u = function(e) {
            function ApplicationGroupsModel(t, n) {
                e.call(this, t, l.ContivGlobals.APPLICATIONGROUPS_ENDPOINT, n)
            }
            return o(ApplicationGroupsModel, e), ApplicationGroupsModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.groupName
            }, ApplicationGroupsModel.prototype.getInspectByKey = function(t, n, o) {
                return e.prototype.getInspectByKey.call(this, t, n, o).then(function(e) {
                    if (!p.isUndefined(e.Oper.endpoints)) {
                        for (var t = e.Oper.endpoints, n = 0; n < t.length; n++)
                            p.isUndefined(t[n].containerID) && (t[n].containerID = t[n].endpointID, t[n].containerName = t[n].endpointID.toString().substr(0, 6));
                        e.Oper.endpoints = t
                    }
                    return e
                })
            }, ApplicationGroupsModel.prototype.get = function(t) {
                return e.prototype.get.call(this, t).then(function(e) {
                    for (var t = [], n = 0, o = e; n < o.length; n++) {
                        var i = o[n];
                        "undefined" == typeof i.policies && (i.policies = []), "undefined" == typeof i.networkName && (i.networkName = ""), t.push(i)
                    }
                    return t
                })
            }, ApplicationGroupsModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], ApplicationGroupsModel);
            var t,
                n
        }(c.Collection);
    t.ApplicationGroupsModel = u
}, , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(1),
        s = n(24),
        c = n(176),
        l = n(14),
        d = n(11),
        p = function() {
            function AuthService(e) {
                this.http = e, this.isLoggedIn = !1, this.localUser = !0, this.isLoggedIn = !1, this.redirectUrl = "", this.accessMatrix = c.AuthMatrix, this.authTokenPayload = {}, this.authToken = ""
            }
            return AuthService.prototype.checkAccess = function(e) {
                var t = e.replace("/m/", "");
                (t.indexOf("details") > -1 || t.indexOf("edit") > -1) && (t = t.replace(/\/[^\/]*$/, "")), t.indexOf("policyTab") > -1 && (t = t.replace(/;[^\/]*$/, ""));
                var n = this.authTokenPayload.role;
                return "y" == this.accessMatrix[t][n]
            }, AuthService.prototype.login = function(e) {
                var t = this;
                this.headers = new s.Headers, this.username = e.username, this.headers.append("Content-Type", "application/json");
                var n = new s.RequestOptions({
                    headers: this.headers
                });
                return this.http.post(d.ContivGlobals.LOGIN_ENDPOINT, e, n).map(function(e) {
                    var n = t.extractToken(e);
                    return n ? (t.isLoggedIn = !0, !0) : (t.isLoggedIn = !1, !1)
                })["catch"](function(e) {
                    return a.Observable["throw"](e)
                })
            }, AuthService.prototype.encodeUrlData = function(e) {
                var t = Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&");
                return t
            }, AuthService.prototype.extractToken = function(e) {
                var t = e.json().token;
                return t.length > 0 ? (localStorage.setItem("authToken", t), localStorage.setItem("lastAccessTime", (new Date).getTime().toString()), localStorage.setItem("username", this.username), this.extractBody(), !0) : !1
            }, AuthService.prototype.extractBody = function() {
                var e = localStorage.getItem("authToken");
                this.authToken = e;
                var t = e.split(".")[1],
                    n = atob(t);
                this.authTokenPayload = JSON.parse(n), l.isNull(this.authTokenPayload.username.match(d.ContivGlobals.LDAPGROUP_REGEX)) || (this.localUser = !1), this.username = localStorage.getItem("username")
            }, AuthService.prototype.validateExpiry = function() {
                var e = new Date,
                    t = localStorage.getItem("lastAccessTime");
                if (l.isNull(t))
                    return !1;
                var n = (e.getTime() - parseInt(t)) / 6e4;
                return n >= 0 && 60 > n ? (localStorage.setItem("lastAccessTime", e.getTime().toString()), !0) : !1
            }, AuthService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.Http && s.Http) && e || Object])], AuthService);
            var e
        }();
    t.AuthService = p
}, , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = n(14),
        u = function(e) {
            function PoliciesModel(t, n) {
                e.call(this, t, l.ContivGlobals.POLICIES_ENDPOINT, n)
            }
            return o(PoliciesModel, e), PoliciesModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.policyName
            }, PoliciesModel.prototype.getInspectByKey = function(t, n, o) {
                return e.prototype.getInspectByKey.call(this, t, n, o).then(function(e) {
                    if (!p.isUndefined(e.Oper.endpoints)) {
                        for (var t = e.Oper.endpoints, n = 0; n < t.length; n++)
                            p.isUndefined(t[n].containerID) && (t[n].containerID = t[n].endpointID, t[n].containerName = t[n].endpointID.toString().substr(0, 6));
                        e.Oper.endpoints = t
                    }
                    return e
                })
            }, PoliciesModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], PoliciesModel);
            var t,
                n
        }(c.Collection);
    t.PoliciesModel = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5);
    !function(e) {
        e[e.isolation = 0] = "isolation", e[e.bandwidth = 1] = "bandwidth", e[e.contractGroup = 2] = "contractGroup"
    }(t.PolicyTab || (t.PolicyTab = {}));
    var s = t.PolicyTab,
        c = function() {
            function NetworkPoliciesTabsComponent(e, t) {
                this.activatedRoute = e, this.router = t, this.isolationPolicySelected = !0, this.bandwidthPolicySelected = !1, this.contractGroupSelected = !1, this.policyTab = s, this.policyMode = "isolation", this.selectPolicyTab(+e.snapshot.params.policyTab)
            }
            return NetworkPoliciesTabsComponent.prototype.createNetworkPolicy = function() {
                this.isolationPolicySelected && this.router.navigate(["../isolation/create"], {
                    relativeTo: this.activatedRoute
                }), this.bandwidthPolicySelected && this.router.navigate(["../bandwidth/create"], {
                    relativeTo: this.activatedRoute
                }), this.contractGroupSelected && this.router.navigate(["../contractgroup/create"], {
                    relativeTo: this.activatedRoute
                })
            }, NetworkPoliciesTabsComponent.prototype.selectPolicyTab = function(e) {
                switch (e) {
                case s.isolation:
                    this.isolationPolicySelected = !0, this.bandwidthPolicySelected = !1, this.contractGroupSelected = !1, this.policyMode = "isolation";
                    break;
                case s.bandwidth:
                    this.isolationPolicySelected = !1, this.bandwidthPolicySelected = !0, this.contractGroupSelected = !1, this.policyMode = "bandwidth";
                    break;
                case s.contractGroup:
                    this.isolationPolicySelected = !1, this.bandwidthPolicySelected = !1, this.contractGroupSelected = !0, this.policyMode = "contractgroup";
                    break;
                default:
                    this.isolationPolicySelected = !0, this.bandwidthPolicySelected = !1, this.contractGroupSelected = !1, this.policyMode = "isolation"
                }
            }, NetworkPoliciesTabsComponent = o([r.Component({
                selector: "networkpoliciestabs",
                template: n(730)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object])], NetworkPoliciesTabsComponent);
            var e,
                t
        }();
    t.NetworkPoliciesTabsComponent = c
}, , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = function(e) {
            function BgpsModel(t, n) {
                e.call(this, t, l.ContivGlobals.BGPS_ENDPOINT, n)
            }
            return o(BgpsModel, e), BgpsModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], BgpsModel);
            var t,
                n
        }(c.Collection);
    t.BgpsModel = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = function(e) {
            function ServicelbsModel(t, n) {
                e.call(this, t, l.ContivGlobals.SERVICELBS_ENDPOINT, n)
            }
            return o(ServicelbsModel, e), ServicelbsModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], ServicelbsModel);
            var t,
                n
        }(c.Collection);
    t.ServicelbsModel = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = n(28),
        u = n(14),
        f = function(e) {
            function UsersModel(t, n) {
                e.call(this, t, l.ContivGlobals.USERS_ENDPOINT, n)
            }
            return o(UsersModel, e), UsersModel.prototype.save = function(e) {
                var t = this,
                    n = l.ContivGlobals.USERS_ENDPOINT + e.username + "/";
                return this.apiService.patch(n, e).map(function(e) {
                    return e.json()
                }).toPromise().then(function(n) {
                    return p.remove(t.models, function(t) {
                        return t.username == e.username
                    }), t.models.push(n), n
                })
            }, UsersModel.prototype.getModelByKey = function(t, n, o, i) {
                var r = this;
                return u.isUndefined(i) || 0 != r.models.length ? e.prototype.getModelByKey.call(this, t, n, o) : this.apiService.get(i).map(function(e) {
                    return e.json()
                }).toPromise()
            }, UsersModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], UsersModel);
            var t,
                n
        }(c.Collection);
    t.UsersModel = f
}, , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = function(e) {
            function ContractGroupsModel(t, n) {
                e.call(this, t, l.ContivGlobals.CONTRACTS_ENDPOINT, n)
            }
            return o(ContractGroupsModel, e), ContractGroupsModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.contractsGroupName
            }, ContractGroupsModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], ContractGroupsModel);
            var t,
                n
        }(c.Collection);
    t.ContractGroupsModel = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = n(14),
        u = function(e) {
            function NetprofilesModel(t, n) {
                e.call(this, t, l.ContivGlobals.NETPROFILES_ENDPOINT, n)
            }
            return o(NetprofilesModel, e), NetprofilesModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.profileName
            }, NetprofilesModel.prototype.get = function(t) {
                return e.prototype.get.call(this, t).then(function(e) {
                    var t = e.filter(function(e) {
                        return !p.isUndefined(e.profileName)
                    });
                    return t
                })
            }, NetprofilesModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], NetprofilesModel);
            var t,
                n
        }(c.Collection);
    t.NetprofilesModel = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(87),
        s = n(39),
        c = function() {
            function FirstRunWizardService(e, t) {
                this.networkService = e, this.networksModel = t, this.globalInspect = {}, this.clusterMode = "", this.skipArray = [!1, !1, !1], this.defaults = {}, this.showLoader = !0, this.initialize()
            }
            return FirstRunWizardService.prototype.initialize = function() {
                this.setting = {
                    networkInfraType: "",
                    vlans: "",
                    vxlans: "",
                    fwdMode: "",
                    arpMode: ""
                }, this.aciSetting = {
                    key: "",
                    enforcePolicies: "no",
                    includeCommonTenant: "no",
                    name: "",
                    nodeBindings: "",
                    pathBindings: "",
                    physicalDomain: ""
                }, this.newNetwork = {
                    networkName: "",
                    encap: "vlan",
                    subnet: "",
                    gateway: "",
                    tenantName: "",
                    key: "",
                    nwType: "data",
                    pktTag: null,
                    cfgdTag: ""
                }
            }, FirstRunWizardService.prototype.getNetworkSettings = function() {
                var e = this;
                this.showLoader = !0, this.networkService.getSettings().then(function(t) {
                    e.showLoader = !1, e.setting = t, e.defaults.setting = Object.assign({}, e.setting)
                }, function(e) {})
            }, FirstRunWizardService.prototype.getAciSettings = function() {
                var e = this;
                this.networkService.getAciSettings().then(function(t) {
                    e.aciSetting = t, e.defaults.aciSetting = Object.assign({}, e.aciSetting)
                }, function(e) {})
            }, FirstRunWizardService.prototype.getGlobalInspect = function() {
                var e = this;
                this.networkService.getGlobalInspect().then(function(t) {
                    e.globalInspect = t.Oper, e.clusterMode = e.globalInspect.clusterMode
                }, function(e) {})
            }, FirstRunWizardService.prototype.updateSettings = function() {
                var e = this;
                "aci" === e.setting.networkInfraType ? e.networkService.setAciMode(!0) : e.networkService.setAciMode(!1);
                var t = new Promise(function(t, n) {
                    t(1 == e.skipArray[0] ? "skip" : e.networkService.updateSettings(e.setting))
                });
                return t.then(function(t) {
                    return 1 == e.skipArray[1] ? "skip" : e.networkService.updateAciSettings(e.aciSetting)
                }).then(function(t) {
                    return 1 == e.skipArray[2] ? "skip" : (e.newNetwork.key = e.newNetwork.tenantName + ":" + e.newNetwork.networkName, e.networksModel.create(e.newNetwork, void 0))
                })
            }, FirstRunWizardService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.NetworkService && a.NetworkService) && e || Object, "function" == typeof (t = "undefined" != typeof s.NetworksModel && s.NetworksModel) && t || Object])], FirstRunWizardService);
            var e,
                t
        }();
    t.FirstRunWizardService = c
}, , , function(e, t, n) {
    (function(e, o) {
        var i = n(665),
            r = {
                "function": !0,
                object: !0
            },
            a = r[typeof t] && t && !t.nodeType ? t : void 0,
            s = r[typeof e] && e && !e.nodeType ? e : void 0,
            c = i(a && s && "object" == typeof o && o),
            l = i(r[typeof self] && self),
            d = i(r[typeof window] && window),
            p = i(r[typeof this] && this),
            u = c || d !== (p && p.window) && d || l || p || Function("return this")();
        e.exports = u
    }).call(t, n(122)(e), function() {
        return this
    }())
}, , , function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(11),
        d = n(27),
        p = function(e) {
            function AppProfilesModel(t, n) {
                e.call(this, t, l.ContivGlobals.APP_PROFILES_ENDPOINT, n)
            }
            return o(AppProfilesModel, e), AppProfilesModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.appProfileName
            }, AppProfilesModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof d.ApiService && d.ApiService) && n || Object])], AppProfilesModel);
            var t,
                n
        }(c.Collection);
    t.AppProfilesModel = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(11),
        c = n(24),
        l = n(27),
        d = n(38),
        p = function(e) {
            function AuthorizationModel(t, n) {
                e.call(this, t, s.ContivGlobals.AUTHORIZATION_ENDPOINT, n)
            }
            return o(AuthorizationModel, e), AuthorizationModel.prototype["delete"] = function(t) {
                var n = this,
                    o = n.url + t + "/";
                return e.prototype.deleteUsingKey.call(this, t, "AuthzUUID", o)
            }, AuthorizationModel.prototype.save = function(e) {
                var t = this,
                    n = s.ContivGlobals.AUTHORIZATION_ENDPOINT + e.AuthzUUID + "/";
                return this.apiService.patch(n, e).map(function(e) {
                    return e.json()
                }).toPromise().then(function(n) {
                    return _.remove(t.models, function(t) {
                        return t.AuthzUUID == e.AuthzUUID
                    }), t.models.push(n), n
                })
            }, AuthorizationModel.prototype.create = function(e) {
                var t = this;
                return this.apiService.post(s.ContivGlobals.AUTHORIZATION_ENDPOINT, e).map(function(e) {
                    return e.json()
                }).toPromise().then(function(n) {
                    return _.remove(t.models, function(t) {
                        return t.PrincipalName == e.PrincipalName && t.TenantName == e.TenantName && t.Role == e.Role
                    }), t.models.push(n), n
                })
            }, AuthorizationModel.prototype.get = function(t) {
                var n = this;
                return e.prototype.get.call(this, t).then(function(e) {
                    return n.filterResult(e)
                })
            }, AuthorizationModel.prototype.filterResult = function(e) {
                for (var t = [], n = 0, o = e; n < o.length; n++) {
                    var i = o[n];
                    "ops" === i.Role && "" === i.TenantName || t.push(i)
                }
                return t
            }, AuthorizationModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof c.Http && c.Http) && t || Object, "function" == typeof (n = "undefined" != typeof l.ApiService && l.ApiService) && n || Object])], AuthorizationModel);
            var t,
                n
        }(d.Collection);
    t.AuthorizationModel = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(16),
        s = n(49),
        c = n(11),
        l = n(27),
        d = n(14);
    !function(e) {
        e[e.Network = 0] = "Network", e[e.ApplicationGroup = 1] = "ApplicationGroup"
    }(t.EndpointType || (t.EndpointType = {}));
    var p = t.EndpointType,
        u = function() {
            function ChartService(e, t) {
                this.authService = e, this.apiService = t, this.networks = [], this.netInspect = {}, this.graphData = {
                    0: {},
                    1: {}
                }, this.source = new a.Subject, this.stream = this.source.asObservable()
            }
            return ChartService.prototype.getInspectData = function(e, t, n) {
                var o = this;
                this.apiService.get(e).map(function(e) {
                    return e.json()
                }).subscribe(function(e) {
                    for (var i = 0, r = e; i < r.length; i++) {
                        var a = r[i],
                            s = a.key;
                        o.apiService.get(t + s + "/").map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            var t = e.Config.key;
                            d.isUndefined(e.Oper.numEndpoints) ? o.generateGraphData(t, 0, n) : o.generateGraphData(t, e.Oper.numEndpoints, n)
                        }, function(e) {})
                    }
                }, function(e) {})
            }, ChartService.prototype.generateGraphData = function(e, t, n) {
                if (d.isUndefined(this.graphData[n][e])) {
                    this.graphData[n][e] = [];
                    for (var o = 0; 15 > o; o++)
                        this.graphData[n][e].push(t)
                } else
                    this.graphData[n][e].push(t), this.source.next({
                        iKey: e,
                        count: t,
                        type: n
                    })
            }, ChartService.prototype.cleanBuffer = function() {
                this.networks = [], this.netInspect = {}, this.graphData = {
                    0: {},
                    1: {}
                }, this.refresh.unsubscribe()
            }, ChartService.prototype.startpolling = function() {
                var e = this;
                this.authService.isLoggedIn && (this.getInspectData(c.ContivGlobals.NETWORKS_ENDPOINT, c.ContivGlobals.NETWORKS_INSPECT_ENDPOINT, p.Network), this.getInspectData(c.ContivGlobals.APPLICATIONGROUPS_ENDPOINT, c.ContivGlobals.APPLICATIONGROUPS_INSPECT_ENDPOINT, p.ApplicationGroup)), this.refresh = a.Observable.interval(3e4).subscribe(function() {
                    e.authService.isLoggedIn && (e.getInspectData(c.ContivGlobals.NETWORKS_ENDPOINT, c.ContivGlobals.NETWORKS_INSPECT_ENDPOINT, p.Network), e.getInspectData(c.ContivGlobals.APPLICATIONGROUPS_ENDPOINT, c.ContivGlobals.APPLICATIONGROUPS_INSPECT_ENDPOINT, p.ApplicationGroup))
                })
            }, ChartService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.AuthService && s.AuthService) && e || Object, "function" == typeof (t = "undefined" != typeof l.ApiService && l.ApiService) && t || Object])], ChartService);
            var e,
                t
        }();
    t.ChartService = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(16),
        s = n(39),
        c = n(31),
        l = function() {
            function FirstRunService(e, t) {
                this.networksModel = e, this.organizationsModel = t, this.firstrunSubject = new a.Subject, this.firstrunObservable = this.firstrunSubject.asObservable(), this.firstRun = !1, this.firstRunCompleted = !1
            }
            return FirstRunService.prototype.setFirstRun = function(e) {
                var t = this;
                return !this.firstRunCompleted || e ? this.checkFirstRun().then(function(e) {
                    return t.firstRun = e, t.firstrunSubject.next(t.firstRun), t.firstRunCompleted = !0, t.firstRun
                }) : new Promise(function(e, n) {
                    e(t.firstRun)
                })
            }, FirstRunService.prototype.checkFirstRun = function() {
                var e = this;
                return this.networksModel.get(!0).then(function(t) {
                    return t.length ? !1 : e.organizationsModel.get(!0).then(function(e) {
                        return !e.length || 1 === e.length && "default" === e[0].tenantName
                    })
                }, function(e) {})
            }, FirstRunService.prototype.resetCheck = function() {
                this.firstRunCompleted = !1
            }, FirstRunService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.NetworksModel && s.NetworksModel) && e || Object, "function" == typeof (t = "undefined" != typeof c.OrganizationsModel && c.OrganizationsModel) && t || Object])], FirstRunService);
            var e,
                t
        }();
    t.FirstRunService = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(14),
        s = function() {
            function InspectService() {}
            return InspectService.prototype.buildEndPoints = function(e) {
                var t = {};
                for (var n in e) {
                    var o = [];
                    for (var i in e[n]) {
                        var r = {};
                        switch (r.name = i, r.format = "none", r.type = "string", i) {
                        case "ipAddress":
                            r.value = e[n][i].filter(function(e) {
                                return e.length > 0
                            }).join();
                            break;
                        case "labels":
                            r.value = e[n][i].replace(/(map\[|\])/gi, "").replace(/(:)/gi, "=").split(" ").filter(function(e) {
                                return e.length > 0
                            }), r.format = "label", r.type = "array";
                            break;
                        default:
                            r.value = e[n][i]
                        }
                        o.push(r)
                    }
                    t[e[n].containerID] = o
                }
                return t
            }, InspectService.prototype.checkContainerChanged = function(e, t) {
                if (a.isUndefined(e))
                    return !0;
                if (Object.keys(e).length != Object.keys(t).length)
                    return !0;
                for (var n in t)
                    if (!(n in e))
                        return !0;
                return !1
            }, InspectService = o([r.Injectable(), i("design:paramtypes", [])], InspectService)
        }();
    t.InspectService = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(24);
    n(153);
    var s = n(11),
        c = n(27),
        l = n(16),
        d = function() {
            function NetworkService(e, t) {
                this.http = e, this.apiService = t, this.aciMode = !1, this.clusterMode = "", this.clusterModeSubject = new l.Subject, this.clusterModeObservable = this.clusterModeSubject.asObservable(), this.aciModeSubject = new l.Subject, this.aciModeObservable = this.aciModeSubject.asObservable();
                var n = this;
                this.getSettings().then(function(e) {}, function(e) {}), this.getGlobalInspect().then(function(e) {
                    n.clusterMode = e.Oper.clusterMode, n.clusterModeSubject.next(n.clusterMode)
                }, function(e) {})
            }
            return NetworkService.prototype.getSettings = function() {
                var e = this,
                    t = new Promise(function(t, n) {
                        var o = s.ContivGlobals.NETWORK_SETTINGS_ENDPOINT;
                        e.apiService.get(o).map(function(e) {
                            return e.json()
                        }).toPromise().then(function(n) {
                            "aci" === n[0].networkInfraType ? e.aciMode = !0 : e.aciMode = !1, e.aciModeSubject.next(e.aciMode), t(n[0])
                        }, function(e) {
                            n(e)
                        })
                    });
                return t
            }, NetworkService.prototype.updateSettings = function(e) {
                return e.key = "global", e.name = "global", this.apiService.post(s.ContivGlobals.NETWORK_SETTINGS_ENDPOINT + "global/", e).map(function(e) {
                    return e.json()
                }).toPromise()
            }, NetworkService.prototype.getAciSettings = function() {
                var e = this,
                    t = new Promise(function(t, n) {
                        var o = s.ContivGlobals.ACI_SETTINGS_ENDPOINT;
                        e.apiService.get(o).map(function(e) {
                            return e.json()
                        }).toPromise().then(function(e) {
                            0 == e.length && (e = [{
                                key: "",
                                enforcePolicies: "yes",
                                includeCommonTenant: "no",
                                name: "",
                                nodeBindings: "",
                                pathBindings: "",
                                physicalDomain: ""
                            }]), t(e[0])
                        }, function(e) {
                            n(e)
                        })
                    });
                return t
            }, NetworkService.prototype.updateAciSettings = function(e) {
                return e.key = "aciGw", e.name = "aciGw", this.apiService.post(s.ContivGlobals.ACI_SETTINGS_ENDPOINT + "aciGw/", e).map(function(e) {
                    return e.json()
                }).toPromise()
            }, NetworkService.prototype.getGlobalInspect = function() {
                var e = this,
                    t = new Promise(function(t, n) {
                        var o = s.ContivGlobals.GLOBAL_NETWORK_INSPECT_ENDPOINT + "global/";
                        e.apiService.get(o).map(function(e) {
                            return e.json()
                        }).toPromise().then(function(e) {
                            t(e)
                        }, function(e) {
                            n(e)
                        })
                    });
                return t
            }, NetworkService.prototype.setAciMode = function(e) {
                this.aciMode = e, this.aciModeSubject.next(this.aciMode)
            }, NetworkService = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.Http && a.Http) && e || Object, "function" == typeof (t = "undefined" != typeof c.ApiService && c.ApiService) && t || Object])], NetworkService);
            var e,
                t
        }();
    t.NetworkService = d
}, , , , , , , , function(e, t, n) {
    function getNative(e, t) {
        var n = e[t];
        return o(n) ? n : void 0
    }
    var o = n(677);
    e.exports = getNative
}, , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(14);
    !function(e) {
        e[e.confirm = 0] = "confirm", e[e.alert = 1] = "alert", e[e.info = 2] = "info"
    }(t.NotificationType || (t.NotificationType = {}));
    var c = t.NotificationType,
        l = function() {
            function NotificationComponent(e) {
                this.crudHelperService = e, this.NotificationType = c, this.message = "", this.item = "", this.notifyId = 0, this.notifyCounter = 0
            }
            return NotificationComponent.prototype.ngOnInit = function() {
                jQuery(".notify").css({
                    right: "30px",
                    top: .8 * window.innerHeight + "px"
                }), jQuery(".notify").css({
                    visibility: "hidden"
                }), window.onresize = function() {
                    jQuery(".notify").css({
                        right: "30px",
                        top: .8 * window.innerHeight + "px"
                    })
                }, this.notifyId = 0
            }, NotificationComponent.prototype.runAnimation = function(e) {
                var t = this,
                    n = {
                        animation: "fade up",
                        duration: "600ms",
                        onStart: function() {
                            e && t.displayMessage()
                        }
                    };
                jQuery(".notify").transition(n)
            }, NotificationComponent.prototype.displayMessage = function() {
                this.message = this.crudHelperService.message, this.item = this.crudHelperService.item, this.notificationType = this.crudHelperService.notificationType, s.isUndefined(this.notificationType) && (this.notificationType = c.confirm)
            }, NotificationComponent.prototype.ngDoCheck = function() {
                function notifyTimer(t) {
                    var t = t;
                    setTimeout(function() {
                        t == e.notifyId && (e.runAnimation(!1), e.notifyId = 0)
                    }, 15e3)
                }
                var e = this;
                if (this.crudHelperService.displayNotify) {
                    0 !== this.notifyId && (this.runAnimation(!1), this.notifyId = 0), this.crudHelperService.displayNotify = !1, this.runAnimation(!0);
                    var t = ++this.notifyCounter;
                    this.notifyId = t;
                    new notifyTimer(t)
                }
            }, NotificationComponent.prototype.close = function() {
                this.runAnimation(!1), this.notifyId = 0
            }, NotificationComponent = o([r.Component({
                selector: "notification",
                template: n(698),
                styles: [n(1023)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && e || Object])], NotificationComponent);
            var e
        }();
    t.NotificationComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__extends || function(e, t) {
            function __() {
                this.constructor = e
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
        },
        i = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        r = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        a = n(2),
        s = n(24),
        c = n(38),
        l = n(28),
        d = n(11),
        p = n(27),
        u = function(e) {
            function RulesModel(t, n) {
                e.call(this, t, d.ContivGlobals.RULES_ENDPOINT, n)
            }
            return o(RulesModel, e), RulesModel.prototype.getIncomingRules = function(e, t) {
                var n = this;
                return n.get(!1).then(function(n) {
                    return l.filter(n, {
                        policyName: e,
                        direction: "in",
                        tenantName: t
                    })
                })
            }, RulesModel.prototype.getOutgoingRules = function(e, t) {
                var n = this;
                return n.get(!1).then(function(n) {
                    return l.filter(n, {
                        policyName: e,
                        direction: "out",
                        tenantName: t
                    })
                })
            }, RulesModel.prototype.generateKey = function(e) {
                return e.tenantName + ":" + e.policyName + ":" + e.ruleId
            }, RulesModel = i([a.Injectable(), r("design:paramtypes", ["function" == typeof (t = "undefined" != typeof s.Http && s.Http) && t || Object, "function" == typeof (n = "undefined" != typeof p.ApiService && p.ApiService) && n || Object])], RulesModel);
            var t,
                n
        }(c.Collection);
    t.RulesModel = u
}, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(31),
        c = n(7);
    !function(e) {
        e[e.modal = 0] = "modal", e[e.component = 1] = "component"
    }(t.DisplayType || (t.DisplayType = {}));
    var l = t.DisplayType,
        d = function() {
            function TenantCreateComponent(e, t, n) {
                this.formBuilder = e, this.organizationsModel = t, this.crudhelperService = n, this.showLoader = !1, this.DisplayType = l, this.created = new r.EventEmitter, this.canceled = new r.EventEmitter, this.tenantCreateForm = this.formBuilder.group({
                    tenantName: ["", a.Validators.required]
                })
            }
            return TenantCreateComponent.prototype.cancel = function() {
                this.canceled.emit(!0)
            }, TenantCreateComponent.prototype.create = function() {
                var e = this;
                if (this.tenantCreateForm.valid) {
                    this.showLoader = !0;
                    var t = {
                        key: this.tenantCreateForm.get("tenantName").value,
                        tenantName: this.tenantCreateForm.get("tenantName").value
                    };
                    this.organizationsModel.create(t, void 0).then(function(t) {
                        e.showLoader = !1, e.crudhelperService.showNotification("Tenant Created", t.key), e.tenantCreateForm.reset(), e.created.emit(!0)
                    }, function(t) {
                        e.showLoader = !1, e.crudhelperService.showServerError("Tenant: Create failed", t)
                    })
                }
            }, o([r.Input("displayType"), i("design:type", Number)], TenantCreateComponent.prototype, "displayType", void 0), o([r.Output("created"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], TenantCreateComponent.prototype, "created", void 0), o([r.Output("canceled"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], TenantCreateComponent.prototype, "canceled", void 0), TenantCreateComponent = o([r.Component({
                selector: "tenantcreate",
                template: n(705)
            }), i("design:paramtypes", ["function" == typeof (d = "undefined" != typeof a.FormBuilder && a.FormBuilder) && d || Object, "function" == typeof (p = "undefined" != typeof s.OrganizationsModel && s.OrganizationsModel) && p || Object, "function" == typeof (u = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && u || Object])], TenantCreateComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.TenantCreateComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(66),
        s = n(7),
        c = n(11);
    !function(e) {
        e[e.modal = 0] = "modal", e[e.component = 1] = "component"
    }(t.ProfileDisplayType || (t.ProfileDisplayType = {}));
    var l = t.ProfileDisplayType,
        d = function() {
            function UserProfileEditComponent(e, t, n) {
                this.ngZone = e, this.usersModel = t, this.crudHelperService = n, this.ProfileDisplayType = l, this.user = {
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    disable: !1
                }, this.showLoader = !0, this.username = "", this.displayType = l.component;
                this.user = {
                    username: "",
                    first_name: "",
                    last_name: "",
                    disable: !1
                }, this.close = new r.EventEmitter
            }
            return UserProfileEditComponent.prototype.ngOnInit = function() {
                var e = this,
                    t = c.ContivGlobals.USERS_ENDPOINT + this.username + "/";
                this.usersModel.getModelByKey(this.username, !1, "username", t).then(function(t) {
                    e.user = t, e.crudHelperService.stopLoader(e)
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, UserProfileEditComponent.prototype.closeEdit = function() {
                this.close.emit()
            }, UserProfileEditComponent.prototype.saveUser = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.usersModel.save(t.user).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showNotification("User: Updated", e.username.toString()), t.closeEdit()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("User: Update failed", e)
                }))
            }, o([r.Input("username"), i("design:type", String)], UserProfileEditComponent.prototype, "username", void 0), o([r.Input("displayType"), i("design:type", Number)], UserProfileEditComponent.prototype, "displayType", void 0), o([r.Output("close"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], UserProfileEditComponent.prototype, "close", void 0), UserProfileEditComponent = o([r.Component({
                selector: "userprofileedit",
                template: n(706)
            }), i("design:paramtypes", ["function" == typeof (t = "undefined" != typeof r.NgZone && r.NgZone) && t || Object, "function" == typeof (d = "undefined" != typeof a.UsersModel && a.UsersModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object])], UserProfileEditComponent);
            var e,
                t,
                d,
                p
        }();
    t.UserProfileEditComponent = d
}, , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, function(e, t, n) {
    function isArrayLike(e) {
        return null != e && r(o(e)) && !i(e)
    }
    var o = n(666),
        i = n(148),
        r = n(250);
    e.exports = isArrayLike
}, function(e, t, n) {
    function isFunction(e) {
        var t = o(e) ? s.call(e) : "";
        return t == i || t == r
    }
    var o = n(251),
        i = "[object Function]",
        r = "[object GeneratorFunction]",
        a = Object.prototype,
        s = a.toString;
    e.exports = isFunction
}, function(e, t) {
    function isObjectLike(e) {
        return !!e && "object" == typeof e
    }
    e.exports = isObjectLike
}, , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(39),
        c = n(42),
        l = n(7),
        d = n(31),
        p = n(87),
        u = n(170),
        f = n(171),
        v = n(169),
        h = function() {
            function ApplicationGroupCreateComponent(e, t, n, o, i, r, a, s) {
                function resetForm() {
                    a.stopLoader(c), c.applicationGroup = {
                        groupName: "",
                        networkName: "",
                        policies: [],
                        netProfile: "",
                        extContractsGrps: [],
                        tenantName: "",
                        cfgdTag: ""
                    }
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.organizationsModel = o, this.networksModel = i, this.applicationGroupsModel = r, this.crudHelperService = a, this.networkService = s, this.networks = [], this.tenants = [], this.applicationGroup = {};
                var c = this;
                resetForm()
            }
            return ApplicationGroupCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(e), getTenants(!1)
            }, ApplicationGroupCreateComponent.prototype.returnToApplicationGroup = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, ApplicationGroupCreateComponent.prototype.cancelCreating = function() {
                this.returnToApplicationGroup()
            }, ApplicationGroupCreateComponent.prototype.createApplicationGroup = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.applicationGroup.key = t.applicationGroupsModel.generateKey(t.applicationGroup), "" === t.applicationGroup.cfgdTag && delete t.applicationGroup.cfgdTag, t.applicationGroupsModel.create(t.applicationGroup, void 0).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Application group: Created", e.key.toString()), t.returnToApplicationGroup()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Application group: Create failed", e)
                }))
            }, ApplicationGroupCreateComponent.prototype.getNetworks = function(e) {
                var t = this;
                t.networksModel.get(!1).then(function(n) {
                    t.networks = _.filter(n, {
                        tenantName: e
                    })
                }, function(e) {})
            }, ApplicationGroupCreateComponent.prototype.updateTenant = function(e) {
                var t = this;
                t.applicationGroup.tenantName = e, t.getNetworks(e), t.isolationPolicyComponent.getIsolationPolicies(), t.bandwidthPolicyComponent.getNetprofiles(), void 0 !== t.contractGroupComponent && null !== t.contractGroupComponent && t.contractGroupComponent.getContractGroups()
            }, o([r.ViewChild(v.BandwidthPolicySelectionComponent), i("design:type", "function" == typeof (e = "undefined" != typeof v.BandwidthPolicySelectionComponent && v.BandwidthPolicySelectionComponent) && e || Object)], ApplicationGroupCreateComponent.prototype, "bandwidthPolicyComponent", void 0), o([r.ViewChild(f.IsolationPolicySelectionComponent), i("design:type", "function" == typeof (t = "undefined" != typeof f.IsolationPolicySelectionComponent && f.IsolationPolicySelectionComponent) && t || Object)], ApplicationGroupCreateComponent.prototype, "isolationPolicyComponent", void 0), o([r.ViewChild(u.ContractGroupSelectionComponent), i("design:type", "function" == typeof (h = "undefined" != typeof u.ContractGroupSelectionComponent && u.ContractGroupSelectionComponent) && h || Object)], ApplicationGroupCreateComponent.prototype, "contractGroupComponent", void 0), ApplicationGroupCreateComponent = o([r.Component({
                selector: "applicationgroupcreate",
                template: n(681)
            }), i("design:paramtypes", ["function" == typeof (m = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && m || Object, "function" == typeof (g = "undefined" != typeof a.Router && a.Router) && g || Object, "function" == typeof (y = "undefined" != typeof r.NgZone && r.NgZone) && y || Object, "function" == typeof (b = "undefined" != typeof d.OrganizationsModel && d.OrganizationsModel) && b || Object, "function" == typeof (w = "undefined" != typeof s.NetworksModel && s.NetworksModel) && w || Object, "function" == typeof (C = "undefined" != typeof c.ApplicationGroupsModel && c.ApplicationGroupsModel) && C || Object, "function" == typeof (R = "undefined" != typeof l.CRUDHelperService && l.CRUDHelperService) && R || Object, "function" == typeof (S = "undefined" != typeof p.NetworkService && p.NetworkService) && S || Object])], ApplicationGroupCreateComponent);
            var e,
                t,
                h,
                m,
                g,
                y,
                b,
                w,
                C,
                R,
                S
        }();
    t.ApplicationGroupCreateComponent = h
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(42),
        c = n(7),
        l = function() {
            function ApplicationGroupDetailsComponent(e, t, n, o, i) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? r.mode = "edit" : r.mode = "details"
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.applicationGroupsModel = o, this.crudHelperService = i, this.applicationGroup = {}, this.mode = "details";
                var r = this;
                r.crudHelperService.startLoader(r), r.applicationGroupsModel.getModelByKey(e.snapshot.params.key, !1, "key").then(function(e) {
                    r.applicationGroup = e, r.ngZone.run(function() {
                        r.crudHelperService.stopLoader(r)
                    })
                }, function(e) {
                    r.ngZone.run(function() {
                        r.crudHelperService.stopLoader(r)
                    })
                }), setMode(), this.applicationGroup = {
                    groupName: "",
                    networkName: ""
                }, this.serverErrorMessage = "", this.statskey = "", this.infoselected = !0
            }
            return ApplicationGroupDetailsComponent.prototype.ngOnInit = function() {
                this.statskey = this.activatedRoute.snapshot.params.key
            }, ApplicationGroupDetailsComponent.prototype.returnToApplicationGroup = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, ApplicationGroupDetailsComponent.prototype.returnToApplicationGroupDetails = function() {
                this.router.navigate(["../../details", this.applicationGroup.key], {
                    relativeTo: this.activatedRoute
                })
            }, ApplicationGroupDetailsComponent.prototype.editApplicationGroup = function() {
                this.router.navigate(["../../edit", this.applicationGroup.key], {
                    relativeTo: this.activatedRoute
                })
            }, ApplicationGroupDetailsComponent.prototype.cancelDetails = function() {
                this.returnToApplicationGroup()
            }, ApplicationGroupDetailsComponent.prototype.deleteApplicationGroup = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.applicationGroupsModel["delete"](e.applicationGroup).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Application group: Deleted", t.toString()), e.returnToApplicationGroup()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Application group: Delete failed", t)
                })
            }, ApplicationGroupDetailsComponent = o([r.Component({
                selector: "applicationgroupdetails",
                template: n(682)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object, "function" == typeof (d = "undefined" != typeof s.ApplicationGroupsModel && s.ApplicationGroupsModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object])], ApplicationGroupDetailsComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.ApplicationGroupDetailsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(42),
        c = n(7),
        l = n(16),
        d = function() {
            function AppGrouplistComponent(e, t, n, o) {
                var i = this;
                this.activatedRoute = e, this.router = t, this.appGroupModel = n, this.crudHelperService = o, this.applicationGroupListCtrl = this, this.showLoader = !0, this.refresh = l.Observable.interval(5e3).subscribe(function() {
                    i.getApplicationGroup(!0)
                }), this.crudHelperService.startLoader(this)
            }
            return AppGrouplistComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getApplicationGroup(!1)
            }, AppGrouplistComponent.prototype.getApplicationGroup = function(e) {
                var t = this;
                this.appGroupModel.get(e).then(function(e) {
                    t.groups = e, t.crudHelperService.stopLoader(t)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, AppGrouplistComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, AppGrouplistComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, AppGrouplistComponent = o([r.Component({
                selector: "app-group",
                template: n(684)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof s.ApplicationGroupsModel && s.ApplicationGroupsModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object])], AppGrouplistComponent);
            var e,
                t,
                d,
                p
        }();
    t.AppGrouplistComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = n(75),
        c = n(14),
        l = function() {
            function BandwidthPolicySelectionComponent(e) {
                this.netprofilesModel = e, this.netProfiles = [], this.selectedNetprofile = {}, this.netProfileSearchText = ""
            }
            return BandwidthPolicySelectionComponent.prototype.ngOnChanges = function() {
                var e = this;
                e.getNetprofiles()
            }, BandwidthPolicySelectionComponent.prototype.getNetprofiles = function() {
                var e = this;
                e.netprofilesModel.get(!1).then(function(t) {
                    e.netProfiles = a.filter(t, {
                        tenantName: e.applicationgroup.tenantName
                    }), "" === e.applicationgroup.netProfile || c.isUndefined(e.applicationgroup.netProfile) || (e.selectedNetprofile = a.find(e.netProfiles, function(t) {
                        return t.profileName === e.applicationgroup.netProfile
                    }))
                })
            }, BandwidthPolicySelectionComponent.prototype.updateApplicationgroup = function(e) {
                this.selectedNetprofile = e, null === this.selectedNetprofile ? this.applicationgroup.netProfile = "" : this.applicationgroup.netProfile = this.selectedNetprofile.profileName
            }, o([r.Input("mode"), i("design:type", String)], BandwidthPolicySelectionComponent.prototype, "mode", void 0), o([r.Input("applicationgroup"), i("design:type", Object)], BandwidthPolicySelectionComponent.prototype, "applicationgroup", void 0), BandwidthPolicySelectionComponent = o([r.Component({
                selector: "ctv-bandwidthpolicy",
                template: n(686)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.NetprofilesModel && s.NetprofilesModel) && e || Object])], BandwidthPolicySelectionComponent);
            var e
        }();
    t.BandwidthPolicySelectionComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = n(74),
        c = function() {
            function ContractGroupSelectionComponent(e) {
                this.contractGroupsModel = e, this.selectedContractGroups = [], this.contractGroups = [], this.contractGroupSearchText = ""
            }
            return ContractGroupSelectionComponent.prototype.ngOnChanges = function() {
                function getSelectedContractGroups() {
                    e.applicationgroup.extContractsGrps.forEach(function(t) {
                        var n = e.applicationgroup.tenantName + ":" + t;
                        e.contractGroupsModel.getModelByKey(n, !1, void 0).then(function(t) {
                            e.selectedContractGroups.push(t)
                        })
                    })
                }
                var e = this;
                ("details" === e.mode || "edit" === e.mode && "" != e.applicationgroup.groupName) && (e.getContractGroups(), void 0 === e.applicationgroup.extContractsGrps && (e.applicationgroup.extContractsGrps = []), getSelectedContractGroups())
            }, ContractGroupSelectionComponent.prototype.getContractGroups = function() {
                var e = this;
                e.contractGroupsModel.get(!1).then(function(t) {
                    e.contractGroups = a.filter(t, {
                        tenantName: e.applicationgroup.tenantName
                    })
                })
            }, ContractGroupSelectionComponent.prototype.addContractGroup = function(e) {
                var t = this;
                if (void 0 !== e && 0 == a.includes(t.selectedContractGroups, e)) {
                    var n = t.applicationgroup.tenantName + ":" + e;
                    t.contractGroupsModel.getModelByKey(n, !1, void 0).then(function(e) {
                        t.selectedContractGroups.push(e)
                    }), t.applicationgroup.extContractsGrps.push(e)
                }
            }, ContractGroupSelectionComponent.prototype.removeContractGroup = function(e) {
                a.remove(this.selectedContractGroups, function(t) {
                    return t.contractsGroupName === e
                }), a.remove(this.applicationgroup.extContractsGrps, function(t) {
                    return t === e
                })
            }, o([r.Input(), i("design:type", String)], ContractGroupSelectionComponent.prototype, "mode", void 0), o([r.Input(), i("design:type", Object)], ContractGroupSelectionComponent.prototype, "applicationgroup", void 0), ContractGroupSelectionComponent = o([r.Component({
                selector: "ctv-contractgroup",
                template: n(687)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.ContractGroupsModel && s.ContractGroupsModel) && e || Object])], ContractGroupSelectionComponent);
            var e
        }();
    t.ContractGroupSelectionComponent = c
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = n(55),
        c = n(103),
        l = function() {
            function IsolationPolicySelectionComponent(e, t) {
                this.policiesModel = e, this.rulesModel = t, this.incomingRules = [], this.outgoingRules = [], this.isolationPolicies = [], this.isolationPolicySearchText = ""
            }
            return IsolationPolicySelectionComponent.prototype.ngOnChanges = function() {
                function getRules() {
                    e.applicationgroup.policies.forEach(function(t) {
                        e.rulesModel.getIncomingRules(t, e.applicationgroup.tenantName).then(function(t) {
                            Array.prototype.push.apply(e.incomingRules, t)
                        }), e.rulesModel.getOutgoingRules(t, e.applicationgroup.tenantName).then(function(t) {
                            Array.prototype.push.apply(e.outgoingRules, t)
                        })
                    })
                }
                var e = this;
                ("details" === e.mode || "edit" === e.mode && "" != e.applicationgroup.groupName) && (e.getIsolationPolicies(), void 0 === e.applicationgroup.policies && (e.applicationgroup.policies = []), getRules())
            }, IsolationPolicySelectionComponent.prototype.getIsolationPolicies = function() {
                var e = this;
                e.policiesModel.get(!1).then(function(t) {
                    e.isolationPolicies = a.filter(t, {
                        tenantName: e.applicationgroup.tenantName
                    })
                })
            }, IsolationPolicySelectionComponent.prototype.addIsolationPolicy = function(e) {
                var t = this,
                    n = e;
                void 0 !== n && 0 == a.includes(t.applicationgroup.policies, n) && (t.applicationgroup.policies.push(n), t.rulesModel.getIncomingRules(n, t.applicationgroup.tenantName).then(function(e) {
                    Array.prototype.push.apply(t.incomingRules, e)
                }), t.rulesModel.getOutgoingRules(n, t.applicationgroup.tenantName).then(function(e) {
                    Array.prototype.push.apply(t.outgoingRules, e)
                }))
            }, IsolationPolicySelectionComponent.prototype.removeIsolationPolicy = function(e) {
                a.remove(this.applicationgroup.policies, function(t) {
                    return t === e
                }), a.remove(this.incomingRules, function(t) {
                    return t.policyName === e
                }), a.remove(this.outgoingRules, function(t) {
                    return t.policyName === e
                })
            }, o([r.Input(), i("design:type", String)], IsolationPolicySelectionComponent.prototype, "mode", void 0), o([r.Input(), i("design:type", Object)], IsolationPolicySelectionComponent.prototype, "applicationgroup", void 0), IsolationPolicySelectionComponent = o([r.Component({
                selector: "ctv-isolationpolicy",
                template: n(688)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.PoliciesModel && s.PoliciesModel) && e || Object, "function" == typeof (t = "undefined" != typeof c.RulesModel && c.RulesModel) && t || Object])], IsolationPolicySelectionComponent);
            var e,
                t
        }();
    t.IsolationPolicySelectionComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(82),
        l = n(31),
        d = function() {
            function AppProfileCreateComponent(e, t, n, o, i, r) {
                function resetForm() {
                    i.stopLoader(a), a.newAppProfile = {
                        key: "",
                        appProfileName: "",
                        endpointGroups: [],
                        tenantName: ""
                    }
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.organizationsModel = o, this.crudHelperService = i, this.appProfilesModel = r, this.newAppProfile = {}, this.tenants = [];
                var a = this;
                resetForm()
            }
            return AppProfileCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(e), getTenants(!1)
            }, AppProfileCreateComponent.prototype.returnToAppProfiles = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, AppProfileCreateComponent.prototype.cancelCreating = function() {
                this.returnToAppProfiles()
            }, AppProfileCreateComponent.prototype.createAppProfile = function(e) {
                var t = this;
                e && (this.crudHelperService.startLoader(this), t.newAppProfile.key = this.appProfilesModel.generateKey(this.newAppProfile), this.appProfilesModel.create(t.newAppProfile, void 0).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Application profile: Created", e.key.toString())
                    }), t.returnToAppProfiles()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("Application profile: Create failed", e)
                }))
            }, AppProfileCreateComponent.prototype.updateTenant = function(e, t) {
                this.newAppProfile.tenantName = e, t.getApplicationGroups()
            }, AppProfileCreateComponent = o([r.Component({
                selector: "appprofilecreate",
                template: n(690)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof r.NgZone && r.NgZone) && d || Object, "function" == typeof (p = "undefined" != typeof l.OrganizationsModel && l.OrganizationsModel) && p || Object, "function" == typeof (u = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && u || Object, "function" == typeof (f = "undefined" != typeof c.AppProfilesModel && c.AppProfilesModel) && f || Object])], AppProfileCreateComponent);
            var e,
                t,
                d,
                p,
                u,
                f
        }();
    t.AppProfileCreateComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(82),
        c = n(7),
        l = function() {
            function AppProfileDetailsComponent(e, t, n, o, i) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? r.mode = "edit" : r.mode = "details"
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.appProfilesModel = o, this.crudHelperService = i, this.appProfile = {}, this.mode = "details";
                var r = this;
                r.crudHelperService.stopLoader(r), r.appProfilesModel.getModelByKey(e.snapshot.params.key, !1, "key").then(function(e) {
                    r.appProfile = e
                }), setMode()
            }
            return AppProfileDetailsComponent.prototype.returnToAppProfile = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, AppProfileDetailsComponent.prototype.returnToAppProfileDetails = function() {
                this.router.navigate(["../../details", this.appProfile.key], {
                    relativeTo: this.activatedRoute
                })
            }, AppProfileDetailsComponent.prototype.editAppProfile = function() {
                this.router.navigate(["../../edit", this.appProfile.key], {
                    relativeTo: this.activatedRoute
                })
            }, AppProfileDetailsComponent.prototype.cancelEditing = function() {
                this.returnToAppProfileDetails()
            }, AppProfileDetailsComponent.prototype.deleteAppProfile = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.appProfilesModel["delete"](e.appProfile).then(function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Application profile: Deleted", t)
                    }), e.returnToAppProfile()
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    }), e.crudHelperService.showServerError("Application profile: Delete failed", t)
                })
            }, AppProfileDetailsComponent.prototype.saveAppProfile = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.appProfilesModel.save(t.appProfile).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Application profile: Updated", e.key.toString())
                    }), t.returnToAppProfileDetails()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("Application profile: Update failed", e)
                }))
            }, AppProfileDetailsComponent = o([r.Component({
                selector: "appprofiledetails",
                template: n(691)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object, "function" == typeof (d = "undefined" != typeof s.AppProfilesModel && s.AppProfilesModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object])], AppProfileDetailsComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.AppProfileDetailsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(16),
        l = n(82),
        d = function() {
            function AppProfileListComponent(e, t, n, o, i) {
                var r = this;
                this.activatedRoute = e, this.router = t, this.appProfilesModel = n, this.crudHelperService = o, this.ngZone = i, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    r.getAppProfiles(!0)
                })
            }
            return AppProfileListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getAppProfiles(!1)
            }, AppProfileListComponent.prototype.getAppProfiles = function(e) {
                var t = this;
                this.appProfilesModel.get(e).then(function(e) {
                    t.appProfiles = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, AppProfileListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, AppProfileListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, AppProfileListComponent = o([r.Component({
                selector: "appprofilelist",
                template: n(692)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof l.AppProfilesModel && l.AppProfilesModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], AppProfileListComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.AppProfileListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(424),
        l = function() {
            function PipesModule() {}
            return PipesModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule],
                declarations: [c.FilterPipe],
                exports: [c.FilterPipe, a.FormsModule, s.CommonModule]
            }), i("design:paramtypes", [])], PipesModule)
        }();
    t.PipesModule = l
}, function(e, t) {
    "use strict";
    t.AuthMatrix = {
        firstrun: {
            ops: "n",
            admin: "y"
        },
        dashboard: {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/list": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/isolation/create": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/isolation/details": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/isolation/edit": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/bandwidth/create": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/bandwidth/details": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/bandwidth/edit": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/contractgroup/create": {
            ops: "y",
            admin: "y"
        },
        "networkpolicies/contractgroup/details": {
            ops: "y",
            admin: "y"
        },
        "applicationgroups/list": {
            ops: "y",
            admin: "y"
        },
        "applicationgroups/create": {
            ops: "y",
            admin: "y"
        },
        "applicationgroups/details": {
            ops: "y",
            admin: "y"
        },
        "applicationgroups/edit": {
            ops: "y",
            admin: "y"
        },
        "settings/users/list": {
            ops: "n",
            admin: "y"
        },
        "settings/users/create": {
            ops: "n",
            admin: "y"
        },
        "settings/users/details": {
            ops: "n",
            admin: "y"
        },
        "settings/users/edit": {
            ops: "n",
            admin: "y"
        },
        "settings/nodes/list": {
            ops: "n",
            admin: "y"
        },
        "settings/nodes/create": {
            ops: "n",
            admin: "y"
        },
        "settings/nodes/details": {
            ops: "n",
            admin: "y"
        },
        "settings/nodes/edit": {
            ops: "n",
            admin: "y"
        },
        "settings/authorization/list": {
            ops: "n",
            admin: "y"
        },
        "settings/authorization/details": {
            ops: "n",
            admin: "y"
        },
        "settings/authorization/create": {
            ops: "n",
            admin: "y"
        },
        "settings/authorization/edit": {
            ops: "n",
            admin: "y"
        },
        "settings/networks": {
            ops: "n",
            admin: "y"
        },
        "settings/ldap": {
            ops: "n",
            admin: "y"
        },
        "settings/organizations/list": {
            ops: "n",
            admin: "y"
        },
        "settings/organizations/create": {
            ops: "n",
            admin: "y"
        },
        "settings/organizations/details": {
            ops: "n",
            admin: "y"
        },
        "networks/list": {
            ops: "y",
            admin: "y"
        },
        "networks/create": {
            ops: "y",
            admin: "y"
        },
        "networks/details": {
            ops: "y",
            admin: "y"
        },
        "servicelbs/list": {
            ops: "y",
            admin: "y"
        },
        "servicelbs/create": {
            ops: "y",
            admin: "y"
        },
        "servicelbs/details": {
            ops: "y",
            admin: "y"
        },
        "appprofiles/list": {
            ops: "y",
            admin: "y"
        },
        "appprofiles/create": {
            ops: "y",
            admin: "y"
        },
        "appprofiles/details": {
            ops: "y",
            admin: "y"
        },
        "appprofiles/edit": {
            ops: "y",
            admin: "y"
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(49),
        c = n(176),
        l = n(14),
        d = n(85),
        p = function() {
            function AuthGuard(e, t, n) {
                this.authService = e, this.firstRunService = t, this.router = n, this.accessMatrix = c.AuthMatrix
            }
            return AuthGuard.prototype.canActivate = function(e, t) {
                var n = t.url;
                return this.checkLogin(n)
            }, AuthGuard.prototype.canActivateChild = function(e, t) {
                return this.canActivate(e, t)
            }, AuthGuard.prototype.checkLogin = function(e) {
                return this.authService.isLoggedIn ? this.checkAccess(e) ? this.authService.validateExpiry() ? this.performFirstrunCheck(e) : (this.loadLogin(e), !1) : (this.router.navigate(["/unauthorized"]), !1) : !l.isNull(localStorage.getItem("authToken")) && (this.authService.extractBody(), this.authService.validateExpiry()) ? (this.authService.isLoggedIn = !0, this.checkAccess(e) ? this.performFirstrunCheck(e) : (this.router.navigate(["/unauthorized"]), !1)) : (this.loadLogin(e), !1)
            }, AuthGuard.prototype.loadLogin = function(e) {
                this.authService.redirectUrl = e, this.router.navigate(["/login"])
            }, AuthGuard.prototype.checkAccess = function(e) {
                return this.authService.checkAccess(e)
            }, AuthGuard.prototype.isFirstRun = function() {
                return this.firstRunService.setFirstRun()
            }, AuthGuard.prototype.performFirstrunCheck = function(e) {
                var t = this;
                return this.isFirstRun().then(function(n) {
                    return !/firstrun/.test(e) && !n || /firstrun/.test(e) && n ? !0 : n ? (t.router.navigate(["/m/firstrun"]), !1) : (t.router.navigate(["/m/dashboard"]), !1)
                })
            }, AuthGuard = o([r.Injectable(), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.AuthService && s.AuthService) && e || Object, "function" == typeof (t = "undefined" != typeof d.FirstRunService && d.FirstRunService) && t || Object, "function" == typeof (n = "undefined" != typeof a.Router && a.Router) && n || Object])], AuthGuard);
            var e,
                t,
                n
        }();
    t.AuthGuard = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(1),
        s = n(42),
        c = n(55),
        l = n(39),
        d = n(65),
        p = n(14),
        u = n(84),
        f = function() {
            function DashboardComponent(e, t, n, o, i) {
                function getDashboardInfo(a) {
                    i.run(function() {
                        e.get(a).then(function(e) {
                            r.networks = e.length, r.networkList = e
                        }, function(e) {}), t.get(a).then(function(e) {
                            r.groups = e.length, r.applicationGroupList = e
                        }, function(e) {}), n.get(a).then(function(e) {
                            r.networkpolicies = e.length
                        }, function(e) {}), o.get(a).then(function(e) {
                            r.servicelbs = e.length
                        }, function(e) {})
                    })
                }
                this.networksModel = e, this.applicationGroupsModel = t, this.policiesModel = n, this.servicelbsModel = o, this.ngZone = i, this.EndpointType = u.EndpointType, this.nodes = 0, this.networks = 0, this.groups = 0, this.networkpolicies = 0, this.servicelbs = 0;
                var r = this;
                this.networkList = [], this.applicationGroupList = [], this.endpointType = u.EndpointType.Network, this.key = "", this.setkeyflag = !0, getDashboardInfo(!1), this.subscription = a.Observable.interval(5e3).subscribe(function() {
                    getDashboardInfo(!0)
                })
            }
            return DashboardComponent.prototype.ngOnDestroy = function() {
                this.subscription.unsubscribe()
            }, DashboardComponent.prototype["switch"] = function(e) {
                e == u.EndpointType.Network ? this.endpointType !== u.EndpointType.Network && (this.setkeyflag = !0, this.endpointType = u.EndpointType.Network) : this.endpointType !== u.EndpointType.ApplicationGroup && (this.setkeyflag = !0, this.endpointType = u.EndpointType.ApplicationGroup)
            }, DashboardComponent.prototype.setKey = function(e) {
                var t = this;
                if (!p.isUndefined(e)) {
                    var n = e;
                    e.length > 0 && this.setkeyflag && (a.Observable.timer(1).subscribe(function() {
                        t.key = n[0].key
                    }), this.setkeyflag = !1)
                }
            }, DashboardComponent = o([r.Component({
                selector: "dashboard",
                template: n(710),
                styles: [n(1025)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof l.NetworksModel && l.NetworksModel) && e || Object, "function" == typeof (t = "undefined" != typeof s.ApplicationGroupsModel && s.ApplicationGroupsModel) && t || Object, "function" == typeof (f = "undefined" != typeof c.PoliciesModel && c.PoliciesModel) && f || Object, "function" == typeof (v = "undefined" != typeof d.ServicelbsModel && d.ServicelbsModel) && v || Object, "function" == typeof (h = "undefined" != typeof r.NgZone && r.NgZone) && h || Object])], DashboardComponent);
            var e,
                t,
                f,
                v,
                h
        }();
    t.DashboardComponent = f
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(49),
        c = n(76),
        l = function() {
            function FirstrunWizardComponent(e, t, n, o) {
                this.wizardService = e, this.activatedRoute = t, this.router = n, this.authService = o, this.pageNo = 1, this.welcomeActive = !0, e.getNetworkSettings(), e.getAciSettings(), e.getGlobalInspect()
            }
            return FirstrunWizardComponent.prototype.ngOnInit = function() {}, FirstrunWizardComponent.prototype.updatePage = function(e) {
                this.pageNo = ++e
            }, FirstrunWizardComponent.prototype.logout = function() {
                this.authService.isLoggedIn = !1
            }, FirstrunWizardComponent.prototype.skip = function() {
                this.router.navigate(["/m/dashboard"], {
                    relativeTo: this.activatedRoute
                })
            }, FirstrunWizardComponent.prototype.runwizard = function() {
                this.welcomeActive = !1
            }, FirstrunWizardComponent = o([r.Component({
                selector: "firstrunwizard",
                template: n(714),
                styles: [n(1026)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof c.FirstRunWizardService && c.FirstRunWizardService) && e || Object, "function" == typeof (t = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && t || Object, "function" == typeof (l = "undefined" != typeof a.Router && a.Router) && l || Object, "function" == typeof (d = "undefined" != typeof s.AuthService && s.AuthService) && d || Object])], FirstrunWizardComponent);
            var e,
                t,
                l,
                d
        }();
    t.FirstrunWizardComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(5),
        c = n(49),
        l = n(11),
        d = n(84),
        p = n(85),
        u = function() {
            function LoginComponent(e, t, n, o, i) {
                this.router = e, this.crudHelperService = t, this.authService = n, this.firstRunService = o, this.chartService = i, this.product_name = l.ContivGlobals.PRODUCT_NAME, this.showLoader = !0, this.showServerError = !1, this.username = "", this.password = "", this.loginCtrl = this
            }
            return LoginComponent.prototype.ngOnInit = function() {
                this.crudHelperService.stopLoader(this), jQuery("body").addClass("loginbackground")
            }, LoginComponent.prototype.ngOnDestroy = function() {
                jQuery("body").removeClass("loginbackground")
            }, LoginComponent.prototype.login = function() {
                var e = this;
                this.crudHelperService.startLoader(this), this.authService.login({
                    username: this.username,
                    password: this.password
                }).subscribe(function(t) {
                    t ? (e.showServerError = !1, e.firstRunService.setFirstRun().then(function(t) {
                        if (e.crudHelperService.stopLoader(e), t)
                            e.router.navigate(["/m/firstrun"]);
                        else if (e.authService.redirectUrl.length > 0) {
                            var n = e.authService.redirectUrl;
                            e.authService.redirectUrl = "", e.router.navigate([n])
                        } else
                            e.router.navigate(["/m/dashboard"])
                    })) : (e.crudHelperService.stopLoader(e), e.showServerError = !0, jQuery("#login-failed").modal("show"))
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.showServerError = !0
                })
            }, LoginComponent = o([r.Component({
                selector: "login",
                template: n(716),
                styles: [n(1027)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.Router && s.Router) && e || Object, "function" == typeof (t = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && t || Object, "function" == typeof (u = "undefined" != typeof c.AuthService && c.AuthService) && u || Object, "function" == typeof (f = "undefined" != typeof p.FirstRunService && p.FirstRunService) && f || Object, "function" == typeof (v = "undefined" != typeof d.ChartService && d.ChartService) && v || Object])], LoginComponent);
            var e,
                t,
                u,
                f,
                v
        }();
    t.LoginComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(11),
        c = function() {
            function LogoutComponent(e, t) {
                this.router = e, this.activatedRoute = t, this.product_name = s.ContivGlobals.PRODUCT_NAME
            }
            return LogoutComponent.prototype.ngOnInit = function() {
                jQuery("body").addClass("logoutbackground")
            }, LogoutComponent.prototype.ngOnDestroy = function() {
                jQuery("body").removeClass("logoutbackground")
            }, LogoutComponent.prototype.login = function() {
                this.router.navigate(["/login"], {
                    relativeTo: this.activatedRoute
                })
            }, LogoutComponent = o([r.Component({
                selector: "logout",
                template: n(717),
                styles: [n(1028)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.Router && a.Router) && e || Object, "function" == typeof (t = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && t || Object])], LogoutComponent);
            var e,
                t
        }();
    t.LogoutComponent = c
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function UnauthorizedComponent() {}
            return UnauthorizedComponent.prototype.ngOnInit = function() {
                jQuery("body").addClass("logoutbackground")
            }, UnauthorizedComponent.prototype.ngOnDestroy = function() {
                jQuery("body").removeClass("logoutbackground")
            }, UnauthorizedComponent = o([r.Component({
                selector: "unauthorized",
                template: n(718)
            }), i("design:paramtypes", [])], UnauthorizedComponent)
        }();
    t.UnauthorizedComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(49),
        c = n(11),
        l = n(84),
        d = n(124),
        p = n(39),
        u = n(42),
        f = n(82),
        v = n(83),
        h = n(64),
        m = n(74),
        g = n(75),
        y = n(31),
        b = n(55),
        w = n(103),
        C = n(65),
        R = n(66),
        S = n(85),
        k = function() {
            function MenuComponent(e, t, n, o, i, r, a, s, l, p, u, f, v, h, m, g, y) {
                this.activatedRoute = e, this.router = t, this.authService = n, this.firstRunService = o, this.chartService = i, this.networksModel = r, this.applicationgroupsModel = a, this.appprofilesModel = s, this.authorizationModel = l, this.bgpsModel = p, this.contractgroupsModel = u, this.netprofilesModel = f, this.organizationsmodel = v, this.policiesModel = h, this.rulesModel = m, this.servicelbsModel = g, this.usersModel = y, this.product_name = c.ContivGlobals.PRODUCT_NAME, this.ProfileDisplayType = d.ProfileDisplayType, this.loggedOut = !1, this.username = n.username, this.firstRun = this.firstRunService.firstRun, this.localuser = this.authService.localUser
            }
            return MenuComponent.prototype.ngDoCheck = function() {
                this.loggedOut || this.authService.isLoggedIn || (this.loggedOut = !0, this.logout())
            }, MenuComponent.prototype.ngAfterViewInit = function() {
                var e = this;
                jQuery(".ui.dropdown").dropdown({
                    action: "hide",
                    duration: 100
                }), this.firstRunService.firstrunObservable.subscribe(function(t) {
                    e.firstRun = t
                }), this.chartService.startpolling()
            }, MenuComponent.prototype.help = function() {
                var e = window.open("https://cloudnativer.github.io", "_blank");
                e.focus()
            }, MenuComponent.prototype.logout = function() {
                var e = this,
                    t = this;
                t.timerId = window.setInterval(function() {
                    jQuery(".ui.dropdown").dropdown("is hidden") && (clearInterval(t.timerId), t.cleanuplocalstorage(), t.chartService.cleanBuffer(), t.networksModel.clearModel(), t.applicationgroupsModel.clearModel(), t.appprofilesModel.clearModel(), t.authorizationModel.clearModel(), t.bgpsModel.clearModel(), t.contractgroupsModel.clearModel(), t.netprofilesModel.clearModel(), t.organizationsmodel.clearModel(), t.policiesModel.clearModel(), t.rulesModel.clearModel(), t.servicelbsModel.clearModel(), t.usersModel.clearModel(), t.firstRunService.resetCheck(), t.router.navigate(["/logout"], {
                        relativeTo: e.activatedRoute
                    }))
                }, 10)
            }, MenuComponent.prototype.cleanuplocalstorage = function() {
                localStorage.removeItem("authToken"), localStorage.removeItem("lastAccessTime"), localStorage.removeItem("username"), this.authService.isLoggedIn = !1
            }, MenuComponent.prototype.closeProfile = function() {
                jQuery("#user-profile-modal").modal("hide")
            }, MenuComponent = o([r.Component({
                selector: "menu",
                template: n(719),
                styles: [n(1029)]
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (k = "undefined" != typeof s.AuthService && s.AuthService) && k || Object, "function" == typeof (N = "undefined" != typeof S.FirstRunService && S.FirstRunService) && N || Object, "function" == typeof (P = "undefined" != typeof l.ChartService && l.ChartService) && P || Object, "function" == typeof (O = "undefined" != typeof p.NetworksModel && p.NetworksModel) && O || Object, "function" == typeof (I = "undefined" != typeof u.ApplicationGroupsModel && u.ApplicationGroupsModel) && I || Object, "function" == typeof (j = "undefined" != typeof f.AppProfilesModel && f.AppProfilesModel) && j || Object, "function" == typeof (A = "undefined" != typeof v.AuthorizationModel && v.AuthorizationModel) && A || Object, "function" == typeof (M = "undefined" != typeof h.BgpsModel && h.BgpsModel) && M || Object, "function" == typeof (D = "undefined" != typeof m.ContractGroupsModel && m.ContractGroupsModel) && D || Object, "function" == typeof (T = "undefined" != typeof g.NetprofilesModel && g.NetprofilesModel) && T || Object, "function" == typeof (x = "undefined" != typeof y.OrganizationsModel && y.OrganizationsModel) && x || Object, "function" == typeof (_ = "undefined" != typeof b.PoliciesModel && b.PoliciesModel) && _ || Object, "function" == typeof (G = "undefined" != typeof w.RulesModel && w.RulesModel) && G || Object, "function" == typeof (L = "undefined" != typeof C.ServicelbsModel && C.ServicelbsModel) && L || Object, "function" == typeof (E = "undefined" != typeof R.UsersModel && R.UsersModel) && E || Object])], MenuComponent);
            var e,
                t,
                k,
                N,
                P,
                O,
                I,
                j,
                A,
                M,
                D,
                T,
                x,
                _,
                G,
                L,
                E
        }();
    t.MenuComponent = k
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(75),
        c = n(7),
        l = n(56),
        d = n(31),
        p = function() {
            function BandwidthPolicyCreateComponent(e, t, n, o, i, r) {
                function resetForm() {
                    r.stopLoader(a), a.newPolicy = {
                        profileName: "",
                        tenantName: "",
                        bandwidth: "",
                        bandwidthUnit: "mbps",
                        DSCP: 0,
                        burst: 0
                    }
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.organizationsModel = o, this.netprofilesModel = i, this.crudHelperService = r, this.tenants = [];
                var a = this;
                resetForm()
            }
            return BandwidthPolicyCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(e), getTenants(!1)
            }, BandwidthPolicyCreateComponent.prototype.returnToPolicies = function() {
                this.router.navigate(["../../list", {
                    policyTab: l.PolicyTab.bandwidth
                }], {
                    relativeTo: this.activatedRoute
                })
            }, BandwidthPolicyCreateComponent.prototype.cancelCreating = function() {
                this.returnToPolicies()
            }, BandwidthPolicyCreateComponent.prototype.createPolicy = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.newPolicy.key = t.netprofilesModel.generateKey(t.newPolicy), t.newPolicy.bandwidth = t.newPolicy.bandwidthNumber + " " + t.newPolicy.bandwidthUnit, null == t.newPolicy.DSCP && (t.newPolicy.DSCP = 0), null == t.newPolicy.burst && (t.newPolicy.burst = 0), t.netprofilesModel.create(t.newPolicy, void 0).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Bandwidth policy: Created", e.key.toString()), t.returnToPolicies()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Bandwidth policy: Create failed", e)
                }))
            }, BandwidthPolicyCreateComponent = o([r.Component({
                selector: "bandwidthpolicycreate",
                template: n(720)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (p = "undefined" != typeof r.NgZone && r.NgZone) && p || Object, "function" == typeof (u = "undefined" != typeof d.OrganizationsModel && d.OrganizationsModel) && u || Object, "function" == typeof (f = "undefined" != typeof s.NetprofilesModel && s.NetprofilesModel) && f || Object, "function" == typeof (v = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && v || Object])], BandwidthPolicyCreateComponent);
            var e,
                t,
                p,
                u,
                f,
                v
        }();
    t.BandwidthPolicyCreateComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(75),
        c = n(7),
        l = n(56),
        d = function() {
            function BandwidthPolicyDetailsComponent(e, t, n, o) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? i.mode = "edit" : i.mode = "details"
                }
                this.activatedRoute = e, this.router = t, this.netprofilesModel = n, this.crudHelperService = o, this.bandwidthProfiles = [], this.policy = {}, this.mode = "details";
                var i = this;
                i.netprofilesModel.getModelByKey(e.snapshot.params.key, !1, void 0).then(function(e) {
                    null == e.DSCP && (e.DSCP = 0), null == e.burst && (e.burst = 0), i.policy = e;
                    var t = e.bandwidth.split(" ");
                    i.policy.bandwidthNumber = t[0], i.policy.bandwidthUnit = t[1]
                }), i.crudHelperService.stopLoader(i), setMode()
            }
            return BandwidthPolicyDetailsComponent.prototype.deletePolicy = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.netprofilesModel.deleteUsingKey(e.policy.key, "key", void 0).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Bandwidth policy: Deleted", t), e.returnToPolicies()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Bandwidth policy: Delete failed", t)
                })
            }, BandwidthPolicyDetailsComponent.prototype.returnToPolicies = function() {
                this.router.navigate(["../../../list", {
                    policyTab: l.PolicyTab.bandwidth
                }], {
                    relativeTo: this.activatedRoute
                })
            }, BandwidthPolicyDetailsComponent.prototype.returnToPolicyDetails = function() {
                this.router.navigate(["../../details", this.policy.key], {
                    relativeTo: this.activatedRoute
                })
            }, BandwidthPolicyDetailsComponent.prototype.editPolicy = function() {
                this.router.navigate(["../../edit", this.policy.key], {
                    relativeTo: this.activatedRoute
                })
            }, BandwidthPolicyDetailsComponent.prototype.cancelEditing = function() {
                this.returnToPolicyDetails()
            }, BandwidthPolicyDetailsComponent.prototype.cancelDetails = function() {
                this.returnToPolicies()
            }, BandwidthPolicyDetailsComponent.prototype.savePolicy = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.policy.bandwidth = t.policy.bandwidthNumber + " " + t.policy.bandwidthUnit, null == t.policy.DSCP && (t.policy.DSCP = 0), null == t.policy.burst && (t.policy.burst = 0), t.netprofilesModel.save(t.policy).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Bandwidth policy: Updated", e.key.toString()), t.returnToPolicyDetails()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Bandwidth policy: Update failed", e)
                }))
            }, BandwidthPolicyDetailsComponent = o([r.Component({
                selector: "bandwidthpolicydetails",
                template: n(721)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof s.NetprofilesModel && s.NetprofilesModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object])], BandwidthPolicyDetailsComponent);
            var e,
                t,
                d,
                p
        }();
    t.BandwidthPolicyDetailsComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(74),
        c = n(7),
        l = n(56),
        d = n(31),
        p = function() {
            function ContractGroupCreateComponent(e, t, n, o, i, r) {
                function resetForm() {
                    r.stopLoader(a), a.newContractGroup = {
                        contractGroupName: "",
                        tenantName: "",
                        contractsType: "",
                        contracts: []
                    }
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.organizationsModel = o, this.contractGroupsModel = i, this.crudHelperService = r, this.tenants = [];
                var a = this;
                resetForm()
            }
            return ContractGroupCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(e), getTenants(!1)
            }, ContractGroupCreateComponent.prototype.returnToContractGroups = function() {
                this.router.navigate(["../../list", {
                    policyTab: l.PolicyTab.contractGroup
                }], {
                    relativeTo: this.activatedRoute
                })
            }, ContractGroupCreateComponent.prototype.cancelCreating = function() {
                this.returnToContractGroups()
            }, ContractGroupCreateComponent.prototype.parseContracts = function() {
                var e = /\s*,\s*/;
                Array.prototype.push.apply(this.newContractGroup.contracts, this.contractsString.split(e))
            }, ContractGroupCreateComponent.prototype.createContractGroup = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.newContractGroup.key = t.contractGroupsModel.generateKey(t.newContractGroup), t.parseContracts(), t.contractGroupsModel.create(t.newContractGroup, void 0).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("External contract group: Created", e.key), t.returnToContractGroups()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("External contract group: Create failed", e)
                }))
            }, ContractGroupCreateComponent = o([r.Component({
                selector: "contractgroupcreate",
                template: n(723)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (p = "undefined" != typeof r.NgZone && r.NgZone) && p || Object, "function" == typeof (u = "undefined" != typeof d.OrganizationsModel && d.OrganizationsModel) && u || Object, "function" == typeof (f = "undefined" != typeof s.ContractGroupsModel && s.ContractGroupsModel) && f || Object, "function" == typeof (v = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && v || Object])], ContractGroupCreateComponent);
            var e,
                t,
                p,
                u,
                f,
                v
        }();
    t.ContractGroupCreateComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(74),
        c = n(7),
        l = n(56),
        d = function() {
            function ContractGroupDetailsComponent(e, t, n, o) {
                this.activatedRoute = e, this.router = t, this.contractGroupsModel = n, this.crudHelperService = o, this.contractGroup = {};
                var i = this;
                i.contractGroupsModel.getModelByKey(e.snapshot.params.key, !1, void 0).then(function(e) {
                    i.contractGroup = e
                }), i.crudHelperService.stopLoader(i)
            }
            return ContractGroupDetailsComponent.prototype.deleteContractGroup = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.contractGroupsModel.deleteUsingKey(e.contractGroup.key, "key", void 0).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("External contract group: Deleted", t), e.returnToContractGroups()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("External contract group: Delete failed", t)
                })
            }, ContractGroupDetailsComponent.prototype.returnToContractGroups = function() {
                this.router.navigate(["../../../list", {
                    policyTab: l.PolicyTab.contractGroup
                }], {
                    relativeTo: this.activatedRoute
                })
            }, ContractGroupDetailsComponent.prototype.returnToContractDetails = function() {
                this.router.navigate(["../../details", this.contractGroup.key], {
                    relativeTo: this.activatedRoute
                })
            }, ContractGroupDetailsComponent = o([r.Component({
                selector: "contractgroupdetails",
                template: n(724)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof s.ContractGroupsModel && s.ContractGroupsModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object])], ContractGroupDetailsComponent);
            var e,
                t,
                d,
                p
        }();
    t.ContractGroupDetailsComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(55),
        c = n(7),
        l = n(56),
        d = n(31),
        p = function() {
            function IsolationPolicyCreateComponent(e, t, n, o, i, r) {
                function setMode() {
                    e.routeConfig.path.includes("isolation") ? a.policyMode = "isolation" : a.policyMode = "bandwidth"
                }
                function resetForm() {
                    r.stopLoader(a), a.newPolicy = {
                        policyName: "",
                        tenantName: ""
                    }
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.organizationsModel = o, this.policiesModel = i, this.crudHelperService = r, this.tenants = [], this.policyMode = "isolation";
                var a = this;
                setMode(), resetForm()
            }
            return IsolationPolicyCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(e), getTenants(!1)
            }, IsolationPolicyCreateComponent.prototype.returnToPolicies = function() {
                this.router.navigate(["../../list", {
                    policyTab: l.PolicyTab.isolation
                }], {
                    relativeTo: this.activatedRoute
                })
            }, IsolationPolicyCreateComponent.prototype.cancelCreating = function() {
                this.returnToPolicies()
            }, IsolationPolicyCreateComponent.prototype.createPolicy = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.newPolicy.key = t.policiesModel.generateKey(t.newPolicy), t.policiesModel.create(t.newPolicy, void 0).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Isolation policy: Created", e.key), t.returnToPolicies()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Isolation policy: Create failed", e)
                }))
            }, IsolationPolicyCreateComponent = o([r.Component({
                selector: "isolationpolicycreate",
                template: n(726)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (p = "undefined" != typeof r.NgZone && r.NgZone) && p || Object, "function" == typeof (u = "undefined" != typeof d.OrganizationsModel && d.OrganizationsModel) && u || Object, "function" == typeof (f = "undefined" != typeof s.PoliciesModel && s.PoliciesModel) && f || Object, "function" == typeof (v = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && v || Object])], IsolationPolicyCreateComponent);
            var e,
                t,
                p,
                u,
                f,
                v
        }();
    t.IsolationPolicyCreateComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(55),
        c = n(103),
        l = n(39),
        d = n(42),
        p = n(7),
        u = n(56),
        f = n(11),
        v = function() {
            function IsolationPolicyDetailsComponent(e, t, n, o, i, r, a) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? s.mode = "edit" : s.mode = "details"
                }
                function getNetworks() {
                    s.networksModel.get(!1).then(function(e) {
                        s.networks = _.filter(e, {
                            tenantName: s.policy.tenantName
                        })
                    }, function(e) {})
                }
                function getApplicationGroups() {
                    s.applicationGroupsModel.get(!1).then(function(e) {
                        s.applicationGroups = _.filter(e, {
                            tenantName: s.policy.tenantName
                        })
                    })
                }
                this.activatedRoute = e, this.router = t, this.policiesModel = n, this.rulesModel = o, this.networksModel = i, this.applicationGroupsModel = r, this.crudHelperService = a, this.policy = {}, this.incomingRules = [], this.outgoingRules = [], this.mode = "details", this.newIncomingRule = {}, this.newOutgoingRule = {}, this.networks = [], this.applicationGroups = [], this.disableOutgoingNetworkSelection = !1, this.disableIncomingNetworkSelection = !1, this.disableOutgoingApplicationGroupSelection = !1, this.disableIncomingApplicationGroupSelection = !1, this.disableIncomingIPAddressSelection = !1, this.disableOutgoingIPAddressSelection = !1, this.newIncomingSelectedApplicationGroup = "", this.newOutgoingSelectedApplicationGroup = "", this.newIncomingSelectedNetwork = "", this.newOutgoingSelectedNetwork = "", this.incorrectCIDR = !1, this.validateCIDRFlag = !1, this.infoselected = !0, this.statskey = "";
                var s = this;
                this.statskey = e.snapshot.params.key, s.crudHelperService.stopLoader(s), s.policiesModel.getModelByKey(e.snapshot.params.key, !1, "key").then(function(e) {
                    s.policy = e, s.rulesModel.getIncomingRules(e.policyName, e.tenantName).then(function(e) {
                        s.incomingRules = e, s.resetNewIncomingRule()
                    }), s.rulesModel.getOutgoingRules(e.policyName, e.tenantName).then(function(e) {
                        s.outgoingRules = e, s.resetNewOutgoingRule()
                    })
                }), getNetworks(), getApplicationGroups(), setMode()
            }
            return IsolationPolicyDetailsComponent.prototype.returnToPolicies = function() {
                this.router.navigate(["../../../list", {
                    policyTab: u.PolicyTab.isolation
                }], {
                    relativeTo: this.activatedRoute
                })
            }, IsolationPolicyDetailsComponent.prototype.returnToPolicyDetails = function() {
                this.router.navigate(["../../details", this.policy.key], {
                    relativeTo: this.activatedRoute
                })
            }, IsolationPolicyDetailsComponent.prototype.editPolicy = function() {
                this.router.navigate(["../../edit", this.policy.key], {
                    relativeTo: this.activatedRoute
                })
            }, IsolationPolicyDetailsComponent.prototype.cancelDetails = function() {
                this.returnToPolicies()
            }, IsolationPolicyDetailsComponent.prototype.cancelEditing = function() {
                this.returnToPolicyDetails()
            }, IsolationPolicyDetailsComponent.prototype.doneEditing = function() {
                this.returnToPolicyDetails()
            }, IsolationPolicyDetailsComponent.prototype.deletePolicy = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.policiesModel["delete"](e.policy).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Isolation policy: Deleted", t), e.returnToPolicies()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Isolation policy: Delete failed", t)
                })
            }, IsolationPolicyDetailsComponent.prototype.validateCIDR = function(e) {
                var t = new RegExp(f.ContivGlobals.CIDR_REGEX);
                return "" == e ? !0 : t.test(e) ? (this.incorrectCIDR = !1, !0) : (this.incorrectCIDR = !0, this.validateCIDRFlag = !0, !1)
            }, IsolationPolicyDetailsComponent.prototype.resetNewIncomingRule = function() {
                this.newIncomingRule = {
                    ruleId: "",
                    priority: 1,
                    action: "allow",
                    fromEndpointGroup: "",
                    fromNetwork: "",
                    fromIpAddress: "",
                    protocol: "tcp",
                    port: 0,
                    direction: "in",
                    tenantName: this.policy.tenantName,
                    policyName: this.policy.policyName
                }, this.newIncomingSelectedApplicationGroup = "", this.newIncomingSelectedNetwork = "", this.disableIncomingNetworkSelection = !1, this.disableIncomingApplicationGroupSelection = !1, this.disableIncomingIPAddressSelection = !1, this.incorrectCIDR = !1, this.validateCIDRFlag = !1
            }, IsolationPolicyDetailsComponent.prototype.resetNewOutgoingRule = function() {
                this.newOutgoingRule = {
                    ruleId: "",
                    priority: 1,
                    action: "allow",
                    toEndpointGroup: "",
                    toNetwork: "",
                    toIpAddress: "",
                    protocol: "tcp",
                    port: 0,
                    direction: "out",
                    tenantName: this.policy.tenantName,
                    policyName: this.policy.policyName
                }, this.newOutgoingSelectedApplicationGroup = "", this.newOutgoingSelectedNetwork = "", this.disableOutgoingNetworkSelection = !1, this.disableOutgoingApplicationGroupSelection = !1, this.disableOutgoingIPAddressSelection = !1, this.incorrectCIDR = !1, this.validateCIDRFlag = !1
            }, IsolationPolicyDetailsComponent.prototype.onChangeOutgoingApplicationGroupSelection = function(e) {
                e ? (this.newOutgoingRule.toEndpointGroup = e, this.newOutgoingRule.toNetwork = "", this.disableOutgoingNetworkSelection = !0) : (this.newOutgoingRule.toEndpointGroup = "", this.disableOutgoingNetworkSelection = !1)
            }, IsolationPolicyDetailsComponent.prototype.onChangeIncomingApplicationGroupSelection = function(e) {
                e ? (this.newIncomingRule.fromEndpointGroup = e, this.newIncomingRule.fromNetwork = "", this.disableIncomingNetworkSelection = !0) : (this.newIncomingRule.fromEndpointGroup = "", this.disableOutgoingApplicationGroupSelection = !1, this.disableIncomingNetworkSelection = !1)
            }, IsolationPolicyDetailsComponent.prototype.onChangeOutgoingNetworkSelection = function(e) {
                e ? (this.newOutgoingRule.toNetwork = e, this.newOutgoingRule.ToEndpointGroup = "", this.disableOutgoingApplicationGroupSelection = !0, this.disableOutgoingIPAddressSelection = !0) : (this.newOutgoingRule.toIpAddress = "", this.disableOutgoingApplicationGroupSelection = !1, this.disableOutgoingIPAddressSelection = !1)
            }, IsolationPolicyDetailsComponent.prototype.onChangeIncomingNetworkSelection = function(e) {
                e ? (this.newIncomingRule.fromNetwork = e, this.newIncomingRule.fromEndpointGroup = "", this.disableIncomingApplicationGroupSelection = !0, this.disableIncomingIPAddressSelection = !0) : (this.newIncomingRule.fromNetwork = "", this.disableIncomingApplicationGroupSelection = !1, this.disableIncomingIPAddressSelection = !1)
            }, IsolationPolicyDetailsComponent.prototype.onChangeIncomingIPAddress = function() {
                "" == this.newIncomingRule.fromIpAddress ? (this.incorrectCIDR = !1, this.disableIncomingNetworkSelection = !1) : this.disableIncomingNetworkSelection = !0, this.validateCIDRFlag && this.incorrectCIDR && this.validateCIDR(this.newIncomingRule.fromIpAddress)
            }, IsolationPolicyDetailsComponent.prototype.onChangeOutgoingIPAddress = function() {
                "" == this.newOutgoingRule.toIpAddress ? (this.incorrectCIDR = !1, this.disableOutgoingNetworkSelection = !1) : this.disableOutgoingNetworkSelection = !0, this.validateCIDRFlag && this.incorrectCIDR && this.validateCIDR(this.newOutgoingRule.toIpAddress)
            }, IsolationPolicyDetailsComponent.prototype.generateRuleId = function(e) {
                e.ruleId = (this.incomingRules.length + this.outgoingRules.length + 1).toString() + "-" + Date.now().toString()
            }, IsolationPolicyDetailsComponent.prototype.addIncomingRule = function() {
                var e = this;
                e.validateCIDR(e.newIncomingRule.fromIpAddress) && (e.crudHelperService.startLoader(e), e.generateRuleId(e.newIncomingRule), e.newIncomingRule.key = e.rulesModel.generateKey(e.newIncomingRule), e.rulesModel.create(e.newIncomingRule, void 0).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.incomingRules.push(t), e.resetNewIncomingRule(), e.crudHelperService.showNotification("Isolation policy: Incoming rules added", t.key.toString())
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Isolation policy: Adding incoming rules failed", t)
                }))
            }, IsolationPolicyDetailsComponent.prototype.addOutgoingRule = function() {
                var e = this;
                e.validateCIDR(e.newOutgoingRule.toIpAddress) && (e.crudHelperService.startLoader(e), e.generateRuleId(e.newOutgoingRule), e.newOutgoingRule.key = e.rulesModel.generateKey(e.newOutgoingRule), e.rulesModel.create(e.newOutgoingRule, void 0).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.outgoingRules.push(t), e.resetNewOutgoingRule(), e.crudHelperService.showNotification("Isolation policy: Outgoing rules added", t.key.toString())
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Isolation policy: Adding outgoing rules failed", t)
                }))
            }, IsolationPolicyDetailsComponent.prototype.deleteIncomingRule = function(e) {
                var t = this;
                t.crudHelperService.startLoader(t), t.rulesModel.deleteUsingKey(e, "key", void 0).then(function(n) {
                    t.crudHelperService.stopLoader(t), _.remove(t.incomingRules, function(t) {
                        return t.key == e
                    }), t.crudHelperService.showNotification("Isolation policy: Incoming rules deleted", n)
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Isolation policy: Deleting incoming rules failed", e)
                })
            }, IsolationPolicyDetailsComponent.prototype.deleteOutgoingRule = function(e) {
                var t = this;
                t.crudHelperService.startLoader(t), t.rulesModel.deleteUsingKey(e, "key", void 0).then(function(n) {
                    t.crudHelperService.stopLoader(t), _.remove(t.outgoingRules, function(t) {
                        return t.key == e
                    }), t.crudHelperService.showNotification("Isolation policy: Outgoing rules deleted", n)
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Isolation policy: Deleting outgoing rules failed", e)
                })
            }, IsolationPolicyDetailsComponent = o([r.Component({
                selector: "isolationpolicydetails",
                template: n(727)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (v = "undefined" != typeof s.PoliciesModel && s.PoliciesModel) && v || Object, "function" == typeof (h = "undefined" != typeof c.RulesModel && c.RulesModel) && h || Object, "function" == typeof (m = "undefined" != typeof l.NetworksModel && l.NetworksModel) && m || Object, "function" == typeof (g = "undefined" != typeof d.ApplicationGroupsModel && d.ApplicationGroupsModel) && g || Object, "function" == typeof (y = "undefined" != typeof p.CRUDHelperService && p.CRUDHelperService) && y || Object])], IsolationPolicyDetailsComponent);
            var e,
                t,
                v,
                h,
                m,
                g,
                y
        }();
    t.IsolationPolicyDetailsComponent = v
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(39),
        s = n(7),
        c = n(5),
        l = n(11),
        d = n(102),
        p = function() {
            function NetworkCreateComponent(e, t, n, o) {
                this.router = e, this.activatedRoute = t, this.networksModel = n, this.crudHelperService = o,
                this.tenants = [], this.showLoader = !1, this.cidrPattern = l.ContivGlobals.CIDR_REGEX, this.newNetwork = {
                    networkName: "",
                    encap: "vlan",
                    subnet: "",
                    gateway: "",
                    tenantName: "",
                    key: "",
                    nwType: "data",
                    pktTag: null,
                    cfgdTag: ""
                }, this.networkCreateCtrl = this
            }
            return NetworkCreateComponent.prototype.returnToNetworks = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, NetworkCreateComponent.prototype.cancelCreating = function() {
                this.returnToNetworks()
            }, NetworkCreateComponent.prototype.createNetwork = function(e) {
                var t = this;
                this.newNetwork = e, t.crudHelperService.startLoader(t), this.newNetwork.key = this.newNetwork.tenantName + ":" + this.newNetwork.networkName, this.networksModel.create(this.newNetwork, void 0).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Network: Created", e.key.toString()), t.returnToNetworks()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Network: Create failed", e)
                }), setTimeout(function() {
                    1 == t.showLoader && (t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Network: Create task submitted", t.newNetwork.key, d.NotificationType.info), t.returnToNetworks())
                }, 2e3)
            }, NetworkCreateComponent = o([r.Component({
                selector: "networkcreate",
                template: n(731)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof c.Router && c.Router) && e || Object, "function" == typeof (t = "undefined" != typeof c.ActivatedRoute && c.ActivatedRoute) && t || Object, "function" == typeof (p = "undefined" != typeof a.NetworksModel && a.NetworksModel) && p || Object, "function" == typeof (u = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && u || Object])], NetworkCreateComponent);
            var e,
                t,
                p,
                u
        }();
    t.NetworkCreateComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(42),
        l = n(39),
        d = n(14),
        p = n(5),
        u = n(102),
        f = n(28),
        v = function() {
            function NetworkdetailsComponent(e, t, n, o, i) {
                var r = this;
                this.route = e, this.router = t, this.applicationGroupsModel = n, this.networksModel = o, this.crudHelperService = i, this.infoselected = !0, this.statskey = "", this.showLoader = !0, this.network = {
                    networkName: "",
                    encap: "",
                    subnet: "",
                    gateway: ""
                }, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    1 != r.showloader && r.getApplicationGroups(!0)
                }), this.networkDetailsCtrl = this
            }
            return NetworkdetailsComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.statskey = this.route.snapshot.params.key, this.getNetwork(!1)
            }, NetworkdetailsComponent.prototype.getApplicationGroups = function(e) {
                var t = this;
                d.isUndefined(t.network) || this.applicationGroupsModel.get(e).then(function(e) {
                    t.applicationGroups = f.filter(e, {
                        networkName: t.network.networkName,
                        tenantName: t.network.tenantName
                    }), t.crudHelperService.stopLoader(t)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, NetworkdetailsComponent.prototype.getNetwork = function(e) {
                var t = this;
                this.networksModel.getModelByKey(this.route.snapshot.params.key, e, "key").then(function(e) {
                    t.network = e, t.getApplicationGroups(!1)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, NetworkdetailsComponent.prototype.deleteNetwork = function() {
                var e = this;
                this.crudHelperService.startLoader(e), d.isUndefined(e.network) || this.networksModel["delete"](e.network).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Network: Deleted", t.toString()), e.returnToNetworks()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Network: Delete failed", t)
                }), setTimeout(function() {
                    1 == e.showLoader && (e.crudHelperService.showNotification("Network: Delete task submitted", e.network.key, u.NotificationType.info), e.crudHelperService.stopLoader(e))
                }, 2e3)
            }, NetworkdetailsComponent.prototype.returnToNetworks = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.route
                })
            }, NetworkdetailsComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, NetworkdetailsComponent = o([r.Component({
                selector: "networkdetails",
                template: n(732)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof p.ActivatedRoute && p.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof p.Router && p.Router) && t || Object, "function" == typeof (v = "undefined" != typeof c.ApplicationGroupsModel && c.ApplicationGroupsModel) && v || Object, "function" == typeof (h = "undefined" != typeof l.NetworksModel && l.NetworksModel) && h || Object, "function" == typeof (m = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && m || Object])], NetworkdetailsComponent);
            var e,
                t,
                v,
                h,
                m
        }();
    t.NetworkdetailsComponent = v
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(39),
        s = n(7),
        c = n(16),
        l = n(5),
        d = function() {
            function NetworkListComponent(e, t, n, o) {
                var i = this;
                this.router = e, this.activatedRoute = t, this.networksModel = n, this.crudHelperService = o, this.networkListComp = this, this.showLoader = !0, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    i.getNetworks(!0)
                })
            }
            return NetworkListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getNetworks(!1)
            }, NetworkListComponent.prototype.getNetworks = function(e) {
                var t = this;
                this.networksModel.get(e).then(function(e) {
                    t.networks = e, t.crudHelperService.stopLoader(t)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, NetworkListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, NetworkListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, NetworkListComponent = o([r.Component({
                selector: "networkList",
                template: n(734)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof l.Router && l.Router) && e || Object, "function" == typeof (t = "undefined" != typeof l.ActivatedRoute && l.ActivatedRoute) && t || Object, "function" == typeof (d = "undefined" != typeof a.NetworksModel && a.NetworksModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object])], NetworkListComponent);
            var e,
                t,
                d,
                p
        }();
    t.NetworkListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(65),
        c = n(39),
        l = n(5),
        d = n(31),
        p = n(28),
        u = function() {
            function ServicelbCreateComponent(e, t, n, o, i, r, a) {
                this.router = e, this.activatedRoute = t, this.ngZone = n, this.organizationsModel = o, this.servicelbsModel = i, this.crudHelperService = r, this.networksModel = a, this.networks = [], this.labelSelectors = [], this.tenants = [], this.servicelb = {
                    serviceName: "",
                    networkName: "",
                    ipAddress: "",
                    selectors: [],
                    ports: [],
                    tenantName: "",
                    key: ""
                }, this.servicelbCreateCtrl = this
            }
            return ServicelbCreateComponent.prototype.ngOnInit = function() {
                function getTenants(t) {
                    e.organizationsModel.get(t).then(function(t) {
                        e.tenants = t, e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    }, function(t) {
                        e.ngZone.run(function() {
                            e.crudHelperService.stopLoader(e)
                        })
                    })
                }
                var e = this;
                e.crudHelperService.startLoader(this), getTenants(!1)
            }, ServicelbCreateComponent.prototype.getNetworks = function(e) {
                var t = this;
                this.networksModel.get(!1).then(function(n) {
                    t.networks = p.filter(n, {
                        tenantName: e
                    }), t.crudHelperService.stopLoader(t)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, ServicelbCreateComponent.prototype.createServicelb = function(e) {
                var t = this,
                    n = this;
                this.createLabelSelectorStrings(), e && (this.crudHelperService.startLoader(this), this.servicelb.key = this.servicelb.tenantName + ":" + this.servicelb.serviceName, this.servicelbsModel.create(this.servicelb, void 0).then(function(e) {
                    n.crudHelperService.stopLoader(n), n.crudHelperService.showNotification("Service load balancer: Created", e.key.toString()), t.returnToServicelbs()
                }, function(e) {
                    n.crudHelperService.stopLoader(n), n.crudHelperService.showServerError("Service load balancer: Create failed", e)
                }))
            }, ServicelbCreateComponent.prototype.cancelCreating = function() {
                this.returnToServicelbs()
            }, ServicelbCreateComponent.prototype.returnToServicelbs = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, ServicelbCreateComponent.prototype.createLabelSelectorStrings = function() {
                var e = this;
                this.labelSelectors.forEach(function(t) {
                    var n = t.name + "=" + t.value;
                    e.servicelb.selectors.push(n)
                })
            }, ServicelbCreateComponent.prototype.updateTenant = function(e) {
                this.servicelb.tenantName = e, this.getNetworks(e)
            }, ServicelbCreateComponent = o([r.Component({
                selector: "servicelbCreate",
                template: n(736)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof l.Router && l.Router) && e || Object, "function" == typeof (t = "undefined" != typeof l.ActivatedRoute && l.ActivatedRoute) && t || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object, "function" == typeof (f = "undefined" != typeof d.OrganizationsModel && d.OrganizationsModel) && f || Object, "function" == typeof (v = "undefined" != typeof s.ServicelbsModel && s.ServicelbsModel) && v || Object, "function" == typeof (h = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && h || Object, "function" == typeof (m = "undefined" != typeof c.NetworksModel && c.NetworksModel) && m || Object])], ServicelbCreateComponent);
            var e,
                t,
                u,
                f,
                v,
                h,
                m
        }();
    t.ServicelbCreateComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(195),
        s = n(197),
        c = n(5),
        l = (n(28), function() {
            function ServicelbDetailsComponent(e, t) {
                this.router = e, this.activatedRoute = t, this.infoselected = !0, this.statskey = "", this.mode = "details", this.serviceName = "", this.servicelbDetailsCtrl = this
            }
            return ServicelbDetailsComponent.prototype.ngOnInit = function() {
                this.statskey = this.activatedRoute.snapshot.params.key
            }, ServicelbDetailsComponent.prototype.returnToServicelbs = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, ServicelbDetailsComponent.prototype.cancelDetails = function() {
                this.returnToServicelbs()
            }, ServicelbDetailsComponent.prototype.cancelEditing = function() {
                this.returnToServicelbs()
            }, ServicelbDetailsComponent.prototype.loadDetails = function() {
                this.mode = "details"
            }, ServicelbDetailsComponent.prototype.loadEdit = function() {
                this.mode = "edit"
            }, ServicelbDetailsComponent.prototype.deleteServicelb = function() {
                this.servielbInfo.deleteServicelb()
            }, o([r.ViewChild(a.ServicelbInfoComponent), i("design:type", "function" == typeof (e = "undefined" != typeof a.ServicelbInfoComponent && a.ServicelbInfoComponent) && e || Object)], ServicelbDetailsComponent.prototype, "servielbInfo", void 0), o([r.ViewChild(s.ServicelbStatComponent), i("design:type", "function" == typeof (t = "undefined" != typeof a.ServicelbInfoComponent && a.ServicelbInfoComponent) && t || Object)], ServicelbDetailsComponent.prototype, "servielbStat", void 0), ServicelbDetailsComponent = o([r.Component({
                selector: "servicelbDetails",
                template: n(737)
            }), i("design:paramtypes", ["function" == typeof (l = "undefined" != typeof c.Router && c.Router) && l || Object, "function" == typeof (d = "undefined" != typeof c.ActivatedRoute && c.ActivatedRoute) && d || Object])], ServicelbDetailsComponent);
            var e,
                t,
                l,
                d
        }());
    t.ServicelbDetailsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(65),
        c = n(5),
        l = (n(28), function() {
            function ServicelbInfoComponent(e, t, n, o, i) {
                this.router = e, this.activatedRoute = t, this.servicelbsModel = n, this.crudHelperService = o, this.infoselected = !0, this.statskey = "", this.showLoader = !0, this.mode = "details", this.servicelb = {
                    serviceName: "",
                    networkName: "",
                    ipAddress: "",
                    selectors: [],
                    ports: [],
                    tenantName: "default",
                    key: ""
                }, this.labelSelectors = [], this.modeChange = new r.EventEmitter, this.serviceName = new r.EventEmitter, this.ngZone = i, this.servicelbInfoCtrl = this
            }
            return ServicelbInfoComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.statskey = this.activatedRoute.snapshot.params.key, this.getServicelbs(!1)
            }, ServicelbInfoComponent.prototype.returnToServicelbDetails = function() {
                this.mode = "details", this.modeChange.emit(this.mode)
            }, ServicelbInfoComponent.prototype.returnToServicelbs = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, ServicelbInfoComponent.prototype.getServicelbs = function(e) {
                var t = this;
                this.servicelbsModel.getModelByKey(this.statskey, !1, "key").then(function(e) {
                    t.servicelb = e, t.createEditViewLabels(), t.serviceName.emit(t.servicelb.serviceName), t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, ServicelbInfoComponent.prototype.createEditViewLabels = function() {
                var e = this;
                this.servicelb.selectors.forEach(function(t) {
                    var n = {
                        name: t.split("=")[0],
                        value: t.split("=")[1]
                    };
                    e.labelSelectors.push(n)
                })
            }, ServicelbInfoComponent.prototype.createLabelSelectorStrings = function() {
                var e = this;
                this.servicelb.selectors = [], this.labelSelectors.forEach(function(t) {
                    var n = t.name + "=" + t.value;
                    e.servicelb.selectors.push(n)
                })
            }, ServicelbInfoComponent.prototype.saveServicelb = function() {
                this.crudHelperService.startLoader(this);
                var e = this.servicelb.selectors.slice();
                this.createLabelSelectorStrings();
                var t = this;
                this.servicelbsModel.save(this.servicelb).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Service load balancer: Updated", e.key.toString())
                    }), t.returnToServicelbDetails()
                }, function(n) {
                    t.servicelb.selectors = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Service load balancer: Update failed", n)
                    })
                })
            }, ServicelbInfoComponent.prototype.deleteServicelb = function() {
                this.crudHelperService.startLoader(this);
                var e = this;
                this.servicelbsModel["delete"](this.servicelb).then(function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Service load balancer: Deleted", t.toString())
                    }), e.returnToServicelbs()
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Service load balancer: Delete failed", t)
                    })
                })
            }, ServicelbInfoComponent.prototype.cancelEditing = function() {
                this.returnToServicelbDetails()
            }, o([r.Input("mode"), i("design:type", String)], ServicelbInfoComponent.prototype, "mode", void 0), o([r.Output("modeChange"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], ServicelbInfoComponent.prototype, "modeChange", void 0), o([r.Output("serviceName"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], ServicelbInfoComponent.prototype, "serviceName", void 0), ServicelbInfoComponent = o([r.Component({
                selector: "servicelb-info",
                template: n(738)
            }), i("design:paramtypes", ["function" == typeof (l = "undefined" != typeof c.Router && c.Router) && l || Object, "function" == typeof (d = "undefined" != typeof c.ActivatedRoute && c.ActivatedRoute) && d || Object, "function" == typeof (p = "undefined" != typeof s.ServicelbsModel && s.ServicelbsModel) && p || Object, "function" == typeof (u = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && u || Object, "function" == typeof (f = "undefined" != typeof r.NgZone && r.NgZone) && f || Object])], ServicelbInfoComponent);
            var e,
                t,
                l,
                d,
                p,
                u,
                f
        }());
    t.ServicelbInfoComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(65),
        l = n(5),
        d = function() {
            function ServicelbListComponent(e, t, n, o, i) {
                var r = this;
                this.router = e, this.route = t, this.ngZone = i, this.servicelbsModel = n, this.crudHelperService = o, this.servicelbListCtrl = this, this.count = 0, this.showLoader = !0, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    r.getServicelbs(!0)
                })
            }
            return ServicelbListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getServicelbs(!1)
            }, ServicelbListComponent.prototype.getServicelbs = function(e) {
                var t = this;
                this.servicelbsModel.get(e).then(function(e) {
                    t.servicelbs = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, ServicelbListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.route
                })
            }, ServicelbListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, ServicelbListComponent = o([r.Component({
                selector: "servicelbList",
                template: n(739)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof l.Router && l.Router) && e || Object, "function" == typeof (t = "undefined" != typeof l.ActivatedRoute && l.ActivatedRoute) && t || Object, "function" == typeof (d = "undefined" != typeof c.ServicelbsModel && c.ServicelbsModel) && d || Object, "function" == typeof (p = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], ServicelbListComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.ServicelbListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(86),
        l = n(14),
        d = n(65),
        p = n(11),
        u = function() {
            function ServicelbStatComponent(e, t, n, o) {
                var i = this;
                this.crudHelperService = t, this.servicelbsModel = e, this.inspectSerrvice = n, this.showLoader = !0, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    "" != i.statkey && i.getServicelbInspect(!0)
                }), this.servicelbInspectStats = {
                    allocatedAddressesCount: "",
                    allocatedIPAddresses: "",
                    dnsServerIP: "",
                    externalPktTag: "",
                    numEndpoints: "",
                    pktTag: ""
                }, this.config = {
                    serviceName: ""
                }, this.providers = [], this.filteredproviders = [], this.providerDetails = {}, this.ngZone = o, this.servicelbStatsCtrl = this, this.statkey = ""
            }
            return ServicelbStatComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), "" != this.statkey && this.getServicelbInspect(!1)
            }, ServicelbStatComponent.prototype.getServicelbInspect = function(e) {
                var t = this;
                this.servicelbsModel.getInspectByKey(this.statkey, p.ContivGlobals.SERVICELBS_INSPECT_ENDPOINT, e).then(function(e) {
                    if (t.servicelbInspectStats = e.Oper, t.config = e.Config, l.isUndefined(e.Oper.providers))
                        t.providers = [], t.providerDetails = {};
                    else {
                        var n = t.inspectSerrvice.buildEndPoints(e.Oper.providers);
                        t.inspectSerrvice.checkContainerChanged(t.providerDetails, n) && (t.providers = e.Oper.providers, t.providerDetails = n)
                    }
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, ServicelbStatComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, o([r.Input("statkey"), i("design:type", String)], ServicelbStatComponent.prototype, "statkey", void 0), ServicelbStatComponent = o([r.Component({
                selector: "servicelb-stat",
                template: n(741)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof d.ServicelbsModel && d.ServicelbsModel) && e || Object, "function" == typeof (t = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && t || Object, "function" == typeof (u = "undefined" != typeof c.InspectService && c.InspectService) && u || Object, "function" == typeof (f = "undefined" != typeof r.NgZone && r.NgZone) && f || Object])], ServicelbStatComponent);
            var e,
                t,
                u,
                f
        }();
    t.ServicelbStatComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(66),
        l = n(31),
        d = n(83),
        p = function() {
            function AuthorizationCreateComponent(e, t, n, o, i, r) {
                this.activatedRoute = e, this.router = t, this.crudHelperService = n, this.authorizationModel = o, this.organizationsModel = i, this.usersModel = r, this.authorization = {
                    PrincipalName: "",
                    Local: !1,
                    Role: "",
                    TenantName: ""
                }, this.tenants = [], this.users = [], this.usertype = "", this.showLoader = !1, this.usertype = "local"
            }
            return AuthorizationCreateComponent.prototype.ngOnInit = function() {
                this.getOrganization()
            }, AuthorizationCreateComponent.prototype.getOrganization = function() {
                var e = this;
                this.crudHelperService.startLoader(this), this.organizationsModel.get(!1).then(function(t) {
                    e.tenants = t, e.getUsers()
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, AuthorizationCreateComponent.prototype.getUsers = function() {
                var e = this;
                this.usersModel.get(!1).then(function(t) {
                    e.users = t, e.crudHelperService.stopLoader(e)
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, AuthorizationCreateComponent.prototype.returnToAuthList = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, AuthorizationCreateComponent.prototype.cancelCreating = function() {
                this.returnToAuthList()
            }, AuthorizationCreateComponent.prototype.changeAuthType = function() {
                "local" === this.usertype ? this.authorization.Local = !0 : this.authorization.Local = !1
            }, AuthorizationCreateComponent.prototype.checkRole = function() {
                "admin" === this.authorization.Role && (this.authorization.TenantName = "")
            }, AuthorizationCreateComponent.prototype.createAuthorization = function(e) {
                var t = this;
                e && (this.crudHelperService.startLoader(this), this.changeAuthType(), this.authorizationModel.create(this.authorization).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Authorization: Created", e.PrincipalName + "::" + e.TenantName + "::" + e.Role), t.returnToAuthList()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Authorization: Create failed", e)
                }))
            }, AuthorizationCreateComponent = o([r.Component({
                selector: "authorizationcreate",
                template: n(742)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof d.AuthorizationModel && d.AuthorizationModel) && u || Object, "function" == typeof (f = "undefined" != typeof l.OrganizationsModel && l.OrganizationsModel) && f || Object, "function" == typeof (v = "undefined" != typeof c.UsersModel && c.UsersModel) && v || Object])], AuthorizationCreateComponent);
            var e,
                t,
                p,
                u,
                f,
                v
        }();
    t.AuthorizationCreateComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(83),
        s = n(7),
        c = n(5),
        l = n(31),
        d = function() {
            function AuthorizationDetailsComponent(e, t, n, o, i) {
                function setMode() {
                    o.routeConfig.path.includes("edit") ? r.mode = "edit" : r.mode = "details"
                }
                this.authorizationModel = e, this.crudHelperService = t, this.router = n, this.activatedRoute = o, this.organizationModel = i, this.authorization = {
                    AuthzUUID: "",
                    PrincipalName: "",
                    Local: !1,
                    Role: "",
                    TenantName: ""
                }, this.mode = "details", this.showLoader = !1, this.tenants = [], this.isRootAdmin = !1;
                var r = this;
                setMode()
            }
            return AuthorizationDetailsComponent.prototype.ngOnInit = function() {
                this.getAuthorizationDetail()
            }, AuthorizationDetailsComponent.prototype.getAuthorizationDetail = function() {
                var e = this;
                this.crudHelperService.startLoader(this), this.authorizationModel.getModelByKey(this.activatedRoute.snapshot.params.key, !1, "AuthzUUID").then(function(t) {
                    e.authorization = t, e.isRootAdmin = "admin" === t.PrincipalName && "admin" === t.Role, e.getOrganization()
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, AuthorizationDetailsComponent.prototype.getOrganization = function() {
                var e = this;
                this.organizationModel.get(!1).then(function(t) {
                    e.tenants = t, e.crudHelperService.stopLoader(e)
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, AuthorizationDetailsComponent.prototype.returnToList = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, AuthorizationDetailsComponent.prototype.editAuthorization = function() {
                this.router.navigate(["../../edit", this.authorization.AuthzUUID], {
                    relativeTo: this.activatedRoute
                })
            }, AuthorizationDetailsComponent.prototype.returntoAuthDetails = function() {
                this.router.navigate(["../../details", this.authorization.AuthzUUID], {
                    relativeTo: this.activatedRoute
                })
            }, AuthorizationDetailsComponent.prototype.cancelEditing = function() {
                this.returntoAuthDetails()
            }, AuthorizationDetailsComponent.prototype.saveAuthorization = function() {
                var e = this;
                e.crudHelperService.startLoader(e), this.authorizationModel.save(this.authorization).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Authorization: Updated", t.PrincipalName + "::" + t.TenantName + "::" + t.Role), e.returntoAuthDetails()
                })
            }, AuthorizationDetailsComponent.prototype.deleteAuthorization = function() {
                var e = this;
                e.crudHelperService.startLoader(e), this.authorizationModel["delete"](e.authorization.AuthzUUID).then(function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showNotification("Authorization: Deleted", t), e.crudHelperService.stopLoader(e), e.returnToList()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Authorization: Delete failed", t), e.crudHelperService.stopLoader(e), e.returnToList()
                })
            }, AuthorizationDetailsComponent = o([r.Component({
                selector: "authorizationdetails",
                template: n(743)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.AuthorizationModel && a.AuthorizationModel) && e || Object, "function" == typeof (t = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && t || Object, "function" == typeof (d = "undefined" != typeof c.Router && c.Router) && d || Object, "function" == typeof (p = "undefined" != typeof c.ActivatedRoute && c.ActivatedRoute) && p || Object, "function" == typeof (u = "undefined" != typeof l.OrganizationsModel && l.OrganizationsModel) && u || Object])], AuthorizationDetailsComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.AuthorizationDetailsComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(16),
        s = n(7),
        c = n(83),
        l = n(5),
        d = function() {
            function AuthorizationListComponent(e, t, n, o) {
                var i = this;
                this.crudHelperService = e, this.authorizationModel = t, this.router = n, this.activatedRoute = o, this.authorizations = [], this.filteredauth = [], this.showLoader = !1, this.refresh = a.Observable.interval(5e3).subscribe(function() {
                    i.getAuthorization(!0)
                })
            }
            return AuthorizationListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getAuthorization(!1)
            }, AuthorizationListComponent.prototype.getAuthorization = function(e) {
                var t = this;
                this.authorizationModel.get(e).then(function(e) {
                    t.authorizations = e, t.crudHelperService.stopLoader(t)
                }, function(e) {
                    t.crudHelperService.stopLoader(t)
                })
            }, AuthorizationListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, AuthorizationListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, AuthorizationListComponent = o([r.Component({
                selector: "authorizationlist",
                template: n(744)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && e || Object, "function" == typeof (t = "undefined" != typeof c.AuthorizationModel && c.AuthorizationModel) && t || Object, "function" == typeof (d = "undefined" != typeof l.Router && l.Router) && d || Object, "function" == typeof (p = "undefined" != typeof l.ActivatedRoute && l.ActivatedRoute) && p || Object])], AuthorizationListComponent);
            var e,
                t,
                d,
                p
        }();
    t.AuthorizationListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function LdapConfigComponent() {}
            return LdapConfigComponent = o([r.Component({
                selector: "ldapconfig",
                template: "\n        <ldapsettings></ldapsettings>\n        "
            }), i("design:paramtypes", [])], LdapConfigComponent)
        }();
    t.LdapConfigComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(16),
        s = n(7),
        c = n(87),
        l = function() {
            function NetworkSettingsComponent(e, t) {
                function getNetworkSettings() {
                    o.crudHelperService.startLoader(o), o.networkService.getSettings().then(function(e) {
                        o.setting = e, getAciSettings()
                    }, function(e) {
                        DashboardComponent
                        getAciSettings()
                    })
                }
                function getAciSettings() {
                    t.getAciSettings().then(function(e) {
                        o.aciSetting = e, o.getGlobalInspect(!1)
                    }, function(e) {
                        o.getGlobalInspect(!1)
                    })
                }
                var n = this;
                this.crudHelperService = e, this.networkService = t, this.setting = {}, this.aciSetting = {}, this.globalInspectStats = {}, this.showLoader = !0, this.showServerError = !1, this.serverErrorMessage = "";
                var o = this;
                getNetworkSettings(), this.refresh = a.Observable.interval(5e3).subscribe(function() {
                    n.getGlobalInspect(!0)
                })
            }
            return NetworkSettingsComponent.prototype.updateNetworkSettings = function(e) {
                var t = this;
                t.crudHelperService.startLoader(t), t.networkService.updateSettings(e).then(function(e) {
                    t.crudHelperService.stopLoader(t), "aci" === e.networkInfraType ? t.networkService.setAciMode(!0) : t.networkService.setAciMode(!1), t.crudHelperService.showNotification("Network settings: Updated", e.key.toString())
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Network settings: Update failed", e)
                })
            }, NetworkSettingsComponent.prototype.updateAciSetting = function(e) {
                var t = this;
                t.crudHelperService.startLoader(t), t.networkService.updateAciSettings(e).then(function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("ACI settings: Updated", e.key.toString())
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("ACI settings: Update failed", e)
                })
            }, NetworkSettingsComponent.prototype.getGlobalInspect = function(e) {
                var t = this;
                t.networkService.getGlobalInspect().then(function(n) {
                    t.globalInspectStats = n.Oper, e || t.crudHelperService.stopLoader(t)
                }, function(n) {
                    e || t.crudHelperService.stopLoader(t)
                })
            }, NetworkSettingsComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, NetworkSettingsComponent = o([r.Component({
                selector: "networksetting",
                template: n(745)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && e || Object, "function" == typeof (t = "undefined" != typeof c.NetworkService && c.NetworkService) && t || Object])], NetworkSettingsComponent);
            var e,
                t
        }();
    t.NetworkSettingsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(64),
        l = function() {
            function NodeCreateComponent(e, t, n, o, i) {
                function resetForm() {
                    n.stopLoader(r), r.newNode = {
                        key: "",
                        hostname: "",
                        routerip: "",
                        as: "0",
                        neighbor: "",
                        "neighbor-as": "0"
                    }
                }
                this.activatedRoute = e, this.router = t, this.crudHelperService = n, this.bgpsModel = o, this.ngZone = i, this.newNode = {};
                var r = this;
                resetForm()
            }
            return NodeCreateComponent.prototype.returnToNodes = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, NodeCreateComponent.prototype.cancelCreating = function() {
                this.returnToNodes()
            }, NodeCreateComponent.prototype.createNode = function(e) {
                var t = this;
                e && (this.crudHelperService.startLoader(this), t.newNode.key = t.newNode.hostname, this.bgpsModel.create(t.newNode, void 0).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("Node: Created", e.key.toString())
                    }), t.returnToNodes()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("Node: Create failed", e)
                }))
            }, NodeCreateComponent = o([r.Component({
                selector: "nodecreate",
                template: n(746)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && l || Object, "function" == typeof (d = "undefined" != typeof c.BgpsModel && c.BgpsModel) && d || Object, "function" == typeof (p = "undefined" != typeof r.NgZone && r.NgZone) && p || Object])], NodeCreateComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.NodeCreateComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(64),
        l = function() {
            function NodeDetailsComponent(e, t, n, o, i) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? r.mode = "edit" : r.mode = "details"
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.bgpsModel = o, this.crudHelperService = i, this.node = {}, this.mode = "details";
                var r = this;
                setMode(), this.statskey = this.activatedRoute.snapshot.params.key, this.infoselected = !0
            }
            return NodeDetailsComponent.prototype.ngOnInit = function() {
                var e = this;
                e.crudHelperService.stopLoader(e), e.bgpsModel.getModelByKey(e.activatedRoute.snapshot.params.key, !1, "key").then(function(t) {
                    e.node = t, e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    })
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    })
                })
            }, NodeDetailsComponent.prototype.returnToNode = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, NodeDetailsComponent.prototype.returnToNodeDetails = function() {
                this.router.navigate(["../../details", this.node.key], {
                    relativeTo: this.activatedRoute
                })
            }, NodeDetailsComponent.prototype.cancelDetails = function() {
                this.returnToNode()
            }, NodeDetailsComponent.prototype.cancelEditing = function() {
                this.returnToNodeDetails()
            }, NodeDetailsComponent.prototype.editNode = function() {
                this.router.navigate(["../../edit", this.node.key], {
                    relativeTo: this.activatedRoute
                })
            }, NodeDetailsComponent.prototype.deleteNode = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.bgpsModel["delete"](e.node).then(function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    }), e.crudHelperService.showNotification("Node: Deleted", t), e.returnToNode()
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    }), e.crudHelperService.showServerError("Node: Delete failed", t)
                })
            }, NodeDetailsComponent = o([r.Component({
                selector: "nodedetails",
                template: n(747)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object, "function" == typeof (d = "undefined" != typeof c.BgpsModel && c.BgpsModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object])], NodeDetailsComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.NodeDetailsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(16),
        l = n(64),
        d = function() {
            function NodeListComponent(e, t, n, o, i) {
                var r = this;
                this.activatedRoute = e, this.router = t, this.bgpsModel = n, this.crudHelperService = o, this.ngZone = i, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    r.getNodes(!0)
                })
            }
            return NodeListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getNodes(!1)
            }, NodeListComponent.prototype.getNodes = function(e) {
                var t = this;
                this.bgpsModel.get(e).then(function(e) {
                    t.nodes = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, NodeListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, NodeListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, NodeListComponent = o([r.Component({
                selector: "nodelist",
                template: n(749)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof l.BgpsModel && l.BgpsModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], NodeListComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.NodeListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function SettingsMenuComponent() {}
            return SettingsMenuComponent = o([r.Component({
                selector: "settingsmenu",
                template: n(751)
            }), i("design:paramtypes", [])], SettingsMenuComponent)
        }();
    t.SettingsMenuComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(123),
        c = function() {
            function OrganizationCreateComponent(e, t) {
                this.activatedRoute = e, this.router = t, this.DisplayType = s.DisplayType, this.showServerError = !1, this.serverErrorMessage = "", this.showLoader = !1
            }
            return OrganizationCreateComponent.prototype.returnToOrganizations = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, OrganizationCreateComponent.prototype.cancelCreating = function() {
                this.returnToOrganizations()
            }, OrganizationCreateComponent = o([r.Component({
                selector: "organizationcreate",
                template: n(752)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object])], OrganizationCreateComponent);
            var e,
                t
        }();
    t.OrganizationCreateComponent = c
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(31),
        l = function() {
            function OrganizationDetailsComponent(e, t, n, o, i) {
                this.activatedRoute = e, this.router = t, this.crudHelperService = n, this.organizationsModel = o, this.ngZone = i, this.showServerError = !1, this.serverErrorMessage = "", this.showLoader = !1, this.organization = {
                    tenantName: ""
                }, this.organizationDetailsCtrl = this
            }
            return OrganizationDetailsComponent.prototype.ngOnInit = function() {
                this.showLoader = !0;
                var e = this;
                this.organizationsModel.getModelByKey(this.activatedRoute.snapshot.params.key, !1, "key").then(function(t) {
                    e.organization = t, e.ngZone.run(function() {
                        e.showLoader = !1
                    })
                }, function(t) {
                    e.ngZone.run(function() {
                        e.showLoader = !1
                    })
                })
            }, OrganizationDetailsComponent.prototype.returnToOrganization = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, OrganizationDetailsComponent.prototype.close = function() {
                this.returnToOrganization()
            }, OrganizationDetailsComponent.prototype.deleteOrganization = function() {
                var e = this;
                this.showLoader = !0, this.organizationsModel["delete"](this.organization).then(function(t) {
                    e.showLoader = !1, e.crudHelperService.showNotification("Tenant: Deleted", t), e.returnToOrganization()
                }, function(t) {
                    e.showLoader = !1, e.crudHelperService.showServerError("Tenant: Delete failed", t)
                })
            }, OrganizationDetailsComponent = o([r.Component({
                selector: "organizationdetails",
                template: n(753)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && l || Object, "function" == typeof (d = "undefined" != typeof c.OrganizationsModel && c.OrganizationsModel) && d || Object, "function" == typeof (p = "undefined" != typeof r.NgZone && r.NgZone) && p || Object])], OrganizationDetailsComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.OrganizationDetailsComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(16),
        c = n(7),
        l = n(31),
        d = function() {
            function OrganizationListComponent(e, t, n, o, i) {
                var r = this;
                this.activatedRoute = e, this.router = t, this.ngZone = i, this.organizationsModel = n, this.crudHelperService = o, this.organizationsListCtrl = this, this.showLoader = !0, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    r.getOrganizations(!0)
                })
            }
            return OrganizationListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getOrganizations(!1)
            }, OrganizationListComponent.prototype.getOrganizations = function(e) {
                var t = this;
                this.organizationsModel.get(e).then(function(e) {
                    t.organizations = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, OrganizationListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, OrganizationListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, OrganizationListComponent = o([r.Component({
                selector: "organizationlist",
                template: n(754)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof l.OrganizationsModel && l.OrganizationsModel) && d || Object, "function" == typeof (p = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], OrganizationListComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.OrganizationListComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(66),
        l = n(11),
        d = function() {
            function UserCreateComponent(e, t, n, o, i) {
                function resetForm() {
                    n.stopLoader(r), r.newUser = {
                        username: "",
                        password: "",
                        first_name: "",
                        last_name: "",
                        disable: !1
                    }
                }
                this.activatedRoute = e, this.router = t, this.crudHelperService = n, this.usersModel = o, this.ngZone = i, this.newUser = {
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    disable: !1
                }, this.username_regex = l.ContivGlobals.USERNAME_REGEX, this.organizations = [];
                var r = this;
                resetForm()
            }
            return UserCreateComponent.prototype.returnToUsers = function() {
                this.router.navigate(["../list"], {
                    relativeTo: this.activatedRoute
                })
            }, UserCreateComponent.prototype.cancelCreating = function() {
                this.returnToUsers()
            }, UserCreateComponent.prototype.createUser = function(e) {
                var t = this;
                e && (this.crudHelperService.startLoader(this), this.usersModel.create(t.newUser, l.ContivGlobals.USERS_ENDPOINT, "username").then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showNotification("User: Created", e.username), t.returnToUsers()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("User: Create failed", e)
                }))
            }, UserCreateComponent = o([r.Component({
                selector: "usercreate",
                template: n(755)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && d || Object, "function" == typeof (p = "undefined" != typeof c.UsersModel && c.UsersModel) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], UserCreateComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.UserCreateComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(66),
        c = n(7),
        l = n(11),
        d = n(49),
        p = n(124),
        u = function() {
            function UserDetailsComponent(e, t, n, o, i, r) {
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.usersModel = o, this.crudHelperService = i, this.authService = r, this.user = {
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    disable: !1
                }, this.organizations = [], this.mode = "details", this.isRootAdmin = !1, this.isLoggedInUser = !1, this.userDetailsCtrl = {}, this.username = "", this.ProfileDisplayType = p.ProfileDisplayType, this.showLoader = !0;
                var a = this;
                this.user = {
                    username: "",
                    first_name: "",
                    last_name: "",
                    disable: !1
                }, a.username = e.snapshot.params.key, "details" == a.mode && a.getUserDetails()
            }
            return UserDetailsComponent.prototype.getUserDetails = function() {
                var e = this;
                e.usersModel.getModelByKey(e.username, !1, "username").then(function(t) {
                    e.user = t, e.isRootAdmin = "admin" === t.username, e.isLoggedInUser = e.authService.username === t.username, e.crudHelperService.stopLoader(e)
                }, function(t) {
                    e.crudHelperService.stopLoader(e)
                })
            }, UserDetailsComponent.prototype.returnToUser = function() {
                this.router.navigate(["../../list"], {
                    relativeTo: this.activatedRoute
                })
            }, UserDetailsComponent.prototype.returnToUserDetails = function() {
                this.getUserDetails(), this.mode = "details"
            }, UserDetailsComponent.prototype.editUser = function() {
                this.mode = "edit"
            }, UserDetailsComponent.prototype.cancelEditing = function() {
                this.returnToUserDetails()
            }, UserDetailsComponent.prototype.cancelDetails = function() {
                this.returnToUser()
            }, UserDetailsComponent.prototype.deleteUser = function() {
                var e = this;
                e.crudHelperService.startLoader(e);
                var t = e.user.username,
                    n = l.ContivGlobals.USERS_ENDPOINT + t + "/";
                e.usersModel.deleteUsingKey(t, "username", n).then(function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    }), e.crudHelperService.showNotification("User: Deleted", t), e.returnToUser()
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    }), e.crudHelperService.showServerError("User: Delete failed", t)
                })
            }, UserDetailsComponent = o([r.Component({
                selector: "userdetails",
                template: n(756)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object, "function" == typeof (f = "undefined" != typeof s.UsersModel && s.UsersModel) && f || Object, "function" == typeof (v = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && v || Object, "function" == typeof (h = "undefined" != typeof d.AuthService && d.AuthService) && h || Object])], UserDetailsComponent);
            var e,
                t,
                u,
                f,
                v,
                h
        }();
    t.UserDetailsComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(16),
        l = n(66),
        d = function() {
            function UserListComponent(e, t, n, o, i) {
                var r = this;
                this.activatedRoute = e, this.router = t, this.usersModel = n, this.crudHelperService = o, this.ngZone = i, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    r.getUsers(!0)
                })
            }
            return UserListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getUsers(!1), $(".crumb2").html("User Management")
            }, UserListComponent.prototype.getUsers = function(e) {
                var t = this;
                this.usersModel.get(e).then(function(e) {
                    t.users = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, UserListComponent.prototype.create = function() {
                this.router.navigate(["../create"], {
                    relativeTo: this.activatedRoute
                })
            }, UserListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, UserListComponent = o([r.Component({
                selector: "userlist",
                template: n(757)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (d = "undefined" != typeof l.UsersModel && l.UsersModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object, "function" == typeof (u = "undefined" != typeof r.NgZone && r.NgZone) && u || Object])], UserListComponent);
            var e,
                t,
                d,
                p,
                u
        }();
    t.UserListComponent = d
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    function toSource(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (t) {}
            try {
                return e + ""
            } catch (t) {}
        }
        return ""
    }
    var n = Function.prototype.toString;
    e.exports = toSource
}, function(e, t, n) {
    function isArguments(e) {
        return o(e) && a.call(e, "callee") && (!c.call(e, "callee") || s.call(e) == i)
    }
    var o = n(674),
        i = "[object Arguments]",
        r = Object.prototype,
        a = r.hasOwnProperty,
        s = r.toString,
        c = r.propertyIsEnumerable;
    e.exports = isArguments
}, function(e, t) {
    function isLength(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && n >= e
    }
    var n = 9007199254740991;
    e.exports = isLength
}, function(e, t) {
    function isObject(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    e.exports = isObject
}, function(e, t, n) {
    function isString(e) {
        return "string" == typeof e || !o(e) && i(e) && s.call(e) == r
    }
    var o = n(146),
        i = n(149),
        r = "[object String]",
        a = Object.prototype,
        s = a.toString;
    e.exports = isString
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function AppComponent() {}
            return AppComponent = o([r.Component({
                selector: "ccn-app",
                template: "<router-outlet></router-outlet>"
            }), i("design:paramtypes", [])], AppComponent)
        }();
    t.AppComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(81),
        s = n(24),
        c = n(20),
        l = n(425),
        d = n(437),
        p = n(446),
        u = n(438),
        f = n(441),
        v = n(410),
        h = n(448),
        m = n(75),
        g = n(42),
        y = n(39),
        b = n(31),
        w = n(55),
        C = n(103),
        R = n(65),
        S = n(66),
        k = n(82),
        N = n(64),
        P = n(74),
        O = n(7),
        I = n(86),
        j = n(87),
        A = n(432),
        M = n(403),
        D = n(431),
        T = n(49),
        x = n(177),
        _ = n(27),
        G = n(429),
        L = n(84),
        E = n(83),
        H = n(407),
        z = n(405),
        U = n(443),
        F = n(447),
        B = n(85),
        Z = function() {
            function AppModule() {}
            return AppModule = o([r.NgModule({
                imports: [a.BrowserModule, s.HttpModule, z["default"], A.MenuModule, l.DashboardModule, d.NetworkPoliciesModule, H.ApplicationGroupsModule, p.SettingsModule, u.NetworkModule, f.ServicelbModule, v.AppProfilesModule, F.OrganizationModule, D.LoginModule, h.UsersModule, U.AuthorizationModule, G.FirstrunWizardModule],
                declarations: [M.AppComponent],
                providers: [g.ApplicationGroupsModel, m.NetprofilesModel, y.NetworksModel, b.OrganizationsModel, w.PoliciesModel, C.RulesModel, R.ServicelbsModel, S.UsersModel, k.AppProfilesModel, N.BgpsModel, P.ContractGroupsModel, E.AuthorizationModel, O.CRUDHelperService, I.InspectService, j.NetworkService, T.AuthService, x.AuthGuard, _.ApiService, L.ChartService, B.FirstRunService, {
                    provide: c.APP_BASE_HREF,
                    useValue: ""
                }, {
                    provide: c.LocationStrategy,
                    useClass: c.HashLocationStrategy
                }],
                bootstrap: [M.AppComponent]
            }), i("design:paramtypes", [])], AppModule)
        }();
    t.AppModule = Z
}, function(e, t, n) {
    "use strict";
    var o = n(5),
        i = n(183),
        r = n(56),
        a = n(188),
        s = n(189),
        c = n(184),
        l = n(185),
        d = n(178),
        p = n(168),
        u = n(166),
        f = n(167),
        v = n(206),
        h = n(202),
        m = n(192),
        g = n(191),
        y = n(190),
        b = n(196),
        w = n(193),
        C = n(194),
        R = n(180),
        S = n(177),
        k = n(182),
        N = n(181),
        P = n(212),
        O = n(210),
        I = n(211),
        j = n(174),
        A = n(172),
        M = n(173),
        D = n(179),
        T = n(205),
        x = n(203),
        _ = n(204),
        G = n(186),
        L = n(187),
        E = n(200),
        H = n(199),
        z = n(198),
        U = n(209),
        F = n(207),
        B = n(208),
        Z = n(201),
        q = [{
            path: "login",
            component: R.LoginComponent
        }, {
            path: "logout",
            component: N.LogoutComponent
        }, {
            path: "unauthorized",
            component: k.UnauthorizedComponent
        }, {
            path: "",
            redirectTo: "login",
            pathMatch: "full"
        }, {
            path: "m",
            component: i.MenuComponent,
            canActivateChild: [S.AuthGuard],
            children: [{
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            }, {
                path: "dashboard",
                component: d.DashboardComponent
            }, {
                path: "firstrun",
                component: D.FirstrunWizardComponent
            }, {
                path: "networkpolicies",
                redirectTo: "networkpolicies/list",
                pathMatch: "full"
            }, {
                path: "networkpolicies/list",
                component: r.NetworkPoliciesTabsComponent
            }, {
                path: "networkpolicies/isolation/create",
                component: a.IsolationPolicyCreateComponent
            }, {
                path: "networkpolicies/isolation/details/:key",
                component: s.IsolationPolicyDetailsComponent
            }, {
                path: "networkpolicies/isolation/edit/:key",
                component: s.IsolationPolicyDetailsComponent
            }, {
                path: "networkpolicies/bandwidth/create",
                component: c.BandwidthPolicyCreateComponent
            }, {
                path: "networkpolicies/bandwidth/details/:key",
                component: l.BandwidthPolicyDetailsComponent
            }, {
                path: "networkpolicies/bandwidth/edit/:key",
                component: l.BandwidthPolicyDetailsComponent
            }, {
                path: "networkpolicies/contractgroup/create",
                component: G.ContractGroupCreateComponent
            }, {
                path: "networkpolicies/contractgroup/details/:key",
                component: L.ContractGroupDetailsComponent
            }, {
                path: "applicationgroups",
                redirectTo: "applicationgroups/list",
                pathMatch: "full"
            }, {
                path: "applicationgroups/list",
                component: p.AppGrouplistComponent
            }, {
                path: "applicationgroups/create",
                component: u.ApplicationGroupCreateComponent
            }, {
                path: "applicationgroups/details/:key",
                component: f.ApplicationGroupDetailsComponent
            }, {
                path: "applicationgroups/edit/:key",
                component: f.ApplicationGroupDetailsComponent
            }, {
                path: "settings",
                component: v.SettingsMenuComponent,
                children: [{
                    path: "",
                    redirectTo: "users/list",
                    pathMatch: "full"
                }, {
                    path: "networks",
                    component: h.NetworkSettingsComponent
                }, {
                    path: "ldap",
                    component: Z.LdapConfigComponent
                }, {
                    path: "nodes",
                    redirectTo: "nodes/list",
                    pathMatch: "full"
                }, {
                    path: "nodes/list",
                    component: T.NodeListComponent
                }, {
                    path: "nodes/create",
                    component: x.NodeCreateComponent
                }, {
                    path: "nodes/details/:key",
                    component: _.NodeDetailsComponent
                }, {
                    path: "nodes/edit/:key",
                    component: _.NodeDetailsComponent
                }, {
                    path: "users",
                    redirectTo: "users/list",
                    pathMatch: "full"
                }, {
                    path: "users/list",
                    component: P.UserListComponent
                }, {
                    path: "users/create",
                    component: O.UserCreateComponent
                }, {
                    path: "users/details/:key",
                    component: I.UserDetailsComponent
                }, {
                    path: "users/edit/:key",
                    component: I.UserDetailsComponent
                }, {
                    path: "authorization",
                    redirectTo: "authorization/list",
                    pathMatch: "full"
                }, {
                    path: "authorization/list",
                    component: E.AuthorizationListComponent
                }, {
                    path: "authorization/create",
                    component: z.AuthorizationCreateComponent
                }, {
                    path: "authorization/details/:key",
                    component: H.AuthorizationDetailsComponent
                }, {
                    path: "authorization/edit/:key",
                    component: H.AuthorizationDetailsComponent
                }, {
                    path: "organizations",
                    redirectTo: "organizations/list",
                    pathMatch: "full"
                }, {
                    path: "organizations/list",
                    component: U.OrganizationListComponent
                }, {
                    path: "organizations/create",
                    component: F.OrganizationCreateComponent
                }, {
                    path: "organizations/details/:key",
                    component: B.OrganizationDetailsComponent
                }]
            }, {
                path: "networks",
                redirectTo: "networks/list",
                pathMatch: "full"
            }, {
                path: "networks/list",
                component: m.NetworkListComponent
            }, {
                path: "networks/create",
                component: y.NetworkCreateComponent
            }, {
                path: "networks/details/:key",
                component: g.NetworkdetailsComponent
            }, {
                path: "servicelbs",
                redirectTo: "servicelbs/list",
                pathMatch: "full"
            }, {
                path: "servicelbs/list",
                component: b.ServicelbListComponent
            }, {
                path: "servicelbs/create",
                component: w.ServicelbCreateComponent
            }, {
                path: "servicelbs/details/:key",
                component: C.ServicelbDetailsComponent
            }, {
                path: "appprofiles",
                redirectTo: "appprofiles/list",
                pathMatch: "full"
            }, {
                path: "appprofiles/list",
                component: j.AppProfileListComponent
            }, {
                path: "appprofiles/create",
                component: A.AppProfileCreateComponent
            }, {
                path: "appprofiles/details/:key",
                component: M.AppProfileDetailsComponent
            }, {
                path: "appprofiles/edit/:key",
                component: M.AppProfileDetailsComponent
            }]
        }, {
            path: "**",
            redirectTo: "login",
            pathMatch: "full"
        }];
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o.RouterModule.forRoot(q)
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(42),
        l = function() {
            function ApplicationGroupInfoComponent(e, t, n, o, i) {
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.applicationGroupsModel = o, this.crudHelperService = i, this.applicationGroup = {
                    groupName: "",
                    networkName: ""
                }, this.mode = "details"
            }
            return ApplicationGroupInfoComponent.prototype.returnToApplicationGroupDetails = function() {
                this.router.navigate(["../../details", this.applicationGroup.key], {
                    relativeTo: this.activatedRoute
                })
            }, ApplicationGroupInfoComponent.prototype.cancelEditing = function() {
                this.returnToApplicationGroupDetails()
            }, ApplicationGroupInfoComponent.prototype.saveApplicationGroup = function() {
                var e = this;
                e.crudHelperService.startLoader(e), e.applicationGroupsModel.save(e.applicationGroup).then(function(t) {
                    e.crudHelperService.stopLoader(e),
                    e.crudHelperService.showNotification("Application group: Updated", t.key.toString()), e.returnToApplicationGroupDetails()
                }, function(t) {
                    e.crudHelperService.stopLoader(e), e.crudHelperService.showServerError("Application group: Update failed", t)
                })
            }, o([r.Input("applicationGroup"), i("design:type", Object)], ApplicationGroupInfoComponent.prototype, "applicationGroup", void 0), o([r.Input("mode"), i("design:type", String)], ApplicationGroupInfoComponent.prototype, "mode", void 0), o([r.Input("showLoader"), i("design:type", Boolean)], ApplicationGroupInfoComponent.prototype, "showLoader", void 0), ApplicationGroupInfoComponent = o([r.Component({
                selector: "applicationgroupinfo",
                template: n(683)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object, "function" == typeof (d = "undefined" != typeof c.ApplicationGroupsModel && c.ApplicationGroupsModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object])], ApplicationGroupInfoComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.ApplicationGroupInfoComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(175),
        p = n(166),
        u = n(167),
        f = n(171),
        v = n(169),
        h = n(170),
        m = n(168),
        g = n(408),
        y = n(406),
        b = function() {
            function ApplicationGroupsModule() {}
            return ApplicationGroupsModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule, d.PipesModule],
                declarations: [p.ApplicationGroupCreateComponent, u.ApplicationGroupDetailsComponent, f.IsolationPolicySelectionComponent, v.BandwidthPolicySelectionComponent, h.ContractGroupSelectionComponent, m.AppGrouplistComponent, g.ApplicationGroupStatsComponent, y.ApplicationGroupInfoComponent],
                exports: [m.AppGrouplistComponent, p.ApplicationGroupCreateComponent, u.ApplicationGroupDetailsComponent, f.IsolationPolicySelectionComponent, v.BandwidthPolicySelectionComponent, h.ContractGroupSelectionComponent, g.ApplicationGroupStatsComponent, y.ApplicationGroupInfoComponent, a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule, d.PipesModule]
            }), i("design:paramtypes", [])], ApplicationGroupsModule)
        }();
    t.ApplicationGroupsModule = b
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(42),
        s = n(7),
        c = n(86),
        l = n(16),
        d = n(11),
        p = n(14),
        u = function() {
            function ApplicationGroupStatsComponent(e, t, n, o) {
                var i = this;
                this.applicationGroupsModel = e, this.crudHelperService = t, this.inspectService = n, this.ngZone = o, this.statkey = "", this.applicationInspectStats = {
                    externalPktTag: "",
                    numEndpoints: "",
                    pktTag: ""
                }, this.config = {
                    networkName: "",
                    groupName: ""
                }, this.endpoints = [], this.filteredendpoints = [], this.containerDetails = {}, this.refresh = l.Observable.interval(5e3).subscribe(function() {
                    "" != i.statkey && i.getApplicationgroupInspect(!0)
                })
            }
            return ApplicationGroupStatsComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), "" != this.statkey && this.getApplicationgroupInspect(!1)
            }, ApplicationGroupStatsComponent.prototype.getApplicationgroupInspect = function(e) {
                var t = this;
                this.applicationGroupsModel.getInspectByKey(this.statkey, d.ContivGlobals.APPLICATIONGROUPS_INSPECT_ENDPOINT, e).then(function(e) {
                    if (t.applicationInspectStats = e.Oper, t.config = e.Config, p.isUndefined(e.Oper.endpoints))
                        t.endpoints = [], t.containerDetails = {};
                    else {
                        var n = t.inspectService.buildEndPoints(e.Oper.endpoints);
                        t.inspectService.checkContainerChanged(t.containerDetails, n) && (t.endpoints = e.Oper.endpoints, t.containerDetails = n)
                    }
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, ApplicationGroupStatsComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, o([r.Input("statkey"), i("design:type", String)], ApplicationGroupStatsComponent.prototype, "statkey", void 0), ApplicationGroupStatsComponent = o([r.Component({
                selector: "applicationgroupstats",
                template: n(685)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ApplicationGroupsModel && a.ApplicationGroupsModel) && e || Object, "function" == typeof (t = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && t || Object, "function" == typeof (u = "undefined" != typeof c.InspectService && c.InspectService) && u || Object, "function" == typeof (f = "undefined" != typeof r.NgZone && r.NgZone) && f || Object])], ApplicationGroupStatsComponent);
            var e,
                t,
                u,
                f
        }();
    t.ApplicationGroupStatsComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = n(42),
        c = function() {
            function ApplicationGroupSelectionComponent(e) {
                this.applicationGroupsModel = e, this.applicationGroups = [], this.applicationGroupSearchText = "", this.selectedApplicationGroups = []
            }
            return ApplicationGroupSelectionComponent.prototype.ngOnChanges = function() {
                var e = this;
                e.getApplicationGroups(), ("details" === e.mode || "edit" === e.mode && "" != e.appProfile.appProfileName) && void 0 === e.appProfile.endpointGroups && (e.appProfile.endpointGroups = [])
            }, ApplicationGroupSelectionComponent.prototype.getApplicationGroups = function() {
                var e = this;
                e.applicationGroupsModel.get(!0).then(function(t) {
                    e.selectedApplicationGroups = a.filter(t, function(t) {
                        return a.includes(e.appProfile.endpointGroups, t.groupName)
                    }), e.applicationGroups = a.filter(t, function(t) {
                        return (a.isEmpty(t.links.AppProfile) || t.links.AppProfile.key === e.appProfile.key) && t.tenantName === e.appProfile.tenantName
                    })
                })
            }, ApplicationGroupSelectionComponent.prototype.addApplicationGroup = function(e) {
                var t = this,
                    n = e;
                if (void 0 !== n && !a.includes(t.appProfile.endpointGroups, n)) {
                    var o = t.appProfile.tenantName + ":" + n;
                    t.applicationGroupsModel.getModelByKey(o, !1, void 0).then(function(e) {
                        t.selectedApplicationGroups.push(e), t.selectedApplicationGroups = t.selectedApplicationGroups.slice()
                    }), t.appProfile.endpointGroups.push(n)
                }
            }, ApplicationGroupSelectionComponent.prototype.removeApplicationGroup = function(e) {
                a.remove(this.selectedApplicationGroups, function(t) {
                    return t.groupName === e
                }), this.selectedApplicationGroups = this.selectedApplicationGroups.slice(), a.remove(this.appProfile.endpointGroups, function(t) {
                    return t === e
                })
            }, o([r.Input(), i("design:type", String)], ApplicationGroupSelectionComponent.prototype, "mode", void 0), o([r.Input(), i("design:type", Object)], ApplicationGroupSelectionComponent.prototype, "appProfile", void 0), ApplicationGroupSelectionComponent = o([r.Component({
                selector: "ctv-appgroupselection",
                template: n(689)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof s.ApplicationGroupsModel && s.ApplicationGroupsModel) && e || Object])], ApplicationGroupSelectionComponent);
            var e
        }();
    t.ApplicationGroupSelectionComponent = c
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(174),
        p = n(172),
        u = n(173),
        f = n(409),
        v = n(175),
        h = function() {
            function AppProfilesModule() {}
            return AppProfilesModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule, v.PipesModule],
                declarations: [d.AppProfileListComponent, p.AppProfileCreateComponent, u.AppProfileDetailsComponent, f.ApplicationGroupSelectionComponent],
                exports: [d.AppProfileListComponent, p.AppProfileCreateComponent, u.AppProfileDetailsComponent, f.ApplicationGroupSelectionComponent, l.DirectivesModule, v.PipesModule, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], AppProfilesModule)
        }();
    t.AppProfilesModule = h
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function CtvAccordionComponent(e) {}
            return CtvAccordionComponent.prototype.ngOnInit = function() {
                jQuery(".ui.accordion").accordion()
            }, o([r.Input("items"), i("design:type", Array)], CtvAccordionComponent.prototype, "items", void 0), CtvAccordionComponent = o([r.Component({
                selector: "ctv-accordion",
                template: n(693)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof r.ElementRef && r.ElementRef) && e || Object])], CtvAccordionComponent);
            var e
        }();
    t.CtvAccordionComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function CtvCollapsibleComponent() {
                this.title = "", this.collapsed = !0
            }
            return o([r.Input("title"), i("design:type", String)], CtvCollapsibleComponent.prototype, "title", void 0), o([r.Input("collapsed"), i("design:type", Boolean)], CtvCollapsibleComponent.prototype, "collapsed", void 0), CtvCollapsibleComponent = o([r.Component({
                selector: "ctv-collapsible",
                template: n(694)
            }), i("design:paramtypes", [])], CtvCollapsibleComponent)
        }();
    t.CtvCollapsibleComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function ErrorMessageComponent() {
                this.showError = !0
            }
            return ErrorMessageComponent.prototype.ngOnChanges = function() {
                this.showError = !0
            }, ErrorMessageComponent.prototype.close = function() {
                this.showError = !1
            }, o([r.Input(), i("design:type", String)], ErrorMessageComponent.prototype, "header", void 0), o([r.Input(), i("design:type", String)], ErrorMessageComponent.prototype, "error", void 0), ErrorMessageComponent = o([r.Component({
                selector: "ctv-error",
                template: n(695)
            }), i("design:paramtypes", [])], ErrorMessageComponent)
        }();
    t.ErrorMessageComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(84),
        s = n(14),
        c = n(14),
        l = function() {
            function LineGraphComponent(e) {
                this.chartService = e, this.EndpointType = a.EndpointType, this.lineChartOptions = {}, this.lineChartColors = [{
                    backgroundColor: "rgba(0,117,180,0.1)",
                    borderColor: "rgba(4,159,217,1)",
                    pointBackgroundColor: "rgba(0,117,180,1)",
                    pointBorderColor: "rgba(0,117,180,1)",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(77,83,96,1)"
                }], this.lineChartLegend = !0, this.lineChartType = "line", this.lineChartData = [{
                    label: "# of Endpoints",
                    data: [0, 0, 0, 0]
                }], this.adjustScale(100), this.lineChartLabels = ["0T", "1T", "2T", "3T"], this.inspectActivated = !1, this.prevKey = "", this.key = "", this.endpointType = a.EndpointType.Network, this.prevEndpointType = a.EndpointType.Network
            }
            return LineGraphComponent.prototype.ngOnInit = function() {
                var e = this;
                this.prevKey = this.key, this.prevEndpointType = this.endpointType, this.subscription = this.chartService.stream.subscribe(function(t) {
                    var n = t.iKey,
                        o = t.type,
                        i = e.key,
                        r = e.endpointType;
                    n === i && o === r && (e.scaleEnd++, e.inspectActivated || (e.start++, e.end++, e.loadGraphData()))
                })
            }, LineGraphComponent.prototype.loadGraphData = function() {
                this.lineChartData[0].data = [], this.lineChartLabels = [];
                for (var e = 0, t = this.start; t <= this.end; t++) {
                    var n = this.chartService.graphData[this.endpointType][this.key][t];
                    this.lineChartData[0].data.push(n), this.lineChartLabels.push(t + "T"), n > e && (e = n)
                }
                if (s.isUndefined(this.lineChartOptions.scales))
                    this.adjustScale(e);
                else {
                    var o = this.lineChartOptions.scales.yAxes[0].ticks.suggestedMax;
                    e > o && this.adjustScale(e)
                }
            }, LineGraphComponent.prototype.adjustScale = function(e) {
                this.lineChartOptions = {}, this.lineChartOptions = {
                    animation: !1,
                    responsive: !0
                }, 7 > e ? this.lineChartOptions.scales = {
                    yAxes: [{
                        type: "linear",
                        ticks: {
                            beginAtZero: !0,
                            suggestedMax: 8
                        }
                    }]
                } : this.lineChartOptions.scales = {
                    yAxes: [{
                        type: "linear",
                        ticks: {
                            beginAtZero: !0,
                            suggestedMax: Math.round(3 * e),
                            callback: function(e, t, n) {
                                return Math.round(e)
                            }
                        }
                    }]
                }
            }, LineGraphComponent.prototype.ngDoCheck = function() {
                "" == this.key || s.isUndefined(this.key) || c.isNull(this.key) || this.key === this.prevKey && this.endpointType === this.prevEndpointType || s.isUndefined(this.chartService.graphData[this.endpointType][this.key]) || this.prepareChartData()
            }, LineGraphComponent.prototype.prepareChartData = function() {
                this.inspectActivated = !1, this.end = this.chartService.graphData[this.endpointType][this.key].length - 1, this.scaleEnd = this.end, this.start = this.end - 14, this.lineChartOptions = {}, this.loadGraphData(), this.prevKey = this.key, this.prevEndpointType = this.endpointType
            }, LineGraphComponent.prototype.slide = function(e) {
                e < this.scaleEnd && (this.inspectActivated = !0), e == this.scaleEnd && (this.inspectActivated = !1), this.end = e, this.start = e - 14, this.loadGraphData()
            }, LineGraphComponent.prototype.ngOnDestroy = function() {
                this.subscription.unsubscribe()
            }, o([r.Input("key"), i("design:type", String)], LineGraphComponent.prototype, "key", void 0), o([r.Input("endpointType"), i("design:type", "function" == typeof (e = "undefined" != typeof a.EndpointType && a.EndpointType) && e || Object)], LineGraphComponent.prototype, "endpointType", void 0), LineGraphComponent = o([r.Component({
                selector: "linegraph",
                template: n(696),
                styles: [n(1022)]
            }), i("design:paramtypes", ["function" == typeof (t = "undefined" != typeof a.ChartService && a.ChartService) && t || Object])], LineGraphComponent);
            var e,
                t
        }();
    t.LineGraphComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = function() {
            function CtvNamevalueComponent() {
                this.itemsChange = new r.EventEmitter, this.items = [], this.nameheader = "Name", this.valueheader = "Value", this.type = "text", this.newItem = {
                    name: "",
                    value: ""
                }, this.options = []
            }
            return CtvNamevalueComponent.prototype.resetItem = function() {
                this.newItem = {
                    name: "",
                    value: ""
                }
            }, CtvNamevalueComponent.prototype.add = function() {
                function compare(e, t) {
                    return e.name == t.name
                }
                "" == this.newItem.name && "" == this.newItem.value || (a.pullAllWith(this.items, [this.newItem], compare), this.items.push(this.newItem), this.itemsChange.emit(this.items), this.resetItem())
            }, CtvNamevalueComponent.prototype.remove = function(e) {
                a.remove(this.items, function(t) {
                    return t.name == e.name
                })
            }, o([r.Input("items"), i("design:type", Array)], CtvNamevalueComponent.prototype, "items", void 0), o([r.Input("nameheader"), i("design:type", String)], CtvNamevalueComponent.prototype, "nameheader", void 0), o([r.Input("options"), i("design:type", Array)], CtvNamevalueComponent.prototype, "options", void 0), o([r.Input("valueheader"), i("design:type", String)], CtvNamevalueComponent.prototype, "valueheader", void 0), o([r.Output("itemsChange"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], CtvNamevalueComponent.prototype, "itemsChange", void 0), o([r.Input("type"), i("design:type", String)], CtvNamevalueComponent.prototype, "type", void 0), CtvNamevalueComponent = o([r.Component({
                selector: "ctv-namevalue",
                template: n(697)
            }), i("design:paramtypes", [])], CtvNamevalueComponent);
            var e
        }();
    t.CtvNamevalueComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function AciSettingComponent() {
                this.updateAciDef = new r.EventEmitter, this.cancel = new r.EventEmitter, this.skip = new r.EventEmitter, this.goback = new r.EventEmitter
            }
            return AciSettingComponent.prototype.updateAciSetting = function(e) {
                e && this.updateAciDef.emit(this.setting)
            }, AciSettingComponent.prototype.ngAfterViewInit = function() {
                this.disabled && jQuery(".ui.dimmer.aci").dimmer({
                    opacity: .8,
                    closable: !1
                }).dimmer("show")
            }, o([r.Input("firstRunWiz"), i("design:type", Boolean)], AciSettingComponent.prototype, "firstRunWiz", void 0), o([r.Output("updateAciDef"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], AciSettingComponent.prototype, "updateAciDef", void 0), o([r.Input("setting"), i("design:type", Object)], AciSettingComponent.prototype, "setting", void 0), o([r.Output("cancel"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], AciSettingComponent.prototype, "cancel", void 0), o([r.Output("skip"), i("design:type", "function" == typeof (a = "undefined" != typeof r.EventEmitter && r.EventEmitter) && a || Object)], AciSettingComponent.prototype, "skip", void 0), o([r.Output("goback"), i("design:type", "function" == typeof (s = "undefined" != typeof r.EventEmitter && r.EventEmitter) && s || Object)], AciSettingComponent.prototype, "goback", void 0), o([r.Input("disabled"), i("design:type", Boolean)], AciSettingComponent.prototype, "disabled", void 0), AciSettingComponent = o([r.Component({
                selector: "acisettingcomp",
                template: n(701)
            }), i("design:paramtypes", [])], AciSettingComponent);
            var e,
                t,
                a,
                s
        }();
    t.AciSettingComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(27),
        s = n(11),
        c = n(7),
        l = n(676),
        d = function() {
            function LdapSettingsComponent(e, t) {
                this.apiService = e, this.crudHelperService = t, this.ldapConfig = {
                    server: "",
                    port: 0,
                    base_dn: "",
                    service_account_dn: "",
                    service_account_password: "",
                    start_tls: !1,
                    insecure_skip_verify: !1,
                    tls_cert_issued_to: ""
                }, this.ldapConfigExists = !0
            }
            return LdapSettingsComponent.prototype.ngOnInit = function() {
                this.getLdapConfig()
            }, LdapSettingsComponent.prototype.getLdapConfig = function() {
                var e = this;
                this.crudHelperService.startLoader(this), this.apiService.get(s.ContivGlobals.LDAP_ENDPOINT).map(function(e) {
                    return e.json()
                }).subscribe(function(t) {
                    l(t) ? e.ldapConfigExists = !1 : e.ldapConfig = t, e.crudHelperService.stopLoader(e)
                }, function(t) {
                    e.ldapConfigExists = !1, e.crudHelperService.stopLoader(e)
                })
            }, LdapSettingsComponent.prototype.updateLdapConfig = function(e) {
                var t = this;
                e && (t.ldapConfig.insecure_skip_verify && (t.ldapConfig.tls_cert_issued_to = ""), t.ldapConfig.start_tls || (t.ldapConfig.insecure_skip_verify = !1), this.crudHelperService.startLoader(this), this.update().subscribe(function(e) {
                    t.ldapConfigExists = !0, t.crudHelperService.stopLoader(t), t.crudHelperService.showNotification("LDAP: Configuration Updated", t.ldapConfig.server)
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("LDAP: Update Failed", e)
                }))
            }, LdapSettingsComponent.prototype.update = function() {
                return this.ldapConfigExists ? this.apiService.patch(s.ContivGlobals.LDAP_ENDPOINT, this.ldapConfig) : this.apiService.put(s.ContivGlobals.LDAP_ENDPOINT, this.ldapConfig)
            }, LdapSettingsComponent = o([r.Component({
                selector: "ldapsettings",
                template: n(702)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ApiService && a.ApiService) && e || Object, "function" == typeof (t = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && t || Object])], LdapSettingsComponent);
            var e,
                t
        }();
    t.LdapSettingsComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(31),
        s = n(7),
        c = n(14),
        l = n(11),
        d = n(123),
        p = function() {
            function NetworkCreateformComponent(e, t, n) {
                this.organizationsModel = e, this.crudHelperService = t, this.ngZone = n, this.clusterMode = "", this.showLoader = !0, this.tenants = [], this.networkPresent = !1, this.networkNamePattern = l.ContivGlobals.NETWORK_NAME_REGEX, this.DisplayType = d.DisplayType, this.createnetwork = new r.EventEmitter, this.cancel = new r.EventEmitter, this.goback = new r.EventEmitter, this.skip = new r.EventEmitter, this.networkCreateCtrl = this
            }
            return NetworkCreateformComponent.prototype.getTenants = function(e) {
                var t = this;
                t.organizationsModel.get(e).then(function(e) {
                    t.tenants = e, "kubernetes" === t.clusterMode && t.firstRunWiz && (t.newNetwork.networkName = "default-net"), t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, NetworkCreateformComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getTenants(!1)
            }, NetworkCreateformComponent.prototype.closeTenantCreate = function() {
                $("#tenant-create-modal").modal("hide")
            }, NetworkCreateformComponent.prototype.showTenantModal = function() {
                $("#tenant-create-modal").modal("show")
            }, NetworkCreateformComponent.prototype.createNetwork = function(e) {
                e && (c.isNull(this.newNetwork.pktTag) && delete this.newNetwork.pktTag, "" === this.newNetwork.cfgdTag && delete this.newNetwork.cfgdTag, "" === this.newNetwork.nwType && delete this.newNetwork.nwType, this.createnetwork.emit(this.newNetwork))
            }, o([r.Input("firstRunWiz"), i("design:type", Boolean)], NetworkCreateformComponent.prototype, "firstRunWiz", void 0), o([r.Input("newNetwork"), i("design:type", Object)], NetworkCreateformComponent.prototype, "newNetwork", void 0), o([r.Input("clusterMode"), i("design:type", String)], NetworkCreateformComponent.prototype, "clusterMode", void 0), o([r.Output("createnetwork"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], NetworkCreateformComponent.prototype, "createnetwork", void 0), o([r.Output("cancel"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], NetworkCreateformComponent.prototype, "cancel", void 0), o([r.Output("goback"), i("design:type", "function" == typeof (p = "undefined" != typeof r.EventEmitter && r.EventEmitter) && p || Object)], NetworkCreateformComponent.prototype, "goback", void 0), o([r.Output("skip"), i("design:type", "function" == typeof (u = "undefined" != typeof r.EventEmitter && r.EventEmitter) && u || Object)], NetworkCreateformComponent.prototype, "skip", void 0), NetworkCreateformComponent = o([r.Component({
                selector: "networkcreateform",
                template: n(703)
            }), i("design:paramtypes", ["function" == typeof (f = "undefined" != typeof a.OrganizationsModel && a.OrganizationsModel) && f || Object, "function" == typeof (v = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && v || Object, "function" == typeof (h = "undefined" != typeof r.NgZone && r.NgZone) && h || Object])], NetworkCreateformComponent);
            var e,
                t,
                p,
                u,
                f,
                v,
                h
        }();
    t.NetworkCreateformComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(11),
        s = function() {
            function NetworkSettingComponent() {
                this.vlanPattern = a.ContivGlobals.VLAN_REGEX, this.vxlanPattern = a.ContivGlobals.VXLAN_REGEX, this.pvtSubnetPattern = a.ContivGlobals.PVTSUBNET_REGEX, this.updateNetDef = new r.EventEmitter, this.cancel = new r.EventEmitter, this.skip = new r.EventEmitter, this.firstRunWiz = !1, this.setting = {
                    networkInfraType: "",
                    vlans: "",
                    vxlans: "",
                    fwdMode: "",
                    arpMode: "",
                    pvtSubnet: ""
                }
            }
            return NetworkSettingComponent.prototype.updateNetworkSettings = function(e) {
                e && this.updateNetDef.emit(this.setting)
            }, o([r.Input("firstRunWiz"), i("design:type", Boolean)], NetworkSettingComponent.prototype, "firstRunWiz", void 0), o([r.Input("setting"), i("design:type", Object)], NetworkSettingComponent.prototype, "setting", void 0), o([r.Output("updateNetDef"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], NetworkSettingComponent.prototype, "updateNetDef", void 0), o([r.Output("cancel"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], NetworkSettingComponent.prototype, "cancel", void 0), o([r.Output("skip"), i("design:type", "function" == typeof (s = "undefined" != typeof r.EventEmitter && r.EventEmitter) && s || Object)], NetworkSettingComponent.prototype, "skip", void 0), NetworkSettingComponent = o([r.Component({
                selector: "networksettingcomp",
                template: n(704)
            }), i("design:paramtypes", [])], NetworkSettingComponent);
            var e,
                t,
                s
        }();
    t.NetworkSettingComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(14),
        s = n(28),
        c = function() {
            function CtvTableComponent() {
                this.filteredinputitems = new r.EventEmitter, this.table = {
                    chunks: [],
                    pageNo: 0,
                    tableSize: 12,
                    searchText: ""
                }, this.pageChunks = [], this.defaultSortColumn = "", this.size = 12, this.items = [], this.sortObj = this.initializeSort(this.defaultSortColumn)
            }
            return CtvTableComponent.prototype.ngOnInit = function() {
                isNaN(this.size) && (this.size = 12), this.table.tableSize = this.size, this.sortObj = this.initializeSort(this.defaultSortColumn), this.showChunk(this.table.pageNo, this.table.searchText)
            }, CtvTableComponent.prototype.ngOnChanges = function() {
                this.showChunk(this.table.pageNo, this.table.searchText)
            }, CtvTableComponent.prototype.showChunk = function(e, t) {
                if (this.table.searchText = t, 0 == this.sortObj.field.length && (this.sortObj = this.initializeSort(this.defaultSortColumn)), (a.isUndefined(e) || 0 > e) && (e = 0), this.table.pageNo = e, !a.isUndefined(this.items)) {
                    var n = this.filterItems(t),
                        o = this.sort(n),
                        i = Math.ceil(o.length / this.table.tableSize);
                    0 == i && (i = 1), this.table.chunks = [];
                    for (var r = 0; i > r; r++)
                        this.table.chunks.push({
                            selected: !1,
                            pageNo: r
                        });
                    if (e >= this.table.chunks.length && (this.table.pageNo = 0), this.table.chunks[this.table.pageNo].selected = !0, this.table.chunks.length > 5) {
                        var s,
                            c;
                        s = this.table.pageNo - 2, c = this.table.pageNo + 3, 0 > s && (c = c = s, s = 0), c > this.table.chunks.length && (s = s = c = this.table.chunks.length, c = this.table.chunks.length), this.pageChunks = this.table.chunks.slice(s, c)
                    } else
                        this.pageChunks = this.table.chunks;
                    var l = this.limitItems(this.table.tableSize, this.table.pageNo * this.table.tableSize, o);
                    this.filteredinputitems.emit(l), this.count = l.length
                }
                return !1
            }, CtvTableComponent.prototype.showPrevChunk = function() {
                var e;
                return e = this.table.pageNo <= 0 ? 0 : this.table.pageNo - 1, this.showChunk(e, this.table.searchText)
            }, CtvTableComponent.prototype.showNextChunk = function() {
                var e;
                return e = this.table.pageNo + 1, e > this.table.chunks.length - 1 && (e = this.table.chunks.length - 1), this.showChunk(e, this.table.searchText)
            }, CtvTableComponent.prototype.filterItems = function(e) {
                var t = [];
                if (0 === e.length)
                    return this.items;
                for (var n = 0, o = this.items; n < o.length; n++) {
                    var i = o[n],
                        r = "";
                    for (var a in i)
                        r += JSON.stringify(i[a]);
                    r.search(e) > -1 && t.push(i)
                }
                return t
            }, CtvTableComponent.prototype.limitItems = function(e, t, n) {
                for (var o = [], i = t; i < n.length && t + e > i; i++)
                    o.push(n[i]);
                return o
            }, CtvTableComponent.prototype.initializeSort = function(e) {
                return {
                    field: e,
                    reverse: !1,
                    iconDirection: {
                        down: !0,
                        up: !1
                    }
                }
            }, CtvTableComponent.prototype.applysort = function(e) {
                e == this.sortObj.field ? (this.sortObj.field = e, this.sortObj.reverse = !this.sortObj.reverse, this.sortObj.iconDirection = {
                    down: !this.sortObj.reverse,
                    up: this.sortObj.reverse
                }) : this.sortObj = this.initializeSort(e), this.showChunk(this.table.pageNo, this.table.searchText)
            }, CtvTableComponent.prototype.sort = function(e) {
                var t;
                return "" == this.sortObj.field ? e : (t = s.sortBy(e, [this.defaultSortColumn]), t = s.sortBy(t, [this.sortObj.field]), this.sortObj.reverse && (t = s.reverse(t)), t)
            }, o([r.Input("items"), i("design:type", Array)], CtvTableComponent.prototype, "items", void 0), o([r.Input("size"), i("design:type", Number)], CtvTableComponent.prototype, "size", void 0), o([r.Output("filtereditems"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], CtvTableComponent.prototype, "filteredinputitems", void 0), o([r.Input("defaultSortColumn"), i("design:type", String)], CtvTableComponent.prototype, "defaultSortColumn", void 0), CtvTableComponent = o([r.Component({
                selector: "ctv-table",
                template: n(707)
            }), i("design:paramtypes", [])], CtvTableComponent);
            var e
        }();
    t.CtvTableComponent = c;
    var l = function() {
        function CtvThComponent() {
            this.sortdata = new r.EventEmitter, this.sortfield = "", this.sortobject = {
                field: "",
                iconDirection: {
                    down: !0,
                    up: !1
                },
                reverse: !1
            }
        }
        return CtvThComponent.prototype.sortColumn = function() {
            this.sortdata.emit(this.sortfield)
        }, CtvThComponent.prototype.ngOnInit = function() {}, o([r.Input("sortfield"), i("design:type", String)], CtvThComponent.prototype, "sortfield", void 0), o([r.Output("sortdata"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], CtvThComponent.prototype, "sortdata", void 0), o([r.Input("sortobject"), i("design:type", Object)], CtvThComponent.prototype, "sortobject", void 0), CtvThComponent = o([r.Component({
            selector: "ctv-th",
            template: n(708)
        }), i("design:paramtypes", [])], CtvThComponent);
        var e
    }();
    t.CtvThComponent = l;
    var d = function() {
        function CtvTpaginationComponent() {
            this.chunks = [], this.showPage = new r.EventEmitter, this.prevChunk = new r.EventEmitter, this.nextChunk = new r.EventEmitter
        }
        return CtvTpaginationComponent.prototype.showPrevChunk = function() {
            this.prevChunk.emit()
        }, CtvTpaginationComponent.prototype.showNextChunk = function() {
            this.nextChunk.emit()
        }, CtvTpaginationComponent.prototype.showClickedPage = function(e) {
            this.showPage.emit(e)
        }, o([r.Input("chunks"), i("design:type", Array)], CtvTpaginationComponent.prototype, "chunks", void 0), o([r.Output("showPage"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], CtvTpaginationComponent.prototype, "showPage", void 0), o([r.Output("prevChunk"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], CtvTpaginationComponent.prototype, "prevChunk", void 0), o([r.Output("nextChunk"), i("design:type", "function" == typeof (a = "undefined" != typeof r.EventEmitter && r.EventEmitter) && a || Object)], CtvTpaginationComponent.prototype, "nextChunk", void 0), CtvTpaginationComponent = o([r.Component({
            selector: "ctv-tpagination",
            template: n(699)
        }), i("design:paramtypes", [])], CtvTpaginationComponent);
        var e,
            t,
            a
    }();
    t.CtvTpaginationComponent = d;
    var p = function() {
        function CtvSearchComponent() {
            this.searchTextChange = new r.EventEmitter, this.searchText = "", this.size = 30, this.placeholder = "Search"
        }
        return CtvSearchComponent.prototype.showChunk = function(e) {
            this.searchTextChange.emit(e)
        }, o([r.Input("placeholder"), i("design:type", String)], CtvSearchComponent.prototype, "placeholder", void 0), o([r.Input("count"), i("design:type", Number)], CtvSearchComponent.prototype, "count", void 0), o([r.Output("searchTextChange"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], CtvSearchComponent.prototype, "searchTextChange", void 0), CtvSearchComponent = o([r.Component({
            selector: "ctv-search",
            template: n(700)
        }), i("design:paramtypes", [])], CtvSearchComponent);
        var e
    }();
    t.CtvSearchComponent = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function TooltipComponent() {
                this.width = 400, this.padding = 20
            }
            return TooltipComponent.prototype.ngOnInit = function() {
                this.width <= 200 && (this.padding = 10)
            }, o([r.Input("width"), i("design:type", Number)], TooltipComponent.prototype, "width", void 0), TooltipComponent = o([r.Component({
                selector: "tooltip",
                template: n(709),
                styles: [n(1024)]
            }), i("design:paramtypes", [])], TooltipComponent)
        }();
    t.TooltipComponent = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(49),
        s = n(87),
        c = function() {
            function VerifydomDirective(e, t, n, o) {
                this.authService = e, this.templateRef = t, this.viewContainer = n, this.networkService = o, this.display = !1
            }
            return Object.defineProperty(VerifydomDirective.prototype, "verifydom", {
                set: function(e) {
                    var t = this;
                    switch (t.display = !1, e) {
                    case "admin":
                        e === t.authService.authTokenPayload.role && (t.display = !0), t.render();
                        break;
                    case "aci":
                        t.networkService.aciMode && (t.display = !0), t.render(), t.networkService.aciModeObservable.subscribe(function(e) {
                            t.display = e, t.render()
                        });
                        break;
                    case "docker":
                        t.verifyClusterMode(t.networkService.clusterMode), t.networkService.clusterModeObservable.subscribe(function(e) {
                            t.verifyClusterMode(e)
                        })
                    }
                },
                enumerable: !0,
                configurable: !0
            }), VerifydomDirective.prototype.verifyClusterMode = function(e) {
                var t = this;
                "docker" === e && (t.display = !0), t.render()
            }, VerifydomDirective.prototype.render = function() {
                this.viewContainer.clear(), this.display && this.viewContainer.createEmbeddedView(this.templateRef)
            }, o([r.Input(), i("design:type", String), i("design:paramtypes", [String])], VerifydomDirective.prototype, "verifydom", null), VerifydomDirective = o([r.Directive({
                selector: "[verifydom]"
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.AuthService && a.AuthService) && e || Object, "function" == typeof (t = "undefined" != typeof r.TemplateRef && r.TemplateRef) && t || Object, "function" == typeof (n = "undefined" != typeof r.ViewContainerRef && r.ViewContainerRef) && n || Object, "function" == typeof (c = "undefined" != typeof s.NetworkService && s.NetworkService) && c || Object])], VerifydomDirective);
            var e,
                t,
                n,
                c
        }();
    t.VerifydomDirective = c
}, function(e, t, n) {
    "use strict";
    n(153);
    var o = n(28),
        i = n(14),
        r = n(14),
        a = function() {
            function BaseCollection(e, t, n) {
                this.http = e, this.url = t, this.apiService = n, this.models = [], this.url = t
            }
            return BaseCollection.prototype.get = function(e) {
                var t = this;
                return void 0 === e && (e = !1), !e && t.models.length > 0 ? new Promise(function(e) {
                    e(t.models)
                }) : t.apiService.get(t.url).map(function(e) {
                    return t.filterAsyncReq(e)
                }).toPromise().then(function(e) {
                    return t.models = e, t.models
                })
            }, BaseCollection.prototype.getModelByKey = function(e, t, n) {
                function findModel() {
                    return o.cloneDeep(o.find(i.models, function(t) {
                        return t[n] == e
                    }))
                }
                var i = this;
                void 0 === t && (t = !1), void 0 === n && (n = "key");
                var r = new Promise(function(e) {
                    !t && i.models.length > 0 ? e(findModel()) : i.get(t).then(function() {
                        e(findModel())
                    })
                });
                return r
            }, BaseCollection.prototype.getModel = function(e, t) {
                function findModel() {
                    return o.cloneDeep(o.find(n.models, e))
                }
                var n = this;
                void 0 === t && (t = !1);
                var i = new Promise(function(e) {
                    !t && n.models.length > 0 ? e(findModel()) : n.get(t).then(function() {
                        e(findModel())
                    })
                });
                return i
            }, BaseCollection.prototype.clearModel = function() {
                var e = this;
                e.models = []
            }, BaseCollection.prototype.filterAsyncReq = function(e) {
                var t = e.json();
                return this.apiService.authServiceRef.isLoggedIn ? t : i.isArray(t) ? [] : r.isString(t) ? "" : {}
            }, BaseCollection
        }();
    t.BaseCollection = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function FilterPipe() {}
            return FilterPipe.prototype.transform = function(e, t) {
                var n = [];
                if (0 === t.length)
                    return e;
                for (var o = 0, i = e; o < i.length; o++) {
                    var r = i[o],
                        a = "";
                    for (var s in r)
                        a += JSON.stringify(r[s]);
                    a.search(t) > -1 && n.push(r)
                }
                return n
            }, FilterPipe = o([r.Pipe({
                name: "filter",
                pure: !1
            }), i("design:paramtypes", [])], FilterPipe)
        }();
    t.FilterPipe = a
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(178),
        d = n(150),
        p = n(35),
        u = function() {
            function DashboardModule() {}
            return DashboardModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, p.DirectivesModule, d.ChartsModule],
                declarations: [l.DashboardComponent],
                exports: [l.DashboardComponent, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], DashboardModule)
        }();
    t.DashboardModule = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(76),
        s = function() {
            function FirstrunACISettingsComponent(e) {
                this.disabled = !1, this.wizardService = e, this.setting = this.wizardService.aciSetting, this.updatePage = new r.EventEmitter, this.cancelPage = new r.EventEmitter, "aci" !== this.wizardService.setting.networkInfraType && (this.disabled = !0)
            }
            return FirstrunACISettingsComponent.prototype.ngOnInit = function() {
                this.setting = this.wizardService.aciSetting
            }, FirstrunACISettingsComponent.prototype.updateAciSettings = function(e) {
                this.wizardService.skipArray[1] = !1, this.wizardService.aciSetting = e, this.updatePage.emit(2)
            }, FirstrunACISettingsComponent.prototype.goBack = function() {
                this.updatePage.emit(0)
            }, FirstrunACISettingsComponent.prototype.skip = function() {
                this.wizardService.skipArray[1] = !0, Object.assign(this.wizardService.aciSetting, this.wizardService.defaults.aciSetting), this.updatePage.emit(2)
            }, FirstrunACISettingsComponent.prototype.cancel = function() {
                this.cancelPage.emit()
            }, o([r.Output("updatePage"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], FirstrunACISettingsComponent.prototype, "updatePage", void 0), o([r.Output("cancelPage"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], FirstrunACISettingsComponent.prototype, "cancelPage", void 0), FirstrunACISettingsComponent = o([r.Component({
                selector: "firstrunacisettings",
                template: n(711)
            }), i("design:paramtypes", ["function" == typeof (s = "undefined" != typeof a.FirstRunWizardService && a.FirstRunWizardService) && s || Object])], FirstrunACISettingsComponent);
            var e,
                t,
                s
        }();
    t.FirstrunACISettingsComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(76),
        s = function() {
            function FirstrunNetworkCreateComponent(e) {
                this.wizardService = e, this.clusterMode = "", this.updatePage = new r.EventEmitter, this.cancelPage = new r.EventEmitter, this.clusterMode = this.wizardService.clusterMode, this.newNetwork = this.wizardService.newNetwork
            }
            return FirstrunNetworkCreateComponent.prototype.createNetwork = function(e) {
                this.wizardService.skipArray[2] = !1, this.wizardService.newNetwork = e, this.updatePage.emit(3)
            }, FirstrunNetworkCreateComponent.prototype.goBack = function() {
                this.updatePage.emit(1)
            }, FirstrunNetworkCreateComponent.prototype.skip = function() {
                this.wizardService.skipArray[2] = !0, this.updatePage.emit(3)
            }, FirstrunNetworkCreateComponent.prototype.cancel = function() {
                this.cancelPage.emit()
            }, o([r.Output("updatePage"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], FirstrunNetworkCreateComponent.prototype, "updatePage", void 0), o([r.Output("cancelPage"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], FirstrunNetworkCreateComponent.prototype, "cancelPage", void 0), FirstrunNetworkCreateComponent = o([r.Component({
                selector: "firstrunnetworkcreate",
                template: n(712)
            }), i("design:paramtypes", ["function" == typeof (s = "undefined" != typeof a.FirstRunWizardService && a.FirstRunWizardService) && s || Object])], FirstrunNetworkCreateComponent);
            var e,
                t,
                s
        }();
    t.FirstrunNetworkCreateComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(76),
        s = function() {
            function FirstrunNetworkDefaultComponent(e) {
                this.wizardService = e, this.setting = this.wizardService.setting, this.updatePage = new r.EventEmitter, this.cancelPage = new r.EventEmitter, this.showLoader = this.wizardService.showLoader
            }
            return FirstrunNetworkDefaultComponent.prototype.ngDoCheck = function() {
                this.showLoader = this.wizardService.showLoader, this.setting = this.wizardService.setting
            }, FirstrunNetworkDefaultComponent.prototype.updateNetworkSettings = function(e) {
                this.wizardService.skipArray[0] = !1, this.wizardService.setting = e, this.updatePage.emit(1)
            }, FirstrunNetworkDefaultComponent.prototype.cancel = function() {
                this.cancelPage.emit()
            }, FirstrunNetworkDefaultComponent.prototype.skip = function() {
                Object.assign(this.wizardService.setting, this.wizardService.defaults.setting), this.wizardService.skipArray[0] = !0, this.updatePage.emit(1)
            }, o([r.Output("updatePage"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], FirstrunNetworkDefaultComponent.prototype, "updatePage", void 0), o([r.Output("cancelPage"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], FirstrunNetworkDefaultComponent.prototype, "cancelPage", void 0), FirstrunNetworkDefaultComponent = o([r.Component({
                selector: "firstrunnetworkdefault",
                template: n(713)
            }), i("design:paramtypes", ["function" == typeof (s = "undefined" != typeof a.FirstRunWizardService && a.FirstRunWizardService) && s || Object])], FirstrunNetworkDefaultComponent);
            var e,
                t,
                s
        }();
    t.FirstrunNetworkDefaultComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(35),
        l = n(5),
        d = n(76),
        p = n(179),
        u = n(428),
        f = n(426),
        v = n(430),
        h = n(427),
        m = function() {
            function FirstrunWizardModule() {}
            return FirstrunWizardModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.DirectivesModule, l.RouterModule],
                declarations: [p.FirstrunWizardComponent, u.FirstrunNetworkDefaultComponent, f.FirstrunACISettingsComponent, v.FirstrunConfirmComponent, h.FirstrunNetworkCreateComponent],
                exports: [p.FirstrunWizardComponent, u.FirstrunNetworkDefaultComponent, f.FirstrunACISettingsComponent, v.FirstrunConfirmComponent, h.FirstrunNetworkCreateComponent],
                providers: [d.FirstRunWizardService]
            }), i("design:paramtypes", [])], FirstrunWizardModule)
        }();
    t.FirstrunWizardModule = m
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(76),
        c = n(7),
        l = n(85),
        d = function() {
            function FirstrunConfirmComponent(e, t, n, o) {
                this.wizardService = e, this.router = t, this.firstRunService = n, this.crudHelperService = o, this.updatePage = new r.EventEmitter, this.cancelPage = new r.EventEmitter, this.showLoader = !1, this.skipArray = Array.from(this.wizardService.skipArray)
            }
            return FirstrunConfirmComponent.prototype.process = function() {
                var e = this,
                    t = this;
                this.showLoader = !0, this.wizardService.updateSettings().then(function(t) {
                    e.loadDashboard()
                }, function(e) {
                    t.crudHelperService.stopLoader(t), t.crudHelperService.showServerError("Contiv setup failed", e)
                })
            }, FirstrunConfirmComponent.prototype.loadDashboard = function() {
                var e = this;
                this.firstRunService.setFirstRun(!0).then(function(t) {
                    t || (e.wizardService.initialize(), e.showLoader = !1, e.router.navigate(["/m/dashboard"]))
                })
            }, FirstrunConfirmComponent.prototype.goBack = function() {
                this.updatePage.emit(2)
            }, FirstrunConfirmComponent.prototype.cancel = function() {
                this.cancelPage.emit()
            }, o([r.Output("updatePage"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], FirstrunConfirmComponent.prototype, "updatePage", void 0), o([r.Output("cancelPage"), i("design:type", "function" == typeof (t = "undefined" != typeof r.EventEmitter && r.EventEmitter) && t || Object)], FirstrunConfirmComponent.prototype, "cancelPage", void 0), FirstrunConfirmComponent = o([r.Component({
                selector: "firstrunwizardconfirmpage",
                template: n(715)
            }), i("design:paramtypes", ["function" == typeof (d = "undefined" != typeof s.FirstRunWizardService && s.FirstRunWizardService) && d || Object, "function" == typeof (p = "undefined" != typeof a.Router && a.Router) && p || Object, "function" == typeof (u = "undefined" != typeof l.FirstRunService && l.FirstRunService) && u || Object, "function" == typeof (f = "undefined" != typeof c.CRUDHelperService && c.CRUDHelperService) && f || Object])], FirstrunConfirmComponent);
            var e,
                t,
                d,
                p,
                u,
                f
        }();
    t.FirstrunConfirmComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(180),
        d = n(182),
        p = n(181),
        u = n(35),
        f = function() {
            function LoginModule() {}
            return LoginModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, u.DirectivesModule],
                declarations: [l.LoginComponent, p.LogoutComponent, d.UnauthorizedComponent],
                exports: [l.LoginComponent, p.LogoutComponent, d.UnauthorizedComponent, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], LoginModule)
        }();
    t.LoginModule = f
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(183),
        d = n(35),
        p = function() {
            function MenuModule() {}
            return MenuModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, d.DirectivesModule],
                declarations: [l.MenuComponent],
                exports: [l.MenuComponent, a.FormsModule, s.CommonModule, c.RouterModule, d.DirectivesModule]
            }), i("design:paramtypes", [])], MenuModule)
        }();
    t.MenuModule = p
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(75),
        l = function() {
            function BandwidthListComponent(e, t, n) {
                var o = this;
                this.netprofilesModel = e, this.ngZone = n, this.crudHelperService = t, this.bandwidthPolicyListCtrl = this, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    o.getPolicies(!0)
                })
            }
            return BandwidthListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getPolicies(!1)
            }, BandwidthListComponent.prototype.getPolicies = function(e) {
                var t = this;
                this.netprofilesModel.get(e).then(function(e) {
                    t.policies = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, BandwidthListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, BandwidthListComponent = o([r.Component({
                selector: "bandwidthpolicylist",
                template: n(722)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof c.NetprofilesModel && c.NetprofilesModel) && e || Object, "function" == typeof (t = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object])], BandwidthListComponent);
            var e,
                t,
                l
        }();
    t.BandwidthListComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(74),
        s = n(7),
        c = n(16),
        l = function() {
            function ContractGroupListComponent(e, t, n) {
                var o = this;
                this.contractGroupsModel = e, this.crudHelperService = t, this.ngZone = n, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    o.getContractGroups(!0)
                })
            }
            return ContractGroupListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getContractGroups(!1)
            }, ContractGroupListComponent.prototype.getContractGroups = function(e) {
                var t = this;
                this.contractGroupsModel.get(e).then(function(e) {
                    t.contractGroups = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, ContractGroupListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, ContractGroupListComponent = o([r.Component({
                selector: "contractgrouplist",
                template: n(725)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ContractGroupsModel && a.ContractGroupsModel) && e || Object, "function" == typeof (t = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object])], ContractGroupListComponent);
            var e,
                t,
                l
        }();
    t.ContractGroupListComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(55),
        s = n(7),
        c = n(16),
        l = function() {
            function IsolationListComponent(e, t, n) {
                var o = this;
                this.ngZone = n, this.crudHelperService = t, this.policiesModel = e, this.isolationPolicyListCtrl = this, this.refresh = c.Observable.interval(5e3).subscribe(function() {
                    o.getPolicies(!0)
                })
            }
            return IsolationListComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), this.getPolicies(!1)
            }, IsolationListComponent.prototype.getPolicies = function(e) {
                var t = this;
                this.policiesModel.get(e).then(function(e) {
                    t.policies = e, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, IsolationListComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, IsolationListComponent = o([r.Component({
                selector: "isolationpolicylist",
                template: n(728)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.PoliciesModel && a.PoliciesModel) && e || Object, "function" == typeof (t = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object])], IsolationListComponent);
            var e,
                t,
                l
        }();
    t.IsolationListComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(86),
        l = n(11),
        d = n(14),
        p = n(55),
        u = function() {
            function IsolationPolicyStatComponent(e, t, n, o) {
                var i = this;
                this.ngZone = o, this.crudHelperService = t, this.policiesModel = e, this.inspectSerrvice = n, this.statKey = "", this.showLoader = !0, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    "" != i.statKey && i.getIsolationPolicyInspect(!0)
                }), this.isolationPolicyInspectStats = {
                    numEndpoints: ""
                }, this.config = {
                    policyName: "",
                    tenantName: ""
                }, this.endpoints = [], this.filteredendpoints = [], this.containerDetails = {}, this.isolationPolicyStatsComp = this
            }
            return IsolationPolicyStatComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), "" != this.statKey && this.getIsolationPolicyInspect(!1)
            }, IsolationPolicyStatComponent.prototype.getIsolationPolicyInspect = function(e) {
                var t = this;
                this.policiesModel.getInspectByKey(this.statKey, l.ContivGlobals.POLICIES_INSPECT_ENDPOINT, e).then(function(e) {
                    if (t.isolationPolicyInspectStats = e.Oper, t.config = e.Config, d.isUndefined(e.Oper.endpoints))
                        t.endpoints = [], t.containerDetails = {};
                    else {
                        var n = t.inspectSerrvice.buildEndPoints(e.Oper.endpoints);
                        t.inspectSerrvice.checkContainerChanged(t.containerDetails, n) && (t.endpoints = e.Oper.endpoints, t.containerDetails = n)
                    }
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, IsolationPolicyStatComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, o([r.Input("statKey"), i("design:type", String)], IsolationPolicyStatComponent.prototype, "statKey", void 0), IsolationPolicyStatComponent = o([r.Component({
                selector: "isolationpolicystats",
                template: n(729)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof p.PoliciesModel && p.PoliciesModel) && e || Object, "function" == typeof (t = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && t || Object, "function" == typeof (u = "undefined" != typeof c.InspectService && c.InspectService) && u || Object, "function" == typeof (f = "undefined" != typeof r.NgZone && r.NgZone) && f || Object])], IsolationPolicyStatComponent);
            var e,
                t,
                u,
                f
        }();
    t.IsolationPolicyStatComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(56),
        p = n(188),
        u = n(189),
        f = n(184),
        v = n(185),
        h = n(435),
        m = n(433),
        g = n(436),
        y = n(434),
        b = n(186),
        w = n(187),
        C = function() {
            function NetworkPoliciesModule() {}
            return NetworkPoliciesModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule],
                declarations: [d.NetworkPoliciesTabsComponent, p.IsolationPolicyCreateComponent, u.IsolationPolicyDetailsComponent, f.BandwidthPolicyCreateComponent, v.BandwidthPolicyDetailsComponent, f.BandwidthPolicyCreateComponent, h.IsolationListComponent, m.BandwidthListComponent, g.IsolationPolicyStatComponent, y.ContractGroupListComponent, b.ContractGroupCreateComponent, w.ContractGroupDetailsComponent],
                exports: [d.NetworkPoliciesTabsComponent, p.IsolationPolicyCreateComponent, u.IsolationPolicyDetailsComponent, f.BandwidthPolicyCreateComponent, v.BandwidthPolicyDetailsComponent, h.IsolationListComponent, m.BandwidthListComponent, g.IsolationPolicyStatComponent, y.ContractGroupListComponent, b.ContractGroupCreateComponent, w.ContractGroupDetailsComponent, a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule]
            }), i("design:paramtypes", [])], NetworkPoliciesModule)
        }();
    t.NetworkPoliciesModule = C
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(35),
        l = n(192),
        d = n(440),
        p = n(191),
        u = n(439),
        f = n(190),
        v = n(5),
        h = function() {
            function NetworkModule() {}
            return NetworkModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.DirectivesModule, v.RouterModule],
                declarations: [l.NetworkListComponent, d.NetworkStatComponent, u.NetworkInfoComponent, p.NetworkdetailsComponent, f.NetworkCreateComponent],
                exports: [l.NetworkListComponent, d.NetworkStatComponent, u.NetworkInfoComponent, p.NetworkdetailsComponent, f.NetworkCreateComponent]
            }), i("design:paramtypes", [])], NetworkModule)
        }();
    t.NetworkModule = h
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = function() {
            function NetworkInfoComponent() {
                this.networkDetailsCtrl = {
                    network: {
                        networkName: "",
                        encap: "",
                        subnet: "",
                        gateway: ""
                    },
                    showLoader: !1,
                    applicationGroups: []
                }
            }
            return o([r.Input("networkDetailsCtrl"), i("design:type", Object)], NetworkInfoComponent.prototype, "networkDetailsCtrl", void 0), NetworkInfoComponent = o([r.Component({
                selector: "network-info",
                template: n(733)
            }), i("design:paramtypes", [])], NetworkInfoComponent)
        }();
    t.NetworkInfoComponent = a;
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(7),
        s = n(16),
        c = n(39),
        l = n(86),
        d = n(14),
        p = n(11),
        u = function() {
            function NetworkStatComponent(e, t, n, o) {
                var i = this;
                this.ngZone = o, this.crudHelperService = t, this.networksModel = e, this.inspectSerrvice = n, this.statKey = "", this.showLoader = !0, this.refresh = s.Observable.interval(5e3).subscribe(function() {
                    "" != i.statKey && i.getNetworkInspect(!0)
                }), this.networkInspectStats = {
                    allocatedAddressesCount: "",
                    allocatedIPAddresses: "",
                    availableIPAddresses: "",
                    dnsServerIP: "",
                    externalPktTag: "",
                    numEndpoints: "",
                    pktTag: "",
                    networkTag: ""
                }, this.config = {
                    networkName: ""
                }, this.endpoints = [], this.filteredendpoints = [], this.containerDetails = {}, this.networkStatsCtrl = this
            }
            return NetworkStatComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), "" != this.statKey && this.getNetworkInspect(!1)
            }, NetworkStatComponent.prototype.getNetworkInspect = function(e) {
                var t = this;
                this.networksModel.getInspectByKey(this.statKey, p.ContivGlobals.NETWORKS_INSPECT_ENDPOINT, e).then(function(e) {
                    if (t.networkInspectStats = e.Oper, t.config = e.Config, d.isUndefined(e.Oper.endpoints))
                        t.endpoints = [], t.containerDetails = {};
                    else {
                        var n = t.inspectSerrvice.buildEndPoints(e.Oper.endpoints);
                        t.inspectSerrvice.checkContainerChanged(t.containerDetails, n) && (t.endpoints = e.Oper.endpoints, t.containerDetails = n)
                    }
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, NetworkStatComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, o([r.Input("statKey"), i("design:type", String)], NetworkStatComponent.prototype, "statKey", void 0), NetworkStatComponent = o([r.Component({
                selector: "network-stat",
                template: n(735)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof c.NetworksModel && c.NetworksModel) && e || Object, "function" == typeof (t = "undefined" != typeof a.CRUDHelperService && a.CRUDHelperService) && t || Object, "function" == typeof (u = "undefined" != typeof l.InspectService && l.InspectService) && u || Object, "function" == typeof (f = "undefined" != typeof r.NgZone && r.NgZone) && f || Object])], NetworkStatComponent);
            var e,
                t,
                u,
                f
        }();
    t.NetworkStatComponent = u
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(35),
        l = n(196),
        d = n(197),
        p = n(442),
        u = n(193),
        f = n(195),
        v = n(194),
        h = n(5),
        m = function() {
            function ServicelbModule() {}
            return ServicelbModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.DirectivesModule, h.RouterModule],
                declarations: [l.ServicelbListComponent, d.ServicelbStatComponent, p.ServicelbPortsComponent, u.ServicelbCreateComponent, f.ServicelbInfoComponent, v.ServicelbDetailsComponent],
                exports: [l.ServicelbListComponent, d.ServicelbStatComponent, p.ServicelbPortsComponent, u.ServicelbCreateComponent, f.ServicelbInfoComponent, v.ServicelbDetailsComponent]
            }), i("design:paramtypes", [])], ServicelbModule)
        }();
    t.ServicelbModule = m
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(28),
        s = function() {
            function ServicelbPortsComponent() {
                this.itemsChange = new r.EventEmitter, this.items = [], this.newItem = {
                    servicePort: "",
                    providerPort: "",
                    protocol: ""
                }
            }
            return ServicelbPortsComponent.prototype.resetItem = function() {
                this.newItem = {
                    servicePort: "",
                    providerPort: "",
                    protocol: ""
                }
            }, ServicelbPortsComponent.prototype.add = function() {
                function compare(e, t) {
                    return e == t
                }
                if ("" != this.newItem.servicePort || "" != this.newItem.providerPort || "" != this.newItem.protocol) {
                    var e = this.newItem.servicePort + ":" + this.newItem.providerPort + ":" + this.newItem.protocol;
                    a.pullAllWith(this.items, [e], compare), this.items.push(e), this.itemsChange.emit(this.items), this.resetItem()
                }
            }, ServicelbPortsComponent.prototype.remove = function(e) {
                a.remove(this.items, function(t) {
                    return t == e
                })
            }, o([r.Input("items"), i("design:type", Array)], ServicelbPortsComponent.prototype, "items", void 0), o([r.Output("itemsChange"), i("design:type", "function" == typeof (e = "undefined" != typeof r.EventEmitter && r.EventEmitter) && e || Object)], ServicelbPortsComponent.prototype, "itemsChange", void 0), ServicelbPortsComponent = o([r.Component({
                selector: "ctv-servicelbports",
                template: n(740)
            }), i("design:paramtypes", [])], ServicelbPortsComponent);
            var e
        }();
    t.ServicelbPortsComponent = s
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(200),
        p = n(199),
        u = n(198),
        f = function() {
            function AuthorizationModule() {}
            return AuthorizationModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule],
                declarations: [d.AuthorizationListComponent, p.AuthorizationDetailsComponent, u.AuthorizationCreateComponent],
                exports: [d.AuthorizationListComponent, p.AuthorizationDetailsComponent, u.AuthorizationCreateComponent, l.DirectivesModule, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], AuthorizationModule)
        }();
    t.AuthorizationModule = f
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(5),
        s = n(7),
        c = n(64),
        l = function() {
            function NodeInfoComponent(e, t, n, o, i) {
                function setMode() {
                    e.routeConfig.path.includes("edit") ? r.mode = "edit" : r.mode = "details"
                }
                this.activatedRoute = e, this.router = t, this.ngZone = n, this.bgpsModel = o, this.crudHelperService = i, this.node = {};
                var r = this;
                setMode()
            }
            return NodeInfoComponent.prototype.ngOnInit = function() {
                var e = this;
                e.crudHelperService.stopLoader(e), e.bgpsModel.getModelByKey(e.activatedRoute.snapshot.params.key, !1, "key").then(function(t) {
                    e.node = t, e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    })
                }, function(t) {
                    e.ngZone.run(function() {
                        e.crudHelperService.stopLoader(e)
                    })
                })
            }, NodeInfoComponent.prototype.returnToNodeDetails = function() {
                this.router.navigate(["../../details", this.node.key], {
                    relativeTo: this.activatedRoute
                })
            }, NodeInfoComponent.prototype.cancelEditing = function() {
                this.returnToNodeDetails()
            }, NodeInfoComponent.prototype.saveNode = function(e) {
                var t = this;
                e && (t.crudHelperService.startLoader(t), t.bgpsModel.save(t.node).then(function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showNotification("Node: Bgp config updated", e.key.toString()), t.returnToNodeDetails()
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    }), t.crudHelperService.showServerError("Node: Bgp config update failed", e), t.crudHelperService.showServerError(t, e)
                }))
            }, o([r.Input("mode"), i("design:type", String)], NodeInfoComponent.prototype, "mode", void 0), NodeInfoComponent = o([r.Component({
                selector: "nodeinfo",
                template: n(748)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof a.ActivatedRoute && a.ActivatedRoute) && e || Object, "function" == typeof (t = "undefined" != typeof a.Router && a.Router) && t || Object, "function" == typeof (l = "undefined" != typeof r.NgZone && r.NgZone) && l || Object, "function" == typeof (d = "undefined" != typeof c.BgpsModel && c.BgpsModel) && d || Object, "function" == typeof (p = "undefined" != typeof s.CRUDHelperService && s.CRUDHelperService) && p || Object])], NodeInfoComponent);
            var e,
                t,
                l,
                d,
                p
        }();
    t.NodeInfoComponent = l
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(16),
        s = n(11),
        c = n(64),
        l = n(7),
        d = function() {
            function NodeStatsComponent(e, t, n) {
                var o = this;
                this.bgpsModel = e, this.crudHelperService = t, this.ngZone = n, this.statkey = "", this.inspect = {
                    Config: {
                        neighbor: ""
                    },
                    Oper: {
                        adminStatus: "",
                        neighborStatus: "",
                        numRoutes: ""
                    }
                }, this.routes = [], this.filteredroutes = [], this.refresh = a.Observable.interval(5e3).subscribe(function() {
                    "" != o.statkey && o.getBgpInspect(!0)
                })
            }
            return NodeStatsComponent.prototype.ngOnInit = function() {
                this.crudHelperService.startLoader(this), "" != this.statkey && this.getBgpInspect(!1)
            }, NodeStatsComponent.prototype.ngOnDestroy = function() {
                this.refresh.unsubscribe()
            }, NodeStatsComponent.prototype.getBgpInspect = function(e) {
                var t = this;
                this.bgpsModel.getInspectByKey(this.statkey, s.ContivGlobals.BGPS_INSPECT_ENDPOINT, e).then(function(e) {
                    t.inspect = e, t.routes = e.Oper.routes, t.filteredroutes = e.Oper.routes, t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                }, function(e) {
                    t.ngZone.run(function() {
                        t.crudHelperService.stopLoader(t)
                    })
                })
            }, o([r.Input("statkey"), i("design:type", String)], NodeStatsComponent.prototype, "statkey", void 0), NodeStatsComponent = o([r.Component({
                selector: "nodestats",
                template: n(750)
            }), i("design:paramtypes", ["function" == typeof (e = "undefined" != typeof c.BgpsModel && c.BgpsModel) && e || Object, "function" == typeof (t = "undefined" != typeof l.CRUDHelperService && l.CRUDHelperService) && t || Object, "function" == typeof (d = "undefined" != typeof r.NgZone && r.NgZone) && d || Object])], NodeStatsComponent);
            var e,
                t,
                d
        }();
    t.NodeStatsComponent = d
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(202),
        p = n(206),
        u = n(205),
        f = n(203),
        v = n(204),
        h = n(444),
        m = n(445),
        g = n(201),
        y = function() {
            function SettingsModule() {}
            return SettingsModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule],
                declarations: [p.SettingsMenuComponent, d.NetworkSettingsComponent, u.NodeListComponent, f.NodeCreateComponent, v.NodeDetailsComponent, h.NodeInfoComponent, m.NodeStatsComponent, g.LdapConfigComponent],
                exports: [p.SettingsMenuComponent, d.NetworkSettingsComponent, u.NodeListComponent, f.NodeCreateComponent, v.NodeDetailsComponent, h.NodeInfoComponent, m.NodeStatsComponent, g.LdapConfigComponent, a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule]
            }), i("design:paramtypes", [])], SettingsModule)
        }();
    t.SettingsModule = y
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(209),
        p = n(207),
        u = n(208),
        f = function() {
            function OrganizationModule() {}
            return OrganizationModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule],
                declarations: [d.OrganizationListComponent, p.OrganizationCreateComponent, u.OrganizationDetailsComponent],
                exports: [d.OrganizationListComponent, p.OrganizationCreateComponent, u.OrganizationDetailsComponent, l.DirectivesModule, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], OrganizationModule)
        }();
    t.OrganizationModule = f
}, function(e, t, n) {
    "use strict";
    var o = this && this.__decorate || function(e, t, n, o) {
            var i,
                r = arguments.length,
                a = 3 > r ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (a = (3 > r ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        },
        i = this && this.__metadata || function(e, t) {
            return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
        },
        r = n(2),
        a = n(23),
        s = n(20),
        c = n(5),
        l = n(35),
        d = n(212),
        p = n(210),
        u = n(211),
        f = function() {
            function UsersModule() {}
            return UsersModule = o([r.NgModule({
                imports: [a.FormsModule, s.CommonModule, c.RouterModule, l.DirectivesModule],
                declarations: [d.UserListComponent, p.UserCreateComponent, u.UserDetailsComponent],
                exports: [d.UserListComponent, p.UserCreateComponent, u.UserDetailsComponent, l.DirectivesModule, a.FormsModule, s.CommonModule, c.RouterModule]
            }), i("design:paramtypes", [])], UsersModule)
        }();
    t.UsersModule = f
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(95),
        i = n(79),
        r = o(i, "DataView");
    e.exports = r
}, function(e, t, n) {
    var o = n(95),
        i = n(79),
        r = o(i, "Map");
    e.exports = r
}, function(e, t, n) {
    var o = n(95),
        i = n(79),
        r = o(i, "Promise");
    e.exports = r
}, function(e, t, n) {
    var o = n(95),
        i = n(79),
        r = o(i, "Set");
    e.exports = r
}, function(e, t, n) {
    var o = n(95),
        i = n(79),
        r = o(i, "WeakMap");
    e.exports = r
}, function(e, t, n) {
    function baseHas(e, t) {
        return r.call(e, t) || "object" == typeof e && t in e && null === o(e)
    }
    var o = n(667),
        i = Object.prototype,
        r = i.hasOwnProperty;
    e.exports = baseHas
}, function(e, t) {
    function baseKeys(e) {
        return n(Object(e))
    }
    var n = Object.keys;
    e.exports = baseKeys
}, function(e, t) {
    function baseProperty(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    e.exports = baseProperty
}, function(e, t) {
    function baseTimes(e, t) {
        for (var n = -1, o = Array(e); ++n < e;)
            o[n] = t(n);
        return o
    }
    e.exports = baseTimes
}, function(e, t) {
    function checkGlobal(e) {
        return e && e.Object === Object ? e : null
    }
    e.exports = checkGlobal
}, function(e, t, n) {
    var o = n(663),
        i = o("length");
    e.exports = i
}, function(e, t) {
    function getPrototype(e) {
        return n(Object(e))
    }
    var n = Object.getPrototypeOf;
    e.exports = getPrototype
}, function(e, t, n) {
    function getTag(e) {
        return m.call(e)
    }
    var o = n(656),
        i = n(657),
        r = n(658),
        a = n(659),
        s = n(660),
        c = n(248),
        l = "[object Map]",
        d = "[object Object]",
        p = "[object Promise]",
        u = "[object Set]",
        f = "[object WeakMap]",
        v = "[object DataView]",
        h = Object.prototype,
        m = h.toString,
        g = c(o),
        y = c(i),
        b = c(r),
        w = c(a),
        C = c(s);
    (o && getTag(new o(new ArrayBuffer(1))) != v || i && getTag(new i) != l || r && getTag(r.resolve()) != p || a && getTag(new a) != u || s && getTag(new s) != f) && (getTag = function(e) {
        var t = m.call(e),
            n = t == d ? e.constructor : void 0,
            o = n ? c(n) : void 0;
        if (o)
            switch (o) {
            case g:
                return v;
            case y:
                return l;
            case b:
                return p;
            case w:
                return u;
            case C:
                return f
            }
        return t
    }), e.exports = getTag
}, function(e, t, n) {
    function indexKeys(e) {
        var t = e ? e.length : void 0;
        return a(t) && (r(e) || s(e) || i(e)) ? o(t, String) : null
    }
    var o = n(664),
        i = n(249),
        r = n(146),
        a = n(250),
        s = n(252);
    e.exports = indexKeys
}, function(e, t) {
    function isHostObject(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString)
            try {
                t = !!(e + "")
            } catch (n) {}
        return t
    }
    e.exports = isHostObject
}, function(e, t) {
    function isIndex(e, t) {
        return e = "number" == typeof e || o.test(e) ? +e : -1, t = null == t ? n : t, e > -1 && e % 1 == 0 && t > e
    }
    var n = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    e.exports = isIndex
}, function(e, t) {
    function isPrototype(e) {
        var t = e && e.constructor,
            o = "function" == typeof t && t.prototype || n;
        return e === o
    }
    var n = Object.prototype;
    e.exports = isPrototype
}, function(e, t) {
    function constant(e) {
        return function() {
            return e
        }
    }
    e.exports = constant
}, function(e, t, n) {
    function isArrayLikeObject(e) {
        return i(e) && o(e)
    }
    var o = n(147),
        i = n(149);
    e.exports = isArrayLikeObject
}, function(e, t, n) {
    (function(e) {
        var o = n(673),
            i = n(79),
            r = {
                "function": !0,
                object: !0
            },
            a = r[typeof t] && t && !t.nodeType ? t : void 0,
            s = r[typeof e] && e && !e.nodeType ? e : void 0,
            c = s && s.exports === a ? a : void 0,
            l = c ? i.Buffer : void 0,
            d = l ? function(e) {
                return e instanceof l
            } : o(!1);
        e.exports = d
    }).call(t, n(122)(e))
}, function(e, t, n) {
    function isEmpty(e) {
        if (a(e) && (r(e) || d(e) || c(e.splice) || i(e) || s(e)))
            return !e.length;
        if (l(e)) {
            var t = o(e);
            if (t == u || t == f)
                return !e.size
        }
        for (var n in e)
            if (h.call(e, n))
                return !1;
        return !(g && p(e).length)
    }
    var o = n(668),
        i = n(249),
        r = n(146),
        a = n(147),
        s = n(675),
        c = n(148),
        l = n(149),
        d = n(252),
        p = n(678),
        u = "[object Map]",
        f = "[object Set]",
        v = Object.prototype,
        h = v.hasOwnProperty,
        m = v.propertyIsEnumerable,
        g = !m.call({
            valueOf: 1
        }, "valueOf");
    e.exports = isEmpty
}, function(e, t, n) {
    function isNative(e) {
        if (!r(e))
            return !1;
        var t = o(e) || i(e) ? u : c;
        return t.test(a(e))
    }
    var o = n(148),
        i = n(670),
        r = n(251),
        a = n(248),
        s = /[\\^$.*+?()[\]{}|]/g,
        c = /^\[object .+?Constructor\]$/,
        l = Object.prototype,
        d = Function.prototype.toString,
        p = l.hasOwnProperty,
        u = RegExp("^" + d.call(p).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = isNative
}, function(e, t, n) {
    function keys(e) {
        var t = c(e);
        if (!t && !a(e))
            return i(e);
        var n = r(e),
            l = !!n,
            d = n || [],
            p = d.length;
        for (var u in e)
            !o(e, u) || l && ("length" == u || s(u, p)) || t && "constructor" == u || d.push(u);
        return d
    }
    var o = n(661),
        i = n(662),
        r = n(669),
        a = n(147),
        s = n(671),
        c = n(672);
    e.exports = keys
}, , , function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建应用策略组</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/applicationgroups/list">\n                        应用策略组\n                    </a>\n                </span>\n                <span class="crumb current">创建</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form" #formRef="ngForm"\n                  (ngSubmit)="createApplicationGroup(formRef.valid)"\n                  novalidate>\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n                <div class="ui basic segment">\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field" [ngClass]="{error: newApplicationGroupNameRef.errors?.required && formRef.submitted}">\n                                    <label for="newApplicationGroupName">应用策略组名</label>\n                                    <input #newApplicationGroupNameRef="ngModel"\n                                           type="text"\n                                           id="newApplicationGroupName"\n                                           name="newApplicationGroupName"\n                                           [(ngModel)]="applicationGroup.groupName"\n                                           placeholder="输入名称" required>\n                                    <span class="inlineError" *ngIf="newApplicationGroupNameRef.errors?.required && formRef.submitted">\n                                        Please enter application group name\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field" [ngClass]="{error: newApplicationGroupTenantRef.errors?.required && formRef.submitted}">\n                                    <label for="newApplicationGroupTenant">租户</label>\n                                    <select id="newApplicationGroupTenant" class="ui dropdown"\n                                            name="newApplicationGroupTenant"\n                                            ngModel\n                                            (change)="updateTenant($event.target.value)"\n                                            required #newApplicationGroupTenantRef="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [value]="tenant.tenantName">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="newApplicationGroupTenantRef.errors?.required && formRef.submitted">\n                                        请选择租户\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field" [hidden]="!applicationGroup.tenantName.length" [ngClass]="{error: newApplicationGroupNetworkRef.errors?.required && formRef.submitted}">\n                                    <label for="newApplicationGroupNetwork">子网</label>\n                                    <select id="newApplicationGroupNetwork"\n                                            class="ui dropdown"\n                                            #newApplicationGroupNetworkRef="ngModel"\n                                            name="newApplicationGroupNetwork"\n                                            [(ngModel)]="applicationGroup.networkName"\n                                            required>\n                                        <option *ngIf="networks.length" value="">-- 请选择子网 --</option>\n                                        <option *ngIf="!networks.length" value="">-- 这个租户下没有子网 --</option>\n                                        <option *ngFor="let network of networks"\n                                                [ngValue]="network.networkName">\n                                            {{network.networkName}}\n                                        </option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="newApplicationGroupNetworkRef.errors?.required && formRef.submitted">\n                                        Please select network\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field">\n                                    <label for="newApplicationGroupCfgdtag">组Tag</label>\n                                    <input #newApplicationGroupCfgdtagRef="ngModel"\n                                           type="text"\n                                           id="newApplicationGroupCfgdtag"\n                                           name="newApplicationGroupCfgdtag"\n                                           [(ngModel)]="applicationGroup.cfgdTag"\n                                           placeholder="输入组Tag">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned sixteen wide column">\n                                <ctv-collapsible title="关联安全隔离策略" class="policySelection">\n                                    <ctv-isolationpolicy mode="edit" [applicationgroup]="applicationGroup"></ctv-isolationpolicy>\n                                </ctv-collapsible>\n                            </div>\n                        </div>\n\n                        <div class="ui row">\n                            <div class="left aligned sixteen wide column">\n\n                                <ctv-collapsible title="关联QoS策略" class="policySelection">\n                                    <ctv-bandwidthpolicy mode="edit" [applicationgroup]="applicationGroup"></ctv-bandwidthpolicy>\n                                </ctv-collapsible>\n\n                            </div>\n                        </div>\n\n                        <div class="ui row" *verifydom="\'aci\'">\n                            <div class="left aligned sixteen wide column">\n\n                                <ctv-collapsible title="ACI External Contract Groups To Apply" class="policySelection">\n                                    <ctv-contractgroup mode="edit" [applicationgroup]="applicationGroup"></ctv-contractgroup>\n                                </ctv-collapsible>\n\n                            </div>\n                        </div>\n\n                        <div class="ui row">\n                            <div class="right aligned sixteen wide column">\n\n                                <div class="buttonRow">\n                                    <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                        取消\n                                    </button>\n                                    <button type="submit" class="ui primary button">\n                                        创建\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row" [ngSwitch]="mode">\n        <div class="left aligned eight wide column pageHeader">\n            <div class="content pageTitle">{{applicationGroup.groupName}}</div>\n        </div>\n        <div *ngSwitchCase="\'details\'" class="right aligned eight wide column">\n            <button type="button" class="ui basic button"\n                    (click)="cancelDetails()">\n                关闭\n            </button>\n            <button  class="ui secondary button"\n                    (click)="editApplicationGroup()">\n                编辑\n            </button>\n            <button class="ui secondary button" onclick="$(\'#delete-group-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n        </div>\n\n    </div>\n\n    <div id="delete-group-modal" class="ui small modal">\n        <div class="header">删除</div>\n        <div class="content">\n            <p>Are you sure you want to delete the application group <q>{{applicationGroup.groupName}}</q>?</p>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <div class="ui primary approve button modalBtn" (click)="deleteApplicationGroup()">\n                删除\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/applicationgroups/list">\n                        应用策略组\n                    </a>\n                </span>\n                <span class="crumb">{{applicationGroup.groupName}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row tabs">\n        <div class="aligned left ui sixteen wide column">\n            <div class="ui tabular menu" *ngIf="mode==\'details\'">\n                <a class="item" [ngClass]="{active: infoselected}" (click)="infoselected=true">\n                    详细信息\n                </a>\n                <a class="item" [ngClass]="{active: !infoselected}" (click)="infoselected=false">\n                    情况统计\n                </a>\n            </div>\n            <div *ngIf="infoselected || mode == \'edit\'">\n\n                <applicationgroupinfo [applicationGroup]="applicationGroup"\n                                      [mode]="mode" [showLoader]="showLoader"></applicationgroupinfo>\n            </div>\n\n            <applicationgroupstats [statkey]="statskey"\n                                   *ngIf="!infoselected && mode != \'edit\'"></applicationgroupstats>\n        </div>\n    </div>\n\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <div class="ui grid">\n        <div class="ui row ">\n            <div class="ui sixteen wide column">\n                <table>\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header"><strong>名称</strong></td>\n                        <td class="ctv-value">{{applicationGroup.groupName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">租户</td>\n                        <td class="ctv-value">{{applicationGroup.tenantName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header"><strong>子网</strong></td>\n                        <td class="ctv-value">{{applicationGroup.networkName}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n\n            </div>\n        </div>\n\n        <div class="ui row ">\n            <div class="ui sixteen wide column">\n                <ctv-collapsible title="已关联的安全隔离策略" class="policySelection">\n                    <ctv-isolationpolicy [mode]="mode" [applicationgroup]="applicationGroup"></ctv-isolationpolicy>\n                </ctv-collapsible>\n            </div>\n        </div>\n\n        <div class="ui row ">\n            <div class="ui sixteen wide column">\n                <ctv-collapsible title="已关联的QoS策略" class="policySelection">\n                    <ctv-bandwidthpolicy [mode]="mode" [applicationgroup]="applicationGroup"></ctv-bandwidthpolicy>\n                </ctv-collapsible>\n            </div>\n        </div>\n\n        <div class="ui row " *verifydom="\'aci\'">\n            <div class="ui sixteen wide column">\n                <ctv-collapsible title="ACI External Contract Groups Applied">\n                    <ctv-contractgroup [mode]="mode" [applicationgroup]="applicationGroup"></ctv-contractgroup>\n                </ctv-collapsible>\n            </div>\n        </div>\n        <div class="ui row" [ngSwitch]="mode" style="margin-top: 40px">\n\n            <div class="right aligned sixteen wide column">\n                <button *ngSwitchCase="\'edit\'" type="button" class="ui basic button"\n                        (click)="cancelEditing()">\n                    取消\n                </button>\n                <button *ngSwitchCase="\'edit\'" type="button" class="ui primary button"\n                        (click)="saveApplicationGroup()">\n                    保存\n                </button>\n            </div>\n        </div>\n    </div>\n</div>';
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">应用策略组</div>\n        </div>\n        <div class="right aligned eight wide column">\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建应用策略组\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">应用策略组</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row searchRow">\n        <div class="ui sixteen wide column">\n            <ctv-search *ngIf="applicationGroupListCtrl[\'groups\']" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n        </div>\n    </div>\n\n    <div class="ui row ctvTable">\n        <div class="ui sixteen wide column">\n            <div class="ui active inverted dimmer" *ngIf="applicationGroupListCtrl.showLoader">\n                <div class="ui loader"></div>\n            </div>\n            <ctv-table #tableRef [defaultSortColumn]="\'groupName\'"\n                       [items]="applicationGroupListCtrl[\'groups\']"\n                       (filtereditems)="applicationGroupListCtrl[\'filteredgroups\']=$event;"\n                       [size]="12">\n                <thead>\n                    <tr>\n                        <th><ctv-th [sortfield]="\'groupName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">名称</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'networkName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">网络</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'policies\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">策略</ctv-th></th>\n                    </tr>\n                </thead>\n\n                <tbody *ngIf="applicationGroupListCtrl[\'groups\'] && applicationGroupListCtrl[\'groups\'].length">\n                    <tr *ngFor="let group of applicationGroupListCtrl[\'filteredgroups\']">\n                        <td><a [routerLink]="[\'../details\', group.key]">{{group.groupName}}</a></td>\n                    <td>{{group.tenantName}}</td>\n                    <td>{{group.networkName}}</td>\n                    <td>{{group.policies.join(", ")}}</td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="applicationGroupListCtrl[\'groups\'] && !applicationGroupListCtrl[\'groups\'].length">\n                    <tr class="noDataFound">\n                        <td colspan="4">No application groups found. Would you like to <a href="javascript: void(0);" (click)="create()">define one?</a></td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="applicationGroupListCtrl[\'groups\'] && applicationGroupListCtrl[\'groups\'].length && !tableRef.count">\n                    <tr class="noDataFound">\n                        <td colspan="4">No records matched your filter criteria.</td>\n                    </tr>\n                </tbody>\n\n                <tfoot>\n                    <tr class="pagination">\n                        <td colspan="4">\n                            <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                             (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                             (prevChunk)="tableRef.showPrevChunk()"\n                                             (nextChunk)="tableRef.showNextChunk()">\n                            </ctv-tpagination>\n                        </td>\n                    </tr>\n                </tfoot>\n            </ctv-table>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{config[\'groupName\'] || \'not configured\'}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">网络名称</td>\n            <td class="ctv-value">{{config[\'networkName\'] || \'not configured\'}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">External PacketTag</td>\n            <td class="ctv-value">{{applicationInspectStats.externalPktTag || \'not configured\'}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Internal PacketTag</td>\n            <td class="ctv-value">{{applicationInspectStats.pktTag || \'not configured\'}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">组Tag</td>\n            <td class="ctv-value">{{applicationInspectStats.groupTag || \'not configured\'}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Endpoints数量</td>\n            <td class="ctv-value">{{applicationInspectStats.numEndpoints || \'not configured\'}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div class="ui section divider"></div>\n\n    <ctv-collapsible title="End Points">\n\n        <ctv-search *ngIf="endpoints.length" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [placeholder]="\'搜索关键字\'"></ctv-search>\n\n        <ctv-table #tableRef [defaultSortColumn]="\'containerName\'"\n                   [items]="endpoints"\n                   (filtereditems)="filteredendpoints=$event"\n                   [size]="12">\n            <thead>\n                <tr>\n                    <th class="five wide column"><ctv-th [sortfield]="\'containerName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 容器标示 </ctv-th></th>\n                    <th class="five wide column" style="padding-left: 24px !important;"><ctv-th [sortfield]="\'ipAddress\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> IP地址 </ctv-th></th>\n                    <th class="six wide column" style="padding-left: 50px !important;"><ctv-th [sortfield]="\'homingHost\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 所属主机 </ctv-th></th>\n                </tr>\n            </thead>\n\n            <tbody *ngIf="endpoints && endpoints.length">\n                <tr *ngFor="let endpoint of filteredendpoints">\n                    <td colspan="3" style="padding-left: 0 !important;">\n                        <ctv-accordion [items]="containerDetails[endpoint.containerID]">\n                            <div class="ui grid" style="margin-top: -33px; margin-left: 20px;">\n                                <div class="five wide column">{{endpoint.containerName.substr(1)}}</div>\n                                <div class="five wide column">{{endpoint.ipAddress.join(\' \')}}</div>\n                                <div class="five wide column">{{endpoint.homingHost}}</div>\n                            </div>\n                        </ctv-accordion>\n                    </td>\n                    <td></td>\n                </tr>\n            </tbody>\n\n            <tbody *ngIf="endpoints && !endpoints.length">\n                <tr class="noDataFound">\n                    <td colspan="3">No endpoints found</td>\n                </tr>\n            </tbody>\n\n            <tbody *ngIf="endpoints && endpoints.length && !tableRef.count">\n                <tr class="noDataFound">\n                    <td colspan="3">No records matched your filter criteria.</td>\n                </tr>\n            </tbody>\n\n            <tfoot>\n            <tr class="pagination">\n                <td colspan="3">\n                    <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                     (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                     (prevChunk)="tableRef.showPrevChunk()"\n                                     (nextChunk)="tableRef.showNextChunk()">\n                    </ctv-tpagination>\n                </td>\n            </tr>\n            </tfoot>\n        </ctv-table>\n    </ctv-collapsible>\n</div>\n'
}, function(e, t) {
    e.exports = '<div *ngIf="mode==\'edit\'" class="field policyOutput">\n    <table class="ui very basic collapsing unstackable table noRowBorders">\n        <tbody>\n        <tr class="noHover">\n            <td>\n                <div class="ui left icon input">\n                    <input name="netProfileSearchText"\n                           type="text"\n                           [(ngModel)]="netProfileSearchText"\n                           placeholder="过滤菜单选项">\n                    <i class="search icon"></i>\n                </div>\n            </td>\n            <td>\n                <select class="ui dropdown"\n                        name="selectNetprofile"\n                        [class.noDataFound]="!netProfiles.length"\n                        [ngModel]="selectedNetprofile"\n                        (ngModelChange)="updateApplicationgroup($event)">\n                    <option *ngIf="netProfiles.length" value="">-- Select a bandwidth policy --</option>\n                    <option *ngIf="!netProfiles.length" value="">没有定义任何策略</option>\n                    <option *ngFor="let policy of (netProfiles | filter:netProfileSearchText)"\n                            [ngValue]="policy">\n                        {{policy.profileName}}\n                    </option>\n                </select>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<div class="policyOutput">\n<h5 class="ui header">所有可用的QoS策略</h5>\n<table class="ui very basic unstackable table">\n    <thead>\n    <tr>\n        <th>Profile名称</th>\n        <th>租户名称</th>\n        <th>带宽</th>\n        <th>DSCP</th>\n    </tr>\n    </thead>\n\n    <tbody *ngIf="selectedNetprofile && selectedNetprofile.profileName">\n    <tr>\n        <td>{{selectedNetprofile.profileName}}</td>\n        <td>{{selectedNetprofile.tenantName}}</td>\n        <td>{{selectedNetprofile.bandwidth}}</td>\n        <td>{{selectedNetprofile.DSCP}}</td>\n    </tr>\n    </tbody>\n\n    <tbody *ngIf="!selectedNetprofile || !selectedNetprofile.profileName">\n    <tr class="noDataFound">\n        <td colspan="4">none selected</td>\n    </tr>\n    </tbody>\n\n</table>\n</div>'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="field policyOutput">\n    <table *ngSwitchCase="\'edit\'" class="ui very basic collapsing unstackable table noRowBorders">\n        <tbody>\n        <tr class="noHover">\n            <td>\n                <div class="ui left icon input">\n                    <input name="contractGroupSearchText"\n                           type="text"\n                           [(ngModel)]="contractGroupSearchText"\n                           placeholder="过滤菜单选项">\n                    <i class="search icon"></i>\n                </div>\n            </td>\n            <td>\n                <select #selectContractGroupRef\n                        name="selectContractGroups"\n                        class="ui dropdown"\n                        [class.noDataFound]="!contractGroups.length"\n                        ngModel>\n                    <option *ngIf="contractGroups.length" value="">-- Select an external contract group --</option>\n                    <option *ngIf="!contractGroups.length" value="">No external contract groups defined</option>\n                    <option *ngFor="let contractGroup of (contractGroups | filter:contractGroupSearchText)"\n                            [value]="contractGroup.contractsGroupName">\n                        {{contractGroup.contractsGroupName}}\n                    </option>\n                </select>\n            </td>\n            <td>\n                <button type="button" class="ui icon button iconBtn primaryIconBtn"\n                        (click)="addContractGroup(selectContractGroupRef.value)">\n                    <i class="add icon"></i>\n                </button>\n            </td>\n        </tr>\n        <tr *ngFor="let contractGroupName of applicationgroup.extContractsGrps">\n            <td>Will apply: "{{contractGroupName}}"</td>\n            <td></td>\n            <td>\n                <button type="button" class="ui icon button iconBtn secondaryIconBtn"\n                        (click)="removeContractGroup(contractGroupName)">\n                    <i class="trash icon"></i>\n                </button>\n            </td>\n        </tr>\n        <tr *ngIf="!applicationgroup.extContractsGrps" class="noDataFound">\n            <td>select an external contract group or groups from the dropdown</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <table *ngSwitchCase="\'details\'" class="ui very basic unstackable table">\n        <tbody *ngIf="applicationgroup.extContractsGrps">\n        <tr *ngFor="let contractGroupName of applicationgroup.extContractsGrps">\n            <td>Applying: "{{contractGroupName}}"</td>\n        </tr>\n        </tbody>\n        <tbody *ngIf="!applicationgroup.extContractsGrps">\n        <tr class="noDataFound">\n            <td>No external contract groups were selected</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <h5 class="ui header">All Applicable External Contract Groups</h5>\n    <table class="ui very basic unstackable table" style="margin-top: 40px">\n        <thead>\n        <tr>\n            <th>名称</th>\n            <th>租户</th>\n            <th>Type</th>\n            <th>Contracts</th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <tr *ngFor="let contractGroup of selectedContractGroups">\n            <td>{{contractGroup.contractsGroupName}}</td>\n            <td>{{contractGroup.tenantName}}</td>\n            <td>{{contractGroup.contractsType}}</td>\n            <td>{{contractGroup.contracts?.join(", ")}}</td>\n        </tr>\n\n        </tbody>\n        <tbody *ngIf="selectedContractGroups.length==0">\n        <tr class="noDataFound">\n            <td colspan="4">None applied</td>\n        </tr>\n        </tbody>\n    </table>\n</div>'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="field policyOutput">\n    <table *ngSwitchCase="\'edit\'" class="ui very basic collapsing unstackable table noRowBorders">\n        <tbody>\n        <tr class="noHover">\n            <td>\n                <div class="ui left icon input">\n                    <input name="isolationPolicySearchText"\n                           type="text"\n                           [(ngModel)]="isolationPolicySearchText"\n                           placeholder="过滤菜单选项">\n                    <i class="search icon"></i>\n                </div>\n            </td>\n            <td>\n                <select #selectIsolationPolicyRef\n                        name="selectIsolationPolicies"\n                        class="ui dropdown"\n                        [class.noDataFound]="!isolationPolicies.length"\n                        ngModel>\n                    <option *ngIf="isolationPolicies.length" value="">-- Select an isolation policy --</option>\n                    <option *ngIf="!isolationPolicies.length" value="">没有定义任何策略</option>\n                    <option *ngFor="let policy of (isolationPolicies | filter:isolationPolicySearchText)"\n                            [value]="policy.policyName">\n                        {{policy.policyName}}\n                    </option>\n                </select>\n            </td>\n            <td>\n                <button type="button" class="ui icon button iconBtn primaryIconBtn"\n                        (click)="addIsolationPolicy(selectIsolationPolicyRef.value)">\n                    <i class="add icon"></i>\n                </button>\n            </td>\n        </tr>\n        <tr *ngFor="let policy of applicationgroup.policies">\n            <td>Will apply: "{{policy}}"</td>\n            <td></td>\n            <td>\n                <button type="button" class="ui icon button iconBtn secondaryIconBtn"\n                        (click)="removeIsolationPolicy(policy)">\n                    <i class="trash icon"></i>\n                </button>\n            </td>\n        </tr>\n        <tr *ngIf="!applicationgroup.policies" class="noDataFound">\n            <td>select a policy or policies from the dropdown</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <table *ngSwitchCase="\'details\'" class="ui very basic unstackable table">\n        <tbody *ngIf="applicationgroup.policies">\n        <tr *ngFor="let policy of applicationgroup.policies">\n            <td>Applying: "{{policy}}"</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="!applicationgroup.policies">\n        <tr class="noDataFound">\n            <td>No policies were selected</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <h5 class="ui header">所有可用的Incoming规则</h5>\n    <table class="ui very basic unstackable table">\n        <thead>\n        <tr>\n            <th>策略名称</th>\n            <th>优先级</th>\n            <th>Action</th>\n            <th>From group</th>\n            <th>From network</th>\n            <th>From IP地址</th>\n            <th>协议</th>\n            <th>端口</th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="incomingRules.length>0">\n        <tr *ngFor="let rule of incomingRules">\n            <td>{{rule.policyName}}</td>\n            <td>{{rule.priority}}</td>\n            <td>{{rule.action}}</td>\n            <td>{{rule.fromEndpointGroup}}</td>\n            <td>{{rule.fromNetwork}}</td>\n            <td>{{rule.fromIPAddress}}</td>\n            <td>{{rule.protocol}}</td>\n            <td>{{rule.port}}</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="incomingRules.length==0">\n        <tr class="noDataFound">\n            <td colspan="8">None applied</td>\n        </tr>\n        </tbody>\n\n    </table>\n\n    <h5 class="ui header" style="margin-top: 40px">所有可用的Outgoing规则</h5>\n    <table class="ui very basic unstackable table" >\n        <thead>\n        <tr>\n            <th>策略名称</th>\n            <th>优先级</th>\n            <th>Action</th>\n            <th>To group</th>\n            <th>To network</th>\n            <th>To IP地址</th>\n            <th>协议</th>\n            <th>端口</th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="outgoingRules.length>0">\n        <tr *ngFor="let rule of outgoingRules">\n            <td>{{rule.policyName}}</td>\n            <td>{{rule.priority}}</td>\n            <td>{{rule.action}}</td>\n            <td>{{rule.toEndpointGroup}}</td>\n            <td>{{rule.toNetwork}}</td>\n            <td>{{rule.toIPAddress}}</td>\n            <td>{{rule.protocol}}</td>\n            <td>{{rule.port}}</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="outgoingRules.length==0">\n        <tr class="noDataFound">\n            <td colspan="8">None applied</td>\n        </tr>\n        </tbody>\n\n    </table>\n</div>\n'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="field" style="margin-top: 20px;">\n\n    <div *ngSwitchCase="\'details\'" class="description">Application groups associated with this profile.</div>\n    <div *ngSwitchCase="\'edit\'" class="description">Add application groups to associate with this profile.</div>\n\n    <table *ngSwitchCase="\'edit\'" class="ui very basic collapsing unstackable table noRowBorders" style="margin-top:0; ">\n        <tbody>\n        <tr class="noHover">\n            <td>\n                <div class="ui left icon input">\n                    <input name="applicationGroupSearchText"\n                           type="text"\n                           [(ngModel)]="applicationGroupSearchText"\n                           placeholder="过滤菜单选项"\n                           size="30">\n                    <i class="search icon"></i>\n                </div>\n            </td>\n            <td>\n                <select #selectApplicationGroupRef\n                        name="selectApplicationGroups"\n                        class="ui dropdown"\n                        ngModel>\n                    <option value="">-- Select an application group --</option>\n                    <option *ngFor="let group of (applicationGroups | filter:applicationGroupSearchText)"\n                            [value]="group.groupName">\n                        {{group.groupName}}\n                    </option>\n                </select>\n            </td>\n            <td>\n                <button type="button" class="ui icon button iconBtn primaryIconBtn"\n                        (click)="addApplicationGroup(selectApplicationGroupRef.value)">\n                    <i class="add icon"></i>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <ctv-table #tableRef\n               [defaultSortColumn]="\'groupName\'"\n               [items]="selectedApplicationGroups"\n               (filtereditems)="filteredSelectedApplicationGroups=$event"\n               [size]="5">\n        <thead>\n        <tr>\n            <th>\n                <ctv-th [sortfield]="\'groupName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj"> Application group name\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'policies\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj"> Policies\n                </ctv-th>\n            </th>\n            <th class="right floated three wide column">&nbsp;</th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="selectedApplicationGroups">\n        <tr *ngFor="let group of filteredSelectedApplicationGroups">\n            <td>\n                <a [routerLink]="[\'/m/applicationgroups/details\', group.key]">{{group.groupName}}</a>\n            </td>\n            <td>{{group.policies.join(", ")}}</td>\n            <td style="text-align: right;">\n                <button *ngSwitchCase="\'edit\'"\n                        type="button"\n                        class="ui icon button iconBtn secondaryIconBtn"\n                        (click)="removeApplicationGroup(group.groupName)">\n                    <i class="trash icon"></i>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="selectedApplicationGroups.length==0">\n        <tr class="noDataFound">\n            <td colspan="3">\n                No application groups have been added to this profile.\n            </td>\n        </tr>\n        </tbody>\n\n        <tfoot>\n        <tr class="pagination">\n            <td colspan="3">\n                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                 (prevChunk)="tableRef.showPrevChunk()"\n                                 (nextChunk)="tableRef.showNextChunk()">\n                </ctv-tpagination>\n            </td>\n        </tr>\n        </tfoot>\n    </ctv-table>\n\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建ACI配置</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/appprofiles">\n                        ACI配置\n                    </a>\n                </span>\n                <span class="crumb">创建</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n            <form class="ui form" role="form"\n                  (submit)="createAppProfile(formRef.valid)" novalidate #formRef="ngForm">\n\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n                    <div class="ui grid">\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field" [ngClass]="{error: newAppProfileName.errors?.required && formRef.submitted}">\n                                    <label for="newAppProfileName">Application profile name</label>\n                                    <input type="text" id="newAppProfileName" name="newAppProfileName"\n                                           [(ngModel)]="newAppProfile.appProfileName"\n                                           placeholder="输入名称" required #newAppProfileName="ngModel">\n                                    <span class="inlineError" *ngIf="newAppProfileName.errors?.required && formRef.submitted">\n                                        Please enter application profile name\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field" [ngClass]="{error: newAppProfileTenantRef.errors?.required && formRef.submitted}">\n                                    <label for="newAppProfileTenant">Tenant</label>\n                                    <select id="newAppProfileTenant" class="ui dropdown"\n                                            name="newAppProfileTenant"\n                                            ngModel\n                                            (change)="updateTenant($event.target.value, appGroupSelRef)"\n                                            required #newAppProfileTenantRef="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [value]="tenant.tenantName">\n                                            {{tenant.tenantName}}\n                                        </option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="newAppProfileTenantRef.errors?.required && formRef.submitted">\n                                        请选择租户\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <ctv-appgroupselection mode="edit" [appProfile]="newAppProfile"\n                                           #appGroupSelRef></ctv-appgroupselection>\n\n                    <div class="ui grid">\n                        <div class="right aligned sixteen wide column buttonRow">\n\n                            <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                取消\n                            </button>\n                            <button type="submit" class="ui primary button">\n                                创建 Profile\n                            </button>\n\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>\n'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{appProfile.appProfileName}}</div>\n        </div>\n        <div class="right aligned eight wide column" *ngSwitchCase="\'details\'">\n            <button class="ui basic button"\n                    (click)="returnToAppProfile()">\n                关闭\n            </button>\n            <button class="ui secondary button"\n                    (click)="editAppProfile()">\n                编辑\n            </button>\n            <button class="ui secondary button" onclick="$(\'#delete-appProfile-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n\n        </div>\n    </div>\n\n    <div id="delete-appProfile-modal" class="ui small modal">\n        <div class="header">删除</div>\n        <div class="content">\n            <p>Are you sure you want to delete the application profile <q>{{appProfile.appProfileName}}</q>?</p>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <div class="ui primary approve button modalBtn" (click)="deleteAppProfile()">\n                删除\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/appprofiles">\n                        ACI配置\n                    </a>\n                </span>\n                <span class="crumb">{{appProfile.appProfileName}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row" style="margin-top: 30px">\n        <div class="ui sixteen wide column">\n\n            <div class="ui basic segment ctvTable">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <table>\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header">Application Profile名称</td>\n                        <td class="ctv-value">{{appProfile.appProfileName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">租户</td>\n                        <td class="ctv-value">{{appProfile.tenantName}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                <h4 class="ui header" style="margin-top: 40px">应用策略组</h4>\n\n                <div [ngSwitch]="mode">\n                    <form class="ui form"\n                          role="form"\n                          (submit)="saveAppProfile(formRef.valid)" novalidate #formRef="ngForm">\n\n                        <ctv-appgroupselection [mode]="mode" [appProfile]="appProfile"></ctv-appgroupselection>\n\n                        <div class="ui grid" style="margin-top: 40px">\n                            <div class="right aligned sixteen wide column">\n                                <button *ngSwitchCase="\'edit\'" type="button" class="ui basic button"\n                                        (click)="cancelEditing()">\n                                    取消\n                                </button>\n                                <button *ngSwitchCase="\'edit\'" type="submit" class="ui primary button">\n                                    保存\n                                </button>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">ACI配置</div>\n        </div>\n        <div class="right aligned eight wide column">\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建ACI配置\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">ACI配置</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row searchRow">\n        <div class="ui sixteen wide column">\n            <ctv-search  *ngIf="appProfiles" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n        </div>\n    </div>\n\n    <div class="ui row ctvTable">\n        <div class="ui sixteen wide column">\n            <div class="ui active inverted dimmer" *ngIf="showLoader">\n                <div class="ui loader"></div>\n            </div>\n            <ctv-table #tableRef [defaultSortColumn]="\'appProfileName\'"\n                       [items]="appProfiles"\n                       (filtereditems)="filteredAppProfiles=$event"\n                       [size]="12">\n                <thead>\n                    <tr>\n                        <th><ctv-th [sortfield]="\'appProfileName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">名称</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'endpointGroups\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">Application groups</ctv-th></th>\n                    </tr>\n                </thead>\n\n                <tbody *ngIf="appProfiles && appProfiles.length">\n                    <tr *ngFor="let appProfile of filteredAppProfiles">\n                        <td><a [routerLink]="[\'../details\', appProfile.key]">{{appProfile.appProfileName}}</a></td>\n                        <td>{{appProfile.tenantName}}</td>\n                        <td>{{appProfile.endpointGroups?.join(", ")}}</td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="appProfiles && !appProfiles.length">\n                    <tr class="noDataFound">\n                        <td colspan="2">No application profiles found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="appProfiles && appProfiles.length && !tableRef.count">\n                    <tr class="noDataFound">\n                        <td colspan="2">No records matched your filter criteria.</td>\n                    </tr>\n                </tbody>\n\n                <tfoot>\n                    <tr class="pagination">\n                        <td colspan="2">\n                            <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                             (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                             (prevChunk)="tableRef.showPrevChunk()"\n                                             (nextChunk)="tableRef.showNextChunk()">\n                            </ctv-tpagination>\n                        </td>\n                    </tr>\n                </tfoot>\n            </ctv-table>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui accordion">\n    <div class="title">\n        <i class="dropdown icon"></i>\n        <ng-content></ng-content>\n    </div>\n    <div class="content">\n        <table class="ui very basic table" style="margin-left:20px">\n            <tbody style="border-style: hidden">\n            <tr *ngFor="let item of items">\n                <td class="ctv-header three column wide key">{{item.name}}</td>\n                <td *ngIf="item.format==\'label\'" class="twelve column wide value">\n                    <div class = "ui label tiny" *ngFor="let selector of item.value" style="margin-top: 2px;">{{selector}}</div>\n                </td>\n                <td *ngIf="item.format!=\'label\'" class="twelve column wide value">{{item.value}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div (click)="collapsed = !collapsed" class="ctv-collapsible-label">\n    <h4 class="ui header">\n        <i *ngIf="!collapsed" class="grey minus circle outline icon"></i>\n        <i *ngIf="collapsed" class="grey plus circle outline icon"></i>\n        {{title}}\n    </h4>\n</div>\n\n\n<div class="ctv-collapsible-content" [hidden]="collapsed">\n    <ng-content></ng-content>\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui negative floating message" style="margin-top: 20px" *ngIf="showError">\n    <i class="close icon" (click)="close()"></i>\n    <div class="header">{{header}}</div>\n    <p>{{error}}</p>\n</div>'
}, function(e, t) {
    e.exports = '<div style="display: block;">\n    <canvas id="canvas1"\n            baseChart width="900" height="300"\n            [datasets]="lineChartData"\n            [labels]="lineChartLabels"\n            [options]="lineChartOptions"\n            [colors]="lineChartColors"\n            [legend]="lineChartLegend"\n            [chartType]="lineChartType">\n    </canvas>\n</div>\n<div class="ui grid">\n    <div class="ui one column centered row">\n        <div class="ui center aligned twelve wide column">\n            <h5>时间范围</h5>\n        </div>\n    </div>\n    <div class="ui one column centered row">\n        <div class="ui center aligned twelve wide column">\n            <span>0</span>\n            <input type="range" #slider [min]="\'14\'" [max]="scaleEnd" id="slider"  [value]="end" (change)="slide(slider.value)">\n            <span>{{scaleEnd}}</span>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<table class="ui very basic unstackable table" style="margin-top: 10px">\n    <thead>\n    <th>{{nameheader}}</th>\n    <th>{{valueheader}}</th>\n    <th>&nbsp;</th>\n    </thead>\n\n    <tbody>\n    <tr class="noHover">\n        <td class="ui four wide">\n            <div class="input">\n                <input *ngIf="type==\'text\'" type="text" [(ngModel)]="newItem.name">\n                <select class="ui dropdown" *ngIf="type==\'select\'" [(ngModel)]="newItem.name">\n                    <option *ngFor="let option of options" [value]="option">{{option}}</option>\n                </select>\n            </div>\n        </td>\n        <td class="ui four wide">\n            <div class="input">\n                <input type="text" [(ngModel)]="newItem.value">\n            </div>\n        </td>\n        <td>\n            <button type="button" class="ui icon button iconBtn primaryIconBtn" (click)="add()">\n                <i class="add icon"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n\n    <tbody *ngIf="items.length">\n    <tr *ngFor="let item of items">\n        <td class="key">{{item.name}}</td>\n        <td class="value">{{item.value}}</td>\n        <td>\n            <button type="button" class="ui icon button iconBtn secondaryIconBtn" (click)="remove(item);">\n                <i class="trash icon"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n\n    <tbody  *ngIf="!items.length">\n    <tr class="noDataFound"><td colspan="3">No labels have been defined.</td></tr>\n    </tbody>\n\n</table>\n'
}, function(e, t) {
    e.exports = '<div class="ui small message notify"\n     [ngClass]="{   ready: notificationType==NotificationType.confirm,\n                    minor: notificationType==NotificationType.alert,\n                    info: notificationType==NotificationType.info}">\n    <i class="close icon" (click)="close()"></i>\n    <div class="ui container">\n        <div class="ui grid">\n            <div class="ui right aligned two wide column">\n                <i id="notifyIcon" class="icon inverted notifyIcon" [ngClass]="{toast_confirm: notificationType==NotificationType.confirm,\n                                                            toast_warning: notificationType==NotificationType.alert,\n                                                            toast_info: notificationType==NotificationType.info}">\n                    <span class="backgroundIcon"></span>\n                </i>\n            </div>\n            <div class="ui left aligned fourteen wide column">\n                    <span class="notificationHeader" *ngIf="notificationType==NotificationType.confirm">Confirmation: </span>\n                    <span class="notificationHeader" *ngIf="notificationType==NotificationType.info">Information: </span>\n                    <span class="notificationHeader" *ngIf="notificationType==NotificationType.alert">Alert: </span>\n                    <span class="notificationText">{{message}}</span><br>\n                    <span class="notificationText">{{item}}</span><br>\n                    <span class="notificationText" *ngIf="notificationType==NotificationType.info">Will notify when operation is complete</span>\n            </div>\n        </div>\n    </div>\n</div>'
}, function(e, t) {
    e.exports = '<div *ngIf="chunks.length > 1">\n    <div class="ui right floated pagination borderless menu" style="margin-top: 10px">\n        <a class="icon item" (click)="showPrevChunk()">\n            <i class="chevron left icon"></i>\n        </a>\n        <a *ngFor="let chunk of chunks" class="item"\n           [ngClass]="{\'active\': chunk.selected}" (click)="showClickedPage(chunk.pageNo)">{{chunk.pageNo + 1}}\n        </a>\n        <a class="icon item" (click)="showNextChunk()">\n            <i class="chevron right icon"></i>\n        </a>\n    </div>\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui left icon input searchField">\n    <input type="text" [ngModel]="searchText" (ngModelChange)="showChunk($event)"\n           size=\'{{size}}\' [placeholder]=" \'搜索关键字\' " class="ctvSearch">\n    <i class="search icon"></i>\n</div>\n'
}, function(e, t) {
    e.exports = '<form class="ui form" role="form" #aciForm="ngForm" name="aciForm" (submit)="updateAciSetting(aciForm.valid)"\n      novalidate>\n    <div class="ui basic segment">\n        <div class="ui inverted dimmer aci">\n            <div class="content">\n                <div class="center">\n                    <span style="font-weight: normal; font-size: 24px">\n                        Applicable if Network infrastructure is of type ACI\n                    </span>\n                    <br><br>\n                    <span style="font-size: medium">You can change the Network infrastructure type in the previous screen</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="ui grid">\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field" [ngClass]="{error: apicPhysicalDomain.errors?.required && aciForm.submitted}">\n                        <label for="apicPhysicalDomain">Physical domain</label>\n                        <input type="text" id="apicPhysicalDomain" name="apicPhysicalDomain"\n                               [(ngModel)]="setting.physicalDomain" [disabled]="disabled"\n                               placeholder="Enter physical domain name" required #apicPhysicalDomain="ngModel">\n                        <span class="inlineError" *ngIf="apicPhysicalDomain.errors?.required && aciForm.submitted">\n                            Please enter physical domain\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="apicLeafNodes">节点绑定</label>\n                        <input type="text" id="apicLeafNodes" name="apicLeafNodes"\n                               [(ngModel)]="setting.nodeBindings" [disabled]="disabled"\n                               placeholder="Enter comma separated nodes of the form topology/pod-1/node-101">\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="apicPathBindings">Path bindings</label>\n                        <input type="text" id="apicPathBindings" name="apicPathBindings"\n                               [(ngModel)]="setting.pathBindings" [disabled]="disabled"\n                               placeholder="Enter comma separated paths of the form topology/pod-1/paths-101/pathep-[eth1/14]">\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label>\n                            <input type="checkbox" name="apicEnforcePolicies" tabindex="0"\n                                   [checked]="setting.enforcePolicies == \'yes\'" [disabled]="disabled"\n                                   (change)="$event.target.checked?setting.enforcePolicies=\'yes\':setting.enforcePolicies=\'no\'"\n                                   class="alignLabel">\n                            Enforce security policies\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label>\n                            <input type="checkbox" name="apicIncludeCommonTenant" tabindex="0"\n                                   [checked]="setting.includeCommonTenant == \'yes\'" [disabled]="disabled"\n                                   (change)="$event.target.checked?setting.includeCommonTenant=\'yes\':setting.includeCommonTenant=\'no\'"\n                                   class="alignLabel">\n                            Lookup objects in common tenant\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf="!firstRunWiz" class="ui row">\n                <div class="right aligned six wide column">\n                    <button type="submit" class="ui primary button">\n                        更新ACI设置\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf="firstRunWiz">\n        <div class="ui section divider" style="margin-top: 60px"></div>\n        <div class="ui grid">\n            <div class="right floated right aligned sixteen wide column">\n                <button type="button" class="ui basic button" (click)="cancel.emit()">取消</button>\n                <button type="button" class="ui secondary button" (click)="goback.emit()"><i\n                        class="arrow left icon"></i>Go back\n                </button>\n                <button type="button" class="ui secondary button" (click)="skip.emit()" *ngIf="disabled">Skip this step</button>\n                <button type="submit" class="ui primary button" *ngIf="!disabled">Continue<i class="arrow right icon"></i></button>\n            </div>\n        </div>\n    </div>\n</form>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <div class="ui sixteen column grid">\n        <div class="ui row pageHeader">\n            <div class="left aligned eight wide column">\n                <div class="content pageTitle">LDAP设置</div>\n            </div>\n            <div class="right aligned eight wide column">&nbsp;</div>\n        </div>\n\n        <div class="ui row breadcrumbRow">\n            <div class="ui sixteen wide column">\n                <div class="breadcrumbs">\n                <span class="crumb">\n                        LDAP设置\n                </span>\n                </div>\n            </div>\n        </div>\n\n        <div class="ui row">\n            <div class="ui sixteen wide column">\n\n                <form class="ui form" role="form" #formRef="ngForm"\n                      (ngSubmit)="updateLdapConfig(formRef.valid)" novalidate>\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n\n                            <div class="ui six wide column">\n\n                                <div class="field" [ngClass]="{error: server.errors?.required && formRef.submitted}">\n                                    <label for="server">服务器地址</label>\n                                    <input #server="ngModel"\n                                           type="text"\n                                           id="server"\n                                           name="server"\n                                           [(ngModel)]="ldapConfig.server" placeholder="输入LDAP服务器地址" required>\n                                    <span class="inlineError" *ngIf="server.errors?.required && formRef.submitted">\n                                        Please enter ldap server address\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: port.errors?.required && formRef.submitted}">\n                                    <label for="port">服务器端口</label>\n                                    <input #port="ngModel"\n                                           type="number"\n                                           id="port"\n                                           name="port"\n                                           [(ngModel)]="ldapConfig.port" placeholder="输入LDAP服务器端口" required>\n                                    <span class="inlineError" *ngIf="port.errors?.required && formRef.submitted">\n                                        Please enter ldap server port number\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: base_dn.errors?.required && formRef.submitted}">\n                                    <label for="base_dn">Base DN</label>\n                                    <input #base_dn="ngModel"\n                                           type="text"\n                                           id="base_dn"\n                                           name="base_dn"\n                                           [(ngModel)]="ldapConfig.base_dn" placeholder="输入base DN" required>\n                                    <span class="inlineError" *ngIf="base_dn.errors?.required && formRef.submitted">\n                                        Please enter ldap base dn\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: service_account_dn.errors?.required && formRef.submitted}">\n                                    <label for="service_account_dn">ServiceAccount DN</label>\n                                    <input #service_account_dn="ngModel"\n                                           type="text"\n                                           id="service_account_dn"\n                                           name="service_account_dn"\n                                           [(ngModel)]="ldapConfig.service_account_dn"\n                                           placeholder="输入ServiceAccount DN" required>\n                                    <span class="inlineError" *ngIf="service_account_dn.errors?.required && formRef.submitted">\n                                        Please enter ladap service account dn\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="service_account_password">ServiceAccount密码</label>\n                                    <input #service_account_password="ngModel"\n                                           type="password"\n                                           id="service_account_password"\n                                           name="service_account_password"\n                                           [(ngModel)]="ldapConfig.service_account_password"\n                                           placeholder="输入密码">\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label>&nbsp;<br>\n                                        <input type="checkbox" name="StartTLS" tabindex="0" class="alignLabel"\n                                               #starttls [ngModel]="ldapConfig.start_tls" (ngModelChange)="ldapConfig.start_tls = starttls.checked">\n                                        开启TLS\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row" *ngIf="ldapConfig.start_tls">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label>\n                                        <input type="radio" name="tls_group" tabindex="0" class="alignLabel"\n                                               #insecueverifySelected [checked]="true" [value]="true"\n                                               [(ngModel)]="ldapConfig.insecure_skip_verify">\n                                        <span style="position:relative; top:-10px; left:10px">Accept certs as-is, skipping validation</span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="tls_group" tabindex="0" class="alignLabel"\n                                               [checked]="false" [value]="false"\n                                               [(ngModel)]="ldapConfig.insecure_skip_verify">\n                                        <span style="position:relative; top:-10px; left:10px">服务器FQDN</span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row" *ngIf="!ldapConfig.insecure_skip_verify && ldapConfig.start_tls">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: tls_cert_issued_to.errors?.required && formRef.submitted}">\n                                    <input #tls_cert_issued_to="ngModel"\n                                           type="text"\n                                           id="tls_cert_issued_to"\n                                           name="tls_cert_issued_to"\n                                           [(ngModel)]="ldapConfig.tls_cert_issued_to"\n                                           placeholder="Enter Server FQDN"\n                                           required>\n                                    <span class="inlineError" *ngIf="tls_cert_issued_to.errors?.required && formRef.submitted">\n                                        请输入服务器FQDN\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="ui grid">\n                                    <div class="right floated right aligned sixteen wide column">\n                                        <div class="buttonRow">\n                                            <button type="submit" class="ui primary button">\n                                                保存\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <div id="tenant-create-modal" class="ui small modal">\n        <div class="header">创建租户</div>\n        <div class="content">\n            <tenantcreate #tenantCreate [displayType]="DisplayType.modal" (created)="closeTenantCreate(); showLoader = true; getTenants(true);"></tenantcreate>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <button class="ui primary button modalBtn" [disabled]="!tenantCreate.tenantCreateForm.valid" (click)="tenantCreate.create()">\n                创建\n            </button>\n        </div>\n    </div>\n    <form id="networkCreationForm" name="networkCreateForm" class="ui form" role="form"\n          (submit)="networkCreateCtrl.createNetwork(networkCreateForm.valid)" novalidate #networkCreateForm="ngForm">\n\n        <div class="ui sixteen column grid" style="margin: 0;">\n            <div class="ui row">\n                <div class="ui six wide column field" [ngClass]="{error: ((newNetworkName.errors?.required || newNetworkName.errors?.pattern) && networkCreateForm.submitted)}">\n                    <label for="newNetworkName">子网名称</label>\n                    <input type="text" id="newNetworkName" name="newNetworkName"\n                           [(ngModel)]="networkCreateCtrl.newNetwork.networkName"\n                           [disabled]="firstRunWiz && (clusterMode === \'kubernetes\')"\n                           placeholder="输入名称" required #newNetworkName="ngModel"\n                           [pattern]="networkNamePattern">\n                    <span class="inlineError" *ngIf="newNetworkName.errors?.required && networkCreateForm.submitted">\n                                    Please enter network name\n                    </span>\n                    <span class="inlineError" *ngIf="newNetworkName.errors?.pattern && networkCreateForm.submitted">\n                                    Please enter network name in correct notation\n                    </span>\n                </div>\n                <div class="ui six wide column field">\n                    <div class="fields">\n                        <div class="thirteen wide field" [ngClass]="{error: newNetworkTenant.errors?.required && networkCreateForm.submitted}">\n                            <label for="newNetworkTenant">租户</label>\n                            <select id="newNetworkTenant" class="ui dropdown"\n                                    name="newNetworkTenant"\n                                    [(ngModel)]="networkCreateCtrl.newNetwork.tenantName"\n                                    required #newNetworkTenant="ngModel">\n                                <option value="">-- 请选择租户 --</option>\n                                <option *ngFor="let tenant of networkCreateCtrl.tenants" [ngValue]="tenant.tenantName">{{tenant.tenantName}}</option>\n                            </select>\n                            <span class="inlineError" *ngIf="newNetworkTenant.errors?.required && networkCreateForm.submitted">\n                                        请选择租户\n                            </span>\n                        </div>\n                        <div class="three wide field">\n                            <button type="button" class="ui icon button iconBtn primaryIconBtn addModal" (click)="showTenantModal()">\n                                <i class="add icon"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="ui row" style="margin-top: 15px;">\n                <div class="ui six wide column field">\n                    <label for="newNetworkEncapsulation">封装</label>\n                    <select id="newNetworkEncapsulation" class="ui dropdown" [(ngModel)]="networkCreateCtrl.newNetwork.encap" name="newNetworkEncap">\n                        <option value="vlan">vlan</option>\n                        <option value="vxlan">vxlan</option>\n                    </select>\n                </div>\n                <div class="ui six wide column field" [ngClass]="{error: (newNetworkSubnet.errors?.required || newNetworkSubnet.errors?.pattern) && networkCreateForm.submitted}">\n                    <label for="newNetworkSubnet">网段</label>\n                    <input type="text" id="newNetworkSubnet" name="newNetworkSubnet"\n                           [(ngModel)]="networkCreateCtrl.newNetwork.subnet"\n                           placeholder="按照CIDR格式输入，例:192.168.1.0/24" required\n                           [pattern]="networkCreateCtrl.cidrPattern" #newNetworkSubnet="ngModel">\n                    <span class="inlineError" *ngIf="newNetworkSubnet.errors?.required && networkCreateForm.submitted">\n                                    Please enter subnet\n                    </span>\n                    <span class="inlineError" *ngIf="newNetworkSubnet.errors?.pattern && networkCreateForm.submitted">\n                                    Please enter subnet in CIDR notation\n                    </span>\n                </div>\n            </div>\n            <div class="ui row" style="margin-top: 15px;">\n                <div class="ui six wide column field">\n                    <label for="newNetworkGateway">网关</label>\n                    <input type="text" id="newNetworkGateway" [(ngModel)]="networkCreateCtrl.newNetwork.gateway"\n                           placeholder="输入网关" name="newNetworkGateway">\n                </div>\n                <div class="ui six wide column field">\n                    <label for="newNetworkType">网络类型</label>\n                    <select id="newNetworkType" class="ui dropdown" [(ngModel)]="networkCreateCtrl.newNetwork.nwType" name="newNetworkType">\n                        <option value="data">data</option>\n                        <option value="infra">infra</option>\n                    </select>\n                </div>\n            </div>\n            <div class="ui row" style="margin-top: 15px;">\n                <div class="ui six wide column field">\n                    <label for="newNetworkPackettag">Vlan/Vxlan Tag</label>\n                    <input type="number" id="newNetworkPackettag" [(ngModel)]="networkCreateCtrl.newNetwork.pktTag"\n                           placeholder="输入Vlan/Vxlan Tag" name="newNetworkPackettag">\n                </div>\n                <div class="ui six wide column field">\n                    <label for="newNetworkCfgdtag">网络Tag</label>\n                    <input type="text" id="newNetworkCfgdtag" [(ngModel)]="networkCreateCtrl.newNetwork.cfgdTag"\n                           placeholder="输入网络Tag" name="newNetworkCfgdtag">\n                </div>\n            </div>\n\n            <div *ngIf="!firstRunWiz" class="ui row">\n                <div class="right aligned twelve wide column">\n                    <div class="buttonRow">\n                        <button type="button" class="ui basic button" (click)="cancel.emit()">\n                            取消\n                        </button>\n                        <button type="submit" class="ui primary button">\n                            创建\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf="firstRunWiz">\n            <div class="ui section divider" style="margin-top: 25px"></div>\n            <div class="ui grid">\n                <div class="right floated right aligned sixteen wide column">\n                    <button type="button" class="ui basic button" (click)="cancel.emit()">取消</button>\n                    <button type="button" class="ui secondary button" (click)="goback.emit()"><i\n                            class="arrow left icon"></i>Go back\n                    </button>\n                    <button type="submit" class="ui primary button">Continue<i class="arrow right icon"></i></button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>';
}, function(e, t) {
    e.exports = '<form class="ui form" role="form" #formRef="ngForm"\n      (ngSubmit)="updateNetworkSettings(formRef.valid)" novalidate>\n\n    <div class="ui grid">\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: networkInfrastructureRef.errors?.required && formRef.submitted}">\n                <label for="networkInfrastructure">基础设施类型</label>\n           <select #networkInfrastructureRef="ngModel"\n                        id="networkInfrastructure"\n                        name="networkInfrastructure"\n                        class="ui dropdown"\n                        [(ngModel)]="setting[\'networkInfraType\']" required>\n                    <!-- option value="">-- 请选择基础设施类型 --</option -->\n                    <option value="default">kubernetes</option>\n                    <!-- option value="aci">aci</option -->\n                </select>\n                <span class="inlineError" *ngIf="networkInfrastructureRef.errors?.required && formRef.submitted">\n                    网络基础设施类型不能为空\n                </span>\n            </div>\n\n        </div>\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: (allowedVlanRangeRef.errors?.required || allowedVlanRangeRef.errors?.pattern) && formRef.submitted}">\n                <label for="allowedVlanRange">允许Vlan范围</label>\n                <input #allowedVlanRangeRef="ngModel"\n                       type="text"\n                       id="allowedVlanRange"\n                       name="allowedVlanRange"\n                       [(ngModel)]="setting[\'vlans\']" placeholder="1-4094" required [pattern]="vlanPattern">\n                <span class="inlineError" *ngIf="allowedVlanRangeRef.errors?.required && formRef.submitted">\n                    请输入Vlan范围\n                </span>\n                <span class="inlineError" *ngIf="allowedVlanRangeRef.errors?.pattern && formRef.submitted">\n                    Please enter vlan in range in the correct notation\n                </span>\n            </div>\n        </div>\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: (allowedVxlanRangeRef.errors?.required || allowedVxlanRangeRef.errors?.pattern) && formRef.submitted}">\n                <label for="allowedVxlanRange">允许Vxlan范围</label>\n                <input #allowedVxlanRangeRef="ngModel"\n                       type="text"\n                       id="allowedVxlanRange"\n                       name="allowedVxlanRange"\n                       [(ngModel)]="setting[\'vxlans\']" placeholder="1-10000" required [pattern]="vxlanPattern">\n                <span class="inlineError" *ngIf="allowedVxlanRangeRef.errors?.required && formRef.submitted">\n                    请输入Vxlan范围\n                </span>\n                <span class="inlineError" *ngIf="allowedVxlanRangeRef.errors?.pattern && formRef.submitted">\n                    Please enter vxlan in range in the correct notation\n                </span>\n            </div>\n        </div>\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: forwardingmodeRef.errors?.required && formRef.submitted}">\n                <label for="forwardingmode">转发模式</label>\n                <select #forwardingmodeRef="ngModel"\n                        id="forwardingmode"\n                        name="forwardingmode"\n                        class="ui dropdown"\n                        [(ngModel)]="setting[\'fwdMode\']" required>\n                    <option value="">-- 请选择转发模式 --</option>\n                    <option value="bridge">bridge</option>\n                    <option value="routing">routing</option>\n                </select>\n                <span class="inlineError" *ngIf="forwardingmodeRef.errors?.required && formRef.submitted">\n                    请选择转发模式\n                </span>\n            </div>\n        </div>\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: arpmodeRef.errors?.required && formRef.submitted}">\n                <label for="arpmode">ARP模式</label>\n                <select #arpmodeRef="ngModel"\n                        id="arpmode"\n                        name="arpmode"\n                        class="ui dropdown"\n                        [(ngModel)]="setting[\'arpMode\']" required>\n                    <option value="">-- 请选择ARP模式 --</option>\n                    <option value="proxy">proxy</option>\n                    <option value="flood">flood</option>\n                </select>\n                <span class="inlineError" *ngIf="arpmodeRef.errors?.required && formRef.submitted">\n                    请选择ARP模式\n                </span>\n            </div>\n        </div>\n        <div class="ui row">\n            <div class="ui six wide column field" [ngClass]="{error: pvtSubnetRef.errors?.pattern && formRef.submitted}">\n                <label for="pvtSubnet">Private子网</label>\n                <input #pvtSubnetRef="ngModel"\n                       type="text"\n                       id="pvtSubnet"\n                       name="pvtSubnet"\n                       [(ngModel)]="setting[\'pvtSubnet\']" placeholder="CIDR notation, for example: 20.3.0.0/16" [pattern]="pvtSubnetPattern">\n\n                <span class="inlineError" *ngIf="pvtSubnetRef.errors?.pattern && formRef.submitted">\n                    Please enter private subnet in CIDR notation ending with /16\n                </span>\n            </div>\n        </div>\n        <div *ngIf="!firstRunWiz" class="ui row">\n            <div class="right aligned six wide column">\n                <div style="margin-top: 20px">\n                    <button type="submit" class="ui primary button">\n                        更新网络设置\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf="firstRunWiz">\n        <div class="ui section divider" style="margin-top: 60px"></div>\n        <div class="ui grid">\n            <div class="right floated right aligned sixteen wide column">\n                <button type="button" class="ui basic button" (click)="cancel.emit()">取消</button>\n                <button type="button" class="ui secondary button" (click)="skip.emit()">Skip this step</button>\n                <button type="submit" class="ui primary button">Continue<i class="arrow right icon"></i></button>\n            </div>\n        </div>\n    </div>\n\n</form>\n'
}, function(e, t) {
    e.exports = '<div clas="ui basic segment" [ngClass]="{loading: showLoader}">\n    <form id="tenantCreateForm" class="ui form" novalidate\n          [formGroup]="tenantCreateForm" (submit)="create()">\n        <div class="required seven wide field">\n            <label>租户名称</label>\n            <input type="text" name="tenantName" formControlName="tenantName" placeholder="输入租户名称">\n            <span class="inlineError" [hidden]="!(tenantCreateForm.get(\'tenantName\').hasError(\'required\') && tenantCreateForm.get(\'tenantName\').dirty)">\n                请输入租户名称\n            </span>\n        </div>\n        <div class="required right floated seven wide field" *ngIf="displayType === DisplayType.component">\n            <button type="submit" class="ui primary button" style="float: right">\n                创建\n            </button>\n            <button type="button" class="ui basic button" (click)="cancel()" style="float: right">\n                取消\n            </button>\n        </div>\n    </form>\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <form class="ui form"\n          role="form"\n          (submit)="saveUser(formRef.valid)" novalidate #formRef="ngForm">\n    \n        <div class="ui sixteen column grid">\n            <div class="ui row" *ngIf="displayType==ProfileDisplayType.modal">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="firstname">用户名</label>\n                        <input type="text" id="username" name="username" [disabled]="true"\n                               [(ngModel)]="user.username" #username="ngModel">\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="firstname">First Name</label>\n                        <input type="text" id="firstname" name="firstname"\n                               [(ngModel)]="user.first_name"\n                               placeholder="输入FirstName" #firstname="ngModel">\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="lastname">Last Name</label>\n                        <input type="text" id="lastname" name="lastname"\n                               [(ngModel)]="user.last_name"\n                               placeholder="输入LastName" #lastname="ngModel">\n                    </div>\n                </div>\n            </div>\n            <div class="ui row">\n                <div class="ui six wide column">\n                    <div class="field">\n                        <label for="password">密  码</label>\n                        <input type="password" id="password" name="password"\n                               [(ngModel)]="user.password"\n                               placeholder="输入新密码" #password="ngModel">\n                    </div>\n                </div>\n    \n            </div>\n            <div class="ui row">\n    \n                <div class="ui six wide column">\n                    <label>&nbsp;<br>\n                        <input type="checkbox" name="userdisabled" tabindex="0" class="alignLabel"\n                               [(ngModel)]="user.disable">\n                        Disabled\n                    </label>\n                </div>\n    \n            </div>\n            <div class="ui row" *ngIf="displayType===ProfileDisplayType.component">\n    \n                <div class="right aligned six wide column buttonRow">\n                    <button type="button" class="ui basic button" (click)="closeEdit()">\n                        取消\n                    </button>\n                    <button type="submit" class="ui primary button">\n                        保存\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</div>'
}, function(e, t) {
    e.exports = '<table  class="ui very basic unstackable table" style="margin-top: 10px">\n    <ng-content></ng-content>\n</table>'
}, function(e, t) {
    e.exports = '<div (click)="sortColumn()">\n    <ng-content></ng-content>\n    <i  class="angle icon"[ngClass]="sortobject.iconDirection"\n        *ngIf="sortobject.field==sortfield && sortfield!=\'\'">\n    </i>\n</div>'
}, function(e, t) {
    e.exports = "<div class=\"tooltip\">\n    <i class=\"toast_info icon\"></i>\n    <span class=\"tooltipInfo\"\n          [style.width]=\"width+'px'\"\n          [style.padding]=\"padding+'px '+padding+'px '+padding+'px '++padding+'px '\">\n        <ng-content></ng-content>\n    </span>\n</div>"
}, function(e, t) {
    e.exports = '<div class="ui grid" style="margin-top: 1px">\n    <div class="row">\n\n    <table width="100%"><tbody><tr><td width="14"></td><td>\n     <table width="100%"><tbody><tr>\n     <td aligb="center" width="25%"><a _ngcontent-chw-18="" href="#/m/networks/list"><table width="90%"><tbody><tr><td style="font-size:14px;color:#000000" align="center">子网数量</td></tr><tr><td style="background-repeat:no-repeat;width:300px;height:200px;background-position:center;background-image:url(images/annular-red.jpg);" align="center"><a href="#/m/networks/list" style="font-size:30px;color:#000000;">{{networks}}</a></td></tr></tbody></table></a></td>\n     <td aligb="center" width="25%"><a _ngcontent-chw-18="" href="#/m/applicationgroups/list"><table width="90%"><tbody><tr><td style="font-size:14px;color:#000000" align="center">应用策略</td></tr><tr><td style="background-repeat:no-repeat;width:300px;height:200px;background-position:center;background-image:url(images/annular-yellow.jpg);" align="center"><a href="#/m/applicationgroups/list" style="font-size:30px;color:#000000;">{{groups}}</a></td></tr></tbody></table></a></td>\n     <td aligb="center" width="25%"><a _ngcontent-chw-18="" href="#/m/networkpolicies/list"><table width="90%"><tbody><tr><td style="font-size:14px;color:#000000" align="center">安全策略</td></tr><tr><td style="background-repeat:no-repeat;width:300px;height:200px;background-position:center;background-image:url(images/annular-blue.jpg);" align="center"><a href="#/m/networkpolicies/list" style="font-size:30px;color:#000000;">{{networkpolicies}}</a></td></tr></tbody></table></a></td>\n     <td aligb="center" width="25%"><a _ngcontent-chw-18="" href="#/m/servicelbs/list"><table width="90%"><tbody><tr><td style="font-size:14px;color:#000000" align="center">服务负载</td></tr><tr><td style="background-repeat:no-repeat;width:300px;height:200px;background-position:center;background-image:url(images/annular-green.jpg);" align="center"><a href="#/m/servicelbs/list" style="font-size:30px;color:#000000;">{{servicelbs}}</a></td></tr></tbody></table></a></td>\n     </tr></tbody></table>\n     </td></tr></tbody></table>\n\n     </div>\n  </div>\n\n\n<div class="ui grid" style="margin-top: 15px">\n    <div class="row">\n        <div class="ui sixteen wide column">\n            <div class="ui tabular menu">\n                <a class="active item" [ngClass]="{active: endpointType==EndpointType.Network}" (click)="switch(EndpointType.Network)">网络</a>\n                <a class="item" [ngClass]="{active: endpointType==EndpointType.ApplicationGroup}" (click)="switch(EndpointType.ApplicationGroup)">应用策略组</a>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui one column centered row" style="margin-top: 20px;">\n        <div class="ui fourteen wide column">\n            <linegraph [key]="key" [endpointType]="endpointType"></linegraph>\n        </div>\n    </div>\n\n\n    <div class="ui one column centered row" style="margin-top: 30px;" *ngIf="endpointType===EndpointType.Network">\n        <div class="ui fourteen wide column">\n            <ctv-table #tableRef [defaultSortColumn]="\'networkName\'" [items]="networkList" (filtereditems)="filterednetworks=$event; setKey($event)" [size]="4">\n            <thead>\n            <tr>\n                <th><ctv-th [sortfield]="\'networkName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">子网名称</ctv-th></th>\n                <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户</ctv-th></th>\n                <th><ctv-th [sortfield]="\'encap\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">封装</ctv-th></th>\n                <th><ctv-th [sortfield]="\'subnet\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">IP网段</ctv-th></th>\n            </tr>\n            </thead>\n            <tbody *ngIf="networkList">\n            <tr class="selectable" *ngFor="let network of filterednetworks" [ngClass]="{selected: key==network.key, notSelected: key!=network.key}" (click)="key=network.key">\n                <td>{{network.networkName}}</td>\n                <td>{{network.tenantName}}</td>\n                <td>{{network.encap}}</td>\n                <td>{{network.subnet}}</td>\n            </tr>\n            </tbody>\n            <tbody *ngIf="!networkList">\n            <tr>\n                <td colspan="2">No rows found.</td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n                <td colspan="4">\n                    <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                     (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                     (prevChunk)="tableRef.showPrevChunk()"\n                                     (nextChunk)="tableRef.showNextChunk()">\n                    </ctv-tpagination>\n                </td>\n            </tr>\n            </tfoot>\n        </ctv-table>\n        </div>\n    </div>\n    <div class="ui one column centered row" style="margin-top: 30px;" *ngIf="endpointType===EndpointType.ApplicationGroup">\n        <div class="ui fourteen wide column">\n            <ctv-table #tableRef1 [defaultSortColumn]="\'groupName\'" [items]="applicationGroupList" (filtereditems)="filteredgroups=$event; setKey($event)" [size]="4">\n            <thead>\n            <tr>\n                <th><ctv-th [sortfield]="\'groupName\'" (sortdata)="tableRef1.applysort($event)" [sortobject]="tableRef1.sortObj">应用策略组名</ctv-th></th>\n                <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef1.applysort($event)" [sortobject]="tableRef1.sortObj">租户</ctv-th></th>\n                <th><ctv-th [sortfield]="\'networkName\'" (sortdata)="tableRef1.applysort($event)" [sortobject]="tableRef1.sortObj">关联子网</ctv-th></th>\n                <th><ctv-th [sortfield]="\'policies\'" (sortdata)="tableRef1.applysort($event)" [sortobject]="tableRef1.sortObj">关联策略</ctv-th></th>\n            </tr>\n            </thead>\n            <tbody *ngIf="applicationGroupList">\n            <tr *ngFor="let group of filteredgroups" [ngClass]="{selected: key==group.key, notSelected: key!=group.key}" (click)="key=group.key">\n                <td>{{group.groupName}}</td>\n                <td>{{group.tenantName}}</td>\n                <td>{{group.networkName}}</td>\n                <td>{{group.policies.join(", ")}}</td>\n            </tr>\n            </tbody>\n            <tbody *ngIf="!applicationGroupList">\n            <tr>\n                <td colspan="2">No rows found.</td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n                <td colspan="4">\n                    <ctv-tpagination [chunks]="tableRef1.pageChunks"\n                                     (showPage)="tableRef1.showChunk($event, tableRef1.table.searchText)"\n                                     (prevChunk)="tableRef1.showPrevChunk()"\n                                     (nextChunk)="tableRef1.showNextChunk()">\n                    </ctv-tpagination>\n                </td>\n            </tr>\n            </tfoot>\n        </ctv-table>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui grid" style="margin-bottom: 30px">\n    <div class="left floated sixteen wide column">\n        <div class="content">\n            <span>配置ACI设置</span>\n        </div>\n    </div>\n</div>\n<acisettingcomp [firstRunWiz]="true" (updateAciDef)="updateAciSettings($event)" [setting]="setting" (goback)="goBack()" (skip)="skip()" (cancel)="cancel()" [disabled]="disabled"></acisettingcomp>\n'
}, function(e, t) {
    e.exports = '<div class="ui grid" style="margin-bottom: -30px">\n    <div class="left floated sixteen wide column">\n        <div class="content">\n            <span>创建网络</span>\n        </div>\n    </div>\n</div>\n<networkcreateform [firstRunWiz]="true" (createnetwork)="createNetwork($event)" [newNetwork]="newNetwork" (goback)="goBack()" (skip)="skip()" (cancel)="cancel()" [clusterMode]="clusterMode"></networkcreateform>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <div class="ui grid" style="margin-bottom: 30px">\n        <div class="left floated sixteen wide column">\n            <div class="content">\n                <span>选择网络默认</span>\n            </div>\n        </div>\n    </div>\n    <networksettingcomp [firstRunWiz]="true" (updateNetDef)="updateNetworkSettings($event)" [setting]="setting" (cancel)="cancel()" (skip)="skip()"></networksettingcomp>\n</div>\n'
}, function(e, t) {
    e.exports = '<div *ngIf="welcomeActive">\n    <div class="ui grid">\n        <div class="ui sixteen wide column">\n            <h2>欢迎使用K8S云网平台</h2>\n        </div>\n        <div class="ui sixteen wide column">\n            <p style="font-size:18px">K8S云网平台提供了管理和扩展容器基础设施的最快速、最简单的方法。K8S云网平台可以由企业IT运维部门集中管控，具有开发人员自助服务，它为微服务提供了更高层次的网络抽象。K8S云网平台使用丰富的策略框架保护您的应用程序。它为扩展服务提供内置的服务发现和服务路由。 </p>\n        </div>\n        <div class="ui sixteen wide column">\n            <h4>单击下面以逐步完成云网平台全局配置。配置云网平台之后，您可以稍后通过<em>全局设置</em>页面编辑这些设置。</h4>\n        </div>\n        <div class="ui sixteen wide column">\n            <button class="ui basic button" (click)="logout()">退出登录</button>\n            <button class="ui primary button" (click)="runwizard()">Run Wizard</button>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf="!welcomeActive">\n    <div class="ui grid">\n        <div class="ui sixteen wide column">\n            <div class="steps-container">\n                <ul class="progressbar">\n                    <li class="active" [ngClass]="{active: pageNo==1, completed: pageNo > 1}"><span>配置网络</span></li>\n                    <li [ngClass]="{active: pageNo==2, completed: pageNo > 2}"><span>ACI设置</span></li>\n                    <li [ngClass]="{active: pageNo==3, completed: pageNo > 3}"><span>创建网络</span></li>\n                    <li [ngClass]="{active: pageNo==4, completed: pageNo > 4}"><span>确认详细信息</span></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <firstrunnetworkdefault *ngIf="pageNo==1" (updatePage)="updatePage($event);" (cancelPage)="welcomeActive=true"></firstrunnetworkdefault>\n    <firstrunacisettings *ngIf="pageNo==2" (updatePage)="updatePage($event); " (cancelPage)="welcomeActive=true"></firstrunacisettings>\n    <firstrunnetworkcreate *ngIf="pageNo==3" (updatePage)="updatePage($event);" (cancelPage)="welcomeActive=true;"></firstrunnetworkcreate>\n    <firstrunwizardconfirmpage *ngIf="pageNo==4" (updatePage)="updatePage($event);" (cancelPage)="welcomeActive=true"></firstrunwizardconfirmpage>\n</div>\n\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" style="margin-top: -22px;">\n    <div class="ui active inverted dimmer" *ngIf="showLoader">\n        <div class="ui large text loader">\n            <span style="font-size: 25px; font-weight: 300">平台设置</span>\n        </div>\n    </div>\n    <div class="ui grid" *ngIf="skipArray.indexOf(false) < 0" style="margin-top: 10%; margin-bottom: 15%">\n        <div class="ui row">\n            <div class="ui center aligned sixteen wide column">\n                <span style="font-size: 20px">没有配置被设置，请单击“完成”以加载默认的平台设置。</span>\n            </div>\n        </div>\n    </div>\n    <div class="ui grid" *ngIf="skipArray.indexOf(false) >= 0">\n        <div class="ui row">\n            <div class="left floated sixteen wide column">\n                <div class="content" style="font-size: 20px">\n                    <span>Verify all the configuration</span>\n                </div>\n            </div>\n        </div>\n        <div class="ui row" style="margin-top: 10px;">\n            <div class="ui eight wide column" *ngIf="skipArray[0]===false">\n                <h4 class="ui header">网络默认设置</h4>\n                <table class="ui very basic selectable table">\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header eight wide column">网络基础设施类型</td>\n                        <td>{{wizardService.setting.networkInfraType}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">允许Vlan范围</td>\n                        <td>{{wizardService.setting.vlans}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">允许Vxlan范围</td>\n                        <td>{{wizardService.setting.vxlans}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">转发模式</td>\n                        <td>{{wizardService.setting.fwdMode}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class="ui eight wide column" *ngIf="skipArray[1]===false">\n                <h4 class="ui header">ACI设置</h4>\n                <table class="ui very basic selectable table">\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header eight wide column">Physical domain</td>\n                        <td>{{wizardService.aciSetting.physicalDomain}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Node bindings</td>\n                        <td>{{wizardService.aciSetting.nodeBindings}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Path bindings</td>\n                        <td>{{wizardService.aciSetting.pathBindings}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Enforce security policies</td>\n                        <td>{{wizardService.aciSetting.enforcePolicies}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Lookup objects in common tenant</td>\n                        <td>{{wizardService.aciSetting.includeCommonTenant}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class="ui eight wide column" *ngIf="skipArray[2]===false">\n                <h4 class="ui header">网络</h4>\n                <table class="ui very basic selectable table">\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header eight wide column">Name</td>\n                        <td>{{wizardService.newNetwork.networkName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">租户名称</td>\n                        <td>{{wizardService.newNetwork.tenantName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Encap</td>\n                        <td>{{wizardService.newNetwork.encap}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">子网</td>\n                        <td>{{wizardService.newNetwork.subnet}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">网关</td>\n                        <td>{{wizardService.newNetwork.gateway}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">网络类型</td>\n                        <td>{{wizardService.newNetwork.nwType}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">Packet tag</td>\n                        <td>{{wizardService.newNetwork.pktTag}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header eight wide column">配置网络Tag</td>\n                        <td>{{wizardService.newNetwork.cfgdTag}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class="ui section divider" style="margin-top: 50px"></div>\n    <div class="ui grid" style="margin-top: -26px">\n        <div class="right floated right aligned sixteen wide column">\n            <button type="button" class="ui basic button" (click)="cancel()">取消</button>\n            <button type="button" class="ui secondary button" (click)="goBack()"><i class="arrow left icon"></i>Go back</button>\n            <button type="button" class="ui primary button" (click)="process()">Finish</button>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui middle aligned center aligned grid container">\n    <div class="column copyright">\n\n        <form id="loginForm" name="loginForm" class="ui form" role="form"\n              (submit)="login()" novalidate #loginForm="ngForm">\n            <div class="ui active inverted dimmer" *ngIf="loginCtrl.showLoader">\n                <div class="ui loader"></div>\n            </div>\n\n            <div class="login-seg" style="margin-top: 180px; background-color: white; padding: 20px; ">\n                <h1 class="header" style="margin-left:6px; margin-right:auto;">\n                    <img class="ui image logo" src="images/cloud-logo.png">\n                    <br>\n                    <span class="productname">K8S云网平台</span>\n                </h1>\n\n\n                <div class="field" [ngClass]="{\'error\': showServerError}">\n                    <input type="text" id="username" name="username" [(ngModel)]="loginCtrl.username"\n                           placeholder="用 户：" required>\n                </div>\n                <div class="field" [ngClass]="{\'error\': showServerError}">\n                    <input type="password" id="password" name="password" [(ngModel)]="loginCtrl.password"\n                           placeholder="密 码：" required>\n                </div>\n                <div class="field" class="inlineError">\n                    <div align="center">\n                        <span *ngIf="showServerError">你输入的用户名或密码错误，请联系管理员。</span>\n                    </div>\n                </div>\n\n                <div align="center" style="margin-top: 10px">\n                    <button *ngIf="loginForm.valid" class="ui fluid primary button" type="submit">\n                        登&nbsp;&nbsp;&nbsp;&nbsp;录\n                    </button>\n                    <button *ngIf="!loginForm.valid" class="ui fluid disabled button" type="submit">\n                        登&nbsp;&nbsp;&nbsp;&nbsp;录\n                    </button>\n                </div>\n\n                <div class="center">\n                    <div class="copyright">\n                        Copyright (c) CloudNativer All rights reserved.\n                    </div>\n                </div>\n\n                <div class="center" style="margin-top: 5px;">\n                    <span class="supportTooltipText">Supported Browsers</span>\n                    <span class="supportTooltip">\n                        <tooltip [width]="200">Google Chrome<br/>Mozilla Firefox<br/>Safari 10 and above<br/></tooltip>\n                    </span>\n                </div>\n\n            </div>\n\n        </form>\n    </div>\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui middle aligned center aligned grid container">\n    <div class="column" style="width: 450px;">\n        <div class="ui login-seg" style="margin-top: 180px; background-color: white; padding: 20px; ">\n            <h1 class="header" style="margin-left:6px; margin-right:auto; text-align:center;">\n                <img class="ui image logo" src="images/cloud-logo2.png" height="30" style="display:inline;">\n                <br>\n                <span class="productname">K8S云网平台</span>\n            </h1>\n\n            <div class="column text" style="text-align: center">\n                <span>你的账号已退出登录！</span>\n            </div>\n\n            <div class="column" style="text-align: center; margin-top:50px;" align="center">\n                <button type="button" class="ui fluid primary button" (click)="login()" style="display: inline; width: 75%">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>\n            </div>\n           \n            <div class="center">\n                <div class="column copyright">\n                        Copyright (c) CloudNativer All rights reserved.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="ui container logout" style="margin-top: 100px; width: 60%">\n    <div class="ui segment">\n        <div class="ui one column centered grid">\n            <div class="column" style="text-align: center">\n                <h2>401 - Unauthorized</h2>\n            </div>\n\n            <div class="column" style="text-align: center">\n                <h3>You are not authorized to view this page</h3>\n            </div>\n\n            <div class="column" style="text-align: center">\n                <h3>Please contact the administrator for further assistance</h3>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="page header">\n    <div class="ui top attached menu mainMenu" align="right" style="background-color:#326DE6;width:100%;height:48px">\n        <h1 class="header" style="margin-top: 2px; float: left; white-space: nowrap; ">\n            <img class="ui image logo" src="images/cloud-logo.png"><span style="font-size:21px;color:#fff;left:-8px;top:2px;position:relative">K8S云网平台</span>\n        </h1>\n        <div class="utilnav">\n              <button type="button" class="circular ui mini icon button">\n                <i class="large user icon"></i>\n            </button>\n\n            <span style="font-size:15px;color:#fff;position:relative">{{username}}</span>\n            <div class="ui floating labeled icon dropdown">\n                <i class="dropdown icon"></i>\n                <div class="menu profile">\n                    <div class="item" onclick="$(\'#user-profile-modal\').modal(\'show\')" *ngIf="localuser">\n                        <span class="text">用户设置</span></div>\n                    <div class="item" (click)="logout()">\n                        <span class="text">退出登录</span></div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<notification></notification>\n\n<div id="user-profile-modal" class="ui small modal">\n    <div class="header">用户设置</div>\n    <div class="content">\n        <userprofileedit #userprofile (close)="closeProfile()" [username]="username" [displayType]="ProfileDisplayType.modal"></userprofileedit>\n    </div>\n    <div class="actions">\n        <div class="ui basic deny button modalBtn">取消</div>\n        <div class="ui primary button modalBtn" (click)="userprofile.saveUser(true)">\n            保存\n        </div>\n    </div>\n</div>\n\n<div id="sidebar" class="ui visible left vertical sidebar icon labeled menu mainNav">\n    <span *ngIf="!firstRun"><br>\n\n        <a class="item" [routerLink]="[\'dashboard\']" routerLinkActive="active">\n           <div style="top:1px;position:relative"><img src="images/menu-1.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">平台概况</span></div>\n        </a>\n\n        <a class="item" [routerLink]="[\'networks\']" routerLinkActive="active">\n           <div style="top:1px;position:relative"><img src="images/menu-9.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">子网与Tag管理</span></div>\n        </a>\n\n       <a class="item" [routerLink]="[\'servicelbs\']" routerLinkActive="active" *verifydom="\'docker\'">\n            <div style="top:1px;position:relative"><img src="images/menu-2.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">服务负载</span></div>\n        </a>\n\n        <a class="item" [routerLink]="[\'applicationgroups\']" routerLinkActive="active">\n            <div style="top:1px;position:relative"><img src="images/menu-4.png" height="19" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">应用策略组</span></div>\n        </a>\n\n        <a class="item" [routerLink]="[\'appprofiles\']" routerLinkActive="active" *verifydom="\'aci\'">\n            <div style="top:1px;position:relative"><img src="images/menu-8.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">ACI配置</span></div>\n        </a>\n\n        <a class="item" [routerLink]="[\'networkpolicies\']" routerLinkActive="active">\n           <div style="top:1px;position:relative"><img src="images/menu-5.png" height="18" width="19"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">安全隔离与QoS</span></div>\n        </a>\n\n        <a class="item" [routerLink]="[\'settings\']" routerLinkActive="active" *verifydom="\'admin\'">\n           <div style="top:1px;position:relative"><img src="images/menu-6.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">全局设置</span></div>\n        </a>\n         <a _ngcontent-ugn-17="" class="item" routerlinkactive="active" href="help.html" target="_blank">\n           <div style="top:1px;position:relative"><img src="images/menu-10.png" height="20" width="20"><span _ngcontent-wug-17="" style="font-size:14px;left:5px;top:-4px;position:relative">帮助与支持</span></div>\n        </a>\n   </span>\n</div>\n\n<div id="pageContent">\n    <router-outlet></router-outlet>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建QoS策略</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a (click)="returnToPolicies()">\n                        QoS策略\n                    </a>\n                </span>\n                <span class="crumb">创建</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form" #formRef="ngForm"\n                  (ngSubmit)="createPolicy(formRef.valid)" novalidate>\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: profileNameRef.errors?.required && formRef.submitted}">\n                                    <label for="newProfileName">策略名称</label>\n                                    <input #profileNameRef="ngModel" type="text" id="newProfileName" name="newProfileName"\n                                           [(ngModel)]="newPolicy.profileName" placeholder="Enter profile name" required>\n                                    <span class="inlineError" *ngIf="profileNameRef.errors?.required && formRef.submitted">\n                                        Please enter profile name\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: policyTenantRef.errors?.required && formRef.submitted}">\n                                    <label for="newPolicyTenant">租户</label>\n                                    <select id="newPolicyTenant" class="ui dropdown"\n                                            name="newPolicyTenant"\n                                            [(ngModel)]="newPolicy.tenantName"\n                                            required #policyTenantRef="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [ngValue]="tenant.tenantName">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="policyTenantRef.errors?.required && formRef.submitted">\n                                        Please select tenant\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n\n                                <div class="fields">\n                                    <div class="eight wide field" [ngClass]="{error: bandwidthNumberRef.errors?.required && formRef.submitted}">\n                                        <label for="newBandwidthNumber">带宽数值</label>\n                                        <input #bandwidthNumberRef="ngModel" type="number" id="newBandwidthNumber" name="newBandwidthNumber"\n                                               [(ngModel)]="newPolicy.bandwidthNumber" placeholder="Enter bandwidth" required>\n                                        <span class="inlineError" *ngIf="bandwidthNumberRef.errors?.required && formRef.submitted">\n                                           Please enter bandwidth\n                                        </span>\n                                    </div>\n                                    <div class="eight wide field" [ngClass]="{error: bandwidthUnitRef.errors?.required && formRef.submitted}">\n                                        <label for="newBandwidthUnit">带宽单位</label>\n                                        <select #bandwidthUnitRef="ngModel" name="newBandwidthUnit" id="newBandwidthUnit" class="ui dropdown"\n                                                [(ngModel)]="newPolicy.bandwidthUnit" required>\n                                            <option value=""> -- 选择带宽单位 -- </option>\n                                            <option value="kbps">kbps</option>\n                                            <option value="mbps">mbps</option>\n                                            <option value="gbps">gbps</option>\n                                        </select>\n                                        <span class="inlineError" *ngIf="bandwidthUnitRef.errors?.required && formRef.submitted">\n                                            Please select bandwidth Unit\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: DSCPRef.errors?.required && formRef.submitted}">\n                                    <label for="newDSCP">DSCP</label>\n                                    <input #DSCPRef="ngModel" type="number" id="newDSCP" name="newDSCP"\n                                           [(ngModel)]="newPolicy.DSCP" placeholder="Enter DSCP"/>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="burst">Burst</label>\n                                    <input #burstRef="ngModel" type="number" id="burst" name="burst"\n                                           [(ngModel)]="newPolicy.burst" placeholder="Enter Burst size" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="ui grid">\n                        <div class="right aligned six wide column">\n                            <div class="buttonRow">\n                                <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                    取消\n                                </button>\n                                <button type="submit" class="ui primary button">\n                                    创建\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div [ngSwitch]="mode" class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{policy.profileName}}</div>\n        </div>\n        <div class="right aligned eight wide column" *ngSwitchCase="\'details\'">\n            <div class="right aligned five wide column">\n                <button type="button" class="ui basic button"\n                        (click)="cancelDetails()">\n                    关闭\n                </button>\n                <button class="ui secondary button"\n                        (click)="editPolicy()">\n                    编辑\n                </button>\n                <button class="ui secondary button" onclick="$(\'#delete-policy-modal\').modal(\'show\')">\n                    <i class="trash icon"></i>\n                    移除\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div id="delete-policy-modal" class="ui small modal">\n        <div class="header">删除</div>\n        <div class="content">\n            <p>Are you sure you want to delete the policy <q>{{policy.profileName}}</q>?</p>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <div class="ui primary approve button modalBtn" (click)="deletePolicy()">\n                删除\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a (click)="returnToPolicies()">\n                        QoS策略\n                    </a>\n                </span>\n                <span class="crumb">{{policy.profileName}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div [ngSwitch]="mode" class="ui basic segment">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div *ngSwitchCase="\'details\'">\n\n                    <table>\n                        <tbody>\n                        <tr>\n                            <td class="ctv-header">Profile名称</td>\n                            <td class="ctv-value">{{policy.profileName}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header">租户</td>\n                            <td class="ctv-value">{{policy.tenantName}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header">带宽</td>\n                            <td class="ctv-value">{{policy.bandwidth}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header">DSCP</td>\n                            <td class="ctv-value">{{policy.DSCP}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header">Burst</td>\n                            <td class="ctv-value">{{policy.burst}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <div *ngSwitchCase="\'edit\'">\n                    <form class="ui form" role="form" #formRef="ngForm"\n                          (ngSubmit)="savePolicy(formRef.valid)" novalidate>\n\n                        <table>\n                            <tbody>\n                            <tr>\n                                <td class="ctv-header">配置名称</td>\n                                <td class="ctv-value">{{policy.profileName}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                        <div class="ui sixteen column grid" style="margin-top: 30px;">\n                            <div class="ui row">\n                                <div class="ui six wide column">\n\n                                    <div class="fields">\n                                        <div class="eight wide field" [ngClass]="{error: bandwidthNumberRef.errors?.required && formRef.submitted}">\n                                            <label for="bandwidthNumber">带宽数值</label>\n                                            <input #bandwidthNumberRef="ngModel" type="number" id="bandwidthNumber" name="bandwidthNumber"\n                                                   [(ngModel)]="policy.bandwidthNumber" placeholder="Enter bandwidth value" required>\n                                            <span class="inlineError" *ngIf="bandwidthNumberRef.errors?.required && formRef.submitted">\n                                                Please enter bandwidth\n                                            </span>\n                                        </div>\n                                        <div class="eight wide field" [ngClass]="{error: bandwidthUnitRef.errors?.required && formRef.submitted}">\n                                            <label for="bandwidthUnit">带宽单位</label>\n                                            <select #bandwidthUnitRef="ngModel" name="bandwidthUnit" id="bandwidthUnit" class="ui dropdown"\n                                                    [(ngModel)]="policy.bandwidthUnit" required>\n                                                <option value="">-- Select bandwidth unit --</option>\n                                                <option value="kbps">kbps</option>\n                                                <option value="mbps">mbps</option>\n                                                <option value="gbps">gbps</option>\n                                            </select>\n                                            <span class="inlineError" *ngIf="bandwidthUnitRef.errors?.required && formRef.submitted">\n                                                Please select bandwidth Unit\n                                            </span>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                </div>\n                            <div class="ui row">\n                                <div class="ui six wide column" [ngClass]="{error: DSCPRef.errors?.required && formRef.submitted}">\n                                    <div class="field">\n                                        <label for="DSCP">DSCP</label>\n                                        <input #DSCPRef="ngModel" type="number" id="DSCP" name="DSCP"\n                                               [(ngModel)]="policy.DSCP" placeholder="Enter DSCP"/>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="ui row" [ngClass]="{error: burstRef.errors?.required && formRef.submitted}">\n                                <div class="ui six wide column">\n                                    <div class="field">\n                                        <label for="burst">Burst</label>\n                                        <input #burstRef="ngModel" type="number" id="burst" name="burst"\n                                               [(ngModel)]="policy.burst" placeholder="Enter Burst"/>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="ui row" style="margin-top: 35px;">\n                                <div class="right aligned six wide column buttonRow">\n                                    <button type="button" class="ui basic button"\n                                            (click)="cancelEditing()">\n                                        取消\n                                    </button>\n\n                                    <button type="submit" class="ui primary button">\n                                        保存\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<ctv-search *ngIf="bandwidthPolicyListCtrl[\'policies\']" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n<div class="ui basic segment ctvTable" [ngClass]="{loading: showLoader}">\n    <ctv-table #tableRef [defaultSortColumn]="\'profileName\'"\n               [items]="bandwidthPolicyListCtrl[\'policies\']"\n               (filtereditems)="filteredPolicies=$event"\n               [size]="12">\n        <thead>\n        <tr>\n            <th>\n                <ctv-th [sortfield]="\'profileName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">名称\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">租户\n                </ctv-th>\n            </th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="bandwidthPolicyListCtrl[\'policies\'] && bandwidthPolicyListCtrl[\'policies\'].length">\n        <tr *ngFor="let policy of filteredPolicies">\n            <td><a [routerLink]="[\'../bandwidth/details\', policy.key]">{{policy.profileName}}</a></td>\n            <td>{{policy.tenantName}}</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="bandwidthPolicyListCtrl[\'policies\'] && !bandwidthPolicyListCtrl[\'policies\'].length">\n            <tr class="noDataFound">\n                <td colspan="2">No bandwidth policies found.</td>\n            </tr>\n        </tbody>\n\n        <tbody *ngIf="bandwidthPolicyListCtrl[\'policies\'] && bandwidthPolicyListCtrl[\'policies\'].length && !tableRef.count">\n            <tr class="noDataFound">\n                <td colspan="2">No records matched your filter criteria.</td>\n            </tr>\n        </tbody>\n\n        <tfoot>\n        <tr class="pagination">\n            <td colspan="2">\n                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                 (prevChunk)="tableRef.showPrevChunk()"\n                                 (nextChunk)="tableRef.showNextChunk()">\n                </ctv-tpagination>\n            </td>\n        </tr>\n        </tfoot>\n    </ctv-table>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建External Contract Group</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a [routerLink]="[\'../list\']">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a (click)="returnToContractGroups()">\n                        ACI External Contract Groups\n                    </a>\n                </span>\n                <span class="crumb">创建</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form" #formRef="ngForm"\n                  (ngSubmit)="createContractGroup(formRef.valid)" novalidate>\n\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: contractGroupNameRef.errors?.required && formRef.submitted}">\n                                    <label for="newContractGroupName">External contract group name</label>\n                                    <input #contractGroupNameRef="ngModel" type="text" id="newContractGroupName" name="newContractGroupName"\n                                           [(ngModel)]="newContractGroup.contractsGroupName" placeholder="输入名称" required>\n                                    <span class="inlineError" *ngIf="contractGroupNameRef.errors?.required && formRef.submitted">\n                                        Please enter external contract group name\n                                    </span>\n                                </div>\n                            </div>\n                            </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: contractGroupTenantRef.errors?.required && formRef.submitted}">\n                                    <label for="newContractGroupTenant">租户</label>\n                                    <select id="newContractGroupTenant" class="ui dropdown"\n                                            name="newContractGroupTenant"\n                                            [(ngModel)]="newContractGroup.tenantName"\n                                            required #contractGroupTenantRef="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [ngValue]="tenant.tenantName">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="contractGroupTenantRef.errors?.required && formRef.submitted">\n                                        Please select a tenant\n                                    </span>\n                                </div>\n                            </div>\n                            </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: contractGroupTypeRef.errors?.required && formRef.submitted}">\n                                    <label for="newContractGroupType">External contract group type</label>\n                                    <select id="newContractGroupType" class="ui dropdown"\n                                            name="newContractGroupType"\n                                            [(ngModel)]="newContractGroup.contractsType"\n                                            required #contractGroupTypeRef="ngModel">\n                                        <option value="">-- Select group type --</option>\n                                        <option value="consumed">consumed</option>\n                                        <option value="provided">provided</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="contractGroupTypeRef.errors?.required && formRef.submitted">\n                                        Please select external contract group type\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: contractGroupContractsRef.errors?.required && formRef.submitted}">\n                                    <label for="newContractGroupContracts">Contracts</label>\n                                    <input #contractGroupContractsRef="ngModel" type="text" id="newContractGroupContracts" name="newContractGroupContracts"\n                                           [(ngModel)]="contractsString" placeholder="Enter comma separated contract names" required>\n                                    <span class="inlineError" *ngIf="contractGroupContractsRef.errors?.required && formRef.submitted">\n                                        Please enter contracts\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="ui grid">\n                        <div class="right aligned six wide column">\n                            <div class="buttonRow">\n\n                                <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                    取消\n                                </button>\n                                <button type="submit" class="ui primary button">\n                                    创建\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="ui eight wide column">\n            <div class="content pageTitle">\n                {{contractGroup.contractsGroupName}}\n            </div>\n        </div>\n        <div class="right aligned eight wide column">\n\n            <div id="delete-contractgroup-modal" class="ui small modal">\n                <div class="header">删除</div>\n                <div class="content">\n                    <p>Are you sure you want to delete the external contract group <q>{{contractGroup.contractsGroupName}}</q>?</p>\n                </div>\n                <div class="actions">\n                    <div class="ui basic deny button modalBtn">取消</div>\n                    <div class="ui primary approve button modalBtn" (click)="deleteContractGroup()">\n                        删除\n                    </div>\n                </div>\n            </div>\n\n            <button class="ui basic button" (click)="returnToContractGroups()">\n                关闭\n            </button>\n\n            <button class="ui secondary button" onclick="$(\'#delete-contractgroup-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n        </div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a (click)="returnToContractGroups()">\n                        ACI External Contract Groups\n                    </a>\n                </span>\n                <span class="crumb">{{contractGroup.contractsGroupName}}</span>\n            </div>\n        </div>\n    </div>\n    <div class="ui row">\n        <div class="ui basic segment">\n            <div class="ui active inverted dimmer" *ngIf="showLoader">\n                <div class="ui loader"></div>\n            </div>\n\n            <table>\n                <tbody>\n                <tr>\n                    <td class="ctv-header">External Contract Group Name</td>\n                    <td class="ctv-value">{{contractGroup.contractsGroupName}}</td>\n                </tr>\n                <tr>\n                    <td class="ctv-header">租户</td>\n                    <td class="ctv-value">{{contractGroup.tenantName}}</td>\n                </tr>\n                <tr>\n                    <td class="ctv-header">External Contract Group Type</td>\n                    <td class="ctv-value">{{contractGroup.contractsType}}</td>\n                </tr>\n                <tr>\n                    <td class="ctv-header">Contracts</td>\n                    <td class="ctv-value">{{contractGroup.contracts?.join(", ")}}</td>\n                </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>';
}, function(e, t) {
    e.exports = '<ctv-search *ngIf="contractGroups" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n<div class="ui basic segment ctvTable" [ngClass]="{loading: showLoader}">\n    <ctv-table #tableRef [defaultSortColumn]="\'contractsGroupName\'"\n               [items]="contractGroups"\n               (filtereditems)="filteredContractGroups=$event"\n               [size]="12">\n        <thead>\n        <tr>\n            <th>\n                <ctv-th [sortfield]="\'contractsGroupName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">名称\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">租户\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'contractsType\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">Type\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'contracts\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">Contracts\n                </ctv-th>\n            </th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="contractGroups && contractGroups.length">\n        <tr *ngFor="let contractGroup of filteredContractGroups">\n            <td><a [routerLink]="[\'../contractgroup/details\', contractGroup.key]">{{contractGroup.contractsGroupName}}</a></td>\n            <td>{{contractGroup.tenantName}}</td>\n            <td>{{contractGroup.contractsType}}</td>\n            <td>{{contractGroup.contracts?.join(", ")}}</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="contractGroups && !contractGroups.length">\n        <tr class="noDataFound">\n            <td colspan="4">No external contract groups found.</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="contractGroups && contractGroups.length && !tableRef.count">\n        <tr class="noDataFound">\n            <td colspan="4">No records matched your filter criteria.</td>\n        </tr>\n        </tbody>\n\n        <tfoot>\n        <tr class="pagination">\n            <td colspan="4">\n                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                 (prevChunk)="tableRef.showPrevChunk()"\n                                 (nextChunk)="tableRef.showNextChunk()">\n                </ctv-tpagination>\n            </td>\n        </tr>\n        </tfoot>\n    </ctv-table>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建隔离策略</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        隔离策略\n                    </a>\n                </span>\n                <span class="crumb current">创建</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form" #formRef="ngForm"\n                  (ngSubmit)="createPolicy(formRef.valid)" novalidate>\n\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n                    <div class="description">\n                        <em>Name and create the policy now, after it is created you will edit it to define policy rules.</em>\n                    </div>\n\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: policyNameRef.errors?.required && formRef.submitted}">\n                                    <label for="newPolicyName">策略名称</label>\n                                    <input #policyNameRef="ngModel" type="text" id="newPolicyName" name="newPolicyName"\n                                           [(ngModel)]="newPolicy.policyName" placeholder="输入名称" required>\n                                    <span class="inlineError" *ngIf="policyNameRef.errors?.required && formRef.submitted">\n                                        Please enter policy name\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: policyTenantRef.errors?.required && formRef.submitted}">\n                                    <label for="newPolicyTenant">租户</label>\n                                    <select id="newPolicyTenant" class="ui dropdown"\n                                            name="newPolicyTenant"\n                                            [(ngModel)]="newPolicy.tenantName"\n                                            required #policyTenantRef="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [ngValue]="tenant.tenantName">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="policyTenantRef.errors?.required && formRef.submitted">\n                                        请选择租户\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="ui grid">\n                        <div class="right aligned six wide column">\n                            <div class="buttonRow">\n\n                                <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                    取消\n                                </button>\n                                <button type="submit" class="ui primary button">\n                                    创建\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div [ngSwitch]="mode" class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div *ngSwitchCase="\'details\'" class="content pageTitle">{{policy.policyName}}</div>\n            <div *ngSwitchCase="\'edit\'" class="content pageTitle">{{policy.policyName}}</div>\n        </div>\n        <div class="right aligned eight wide column">\n\n            <div class="right aligned five wide column">\n                <div id="delete-policy-modal" class="ui small modal">\n                    <div class="header">删除</div>\n                    <div class="content">\n                        <p>Are you sure you want to delete the policy <q>{{policy.policyName}}</q>?</p>\n                    </div>\n                    <div class="actions">\n                        <div class="ui basic deny button modalBtn">取消</div>\n                        <div class="ui primary approve button modalBtn" (click)="deletePolicy()">\n                            删除\n                        </div>\n                    </div>\n                </div>\n                <button *ngSwitchCase="\'details\'" type="button" class="ui basic button"\n                        (click)="cancelDetails()">\n                    关闭\n                </button>\n                <button *ngSwitchCase="\'edit\'" type="button" class="ui basic button"\n                        (click)="cancelEditing()">\n                    关闭\n                </button>\n                <button *ngSwitchCase="\'details\'" class="ui secondary button"\n                        (click)="editPolicy()">\n                    编辑\n                </button>\n                <button *ngSwitchCase="\'details\'" class="ui secondary button" onclick="$(\'#delete-policy-modal\').modal(\'show\')">\n                    <i class="trash icon"></i>\n                    移除\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        安全隔离与QoS\n                    </a>\n                </span>\n                <span class="crumb">\n                    <a href="/#/m/networkpolicies/list">\n                        隔离策略\n                    </a>\n                </span>\n                <span class="crumb">{{policy.policyName}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n            <div class="ui tabular menu" *ngIf="mode == \'details\'">\n                <a class="item" [ngClass]="{active: infoselected}" (click)="infoselected=true">\n                    详细信息\n                </a>\n                <a class="item" [ngClass]="{active: !infoselected}" (click)="infoselected=false">\n                    情况统计\n                </a>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui basic segment" *ngIf="infoselected">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <table>\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header">名称</td>\n                        <td class="ctv-value">{{policy.policyName}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">租户</td>\n                        <td class="ctv-value">{{policy.tenantName}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                <form class="ui form policyOutput" role="form">\n                    <h4 class="ui header">Incoming规则</h4>\n\n                    <div class="field">\n                        <div *ngIf="incorrectCIDR" class="ui negative message">\n                            <ul class="list">\n                                <li>Please enter the IP address in CIDR notation</li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <table class="ui very basic unstackable table">\n                        <thead>\n                        <tr>\n                            <th class="two wide">优先级</th>\n                            <th class="two wide">Action</th>\n                            <th class="three wide">From group</th>\n                            <th class="two wide">From network</th>\n                            <th class="two wide">From IP地址</th>\n                            <th class="two wide">协议</th>\n                            <th class="two wide">端口</th>\n                            <th class="one wide">&nbsp;</th>\n                        </tr>\n                        </thead>\n\n                        <tbody *ngIf="mode==\'edit\'">\n                            <tr class="noHover">\n                                <td>\n                                    <div class="ui input">\n                                        <input name="incomingRulePriority" [(ngModel)]="newIncomingRule.priority" type="number">\n                                    </div>\n                                </td>\n                                <td>\n                                    <select class="ui dropdown" name="incomingRuleAction" [(ngModel)]="newIncomingRule.action">\n                                        <option value="allow">allow</option>\n                                        <option value="deny">deny</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <select class="ui dropdown"\n                                            #incomingSelectedApplicationGroup\n                                            name="incomingSelectedApplicationGroup"\n                                            ngModel\n                                            (change)="onChangeIncomingApplicationGroupSelection(incomingSelectedApplicationGroup.value)"\n                                            [disabled]="disableIncomingApplicationGroupSelection">\n                                        <option selected value="">none</option>\n                                        <option *ngFor="let group of applicationGroups">{{group.groupName}}</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <select class="ui dropdown"\n                                            #incomingSelectedNetwork\n                                            name="incomingSelectedNetwork"\n                                            ngModel\n                                            (change)="onChangeIncomingNetworkSelection(incomingSelectedNetwork.value)"\n                                            [disabled]="disableIncomingNetworkSelection">\n                                        <option selected value="">none</option>\n                                        <option *ngFor="let network of networks">{{network.networkName}}</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <div class="ui input">\n                                        <input name="incomingRuleFromIpAddress"\n                                               [(ngModel)]="newIncomingRule.fromIpAddress"\n                                               [disabled]="disableIncomingIPAddressSelection"\n                                               (change)="onChangeIncomingIPAddress()"\n                                               placeholder="0.0.0.0/0">\n                                    </div>\n                                </td>\n                                <td>\n                                    <select class="ui dropdown" name="incomingRuleProtocol" [(ngModel)]="newIncomingRule.protocol">\n                                        <option value="tcp">tcp</option>\n                                        <option value="udp">udp</option>\n                                        <option value="icmp">icmp</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <div class="ui input">\n                                        <input name="incomingRulePort"\n                                               [(ngModel)]="newIncomingRule.port"\n                                               type="number"\n                                               placeholder="0-65535">\n                                    </div>\n                                </td>\n                                <td>\n                                    <button class="ui icon button iconBtn primaryIconBtn" (click)="addIncomingRule()">\n                                        <i class="add icon"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf="incomingRules.length">\n                            <tr *ngFor="let rule of incomingRules">\n                                <td>{{rule.priority}}</td>\n                                <td>{{rule.action}}</td>\n                                <td>{{rule.fromEndpointGroup}}</td>\n                                <td>{{rule.fromNetwork}}</td>\n                                <td>{{rule.fromIpAddress}}</td>\n                                <td>{{rule.protocol}}</td>\n                                <td>{{rule.port}}</td>\n                                <td *ngIf="mode == \'edit\'">\n                                    <button class="ui icon button iconBtn secondaryIconBtn" (click)="deleteIncomingRule(rule.key)">\n                                        <i class="trash icon"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf="!incomingRules.length">\n                            <tr class="noDataFound">\n                                <td colspan="8">None applied</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                    <h4 class="ui header" style="margin-top: 40px">Outgoing规则</h4>\n                    <table class="ui very basic unstackable table" style="margin-top: 40px">\n                        <thead>\n                        <tr>\n                            <th class="two wide">优先级</th>\n                            <th class="two wide">Action</th>\n                            <th class="three wide">To group</th>\n                            <th class="two wide">To network</th>\n                            <th class="two wide">To IP地址</th>\n                            <th class="two wide">协议</th>\n                            <th class="two wide">端口</th>\n                            <th class="one wide">&nbsp;</th>\n                        </tr>\n                        </thead>\n\n                        <tbody *ngIf="mode==\'edit\'">\n                        <tr class="noHover">\n\n                            <td>\n                                <div class="ui input">\n                                    <input name="outgoingRulePriority" [(ngModel)]="newOutgoingRule.priority" type="number">\n                                </div>\n                            </td>\n                            <td>\n                                <select class="ui dropdown" name="outgoingRuleAction" [(ngModel)]="newOutgoingRule.action">\n                                    <option value="allow">allow</option>\n                                    <option value="deny">deny</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class="ui dropdown"\n                                        #outgoingSelectedApplicationGroup\n                                        name="outgoingSelectedApplicationGroup"\n                                        ngModel\n                                        (change)="onChangeOutgoingApplicationGroupSelection(outgoingSelectedApplicationGroup.value)"\n                                        [disabled]="disableOutgoingApplicationGroupSelection">\n                                    <option value="">none</option>\n                                    <option *ngFor="let group of applicationGroups">{{group.groupName}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class="ui dropdown"\n                                        #outgoingSelectedNetwork\n                                        name="outgoingSelectedNetwork"\n                                        ngModel\n                                        (change)="onChangeOutgoingNetworkSelection(outgoingSelectedNetwork.value)"\n                                        [disabled]="disableOutgoingNetworkSelection">\n                                    <option value="">none</option>\n                                    <option *ngFor="let network of networks">{{network.networkName}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <div class="ui input">\n                                    <input name="outgoingRuleToIpAddress"\n                                           [(ngModel)]="newOutgoingRule.toIpAddress"\n                                           [disabled]="disableOutgoingIPAddressSelection"\n                                           (change)="onChangeOutgoingIPAddress()"\n                                           placeholder="0.0.0.0/0">\n                                </div>\n                            </td>\n                            <td>\n                                <select class="ui dropdown" name="outgoingRuleProtocol" [(ngModel)]="newOutgoingRule.protocol">\n                                    <option value="tcp">tcp</option>\n                                    <option value="udp">udp</option>\n                                    <option value="icmp">icmp</option>\n                                </select>\n                            </td>\n                            <td>\n                                <div class="ui input">\n                                    <input name="outgoingRulePort"\n                                           [(ngModel)]="newOutgoingRule.port"\n                                           type="number"\n                                           placeholder="0-65535">\n                                </div>\n                            </td>\n\n                            <td>\n                                <button class="ui icon button iconBtn primaryIconBtn" (click)="addOutgoingRule()">\n                                    <i class="add icon"></i>\n                                </button>\n                            </td>\n\n                        </tr>\n                        <tbody *ngIf="outgoingRules.length">\n                            <tr *ngFor="let rule of outgoingRules">\n                                <td>{{rule.priority}}</td>\n                                <td>{{rule.action}}</td>\n                                <td>{{rule.toEndpointGroup}}</td>\n                                <td>{{rule.toNetwork}}</td>\n                                <td>{{rule.toIpAddress}}</td>\n                                <td>{{rule.protocol}}</td>\n                                <td>{{rule.port}}</td>\n                                <td *ngIf="mode == \'edit\'">\n                                    <button class="ui icon button iconBtn secondaryIconBtn" (click)="deleteOutgoingRule(rule.key)">\n                                        <i class="trash icon"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf="!outgoingRules.length">\n                            <tr class="noDataFound">\n                                <td colspan="8">None applied</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </form>\n            </div>\n            <isolationpolicystats [statKey]="statskey" *ngIf="!infoselected"></isolationpolicystats>\n        </div>\n    </div>\n\n</div>\n'
}, function(e, t) {
    e.exports = '<ctv-search *ngIf="isolationPolicyListCtrl[\'policies\']" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n<div class="ui basic segment ctvTable" [ngClass]="{loading: showLoader}">\n    <ctv-table #tableRef [defaultSortColumn]="\'policyName\'"\n               [items]="isolationPolicyListCtrl[\'policies\']"\n               (filtereditems)="isolationPolicyListCtrl[\'filteredPolicies\']=$event"\n               [size]="12">\n        <thead>\n        <tr>\n            <th>\n                <ctv-th [sortfield]="\'policyName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">名称\n                </ctv-th>\n            </th>\n            <th>\n                <ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)"\n                        [sortobject]="tableRef.sortObj">租户\n                </ctv-th>\n            </th>\n        </tr>\n        </thead>\n\n        <tbody *ngIf="isolationPolicyListCtrl[\'policies\']">\n        <tr *ngFor="let policy of isolationPolicyListCtrl[\'filteredPolicies\']">\n            <td><a [routerLink]="[\'../isolation/details\', policy.key]">{{policy.policyName}}</a></td>\n            <td>{{policy.tenantName}}</td>\n        </tr>\n        </tbody>\n\n        <tbody *ngIf="!isolationPolicyListCtrl[\'policies\']">\n            <tr class="noDataFound">\n                <td colspan="2">No isolation policies found.</td>\n            </tr>\n        </tbody>\n\n        <tbody *ngIf="isolationPolicyListCtrl[\'policies\'] && !tableRef.count">\n            <tr class="noDataFound">\n                <td colspan="2">No records matched your filter criteria.</td>\n            </tr>\n        </tbody>\n\n        <tfoot>\n        <tr class="pagination">\n            <td colspan="2">\n                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                 (prevChunk)="tableRef.showPrevChunk()"\n                                 (nextChunk)="tableRef.showNextChunk()">\n                </ctv-tpagination>\n            </td>\n        </tr>\n        </tfoot>\n    </ctv-table>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: isolationPolicyStatsComp.showLoader}">\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{isolationPolicyStatsComp[\'config\'][\'policyName\']}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">租户</td>\n            <td class="ctv-value">{{isolationPolicyStatsComp[\'config\'][\'tenantName\']}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Endpoints数量</td>\n            <td class="ctv-value">{{isolationPolicyStatsComp.isolationPolicyInspectStats.numEndpoints}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div class="ui section divider"></div>\n\n    <ctv-collapsible title="End Points">\n\n        <ctv-search *ngIf="isolationPolicyStatsComp.endpoints.length" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [placeholder]=""></ctv-search>\n\n        <ctv-table #tableRef [defaultSortColumn]="\'containerName\'"\n                   [items]="isolationPolicyStatsComp[\'endpoints\']"\n                   (filtereditems)="isolationPolicyStatsComp[\'filteredendpoints\']=$event;"\n                   [size]="12">\n            <thead>\n                <tr>\n                    <th class="five wide column"><ctv-th [sortfield]="\'containerName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 容器标示 </ctv-th></th>\n                    <th class="five wide column" style="padding-left: 24px !important;"><ctv-th [sortfield]="\'ipAddress\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> IP地址 </ctv-th></th>\n                    <th class="six wide column" style="padding-left: 50px !important;"><ctv-th [sortfield]="\'homingHost\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 所属主机 </ctv-th></th>\n                </tr>\n            </thead>\n\n            <tbody *ngIf="isolationPolicyStatsComp.endpoints.length">\n                <tr *ngFor="let endpoint of isolationPolicyStatsComp[\'filteredendpoints\']">\n                    <td colspan="3" style="padding-left: 0 !important;">\n                        <ctv-accordion [items]="isolationPolicyStatsComp[\'containerDetails\'][endpoint.containerID]">\n                            <div class="ui grid" style="margin-top: -33px; margin-left: 20px;">\n                                <div class="five wide column">{{endpoint.containerName.substr(1)}}</div>\n                                <div class="five wide column">{{endpoint.ipAddress.join(\' \')}}</div>\n                                <div class="five wide column">{{endpoint.homingHost}}</div>\n                            </div>\n                        </ctv-accordion>\n                    </td>\n                    <td></td>\n                </tr>\n            </tbody>\n\n            <tbody *ngIf="!isolationPolicyStatsComp.endpoints.length">\n                <tr class="noDataFound"><td colspan="3">No container endpoints found.</td></tr>\n            </tbody>\n\n            <tbody *ngIf="isolationPolicyStatsComp.endpoints && isolationPolicyStatsComp.endpoints.length && !tableRef.count">\n                <tr class="noDataFound">\n                    <td colspan="3">No records matched your filter criteria.\n                </tr>\n            </tbody>\n\n            <tfoot>\n            <tr class="pagination">\n                <td colspan="3">\n                    <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                     (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                     (prevChunk)="tableRef.showPrevChunk()"\n                                     (nextChunk)="tableRef.showNextChunk()">\n\n                    </ctv-tpagination>\n                </td>\n            </tr>\n            </tfoot>\n        </ctv-table>\n    </ctv-collapsible>\n</div>'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">安全隔离与QoS</div>\n        </div>\n        <div class="right aligned eight wide column">\n          <button class="ui primary button" (click)="createNetworkPolicy()">\n              <i class="add icon"></i>\n              创建策略\n          </button>\n        </div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div [ngSwitch]="policyMode" class="breadcrumbs">\n                <span class="crumb">\n                  <a href="/#/m/networkpolicies/list">\n                      安全隔离与QoS\n                  </a></span>\n                <span *ngSwitchCase="\'isolation\'" class="crumb">隔离策略</span>\n                <span *ngSwitchCase="\'bandwidth\'" class="crumb">QoS策略</span>\n                <span *ngSwitchCase="\'contractgroup\'" class="crumb">ACI External Contract Groups</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n          <div class="ui tabular menu">\n              <a class="item"\n                 [ngClass]="{active: isolationPolicySelected}"\n                 (click)="selectPolicyTab(policyTab.isolation)">\n                  隔离策略\n              </a>\n              <a class="item"\n                 [ngClass]="{active: bandwidthPolicySelected}"\n                 (click)="selectPolicyTab(policyTab.bandwidth)">\n                  QoS策略\n              </a>\n              <a class="item"\n                 [ngClass]="{active: contractGroupSelected}"\n                 (click)="selectPolicyTab(policyTab.contractGroup)"\n                  *verifydom="\'aci\'">\n                  ACI External Contract Groups\n              </a>\n          </div>\n\n          <isolationpolicylist *ngIf="isolationPolicySelected"></isolationpolicylist>\n          <bandwidthpolicylist *ngIf="bandwidthPolicySelected"></bandwidthpolicylist>\n          <contractgrouplist *ngIf="contractGroupSelected"></contractgrouplist>\n\n        </div>\n    </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: networkCreateCtrl.showLoader}">\n    <div class="ui sixteen column grid">\n        <div class="ui row pageHeader">\n            <div class="left aligned eight wide column">\n                <div class="content pageTitle">创建网络</div>\n            </div>\n\n            <div class="right aligned eight wide column">&nbsp;</div>\n        </div>\n\n        <div class="ui row breadcrumbRow">\n            <div class="ui sixteen wide column">\n                <div class="breadcrumbs">\n                    <span class="crumb">\n                        <a href="/#/m/networks/list">\n                            子网与Tag\n                        </a>\n                    </span>\n                    <span class="crumb">创建</span>\n                </div>\n            </div>\n        </div>\n\n        <div class="ui row">\n            <div class="ui sixteen wide column">\n                <networkcreateform [newNetwork]="newNetwork" [firstRunWiz]="false" (createnetwork)="createNetwork($event)" (cancel)="cancelCreating()"></networkcreateform>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{networkDetailsCtrl.network.networkName}}</div>\n        </div>\n\n        <div class="right aligned eight wide column">\n            <button class="ui basic button" (click)="returnToNetworks()">\n                关闭\n            </button>\n            <button class="ui secondary button" onclick="$(\'#delete-network-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/networks/list">\n                        子网与Tag\n                    </a>\n                </span>\n                <span class="crumb">{{networkDetailsCtrl.network.networkName}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="right aligned three wide column">\n                <div id="delete-network-modal" class="ui small modal">\n                    <div class="header">删除</div>\n                    <div class="content">\n                        <p>Are you sure you want to delete the network <q>{{networkDetailsCtrl.network.networkName}}</q>?</p>\n                    </div>\n                    <div class="actions">\n                        <div class="ui basic deny button modalBtn">取消</div>\n                        <div class="ui primary approve button modalBtn" (click)="deleteNetwork()">\n                            删除\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="ui tabular menu">\n                <a class="item" [ngClass]="{active: infoselected}" (click)="infoselected=true">\n                    详细信息\n                </a>\n                <a class="item" [ngClass]="{active: !infoselected}" (click)="infoselected=false">\n                    情况统计\n                </a>\n            </div>\n\n            <network-info [networkDetailsCtrl]="networkDetailsCtrl" *ngIf="infoselected"></network-info>\n\n            <network-stat [statKey]="statskey" *ngIf="!infoselected"></network-stat>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment">\n    <div class="ui active inverted dimmer" *ngIf="networkDetailsCtrl.showLoader">\n        <div class="ui loader"></div>\n    </div>\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{networkDetailsCtrl.network.networkName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">租户</td>\n            <td class="ctv-value">{{networkDetailsCtrl.network.tenantName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">封装</td>\n            <td class="ctv-value">{{networkDetailsCtrl.network.encap}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">子网</td>\n            <td class="ctv-value">{{networkDetailsCtrl.network.subnet}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">网关</td>\n            <td class="value">{{networkDetailsCtrl.network.gateway}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <h4 class="ui header" style="margin-top: 30px">应用策略组</h4>\n\n    <div style="margin-top: 20px">\n\n        <ctv-search (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [placeholder]="\'Search application groups...\'"></ctv-search>\n\n        <ctv-table #tableRef\n                   [defaultSortColumn]="\'groupName\'"\n                   [items]="networkDetailsCtrl.applicationGroups"\n                   (filtereditems)="networkDetailsCtrl.filteredApplicationGroups=$event"\n                   [size]="5">\n            <thead>\n            <tr>\n                <th><ctv-th [sortfield]="\'groupName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 策略组名</ctv-th></th>\n                <th><ctv-th [sortfield]="\'policies\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 策略</ctv-th></th>\n            </tr>\n            </thead>\n\n            <tbody *ngIf="networkDetailsCtrl.applicationGroups">\n            <tr *ngFor="let group of networkDetailsCtrl.filteredApplicationGroups">\n                <td class="three wide column">\n                    <a [routerLink]="[\'/m/applicationgroups/details\', group.key]">{{group.groupName}}</a>\n                </td>\n                <td>{{group.policies.join(", ")}}</td>\n            </tr>\n            </tbody>\n\n            <tbody *ngIf="!networkDetailsCtrl.applicationGroups || networkDetailsCtrl.applicationGroups.length==0">\n                <tr class="noDataFound"><td colspan="2">No application groups defined.</td></tr>\n            </tbody>\n\n            <tbody *ngIf="networkDetailsCtrl.applicationGroups && networkDetailsCtrl.applicationGroups.length>0 && networkDetailsCtrl.filteredApplicationGroups.length==0">\n                <tr class="noDataFound"><td colspan="2">No records matched your filter criteria.</td></tr>\n            </tbody>\n\n            <tfoot>\n            <tr class="pagination">\n                <td colspan="2">\n                    <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                     (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                     (prevChunk)="tableRef.showPrevChunk()"\n                                     (nextChunk)="tableRef.showNextChunk()">\n                    </ctv-tpagination>\n                </td>\n            </tr>\n            </tfoot>\n        </ctv-table>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">子网与Tag管理</div>\n        </div>\n\n        <div class="right aligned eight wide column">\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建子网\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">子网与Tag</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <ctv-search *ngIf="networkListComp[\'networks\']" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n            <div class="ui basic segment ctvTable">\n\n                <div class="ui active inverted dimmer" *ngIf="networkListComp.showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <ctv-table #tableRef [defaultSortColumn]="\'networkName\'"\n                           [items]="networkListComp[\'networks\']"\n                           (filtereditems)="networkListComp[\'filterednetworks\']=$event;"\n                           [size]="12">\n                    <thead>\n                    <tr>\n                        <th><ctv-th [sortfield]="\'networkName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">名称</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'encap\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">封装</ctv-th></th>\n              <th><ctv-th [sortfield]="\'pktTag\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">PacketTag</ctv-th></th>\n              <th><ctv-th [sortfield]="\'subnet\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">网段</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'gateway\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">网关</ctv-th></th>\n     <th class="center aligned"><ctv-th [sortfield]="\'netStatus\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">网络状态</ctv-th></th>\n               </tr>\n                    </thead>\n\n                    <tbody *ngIf="networkListComp[\'networks\'] && networkListComp[\'networks\'].length">\n                    <tr *ngFor="let network of networkListComp[\'filterednetworks\']">\n                        <td><a [routerLink]="[\'../details\',network.key]">{{network.networkName}}</a></td>\n                        <td>{{network.tenantName}}</td>\n                        <td>{{network.encap}}</td>\n             <td>{{network.pktTag}}</td>\n                  <td>{{network.subnet}}</td>\n                        <td>{{network.gateway}}</td>\n    <td class="center aligned"><img src="images/ok.png" alt="成功" width="13px" height="13px" /></td>\n          </tr>\n                    </tbody>\n\n                    <tbody *ngIf="networkListComp[\'networks\'] && !networkListComp[\'networks\'].length">\n                        <tr class="noDataFound">\n                            <td colspan="5">No networks found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="networkListComp[\'networks\'] && networkListComp[\'networks\'].length && !tableRef.count">\n                        <tr class="noDataFound"><td colspan="5">No records matched your filter criteria.</td></tr>\n                    </tbody>\n\n                    <tfoot>\n                    <tr class="pagination">\n                        <td colspan="5">\n                            <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                             (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                             (prevChunk)="tableRef.showPrevChunk()"\n                                             (nextChunk)="tableRef.showNextChunk()">\n                            </ctv-tpagination>\n                        </td>\n                    </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: networkStatsCtrl.showLoader}">\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{networkStatsCtrl[\'config\'][\'networkName\']}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">分配IP计数</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.allocatedAddressesCount}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">分配IP地址</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.allocatedIPAddresses}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">可用IP地址</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.availableIPAddresses}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">DNS服务器IP</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.dnsServerIP}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">External PacketTag</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.externalPktTag}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Endpoints数量</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.numEndpoints}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Internal PacketTag</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.pktTag}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">网络Tag</td>\n            <td class="ctv-value">{{networkStatsCtrl.networkInspectStats.networkTag}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div class="ui section divider"></div>\n\n    <ctv-collapsible title="End Points">\n\n        <ctv-search *ngIf="networkStatsCtrl.endpoints.length" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [placeholder]=""></ctv-search>\n\n        <ctv-table #tableRef [defaultSortColumn]="\'containerName\'"\n                   [items]="networkStatsCtrl[\'endpoints\']"\n                   (filtereditems)="networkStatsCtrl[\'filteredendpoints\']=$event;"\n                   [size]="12">\n            <thead>\n                <tr>\n                    <th class="four wide column"><ctv-th [sortfield]="\'containerName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 容器标示 </ctv-th></th>\n                    <th class="five wide column" style="padding-left: 55px !important;"><ctv-th [sortfield]="\'ipAddress\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> IP地址 </ctv-th></th>\n                    <th class="five wide column" style="padding-left: 30px !important;"><ctv-th [sortfield]="\'homingHost\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj"> 所属主机 </ctv-th></th>\n                </tr>\n            </thead>\n\n            <tbody *ngIf="networkStatsCtrl.endpoints.length">\n                <tr *ngFor="let endpoint of networkStatsCtrl[\'filteredendpoints\']">\n                    <td colspan="3" style="padding-left: 0 !important;">\n                        <ctv-accordion [items]="networkStatsCtrl[\'containerDetails\'][endpoint.containerID]">\n                            <div class="ui grid" style="margin-top: -33px; margin-left: 20px;">\n                                <div class="five wide column">{{endpoint.containerName.substr(1)}}</div>\n                                <div class="five wide column">{{endpoint.ipAddress.join(\' \')}}</div>\n                                <div class="five wide column">{{endpoint.homingHost}}</div>\n                            </div>\n                        </ctv-accordion>\n                    </td>\n                </tr>\n            </tbody>\n\n            <tbody *ngIf="!networkStatsCtrl.endpoints.length">\n                <tr class="noDataFound"><td colspan="3">No container endpoints found.</td></tr>\n            </tbody>\n\n            <tbody *ngIf="networkStatsCtrl.endpoints && networkStatsCtrl.endpoints.length && !tableRef.count">\n                <tr class="noDataFound">\n                    <td colspan="3">No records matched your filter criteria.\n                </tr>\n            </tbody>\n\n            <tfoot>\n                <tr class="pagination">\n                    <td colspan="3">\n                        <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                         (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                         (prevChunk)="tableRef.showPrevChunk()"\n                                         (nextChunk)="tableRef.showNextChunk()">\n\n                        </ctv-tpagination>\n                    </td>\n                </tr>\n            </tfoot>\n        </ctv-table>\n    </ctv-collapsible>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建服务负载</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a  [routerLink]="[\'../list\']">\n                        服务负载\n                    </a>\n                </span>\n                <span class="crumb">创建</span>\n\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" name="servicelbCreateForm" role="form" #servicelbCreateForm="ngForm"\n                  (submit)="createServicelb(servicelbCreateForm.valid)"\n                  novalidate>\n\n                <div class="ui basic segment">\n\n                    <div class="ui active inverted dimmer" *ngIf="servicelbCreateCtrl.showLoader">\n                        <div class="ui loader"></div>\n                    </div>\n                    <div class="ui sixteen column grid" style="margin-bottom: 20px;">\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: servicelbName.errors?.required && servicelbCreateForm.submitted}">\n                                    <label for="servicelbName">Service loadbalancer名称</label>\n                                    <input type="text" id="servicelbName" name="servicelbName"\n                                           [(ngModel)]="servicelbCreateCtrl.servicelb.serviceName" placeholder="输入名称" required #servicelbName="ngModel">\n                                    <span class="inlineError" *ngIf="servicelbName.errors?.required && servicelbCreateForm.submitted">\n                                        Please enter service load balancer name\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: servicelbTenant.errors?.required && servicelbCreateForm.submitted}">\n                                    <label for="servicelbTenant">租户</label>\n                                    <select id="servicelbTenant" class="ui dropdown"\n                                            name="servicelbTenant"\n                                            ngModel\n                                            (change)="updateTenant($event.target.value)"\n                                            required #servicelbTenant="ngModel">\n                                        <option value="">-- 请选择租户 --</option>\n                                        <option *ngFor="let tenant of tenants" [value]="tenant.tenantName">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="servicelbTenant.errors?.required && servicelbCreateForm.submitted">\n                                        请选择租户\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div [hidden]="!servicelb.tenantName.length" class="field" [ngClass]="{error: servicelbNetwork.errors?.required && servicelbCreateForm.submitted}">\n                                    <label for="servicelbNetwork">网络</label>\n                                    <select id="servicelbNetwork" class="ui dropdown"\n                                            name="servicelbNetwork"\n                                            [(ngModel)]="servicelb.networkName"\n                                            required #servicelbNetwork="ngModel">\n                                        <option *ngIf="networks.length" value="">-- 选择网络 --</option>\n                                        <option *ngIf="!networks.length" value="">-- 租户没有网络 --</option>\n                                        <option *ngFor="let network of networks" [ngValue]="network.networkName">{{network.networkName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="servicelbNetwork.errors?.required && servicelbCreateForm.submitted">\n                                        Please select network\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div *ngIf="servicelb.tenantName" class="field">\n                                    <label for="servicelbIP">Service IP地址</label>\n                                    <input type="text" id="servicelbIP" name="servicelbIP"\n                                           [(ngModel)]="servicelbCreateCtrl.servicelb.ipAddress" placeholder="Enter IP address" #servicelbIP="ngModel">\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <ctv-collapsible [title]="\'Label Selectors\'" [collapsed]="false">\n                        <div class="field">\n                            <div class="description">\n                                添加selector键值对.\n                            </div>\n                            <ctv-namevalue [items]="servicelbCreateCtrl.labelSelectors" (itemsChange)="servicelbCreateCtrl.labelSelectors=$event"></ctv-namevalue>\n                        </div>\n                    </ctv-collapsible>\n\n                    <ctv-collapsible [title]="\'网络端口\'" [collapsed]="false">\n                        <div class="field">\n                            <ctv-servicelbports [items]="servicelbCreateCtrl.servicelb.ports" (itemsChange)="servicelbCreateCtrl.servicelb.ports=$event"></ctv-servicelbports>\n                        </div>\n                    </ctv-collapsible>\n\n                    <div class="ui grid">\n                        <div class="right aligned sixteen wide column buttonRow">\n                            <button type="button" class="ui basic button" (click)="servicelbCreateCtrl.cancelCreating()">\n                                取消\n                            </button>\n                            <button type="submit" class="ui primary button">\n                                创建\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div [ngSwitch]="servicelbDetailsCtrl.mode" class="ui row">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{servicelbDetailsCtrl.serviceName}}</div>\n        </div>\n        <div class="right aligned eight wide column" *ngSwitchCase="\'details\'">\n            <button type="button" class="ui basic button"\n                    (click)="cancelDetails()">\n                关闭\n            </button>\n            <button class="ui secondary button"\n                    (click)="loadEdit()">\n                编辑\n            </button>\n            <button class="ui secondary button" onclick="$(\'#delete-service-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n\n        </div>\n    </div>\n\n    <div id="delete-service-modal" class="ui small modal">\n        <div class="header">删除</div>\n        <div class="content">\n            <p>Are you sure you want to delete the service <q>{{servicelbDetailsCtrl.serviceName}}</q>?</p>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <div class="ui primary approve button modalBtn" (click)="deleteServicelb()">\n                是\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">\n                    <a href="/#/m/servicelbs/list">\n                        服务负载\n                    </a>\n                </span>\n                <span class="crumb">\n                    {{servicelbDetailsCtrl.serviceName}}\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui tabular menu" *ngIf="servicelbDetailsCtrl.mode==\'details\'">\n                <a class="item" [ngClass]="{active: infoselected}" (click)="infoselected=true">\n                    Details\n                </a>\n                <a class="item" [ngClass]="{active: !infoselected}" (click)="infoselected=false">\n                    情况统计\n                </a>\n            </div>\n\n            <servicelb-info [(mode)]="mode" *ngIf="infoselected || servicelbDetailsCtrl.mode == \'edit\'"\n                (serviceName)="serviceName=$event"></servicelb-info>\n\n            <servicelb-stat [statkey]="servicelbDetailsCtrl.statskey"\n                            *ngIf="!infoselected && servicelbDetailsCtrl.mode != \'edit\'"></servicelb-stat>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: servicelbInfoCtrl.showLoader}">\n\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{servicelbInfoCtrl.servicelb.serviceName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">租户</td>\n            <td class="ctv-value">{{servicelbInfoCtrl.servicelb.tenantName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">网络</td>\n            <td class="ctv-value">{{servicelbInfoCtrl.servicelb.networkName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">IP地址</td>\n            <td class="ctv-value">{{servicelbInfoCtrl.servicelb.ipAddress}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div [ngSwitch]="servicelbInfoCtrl.mode">\n\n        <div *ngSwitchCase="\'details\'">\n\n            <div class="ctv-collapsible">\n                <h4 class="ui header ctv-collapsible-label">Label Selectors</h4>\n                <table class="ui very basic selectable table">\n\n                    <thead>\n                        <tr>\n                            <th class="ctv-header">名称</th>\n                            <th class="ctv-header">值</th>\n                        </tr>\n                    </thead>\n\n                    <tbody *ngIf="servicelbInfoCtrl.servicelb.selectors.length">\n                        <tr *ngFor="let selector of servicelbInfoCtrl.servicelb.selectors">\n                            <td class="ctv-header three wide column key">{{selector.split(\'=\')[0]}}</td>\n                            <td class="value">{{selector.split(\'=\')[1]}}</td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="!servicelbInfoCtrl.servicelb.selectors.length">\n                        <tr class="noDataFound">\n                            <td colspan="3">No labels found.</td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n\n            <div class="ctv-collapsible">\n                <h4 class="ui header ctv-collapsible-label">Ports</h4>\n                <table class="ui very basic unstackable table">\n\n                    <thead>\n                        <tr>\n                            <th class="ctv-header">Service port</th>\n                            <th class="ctv-header">Provider port</th>\n                            <th class="ctv-header">协议</th>\n                        </tr>\n                    </thead>\n\n                    <tbody *ngIf="servicelbInfoCtrl.servicelb.ports.length">\n                        <tr *ngFor="let port of servicelbInfoCtrl.servicelb.ports">\n                            <td>{{port.split(\':\')[0]}}</td>\n                            <td>{{port.split(\':\')[1]}}</td>\n                            <td>{{port.split(\':\')[2]}}</td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="!servicelbInfoCtrl.servicelb.ports.length">\n                        <tr class="noDataFound">\n                            <td colspan="3">No ports found.</td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n\n        </div>\n        <div *ngSwitchCase="\'edit\'">\n\n            <div class="ui form field">\n                <ctv-collapsible title="Label Selectors" [collapsed]="false">\n                    <ctv-namevalue [items]="servicelbInfoCtrl.labelSelectors" (itemsChange)="servicelbInfoCtrl.labelSelectors=$event"></ctv-namevalue>\n                </ctv-collapsible>\n            </div>\n\n            <div class="ui form field">\n                <ctv-collapsible title="Ports" [collapsed]="false">\n                    <ctv-servicelbports [items]="servicelbInfoCtrl.servicelb.ports" (itemsChange)="servicelbInfoCtrl.servicelb.ports=$event"></ctv-servicelbports>\n                </ctv-collapsible>\n            </div>\n        </div>\n        <div class="ui grid" style="margin-top: 40px">\n            <div class="right aligned sixteen wide column">\n                <button *ngSwitchCase="\'edit\'" type="button" class="ui basic button"\n                        (click)="servicelbInfoCtrl.cancelEditing()">\n                    取消\n                </button>\n                <button *ngSwitchCase="\'edit\'" type="button" class="ui primary button"\n                        (click)="servicelbInfoCtrl.saveServicelb()">\n                    保存\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">服务负载</div>\n        </div>\n        <div class="right aligned eight wide column">\n          <button class="ui primary button" (click)="create()">\n              <i class="add icon"></i>\n              创建服务负载\n          </button>\n        </div>\n    </div>\n    <div class="ui row breadcrumbRow">\n        <div class="ui sixteen wide column">\n            <div class="breadcrumbs">\n                <span class="crumb">服务负载</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <ctv-search *ngIf="servicelbListCtrl.servicelbs" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n            <div class="ui basic segment ctvTable">\n                <div class="ui active inverted dimmer" *ngIf="servicelbListCtrl.showLoader">\n                    <div class="ui loader"></div>\n                </div>\n                <ctv-table #tableRef [defaultSortColumn]="\'serviceName\'"\n                           [items]="servicelbListCtrl.servicelbs"\n                           (filtereditems)="servicelbListCtrl.filteredservicelbs=$event"\n                           [size]="12">\n                    <thead>\n                        <tr>\n                            <th><ctv-th [sortfield]="\'serviceName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">名称</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'networkName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">子网</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'ipAddress\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">IP地址</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'selectors\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">Label Selectors</ctv-th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody *ngIf="servicelbListCtrl.servicelbs && servicelbListCtrl.servicelbs.length">\n                        <tr *ngFor="let servicelb of servicelbListCtrl.filteredservicelbs">\n                            <td><a [routerLink]="[\'../details\', servicelb.key]">{{servicelb.serviceName}}</a></td>\n                            <td>{{servicelb.tenantName}}</td>\n                            <td>{{servicelb.networkName}}</td>\n                            <td>{{servicelb.ipAddress}}</td>\n                            <td>\n                                <div class="ui label tiny" *ngFor="let selector of servicelb.selectors">{{selector}}</div>\n                            </td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="servicelbListCtrl.servicelbs && !servicelbListCtrl.servicelbs.length">\n                        <tr class="noDataFound">\n                            <td colspan="2">No service load balancers found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="servicelbListCtrl.servicelbs && servicelbListCtrl.servicelbs.length && !tableRef.count">\n                        <tr class="noDataFound">\n                            <td colspan="2">No records matched your filter criteria.</td>\n                        </tr>\n                    </tbody>\n\n                    <tfoot>\n                        <tr class="pagination">\n                            <td colspan="4">\n                                <ctv-tpagination  [chunks]="tableRef.pageChunks"\n                                                  (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                                  (prevChunk)="tableRef.showPrevChunk()"\n                                                  (nextChunk)="tableRef.showNextChunk()">\n                                </ctv-tpagination>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<table class="ui very basic unstackable table" style="margin-top: 10px">\n    <thead>\n    <th>Service端口</th>\n    <th>Provider端口</th>\n    <th>协议</th>\n    <th>&nbsp;</th>\n    </thead>\n\n    <tbody>\n    <tr class="noHover">\n        <td class="ui three wide column">\n            <div class="ui input">\n                <input type="number" [(ngModel)]="newItem.servicePort" placeholder="0-65535">\n            </div>\n        </td>\n        <td class="ui three wide column">\n            <div class="ui input">\n                <input type="number" [(ngModel)]="newItem.providerPort" placeholder="0-65535">\n            </div>\n        </td>\n        <td class="ui three wide column">\n            <select class="ui dropdown" [(ngModel)]="newItem.protocol">\n                <option value="TCP">TCP</option>\n                <option value="UDP">UDP</option>\n            </select>\n        </td>\n        <td>\n            <button type="button" class="ui icon button iconBtn primaryIconBtn" (click)="add()">\n                <i class="add icon"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n\n    <tbody *ngIf="items.length">\n    <tr *ngFor="let item of items">\n        <td>{{item.split(\':\')[0]}}</td>\n        <td>{{item.split(\':\')[1]}}</td>\n        <td>{{item.split(\':\')[2]}}</td>\n        <td>\n            <button type="button" class="ui icon button iconBtn secondaryIconBtn"\n                    (click)="remove(item)">\n                <i class="trash icon"></i>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n\n    <tbody *ngIf="!items.length">\n    <tr class="noDataFound"><td colspan="3">No ports have been defined.</td></tr>\n    </tbody>\n\n</table>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: servicelbStatsCtrl.showLoader}">\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">名称</td>\n            <td class="ctv-value">{{servicelbStatsCtrl.config.serviceName}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Providers数量</td>\n            <td class="ctv-value">{{servicelbStatsCtrl.servicelbInspectStats.numProviders}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">Service Vip</td>\n            <td class="ctv-value">{{servicelbStatsCtrl.servicelbInspectStats.serviceVip}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div class="ui section divider"></div>\n\n    <ctv-collapsible title="Providers">\n\n        <ctv-search *ngIf="!servicelbStatsCtrl.providers.length" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n        <ctv-table #tableRef [defaultSortColumn]="\'containerName\'"\n                   [items]="servicelbStatsCtrl.providers"\n                   (filtereditems)="servicelbStatsCtrl.filteredproviders=$event"\n                   [size]="12">\n            <thead>\n                <tr>\n                    <th class="four wide column"><ctv-th [sortfield]="\'containerName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">容器标示</ctv-th></th>\n                    <th class="five wide column" style="padding-left: 55px !important;"><ctv-th [sortfield]="\'ipAddress\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">IP地址</ctv-th></th>\n                    <th class="five wide column" style="padding-left: 30px !important;"><ctv-th [sortfield]="\'homingHost\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">所属主机</ctv-th></th>\n                </tr>\n            </thead>\n\n            <tbody *ngIf="servicelbStatsCtrl.providers.length">\n                <tr *ngFor="let provider of servicelbStatsCtrl.filteredproviders">\n                    <td colspan="3" style="padding-left: 0 !important;">\n                        <ctv-accordion [items]="servicelbStatsCtrl.providerDetails[provider.containerID]">\n                            <div class="ui grid" style="margin-top: -33px; margin-left: 20px;">\n                                <div class="five wide column">{{provider.containerName.substr(1)}}</div>\n                                <div class="five wide column">{{provider.ipAddress.join(\' \')}}</div>\n                                <div class="five wide column">{{provider.homingHost}}</div>\n                            </div>\n                        </ctv-accordion>\n                    </td>\n                </tr>\n            </tbody>\n\n            <tbody *ngIf="!servicelbStatsCtrl.providers.length">\n                <tr class="noDataFound"><td colspan="3">No container endpoints found.</td></tr>\n            </tbody>\n\n            <tbody *ngIf="servicelbStatsCtrl.providers && servicelbStatsCtrl.providers.length && !tableRef.count">\n                <tr class="noDataFound">\n                    <td colspan="3">No records matched your filter criteria.\n                </tr>\n            </tbody>\n\n            <tfoot>\n                <tr class="pagination">\n                    <td colspan="3">\n                        <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                         (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                         (prevChunk)="tableRef.showPrevChunk()"\n                                         (nextChunk)="tableRef.showNextChunk()">\n                        </ctv-tpagination>\n                    </td>\n                </tr>\n            </tfoot>\n        </ctv-table>\n    </ctv-collapsible>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment" [ngClass]="{loading: showLoader}">\n    <div class="ui sixteen column grid ">\n        <div class="ui row pageHeader">\n            <div class="left aligned sixteen wide column">\n                <div class="content pageTitle" style="display: inline-block">创建授权</div>\n                <tooltip>Authorize user roles for each tenant. Select the tenant and user and determine if the user needs administrator privileges on the tenant.</tooltip>\n            </div>\n        </div>\n\n        <div class="ui row">\n            <div class="ui sixteen wide column">\n\n                <form class="ui form" role="form"\n                      (submit)="createAuthorization(formRef.valid)" novalidate #formRef="ngForm">\n\n                    <div class="ui fifteen column grid">\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="usertype">用户授权类型</label>\n                                    <select class="ui dropdown" id="usertype" name="usertype" [(ngModel)]=\'usertype\'>\n                                        <option value="local">Local User</option>\n                                        <option value="ldap">LDAP Group</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="ui sixteen column grid">\n\n                        <!-- both these form elements point to the same model attribute \'authorization.PrincipalName\',\n                            but one (local user) is a SELECT and the other (LDAP) a text input -->\n                        <div *ngIf="usertype==\'local\'" class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: username.errors?.required && formRef.submitted}">\n                                    <label for="username">用户名</label>\n                                    <select class="ui dropdown" id="username" name="username"\n                                            [(ngModel)]="authorization.PrincipalName"\n                                            required #username="ngModel">\n                                        <option [value]="user.username" *ngFor="let user of users">{{user.username}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="username.errors?.required && formRef.submitted">\n                                        Please select user name.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf="usertype==\'ldap\'" class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error:ldapgroup.errors?.required && formRef.submitted}">\n                                    <label for="ldapgroup">LDAP Group</label>\n                                    <input type="text" id="ldapgroup" name="ldapgroup"\n                                           [(ngModel)]="authorization.PrincipalName"\n                                           placeholder="ex: cn=name,ou=group" required #ldapgroup="ngModel">\n                                    <span class="inlineError" *ngIf="ldapgroup.errors?.required && formRef.submitted">\n                                        Please enter LDAP group details.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error:role.errors?.required && formRef.submitted}">\n                                    <label for="role">角色</label>\n                                    <select class="ui dropdown" id="role" name="role" [(ngModel)]="authorization.Role" required #role="ngModel" (change)="checkRole()">\n                                        <option value="admin">Admin</option>\n                                        <option value="ops">DevOps</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="role.errors?.required && formRef.submitted">\n                                        Please select user role.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row" *ngIf="authorization.Role===\'ops\'">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error:tenant.errors?.required && formRef.submitted}">\n                                    <label for="tenant">租户</label>\n                                    <select class="ui dropdown" id="tenant" name="tenant" [(ngModel)]="authorization.TenantName" required #tenant="ngModel">\n                                        <option [value]="tenant.tenantName" *ngFor="let tenant of tenants">{{tenant.tenantName}}</option>\n                                    </select>\n                                    <span class="inlineError" *ngIf="tenant.errors?.required && formRef.submitted">\n                                        请选择租户.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui right aligned six wide column">\n                                <div class="buttonRow">\n                                    <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                        取消\n                                    </button>\n                                    <button type="submit" class="ui primary button">\n                                        创建\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n</div>'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="ui sixteen column grid ">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div *ngSwitchCase="\'details\'" class="content pageTitle">{{authorization.PrincipalName}}</div>\n            <div *ngSwitchCase="\'edit\'" class="content pageTitle">{{authorization.PrincipalName}}</div>\n        </div>\n        <div class="right aligned eight wide column">\n\n            <div id="delete-auth-modal" class="ui small modal">\n                <div class="header">删除\n                </div>\n                <div class="content">\n                    <p *ngIf="authorization.Role!==\'admin\'">Are you sure you want to delete the authorization for <q>{{authorization.PrincipalName}}</q>\n                        for Tenant <q>{{authorization.TenantName}}</q>?</p>\n                    <p *ngIf="authorization.Role===\'admin\'">Are you sure you want to delete the authorization for <q>{{authorization.PrincipalName}}</q>\n                        who has an admin role?</p>\n                </div>\n                <div class="actions">\n                    <div class="ui basic deny button modalBtn">取消</div>\n                    <div class="ui primary approve button modalBtn" (click)="deleteAuthorization()">\n                        删除\n                    </div>\n                </div>\n            </div>\n\n            <button *ngSwitchCase="\'details\'" class="ui basic button"\n                    (click)="returnToList()">\n                关闭\n            </button>\n            <button class="ui button"\n                    [ngClass]="{disabled: isRootAdmin, secondary: !isRootAdmin}"\n                    style="height: 30px; font-size: 13px; padding: 0 24px;"\n                    onclick="$(\'#delete-auth-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui basic segment" [ngClass]="{loading: showLoader}">\n\n                <div class="ui row">\n                    <div class="ui sixteen wide column">\n\n                        <div *ngIf="!isRootAdmin" class="description">用户的授权信息是无法编辑的。如果您认为该用户的授权信息有误，请删除此记录然后重新创建。</div>\n                        <div *ngIf="isRootAdmin" class="description">不允许编辑和删除平台内置admin用户授权信息。</div>\n\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td class="ctv-header">用户名</td>\n                                    <td class="ctv-value">{{authorization.PrincipalName}}</td>\n                                </tr>\n                                <tr>\n                                    <td class="ctv-header">Local</td>\n                                    <td class="ctv-value">{{(authorization.Local?\'yes\':\'no\')}}</td>\n                                </tr>\n                                <tr *ngSwitchCase="\'details\'">\n                                    <td class="ctv-header">角色</td>\n                                    <td class="ctv-value">{{authorization.Role}}</td>\n                                </tr>\n                                <tr *ngSwitchCase="\'details\'">\n                                    <td class="ctv-header">租户授权</td>\n                                    <td class="ctv-value">{{authorization.TenantName}}</td>\n                                </tr>\n                                <tr>\n                                    <td class="ctv-header">授权UUID</td>\n                                    <td class="ctv-value">{{authorization.AuthzUUID}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid ">\n    <div class="ui row pageHeader">\n        <div class="left floated left aligned eight wide column">\n            <div class="content pageTitle">授权配置</div>\n        </div>\n        <div class="right aligned eight wide column">\n\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建授权\n            </button>\n\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui basic segment" [ngClass]="{loading: showLoader}">\n\n                <ctv-search *ngIf="authorizations.length > 0" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n                <ctv-table #tableRef [defaultSortColumn]="\'PrincipalName\'"\n                           [items]="authorizations"\n                           (filtereditems)="filteredauth=$event;"\n                           [size]="12">\n                    <thead>\n                    <tr>\n                        <th><ctv-th [sortfield]="\'PrincipalName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">用户名</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'Role\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">角色</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'TenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户名称</ctv-th></th>\n                        <th><ctv-th [sortfield]="\'Local\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">Local</ctv-th></th>\n                    </tr>\n                    </thead>\n\n                    <tbody *ngIf="authorizations.length > 0">\n                    <tr *ngFor="let auth of filteredauth">\n                        <td><a [routerLink]="[\'../details\',auth.AuthzUUID]">{{auth.PrincipalName}}</a></td>\n                        <td>{{auth.Role}}</td>\n                        <td>{{auth.TenantName}}</td>\n                        <td>{{(auth.Local?\'yes\':\'no\')}}</td>\n                    </tr>\n                    </tbody>\n\n                    <tbody *ngIf="authorizations.length == 0">\n                    <tr class="noDataFound">\n                        <td colspan="4">No authorizations found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                    </tr>\n                    </tbody>\n\n                    <tbody *ngIf="(authorizations.length > 0) && !tableRef.count">\n                    <tr class="noDataFound">\n                        <td colspan="4">No records matched your filter criteria.</td>\n                    </tr>\n                    </tbody>\n\n                    <tfoot>\n                    <tr class="pagination">\n                        <td colspan="4">\n                            <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                             (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                             (prevChunk)="tableRef.showPrevChunk()"\n                                             (nextChunk)="tableRef.showNextChunk()">\n                            </ctv-tpagination>\n                        </td>\n                    </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment">\n    <div class="ui active inverted dimmer" *ngIf="showLoader">\n        <div class="ui loader"></div>\n    </div>\n\n    <div><h4 class="ui header">全局网络情况统计</h4></div>\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">子网总数量</td>\n            <td class="ctv-value">{{globalInspectStats.numNetworks}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">使用中的Vlan</td>\n            <td class="ctv-value">{{globalInspectStats.vlansInUse}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">使用中的Vxlan</td>\n            <td class="ctv-value">{{globalInspectStats.vxlansInUse}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">FreeVxlan起始</td>\n            <td class="ctv-value">{{globalInspectStats.freeVXLANsStart}}</td>\n        </tr>\n        <tr>\n            <td class="ctv-header">默认网络</td>\n            <td class="ctv-value">{{globalInspectStats.defaultNetwork}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <ctv-collapsible [title]="\'网络全局设置\'">\n        <networksettingcomp [firstRunWiz]="false" (updateNetDef)="updateNetworkSettings($event)" [setting]="setting"></networksettingcomp>\n    </ctv-collapsible>\n\n    <ctv-collapsible [title]="\'ACI Settings\'" *verifydom="\'aci\'">\n        <acisettingcomp [firstRunWiz]="false" (updateAciDef)="updateAciSetting($event)" [setting]="aciSetting" [disabled]="false"></acisettingcomp>\n    </ctv-collapsible>\n\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建BGP节点</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form"\n                  (submit)="createNode(formRef.valid)" novalidate #formRef="ngForm">\n\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n                    <div class="ui sixteen column grid">\n                        <div class="ui row" style="margin-bottom: 20px;">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: newHostname.errors?.required && formRef.submitted}">\n                                    <label for="newHostname">主机名称</label>\n                                    <input type="text" id="newHostname" name="newHostname"\n                                           [(ngModel)]="newNode[\'hostname\']"\n                                           placeholder="输入主机名称" required #newHostname="ngModel">\n                                    <span class="inlineError" *ngIf="newHostname.errors?.required && formRef.submitted">\n                                        <i>Host name</i> is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <h4 class="ui header">BGP设置</h4>\n\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: newRouterIP.errors?.required && formRef.submitted}">\n                                    <label for="newRouterIP">Router IP</label>\n                                    <input type="text" id="newRouterIP" name="newRouterIP"\n                                           [(ngModel)]="newNode[\'routerip\']"\n                                           placeholder="输入RouterIP" required #newRouterIP="ngModel">\n                                    <span class="inlineError" *ngIf="newRouterIP.errors?.required && formRef.submitted">\n                                        <i>Router IP</i> is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: newAS.errors?.required && formRef.submitted}">\n                                    <label for="newAS">AutonomousSystem</label>\n                                    <input type="text" id="newAS" name="newAS"\n                                           [(ngModel)]="newNode[\'as\']"\n                                           placeholder="输入AutonomousSystem号"\n                                           required\n                                           #newAS="ngModel">\n                                    <span class="inlineError" *ngIf="newAS.errors?.required && formRef.submitted">\n                                        <i>AutonomousSystem</i> value is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="newNeighborIP">Neighbor IP</label>\n                                    <input type="text" id="newNeighborIP" name="newNeighborIP"\n                                           [(ngModel)]="newNode[\'neighbor\']"\n                                           placeholder="输入NeighborIP">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="newNeighborAS">Neighbor AutonomousSystem</label>\n                                    <input type="text" id="newNeighborAS" name="newNeighborAS"\n                                           [(ngModel)]="newNode[\'neighbor-as\']"\n                                           placeholder="输入Neighbor AutonomousSystem号">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="right aligned six wide column">\n                                <div class="buttonRow">\n                                    <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                        取消\n                                    </button>\n                                    <button type="submit" class="ui primary button">\n                                        创建\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div [ngSwitch]="mode" class="ui sixteen column grid">\n    <div class="left aligned eight wide column">\n        <div class="content pageTitle">\n            <span>{{node.hostname}}</span>\n        </div>\n    </div>\n    <div class="right aligned eight wide column" *ngSwitchCase="\'details\'">\n        <button class="ui basic button"\n                (click)="cancelDetails()">\n            关闭\n        </button>\n        <button class="ui secondary button"\n                (click)="editNode()">\n            编辑\n        </button>\n        <button class="ui secondary button" onclick="$(\'#delete-node-modal\').modal(\'show\')">\n            <i class="trash icon"></i>\n            移除\n        </button>\n    </div>\n\n    <div id="delete-node-modal" class="ui small modal">\n        <div class="header">删除</div>\n        <div class="content">\n            <p>Are you sure you want to delete the node <q>{{node.hostname}}</q>?</p>\n        </div>\n        <div class="actions">\n            <div class="ui basic deny button modalBtn">取消</div>\n            <div class="ui primary approve button modalBtn" (click)="deleteNode()">\n                删除\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui tabular menu" *ngIf="mode==\'details\'">\n                <a class="item" [ngClass]="{active: infoselected}" (click)="infoselected=true">\n                    详细信息\n                </a>\n                <a class="item" [ngClass]="{active: !infoselected}" (click)="infoselected=false">\n                    情况统计\n                </a>\n            </div>\n\n            <nodeinfo *ngIf="infoselected" [mode]="mode"></nodeinfo>\n\n            <nodestats *ngIf="!infoselected" [statkey]="statskey"></nodestats>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui basic segment">\n    <div class="ui active inverted dimmer" *ngIf="showLoader">\n        <div class="ui loader"></div>\n    </div>\n\n    <table>\n        <tbody>\n        <tr>\n            <td class="ctv-header">主机名称</td>\n            <td class="ctv-value">{{node.hostname}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div [ngSwitch]="mode">\n        <form class="ui form"\n              role="form"\n              (submit)="saveNode(formRef.valid)" novalidate #formRef="ngForm">\n\n            <ctv-collapsible title="BGP设置" [collapsed]="false">\n\n                <div *ngSwitchCase="\'edit\'">\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n                            <div class="six wide column field">\n                                <div *ngIf="formRef.submitted">\n                                    <div [hidden]="formRef.valid" class="ui negative message">\n                                        <ul class="list">\n                                            <li *ngIf="routerIP.errors?.required">\n                                                Enter router IP\n                                            </li>\n                                            <li *ngIf="AS.errors?.required">\n                                                输入AutonomousSystem号\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field">\n                                    <label for="routerIP">Router IP</label>\n                                    <input type="text" id="routerIP" name="routerIP"\n                                           [(ngModel)]="node[\'routerip\']"\n                                           placeholder="Enter router IP" required #routerIP="ngModel">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field">\n                                    <label for="AS">AutonomousSystem</label>\n                                    <input type="text" id="AS" name="AS"\n                                           [(ngModel)]="node[\'as\']"\n                                           placeholder="输入AutonomousSystem号"\n                                           required #AS="ngModel">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field">\n                                    <label for="neighborIP">Neighbor IP</label>\n                                    <input type="text" id="neighborIP" name="neighborIP"\n                                           [(ngModel)]="node[\'neighbor\']"\n                                           placeholder="输入NeighborIP">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="left aligned six wide column">\n                                <div class="field">\n                                    <label for="neighborAS">Neighbor AutonomousSystem</label>\n                                    <input type="text" id="neighborAS" name="neighborAS"\n                                           [(ngModel)]="node[\'neighbor-as\']"\n                                           placeholder="输入Neighbor AutonomousSystem号">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngSwitchCase="\'details\'">\n                    <table class="ui very basic selectable table">\n                        <tbody>\n                        <tr>\n                            <td class="ctv-header four wide column key">Router IP</td>\n                            <td class="value">{{node[\'routerip\']}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header four wide column key">AutonomousSystem</td>\n                            <td class="value">{{node[\'as\']}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header four wide column key">Neighbor IP</td>\n                            <td class="value">{{node[\'neighbor\']}}</td>\n                        </tr>\n                        <tr>\n                            <td class="ctv-header four wide column key">Neighbor AutonomousSystem</td>\n                            <td class="value">{{node[\'neighbor-as\']}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </ctv-collapsible>\n\n            <div *ngSwitchCase="\'edit\'" class="ui grid" style="margin-top: 40px">\n                <div class="ui row">\n                    <div class="right aligned six wide column">\n                        <button type="button" class="ui basic button"\n                                (click)="cancelEditing()">\n                            取消\n                        </button>\n                        <button type="submit" class="ui primary button">\n                            保存\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">BGP节点</div>\n        </div>\n\n        <div class="right aligned eight wide column">\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建BGP节点\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <ctv-search *ngIf="nodes" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n            <div class="ui basic segment ctvTable">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n                <ctv-table #tableRef [defaultSortColumn]="\'hostname\'"\n                           [items]="nodes"\n                           (filtereditems)="filterednodes=$event"\n                           [size]="12">\n                    <thead>\n                        <tr>\n                            <th><ctv-th [sortfield]="\'hostname\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">主机名称</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'routerip\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">Router IP</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'as\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">AutonomousSystem</ctv-th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody *ngIf="nodes">\n                        <tr *ngFor="let node of nodes">\n                            <td><a [routerLink]="[\'../details\', node.key]">{{node.hostname}}</a></td>\n                            <td>{{node.routerip}}</td>\n                            <td>{{node.as}}</td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="!nodes">\n                        <tr class="noDataFound">\n                            <td colspan="3">No nodes found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="nodes && !tableRef.count">\n                        <tr class="noDataFound">\n                            <td colspan="3">No records matched your filter criteria.</td>\n                        </tr>\n                    </tbody>\n\n                    <tfoot>\n                        <tr class="pagination">\n                            <td colspan="4">\n                                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                                 (prevChunk)="tableRef.showPrevChunk()"\n                                                 (nextChunk)="tableRef.showNextChunk()">\n                                </ctv-tpagination>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '\n    <div class="ui basic segment" [ngClass]="{loading: showLoader}">\n        <div>\n            <h4 class="ui header">BGP Neighbors</h4>\n            <table class="ui very basic table">\n                <thead>\n                <tr>\n                    <th>Neighbor IP</th>\n                    <th>Admin Status</th>\n                    <th>Neighbor Status</th>\n                    <th>Number of Routes</th>\n                </tr>\n                </thead>\n                <tbody *ngIf="inspect.Config[\'neighbor\']">\n                <tr>\n                    <!-- neighbor -->\n                    <td>{{inspect.Config[\'neighbor\']}}</td>\n\n                    <!-- admin status -->\n                    <td *ngIf="inspect.Oper.adminStatus ===\n                            \'ADMIN_STATE_UP\'"><i class="green up icon"></i>Up\n                    </td>\n                    <td *ngIf="inspect.Oper.adminStatus ===\n                            \'ADMIN_STATE_DOWN\'">Down\n                    </td>\n\n                    <!-- neighbor status -->\n                    <td *ngIf="inspect.Oper.neighborStatus === \'BGP_FSM_IDLE\'">\n                        <i class="red ban icon"></i>Idle\n                    </td>\n                    <td *ngIf="inspect.Oper.neighborStatus === \'BGP_FSM_CONNECT\'">\n                        <i class="red ban icon"></i>Connect\n                    </td>\n                    <td *ngIf="inspect.Oper.neighborStatus === \'BGP_FSM_ACTIVE\'">\n                        <i class="red ban icon"></i>Active\n                    </td>\n                    <td *ngIf="inspect.Oper.neighborStatus === \'BGP_FSM_OPENSENT\'">\n                        <i class="red ban icon"></i>Open sent\n                    </td>\n                    <td *ngIf="inspect.Oper.neighborStatus === \'BGP_FSM_OPENCONFIRM\'">\n                        <i class="red ban icon"></i>Open confirm\n                    </td>\n                    <td *ngIf="inspect.Oper.neighborStatus ===\'BGP_FSM_ESTABLISHED\'">\n                        <i class="green check icon"></i>Established\n                    </td>\n\n                    <!-- number of routes -->\n                    <td>{{inspect.Oper.numRoutes}}</td>\n                </tr>\n                </tbody>\n\n                <tbody *ngIf="!inspect.Config[\'neighbor\']">\n                <tr class="noDataFound"><td colspan="4">No BGP neighbors found.</td></tr>\n                </tbody>\n\n            </table>\n\n            <div style="float:right">\n                <ctv-search (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);"\n                                     placeholder="Search routes..." size="30"></ctv-search>\n            </div>\n\n            <h4 class="ui header">BGP Routes</h4>\n\n            <ctv-table #tableRef [defaultSortColumn]="\'route\'"\n                       [items]="routes"\n                       (filtereditems)="filteredroutes=$event">\n                <thead>\n                <tr>\n                    <th>\n                        <ctv-th [sortfield]="\'routes\'" (sortdata)="tableRef.applysort($event)"\n                                [sortobject]="tableRef.sortObj">IP\n                        </ctv-th>\n                    </th>\n                    <th>\n                        <ctv-th>Next Hop</ctv-th>\n                    </th>\n                    <th>\n                        <ctv-th>Age</ctv-th>\n                    </th>\n                    <th>\n                        <ctv-th>Attributes</ctv-th>\n                    </th>\n                </tr>\n                </thead>\n\n                <tbody *ngIf="routes.length">\n                    <tr *ngFor="let route of filteredroutes">\n                        <td>{{route}}</td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="!routes.length">\n                    <tr class="noDataFound">\n                        <td colspan="4">No routes found.</td>\n                    </tr>\n                </tbody>\n\n                <tbody *ngIf="routes.length && !filteredroutes.length">\n                    <tr class="noDataFound">\n                        <td colspan="4">No records matched your filter criteria.</td>\n                    </tr>\n                </tbody>\n\n                <tfoot>\n                <tr class="pagination">\n                    <td colspan="4">\n                        <ctv-tpagination colspan="5" [chunks]="tableRef.pageChunks"\n                                         (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                         (prevChunk)="tableRef.showPrevChunk()"\n                                         (nextChunk)="tableRef.showNextChunk()"></ctv-tpagination>\n                    </td>\n                </tr>\n                </tfoot>\n            </ctv-table>\n        </div>\n    </div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\r\n    <div class="ui row pageHeader">\r\n        <div class="left aligned eight wide column">\r\n            <div class="content pageTitle">全局设置</div>\r\n        </div>\r\n        <div class="right aligned eight wide column">&nbsp;</div>\r\n    </div>\r\n    <div class="ui row breadcrumbRow">\r\n        <div class="ui sixteen wide column">\r\n            <div class="breadcrumbs"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="ui row" style="margin-bottom: 30px;">\r\n        <div class="ui sixteen wide column">\r\n\r\n            <div class="ui tabular menu">\r\n                <a class="item" [routerLink]="[\'organizations\']" routerLinkActive="active">\r\n                    租户管理\r\n                </a>\r\n                <a class="item" [routerLink]="[\'users\']" routerLinkActive="active">\r\n                    用户管理\r\n                </a>\r\n                <a class="item" [routerLink]="[\'authorization\']" routerLinkActive="active">\r\n                    授权配置\r\n                </a>\r\n                <a class="item" [routerLink]="[\'nodes\']" routerLinkActive="active">\r\n                    BGP配置\r\n                </a>\r\n                <a class="item" [routerLink]="[\'networks\']" routerLinkActive="active">\r\n                    网络全局设置\r\n                </a>\r\n                <a class="item" [routerLink]="[\'ldap\']" routerLinkActive="active">\r\n                    LDAP设置\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class="ui row">\r\n        <div class="ui sixteen wide column">\r\n\r\n            <router-outlet></router-outlet>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader" *ngIf="displayType === DisplayType.component">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">创建租户</div>\n        </div>\n        <div class="right aligned eight wide column">&nbsp;</div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n            <div class="description">Create a tenant by name. You can assign users into tenancies under Settings > Authorizations. </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui left aligned sixteen wide column">\n            <tenantcreate [displayType]="DisplayType.component" (created)="returnToOrganizations()" (canceled)="cancelCreating()"></tenantcreate>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{organizationDetailsCtrl.organization.tenantName}}</div>\n        </div>\n        <div class="right aligned eight wide column">\n            <button class="ui basic button" (click)="close()">\n                关闭\n            </button>\n            <button class="ui secondary button" onclick="$(\'#delete-organization-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="right aligned three wide column">\n                <div id="delete-organization-modal" class="ui small modal">\n                    <div class="header">删除</div>\n                    <div class="content">\n                        <p>Are you sure you want to delete the tenant <q>{{organizationDetailsCtrl.organization.tenantName}}</q>?</p>\n                    </div>\n                    <div class="actions">\n                        <div class="ui basic deny button modalBtn">取消</div>\n                        <div class="ui primary approve button modalBtn" (click)="organizationDetailsCtrl.deleteOrganization()">\n                            删除\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="ui basic segment">\n                <div class="ui active inverted dimmer" *ngIf="organizationDetailsCtrl.showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ctvTable">\n                    <table>\n                        <tbody>\n                        <tr>\n                            <td class="ctv-header">名称</td>\n                            <td class="ctv-value">{{organizationDetailsCtrl.organization.tenantName}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned nine wide column">\n            <div class="content pageTitle" style="display: inline-block">\n                租户\n            </div>\n            <tooltip>租户是云网平台最高级别的组织。你需要先创建租户，然后再创建子网。一个用户可以管理多个租户，用户只能查看和使用其所管理的租户内资源。</tooltip>\n        </div>\n        <div class="right aligned seven wide column">\n            <button class="ui primary button" (click)="create()" *verifydom="\'admin\'">\n                <i class="add icon"></i>\n                创建租户\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <ctv-search *ngIf="organizationsListCtrl.organizations" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n            <div class="ui basic segment ctvTable">\n                <div class="ui active inverted dimmer" *ngIf="organizationsListCtrl.showLoader">\n                    <div class="ui loader"></div>\n                </div>\n                <ctv-table #tableRef [defaultSortColumn]="\'tenantName\'"\n                           [items]="organizationsListCtrl.organizations"\n                           (filtereditems)="organizationsListCtrl.filteredorganizations=$event"\n                           [size]="12">\n                    <thead>\n                        <tr>\n                            <th><ctv-th [sortfield]="\'tenantName\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">租户名称</ctv-th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody *ngIf="organizationsListCtrl.organizations">\n                        <tr *ngFor="let organization of organizationsListCtrl.filteredorganizations">\n                            <td><a [routerLink]="[\'../details\', organization.key]">{{organization.tenantName}}</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="!organizationsListCtrl.organizations">\n                        <tr class="noDataFound">\n                            <td>No tenants found. Would you like to <a href="javascript: void(0);" (click)="create()">create one?</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="organizationsListCtrl.organizations && !tableRef.count">\n                        <tr class="noDataFound"><td>No records matched your filter criteria.</td></tr>\n                    </tbody>\n\n                    <tfoot>\n                        <tr class="pagination">\n                            <td>\n                                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                                 (prevChunk)="tableRef.showPrevChunk()"\n                                                 (nextChunk)="tableRef.showNextChunk()">\n                                </ctv-tpagination>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n    <div class="ui row pageHeader">\n        <div class="left aligned sixteen wide column">\n            <div class="content pageTitle" style="display: inline-block">创建用户</div>\n            <tooltip>Create user accounts here. You can assign users into tenancies, and define their role, under Settings > Authorizations.</tooltip>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <form class="ui form" role="form"\n                  (submit)="createUser(formRef.valid)" novalidate #formRef="ngForm">\n\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <div class="ui basic segment">\n\n                    <div class="ui sixteen column grid">\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: (newUserName.errors?.required || newUserName.errors?.pattern) && formRef.submitted}">\n                                    <label for="newUserName">用户名</label>\n                                    <input type="text" id="newUserName" name="newUserName"\n                                           [(ngModel)]="newUser.username"\n                                           [pattern]="username_regex"\n                                           placeholder="输入用户名" required #newUserName="ngModel">\n                                    <span class="inlineError" *ngIf="newUserName.errors?.required && formRef.submitted">\n                                        Please enter user name\n                                    </span>\n                                    <span class="inlineError" *ngIf="newUserName.errors?.pattern && formRef.submitted">\n                                        Invalid username format\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field" [ngClass]="{error: newUserPassword.errors?.required && formRef.submitted}">\n                                    <label for="newUserPassword">密  码</label>\n                                    <input type="password" id="newUserPassword" name="newUserPassword"\n                                           [(ngModel)]="newUser.password"\n                                           placeholder="输入密码" required #newUserPassword="ngModel">\n                                    <span class="inlineError" *ngIf="newUserPassword.errors?.required && formRef.submitted">\n                                        Please enter user password\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class="ui row">\n\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="newFirstName">First Name</label>\n                                    <input type="text" id="newFirstName" name="newFirstName"\n                                           [(ngModel)]="newUser.first_name"\n                                           placeholder="输入FirstName" #newFirstName="ngModel">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="ui row">\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="newLastName">Last Name</label>\n                                    <input type="text" id="newLastName" name="newLastName"\n                                           [(ngModel)]="newUser.last_name"\n                                           placeholder="输入LastName"  #newLastName="ngModel">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class="ui row">\n\n                            <div class="ui six wide column">\n                                <div class="field">\n                                    <label for="newUserDisabled">&nbsp;<br>\n                                    <input type="checkbox" id="newUserDisabled" name="newUserDisabled" tabindex="0" class="alignLabel"\n                                               [(ngModel)]="newUser.disable">\n                                        Disabled\n                                    </label>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class="ui row">\n                            <div class="right aligned six wide column buttonRow">\n\n                                <button type="button" class="ui basic button" (click)="cancelCreating()">\n                                    取消\n                                </button>\n                                <button type="submit" class="ui primary button">\n                                    创建\n                                </button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n         </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid pageHeader" [ngSwitch]="mode">\n\n    <div class="ui row">\n        <div class="left aligned eight wide column">\n            <div class="content pageTitle">{{username}}</div>\n        </div>\n        <div class="right aligned eight wide column" *ngSwitchCase="\'details\'">\n\n            <button *ngSwitchCase="\'details\'" class="ui basic button"\n                    (click)="cancelDetails()">\n                关闭\n            </button>\n            <button  class="ui secondary button"\n                    (click)="editUser()">\n                编辑\n            </button>\n            <button class="ui button"\n                    [ngClass]="{disabled: isRootAdmin || isLoggedInUser, secondary: !isRootAdmin && !isLoggedInUser}"\n                    style="height: 30px; font-size: 13px; padding: 0 24px;"\n                    onclick="$(\'#delete-user-modal\').modal(\'show\')">\n                <i class="trash icon"></i>\n                移除\n            </button>\n\n        </div>\n    </div>\n\n    <div id="delete-user-modal" class="ui small modal" *ngSwitchCase="\'details\'">\n        <div class="header">移除用户: {{username}}\n        </div>\n        <div class="content">\n            <p>Are you sure you want to remove this user?</p>\n        </div>\n        <div class="actions">\n            <div class="ui negative button">No</div>\n            <div class="ui positive button" (click)="deleteUser()">\n                是\n            </div>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <div class="ui basic segment" *ngSwitchCase="\'details\'">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n                <div *ngIf="isRootAdmin" class="description">不允许删除平台内置admin用户。</div>\n                <table>\n                    <tbody>\n                    <tr>\n                        <td class="ctv-header">用户名</td>\n                        <td class="ctv-value">{{user.username}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">First Name</td>\n                        <td class="ctv-value">{{user.first_name}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">Last Name</td>\n                        <td class="ctv-value">{{user.last_name}}</td>\n                    </tr>\n                    <tr>\n                        <td class="ctv-header">Disabled</td>\n                        <td class="ctv-value">{{user.disable?\'Yes\':\'No\'}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngSwitchCase="\'edit\'">\n                <userprofileedit [username]="username" (close)="returnToUserDetails()" [displayType]="ProfileDisplayType.component"></userprofileedit>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(e, t) {
    e.exports = '<div class="ui sixteen column grid">\n\n\n    <div class="ui row pageHeader">\n   <div class="left floated left aligned eight wide column">\n           <div class="content pageTitle">用户管理</div>\n        </div>\n     <div class="right aligned sixteen wide column">\n            <button class="ui primary button" (click)="create()">\n                <i class="add icon"></i>\n                创建用户\n            </button>\n        </div>\n    </div>\n\n    <div class="ui row">\n        <div class="ui sixteen wide column">\n\n            <ctv-search *ngIf="users" (searchTextChange)="tableRef.showChunk(tableRef.table.pageNo,$event);" [count]="tableRef.count"></ctv-search>\n\n            <div class="ui basic segment ctvTable">\n                <div class="ui active inverted dimmer" *ngIf="showLoader">\n                    <div class="ui loader"></div>\n                </div>\n\n                <ctv-table #tableRef [defaultSortColumn]="\'username\'"\n                           [items]="users"\n                           (filtereditems)="filteredusers=$event"\n                           [size]="12">\n                    <thead>\n                        <tr>\n                            <th><ctv-th [sortfield]="\'username\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">用户名</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'first_name\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">First Name</ctv-th></th>\n                            <th><ctv-th [sortfield]="\'last_name\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">Last Name</ctv-th></th>\n                   <th><ctv-th [sortfield]="\'disable_status\'" (sortdata)="tableRef.applysort($event)" [sortobject]="tableRef.sortObj">状态</ctv-th></th>\n                     </tr>\n                    </thead>\n\n                    <tbody *ngIf="users">\n                        <tr *ngFor="let user of filteredusers">\n                            <td><a [routerLink]="[\'../details\', user.username]">{{user.username}}</a></td>\n                            <td>{{user.first_name}}</td>\n                            <td>{{user.last_name}}</td>\n                                 <td>{{user.disable?\'禁用\':\'正常\'}}</td>\n                           </tr>\n                    </tbody>\n\n                    <tbody *ngIf="!users">\n                        <tr class="noDataFound">\n                            <td colspan="3">没有这个用户，你想创建一个<a href="javascript: void(0);" (click)="create()">用户吗？</a></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf="users && !tableRef.count">\n                        <tr class="noDataFound">\n                            <td colspan="3">No records matched your filter criteria.</td>\n                        </tr>\n                    </tbody>\n\n                    <tfoot>\n                        <tr class="pagination">\n                            <td colspan="3">\n                                <ctv-tpagination [chunks]="tableRef.pageChunks"\n                                                 (showPage)="tableRef.showChunk($event, tableRef.table.searchText)"\n                                                 (prevChunk)="tableRef.showPrevChunk()"\n                                                 (nextChunk)="tableRef.showNextChunk()">\n                                </ctv-tpagination>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </ctv-table>\n            </div>\n\n        </div>\n    </div>\n</div>\n'
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = "#slider{width:92%}span{font-weight:700;padding-left:5px;padding-right:5px;padding-bottom:8px;font-size:15px}"
}, function(e, t) {
    e.exports = ".ui.small.message.notify{z-index:4000;position:fixed;display:block;padding-top:25px;background:#5d5d5d;padding-left:0;padding-right:40px;opacity:1;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;box-shadow:0 0 20px #e0e0e0;width:360px}.ui.container{padding-left:20px;padding-right:10px;padding-bottom:10px}.notificationHeader,.notificationText{font-size:13px;color:#fff}.notificationText{font-weight:300;line-height:18px}.close.icon{color:#fff;padding-right:20px}.notifyIcon{position:relative;padding-top:4px;top:15%;font-size:2.3em}.toast_confirm.icon{color:#00c905}.toast_warning.icon{color:#f4b400}.toast_info.icon{color:#008fce}.backgroundIcon{position:absolute;border-radius:50%;width:30px;height:30px;z-index:-1;display:block;left:1.5%;top:-15%;background-color:#fff}"
}, function(e, t) {
    e.exports = '.tooltip{display:inline;position:relative;top:-6px;left:8px}.tooltip:hover span{opacity:1;visibility:visible}i.toast_info{color:#008fce;font-size:1.5em;width:16px;height:16px;cursor:pointer}.tooltipInfo{left:36px;top:-42px;background-color:#008fce;opacity:0;transition:opacity .45s ease-in-out;position:absolute;z-index:5000;color:#fff;font-size:12px;border-radius:8px;visibility:hidden}.tooltipInfo:after{content:"";position:absolute;top:31px;left:-22px;border-width:12px;border-style:solid;border-color:transparent #008fce transparent transparent;z-index:5000}'
}, function(e, t) {
    e.exports = "tbody tr{cursor:pointer}tbody tr.notSelected:hover{background-color:#f0f8ff}.selected,.selected:hover{background-color:#4d7198;color:#fff}.notSelected{background:none}.graphTable{width:80%}.kpi a.ui.fluid.card{background-color:#e0e0e0;border:1px solid #e8e8e8;box-shadow:none}.kpi a.ui.fluid.card:hover{transform:none;box-shadow:0 0 12px rgba(32,32,32,.2)}.kpiHeader{font-size:.9rem;color:#036e97;text-align:center;white-space:nowrap}.kpiValue{font-weight:300;font-size:40px;color:#036e97;margin:20px}"
}, function(e, t) {
    e.exports = '.ui.grid{margin-bottom:30px}.steps-container{width:122%;margin-left:-12%}.progressbar{counter-reset:step}.progressbar li{list-style-type:none;float:left;width:25%;position:relative;text-align:center}.progressbar li:before{content:counter(step);counter-increment:step;width:30px;height:30px;line-height:30px;border:1px solid #ddd;display:block;text-align:center;margin:0 auto 10px;border-radius:50%;background-color:#d3d3d3}.progressbar li:after{content:"";position:absolute;width:100%;height:1px;background-color:#ddd;top:15px;left:-50%;z-index:-1}.progressbar li:first-child:after{content:none}.progressbar li.active{color:#fff}.progressbar li.active:before{border-color:#1e90ff;background-color:#1e90ff}.progressbar li.completed+li:after{background-color:#1e90ff}.progressbar li span{font-size:13px;color:#a5a5a5}.progressbar li.completed:before{content:"\\E92D";color:#1e90ff;background-color:#fff;border-color:#1e90ff;font-family:Icons}:host /deep/ .content span{font-size:26px;color:#48494d}';
}, function(e, t) {
    e.exports = ".copyright{max-width:450px}.login-seg{margin-top:600px}.logo{width:96px!important;height:96px!important;display:inline!important}.productname{font-size:2rem!important;font-weight:300;color:#0c5093}.supportTooltipText{color:#000}.supportTooltip{top:10px;display:inline-block;position:relative}"
}, function(e, t) {
    e.exports = ".logout{width:50%;margin-top:100px}.productname{font-size:2rem!important;font-weight:300;color:#0c5093}.logo{width:96px!important;height:96px!important;display:inline!important}.column.text{font-weight:300!important;padding-top:15px!important;font-size:14px!important}"
}, function(e, t) {
    e.exports = ".utilnav{position:absolute!important;right:1%!important;top:9px!important}.menu.profile{width:180px!important;top:27px!important;left:-130px!important}.logo{display:inline!important;margin-right:20px!important;width:36px!important;height:36px!important}.productname{font-weight:300!important;font-size:2rem!important;color:#0c5093!important;left:-15px!important;position:relative!important;top:5px!important}"
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}]);
//# sourceMappingURL=main.map

