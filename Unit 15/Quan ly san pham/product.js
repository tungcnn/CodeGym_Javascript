let products = [];

function Add() {
    let input = document.getElementById("newproduct");
    if (input.value.length <= 0) {
        alert("Please enter a new product name")
    } else {
        let product = input.value;
        products.push(product)
        document.getElementById("newproduct").value = ''

        Display();
    }
}
function Display() {
    let detail = document.getElementById("producttable")
    let productParameter = ''
    detail.innerHTML = "";
    detail.innerHTML = "<tr><th>Product Name</th><td id='total'>" + products.length + " products<td></tr>";
    
    for (let i = 0; i < products.length; i++) {
        productParameter = '("' + products[i] + '")'
        detail.innerHTML += "<tr><td class='name'>" + products[i] + "</td><td class='btntd'><button onclick='Edit" + productParameter + "'>Edit</button></td><td class='btntd'><button onclick='Delete" + productParameter + "'>Delete</button></td></tr>"
    }
}
function Edit(oldName) {
    let newName = prompt("Nhập tên mới");

    for (let i = 0; i < products.length; i++) {
        if (products[i] == oldName) {
            products[i] = newName;
        }
    }

    Display();
}
function Delete(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i] == name) {
            products.splice(i,1);
        }
    }

    Display();
}
