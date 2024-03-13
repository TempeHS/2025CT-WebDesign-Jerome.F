let enterName = prompt("Welcome! Please Enter Your Name");
let playerGuess;
//let computerGuesss = randomNum
let computerGuess = randomNum();
let playerFeedback 
loadDIV ();

function randomNum() {
return Math.floor(Math.random() * (10 - 1 + 1) + 1)
}

function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1><H2>Jess ar nombar beteen wan and wan"
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV") 
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback
}

function enterNumber () {
playerGuess = prompt ("anta ar nombar")
}