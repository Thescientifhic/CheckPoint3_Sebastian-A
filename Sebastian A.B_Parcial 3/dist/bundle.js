/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/Screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DashB)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n\nclass DashB extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const formI = this.ownerDocument.createElement('app-form');\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(formI);\n        }\n    }\n}\ncustomElements.define('app-dash', DashB);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Screens/dashboard.ts?");

/***/ }),

/***/ "./src/components/Form/form.ts":
/*!*************************************!*\
  !*** ./src/components/Form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeForm\": () => (/* binding */ AttributeForm),\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nvar AttributeForm;\n(function (AttributeForm) {\n    AttributeForm[\"name\"] = \"name\";\n    AttributeForm[\"color\"] = \"color\";\n    AttributeForm[\"letter\"] = \"letter\";\n})(AttributeForm || (AttributeForm = {}));\nclass Form extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            color: null,\n            letter: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propname, oldValue, newValue) {\n        switch (propname) {\n            default:\n                this[propname] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    // submitform(){\n    //     addDoc\n    // }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const sect = this.ownerDocument.createElement('section');\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sect);\n            const form = this.ownerDocument.createElement('form');\n            sect.appendChild(form);\n            const textN = this.ownerDocument.createElement('input');\n            textN.setAttribute(\"placeholder\", `Give yourself a name`);\n            textN.setAttribute(\"type\", \"text\");\n            const color = this.ownerDocument.createElement('input');\n            color.setAttribute(\"type\", \"color\");\n            const textL = this.ownerDocument.createElement('input');\n            textL.setAttribute(\"placeholder\", `Give yourself one letter`);\n            textL.setAttribute(\"type\", \"text\");\n            form.appendChild(textN);\n            form.appendChild(color);\n            form.appendChild(textL);\n            const btn = this.ownerDocument.createElement('button');\n            btn.innerText = \"Subir datos\";\n            // btn.addEventListener(this.submitform);\n        }\n    }\n}\ncustomElements.define('app-form', Form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/form.ts?");

/***/ }),

/***/ "./src/components/Grid/grid.ts":
/*!*************************************!*\
  !*** ./src/components/Grid/grid.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeG\": () => (/* binding */ AttributeG),\n/* harmony export */   \"default\": () => (/* binding */ Grid)\n/* harmony export */ });\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line */ \"./src/components/Grid/line.ts\");\n/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../export */ \"./src/components/export.ts\");\n\n\nvar AttributeG;\n(function (AttributeG) {\n    AttributeG[\"btn\"] = \"btn\";\n})(AttributeG || (AttributeG = {}));\nclass Grid extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propname, oldValue, newValue) {\n        switch (propname) {\n            default:\n                this[propname] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    // submitform(){\n    //     addDoc\n    // }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const grid = this.ownerDocument.createElement('section');\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(grid);\n            const line2 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line2);\n            const line3 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line3);\n            const line4 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line4);\n            const line5 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line5);\n            const line6 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line6);\n            const line7 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line7);\n            const line8 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line8);\n            const line9 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line9);\n            const line10 = this.ownerDocument.createElement('app-line');\n            grid.appendChild(line10);\n        }\n    }\n}\ncustomElements.define('app-grid', Grid);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Grid/grid.ts?");

/***/ }),

/***/ "./src/components/Grid/line.ts":
/*!*************************************!*\
  !*** ./src/components/Grid/line.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeLine\": () => (/* binding */ AttributeLine),\n/* harmony export */   \"default\": () => (/* binding */ Line)\n/* harmony export */ });\n/* harmony import */ var _squareB_square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../squareB/square */ \"./src/components/squareB/square.ts\");\n/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../export */ \"./src/components/export.ts\");\n\n\nvar AttributeLine;\n(function (AttributeLine) {\n    AttributeLine[\"btn\"] = \"btn\";\n})(AttributeLine || (AttributeLine = {}));\nclass Line extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propname, oldValue, newValue) {\n        switch (propname) {\n            default:\n                this[propname] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    // submitform(){\n    //     addDoc\n    // }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const line = this.ownerDocument.createElement('section');\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(line);\n            const btn2 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn2);\n            const btn3 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn3);\n            const btn4 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn4);\n            const btn5 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn5);\n            const btn6 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn6);\n            const btn7 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn7);\n            const btn8 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn8);\n            const btn9 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn9);\n            const btn10 = this.ownerDocument.createElement('app-square');\n            line.appendChild(btn10);\n        }\n    }\n}\ncustomElements.define('app-line', Line);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Grid/line.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Btn\": () => (/* reexport safe */ _squareB_square__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Form\": () => (/* reexport safe */ _Form_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Grid\": () => (/* reexport safe */ _Grid_grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Line\": () => (/* reexport safe */ _Grid_line__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form/form */ \"./src/components/Form/form.ts\");\n/* harmony import */ var _squareB_square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squareB/square */ \"./src/components/squareB/square.ts\");\n/* harmony import */ var _Grid_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/line */ \"./src/components/Grid/line.ts\");\n/* harmony import */ var _Grid_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid/grid */ \"./src/components/Grid/grid.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/squareB/square.ts":
/*!******************************************!*\
  !*** ./src/components/squareB/square.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeBtn\": () => (/* binding */ AttributeBtn),\n/* harmony export */   \"default\": () => (/* binding */ Btn)\n/* harmony export */ });\nvar AttributeBtn;\n(function (AttributeBtn) {\n    AttributeBtn[\"btn\"] = \"btn\";\n})(AttributeBtn || (AttributeBtn = {}));\nclass Btn extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propname, oldValue, newValue) {\n        switch (propname) {\n            default:\n                this[propname] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    // submitform(){\n    //     addDoc\n    // }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <button></button>\r\n        `;\n        }\n    }\n}\ncustomElements.define('app-square', Btn);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/squareB/square.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Screens_dashboard_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screens/dashboard.ts */ \"./src/Screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n        const dashBoard = this.ownerDocument.createElement('app-grid'); //app-game || app-dash\n        something.appendChild(dashBoard);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;