"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../components/Layout");
var dashboard_grid_1 = require("../components/dashboard-grid");
function Dashboard() {
    return (react_1["default"].createElement(Layout_1["default"], { title: "Home " },
        react_1["default"].createElement(dashboard_grid_1["default"], null)));
}
exports["default"] = Dashboard;
