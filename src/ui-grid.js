let player=require("./player.js")

const uiGrid=function UiGrid(playerComputer,playerHuman) {
    
    function generateUI(){        
        let gridElement = document.getElementById("player1-zone");
        gridElement.innerHTML="";
        gridElement.className = "gameGrid";
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocalPlayer=document.createElement("div");        
                elementLocalPlayer.id="PlayerEl_"+i+"_"+j;
                elementLocalPlayer.className="innerElementPlayer";
                if((playerHuman.playerBoard.gameBoard[i][j])!="F"){
                    elementLocalPlayer.style.cssText="background:green!important;";
                }
                
               /* if(playerHuman.game)*/
                gridElement.appendChild(elementLocalPlayer);
            }
        }

        let gridElementComp = document.getElementById("player2-zone");
        gridElementComp.className = "gameGrid";
        gridElementComp.innerHTML="";
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocal=document.createElement("div");        
                elementLocal.id="CompEl_"+i+"_"+j;
                elementLocal.className="compEl";
                const newLocal = "innerElementComp";
                elementLocal.className=newLocal;
                gridElementComp.appendChild(elementLocal);
            }
        }

        //adding listeners
                
    }
    function addListener(shootStack,placingStack=null){
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocal=document.getElementById("CompEl_"+(i)+"_"+(j));        
                elementLocal.addEventListener("click",function(e){
                    console.log("button "+i+"|"+j +" pressed!");
                    shootStack.push([i,j,"H"]);
                    console.log("shootStack:"+JSON.stringify(shootStack));
                })

                let elementPlacementLocal=document.getElementById("PlayerEl_"+(i)+"_"+(j));        
                elementPlacementLocal.addEventListener("click",function(e){
                    console.log("button placement "+i+"|"+j +" pressed!");
                    placingStack.push([9-j,i,"H"]);
                    console.log("placingStack "+JSON.stringify(placingStack));
                })
            }
        }
    }

    function refreshUi(){
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                if((playerHuman.playerBoard.gameBoard[i][j])!="F"){
                    let elementLocalPlayer=document.getElementById("PlayerEl_"+(i)+"_"+(j));
                    elementLocalPlayer.style.cssText="background:green!important;";
                }
            }
        }
    }

    return {        
        generateUI,
        refreshUi,
        addListener
    };
}



module.exports= { uiGrid };