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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n//usefull definitions\n\nconst FREE = \"F\";\nconst MARK = \"X\";\nconst WATER = \"-\";\nconst VERTICAL = \"V\";\nconst HORIZONTAL = \"H\";\n\n/**\n * \n * @param {*} xLenght = lenght of x axis of the board\n * @param {*} yLenght = lenght of y axis of the board\n * @returns \n */\n\nconst gameboard = function (xLenght, yLenght) {\n  let xlen = xLenght;\n  let ylen = yLenght;\n  if (xlen > 16) {\n    xlen = 16;\n  }\n  if (ylen > 16) {\n    ylen = 16;\n  }\n\n  //generating board\n\n  let gameBoard = [];\n  let missedShots = [];\n  let gameShips = [];\n  for (let d = 0; d < xLenght; d++) {\n    gameBoard[d] = [];\n    for (let i = 0; i < yLenght; i++) {\n      gameBoard[d][i] = FREE;\n    }\n  }\n  let data = 0;\n  function checkSpace(xShip, yShip, size, orientation = VERTICAL) {\n    if (orientation == HORIZONTAL) {\n      if (size + xShip > xLenght) {\n        //check if it is a valid position\n        return false;\n      }\n      for (let index = 0; index < size; index++) {\n        if (gameBoard[xShip + index][yShip] != FREE) {\n          return false;\n        }\n      }\n      return true;\n    } else {\n      if (size + yShip > yLenght) {\n        return false;\n      }\n      for (let index = 0; index < size; index++) {\n        if (gameBoard[xShip][yShip + index] != FREE) {\n          return false;\n        }\n      }\n      return true;\n    }\n  }\n  function printBoard() {\n    let output = \"\";\n    for (let i = 0; i < ylen; i++) {\n      output += \"|\";\n      let line = gameBoard[i];\n      for (let j = 0; j < xlen; j++) {\n        output += line[j] + \"|\";\n      }\n      output += \"\\n\";\n    }\n    console.log(output);\n  }\n  function placeShip(xShip, yShip, size, orientation = VERTICAL) {\n    let long = parseInt(size);\n    let localShip = new Ship(long);\n    if (checkSpace(xShip, yShip, size, orientation) === false) {\n      return false;\n    }\n    this.gameShips.push(localShip);\n    let value = parseInt(this.gameShips.length - 1);\n\n    //Horizontal (placement from left to right)\n\n    if (orientation == HORIZONTAL) {\n      for (let index = 0; index < long; index++) {\n        gameBoard[xShip + index][yShip] = value;\n      }\n      return true;\n    }\n    //Vertical (placement from bottom to top)\n    if (orientation == VERTICAL) {\n      let localLine = gameBoard[xShip];\n      for (let index = 0; index < long; index++) {\n        localLine[yShip + index] = value;\n      }\n      return true;\n    }\n    return true;\n  }\n  function receiveAttack(x, y) {\n    console.log(x);\n    console.log(y);\n    if (gameBoard[x][y] === 'F') {\n      missedShots.push([x, y]);\n      return \"missed\";\n    } else {\n      let shipDamaged = parseInt(gameBoard[x][y]);\n      let localShip = this.gameShips[shipDamaged];\n      localShip.hit();\n      return \"hit\";\n    }\n  }\n  function getMissed() {\n    return missedShots.length;\n  }\n  function checkShips() {\n    let sunkShips = 0;\n    let allShips = this.gameShips.length;\n    if (this.gameShips.length == 0) {\n      return false;\n    }\n    this.gameShips.forEach(element => {\n      if (element.isSunk() === true) {\n        sunkShips++;\n      }\n    });\n    return sunkShips == allShips;\n  }\n  return {\n    data,\n    gameShips,\n    xlen,\n    ylen,\n    checkShips,\n    gameBoard,\n    printBoard,\n    getMissed,\n    receiveAttack,\n    placeShip\n  };\n};\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nlet ui = __webpack_require__(/*! ./uI.js */ \"./src/uI.js\");\nlet uiGrid = __webpack_require__(/*! ./ui-grid.js */ \"./src/ui-grid.js\");\nlet player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nlet winner = 0;\nlet currentTurn = \"H\";\nlet playerName = \"\";\n\n//adding main component\nlet componentUi = ui(\"Player\", playerName);\ndocument.body.appendChild(componentUi.contentElement);\ncomponentUi.addNameListener();\nlet movementsStack = [];\n//\n\nlet playerComputer = player(\"Computer\", 10, 10);\nplayerComputer.fillingBoard();\nlet playerHuman = player(\"playerName\", 10, 10);\nplayerHuman.fillingBoard();\n\n//initializing ui\nfunction init() {\n  let element = uiGrid.uiGrid(playerComputer, playerHuman);\n  element.generateUI();\n  element.addListener(movementsStack);\n}\ninit();\n//listener for resetting\nlet general = document.getElementById('resetGame');\ngeneral.addEventListener(\"click\", function () {\n  init();\n});\nlet delayInMilliseconds = 1000; //1 second\n\nfunction checkGame() {\n  let localwinner = 0;\n  if (playerHuman.playerBoard.checkShips() === true) {\n    localwinner = 1;\n  }\n  if (playerComputer.playerBoard.checkShips() === true) {\n    localwinner = 2;\n  }\n  return localwinner;\n}\nwindow.requestAnimationFrame(gameLoop);\nlet alert = 0;\nfunction gameLoop() {\n  if (movementsStack.length > 0) {\n    let value = [];\n    value = movementsStack.pop();\n    console.log(\"currentTurrn:\" + currentTurn);\n    console.log(value[0]);\n    console.log(value[1]);\n    if (currentTurn != 'H') {\n      console.log(\"here\");\n    } else {\n      if (value[2] == 'H') {\n        currentTurn = 'C'; //seeting turn\n        let lineTurn = document.getElementById(\"lineTurn\");\n        lineTurn.innerHTML = \"<p>Turn: Computer</p>\";\n        let elemenComp = document.getElementById(\"CompEl_\" + value[0] + \"_\" + value[1]);\n        let returnedValue = playerHuman.playturn(playerComputer, value[0], value[1])[0];\n        if (returnedValue === \"hit\") {\n          elemenComp.style.cssText = \"background:red;\";\n        } else {\n          elemenComp.style.cssText = \"background:gray;\";\n        }\n        setTimeout(function () {\n          // console.log(playerComputer.playturn(playerHuman,0,0))\n          currentTurn = 'H';\n          movementsStack.push([0, 0, \"C\"]);\n          let lineTurn = document.getElementById(\"lineTurn\");\n          lineTurn.innerHTML = \"<p>Turn: Player</p>\";\n          console.log(\"timeout:\" + currentTurn);\n          return;\n        }, 1000);\n      } else {\n        let returnedValue = playerComputer.playturn(playerHuman, 0, 0);\n        console.log(\"returned comp_:\" + returnedValue);\n        let elemenPlay = document.getElementById(\"PlayerEl_\" + returnedValue[1] + \"_\" + returnedValue[2]);\n        if (returnedValue[0] === \"hit\") {\n          elemenPlay.style.cssText = \"background:red;\";\n        } else {\n          elemenPlay.style.cssText = \"background:gray;\";\n        }\n      }\n    }\n  }\n  winner = checkGame();\n  if (winner != 0) {\n    if (winner == 2) {\n      winner = \"Player\";\n    }\n    if (winner == 1) {\n      winner = \"Computer\";\n    }\n    let element = document.getElementById('inputName');\n    if (alert == 0) {\n      window.alert(\"winner \" + element.value + \"!\");\n      winner = 0;\n      alert = 1;\n    }\n    setTimeout(function () {\n      location.reload();\n    }, 1);\n  }\n  window.requestAnimationFrame(gameLoop);\n}\n\n//# sourceURL=webpack://battleship/./src/main.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nconst Player = function (name, xboard, yboard) {\n  let playerName = name;\n  let previusMoves = [];\n  let playerBoard = gameboard(xboard, yboard);\n  if (this.playerName == \"Computer\") {\n    this.playerName = \"Computer\";\n    this.fillingBoard();\n  }\n  function getGameBoard() {\n    return playerBoard;\n  }\n  function fillingBoard() {\n    if (playerName == \"Computer\") {\n      this.playerBoard.placeShip(1, 0, 2, \"H\");\n      this.playerBoard.placeShip(2, 4, 2, \"H\");\n      /*this.playerBoard.placeShip(8,5,1,\"V\");            \n      this.playerBoard.placeShip(3,5,2,\"V\"); \n      this.playerBoard.placeShip(6,6,2,\"V\");  */\n      console.log(\"Computer\");\n      this.playerBoard.printBoard();\n    } else {\n      this.playerBoard.placeShip(0, 0, 2, \"H\");\n      this.playerBoard.placeShip(2, 3, 2, \"H\");\n      /*this.playerBoard.placeShip(1,2,1,\"V\");            \n      this.playerBoard.placeShip(5,5,2,\"V\"); \n      this.playerBoard.placeShip(7,6,2,\"V\"); */\n      console.log(\"Human\");\n      this.playerBoard.printBoard();\n    }\n    return \"done\";\n  }\n  ;\n  function playturn(opponent, xValue, yValue) {\n    console.log(opponent);\n    if (this.playerName == \"Computer\") {\n      let status = false;\n      let x = 0;\n      let y = 0;\n      do {\n        //check is a new move\n        x = parseInt(Math.floor(Math.random() * opponent.playerBoard.xlen));\n        y = parseInt(Math.floor(Math.random() * opponent.playerBoard.ylen));\n        previusMoves.forEach(element => {\n          if (element[0] == x && element[1] == y) {\n            status = true;\n          } else {\n            status = false;\n          }\n        });\n      } while (status === true);\n      previusMoves.push([x, y]);\n      return [opponent.playerBoard.receiveAttack(x, y), x, y];\n    } else {\n      return [opponent.playerBoard.receiveAttack(xValue, yValue), xValue, yValue];\n    }\n  }\n  return {\n    playerName,\n    playerBoard,\n    getGameBoard,\n    fillingBoard,\n    playturn\n  };\n};\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const Ship = function (length_parameter) {\n  let shipLength = length_parameter;\n  let hitCounter = 0;\n  function hit() {\n    if (hitCounter < shipLength) {\n      hitCounter++;\n      return true;\n    } else {\n      return false;\n    }\n  }\n  ;\n  function isSunk() {\n    return hitCounter === shipLength;\n  }\n  return {\n    shipLength,\n    hit,\n    isSunk\n  };\n};\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/uI.js":
/*!*******************!*\
  !*** ./src/uI.js ***!
  \*******************/
