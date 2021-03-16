"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var Layout_1 = require("../components/Layout");
var SigninLeft_1 = require("../components/signin/SigninLeft");
var SigninRight_1 = require("../components/signin/SigninRight");
function SignIn(_a) {
    return (react_1["default"].createElement(Layout_1["default"], { title: "Login" },
        react_1["default"].createElement(react_2.Box, { d: "flex", justifyContent: "space-between", p: "2m", alignItems: "center", px: "4em" },
            react_1["default"].createElement(react_2.Box, { w: "65%" },
                react_1["default"].createElement(SigninLeft_1["default"], null)),
            react_1["default"].createElement(react_2.Box, { w: "35%" },
                react_1["default"].createElement(SigninRight_1["default"], null)))));
}
exports["default"] = SignIn;
