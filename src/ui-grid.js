function UiGrid() {
    let gridElement = document.getElementById("player1-zone");
    gridElement.className = "gameGrid";
    for (let i=0;i<100;i++){
        let elementLocal=document.createElement("button");        
        elementLocal.id="button_"+i;
        elementLocal.className="innerElement";
        gridElement.appendChild(elementLocal);
    }

    let gridElementComp = document.getElementById("player2-zone");
    gridElementComp.className = "gameGrid";
    for (let i=0;i<100;i++){
        let elementLocal=document.createElement("div");        
        elementLocal.id="button_"+i;
        elementLocal.className="innerElementComp";
        gridElementComp.appendChild(elementLocal);
    }

    return;
}
module.exports=UiGrid;