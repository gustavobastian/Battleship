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

/***/ "./src/ui-grid.js":
/*!************************!*\
  !*** ./src/ui-grid.js ***!
  \************************/
/***/ ((module) => {

eval("function UiGrid() {\n  let gridElement = document.getElementById(\"player1-zone\");\n  gridElement.className = \"gameGrid\";\n  for (let i = 0; i < 100; i++) {\n    let elementLocal = document.createElement(\"button\");\n    elementLocal.id = \"button_\" + i;\n    elementLocal.className = \"innerElement\";\n    gridElement.appendChild(elementLocal);\n  }\n  let gridElementComp = document.getElementById(\"player2-zone\");\n  gridElementComp.className = \"gameGrid\";\n  for (let i = 0; i < 100; i++) {\n    let elementLocal = document.createElement(\"div\");\n    elementLocal.id = \"button_\" + i;\n    elementLocal.className = \"innerElementComp\";\n    gridElementComp.appendChild(elementLocal);\n  }\n  return;\n}\nmodule.exports = UiGrid;\n\n//# sourceURL=webpack://battleship/./src/ui-grid.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui-grid.js");
/******/ 	
/******/ })()
;