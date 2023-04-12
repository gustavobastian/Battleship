const ship = require("./ship")

//usefull definitions
const OCCUPIED="O";
const FREE="F";
const VERTICAL="V";
const HORIZONTAL="F";

/**
 * 
 * @param {*} xLenght = lenght of x axis of the board
 * @param {*} yLenght = lenght of y axis of the board
 * @returns 
 */



const gameboard = function (xLenght,yLenght) {
    let xlen=xLenght;
    let ylen=yLenght;
    if(xlen>16){xlen=16;}
    if(ylen>16){ylen=16;}

    let gameBoard = Array(ylen).fill(Array(xlen).fill(FREE));
    let gameShips=[];

    let data=0;

    function placeShip(xShip,yShip,size,orientation=VERTICAL){

        let localShip= new ship(size);
        

        
        if(orientation==HORIZONTAL){
            if(size+xShip>xLenght){
                return false;
            }else{
                for (let index=0;index<size;index++)
                {
                    gameBoard[xShip+index][yShip]=OCCUPIED;
                    this.gameShips.push(localShip);
                    return true;
                }
            }
        }
        if(orientation==VERTICAL){
            if(size+yShip>yLenght){
                return false;
            }else{
                for (let index=0;index<size;index++)
                {
                    gameBoard[xShip][yShip+index]=OCCUPIED;
                    this.gameShips.push(localShip);
                    return true;
                }
            }
        }
    }

    return{
        data,        
        gameShips,
        gameBoard,
        placeShip

    }
};
module.exports=gameboard;