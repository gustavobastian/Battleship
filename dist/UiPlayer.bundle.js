/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui-player.js":
/*!**************************!*\
  !*** ./src/ui-player.js ***!
  \**************************/
/***/ ((module) => {

eval("const UIplayer = function (turn) {\n  console.log(\"here\");\n  let contentElement = document.getElementById('insertShip');\n  contentElement.className = \"insertShip\";\n  let lineShip1 = document.createElement('div');\n  lineShip1.className = \"lineShip\";\n  lineShip1.id = \"lineShip1\";\n  let lineShip2 = document.createElement('div');\n  lineShip2.className = \"lineShip\";\n  lineShip2.id = \"lineShip2\";\n  let lineShip3 = document.createElement('div');\n  lineShip3.className = \"lineShip\";\n  lineShip3.id = \"lineShip3\";\n  let xLabel = document.createElement('p');\n  xLabel.innerText = \"X:\";\n  let yLabel = document.createElement('p');\n  yLabel.innerText = \"Y:\";\n  let sizeLabel = document.createElement('p');\n  sizeLabel.innerText = \"Size:\";\n  let sizeValue = document.createElement('p');\n  sizeValue.innerText = \"3\";\n  let orientationLabel = document.createElement('p');\n  orientationLabel.innerText = \"Or:\";\n  let xLabel2 = document.createElement('p');\n  xLabel2.innerText = \"X:\";\n  let yLabel2 = document.createElement('p');\n  yLabel2.innerText = \"Y:\";\n  let sizeLabel2 = document.createElement('p');\n  sizeLabel2.innerText = \"Size:\";\n  let sizeValue2 = document.createElement('p');\n  sizeValue2.innerText = \"3\";\n  let orientationLabel2 = document.createElement('p');\n  orientationLabel2.innerText = \"Or:\";\n  let xLabel3 = document.createElement('p');\n  xLabel3.innerText = \"X:\";\n  let yLabel3 = document.createElement('p');\n  yLabel3.innerText = \"Y:\";\n  let sizeLabel3 = document.createElement('p');\n  sizeLabel3.innerText = \"Size:\";\n  let sizeValue3 = document.createElement('p');\n  sizeValue3.innerText = \"3\";\n  let orientationLabel3 = document.createElement('p');\n  orientationLabel3.innerText = \"Or:\";\n  lineShip1.appendChild(xLabel);\n  let xInput1 = document.createElement('input');\n  lineShip1.appendChild(xInput1);\n  lineShip1.appendChild(yLabel);\n  let yInput1 = document.createElement('input');\n  lineShip1.appendChild(yInput1);\n  lineShip1.appendChild(orientationLabel);\n  let orientationInput1 = document.createElement('input');\n  lineShip1.appendChild(orientationInput1);\n  lineShip1.appendChild(sizeLabel);\n  lineShip1.appendChild(sizeValue);\n  contentElement.appendChild(lineShip1);\n  lineShip2.appendChild(xLabel2);\n  let xInput2 = document.createElement('input');\n  lineShip2.appendChild(xInput2);\n  lineShip2.appendChild(yLabel2);\n  let yInput2 = document.createElement('input');\n  lineShip2.appendChild(yInput2);\n  lineShip2.appendChild(orientationLabel2);\n  let orientationInput2 = document.createElement('input');\n  lineShip2.appendChild(orientationInput2);\n  lineShip2.appendChild(sizeLabel2);\n  lineShip2.appendChild(sizeValue2);\n  contentElement.appendChild(lineShip2);\n  lineShip3.appendChild(xLabel3);\n  let xInput3 = document.createElement('input');\n  lineShip3.appendChild(xInput3);\n  lineShip3.appendChild(yLabel3);\n  let yInput3 = document.createElement('input');\n  lineShip3.appendChild(yInput3);\n  lineShip3.appendChild(orientationLabel3);\n  let orientationInput3 = document.createElement('input');\n  lineShip3.appendChild(orientationInput3);\n  lineShip3.appendChild(sizeLabel3);\n  lineShip3.appendChild(sizeValue3);\n  contentElement.appendChild(lineShip3);\n  return contentElement;\n};\nmodule.exports = UIplayer;\n\n//# sourceURL=webpack://battleship/./src/ui-player.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui-player.js");
/******/ 	
/******/ })()
;