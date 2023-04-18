const ship = require("./ship")

//usefull definitions
const OCCUPIED="O";
const FREE="F";
const MARK="X";
const WATER="-";
const VERTICAL="V";
const HORIZONTAL="H";

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

    //generating board
    //let gameBoard = Array(ylen).fill(Array(xlen).fill(FREE));
    let gameBoard=[];    
    let line = [];
    for(let d=0;d<xLenght;d++){
        gameBoard[d]=[];
        for(let i=0;i<yLenght;i++){
            gameBoard[d][i]=FREE;
        }
        
    }
    
    let gameShips=[];

    let data=0;

    function checkSpace(xShip,yShip,size,orientation=VERTICAL){
        if(orientation==HORIZONTAL){
            if(size+xShip>xLenght){ //check if it is a valid position
                return false;
            }
            for (let index=0;index<size;index++){                
                if(gameBoard[xShip+index][yShip]==OCCUPIED){
                    return false;
                    }                                            
            }
            return true;    
        }else{
            if(size+yShip>yLenght){
                return false;
            }
            for (let index=0;index<size;index++){
                if(gameBoard[xShip][yShip+index]==OCCUPIED){
                    return false;
                }
                
            }    
            return true;
        }
    }

    function printBoard(){
        let output="";
        
        for ( let i=0;i<ylen;i++){
            output+="|";
            let line=gameBoard[i]            
            for ( let j=0;j<xlen;j++){                
                output+= line[j]+"|";
            }
            output+="\n";
        }
        
        console.log(output)
        
    }

    function placeShip(xShip,yShip,size,orientation=VERTICAL){        
        let localShip= new ship(size);
        let long=parseInt(size);        
        if(checkSpace(xShip,yShip,size,orientation)===false){
            return false;
        }
        //Horizontal (placement from left to right)
        
        if(orientation==HORIZONTAL){                        
            for (let index=0;index<long;index++)
            {
                gameBoard[xShip+index][yShip]=OCCUPIED;                  
            }
            this.gameShips.push(localShip);
            return true;
        }
        //Vertical (placement from bottom to top)
        if(orientation==VERTICAL){             
            let localLine=gameBoard[xShip]                          
            for (let index=0;index<long;index++)
            {   
                localLine[yShip+index]=OCCUPIED;                                
            }          
            this.gameShips.push(localShip);
            return true;    
        }
        return true;
    }

    return{
        data,        
        gameShips,
        gameBoard,
        placeShip

    }
};
module.exports=gameboard;