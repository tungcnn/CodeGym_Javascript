// bai tap 1
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
document.write('<br/>')

// bai tap 2
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)

//bai tap 3
function calculate() {
    let a = prompt("Nhập số thứ nhất: ");
    let b = prompt("Nhập số thứ hai");

    if (a % b == 0) {
        alert("Số thứ 1 chia hết cho số thứ 2");
    } else {
        alert("Số thứ 1 không chia hết cho số thứ 2");
    }
}