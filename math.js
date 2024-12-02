import products from "./data.js";

function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}
export default getRandomProduct;
