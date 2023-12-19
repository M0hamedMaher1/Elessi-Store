window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    let x = window.scrollY;
    if (x > 300) {
        nav.style.margin = "0"
    } else {
        nav.style.margin = "-130px 0 0"
    }
})

let spanCount = document.querySelector("#basket span");
let spanCount2 = document.querySelector("#basket2 span");
let addBtn = document.querySelectorAll(".button h4");
let imgs = document.querySelectorAll(".image img");
let title = document.querySelectorAll(".card-body h3");
let price = document.querySelectorAll(".red");
let addOne = document.querySelectorAll(".addOne");
let heart = document.querySelectorAll(".heart i span")

let list;
if (localStorage.getItem("products") == null) {
    list = []
} else {
    list = JSON.parse(localStorage.getItem("products"))
    spanCount.innerHTML = list.length
    spanCount2.innerHTML = list.length
}

for (let i = 0; i < addBtn.length; i += 1) {
    addBtn[i].addEventListener("click", function () {
        let object1 = {
            id: Date.now(),
            img: imgs[i].src,
            title: title[i].textContent,
            price: price[i].textContent
        };
        list.push(object1);
        spanCount.innerHTML = list.length
        spanCount2.innerHTML = list.length
        window.localStorage.setItem("products", JSON.stringify(list));
    })
};

let counter = 0;

for(let i = 0; i < addOne.length; i += 1){
    addOne[i].addEventListener("click", function(){
        counter++;
        for(let x = 0; x < heart.length; x += 1){
            heart[x].innerHTML = `${counter}`;
        }
    })
}