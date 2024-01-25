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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n\tconstructor(\r\n\t\tcontainer,\r\n\t\timages = [],\r\n\t\twidth,\r\n\t\theight,\r\n\t\tautoplay = true,\r\n\t\tcontrols = true,\r\n\t\tcurrentSlide = 0\r\n\t) {\r\n\t\tthis.container = container;\r\n\t\tthis.images = images;\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.autoplay = autoplay;\r\n\t\tthis.controls = controls;\r\n\t\tthis.currentSlide = currentSlide;\r\n\t\tthis.container.style.width = this.width;\r\n\t\tthis.container.style.height = this.height;\r\n\t\tthis.sliderFrame = document.createElement(\"div\");\r\n\t\tthis.sliderFrame.classList.add(\"slider-frame\");\r\n\t\tcontainer.appendChild(this.sliderFrame);\r\n\t}\r\n\r\n\tslideLeft() {\r\n\t\tthis.currentSlide =\r\n\t\t\t(this.currentSlide - 1 + this.images.length) % this.images.length;\r\n\t\tthis.updateSliderFrame();\r\n\t}\r\n\r\n\tslideRight() {\r\n\t\tthis.currentSlide = (this.currentSlide + 1) % this.images.length;\r\n\t\tthis.updateSliderFrame();\r\n\t}\r\n\r\n\tupdateSliderFrame() {\r\n\t\tconst translateValue = -this.currentSlide * 100;\r\n\t\tthis.sliderFrame.style.transform = `translateX(${translateValue}%)`;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-slider/./src/Slider.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/Slider.js\");\n\r\n\r\nconst container = document.querySelector(\".slider\");\r\nconst images = [\"images/1.jpg\", \"images/2.jpg\", \"images/3.jpg\", \"images/4.jpg\"];\r\n\r\nconst slider = new _Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, images, \"90vw\", \"60vh\");\r\n\r\n// container.style.width = slider.width;\r\n// container.style.height = slider.height;\r\n\r\nconst controls = document.createElement(\"div\");\r\ncontrols.classList.add(\"controls\");\r\n\r\ncontainer.appendChild(controls);\r\nconst leftArrow = document.createElement(\"div\");\r\nleftArrow.classList.add(\"left-arrow\");\r\ncontrols.appendChild(leftArrow);\r\nconst arrowLeftButton = document.createElement(\"img\");\r\nleftArrow.appendChild(arrowLeftButton);\r\narrowLeftButton.src = \"assets/arrow-left.svg\";\r\nleftArrow.addEventListener(\"click\", () => {\r\n\tslider.slideLeft();\r\n});\r\n\r\nconst rightArrow = document.createElement(\"div\");\r\nrightArrow.classList.add(\"right-arrow\");\r\ncontrols.appendChild(rightArrow);\r\nconst arrowRightButton = document.createElement(\"img\");\r\nrightArrow.appendChild(arrowRightButton);\r\narrowRightButton.src = \"assets/arrow-right.svg\";\r\nrightArrow.addEventListener(\"click\", () => {\r\n\tslider.slideRight();\r\n});\r\n\r\nconst circles = document.createElement(\"div\");\r\ncircles.classList.add(\"circles\");\r\ncontrols.appendChild(circles);\r\n\r\nconst sliderFrame = slider.sliderFrame;\r\ncontainer.appendChild(slider.sliderFrame);\r\n\r\nslider.images.forEach((image) => {\r\n\tconst slideImage = document.createElement(\"img\");\r\n\tslideImage.classList.add(\"slide-image\");\r\n\tslideImage.src = image;\r\n\tsliderFrame.appendChild(slideImage);\r\n\tconst circleButton = document.createElement(\"img\");\r\n\tcircleButton.classList.add(\"circle-button\");\r\n\tcircleButton.classList.add(\"empty\");\r\n\tcircleButton.src = \"assets/empty-circle.svg\";\r\n\tcircles.appendChild(circleButton);\r\n});\r\n\n\n//# sourceURL=webpack://vanilla-slider/./src/main.js?");

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