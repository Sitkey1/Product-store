import getRandomProduct from "./math.js";

const productContainer = document.getElementById("products-container");
const loadBtn = document.getElementById("load-btn");

let addedProducts = [];
let currentProductCount = 0;

// Функция для переключения состояния "избранного"
function toggleFavorite(id, likeIcon) {
  const product = addedProducts.find((p) => p.id === id);
  if (product) {
    product.isFavorite = !product.isFavorite;
    likeIcon.classList.toggle("fas", product.isFavorite);
    likeIcon.classList.toggle("far", !product.isFavorite);
  }
}

function addProduct() {
  let currentProduct;

  // Испольхую цикл, для проверки совпадения генерируемых продуктов, если id совпадает - то генерируем новый
  do {
    currentProduct = getRandomProduct();
  } while (addedProducts.some((el) => el.id === currentProduct.id)); // проверяем, совпадает ли id полученного продукта, в массиве addedProducts
  addedProducts.push({ ...currentProduct, isFavorite: false });

  const productCard = document.createElement("div");
  productCard.classList.add("products-card");

  const { id, title, description, image, price } = currentProduct;

  productCard.innerHTML = `
  <img src="${image}" class="card-image">
  <div class="product-card-container">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="bottom-box">
      <div class="like-container">
        <i class="far fa-heart like" data-id="${id}"></i>
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

  const likeIcon = productCard.querySelector(".like");
  likeIcon.addEventListener("click", () => toggleFavorite(id, likeIcon));
}

loadBtn.addEventListener("click", () => {
  const numberOfProductsToLoad = 2;

  for (let i = 0; i < numberOfProductsToLoad; i++) {
    addProduct();
  }
});
