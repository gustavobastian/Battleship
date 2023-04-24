const UIplayer = function (turn) {
    console.log("here")
    let contentElement=document.getElementById('insertShip'); 
    contentElement.className="insertShip";
    let lineShip1=document.createElement('div');
    lineShip1.className="lineShip";
    lineShip1.id="lineShip1";
    let lineShip2=document.createElement('div');
    lineShip2.className="lineShip";
    lineShip2.id="lineShip2";
    let lineShip3=document.createElement('div');
    lineShip3.className="lineShip";
    lineShip3.id="lineShip3";
    
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


    let xLabel2=document.createElement('p');
    xLabel2.innerText="X:";
    let yLabel2=document.createElement('p');
    yLabel2.innerText="Y:";
    let sizeLabel2=document.createElement('p');
    sizeLabel2.innerText="Size:";
    let sizeValue2=document.createElement('p');
    sizeValue2.innerText="3";
    let orientationLabel2=document.createElement('p');
    orientationLabel2.innerText="Or:";

    let xLabel3=document.createElement('p');
    xLabel3.innerText="X:";
    let yLabel3=document.createElement('p');
    yLabel3.innerText="Y:";
    let sizeLabel3=document.createElement('p');
    sizeLabel3.innerText="Size:";
    let sizeValue3=document.createElement('p');
    sizeValue3.innerText="3";
    let orientationLabel3=document.createElement('p');
    orientationLabel3.innerText="Or:";
    
    
    lineShip1.appendChild(xLabel);
    let xInput1=document.createElement('input');
    lineShip1.appendChild(xInput1);
    lineShip1.appendChild(yLabel);
    let yInput1=document.createElement('input');    
    lineShip1.appendChild(yInput1);
    lineShip1.appendChild(orientationLabel)
    let orientationInput1=document.createElement('input');
    lineShip1.appendChild(orientationInput1);
    lineShip1.appendChild(sizeLabel);
    lineShip1.appendChild(sizeValue);
    contentElement.appendChild(lineShip1);
    
    lineShip2.appendChild(xLabel2);
    let xInput2=document.createElement('input');
    lineShip2.appendChild(xInput2);
    lineShip2.appendChild(yLabel2);
    let yInput2=document.createElement('input');    
    lineShip2.appendChild(yInput2);
    lineShip2.appendChild(orientationLabel2)
    let orientationInput2=document.createElement('input');
    lineShip2.appendChild(orientationInput2);
    lineShip2.appendChild(sizeLabel2);
    lineShip2.appendChild(sizeValue2);
    contentElement.appendChild(lineShip2);

    lineShip3.appendChild(xLabel3);
    let xInput3=document.createElement('input');
    lineShip3.appendChild(xInput3);
    lineShip3.appendChild(yLabel3);
    let yInput3=document.createElement('input');    
    lineShip3.appendChild(yInput3);
    lineShip3.appendChild(orientationLabel3);
    let orientationInput3=document.createElement('input');
    lineShip3.appendChild(orientationInput3);
    lineShip3.appendChild(sizeLabel3);
    lineShip3.appendChild(sizeValue3);
    contentElement.appendChild(lineShip3);


    return contentElement;
}
module.exports = UIplayer