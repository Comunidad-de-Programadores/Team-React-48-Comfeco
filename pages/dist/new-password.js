"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../components/Layout");
var RecoverPassword_1 = require("../components/recover/RecoverPassword");
function NewPassword(_a) {
    return (react_1["default"].createElement(Layout_1["default"], { title: "Login" },
        react_1["default"].createElement(RecoverPassword_1["default"], { title: "Crea tu Nueva Contrase\u00F1a", description: "Sigue las instrucciones para crear una contrase\u00F1a segura.", type: "newpassword", img: "/images/Security-cuate.png" })));
}
exports["default"] = NewPassword;
