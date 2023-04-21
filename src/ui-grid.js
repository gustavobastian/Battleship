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
    function addListener(movementsStack){
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocal=document.getElementById("CompEl_"+i+"_"+j);        
                elementLocal.addEventListener("click",function(e){
                    console.log("button "+i+"|"+j +" pressed!");
                    movementsStack.push([i,j,"H"]);
                    
                })
            }
        }
    }
    return {        
        generateUI,
        addListener
    };
}



module.exports= { uiGrid };