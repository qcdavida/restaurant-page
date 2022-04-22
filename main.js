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

/***/ "./src/homePageModule.js":
/*!*******************************!*\
  !*** ./src/homePageModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"mainContent\": () => (/* binding */ mainContent)\n/* harmony export */ });\nfunction header() {\n    //create the html elements\n    const headerDiv = document.createElement('div');\n    const logoDiv = document.createElement('div');\n    const navOptionsDiv = document.createElement('div');\n    const ul = document.createElement('ul');\n    const firstLI = document.createElement('li');\n    const secondLI = document.createElement('li');\n    const thirdLI = document.createElement('li');\n\n    //add classes to the div elements\n    headerDiv.classList.add('header');\n    logoDiv.classList.add('logo');\n    navOptionsDiv.classList.add('nav-options');\n\n    //add text content to elements\n    logoDiv.textContent = \"deGoat's Stew\";\n    firstLI.textContent = \"Home\";\n    secondLI.textContent = \"Menu\";\n    thirdLI.textContent = \"Contact\";\n\n    //append the elements to the dom tree\n    ul.appendChild(firstLI);\n    ul.appendChild(secondLI);\n    ul.appendChild(thirdLI);\n    navOptionsDiv.appendChild(ul);\n    headerDiv.appendChild(logoDiv);\n    headerDiv.appendChild(navOptionsDiv);\n\n    return headerDiv;\n}\n\nfunction mainContent() {\n    //create html elements\n    const mainContentDiv = document.createElement('div');\n    const heroDiv = document.createElement('div');\n    const h1 = document.createElement('h1');\n    const p = document.createElement('p');\n    const btn = document.createElement('button');\n\n    //add classes to elements\n    mainContentDiv.classList.add('main-content');\n    heroDiv.classList.add('hero');\n\n    //add id to element\n    btn.setAttribute('id', 'menu-btn');\n\n    //add text content to elements\n    h1.textContent = \"Welcome To deGoat's Stew\";\n    p.textContent = \"Stew that warms up your heart\";\n    btn.textContent = \"Menu\";\n\n    //append elements to DOM Tree\n    heroDiv.appendChild(h1);\n    heroDiv.appendChild(p);\n    heroDiv.appendChild(btn);\n    mainContentDiv.appendChild(heroDiv);\n    \n    return mainContentDiv;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homePageModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePageModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePageModule */ \"./src/homePageModule.js\");\nconsole.log(\"Hello, testing\");\nconsole.log(\"working..\");\nconsole.log(\"importing\");\n\n\nconst contentDiv = document.getElementById('content');\n\ncontentDiv.appendChild((0,_homePageModule__WEBPACK_IMPORTED_MODULE_0__.header)());\ncontentDiv.appendChild((0,_homePageModule__WEBPACK_IMPORTED_MODULE_0__.mainContent)());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;