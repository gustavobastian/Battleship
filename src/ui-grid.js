let player=require("./player.js")

const uiGrid=function UiGrid() {
    let playerComputer;
    let playerHuman;
    
    function init(){
        playerComputer=player("computer",10,10);
        playerComputer.fillingBoard();
        playerHuman=player("playerName",10,10);
        playerHuman.fillingBoard();
    }
    function generateUI(){
        this.init();
        let gridElement = document.getElementById("player1-zone");
        gridElement.innerHTML="";
        gridElement.className = "gameGrid";
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                let elementLocal=document.createElement("button");        
                elementLocal.id="button_"+i+"_"+j;
                elementLocal.className="innerElement";
               /* if(playerHuman.game)*/
                gridElement.appendChild(elementLocal);
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
                let elementLocal=document.getElementById("button_"+i+"_"+j);        
                elementLocal.addEventListener("click",function(e){
                    console.log("button "+i+"|"+j +" pressed!");
                    let elemenComp=document.getElementById("CompEl_"+i+"_"+j);        
                   // console.log(playerHuman.playturn(playerComputer,i,j))
                    
                    //elemenComp.innerText="X";
                    if(playerHuman.playturn(playerComputer,i,j) == "hit")
                        {elemenComp.style.cssText="background:red;";}
                    else    
                        {elemenComp.style.cssText="background:gray;";}
                })
            }
        }
    }
    return {
        init,
        generateUI,
        addListener

    };
}



module.exports= { uiGrid };