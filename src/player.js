
const gameboard = require("./gameboard.js");


const Player = function (name,xboard,yboard) {
    let playerName=name;
    let previusStrike=[];
    let playerBoard = gameboard(xboard,yboard);

    if(this.playerName=="Computer"){
        this.playerName="Computer";
        this.fillingBoard();
    }

    function getGameBoard(){
        return playerBoard;
    }
    function fillingBoard(){
        let numberShip=4;         
        
        let index=numberShip;
        if(playerName=="Computer")
            {
                while(index>0){
                    let x= parseInt(Math.floor(Math.random()*playerBoard.xlen));
                    let y= parseInt(Math.floor(Math.random()*playerBoard.ylen)); 
                    let d=parseInt(Math.floor(Math.random()*2)); 
                    let position;
                    if(d==0){
                        position="H";
                        console.log("horizontal");
                        if(this.playerBoard.placeShip(x,y,index,position)===true){
                            index--;
                        }
                    }
                    else{
                        position="V";
                        console.log("vertical");
                        if(this.playerBoard.placeShip(x,y,index,position)===true){
                            index--;
                        }
                    }
                   
                }

                console.log("Computer")
                this.playerBoard.printBoard();  
                return "done";          
            }
        else{           
            return (this.playerBoard.gameShips.length < numberShip) ? "not done" : "done";            
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
                previusStrike.forEach(element => {
                   if((element[0]==x)&&element[1]==y){
                    status=true;
                   }   
                   else{
                    status=false;
                   }
                });
            } while(status===true)

            
            previusStrike.push([x,y]);
            
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