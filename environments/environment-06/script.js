"use strict";

window.addEventListener("load", initApp);

let products = [];
let basket = [];

async function initApp() {
    console.log("Detonating Nuclear Rocket! 🚀");
    products = await getProducts();
    showProducts();
}

async function getProducts() {
    const response = await fetch("products.json");
    const data = await response.json();
    return data;
}

function showProducts() {
    const productsSection = document.getElementById("products");

    products.forEach(product => {
        const article = document.createElement("article");
        const productName = document.createElement("h3");
        const weight = document.createElement("p");
        const price = document.createElement("p");
        const addToCartButton = document.createElement("button");
        
        productName.textContent = product.name;
        weight.textContent = `vægt: ${product.weight} g`;
        price.textContent = `pris: ${product.price} ,-<`;
        addToCartButton.textContent = "Læg i kurv";

        article.appendChild(productName);
        article.appendChild(weight);
        article.appendChild(price);
        article.appendChild(addToCartButton);

        productsSection.appendChild(article);
    });
}

function showBasket() {
    const basketSection = document.getElementById("basket")
}