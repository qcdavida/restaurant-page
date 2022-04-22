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

/***/ "./src/contactModule.js":
/*!******************************!*\
  !*** ./src/contactModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent)\n/* harmony export */ });\n//This creates the content for the contact tab\n\nfunction contactContent() {\n    //create HTML elements\n    const formContainerDiv = document.createElement('div');\n    const myForm = document.createElement('form');\n    const ul = document.createElement('ul');\n    const nameLI = document.createElement('li');\n    const emailLI = document.createElement('li');\n    const msgLI = document.createElement('li');\n    const btnLI = document.createElement('li');\n\n    //create labels for the above list items\n    const nameLabel = document.createElement('label');\n    const emailLabel = document.createElement('label');\n    const msgLabel = document.createElement('label');\n\n    //set attributes for the labels\n    nameLabel.setAttribute('for', 'name');\n    emailLabel.setAttribute('for', 'mail');\n    msgLabel.setAttribute('for', 'msg');\n\n    //add text nodes to labels\n    nameLabel.textContent = \"Name:\";\n    emailLabel.textContent = \"E-mail:\";\n    msgLabel.textContent = \"Message:\";\n\n    //create input and textarea for the above list items\n    let nameInput = document.createElement('input');\n    let emailInput = document.createElement('input');\n    let msgTextArea = document.createElement('textarea');\n    let btn = document.createElement('button');\n\n    //set attributes for the inputs\n    nameInput.setAttribute('type', 'text');\n    nameInput.setAttribute('id', 'name');\n    nameInput.setAttribute('name', 'guest_name');\n\n    emailInput.setAttribute('type', 'email');\n    emailInput.setAttribute('id', 'mail');\n    emailInput.setAttribute('name', 'guest_email');\n\n    msgTextArea.setAttribute('id', 'msg');\n    msgTextArea.setAttribute('name', 'user_message');\n    msgTextArea.setAttribute('placeholder', 'Write your message...');\n\n    btn.textContent = \"Send\";\n    btn.setAttribute('type', 'submit');\n\n    //add class and id to elements\n    formContainerDiv.classList.add('form-container');\n    myForm.setAttribute('id', 'contact-form');\n    btnLI.classList.add('button');\n\n    //append the elements\n    nameLI.appendChild(nameLabel);\n    nameLI.appendChild(nameInput);\n\n    emailLI.appendChild(emailLabel);\n    emailLI.appendChild(emailInput);\n\n    msgLI.appendChild(msgLabel);\n    msgLI.appendChild(msgTextArea);\n\n    btnLI.appendChild(btn);\n\n    ul.appendChild(nameLI);\n    ul.appendChild(emailLI);\n    ul.appendChild(msgLI);\n    ul.appendChild(btnLI);\n\n    myForm.appendChild(ul);\n    formContainerDiv.appendChild(myForm);\n\n    return formContainerDiv;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactModule.js?");

/***/ }),

/***/ "./src/headerModule.js":
/*!*****************************!*\
  !*** ./src/headerModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n//This creates the header for the site\nfunction header() {\n    //create the html elements\n    const headerDiv = document.createElement('div');\n    const logoDiv = document.createElement('div');\n    const navOptionsDiv = document.createElement('div');\n    const ul = document.createElement('ul');\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n\n    //add classes to the div elements\n    headerDiv.classList.add('header');\n    logoDiv.classList.add('logo');\n    navOptionsDiv.classList.add('nav-options');\n    homeBtn.classList.add('tablink');\n    menuBtn.classList.add('tablink');\n    contactBtn.classList.add('tablink');\n\n    //add ids to buttons\n    homeBtn.setAttribute('id', 'homeTab');\n    menuBtn.setAttribute('id', 'menuTab');\n    contactBtn.setAttribute('id', 'contactTab');\n\n    //add text content to elements\n    logoDiv.textContent = \"deGoat's Stew\";\n    homeBtn.textContent = \"Home\";\n    menuBtn.textContent = \"Menu\";\n    contactBtn.textContent = \"Contact\";\n\n    //add attributes to buttons\n    homeBtn.type = \"button\";\n    menuBtn.type = \"button\";\n    contactBtn.type = \"button\";\n\n    //append the elements to the dom tree\n    ul.appendChild(homeBtn);\n    ul.appendChild(menuBtn);\n    ul.appendChild(contactBtn);\n    navOptionsDiv.appendChild(ul);\n    headerDiv.appendChild(logoDiv);\n    headerDiv.appendChild(navOptionsDiv);\n\n    return headerDiv;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/headerModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headerModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerModule */ \"./src/headerModule.js\");\n/* harmony import */ var _mainContentModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContentModule */ \"./src/mainContentModule.js\");\n/* harmony import */ var _menuModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuModule */ \"./src/menuModule.js\");\n/* harmony import */ var _contactModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactModule */ \"./src/contactModule.js\");\n\n\n\n\n\nconst contentDiv = document.getElementById('content');\nconst pathFile = \"../src/\";\n\ncontentDiv.appendChild((0,_headerModule__WEBPACK_IMPORTED_MODULE_0__.header)());\ncontentDiv.appendChild((0,_mainContentModule__WEBPACK_IMPORTED_MODULE_1__.mainContent)());\nsetEventListeners();\n\nfunction setEventListeners() {\n    const homeTab = document.getElementById('homeTab');\n    const menuTab = document.getElementById('menuTab');\n    const contactTab = document.getElementById('contactTab');\n    \n    homeTab.addEventListener('click', () => tabSwitching(_mainContentModule__WEBPACK_IMPORTED_MODULE_1__.mainContent, 'style'));\n    menuTab.addEventListener('click', () =>  tabSwitching(_menuModule__WEBPACK_IMPORTED_MODULE_2__.menuContent, 'menu-style'));\n    contactTab.addEventListener('click', () => tabSwitching(_contactModule__WEBPACK_IMPORTED_MODULE_3__.contactContent, 'contact-style'));\n}\n\nfunction tabSwitching(tabName, fileName){\n    while(contentDiv.hasChildNodes()) {\n        contentDiv.removeChild(contentDiv.firstChild);\n    }\n\n    contentDiv.appendChild((0,_headerModule__WEBPACK_IMPORTED_MODULE_0__.header)());\n    contentDiv.appendChild(tabName());\n    setEventListeners();\n    loadCSSFile(fileName);\n}\n\nfunction loadCSSFile(nameOfFile) {\n    let head = document.getElementsByTagName('head')[0];\n\n    let style = document.createElement('link');\n    style.rel = 'stylesheet';\n    style.href = pathFile + nameOfFile + '.css';\n    \n    head.append(style);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainContentModule.js":
