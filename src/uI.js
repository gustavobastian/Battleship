
const UI = function () {
    console.log("here")
    let contentElement=document.createElement('div') 
    contentElement.className="mainContent";
    
    let header=document.createElement("div");
    header.className="Header";
    header.innerText="Battleship GAME";
    contentElement.appendChild(header);

    let playerForm=document.createElement("div");    
    playerForm.className="playerForm";

    let labelName=document.createElement("label")
    labelName.className="playerName"; 
    labelName.innerText="Player:"   
    playerForm.appendChild(labelName);
    let inputName=document.createElement("input")
    inputName.className="inputName";    
    playerForm.appendChild(inputName);
    let resetGame=document.createElement("button")
    resetGame.className="resetGame";
    resetGame.id="resetGame";
    resetGame.innerText="Reset";        
    playerForm.appendChild(resetGame);

    contentElement.appendChild(playerForm);

    let playerZone=document.createElement("div");
    playerZone.className= "playerZone";
    let player1=document.createElement("div");
    player1.id="player1-zone";        
    playerZone.appendChild(player1);
    let player2=document.createElement("div");
    player2.id="player2-zone";        
    playerZone.appendChild(player2);
    contentElement.appendChild(playerZone);
    return contentElement;
}


module.exports=UI
