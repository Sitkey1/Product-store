import { toggleFavoriteIcon } from "../script.js";

function createProductCard(currentProduct, productContainer) {
  const productCard = document.createElement("div");
  productCard.classList.add("products-card");

  const { id, title, description, image, price, isFavorite } = currentProduct;

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

  toggleFavorite(productCard, id, isFavorite);
}

function toggleFavorite(productCard, id, isFavorite) {
  const likeIcon = productCard.querySelector(".like");
  // Обновляем иконку лайка в зависимости от состояния isFavorite
  if (isFavorite) {
    likeIcon.classList.add("fas");
    likeIcon.classList.remove("far");
  } else {
    likeIcon.classList.add("far");
    likeIcon.classList.remove("fas");
  }

  likeIcon.addEventListener("click", () => toggleFavoriteIcon(id, likeIcon));
}

export { createProductCard };