/*!**********************************!*\
  !*** ./src/mainContentModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainContent\": () => (/* binding */ mainContent)\n/* harmony export */ });\n//This creates the main content for the home tab\nfunction mainContent() {\n    //create HTML elements\n    const mainContentDiv = document.createElement('div');\n    const heroDiv = document.createElement('div');\n    const h1 = document.createElement('h1');\n    const p = document.createElement('p');\n    const btn = document.createElement('button');\n\n    //add classes to elements\n    mainContentDiv.classList.add('main-content');\n    heroDiv.classList.add('hero');\n\n    //add id to element\n    btn.setAttribute('id', 'menu-btn');\n\n    //add text content to elements\n    h1.textContent = \"Welcome To deGoat's Stew\";\n    p.textContent = \"Stew that warms up your heart\";\n    btn.textContent = \"Menu\";\n\n    //append elements to DOM Tree\n    heroDiv.appendChild(h1);\n    heroDiv.appendChild(p);\n    heroDiv.appendChild(btn);\n    mainContentDiv.appendChild(heroDiv);\n    \n    return mainContentDiv;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainContentModule.js?");

/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\n//This creates the content for the menu tab\n\nlet cardItemDivs = []; //array for the card divs\nlet menuItemDivs = []; //array of p tags which will contain the name of the menu item\nlet menuItemPricePs = [] //array of p tages which will contain the price of the menu item\nlet dishNames = [\"Goat Stew\", \"Grilled Lamb Chops\", \"Braised Short Ribs\", \"Curry Chicken\", \"Brown Stew Snapper\", \"Jerk Pork\"];\nlet priceOfDishes = [\"$18\", \"$18\", \"$22\", \"$14\", \"$24\", \"$17\"];\n\nfunction menuContent() {\n    //create HTML elements\n    const mainContentDiv = document.createElement('div');\n    const h1 = document.createElement('h1');\n    const menuDiv = document.createElement('div');\n    const underScoreElement = document.createElement('p');\n\n    createElementArrayHelper(cardItemDivs, \"div\");\n    createElementArrayHelper(menuItemDivs, \"p\");\n    createElementArrayHelper(menuItemPricePs, \"p\");\n\n    //add classes to the elements\n    mainContentDiv.classList.add('menu-container');\n    menuDiv.classList.add('menu');\n\n    //add text content to the elements \n    h1.textContent = \"Menu\";\n    addTextContentForArray(menuItemDivs, dishNames);\n    addTextContentForArray(menuItemPricePs, priceOfDishes);\n\n    //append elements to DOM Tree\n    mainContentDiv.appendChild(h1);\n    appendElementsFromArray(cardItemDivs, menuItemDivs, menuItemPricePs, menuDiv, mainContentDiv, underScoreElement);\n\n    return mainContentDiv;\n}\n\nfunction createElementArrayHelper(elementArray, tag) {\n    for(let i = 0; i < 6; i++){\n        elementArray[i] = document.createElement(tag);\n\n        if(tag === 'div'){\n            elementArray[i].classList.add('card');\n        }\n    }\n}\n\n\nfunction addTextContentForArray(elementArray, textArray) {\n    for(let i = 0; i < elementArray.length; i++){\n        elementArray[i].textContent = textArray[i];\n    }\n}\n\nfunction appendElementsFromArray(parentNodeArray, childNodeNameArray, childNodePriceArray, menuDiv, mainParentNode, underScore) {\n    for(let i = 0; i < parentNodeArray.length; i++){\n        parentNodeArray[i].appendChild(childNodeNameArray[i]);\n        parentNodeArray[i].appendChild(underScore);\n        parentNodeArray[i].appendChild(childNodePriceArray[i]);\n        menuDiv.appendChild(parentNodeArray[i]);\n    }\n\n    mainParentNode.appendChild(menuDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuModule.js?");

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