"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/headers.js":
/*!*******************************!*\
  !*** ./components/headers.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\nvar NAVBAR_HEIGHT = 60;\nvar useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)(function(theme) {\n    return {\n        inner: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            height: NAVBAR_HEIGHT\n        },\n        anchor: {\n            textDecoration: \"none\",\n            color: theme.colorScheme == \"dark\" ? \"white\" : \"black\",\n            fontWeight: \"bold\"\n        }\n    };\n});\nfunction Headers(param) {\n    var categories = param.categories;\n    var _this = this;\n    _s();\n    var classes = useStyles().classes;\n    var categoryArr = categories.map(function(category, index) {\n        console.log(\"Category:\", category);\n        var _attributes = category.attributes, title = _attributes.title, slug = _attributes.slug;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: classes.anchor,\n            href: \"/\".concat(slug),\n            children: title\n        }, index, false, {\n            fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\headers.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Header, {\n        height: NAVBAR_HEIGHT,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {\n            className: classes.inner,\n            px: 0,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    size: \"xl\",\n                    weight: \"bolder\",\n                    children: \"EventUMN\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\headers.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    spacing: \"lg\",\n                    children: categoryArr\n                }, void 0, false, {\n                    fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\headers.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\headers.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WEB\\\\practice\\\\EventUMN\\\\frontend\\\\components\\\\headers.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Headers, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Headers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Headers);\nvar _c;\n$RefreshReg$(_c, \"Headers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUFvRjtBQUVwRixJQUFNTSxhQUFhLEdBQUcsRUFBRTtBQUN4QixJQUFNQyxTQUFTLEdBQUdKLDJEQUFZLENBQUMsU0FBQ0ssS0FBSztXQUFNO1FBQ3ZDQyxLQUFLLEVBQUU7WUFDSEMsT0FBTyxFQUFFLE1BQU07WUFDZkMsVUFBVSxFQUFFLFFBQVE7WUFDcEJDLGNBQWMsRUFBRSxlQUFlO1lBQy9CQyxNQUFNLEVBQUVQLGFBQWE7U0FDeEI7UUFDRFEsTUFBTSxFQUFFO1lBQ0pDLGNBQWMsRUFBRSxNQUFNO1lBQ3RCQyxLQUFLLEVBQUVSLEtBQUssQ0FBQ1MsV0FBVyxJQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTztZQUN0REMsVUFBVSxFQUFFLE1BQU07U0FFckI7S0FDSjtDQUFDLENBQUM7QUFHSCxTQUFTQyxPQUFPLENBQUMsS0FBWSxFQUFFO1FBQWQsVUFBVyxHQUFYLEtBQVksQ0FBWEMsVUFBVTs7O0lBQ3hCLElBQU0sT0FBUyxHQUFLYixTQUFTLEVBQUUsQ0FBdkJjLE9BQU87SUFFZixJQUFNQyxXQUFXLEdBQUdGLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFLO1FBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVILFFBQVEsQ0FBQyxDQUFDO1FBRW5DLElBQXNCQSxXQUFtQixHQUFuQkEsUUFBUSxDQUFDSSxVQUFVLEVBQWxDQyxLQUFLLEdBQVVMLFdBQW1CLENBQWxDSyxLQUFLLEVBQUVDLElBQUksR0FBSU4sV0FBbUIsQ0FBM0JNLElBQUk7UUFDbEIscUJBQ0ksOERBQUNDLEdBQUM7WUFDRUMsU0FBUyxFQUFFWCxPQUFPLENBQUNQLE1BQU07WUFDekJtQixJQUFJLEVBQUUsR0FBRSxDQUFPLE9BQUxILElBQUksQ0FBRTtzQkFHZkQsS0FBSztXQUZESixLQUFLOzs7O2lCQUdWLENBQ1A7S0FDSixDQUFDO0lBRUYscUJBQ0ksOERBQUN6QixpREFBTTtRQUFDYSxNQUFNLEVBQUVQLGFBQWE7a0JBQ3pCLDRFQUFDRCxvREFBUztZQUFDMkIsU0FBUyxFQUFFWCxPQUFPLENBQUNaLEtBQUs7WUFBRXlCLEVBQUUsRUFBRSxDQUFDOzs4QkFDdEMsOERBQUM5QiwrQ0FBSTtvQkFBQytCLElBQUksRUFBRSxJQUFJO29CQUFFQyxNQUFNLEVBQUUsUUFBUTs4QkFBRSxVQUFROzs7Ozt3QkFBTzs4QkFDbkQsOERBQUNuQyxnREFBSztvQkFBQ29DLE9BQU8sRUFBRSxJQUFJOzhCQUNmZixXQUFXOzs7Ozt3QkFDUjs7Ozs7O2dCQUNBOzs7OztZQUNQLENBQ1g7Q0FDTDtHQTVCUUgsT0FBTzs7UUFDUVosU0FBUzs7O0FBRHhCWSxLQUFBQSxPQUFPO0FBOEJoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVycy5qcz82MGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciwgR3JvdXAsIEltYWdlLCBjcmVhdGVTdHlsZXMsIFRleHQsIENvbnRhaW5lciB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcblxyXG5jb25zdCBOQVZCQVJfSEVJR0hUID0gNjBcclxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGlubmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgaGVpZ2h0OiBOQVZCQVJfSEVJR0hULFxyXG4gICAgfSxcclxuICAgIGFuY2hvcjoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09ICdkYXJrJyA/ICd3aGl0ZScgOiAnYmxhY2snLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KSlcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXJzKHtjYXRlZ29yaWVzfSkge1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUFyciA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhdGVnb3J5OlwiLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge3RpdGxlLCBzbHVnfSA9IGNhdGVnb3J5LmF0dHJpYnV0ZXNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2hvcn1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtzbHVnfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWRlciBoZWlnaHQ9e05BVkJBUl9IRUlHSFR9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0gcHg9ezB9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc2l6ZT17J3hsJ30gd2VpZ2h0PXsnYm9sZGVyJ30+RXZlbnRVTU48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8R3JvdXAgc3BhY2luZz17J2xnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyfVxyXG4gICAgICAgICAgICAgICAgPC9Hcm91cD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJzOyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJHcm91cCIsIkltYWdlIiwiY3JlYXRlU3R5bGVzIiwiVGV4dCIsIkNvbnRhaW5lciIsIk5BVkJBUl9IRUlHSFQiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImlubmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImFuY2hvciIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvclNjaGVtZSIsImZvbnRXZWlnaHQiLCJIZWFkZXJzIiwiY2F0ZWdvcmllcyIsImNsYXNzZXMiLCJjYXRlZ29yeUFyciIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsInRpdGxlIiwic2x1ZyIsImEiLCJjbGFzc05hbWUiLCJocmVmIiwicHgiLCJzaXplIiwid2VpZ2h0Iiwic3BhY2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/headers.js\n"));

/***/ })

});