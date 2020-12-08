function convert(){
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let result = amount*fromCurrency/toCurrency;
    
    document.getElementById("result").innerText = result;
}