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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n//usefull definitions\n\nconst FREE = \"F\";\nconst MARK = \"X\";\nconst WATER = \"-\";\nconst VERTICAL = \"V\";\nconst HORIZONTAL = \"H\";\n\n/**\n * \n * @param {*} xLenght = lenght of x axis of the board\n * @param {*} yLenght = lenght of y axis of the board\n * @returns \n */\n\nconst gameboard = function (xLenght, yLenght) {\n  let xlen = xLenght;\n  let ylen = yLenght;\n  if (xlen > 16) {\n    xlen = 16;\n  }\n  if (ylen > 16) {\n    ylen = 16;\n  }\n\n  //generating board\n\n  let gameBoard = [];\n  let missedShots = [];\n  let gameShips = [];\n  for (let d = 0; d < xLenght; d++) {\n    gameBoard[d] = [];\n    for (let i = 0; i < yLenght; i++) {\n      gameBoard[d][i] = FREE;\n    }\n  }\n  let data = 0;\n  function checkSpace(xShip, yShip, size, orientation = VERTICAL) {\n    if (orientation == HORIZONTAL) {\n      if (size + xShip > xLenght) {\n        //check if it is a valid position\n        return false;\n      }\n      for (let index = 0; index < size; index++) {\n        if (gameBoard[xShip + index][yShip] != FREE) {\n          return false;\n        }\n      }\n      return true;\n    } else {\n      if (size + yShip > yLenght) {\n        return false;\n      }\n      for (let index = 0; index < size; index++) {\n        if (gameBoard[xShip][yShip + index] != FREE) {\n          return false;\n        }\n      }\n      return true;\n    }\n  }\n  function printBoard() {\n    let output = \"\";\n    for (let i = 0; i < ylen; i++) {\n      output += \"|\";\n      let line = gameBoard[i];\n      for (let j = 0; j < xlen; j++) {\n        output += line[j] + \"|\";\n      }\n      output += \"\\n\";\n    }\n    console.log(output);\n  }\n  function placeShip(xShip, yShip, size, orientation = VERTICAL) {\n    let long = parseInt(size);\n    let localShip = new Ship(long);\n    if (checkSpace(xShip, yShip, size, orientation) === false) {\n      return false;\n    }\n    this.gameShips.push(localShip);\n    let value = parseInt(this.gameShips.length - 1);\n\n    //Horizontal (placement from left to right)\n\n    if (orientation == HORIZONTAL) {\n      for (let index = 0; index < long; index++) {\n        gameBoard[xShip + index][yShip] = value;\n      }\n      return true;\n    }\n    //Vertical (placement from bottom to top)\n    if (orientation == VERTICAL) {\n      let localLine = gameBoard[xShip];\n      for (let index = 0; index < long; index++) {\n        localLine[yShip + index] = value;\n      }\n      return true;\n    }\n    return true;\n  }\n  function receiveAttack(x, y) {\n    console.log(x);\n    console.log(y);\n    if (gameBoard[x][y] === 'F') {\n      missedShots.push([x, y]);\n      return \"missed\";\n    } else {\n      let shipDamaged = parseInt(gameBoard[x][y]);\n      let localShip = this.gameShips[shipDamaged];\n      localShip.hit();\n      return \"hit\";\n    }\n  }\n  function getMissed() {\n    return missedShots.length;\n  }\n  function checkShips() {\n    let sunkShips = 0;\n    let allShips = this.gameShips.length;\n    if (this.gameShips.length == 0) {\n      return false;\n    }\n    this.gameShips.forEach(element => {\n      if (element.isSunk() === true) {\n        sunkShips++;\n      }\n    });\n    return sunkShips == allShips;\n  }\n  return {\n    data,\n    gameShips,\n    xlen,\n    ylen,\n    checkShips,\n    gameBoard,\n    printBoard,\n    getMissed,\n    receiveAttack,\n    placeShip\n  };\n};\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nconst Player = function (name, xboard, yboard) {\n  let playerName = name;\n  let previusMoves = [];\n  let playerBoard = gameboard(xboard, yboard);\n  if (this.playerName == \"Computer\") {\n    this.playerName = \"Computer\";\n    this.fillingBoard();\n  }\n  function getGameBoard() {\n    return playerBoard;\n  }\n  function fillingBoard() {\n    if (playerName == \"Computer\") {\n      this.playerBoard.placeShip(1, 0, 2, \"H\");\n      this.playerBoard.placeShip(2, 4, 2, \"H\");\n      console.log(\"Computer\");\n      this.playerBoard.printBoard();\n      return \"done\";\n    } else {\n      /* this.playerBoard.placeShip(0,0,2,\"H\");\n       this.playerBoard.placeShip(2,3,2,\"H\");\n       console.log(\"Human\")\n       this.playerBoard.printBoard();*/\n      return \"not done\";\n    }\n  }\n  ;\n  function playturn(opponent, xValue, yValue) {\n    console.log(opponent);\n    if (this.playerName == \"Computer\") {\n      let status = false;\n      let x = 0;\n      let y = 0;\n      do {\n        //check is a new move\n        x = parseInt(Math.floor(Math.random() * opponent.playerBoard.xlen));\n        y = parseInt(Math.floor(Math.random() * opponent.playerBoard.ylen));\n        previusMoves.forEach(element => {\n          if (element[0] == x && element[1] == y) {\n            status = true;\n          } else {\n            status = false;\n          }\n        });\n      } while (status === true);\n      previusMoves.push([x, y]);\n      return [opponent.playerBoard.receiveAttack(x, y), x, y];\n    } else {\n      return [opponent.playerBoard.receiveAttack(xValue, yValue), xValue, yValue];\n    }\n  }\n  return {\n    playerName,\n    playerBoard,\n    getGameBoard,\n    fillingBoard,\n    playturn\n  };\n};\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const Ship = function (length_parameter) {\n  let shipLength = length_parameter;\n  let hitCounter = 0;\n  function hit() {\n    if (hitCounter < shipLength) {\n      hitCounter++;\n      return true;\n    } else {\n      return false;\n    }\n  }\n  ;\n  function isSunk() {\n    return hitCounter === shipLength;\n  }\n  return {\n    shipLength,\n    hit,\n    isSunk\n  };\n};\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/ui-grid.js":
/*!************************!*\
  !*** ./src/ui-grid.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst uiGrid = function UiGrid(playerComputer, playerHuman) {\n  function generateUI() {\n    let gridElement = document.getElementById(\"player1-zone\");\n    gridElement.innerHTML = \"\";\n    gridElement.className = \"gameGrid\";\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocalPlayer = document.createElement(\"div\");\n        elementLocalPlayer.id = \"PlayerEl_\" + i + \"_\" + j;\n        elementLocalPlayer.className = \"innerElementPlayer\";\n        if (playerComputer.playerBoard.gameBoard[i][j] != \"F\") {\n          elementLocalPlayer.style.cssText = \"background:green!important;\";\n        }\n\n        /* if(playerHuman.game)*/\n        gridElement.appendChild(elementLocalPlayer);\n      }\n    }\n    let gridElementComp = document.getElementById(\"player2-zone\");\n    gridElementComp.className = \"gameGrid\";\n    gridElementComp.innerHTML = \"\";\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocal = document.createElement(\"div\");\n        elementLocal.id = \"CompEl_\" + i + \"_\" + j;\n        elementLocal.className = \"compEl\";\n        const newLocal = \"innerElementComp\";\n        elementLocal.className = newLocal;\n        gridElementComp.appendChild(elementLocal);\n      }\n    }\n\n    //adding listeners\n  }\n\n  function addListener(movementsStack) {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocal = document.getElementById(\"CompEl_\" + i + \"_\" + j);\n        elementLocal.addEventListener(\"click\", function (e) {\n          console.log(\"button \" + i + \"|\" + j + \" pressed!\");\n          movementsStack.push([i, j, \"H\"]);\n        });\n      }\n    }\n  }\n  return {\n    generateUI,\n    addListener\n  };\n};\nmodule.exports = {\n  uiGrid\n};\n\n//# sourceURL=webpack://battleship/./src/ui-grid.js?");

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