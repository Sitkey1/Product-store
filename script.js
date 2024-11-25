const productContainer = document.getElementById("products-container");
const loadBtn = document.getElementById("load-btn");
import products from "./data.js";

function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

let currentProductCount = 0;

function addProduct() {
  const productCard = document.createElement("div");
  productCard.classList.add("products-card");

  const { title, description, image, price } = getRandomProduct();

  productCard.innerHTML = `
    <h2>${title}</h2>
    <span class="card-image">${image}</span>
    <p>${description}</p>
    <span class="price">${price} ₽</span>
  `;

  productContainer.appendChild(productCard);
  currentProductCount++;

  if (currentProductCount > 8) {
    loadBtn.style.display = "none";
  }
}

loadBtn.addEventListener("click", () => {
  const numberOfProductsToLoad = 2;

  for (let i = 0; i < numberOfProductsToLoad; i++) {
    addProduct();
  }
});
