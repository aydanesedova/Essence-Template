function getProducts() {
    productsCart.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.title}</h2>
        <button onclick = "removeItem(${index})">Remove from Cart</button>
        `
        productsCart.append(box)
    })
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getProducts()
}
window.onload = () => {
    getProducts()
}