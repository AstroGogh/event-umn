"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[category]",{

/***/ "./components/events.js":
/*!******************************!*\
  !*** ./components/events.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Events; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masonry */ \"./components/masonry.js\");\n/* harmony import */ var _eventCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventCard */ \"./components/eventCard.js\");\n\n\n\n\nfunction Events(param) {\n    var events = param.events;\n    var _this = this;\n    console.log(\"Length\", events.length);\n    var eventList = events.map(function(event, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_eventCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            event: event\n        }, index, false, {\n            fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\events.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: events.size == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Center, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                children: \"Sorry! No data available\"\n            }, void 0, false, {\n                fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\events.js\",\n                lineNumber: 19,\n                columnNumber: 27\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\events.js\",\n            lineNumber: 19,\n            columnNumber: 19\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_masonry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: eventList\n        }, void 0, false, {\n            fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\events.js\",\n            lineNumber: 20,\n            columnNumber: 19\n        }, this)\n    }, void 0, false);\n};\n_c = Events;\nvar _c;\n$RefreshReg$(_c, \"Events\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNkO0FBQ0k7QUFFckIsU0FBU0ksTUFBTSxDQUFDLEtBQVUsRUFBRTtRQUFaLE1BQVEsR0FBUixLQUFVLENBQVJDLE1BQU07O0lBRW5DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDO0lBQ3BDLElBQU1DLFNBQVMsR0FBR0osTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7UUFDM0MscUJBQ0ksOERBQUNULGtEQUFTO1lBQUNRLEtBQUssRUFBRUEsS0FBSztXQUFPQyxLQUFLOzs7O2lCQUFJLENBQzFDO0tBQ0osQ0FBQztJQUlGLHFCQUNJO2tCQUNLUCxNQUFNLENBQUNRLElBQUksSUFBSSxDQUFDLGlCQUNYLDhEQUFDYixpREFBTTtzQkFBQyw0RUFBQ0MsZ0RBQUs7MEJBQUMsMEJBQXdCOzs7OztvQkFBUTs7Ozs7Z0JBQVMsaUJBQ3hELDhEQUFDQyxnREFBTztzQkFBRU8sU0FBUzs7Ozs7Z0JBQVc7cUJBRXJDLENBQ0w7Q0FDTDtBQW5CdUJMLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMuanM/NDdkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIFRpdGxlIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuaW1wb3J0IE1hc29ucnkgZnJvbSBcIi4vbWFzb25yeVwiO1xyXG5pbXBvcnQgRXZlbnRDYXJkIGZyb20gXCIuL2V2ZW50Q2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzKHsgZXZlbnRzIH0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkxlbmd0aFwiLCBldmVudHMubGVuZ3RoKVxyXG4gICAgY29uc3QgZXZlbnRMaXN0ID0gZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEV2ZW50Q2FyZCBldmVudD17ZXZlbnR9IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2V2ZW50cy5zaXplID09IDBcclxuICAgICAgICAgICAgICAgID8gPENlbnRlcj48VGl0bGU+U29ycnkhIE5vIGRhdGEgYXZhaWxhYmxlPC9UaXRsZT48L0NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDogPE1hc29ucnk+e2V2ZW50TGlzdH08L01hc29ucnk+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQ2VudGVyIiwiVGl0bGUiLCJNYXNvbnJ5IiwiRXZlbnRDYXJkIiwiRXZlbnRzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImV2ZW50TGlzdCIsIm1hcCIsImV2ZW50IiwiaW5kZXgiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/events.js\n"));

/***/ })

});