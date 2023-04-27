const player = require("./player.js")

const UIplayer = function (playerP=null) {
    
    let localplayer= new player();
    localplayer=playerP;
    let ships=[];
    ships.push([0,0,"V"])
    ships.push([1,0,"V"])
    ships.push([2,0,"V"])

    console.log("here:"+JSON.stringify(ships));

    let contentElement=document.getElementById('insertShip'); 
    contentElement.className="insertShip";
    
    for(let i=1;i<4;i++){
        let lineShip1=document.createElement('div');
        lineShip1.className="lineShip";
        lineShip1.id="lineShip"+i;
        let xLabel=document.createElement('p');
        xLabel.innerText="X:"
        let yLabel=document.createElement('p');
        yLabel.innerText="Y:"
        let sizeLabel=document.createElement('p');
        sizeLabel.innerText="Size:";
        let sizeValue=document.createElement('p');
        sizeValue.innerText="3";
        let orientationLabel=document.createElement('p');
        orientationLabel.innerText="Or:";
        let button1=document.createElement('button');
        button1.className="buttonAccept"
        button1.id="button_"+i;
        button1.innerText="Accept"

        let xInput1=document.createElement('input');
        xInput1.placeholder="0";
        xInput1.id="Xinput_"+i;
        lineShip1.appendChild(xInput1);
        lineShip1.appendChild(yLabel);
        let yInput1=document.createElement('input');    
        yInput1.placeholder="0";
        yInput1.id="Yinput_"+i;
        lineShip1.appendChild(yInput1);
        lineShip1.appendChild(orientationLabel)
        let orientationInput1=document.createElement('select');
        
        orientationInput1.placeholder="V";
        orientationInput1.id="Orientation_"+i;
        let option1=document.createElement('option');
        option1.text="V";
        option1.value="V";
        orientationInput1.appendChild(option1);        
        let option2=document.createElement('option');
        option2.text="H";
        option2.value="H";
        orientationInput1.appendChild(option2);
        lineShip1.appendChild(orientationInput1);
        
        lineShip1.appendChild(orientationInput1);    
        lineShip1.appendChild(sizeLabel);
        lineShip1.appendChild(sizeValue);
        lineShip1.appendChild(button1);
        contentElement.appendChild(lineShip1);
        

    }


        
    

    function addListeners(){        
        let elementReset=document.getElementById("resetGame");
        elementReset.addEventListener("click",(e)=>{
            console.log("reset");
            location.reload();
        })

        for (let i=1;i<4;i++){
            let element=document.getElementById("button_"+i);
            element.addEventListener("click",(e)=>{
                console.log("clicked button "+ i)
                //this.close();
                console.log(JSON.stringify(ships[i-1]));
            })
            let elementInput=document.getElementById("Xinput_"+i);
            elementInput.addEventListener("change",(e)=>{                
                ships[i-1][0]=e.target.value;
            })
            let elementInput2=document.getElementById("Yinput_"+i);
            elementInput2.addEventListener("change",(e)=>{                
                ships[i-1][1]=e.target.value;
            })
            let elementInput3=document.getElementById("Orientation_"+i);
            elementInput3.addEventListener("change",(e)=>{                
                ships[i-1][2]=e.target.value;
            })
        }
        

    }

    function close(){
        let Element=document.getElementById('insertShip');         
        console.log(JSON.stringify(Element))
        Element.innerHTML=""
    }

    return {
        contentElement,
        addListeners,
        close
    };
}
module.exports = UIplayer