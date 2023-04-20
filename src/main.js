import './style.css'; 
let ui =require("./uI.js")
let uiGrid =require("./ui-grid.js")

let component=ui();
document.body.appendChild(component);
function init(){
let element= uiGrid.uiGrid();
element.init();
element.generateUI();
element.addListener();
}
init();

let general=document.getElementById('resetGame')
general.addEventListener("click",function(){
    init();
})