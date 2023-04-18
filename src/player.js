
const gameboard = require("./gameboard.js");


const Player = function (name,xboard,yboard) {
    let playerName=name;
    let previusMoves=[];
    let playerBoard=gameboard(xboard,yboard);

    if(this.playerName=="computer"){
        this.playerName="Computer";
        this.fillingBoard();
    }

    function fillingBoard(){
        if(playerName=="computer")
            {
                playerBoard.placeShip(1,1,2,"V");
                playerBoard.placeShip(2,2,2,"V");
                playerBoard.placeShip(3,2,1,"V");            
            }
        else{
            playerBoard.placeShip(0,0,2,"H");
            playerBoard.placeShip(2,3,2,"H");
            playerBoard.placeShip(1,2,1,"V");            
        }
        return "done";
    };

    function playturn(opponentGameBoard,xValue,yValue){
        if(this.playerName=="Computer"){
            let status=false;
            do{//check is a new move
                let x= Math.floor(Math.random()*opponentGameBoard.xlen);
                let y= Math.floor(Math.random()*opponentGameBoard.ylen);
                previusMoves.forEach(element => {
                   if((element[0]==x)&&element[1]==y){
                    status=false;
                   }   
                   else{
                    status=true;
                   }
                });
            } while(status===false)

            opponentGameBoard.receiveAttack(x,y);
            previusMoves.push([x,y]);
            console.log(this.previusMoves);
        }
        else{
            opponentGameBoard.receiveAttack(xValue,yValue);
        }
    }

    return{
        playerName,
        fillingBoard,
        playturn
    }
};

module.exports= Player;