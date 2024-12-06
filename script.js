import { createProductCard } from "./handlers/createCard.js";
import { localStorageGetItem, localStorageSetItem } from "./localStorage.js";
import getRandomProduct from "./math.js";

const productContainer = document.getElementById("products-container");
const loadBtn = document.getElementById("load-btn");
const PRODUCTS_STORAGE_KEY = "addedProducts";
const MAX_PRODUCTS_COUNT = 8;

let addedProducts = [];
let currentProductCount = 0;

// Функция для отображения товара
function renderProduct(product) {
  createProductCard(product, productContainer);
}

// Функция для рендера всех товаров из localStorage
function renderAllProductsFromStorage() {
  const storedProducts = localStorageGetItem(PRODUCTS_STORAGE_KEY);
  if (storedProducts) {
    addedProducts = JSON.parse(storedProducts); // Преобразуем строку обратно в массив
    addedProducts.forEach((el) => renderProduct(el)); // Отображаем все товары
    currentProductCount = addedProducts.length; // Обновляем количество продуктов
    toggleLoadButtonVisibility();
  }
}

// Функция для сохранения товаров в localStorage
function saveProductsToStorage() {
  localStorageSetItem(PRODUCTS_STORAGE_KEY, addedProducts); // Сохраняем массив товаров
}

// Функция для переключения состояния "избранного"
function toggleFavoriteIcon(id, likeIcon) {
  const product = addedProducts.find((p) => p.id === id);
  if (product) {
    product.isFavorite = !product.isFavorite;
    likeIcon.classList.toggle("fas", product.isFavorite);
    likeIcon.classList.toggle("far", !product.isFavorite);
  }
}
// Функция для скрытия кнопки загрузки, если товаров больше MAX_PRODUCTS_COUNT
function toggleLoadButtonVisibility() {
  loadBtn.style.display =
    currentProductCount > MAX_PRODUCTS_COUNT ? "none" : "block";
}

function addProduct() {
  let currentProduct;
  // Испольхую цикл, для проверки совпадения генерируемых продуктов, если id совпадает - то генерируем новый
  do {
    currentProduct = getRandomProduct();
  } while (addedProducts.some((el) => el.id === currentProduct.id)); // проверяем, совпадает ли id полученного продукта, в массиве addedProducts
  addedProducts.push({ ...currentProduct, isFavorite: false });

  currentProductCount++; // Увеличиваем счетчик продуктов
  renderProduct(currentProduct);
  saveProductsToStorage(); // Сохраняем товары в localStorage
  toggleLoadButtonVisibility(); // Обновляем видимость кнопки загрузки
}

// Функция загрузки товаров по клику
function loadCardProducts() {
  loadBtn.addEventListener("click", () => {
    const numberOfProductsToLoad = 2;
    for (let i = 0; i < numberOfProductsToLoad; i++) {
      addProduct();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderAllProductsFromStorage(); // Рендерим все продукты из localStorage
  loadCardProducts(); // Загрузка товаров по клику
});

export { toggleFavoriteIcon };
