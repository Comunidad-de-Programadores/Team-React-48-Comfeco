"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../components/Layout");
var RecoverPassword_1 = require("../components/recover/RecoverPassword");
function RecoverPassword(_a) {
    return (react_1["default"].createElement(Layout_1["default"], { title: "Login" },
        react_1["default"].createElement(RecoverPassword_1["default"], { title: "Recuperar Contrase\u00F1a", description: " Ingresa tu correo electronico y te enviaremos un link para restaurar tu contrase\u00F1a", type: "recover", img: "/images/Forgot password-bro.png" })));
}
exports["default"] = RecoverPassword;
