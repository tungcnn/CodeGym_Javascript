function display(val) {
    document.getElementById("expression").value += val;
}
function calculate() {
    let result = eval(document.getElementById("expression").value);
    document.getElementById("expression").value = result;
}