/***/ ((module) => {

eval("const UI = function (turn, playerName) {\n  let contentElement = document.createElement('div');\n  contentElement.className = \"mainContent\";\n  let header = document.createElement(\"div\");\n  header.className = \"Header\";\n  header.innerText = \"Battleship GAME\";\n  contentElement.appendChild(header);\n  let playerForm = document.createElement(\"div\");\n  playerForm.className = \"playerForm\";\n  let labelName = document.createElement(\"label\");\n  labelName.className = \"playerName\";\n  labelName.innerText = \"Player:\";\n  playerForm.appendChild(labelName);\n  let inputName = document.createElement(\"input\");\n  inputName.className = \"inputName\";\n  inputName.id = \"inputName\";\n  playerForm.appendChild(inputName);\n  let resetGame = document.createElement(\"button\");\n  resetGame.className = \"resetGame\";\n  resetGame.id = \"resetGame\";\n  resetGame.innerText = \"Reset\";\n  playerForm.appendChild(resetGame);\n  contentElement.appendChild(playerForm);\n  let lineTurn = document.createElement(\"div\");\n  lineTurn.className = \"lineTurn\";\n  lineTurn.id = \"lineTurn\";\n  lineTurn.innerHTML = \"<p>Turn: \" + turn + \"</p>\";\n  contentElement.appendChild(lineTurn);\n  let insertShip = document.createElement(\"div\");\n  insertShip.id = \"insertShip\";\n  contentElement.appendChild(insertShip);\n  let playerZone = document.createElement(\"div\");\n  playerZone.className = \"playerZone\";\n  let player1 = document.createElement(\"div\");\n  player1.id = \"player1-zone\";\n  playerZone.appendChild(player1);\n  let player2 = document.createElement(\"div\");\n  player2.id = \"player2-zone\";\n  playerZone.appendChild(player2);\n  contentElement.appendChild(playerZone);\n  function addNameListener() {\n    let element = document.getElementById('inputName');\n    element.addEventListener(\"change\", () => {\n      playerName = element.value;\n      console.log(playerName);\n    });\n  }\n  return {\n    contentElement,\n    addNameListener\n  };\n};\nmodule.exports = UI;\n\n//# sourceURL=webpack://battleship/./src/uI.js?");

/***/ }),

