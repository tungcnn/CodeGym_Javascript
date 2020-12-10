function getValue(id) {
    return document.getElementById(id).value;
}

function convertToF () {
    let degree = getValue("degree");
    let degreeF = degree*9/5 + 32;

    document.getElementById('result1').innerHTML = degreeF + " F"
}

function convertToFeet () {
    let meter = getValue("meter");
    let feet = meter*3.2808;
    feet = feet.toFixed(2)

    document.getElementById('result2').innerHTML = feet + " Feet"
}
function calculateSquare () {
    let square = getValue("square");
    let area = square**2;

    document.getElementById('result3').innerHTML = area; 
}
function calculateRectangle () {
    let a = getValue("recsideA");
    let b = getValue("recsideB");
    let area = a*b;

    document.getElementById('result4').innerHTML = area;
}
function  calculateTriangle() {
    let a = getValue("trisideA");
    let b = getValue("trisideB");
    let area = a*b/2;

    document.getElementById('result5').innerHTML = area;
}
function solveX () {
    let a = getValue("numa6");
    let b = getValue("numb6");
    let c = getValue("numc6");
    let x= (c - b)/a;

    document.getElementById('result6').innerHTML = x;
}
function solveX2 () {
    let a = getValue("numa7");
    let b = getValue("numb7");
    let c = getValue("numc7");
    let delta = b**2 - 4*a*c;
    let x1, x2;
    let result = document.getElementById('result6').innerHTML;

    if (a+b+c == 0 && a!=0) {
        x1 = 1;
        x2 = c/a;
        result = "x1 = " + x1 + " và x2 = " + x2;
    } else if (a-b+c == 0) {
        x1 = -1;
        x2 = -c/a;
        result = "x1 = " + x1 + " và x2 = " + x2;
    } else {
        if (delta < 0 ) {
            result = "Vô nghiệm"
        } else if (delta = 0) {
            x1 = -b/2*a;
            result = "Nghiệm kép x1 = x2 = " + x1;
        } else {
            x1 = (-b + Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);
            x1.toFixed(2);
            x2.toFixed(2);
            result = "x1 = " + x1 + " và x2 = " + x2;
        }
    }
    document.getElementById('result7').innerHTML = result;
}
function checkAge() {
    let age = getValue("age");
    let bool = Number.isInteger(parseInt(age));
    
    if (bool == true && age > 0 && age <= 120) {
        document.getElementById("result8").innerHTML = "đây là tuổi";
    } else {
        document.getElementById("result8").innerHTML = "đây không phải tuổi";
    }
}
function checkTriangle() {
    let a = getValue("sideA9");
    let b = getValue("sideB9");
    let c = getValue("sideC9");

    if (a > 0 && b > 0 && c > 0 && a+b>c && b+c>a && a+c>b) {
            document.getElementById("result9").innerHTML = "đây là 3 cạnh 1 tam giác"
    } else {
        document.getElementById("result9").innerHTML = "đây ko phải 3 cạnh 1 tam giác"
    }
}
function calculateElectric() {
    let kwh = getValue("electric");
    let bill;

    if (kwh <= 50) {
        bill = kwh*1678;
    } else {
        if (kwh <= 100) {
            bill = 1678*50 + 1734*(kwh-50);
        } else {
            if (kwh <= 200) {
                bill = 1678*50 + 1734*50 + 2014*(kwh - 100)
            } else {
                if (kwh <= 300) {
                    bill = 1678*50 + 1734*50 + 2014*100 + 2536*(kwh-200)
                } else {
                    if (kwh <= 400) {
                        bill = 1678*50 + 1734*50 + 2014*100 + 2536*100 + 2834*(kwh-300)
                    } else {
                        bill = 1678*50 + 1734*50 + 2014*100 + 2536*100 + 2834*100 + 2927*(kwh-400)
                    }
                }
            }
        }
    }

    document.getElementById('result10').innerHTML = bill + " VND"
}
function calculateTax() {
    let income = getValue('income');
    let taxRate;
    let tax;
     
    if (income <= 60) {
        taxRate = 0.05;
    } else {
        if (income <= 120) {
            taxRate = 0.1
        } else {
            if (income <= 216) {
                taxRate = 0.15
            } else {
                if (income <= 384) {
                    taxRate = 0.2
                } else {
                    if (income <= 624) {
                        taxRate = 0.25
                    } else {
                        if (income <= 960) {
                            taxRate = 0.3
                        } else {
                            taxRate = 0.35
                        }
                    }
                }
            }
        }
    }
    tax = income*taxRate;
    tax = tax.toFixed(2);
    document.getElementById("result11").innerHTML = tax + " triệu VND/năm với thuế suất là " + taxRate*100 + "%"
}
function calculateProfit() {
    let balance = parseInt(getValue("balance"));
    let month = parseInt(getValue("month"));
    let interest = parseFloat(getValue("interest"));
    interest = interest.toFixed(2);
    console.log(balance);
    console.log(month);
    console.log(interest);
    let futureBalance = balance*((1 + interest)**month);

    document.getElementById("result12").innerHTML = "Sau " + month + " tháng bạn sẽ có " + futureBalance + " VND"
}
