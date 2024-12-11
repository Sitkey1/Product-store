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

// Функция для удаления всех товаров из localStorage
function clearProductsToStorage() {
  // Обработчик для кнопки удаления
  localStorageClear(PRODUCTS_STORAGE_KEY);
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

// Функция для скрытия кнопки загрузки
function toggleLoadButtonVisibility() {
  loadBtn.style.display =
    addedProducts.length > MAX_PRODUCTS_COUNT ? "none" : "block";
}
// Функция для скрытия кнопки удаления
function toggleClearButtonVisibility() {
  clearBtn.style.display = !addedProducts.length ? "none" : "block";
}

function addProduct() {
  let currentProduct;
  // Испольхую цикл, для проверки совпадения генерируемых продуктов, если id совпадает - то генерируем новый
  do {
    currentProduct = getRandomProduct();
  } while (addedProducts.some((el) => el.id === currentProduct.id)); // проверяем, совпадает ли id полученного продукта, в массиве addedProducts
  addedProducts.push({ ...currentProduct, isFavorite: false });

  currentProductCount++; // Увеличиваем счетчик продуктов
  renderProduct(currentProduct); // Отображаем карточки с товарами
  saveProductsToStorage(); // Сохраняем товары в localStorage
  toggleLoadButtonVisibility(); // Обновляем видимость кнопки загрузки
  toggleClearButtonVisibility(); // Обновляем видимость кнопки удаления
}

// Функция для удаления карточек товаров из DOM
function removeProduct() {
  const child = productContainer.querySelector(".products-card");
  if (child) child.remove();
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
    clearProductsToStorage(); // Очищаем товары в LocalStorage

    for (let i = 0; i < addedProducts.length; i++) {
      removeProduct();
    }
    addedProducts = []; // Очищаем массив с товарами

    toggleClearButtonVisibility(); // Обновляем видимость кнопки удаления
    toggleLoadButtonVisibility(); // Обновляем видимость кнопки загрузки
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderAllProductsFromStorage(); // Рендерим все продукты из localStorage
  loadCardProducts(); // Загрузка товаров по клику
  deleteCardProducts(); // Удаление карточек товаров из DOM и LocalStorage
  toggleClearButtonVisibility(); // Скрываем кнопку очистки , когда товаров нет
});

export { toggleFavoriteIcon };
