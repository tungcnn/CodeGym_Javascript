function baitap1() {
    let diemLy = prompt("Nhập điểm lý: ");
    let diemHoa = prompt("Nhập điểm hóa: ");
    let diemSinh = prompt("Nhập điểm sinh: ");

    let _diemLy = parseFloat(diemLy);
    let _diemHoa = parseFloat(diemHoa);
    let _diemSinh = parseFloat(diemSinh);
    
    let sum = _diemLy + _diemHoa + _diemSinh;
    let average = sum/3;

    document.getElementById("sum").innerHTML = "Tổng điểm: " + sum;
    document.getElementById("average").innerHTML = "Trung bình: " + average;
}

function baitap2() {
    let degreeC = prompt("Nhập độ C: ");
    let degreeF = degreeC/5*9 + 32;

    document.getElementById("degree").innerHTML = "Độ F là: " + degreeF;
}

function baitap3() {
    let radius = prompt("Nhập bán kính: ");
    let area = radius*radius*3.14;

    document.getElementById("dientich").innerHTML = "Diện tích hình tròn là: " + area;
}

function baitap4() {
    let radius = prompt("Nhập bán kính: ");
    let chuvi = radius*2*3.14;

    document.getElementById("chuvi").innerHTML = "Chu vi hình tròn là: " + chuvi;
}