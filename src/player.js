
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
                    let position="V";
                    if(d==0){
                        position="H";
                        console.log("horizontal");
                    }
                    else{
                        position="V";
                        console.log("vertical");
                    }
                    if(this.playerBoard.placeShip(x,y,index,position)===true){
                        index--;
                    }
                }
                /*this.playerBoard.placeShip(1,0,numberShip,"H");
                this.playerBoard.placeShip(2,4,numberShip-1,"H");
                this.playerBoard.placeShip(5,5,numberShip-2,"V");
                this.playerBoard.placeShip(7,5,numberShip-3,"V");*/

                console.log("Computer")
                this.playerBoard.printBoard();  
                return "done";          
            }
        else{           
            if(this.playerBoard.gameShips.length<numberShip)
                return "not done";   
            else{
              
                return "done";
            }    
            
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