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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavigationBar */ \"./pages/components/NavigationBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [testData, setTestData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"test pending\");\n    function handleClick() {\n        async function getData() {\n            const res = await fetch(\"http://localhost:8000/converter/calculate/1/1/\");\n            const data = await res.json();\n            setTestData(data[0]);\n        }\n        getData();\n        console.log(testData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"BANKS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Audiowide&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0F4D92] to-[#4E6C4E]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex flex-col items-center justify-center gap-6 px-4 py-8 md:py-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-5xl tracking-tight text-white sm:text-[5rem] text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-[#4CAF50] justify-center font-audiowide\",\n                                    children: \"BANKS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold text-white text-center mb-6\",\n                                    children: \"Commercial Doors and Glazing\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            children: \"Test\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: testData\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            alt: \"door\",\n                            src: \"/doorabstract.png\",\n                            width: 500,\n                            height: 100\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20\",\n                                    href: \"/consulting\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-2xl font-bold\",\n                                            children: \"Consulting →\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-lg\",\n                                            children: \"Get expert advice on your commercial door and glazing projects.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20\",\n                                    href: \"/repair-service\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-2xl font-bold\",\n                                            children: \"Repair Service →\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-lg\",\n                                            children: \"High-quality repairs to keep your doors and windows at their best.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20\",\n                                    href: \"/new-projects\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-2xl font-bold\",\n                                            children: \"New Projects →\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-lg\",\n                                            children: \"Collaborate with us on your new commercial doors and glazing projects.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"8oCJqdZ8tReD3AslC5QPPqZawYc=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQzZCO0FBQ0E7QUFDSDtBQUNLO0FBQ3dCO0FBQ3RCO0FBSWpDLE1BQU1NLFdBQXFCLElBQU07O0lBQy9CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxTQUFTSSxjQUFhO1FBQ3BCLGVBQWVDLFVBQVM7WUFDdEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQk4sWUFBWUssSUFBSSxDQUFDLEVBQUU7UUFDckI7UUFDQUg7UUFDQUssUUFBUUMsR0FBRyxDQUFDVDtJQUNkO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDUCxrREFBSUE7O2tDQUNILDhEQUFDaUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0UsTUFBSzt3QkFBa0VELEtBQUk7Ozs7OztrQ0FDakYsOERBQUNEO3dCQUFLRSxNQUFLO3dCQUE2RUQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUU5Riw4REFBQ0U7Z0JBQUtDLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBK0M7Ozs7Ozs4Q0FDN0QsOERBQUNHO29DQUFHSCxXQUFVOzhDQUFpRDs7Ozs7Ozs7Ozs7O3NDQUdqRSw4REFBQ0M7c0NBQ0MsNEVBQUN0QixpRUFBYUE7Ozs7Ozs7Ozs7c0NBRWhCLDhEQUFDeUI7NEJBQU9DLFNBQVNyQjtzQ0FBYTs7Ozs7O3NDQUM5Qiw4REFBQ2tCO3NDQUFJcEI7Ozs7OztzQ0FDTCw4REFBQ0osbURBQUtBOzRCQUFDNEIsS0FBSzs0QkFBUUMsS0FBSzs0QkFBcUJDLE9BQU87NEJBQUtDLFFBQVE7Ozs7OztzQ0FDbEUsOERBQUNSOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ3hCLGtEQUFJQTtvQ0FDSHdCLFdBQVU7b0NBQ1ZGLE1BQUs7O3NEQUVMLDhEQUFDWTs0Q0FBR1YsV0FBVTtzREFBcUI7Ozs7OztzREFDbkMsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUFVOzs7Ozs7Ozs7Ozs7OENBSTNCLDhEQUFDeEIsa0RBQUlBO29DQUNId0IsV0FBVTtvQ0FDVkYsTUFBSzs7c0RBRUwsOERBQUNZOzRDQUFHVixXQUFVO3NEQUFxQjs7Ozs7O3NEQUNuQyw4REFBQ0M7NENBQUlELFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs4Q0FJM0IsOERBQUN4QixrREFBSUE7b0NBQ0h3QixXQUFVO29DQUNWRixNQUFLOztzREFFTCw4REFBQ1k7NENBQUdWLFdBQVU7c0RBQXFCOzs7Ozs7c0RBQ25DLDhEQUFDQzs0Q0FBSUQsV0FBVTtzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2QztHQWxFTW5CO0tBQUFBO0FBb0VOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cblxuY29uc3QgSG9tZVBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGVzdERhdGEsIHNldFRlc3REYXRhXSA9IHVzZVN0YXRlKFwidGVzdCBwZW5kaW5nXCIpO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpe1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvY29udmVydGVyL2NhbGN1bGF0ZS8xLzEvJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldFRlc3REYXRhKGRhdGFbMF0gKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKHRlc3REYXRhKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJBTktTPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXVkaW93aWRlJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzBGNEQ5Ml0gdG8tWyM0RTZDNEVdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IHB4LTQgcHktOCBtZDpweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBzbTp0ZXh0LVs1cmVtXSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWyM0Q0FGNTBdIGp1c3RpZnktY2VudGVyIGZvbnQtYXVkaW93aWRlXCI+QkFOS1M8L2gxPiAgXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWItNlwiPkNvbW1lcmNpYWwgRG9vcnMgYW5kIEdsYXppbmc8L2gyPlxuICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtcm9ib3RvIGZvbnQtdGV4dC1baHNsKDI4MCwlLDcwJSldXCI+Q29tbWVyY2lhbCBEb29ycyBhbmQgR2xhc3M8L3NwYW4+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlRlc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8aDE+e3Rlc3REYXRhfTwvaDE+XG4gICAgICAgICAgPEltYWdlIGFsdD17XCJkb29yXCJ9IHNyYz17XCIvZG9vcmFic3RyYWN0LnBuZ1wifSB3aWR0aD17NTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBzbTpncmlkLWNvbHMtMiBtZDpnYXAtOFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy14cyBmbGV4LWNvbCBnYXAtNCByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIHAtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzIwXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0aW5nXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkNvbnN1bHRpbmcg4oaSPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgR2V0IGV4cGVydCBhZHZpY2Ugb24geW91ciBjb21tZXJjaWFsIGRvb3IgYW5kIGdsYXppbmcgcHJvamVjdHMuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy14cyBmbGV4LWNvbCBnYXAtNCByb3VuZGVkLXhsIGJnLXdoaXRlLzEwIHAtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzIwXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9yZXBhaXItc2VydmljZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5SZXBhaXIgU2VydmljZSDihpI8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICBIaWdoLXF1YWxpdHkgcmVwYWlycyB0byBrZWVwIHlvdXIgZG9vcnMgYW5kIHdpbmRvd3MgYXQgdGhlaXIgYmVzdC5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1heC13LXhzIGZsZXgtY29sIGdhcC00IHJvdW5kZWQteGwgYmctd2hpdGUvMTAgcC00IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvMjBcIlxuICAgICAgICAgICAgICBocmVmPVwiL25ldy1wcm9qZWN0c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5OZXcgUHJvamVjdHMg4oaSPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgQ29sbGFib3JhdGUgd2l0aCB1cyBvbiB5b3VyIG5ldyBjb21tZXJjaWFsIGRvb3JzIGFuZCBnbGF6aW5nIHByb2plY3RzLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJlYWN0IiwiSW1hZ2UiLCJOYXZpZ2F0aW9uQmFyIiwidXNlU3RhdGUiLCJIb21lUGFnZSIsInRlc3REYXRhIiwic2V0VGVzdERhdGEiLCJoYW5kbGVDbGljayIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});