! function(e, t) { if ("function" == typeof define && define.amd) define("hoverintent", ["module"], t);
    else if ("undefined" != typeof exports) t(module);
    else { var n = { exports: {} };
        t(n), e.hoverintent = n.exports } }(this, function(e) { "use strict"; var t = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e };
    e.exports = function(e, n, o) {
        function i(e, t) { return y && (y = clearTimeout(y)), b = 0, p ? void 0 : o.call(e, t) }

        function r(e) { m = e.clientX, d = e.clientY }

        function u(e, t) { if (y && (y = clearTimeout(y)), Math.abs(h - m) + Math.abs(E - d) < x.sensitivity) return b = 1, p ? void 0 : n.call(e, t);
            h = m, E = d, y = setTimeout(function() { u(e, t) }, x.interval) }

        function s(t) { return L = !0, y && (y = clearTimeout(y)), e.removeEventListener("mousemove", r, !1), 1 !== b && (h = t.clientX, E = t.clientY, e.addEventListener("mousemove", r, !1), y = setTimeout(function() { u(e, t) }, x.interval)), this }

        function c(t) { return L = !1, y && (y = clearTimeout(y)), e.removeEventListener("mousemove", r, !1), 1 === b && (y = setTimeout(function() { i(e, t) }, x.timeout)), this }

        function v(t) { L || (p = !0, n.call(e, t)) }

        function a(t) {!L && p && (p = !1, o.call(e, t)) }

        function f() { e.addEventListener("focus", v, !1), e.addEventListener("blur", a, !1) }

        function l() { e.removeEventListener("focus", v, !1), e.removeEventListener("blur", a, !1) } var m, d, h, E, L = !1,
            p = !1,
            T = {},
            b = 0,
            y = 0,
            x = { sensitivity: 7, interval: 100, timeout: 0, handleFocus: !1 }; return T.options = function(e) { var n = e.handleFocus !== x.handleFocus; return x = t({}, x, e), n && (x.handleFocus ? f() : l()), T }, T.remove = function() { e && (e.removeEventListener("mouseover", s, !1), e.removeEventListener("mouseout", c, !1), l()) }, e && (e.addEventListener("mouseover", s, !1), e.addEventListener("mouseout", c, !1)), T } });