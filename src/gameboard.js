const ship = require("./ship")

/**
 * 
 * @param {*} xLenght = lenght of x axis of the board
 * @param {*} yLenght = lenght of y axis of the board
 * @returns 
 */

const OCCUPIED="O";
const FREE="F";

const gameboard = function (xLenght,yLenght) {
    let xlen=xLenght;
    let ylen=yLenght;
    if(xlen>16){xlen=16;}
    if(ylen>16){ylen=16;}

    let gameBoard = Array(ylen).fill(Array(xlen).fill(FREE));

    let data=0;

    function printGameBoard() {
        let line=""
        gameBoard.forEach(element => {
            
                element.forEach(elementLocal =>{
                    line+="|"+elementLocal
                });
            line+="|\n"            
        });
        console.log(line);
    }

    

    return{
        data,
        printGameBoard
    }
};
module.exports=gameboard;