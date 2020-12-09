let _calculated = false;
let currentExpression;

function randomColor(x) {
    var color = Math.floor(Math.random()*16777215).toString(16);
    x.style.backgroundColor = "#"+color;
}
function rollbackColor(x, y) {
    x.style.backgroundColor = y;
}
function handle(type){
    currentExpression = document.getElementById("expression").value;
    if(type == "CE"){
        CE(currentExpression)
    } else if(type == "calculate"){
        calculate(currentExpression);
    }
}
function display(val) {
    if (_calculated) {
        CE();
        document.getElementById("expression").value += val;
    } else {
        document.getElementById("expression").value += val;
    } 
}
function calculate(currentExpression) { 
    document.getElementById("previousexpression").value = currentExpression;
    let result = +eval(currentExpression).toFixed(4);
    document.getElementById("expression").value = result;
    _calculated = true;
}
function CE(currentExpression) {
    if (_calculated) {
        document.getElementById("previousexpression").value = document.getElementById("expression").value;
        document.getElementById("expression").value = '';
    } else {
        currentExpression = currentExpression.slice(0, -1);
        document.getElementById('expression').value = currentExpression;
    }
    _calculated = false;
}
function askInput() {
    let x = prompt("Enter your number:");
    return x;
}
function squareRoot() {
    let x = askInput();
    document.getElementById('expression').value += +Math.sqrt(x).toFixed(4);
}
function power() {
    let x = askInput();
    let y = askInput();
    document.getElementById('expression').value += +Math.pow(x, y).toFixed(4);    
}
function ln() {
    let x = askInput();
    document.getElementById('expression').value += +Math.log(x).toFixed(4);    
}
function log() {
    let x = askInput();
    document.getElementById('expression').value += +Math.log10(x).toFixed(4);
}
function sin() {
    let x = askInput();
    document.getElementById('expression').value += +Math.sin(x).toFixed(4);
}
function cos() {
    let x = askInput();
    document.getElementById('expression').value += +Math.cos(x).toFixed(4);
}
function tan() {
    let x = askInput();
    document.getElementById('expression').value += +Math.tan(x).toFixed(4);
}
function exp() {
    let x = askInput();
    document.getElementById('expression').value += +Math.exp(x).toFixed(4);
}
function ans() {
    let previousexpression = document.getElementById('previousexpression').value;
    if (previousexpression != null) {
        document.getElementById('expression').value += previousexpression;
    }
}
function saySomething() {
    alert("This button is useless");
}