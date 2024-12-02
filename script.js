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
  <img src="${image}" class="card-image">
  <div class="product-card-container">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="bottom-box">
      <div class="like-container">
        <i class="fas fa-heart like"></i>
        <i class="far fa-heart like"></i>
      </div>
      <span class="price">${price} ₽</span>
    </div>
  </div>
  
  

   

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
