let player=require("./player.js")

const uiGrid=function UiGrid(playerComputer,playerHuman) {
    
    function generateUI(){        
        let gridElement = document.getElementById("player1-zone");
        gridElement.innerHTML="";
        gridElement.className = "gameGrid";
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocalPlayer=document.createElement("div");        
                elementLocalPlayer.id="button_"+i+"_"+j;
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
    function addListener(){
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocal=document.getElementById("CompEl_"+i+"_"+j);        
                elementLocal.addEventListener("click",function(e){
                    console.log("button "+i+"|"+j +" pressed!");
                    let elemenComp=document.getElementById("CompEl_"+i+"_"+j);        
                    
                    if(playerHuman.playturn(playerComputer,i,j) == "hit")
                        {elemenComp.style.cssText="background:red;";}
                    else    
                        {elemenComp.style.cssText="background:gray;";}

                    console.log(playerComputer.playturn(playerHuman,0,0));    
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