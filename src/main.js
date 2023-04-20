import './style.css'; 
let ui =require("./uI.js")
let uiGrid =require("./ui-grid.js")

let component=ui();
document.body.appendChild(component);

let element= uiGrid.uiGrid();
element.generateUI();
element.addListener();