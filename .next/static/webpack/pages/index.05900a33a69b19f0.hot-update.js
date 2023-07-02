"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/NavigationBar.tsx":
/*!********************************************!*\
  !*** ./pages/components/NavigationBar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst NavigationBar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const MenuItem = (param)=>/*#__PURE__*/ {\n        let { href , children  } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: href,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(router.pathname === href ? \"text-white\" : \"text-gray-500 hover:text-white\", \" px-3 py-2 rounded-md text-sm font-medium\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between h-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-10 flex items-baseline space-x-4 justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                                        href: \"/consulting\",\n                                        children: \"Consulting\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                                        href: \"/repair-service\",\n                                        children: \"Repair Service\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                                        href: \"/new-projects\",\n                                        children: \"New Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                                        href: \"/tools\",\n                                        children: \"Tools\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"-mr-2 flex md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none\",\n                                \"aria-controls\": \"mobile-menu\",\n                                \"aria-expanded\": \"false\",\n                                onClick: ()=>setMobileMenuOpen(!isMobileMenuOpen),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Open main menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"block h-6 w-6\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        stroke: \"currentColor\",\n                                        \"aria-hidden\": \"true\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: 2,\n                                            d: \"M4 6h16M4 12h16M4 18h16\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            isMobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                id: \"mobile-menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-2 pt-2 pb-3 space-y-1 sm:px-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/consulting\",\n                            children: \"Consulting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/repair-service\",\n                            children: \"Repair Service\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/new-projects\",\n                            children: \"New Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/tools\",\n                            children: \"Tools\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationBar, \"FNpsvwcvTeT22lkF7PlWzG+ZwVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmlnYXRpb25CYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNXO0FBQ1A7QUFFakMsTUFBTUcsZ0JBQWdCLElBQU07O0lBQzFCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLGtCQUFrQkMsa0JBQWtCLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUQsTUFBTUssV0FBVyx1QkFDZjtZQURnQixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtlQUNsQyw4REFBQ1Qsa0RBQUlBO1lBQUNRLE1BQU1BO3NCQUNWLDRFQUFDRTtnQkFDQ0MsV0FBVyxHQUlWLE9BSENQLE9BQU9RLFFBQVEsS0FBS0osT0FDaEIsZUFDQSxnQ0FBZ0MsRUFDckM7MEJBRUFDOzs7Ozs7Ozs7OztJQUVDO0lBR1IscUJBQ0UsOERBQUNJO1FBQUlGLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSjt3Q0FBU0MsTUFBSztrREFBYzs7Ozs7O2tEQUM3Qiw4REFBQ0Q7d0NBQVNDLE1BQUs7a0RBQWtCOzs7Ozs7a0RBQ2pDLDhEQUFDRDt3Q0FBU0MsTUFBSztrREFBZ0I7Ozs7OztrREFDL0IsOERBQUNEO3dDQUFTQyxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNFOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FDQ0MsTUFBSztnQ0FDTEosV0FBVTtnQ0FDVkssaUJBQWM7Z0NBQ2RDLGlCQUFjO2dDQUNkQyxTQUFTLElBQU1aLGtCQUFrQixDQUFDRDs7a0RBRWxDLDhEQUFDYzt3Q0FBS1IsV0FBVTtrREFBVTs7Ozs7O2tEQUMxQiw4REFBQ1M7d0NBQ0NULFdBQVU7d0NBQ1ZVLE9BQU07d0NBQ05DLE1BQUs7d0NBQ0xDLFNBQVE7d0NBQ1JDLFFBQU87d0NBQ1BDLGVBQVk7a0RBRVosNEVBQUNDOzRDQUNDQyxlQUFjOzRDQUNkQyxnQkFBZTs0Q0FDZkMsYUFBYTs0Q0FDYkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT2J6QixrQ0FDQyw4REFBQ0s7Z0JBQUlDLFdBQVU7Z0JBQVlvQixJQUFHOzBCQUM1Qiw0RUFBQ3JCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0o7NEJBQVNDLE1BQUs7c0NBQWM7Ozs7OztzQ0FDN0IsOERBQUNEOzRCQUFTQyxNQUFLO3NDQUFrQjs7Ozs7O3NDQUNqQyw4REFBQ0Q7NEJBQVNDLE1BQUs7c0NBQWdCOzs7Ozs7c0NBQy9CLDhEQUFDRDs0QkFBU0MsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F0RU1MOztRQUNXRixrREFBU0E7OztLQURwQkU7QUF3RU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeD81ODQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2aWdhdGlvbkJhciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgTWVudUl0ZW0gPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBocmVmXG4gICAgICAgICAgICA/ICd0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgOiAndGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICB9IHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1gfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwIGZsZXggaXRlbXMtYmFzZWxpbmUgc3BhY2UteC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL2NvbnN1bHRpbmdcIj5Db25zdWx0aW5nPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvcmVwYWlyLXNlcnZpY2VcIj5SZXBhaXIgU2VydmljZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL25ldy1wcm9qZWN0c1wiPk5ldyBQcm9qZWN0czwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL3Rvb2xzXCI+VG9vbHM8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNNb2JpbGVNZW51T3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCIgaWQ9XCJtb2JpbGUtbWVudVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTNcIj5cbiAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL2NvbnN1bHRpbmdcIj5Db25zdWx0aW5nPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL3JlcGFpci1zZXJ2aWNlXCI+UmVwYWlyIFNlcnZpY2U8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvbmV3LXByb2plY3RzXCI+TmV3IFByb2plY3RzPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL3Rvb2xzXCI+VG9vbHM8L01lbnVJdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb25CYXIiLCJyb3V0ZXIiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJNZW51SXRlbSIsImhyZWYiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsInBhdGhuYW1lIiwibmF2IiwiYnV0dG9uIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwib25DbGljayIsInNwYW4iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/NavigationBar.tsx\n"));

/***/ })

});