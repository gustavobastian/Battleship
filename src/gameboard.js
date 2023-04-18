const Ship = require("./ship")

//usefull definitions

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
    
    let gameBoard=[];    
    let missedShots=[];
    let gameShips=[];

    for(let d=0;d<xLenght;d++){
        gameBoard[d]=[];
        for(let i=0;i<yLenght;i++){
            gameBoard[d][i]=FREE;
        }        
    }
    


    let data=0;

    function checkSpace(xShip,yShip,size,orientation=VERTICAL){
        if(orientation==HORIZONTAL){
            if(size+xShip>xLenght){ //check if it is a valid position
                return false;
            }
            for (let index=0;index<size;index++){                
                if(gameBoard[xShip+index][yShip]!=FREE){
                    return false;
                    }                                            
            }
            return true;    
        }else{
            if(size+yShip>yLenght){
                return false;
            }
            for (let index=0;index<size;index++){
                if(gameBoard[xShip][yShip+index]!=FREE){
                    return false;
                }
                
            }    
            return true;
        }
    }
/*
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
        
    }*/

    function placeShip(xShip,yShip,size,orientation=VERTICAL){        
        let long=parseInt(size);        
        let localShip= new Ship(long);
        
        if(checkSpace(xShip,yShip,size,orientation)===false){
            return false;
        }

        this.gameShips.push(localShip);
        
        let value=parseInt(this.gameShips.length-1);

        
        //Horizontal (placement from left to right)
        
        if(orientation==HORIZONTAL){                        
            for (let index=0;index<long;index++)
            {
                gameBoard[xShip+index][yShip]=value;                  
            }
            
            return true;
        }
        //Vertical (placement from bottom to top)
        if(orientation==VERTICAL){             
            let localLine=gameBoard[xShip]                          
            for (let index=0;index<long;index++)
            {   
                localLine[yShip+index]=value;                                
            }          
            
            return true;    
        }
        return true;
    }

    function receiveAttack(x,y){
            if(gameBoard[x][y]=="F"){
                missedShots.push([x,y]);
                return "missed"
            }
            else{
                let shipDamaged=parseInt(gameBoard[x][y]);                
                gameBoard[x][y]="X";
                this.gameShips[shipDamaged].hit();                               
                return "hit"
            }
            
    }

    function getMissed(){
        return missedShots.length
    }

    function checkShips(){
        let status=0;
        this.gameShips.forEach(element => {
            if(element.isSunk()===false)
            {
                status=1;
            }
        });
        return status==0;
    }

    return{
        data,        
        gameShips,
        checkShips,
        gameBoard,
    //    printBoard,
        getMissed,
        receiveAttack,
        placeShip

    }
};
module.exports=gameboard;