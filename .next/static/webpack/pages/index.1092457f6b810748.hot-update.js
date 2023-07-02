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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst NavigationBar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isMobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const MenuItem = (param)=>/*#__PURE__*/ {\n        let { href , children  } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: href,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(router.pathname === href ? \"text-white\" : \"text-gray-500 hover:text-white\", \" px-3 py-2 rounded-md text-sm font-medium\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/consulting\",\n                            children: \"Consulting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/repair-service\",\n                            children: \"Repair Service\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/new-projects\",\n                            children: \"New Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/tools\",\n                            children: \"Tools\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-mr-2 flex md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none\",\n                    \"aria-controls\": \"mobile-menu\",\n                    \"aria-expanded\": \"false\",\n                    onClick: ()=>setMobileMenuOpen(!isMobileMenuOpen),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"block h-12 w-12\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: 2,\n                            d: \"M4 6h16M4 12h16M4 18h16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, undefined),\n            isMobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                id: \"mobile-menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-2 pt-2 pb-3 space-y-1 sm:px-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/consulting\",\n                            children: \"Consulting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/repair-service\",\n                            children: \"Repair Service\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/new-projects\",\n                            children: \"New Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n                            href: \"/tools\",\n                            children: \"Tools\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/NavigationBar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationBar, \"FNpsvwcvTeT22lkF7PlWzG+ZwVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmlnYXRpb25CYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNXO0FBQ1A7QUFFakMsTUFBTUcsZ0JBQWdCLElBQU07O0lBQzFCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLGtCQUFrQkMsa0JBQWtCLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUQsTUFBTUssV0FBVyx1QkFDZjtZQURnQixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRTtlQUNsQyw4REFBQ1Qsa0RBQUlBO1lBQUNRLE1BQU1BO3NCQUNWLDRFQUFDRTtnQkFDQ0MsV0FBVyxHQUlWLE9BSENQLE9BQU9RLFFBQVEsS0FBS0osT0FDaEIsZUFDQSxnQ0FBZ0MsRUFDckM7MEJBRUFDOzs7Ozs7Ozs7OztJQUVDO0lBR1IscUJBQ0UsOERBQUNJO1FBQUlGLFdBQVU7OzBCQUdULDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSjs0QkFBU0MsTUFBSztzQ0FBYzs7Ozs7O3NDQUM3Qiw4REFBQ0Q7NEJBQVNDLE1BQUs7c0NBQWtCOzs7Ozs7c0NBQ2pDLDhEQUFDRDs0QkFBU0MsTUFBSztzQ0FBZ0I7Ozs7OztzQ0FDL0IsOERBQUNEOzRCQUFTQyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUVYLDRFQUFDRztvQkFDQ0MsTUFBSztvQkFDTEosV0FBVTtvQkFDVkssaUJBQWM7b0JBQ2RDLGlCQUFjO29CQUNkQyxTQUFTLElBQU1aLGtCQUFrQixDQUFDRDs4QkFHbEMsNEVBQUNjO3dCQUNDUixXQUFVO3dCQUNWUyxPQUFNO3dCQUNOQyxNQUFLO3dCQUNMQyxTQUFRO3dCQUNSQyxRQUFPO3dCQUNQQyxlQUFZO2tDQUVaLDRFQUFDQzs0QkFDQ0MsZUFBYzs0QkFDZEMsZ0JBQWU7NEJBQ2ZDLGFBQWE7NEJBQ2JDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFmeEIsa0NBQ0MsOERBQUNLO2dCQUFJQyxXQUFVO2dCQUFZbUIsSUFBRzswQkFDNUIsNEVBQUNwQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNKOzRCQUFTQyxNQUFLO3NDQUFjOzs7Ozs7c0NBQzdCLDhEQUFDRDs0QkFBU0MsTUFBSztzQ0FBa0I7Ozs7OztzQ0FDakMsOERBQUNEOzRCQUFTQyxNQUFLO3NDQUFnQjs7Ozs7O3NDQUMvQiw4REFBQ0Q7NEJBQVNDLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDO0dBeEVNTDs7UUFDV0Ysa0RBQVNBOzs7S0FEcEJFO0FBMEVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci50c3g/NTg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IE1lbnVJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZlxuICAgICAgICAgICAgPyAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgIDogJ3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgfSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtYH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMFwiPlxuICAgICAgXG4gICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvY29uc3VsdGluZ1wiPkNvbnN1bHRpbmc8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gaHJlZj1cIi9yZXBhaXItc2VydmljZVwiPlJlcGFpciBTZXJ2aWNlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvbmV3LXByb2plY3RzXCI+TmV3IFByb2plY3RzPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvdG9vbHNcIj5Ub29sczwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC0xMiB3LTEyXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIFxuICAgICAge2lzTW9iaWxlTWVudU9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiIGlkPVwibW9iaWxlLW1lbnVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMSBzbTpweC0zXCI+XG4gICAgICAgICAgICA8TWVudUl0ZW0gaHJlZj1cIi9jb25zdWx0aW5nXCI+Q29uc3VsdGluZzwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gaHJlZj1cIi9yZXBhaXItc2VydmljZVwiPlJlcGFpciBTZXJ2aWNlPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBocmVmPVwiL25ldy1wcm9qZWN0c1wiPk5ldyBQcm9qZWN0czwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gaHJlZj1cIi90b29sc1wiPlRvb2xzPC9NZW51SXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uQmFyIiwicm91dGVyIiwiaXNNb2JpbGVNZW51T3BlbiIsInNldE1vYmlsZU1lbnVPcGVuIiwiTWVudUl0ZW0iLCJocmVmIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJwYXRobmFtZSIsIm5hdiIsImJ1dHRvbiIsInR5cGUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/NavigationBar.tsx\n"));

/***/ })

});