/***/ "./src/ui-grid.js":
/*!************************!*\
  !*** ./src/ui-grid.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst uiGrid = function UiGrid(playerComputer, playerHuman) {\n  function generateUI() {\n    let gridElement = document.getElementById(\"player1-zone\");\n    gridElement.innerHTML = \"\";\n    gridElement.className = \"gameGrid\";\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocalPlayer = document.createElement(\"div\");\n        elementLocalPlayer.id = \"PlayerEl_\" + i + \"_\" + j;\n        elementLocalPlayer.className = \"innerElementPlayer\";\n        if (playerComputer.playerBoard.gameBoard[i][j] != \"F\") {\n          elementLocalPlayer.style.cssText = \"background:green!important;\";\n        }\n\n        /* if(playerHuman.game)*/\n        gridElement.appendChild(elementLocalPlayer);\n      }\n    }\n    let gridElementComp = document.getElementById(\"player2-zone\");\n    gridElementComp.className = \"gameGrid\";\n    gridElementComp.innerHTML = \"\";\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocal = document.createElement(\"div\");\n        elementLocal.id = \"CompEl_\" + i + \"_\" + j;\n        elementLocal.className = \"compEl\";\n        const newLocal = \"innerElementComp\";\n        elementLocal.className = newLocal;\n        gridElementComp.appendChild(elementLocal);\n      }\n    }\n\n    //adding listeners\n  }\n\n  function addListener(movementsStack) {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        let elementLocal = document.getElementById(\"CompEl_\" + i + \"_\" + j);\n        elementLocal.addEventListener(\"click\", function (e) {\n          console.log(\"button \" + i + \"|\" + j + \" pressed!\");\n          movementsStack.push([i, j, \"H\"]);\n        });\n      }\n    }\n  }\n  return {\n    generateUI,\n    addListener\n  };\n};\nmodule.exports = {\n  uiGrid\n};\n\n//# sourceURL=webpack://battleship/./src/ui-grid.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    background: rgb(98, 98, 243);\\n    font-family: 'New Century Schoolbook', 'URW Bookman L', serif;\\n}\\n\\n\\n#mainContent{\\n    display:flex;\\n    flex-direction: row;\\n    background: transparent;\\n    width: 100%;\\n    height: 200px;\\n    align-items: center;\\n    justify-content: space-around;\\n    text-align: center;\\n}\\n.Header{\\n    display:flex;\\n    flex-direction: row;\\n    justify-self: center;\\n    align-items: center;\\n    justify-content: space-around;\\n    font-size: 25px;\\n    color:gold;\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n.playerForm{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    background: transparent;\\n    height: 100px;\\n}\\n.inputName{\\n    display: flex;\\n    background: transparent;\\n    color:gold;\\n}\\n.labelName{\\n    display: flex;\\n    background: transparent;\\n}\\n.playerZone{\\n    display:grid;\\n    resize: both;\\n    grid-template-columns: 50% 50%;\\n    grid-template-rows: 100%;\\n    background: transparent;\\n    height: 300px;\\n}\\n\\n.resetGame{\\n    display: flex;\\n    background:gold;\\n    color:black;\\n    width: 20%;\\n    height: 25%;\\n    box-shadow: 0px 0px 15px 0px black;\\n    margin-left: 15px;\\n}\\n.gameGrid{\\n    display: grid;\\n    resize: both;\\n    grid-template-columns: repeat(10, 2fr);\\n    grid-auto-rows: 30px;\\n    border-style: solid;\\n    margin-left: 10px;\\n    margin-right: 10px;\\n    background:rgb(216, 214, 214);\\n}\\nbutton{\\n    background: rgb(147, 215, 236);\\n}\\n.innerElement{\\n    height: 30px;    \\n}\\n.innerElementComp{\\n    height: 30px;\\n    border:solid;\\n}\\n.compEl{\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    width: 50px;\\n    height: 50px;\\n    text-align: center;\\n    justify-content: center;\\n    \\n}\\n.innerElementPlayer{\\n    height: 30px;\\n    border:solid;\\n    background:rgb(1, 179, 179);\\n}\\n.lineTurn{\\n    display:flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    font-size: large;\\n    font-weight: bold;\\n    color:orange;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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