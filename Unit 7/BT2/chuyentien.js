function convert(){
    let amount = document.getElementById("amount").value;
    let _amount = parseFloat(amount);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let result;

    if (fromCurrency == "USD") {
        if (toCurrency == "VND") {
            result = _amount*23127.50;
            result = result.toFixed(2);
            document.getElementById("result").innerHTML = "Result: " + result + " VND";
        } else {
            document.getElementById("result").innerHTML = "Ko thể chuyển đổi cùng tiền tệ"
        }
    } else {
        if (toCurrency == "USD") {
            result = _amount/23127.50;
            result = result.toFixed(2);
            document.getElementById("result").innerHTML = "Result: " + result + " USD";
        } else {
            document.getElementById("result").innerHTML = "Ko thể chuyển đổi cùng tiền tệ"
        }
    }
}