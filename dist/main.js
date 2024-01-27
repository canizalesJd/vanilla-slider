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

/***/ "./src/Slider.js":
/*!***********************!*\
  !*** ./src/Slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n\tconstructor(\r\n\t\tcontainer,\r\n\t\timages = [],\r\n\t\twidth,\r\n\t\theight,\r\n\t\tautoplay = true,\r\n\t\tcontrols = true,\r\n\t\tcurrentSlide = 0\r\n\t) {\r\n\t\tthis.container = container;\r\n\t\tthis.images = images;\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.autoplay = autoplay;\r\n\t\tthis.controls = controls;\r\n\t\tthis.currentSlide = currentSlide;\r\n\t\tthis.container.style.width = this.width;\r\n\t\tthis.container.style.height = this.height;\r\n\t}\r\n\r\n\tslideLeft() {\r\n\t\tthis.currentSlide =\r\n\t\t\t(this.currentSlide - 1 + this.images.length) % this.images.length;\r\n\t\tthis.updateSliderFrame();\r\n\t\t// console.log(this.currentSlide);\r\n\t}\r\n\r\n\tslideRight() {\r\n\t\tthis.currentSlide = (this.currentSlide + 1) % this.images.length;\r\n\t\tthis.updateSliderFrame();\r\n\t\t// console.log(this.currentSlide);\r\n\t}\r\n\r\n\tupdateSliderFrame() {\r\n\t\tconst translateValue = -this.currentSlide * 100;\r\n\t\tthis.sliderFrame.style.transform = `translateX(${translateValue}%)`;\r\n\t}\r\n\r\n\tcreateSlider() {\r\n\t\tthis.sliderFrame = document.createElement(\"div\");\r\n\t\tthis.sliderFrame.classList.add(\"slider-frame\");\r\n\r\n\t\tthis.controlsContainer = document.createElement(\"div\");\r\n\t\tthis.controlsContainer.classList.add(\"controls\");\r\n\t\tthis.container.appendChild(this.sliderFrame);\r\n\t\tthis.container.appendChild(this.controlsContainer);\r\n\r\n\t\tthis.leftArrow = document.createElement(\"div\");\r\n\t\tthis.leftArrow.classList.add(\"left-arrow\");\r\n\t\tthis.controlsContainer.appendChild(this.leftArrow);\r\n\t\tthis.arrowLeftButton = document.createElement(\"img\");\r\n\t\tthis.arrowLeftButton.src = \"assets/arrow-left.svg\";\r\n\t\tthis.leftArrow.appendChild(this.arrowLeftButton);\r\n\t\tthis.leftArrow.addEventListener(\"click\", () => {\r\n\t\t\tthis.slideLeft();\r\n\t\t\tthis.updateCircleButtons();\r\n\t\t});\r\n\r\n\t\tthis.rightArrow = document.createElement(\"div\");\r\n\t\tthis.rightArrow.classList.add(\"right-arrow\");\r\n\t\tthis.controlsContainer.appendChild(this.rightArrow);\r\n\t\tthis.arrowRightButton = document.createElement(\"img\");\r\n\t\tthis.arrowRightButton.src = \"assets/arrow-right.svg\";\r\n\t\tthis.rightArrow.appendChild(this.arrowRightButton);\r\n\t\tthis.rightArrow.addEventListener(\"click\", () => {\r\n\t\t\tthis.slideRight();\r\n\t\t\tthis.updateCircleButtons();\r\n\t\t});\r\n\r\n\t\tthis.circles = document.createElement(\"div\");\r\n\t\tthis.circles.classList.add(\"circles\");\r\n\t\tthis.controlsContainer.appendChild(this.circles);\r\n\r\n\t\tthis.images.forEach((image) => {\r\n\t\t\tconst slideImage = document.createElement(\"img\");\r\n\t\t\tslideImage.classList.add(\"slide-image\");\r\n\t\t\tslideImage.src = image;\r\n\t\t\tthis.sliderFrame.appendChild(slideImage);\r\n\t\t\tconst circleButton = document.createElement(\"img\");\r\n\t\t\tcircleButton.classList.add(\"circle-button\");\r\n\t\t\tcircleButton.classList.add(\"empty\");\r\n\t\t\tcircleButton.src = \"assets/empty-circle.svg\";\r\n\t\t\tthis.circles.appendChild(circleButton);\r\n\t\t});\r\n\t\tthis.updateCircleButtons();\r\n\t}\r\n\r\n\tupdateCircleButtons() {\r\n\t\tthis.circleButtons = this.circles.querySelectorAll(\".circle-button\");\r\n\t\tthis.circleButtons.forEach((button, index) => {\r\n\t\t\tif (index === this.currentSlide) {\r\n\t\t\t\tbutton.src = \"assets/filled-circle.svg\";\r\n\t\t\t} else {\r\n\t\t\t\tbutton.src = \"assets/empty-circle.svg\";\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-slider/./src/Slider.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/Slider.js\");\n\r\n\r\nconst container = document.querySelector(\".slider\");\r\nconst images = [\"images/1.jpg\", \"images/2.jpg\", \"images/3.jpg\", \"images/4.jpg\"];\r\n\r\nconst slider = new _Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, images, \"90vw\", \"60vh\");\r\nslider.createSlider();\r\n\n\n//# sourceURL=webpack://vanilla-slider/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;