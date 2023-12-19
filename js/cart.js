let tbody = document.getElementById("tbody");
let deleteAll = document.getElementById("deleteAll");

let product;
if(localStorage.getItem("products") == null){
    product = []
}else{
    product = JSON.parse(localStorage.getItem("products"))
}

function displayProducts(){
    let card = "";
    for(let i = 0; i < product.length; i += 1){
        card += `
            <tr>
            <td>${product[i].id}</td>
            <td>${product[i].title}</td>
            <td>${product[i].price}</td>
            <td><img src="${product[i].img}" class="img-fluid w-25"></td>
            <td><button class="btn btn-danger" onclick="deleteElement(${i})">Remove</button></td>
            </tr>
        `
    }
    tbody.innerHTML = card
}
displayProducts()

deleteAll.addEventListener("click", function(){
    product.splice(0)
    localStorage.clear()
    displayProducts()
})

function deleteElement(index){
    product.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(product))
    displayProducts()
}