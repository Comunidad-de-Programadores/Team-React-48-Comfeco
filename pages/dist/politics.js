"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../components/Layout");
var react_2 = require("@chakra-ui/react");
var PoliticsItem_1 = require("../components/PoliticsItem");
var politics = function (props) {
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement(react_2.Grid, { minHeight: '50vh', gridTemplateColumns: 'repeat(9, 1fr)', gridTemplateRows: '', padding: '2rem 0 0 0', margin: '0 0 2rem 0' },
            react_1["default"].createElement(react_2.GridItem, { gridColumn: '2/10', alignContent: 'bottom', display: 'flex', alignItems: 'center', margin: '2rem 0 0 0' },
                react_1["default"].createElement(react_2.Text, { as: 'h1', fontSize: '4xl', fontWeight: '700', color: '#666666' }, "Pol\u00EDticas de privacidad.")),
            react_1["default"].createElement(react_2.GridItem, { gridColumn: '3 / 8', margin: '1rem 0 0 0' },
                react_1["default"].createElement(react_2.Box, { backgroundColor: 'white', borderRadius: '10px', width: '100%', height: '100%' },
                    react_1["default"].createElement(PoliticsItem_1["default"], { firstItemBorder: '10px 10px 0 0', label: 'Primer dropdown' }),
                    react_1["default"].createElement(PoliticsItem_1["default"], { label: 'Segundo dropdown' }),
                    react_1["default"].createElement(PoliticsItem_1["default"], { label: 'Tercer dropdown', lastItemBorder: '0 0 10px 10px' }))),
            react_1["default"].createElement(react_2.GridItem, { gridColumn: '2/10', alignContent: 'bottom', display: 'flex', alignItems: 'center', margin: '2rem 0 0 0' },
                react_1["default"].createElement(react_2.Text, { as: 'h1', fontSize: '4xl', fontWeight: '700', color: '#666666' }, "Terminos y condiciones.")),
            react_1["default"].createElement(react_2.GridItem, { gridColumn: '3 / 8', margin: '1rem 0 0 0' },
                react_1["default"].createElement(react_2.Box, { backgroundColor: 'white', borderRadius: '10px', width: '100%', height: '100%' },
                    react_1["default"].createElement(PoliticsItem_1["default"], { firstItemBorder: '10px 10px 0 0', label: 'Primer dropdown' }),
                    react_1["default"].createElement(PoliticsItem_1["default"], { label: 'Segundo dropdown' }),
                    react_1["default"].createElement(PoliticsItem_1["default"], { label: 'Tercer dropdown', lastItemBorder: '0 0 10px 10px' }))))));
};
exports["default"] = politics;
