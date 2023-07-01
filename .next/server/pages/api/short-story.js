"use strict";
(() => {
var exports = {};
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 3118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: reviewPrompt(req.body.product),
        max_tokens: 150,
        temperature: 0.8,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0
    });
    res.status(200).json({
        result: completion.data.choices[0].text
    });
}
function reviewPrompt(productName) {
    return `Topic: Breakfast
  Two-Sentence Horror Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.
      
  Topic: ${productName}
  Two-Sentence Horror Story:`;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(355));
module.exports = __webpack_exports__;

})();