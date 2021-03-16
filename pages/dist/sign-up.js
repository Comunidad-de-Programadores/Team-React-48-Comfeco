"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../components/Layout");
var gr_1 = require("react-icons/gr");
var react_2 = require("@chakra-ui/react");
var usePasswordToggle_1 = require("../hooks/usePasswordToggle");
var useValidation_1 = require("../hooks/useValidation");
var signupValidator_1 = require("../utils/validators/signupValidator");
function SignUp(_a) {
    var _this = this;
    var _b = usePasswordToggle_1["default"](), inputTypePassword = _b.inputType, IconPassword = _b.Icon;
    var _c = usePasswordToggle_1["default"](), inputTypeConfirmPassword = _c.inputType, IconConfirmPassword = _c.Icon;
    var _d = react_1.useState(null), apiError = _d[0], setApiError = _d[1];
    var _e = react_1.useState(false), registerSuccess = _e[0], setregisterSuccess = _e[1];
    var initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    var register = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/users", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (data.code === 201) {
                        setregisterSuccess(true);
                        setApiError(null);
                        return [2 /*return*/];
                    }
                    setApiError(data === null || data === void 0 ? void 0 : data.error);
                    setregisterSuccess(false);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setApiError(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var _f = useValidation_1["default"](initialState, signupValidator_1["default"], register), values = _f.values, errors = _f.errors, handleChange = _f.handleChange, handleSubmit = _f.handleSubmit;
    var username = values.username, email = values.email, password = values.password, confirmPassword = values.confirmPassword;
    return (react_1["default"].createElement(Layout_1["default"], { title: "Registro" },
        react_1["default"].createElement(react_2.Box, { display: "flex" },
            react_1["default"].createElement(react_2.Box, { display: "flex", height: "100vh", flexDirection: "column", width: "55%", paddingTop: "6em", textAlign: "center", alignItems: "center" },
                react_1["default"].createElement(react_2.Text, { fontSize: "3rem", color: "#555555" }, "Bienvenido a bordo"),
                react_1["default"].createElement(react_2.FormControl, { width: "100%", marginTop: "2rem" },
                    react_1["default"].createElement("form", { onSubmit: handleSubmit },
                        react_1["default"].createElement(react_2.InputGroup, { width: "80%", margin: "0 auto", display: "flex", flexDirection: "row" },
                            react_1["default"].createElement(react_2.Box
                            // display="flex"
                            , { 
                                // display="flex"
                                margin: "0.5rem 1rem", width: "100%", position: "relative" },
                                react_1["default"].createElement(react_2.Input, { variant: "filled", type: "text", id: "username", placeholder: "Nombre de usuario", name: "username", width: "100%", padding: "1rem", borderRadius: "10px", height: "5rem", value: username, onChange: handleChange }),
                                errors.username && react_1["default"].createElement(react_2.Text, { color: "red" }, errors.username)),
                            react_1["default"].createElement(react_2.Box
                            // display="flex"
                            , { 
                                // display="flex"
                                margin: "0.5rem 1rem", width: "100%", position: "relative" },
                                react_1["default"].createElement(react_2.Input, { variant: "filled", type: "text", id: "email", placeholder: "Correo eletronico", name: "email", width: "100%", padding: "1rem", borderRadius: "10px", height: "5rem", value: email, onChange: handleChange }),
                                errors.email && react_1["default"].createElement(react_2.Text, { color: "red" }, errors.email))),
                        react_1["default"].createElement(react_2.InputGroup, { width: "80%", margin: "0 auto", display: "flex", flexDirection: "row" },
                            react_1["default"].createElement(react_2.Box
                            // display="flex"
                            , { 
                                // display="flex"
                                margin: "1rem 1rem", width: "100%", position: "relative" },
                                react_1["default"].createElement(react_2.Input, { variant: "filled", type: inputTypePassword, id: "password", placeholder: "Contrase\u00F1a", name: "password", width: "100%", padding: "1rem", borderRadius: "10px", height: "5rem", value: password, onChange: handleChange }),
                                react_1["default"].createElement(react_2.InputRightElement, { width: "1.5rem", position: "absolute", 
                                    // top="calc(50% - 20px)"
                                    top: "1.2rem", left: "calc(90% - 6px)", cursor: "pointer", children: IconPassword }),
                                errors.password && react_1["default"].createElement(react_2.Text, { color: "red" }, errors.password)),
                            react_1["default"].createElement(react_2.Box
                            // display="flex"
                            , { 
                                // display="flex"
                                margin: "1rem 1rem", width: "100%", position: "relative" },
                                react_1["default"].createElement(react_2.Input, { variant: "filled", type: inputTypeConfirmPassword, id: "confirmPassword", placeholder: "Confirmar contrase\u00F1a", name: "confirmPassword", width: "100%", padding: "1rem", borderRadius: "10px", height: "5rem", values: confirmPassword, onChange: handleChange }),
                                react_1["default"].createElement(react_2.InputRightElement, { width: "1.5rem", position: "absolute", 
                                    // top="calc(50% - 20px)"
                                    top: "1.2rem", left: "calc(90% - 6px)", cursor: "pointer", children: IconConfirmPassword }),
                                errors.confirmPassword && react_1["default"].createElement(react_2.Text, { color: "red" }, errors.confirmPassword))),
                        apiError && react_1["default"].createElement(react_2.Text, { color: "red" }, apiError),
                        registerSuccess && react_1["default"].createElement(react_2.Text, { color: "green" }, "Register successful!"),
                        react_1["default"].createElement(react_2.Box, { textAlign: "center", marginTop: "1.5rem" },
                            react_1["default"].createElement(react_2.Button, { type: "submit", background: "linear-gradient(90deg,\n                rgba(82, 30, 135, 0.8) 0.01%,\n                rgba(91, 29, 136, 0.8) 14.55%,\n                rgba(117, 26, 138, 0.8) 38.82%,\n                rgba(138, 23, 140, 0.8) 54.92%,\n                rgba(142, 28, 134, 0.8) 56.27%,\n                rgba(195, 109, 66, 0.8) 77.54%,\n                rgba(228, 160, 23, 0.8) 92.6%,\n                rgba(241, 178, 6, 0.8) 99.98%)", _hover: {
                                    background: "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
                                    color: "#fafafa"
                                }, width: "50%", height: "5rem", padding: "1rem 0", borderRadius: "10px", color: "white", fontSize: "30px" }, "Registrarse")))),
                react_1["default"].createElement(react_2.Box, { width: "50%" },
                    react_1["default"].createElement(react_2.Box, { position: "relative", mt: "2em", height: "2rem" },
                        react_1["default"].createElement("hr", { style: {
                                position: "absolute",
                                top: "50%",
                                zIndex: 1,
                                borderTopWidth: "2px",
                                borderColor: "#E1E2E7",
                                width: "100%"
                            } }),
                        react_1["default"].createElement(react_2.Text, { fontSize: "16px", position: "absolute", top: "calc(50% - 28px)", padding: "1rem", right: "calc(50% - 73px)", zIndex: "2", backgroundColor: "#F3F2F3", color: "#85898D" }, "O continua")),
                    react_1["default"].createElement(react_2.Box, { display: "flex", justifyContent: "space-around", mt: "2rem" },
                        react_1["default"].createElement(react_2.Box, { width: "100px", height: "80px", backgroundColor: "white", borderRadius: "1.5em", padding: "1.5em", display: "flex", justifyContent: "center", alignItems: "center" },
                            react_1["default"].createElement(gr_1.GrGoogle, { size: "medium" })),
                        react_1["default"].createElement(react_2.Text, null, "con"),
                        react_1["default"].createElement(react_2.Box, { width: "100px", height: "80px", padding: "1.5em", backgroundColor: "white", borderRadius: "1.5em", display: "flex", justifyContent: "center", alignItems: "center" },
                            react_1["default"].createElement(gr_1.GrFacebook, { size: "small" }))))),
            react_1["default"].createElement(react_2.Box, { height: "100vh", width: "45%", marginTop: "5rem" },
                react_1["default"].createElement(react_2.Image, { src: "/images/registro.png", alt: "Sign up", width: "90%", transform: "scaleX(-1)" })))));
}
exports["default"] = SignUp;
