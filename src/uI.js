
const UI = function (turn,playerName) {
    
    let contentElement=document.createElement('div') 


    contentElement.className="mainContent";
    contentElement.id="mainContent";
    contentElement.innerHTML="";
    

    
    


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
    inputName.id="inputName"; 
    playerForm.appendChild(inputName);
    let resetGame=document.createElement("button")
    resetGame.className="resetGame";
    resetGame.id="resetGame";
    resetGame.innerText="Reset";        
    playerForm.appendChild(resetGame);
    contentElement.appendChild(playerForm);

    let lineTurn=document.createElement("div");    
    lineTurn.className="lineTurn";
    lineTurn.id="lineTurn";
    lineTurn.innerHTML="<p>Turn: "+turn+"</p>"
    contentElement.appendChild(lineTurn);


    let playerZone=document.createElement("div");
    playerZone.className= "playerZone";
    let player1=document.createElement("div");
    player1.id="player1-zone";        
    playerZone.appendChild(player1);
    let player2=document.createElement("div");
    player2.id="player2-zone";        
    playerZone.appendChild(player2);


    contentElement.appendChild(playerZone);

    let insertShip=document.createElement("div");        
    insertShip.id="insertShip";

    function addNameListener(){
        let element= document.getElementById('inputName');
        element.addEventListener("change",()=>{
            playerName=element.value;
            console.log(playerName);
        })
    }
    return {
        contentElement,
        addNameListener,
        insertShip
    };
}



module.exports=UI
