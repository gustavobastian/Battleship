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

/***/ "./src/uI.js":
/*!*******************!*\
  !*** ./src/uI.js ***!
  \*******************/
/***/ ((module) => {

eval("const UI = function (turn, playerName) {\n  let contentElement = document.createElement('div');\n  contentElement.className = \"mainContent\";\n  contentElement.id = \"mainContent\";\n  let header = document.createElement(\"div\");\n  header.className = \"Header\";\n  header.innerText = \"Battleship GAME\";\n  contentElement.appendChild(header);\n  let insertShip = document.createElement(\"div\");\n  insertShip.id = \"insertShip\";\n  contentElement.appendChild(insertShip);\n  let playerForm = document.createElement(\"div\");\n  playerForm.className = \"playerForm\";\n  let labelName = document.createElement(\"label\");\n  labelName.className = \"playerName\";\n  labelName.innerText = \"Player:\";\n  playerForm.appendChild(labelName);\n  let inputName = document.createElement(\"input\");\n  inputName.className = \"inputName\";\n  inputName.id = \"inputName\";\n  playerForm.appendChild(inputName);\n  let resetGame = document.createElement(\"button\");\n  resetGame.className = \"resetGame\";\n  resetGame.id = \"resetGame\";\n  resetGame.innerText = \"Reset\";\n  playerForm.appendChild(resetGame);\n  contentElement.appendChild(playerForm);\n  let lineTurn = document.createElement(\"div\");\n  lineTurn.className = \"lineTurn\";\n  lineTurn.id = \"lineTurn\";\n  lineTurn.innerHTML = \"<p>Turn: \" + turn + \"</p>\";\n  contentElement.appendChild(lineTurn);\n  let playerZone = document.createElement(\"div\");\n  playerZone.className = \"playerZone\";\n  let player1 = document.createElement(\"div\");\n  player1.id = \"player1-zone\";\n  playerZone.appendChild(player1);\n  let player2 = document.createElement(\"div\");\n  player2.id = \"player2-zone\";\n  playerZone.appendChild(player2);\n  contentElement.appendChild(playerZone);\n  function addNameListener() {\n    let element = document.getElementById('inputName');\n    element.addEventListener(\"change\", () => {\n      playerName = element.value;\n      console.log(playerName);\n    });\n  }\n  return {\n    contentElement,\n    addNameListener\n  };\n};\nmodule.exports = UI;\n\n//# sourceURL=webpack://battleship/./src/uI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/uI.js");
/******/ 	
/******/ })()
;