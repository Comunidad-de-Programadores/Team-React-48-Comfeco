"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var theme_tools_1 = require("@chakra-ui/theme-tools");
var client_1 = require("next-auth/client");
require("../utils/style.css");
// 2. Update the breakpoints as key-value pairs
var breakpoints = theme_tools_1.createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px"
});
var colors = {
    bg: {
        100: "linear-gradient(269.78deg,rgba(255, 255, 255, 0.7) -1.82%,rgba(245, 245, 245, 0.7) -1.81%,rgba(247, 248, 248, 0.7) 100.67%), url('/images/bg.jpg')",
        200: " linear-gradient(269.78deg, rgba(0, 0, 0, 0.25) -1.82%, rgba(143, 53, 182, 0.698) -1.81%, rgba(68, 97, 241, 0.698) 100.67%), url('/images/bg.jpg')",
        300: "#ffff",
        400: "#2222"
    },
    gradiant: {
        10: "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)"
    },
    text: {
        100: "#793E93",
        200: "#4460F1",
        300: "#555",
        400: "#fff"
    },
    btn: {
        100: "#A486AE",
        200: "#78428a"
    }
};
// 3. Extend the theme
var theme = react_2.extendTheme({ breakpoints: breakpoints, colors: colors });
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(client_1.Provider, { session: pageProps.session },
        React.createElement(react_1.ChakraProvider, { theme: theme },
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;
