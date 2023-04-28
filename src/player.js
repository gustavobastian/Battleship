
const gameboard = require("./gameboard.js");


const Player = function (name,xboard,yboard) {
    let playerName=name;
    let previusMoves=[];
    let playerBoard = gameboard(xboard,yboard);

    if(this.playerName=="Computer"){
        this.playerName="Computer";
        this.fillingBoard();
    }

    function getGameBoard(){
        return playerBoard;
    }
    function fillingBoard(){
        if(playerName=="Computer")
            {
                this.playerBoard.placeShip(1,0,3,"H");
                this.playerBoard.placeShip(2,4,3,"H");
                this.playerBoard.placeShip(5,5,3,"V");
                console.log("Computer")
                this.playerBoard.printBoard();  
                return "done";          
            }
        else{
           /* this.playerBoard.placeShip(0,0,2,"H");
            this.playerBoard.placeShip(2,3,2,"H");
            this.playerBoard.placeShip(5,5,3,"V");
            console.log("Human")
            this.playerBoard.printBoard();*/
            if(this.playerBoard.gameShips.length<3)
                return "not done";   
            else{
                return "done";
            }    
            //return "done";
        }
         
    };
    

    function playturn(opponent,xValue,yValue){
        console.log(opponent)
        
        if(this.playerName=="Computer"){
            let status=false;
            let x=0;
            let y=0;            
            do{//check is a new move
                x= parseInt(Math.floor(Math.random()*opponent.playerBoard.xlen));
                y= parseInt(Math.floor(Math.random()*opponent.playerBoard.ylen));                
                previusMoves.forEach(element => {
                   if((element[0]==x)&&element[1]==y){
                    status=true;
                   }   
                   else{
                    status=false;
                   }
                });
            } while(status===true)

            
            previusMoves.push([x,y]);
            
            return [opponent.playerBoard.receiveAttack(x,y),x,y];
        }
        else{
            return [(opponent.playerBoard.receiveAttack(xValue,yValue)),xValue,yValue];
        }
    }

    return{
        playerName,   
        playerBoard,        
        getGameBoard,     
        fillingBoard,
        playturn
    }
};

module.exports= Player;