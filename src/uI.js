
const UI = function () {
    console.log("here")
    let contentElement=document.createElement('div') 
    contentElement.className="mainContent";
    
    let header=document.createElement("div");
    header.className="Header";
    header.innerText="Battleship GAME";
    contentElement.appendChild(header);

    let playerZone=document.createElement("div");
    const newLocal = "playerZone";
    playerZone.className=newLocal;    
    

    let player1=document.createElement("div");
    player1.className="player1-zone";        
    playerZone.appendChild(player1);
    
    let player2=document.createElement("div");
    player2.className="player2-zone";        
    playerZone.appendChild(player2);
    contentElement.appendChild(playerZone);
    return contentElement;
}

module.exports=UI