// main.js for ColourFlipper

var body = document.body;
var colourText = document.querySelector(".colour");
body.style.backgroundColor="red";

function changeColour() {
    const colours = ["red", "orange", "yellow", "green", "blue", "purple"];
    let colPick = Math.floor(Math.random() * colours.length);
    
    body.style.backgroundColor=colours[colPick];
    colourText.textContent = colours[colPick];
}

