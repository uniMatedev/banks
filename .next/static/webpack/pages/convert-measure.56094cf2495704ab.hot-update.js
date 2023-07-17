"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/convert-measure",{

/***/ "./pages/components/LengthConverter.tsx":
/*!**********************************************!*\
  !*** ./pages/components/LengthConverter.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst apiUrl = \"https://agile-chamber-63259-f06a567fe59d.herokuapp.com/api/\";\nconst LengthConverter = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [unit, setUnit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"meters\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [converted, setConverted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleConvert = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await fetch(apiUrl + \"convert/length/\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    value: String(value),\n                    unit\n                })\n            });\n            const data = await response.json();\n            setConverted(data);\n        } catch (error) {\n            setError(error.message);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto p-4\",\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4\",\n                role: \"alert\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"block text-gray-700 font-bold mb-2\",\n                htmlFor: \"value\",\n                children: \"Value\"\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"value\",\n                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                type: \"number\",\n                value: value,\n                onChange: (e)=>setValue(e.target.value ? +e.target.value : null)\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"block text-gray-700 font-bold mb-2\",\n                htmlFor: \"unit\",\n                children: \"Unit\"\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"unit\",\n                className: \"form-select block w-full mt-1\",\n                value: unit,\n                onChange: (e)=>setUnit(e.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"meters\",\n                        children: \"Meters\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"feet\",\n                        children: \"Feet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"inches\",\n                        children: \"Inches\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"miles\",\n                        children: \"Miles\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"kilometers\",\n                        children: \"Kilometers\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"millimeters\",\n                        children: \"Millimeters\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"centimeters\",\n                        children: \"Centimeters\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"nautical miles\",\n                        children: \"Nautical Miles\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"yards\",\n                        children: \"Yards\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading,\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4\",\n                onClick: handleConvert,\n                children: loading ? \"Converting...\" : \"Convert\"\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 px-4 py-6 bg-gray-100 rounded-lg\",\n                children: Object.keys(converted).map((unit)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: [\n                                    unit,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: converted[unit]\n                            }, void 0, false, {\n                                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, unit, true, {\n                        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 5\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachbanks/Documents/GitHub/banks/pages/components/LengthConverter.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LengthConverter, \"s3A88lKILt8DFaDwOn6uN4OJjWQ=\");\n_c = LengthConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LengthConverter);\nvar _c;\n$RefreshReg$(_c, \"LengthConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RmJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU2Q7R0E5Rk1IO0tBQUFBO0FBZ0dOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTGVuZ3RoQ29udmVydGVyLnRzeD9hYzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMXG5jb25zdCBMZW5ndGhDb252ZXJ0ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoXCJtZXRlcnNcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnZlcnRlZCwgc2V0Q29udmVydGVkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDb252ZXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwgKyAnY29udmVydC9sZW5ndGgvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHZhbHVlOiBTdHJpbmcodmFsdWUpLFxuICAgICAgICAgIHVuaXQgIFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHNldENvbnZlcnRlZChkYXRhKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIHAtNFwiPlxuXG4gICAgICB7ZXJyb3IgJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCBib3JkZXIgYm9yZGVyLXJlZC00MDAgdGV4dC1yZWQtNzAwIHB4LTQgcHktMyByb3VuZGVkIG1iLTRcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJ2YWx1ZVwiPlxuICAgICAgICBWYWx1ZVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwidmFsdWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiICBcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgPyArZS50YXJnZXQudmFsdWUgOiBudWxsKX1cblxuICAgICAgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidW5pdFwiPlxuICAgICAgICBVbml0XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwidW5pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGJsb2NrIHctZnVsbCBtdC0xXCJcbiAgICAgICAgdmFsdWU9e3VuaXR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVuaXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0ZXJzXCI+TWV0ZXJzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWV0XCI+RmVldDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW5jaGVzXCI+SW5jaGVzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaWxlc1wiPk1pbGVzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJraWxvbWV0ZXJzXCI+S2lsb21ldGVyczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWlsbGltZXRlcnNcIj5NaWxsaW1ldGVyczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGltZXRlcnNcIj5DZW50aW1ldGVyczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmF1dGljYWwgbWlsZXNcIj5OYXV0aWNhbCBNaWxlczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWFyZHNcIj5ZYXJkczwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG10LTRcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb252ZXJ0fSAgXG4gICAgICA+XG4gICAgICAgIHtsb2FkaW5nID8gJ0NvbnZlcnRpbmcuLi4nIDogJ0NvbnZlcnQnfVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBweC00IHB5LTYgYmctZ3JheS0xMDAgcm91bmRlZC1sZ1wiPlxuICB7T2JqZWN0LmtleXMoY29udmVydGVkKS5tYXAodW5pdCA9PiAoXG4gICAgPGRpdiBrZXk9e3VuaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPnt1bml0fTo8L2Rpdj5cbiAgICAgIDxkaXY+e2NvbnZlcnRlZFt1bml0XX08L2Rpdj4gIFxuICAgIDwvZGl2PlxuICApKX1cbjwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aENvbnZlcnRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwaVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTGVuZ3RoQ29udmVydGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVuaXQiLCJzZXRVbml0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb252ZXJ0ZWQiLCJzZXRDb252ZXJ0ZWQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ29udmVydCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsImRhdGEiLCJqc29uIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIk9iamVjdCIsImtleXMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/LengthConverter.tsx\n"));

/***/ })

});