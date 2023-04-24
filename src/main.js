import './style.css'; 
let ui =require("./uI.js")
let uiGrid =require("./ui-grid.js")
let player=require("./player.js")


let winner=0;

let currentTurn="H";
let playerName="";

//adding main component
let componentUi=ui("Player",playerName);
document.body.appendChild(componentUi.contentElement);
componentUi.addNameListener();

let movementsStack=[];
//

let playerComputer=player("Computer",10,10);
playerComputer.fillingBoard();
let playerHuman=player("playerName",10,10);
playerHuman.fillingBoard();


//initializing ui
function init(){

    let element= uiGrid.uiGrid(playerComputer,playerHuman);    
    element.generateUI();
    element.addListener(movementsStack);
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
    if(playerHuman.playerBoard.checkShips()===true){
        localwinner=1;
        }
    if(playerComputer.playerBoard.checkShips()===true){
        localwinner=2;
        }    
        
    return localwinner;    
}

window.requestAnimationFrame(gameLoop);

let alert=0;

function gameLoop() {
    if(movementsStack.length>0){
        let value=[];
        value=movementsStack.pop();
        console.log("currentTurrn:"+currentTurn);
        console.log(value[0]);
        console.log(value[1]);
        if(currentTurn!='H'){
            console.log("here")            
        }
        else{
                if(value[2]=='H')
                {
                    currentTurn='C';//seeting turn
                    let lineTurn=document.getElementById("lineTurn");                                            
                    lineTurn.innerHTML="<p>Turn: Computer</p>"
                    
                    let elemenComp=document.getElementById("CompEl_"+value[0]+"_"+value[1]);                            
                    let returnedValue=(playerHuman.playturn(playerComputer,value[0],value[1]))[0]; 
                    if(returnedValue==="hit")
                        {elemenComp.style.cssText="background:red;";}
                    else    
                        {elemenComp.style.cssText="background:gray;";}
                    
                    setTimeout(function(){
                        // console.log(playerComputer.playturn(playerHuman,0,0))
                            currentTurn='H';
                            movementsStack.push([0,0,"C"]);
                            let lineTurn=document.getElementById("lineTurn");                                            
                            lineTurn.innerHTML="<p>Turn: Player</p>"
                            console.log("timeout:"+currentTurn)
                            return;
                    }, 1000);                        
                }
                else{                        
                    let returnedValue=(playerComputer.playturn(playerHuman,0,0)); 
                    console.log("returned comp_:"+returnedValue)
                    let elemenPlay=document.getElementById("PlayerEl_"+returnedValue[1]+"_"+returnedValue[2]);   
                    if(returnedValue[0]==="hit")
                        {elemenPlay.style.cssText="background:red;";}
                    else    
                        {elemenPlay.style.cssText="background:gray;";}
                }
            }
        }    
    winner=checkGame();    
    if(winner!=0){
        if(winner==2){winner="Player"}
        if(winner==1){winner="Computer"}
        let element= document.getElementById('inputName');
        
        if(alert==0){
            window.alert("winner "+element.value+"!");
            winner=0;
            alert=1;}
        setTimeout(function(){
            location.reload();
        }, 1);    
        
    }
    window.requestAnimationFrame(gameLoop);
}