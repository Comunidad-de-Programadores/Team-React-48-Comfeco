"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("@chakra-ui/react");
var Layout_1 = require("../components/Layout");
var Banner_1 = require("../components/dashboard/Banner");
var Timer_1 = require("../components/landing/Timer");
var Sponsors_1 = require("../components/dashboard/Sponsors");
var Personas_1 = require("../components/dashboard/Personas");
var AboutPage = function () { return (React.createElement(Layout_1["default"], { type: true, title: "About | Next.js + TypeScript Example" },
    React.createElement("div", null,
        React.createElement(Banner_1["default"], null),
        React.createElement(Personas_1["default"], null),
        React.createElement(Sponsors_1["default"], null),
        React.createElement(react_1.Box, { bg: "#fff" },
            React.createElement(Timer_1["default"], null)),
        React.createElement("p", { style: { backgroundColor: "blue" } },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("a", null, "Go home")))))); };
exports["default"] = AboutPage;
