function getValue(id) {
    return document.getElementById(id).value;
}

function checkDivision() {
    let a = getValue("numbera");
    let b = getValue("numberb");
    
    if (a % b == 0) {
        document.getElementById("result1").innerHTML = "a chia hết cho b";
    } else {
        document.getElementById("result1").innerHTML = "a không chia hết cho b";
    }
}
function checkAge() {
    let age = getValue("age");

    if (age < 16) {
        document.getElementById("result2").innerHTML = "chưa đủ tuổi"
    } else {
        document.getElementById("result2").innerHTML = "đủ tuổi"
    }
}
function checkZero() {
    let number = getValue("intnumber");

    if (number > 0) {
        document.getElementById("result3").innerHTML = "lớn hơn 0"
    } else if (number < 0) {
        document.getElementById("result3").innerHTML = "nhỏ hơn 0"
    } else {
        document.getElementById("result3").innerHTML = "bằng 0"
    }
}
function findMax() {
    let number1 = getValue("number1");
    let number2 = getValue("number2");
    let number3 = getValue("number3");
    if (number1 > number2 && number1 > number3) {
        document.getElementById("result4").innerHTML = "số thứ 1 là max"
    } else {
        if (number2 > number3) {
            document.getElementById("result4").innerHTML = "số thứ 2 là max"
        } else {
            document.getElementById("result4").innerHTML = "số thứ 3 là max"
        }
    }
}
function rankStudent() {
    let score1 = parseInt(getValue("test"));
    let score2 = parseInt(getValue("midterm"));
    let score3 = parseInt(getValue("final"));
    let average = (score1+score2+score3)/3;
    average = average.toFixed(1);

    if (average > 8) {
        document.getElementById("result5").innerHTML = "điểm TB " + average + ". Học sinh giỏi";
    } else {
        if (average > 6.5) {
            document.getElementById("result5").innerHTML = "điểm TB " + average + ". Học sinh khá";
        } else {
            if (average > 4) {
                document.getElementById("result5").innerHTML = "điểm TB " + average + ". Học sinh trung bình";
            } else {
                document.getElementById("result5").innerHTML = "điểm TB " + average + ". Học sinh yếu";
            }
        }
    }
}
function checkBonus() {
    let sales = getValue("sales");

    if (sales > 500000) {
        document.getElementById("result6").innerHTML = "hoa hồng 10%"
    } else {
        if (sales > 200000) {
            document.getElementById("result6").innerHTML = "hoa hồng 5%"
        } else {
            document.getElementById("result6").innerHTML = "không có hoa hồng"
        }
    }
}
function checkPhoneFee() {
    let minutes = getValue("minutes");
    let fee;
    if (minutes <= 50) {
        fee = minutes*600;
    } else {
        if (minutes <= 200) {
            fee = 50*600 + (minutes - 50)*400;
        } else {
            fee = 50*600 + 150*400 + (minutes - 200)*200;
        }
    }
    document.getElementById("result7").innerHTML = "cước phí cho " + minutes + " phút là " + fee + " VND";
}