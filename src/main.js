import './style.css'; 
let ui =require("./uI.js")
let uiGrid =require("./ui-grid.js")
let player=require("./player.js")


let winner=0;
//adding main component
let component=ui();
document.body.appendChild(component);
//

let playerComputer=player("computer",10,10);
playerComputer.fillingBoard();
let playerHuman=player("playerName",10,10);
playerHuman.fillingBoard();


//initializing ui
function init(){

    let element= uiGrid.uiGrid(playerComputer,playerHuman);    
    element.generateUI();
    element.addListener();
}

init();
//listener for resetting
let general=document.getElementById('resetGame')
general.addEventListener("click",function(){
    init();
})
let delayInMilliseconds = 1000; //1 second

function checkGame(){
    let localwinner=0;
    if(playerHuman.playerBoard.checkShips()==true){
        localwinner=1;
        }
    if(playerComputer.playerBoard.checkShips()==true){
        localwinner=2;
        }    
        
    return localwinner;    
}
window.requestAnimationFrame(gameLoop);

let alert=0;
function gameLoop() {
    winner=checkGame();
    if(winner!=0){
        winner=0;
        if(alert==0){window.alert("winner "+winner+"!");
        alert=1;}
        setTimeout(function(){
            location.reload();
        }, 1);    
        
    }
    window.requestAnimationFrame(gameLoop);
}