import { createProductCard } from "./handlers/handleCard.js";
import {
  localStorageClear,
  localStorageGetItem,
  localStorageSetItem,
} from "./localStorage.js";
import getRandomProduct from "./math.js";

const productContainer = document.getElementById("products-container");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const PRODUCTS_STORAGE_KEY = "addedProducts";
const MAX_PRODUCTS_COUNT = 8;

let addedProducts = [];

// Функция для рендера всех товаров из localStorage
function renderAllProductsFromStorage() {
  const storedProducts = localStorageGetItem(PRODUCTS_STORAGE_KEY);
  if (storedProducts) {
    addedProducts = JSON.parse(storedProducts); // Преобразуем строку обратно в массив
    addedProducts.forEach((el) => createProductCard(el, productContainer)); // Отображаем все товары
    toggleButtonVisibility; //Обновляем видимость кнопок
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

    saveProductsToStorage();
  }
}
// Функция отображения кнопок загрузки/очистки
function toggleButtonVisibility() {
  loadBtn.style.display =
    addedProducts.length > MAX_PRODUCTS_COUNT ? "none" : "block";
  clearBtn.style.display = !addedProducts.length ? "none" : "block";
}

function addProduct() {
  let currentProduct;
  // Испольхую цикл, для проверки совпадения генерируемых продуктов, если id совпадает - то генерируем новый
  do {
    currentProduct = getRandomProduct();
  } while (addedProducts.some((el) => el.id === currentProduct.id)); // проверяем, совпадает ли id полученного продукта, в массиве addedProducts
  addedProducts.push({ ...currentProduct, isFavorite: false });

  createProductCard(currentProduct, productContainer); // Отображаем карточки с товарами
  saveProductsToStorage(); // Сохраняем товары в localStorage
  toggleButtonVisibility(); // Обновляем видимость кнопок загрузка/очистка
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

// Функция удаления товаров по клику
function deleteCardProducts() {
  clearBtn.addEventListener("click", () => {
    productContainer.innerHTML = ""; // Очистить все карточки
    addedProducts = []; // Очищаем массив с товарами
    localStorageClear(); // Очищаем LocalStorage
    toggleButtonVisibility(); // Обновляем видимость кнопок загрузка/очистка
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderAllProductsFromStorage(); // Рендерим все продукты из localStorage
  loadCardProducts(); // Загрузка товаров по клику
  deleteCardProducts(); // Удаление карточек товаров из DOM и LocalStorage
  toggleButtonVisibility(); // Обновляем видимость кнопок загрузка/очистка
});

export { toggleFavoriteIcon };
