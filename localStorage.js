function localStorageSetItem(key, value) {
  if (typeof key !== "string") {
    console.error("Error: Key must be a string");
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    // localStorage.setItem(key);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Error setting item in localStorage", error);
  }
}

function localStorageGetItem(key) {
  // const value = localStorage.getItem(key);

  try {
    // return JSON.parse(value);
    return localStorage.getItem(key);
  } catch (error) {
    // Если не удается распарсить, возвращаем пустой массив
    console.error("Error parsing localStorage item:", error);
    return [];
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear(key) {
  localStorage.clear(key);
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
