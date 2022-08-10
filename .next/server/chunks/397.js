exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 9026:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comments_comments__BOjM6"
};


/***/ }),

/***/ 8990:
/***/ ((module) => {

// Exports
module.exports = {
	"mdxContainer": "mdx_mdxContainer__meVY9",
	"cssModules": "mdx_cssModules__5Q9Ai",
	"styledComponents": "mdx_styledComponents__tpLMQ"
};


/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _giscus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8965);
/* harmony import */ var _giscus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_giscus_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_comments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9026);
/* harmony import */ var _styles_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_comments_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6682);




const Comments = ()=>{
    const { theme  } = (0,_hooks_useToggleTheme__WEBPACK_IMPORTED_MODULE_2__/* .useToggleTheme */ .I)();
    const isLightMode = theme === "light";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_comments_module_css__WEBPACK_IMPORTED_MODULE_3___default().comments),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_giscus_react__WEBPACK_IMPORTED_MODULE_1___default()), {
            repo: "mustafamertgoksu/my-blog",
            repoId: "R_kgDOHzAtew",
            category: "General",
            categoryId: "DIC_kwDOHzAte84CQuhn",
            mapping: "pathname",
            reactionsEnabled: "0",
            emitMetadata: "0",
            theme: "dark"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ }),

/***/ 8003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ToggleTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ToggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 6682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useToggleTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_toggleTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8003);


function useToggleTheme() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_toggleTheme__WEBPACK_IMPORTED_MODULE_1__/* .ToggleTheme */ .R);
}


/***/ })

};
;