import './style.css'; 
let ui =require("./uI.js")
let uiGrid =require("./ui-grid.js")
let player=require("./player.js")
let UIplayer =require("./ui-player.js")


let winner=0;

let currentTurn="H";
let playerName="";
let elementGrid="";

//adding main component
let componentUi=ui("Player",playerName);
document.body.appendChild(componentUi.insertShip);
console.log("here")
document.body.appendChild(componentUi.contentElement);

componentUi.addNameListener();


let movementsStack=[];//array for receiving the place of the shot
let placementStack=[];//array for receiving the place of the ship
//


let playerComputer=player("Computer",10,10);
playerComputer.fillingBoard();
let playerHuman=player("playerName",10,10);
let UIplayerLocal=UIplayer(playerHuman);
document.body.appendChild(UIplayerLocal.contentElement);
UIplayerLocal.addListeners();
/*
*/
//initializing ui
function init(){

    elementGrid= uiGrid.uiGrid(playerComputer,playerHuman);    
    elementGrid.generateUI();
    elementGrid.addListener(movementsStack,placementStack);
}


window.requestAnimationFrame(gameLoop);
init();
//listener for resetting
let general=document.getElementById('resetGame')
    general.addEventListener("click",function(){
    init();
})

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



let alert=0;
let refreshingUi=false;

function gameLoop() {
    
    if (playerHuman.fillingBoard()=="done"){
            if(refreshingUi===false){
                
                elementGrid.refreshUi();
                refreshingUi=true;
            }
            let delayInMilliseconds = 1000; //1 second
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
        }
        else{
            if(placementStack.length>0){
                let valuePlacement=[];
                valuePlacement=placementStack.pop();                    
                console.log(valuePlacement[0]);
                console.log(valuePlacement[1]);
                
                let elementX=document.getElementById("Xinput_"+1);                
                elementX.value = 9-valuePlacement[1];
                let elementY=document.getElementById("Yinput_"+1);
                elementY.value = 9-valuePlacement[0];                  

                let elementButton=document.getElementById("button_1");                
                elementButton.click();                
            }
            elementGrid.refreshUi();
            
        }
        window.requestAnimationFrame(gameLoop);
            
        }    


//};

//gameLoop(movementsStack);