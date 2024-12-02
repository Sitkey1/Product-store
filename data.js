const products = [
  {
    id: 1,
    title: "Смартфон Samsung Galaxy S23",
    description:
      "Современный смартфон с 6,1-дюймовым экраном Dynamic AMOLED 2X, процессором Exynos 2200 и камерами с разрешением 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Samsung+Galaxy+S23",
    price: 74990,
  },
  {
    id: 2,
    title: "Смартфон Apple iPhone 14",
    description:
      "Элегантный смартфон с 6,1-дюймовым экраном Super Retina XDR, чипом A15 Bionic и 12 МП камерой.",
    image: "https://via.placeholder.com/150x150.png?text=iPhone+14",
    price: 79990,
  },
  {
    id: 3,
    title: "Смартфон Xiaomi Mi 13",
    description:
      "Мощный смартфон с экраном 6,36 дюймов, процессором Snapdragon 8 Gen 2 и камерой 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Xiaomi+Mi+13",
    price: 65990,
  },
  {
    id: 4,
    title: "Смартфон Google Pixel 8",
    description:
      "Смартфон с 6,2-дюймовым OLED-экраном, Google Tensor G3 и отличными камерами для фотографий в любых условиях.",
    image: "https://via.placeholder.com/150x150.png?text=Google+Pixel+8",
    price: 74990,
  },
  {
    id: 5,
    title: "Смартфон OnePlus 11",
    description:
      "Флагман OnePlus с 6,7-дюймовым экраном Fluid AMOLED и процессором Snapdragon 8 Gen 2.",
    image: "https://via.placeholder.com/150x150.png?text=OnePlus+11",
    price: 72990,
  },
  {
    id: 6,
    title: "Смартфон OPPO Find X5 Pro",
    description:
      "Элегантный смартфон с экраном 6,7 дюймов, процессором Snapdragon 8 Gen 1 и камерами Hasselblad.",
    image: "https://via.placeholder.com/150x150.png?text=OPPO+Find+X5+Pro",
    price: 84990,
  },
  {
    id: 7,
    title: "Смартфон Huawei P50 Pro",
    description:
      "Флагман Huawei с экраном 6,6 дюймов, процессором Kirin 9000 и камерами Leica.",
    image: "https://via.placeholder.com/150x150.png?text=Huawei+P50+Pro",
    price: 79990,
  },
  {
    id: 8,
    title: "Смартфон Sony Xperia 1 IV",
    description:
      "Смартфон с 6,5-дюймовым OLED-экраном и процессором Snapdragon 8 Gen 1 для профессиональной съемки.",
    image: "https://via.placeholder.com/150x150.png?text=Sony+Xperia+1+IV",
    price: 109990,
  },
  {
    id: 9,
    title: "Смартфон Samsung Galaxy Z Fold 5",
    description:
      "Складной смартфон с экраном 7,6 дюймов, процессором Snapdragon 8+ Gen 1 и уникальным дизайном.",
    image: "https://via.placeholder.com/150x150.png?text=Samsung+Z+Fold+5",
    price: 179990,
  },
  {
    id: 10,
    title: "Смартфон Motorola Edge 40",
    description:
      "Доступный смартфон с 6,55-дюймовым OLED-экраном и процессором Dimensity 8020.",
    image: "https://via.placeholder.com/150x150.png?text=Motorola+Edge+40",
    price: 44990,
  },
  {
    id: 11,
    title: "Смартфон Realme GT 2 Pro",
    description:
      "Флагман от Realme с 6,7-дюймовым AMOLED экраном и процессором Snapdragon 8 Gen 1.",
    image: "https://via.placeholder.com/150x150.png?text=Realme+GT+2+Pro",
    price: 54990,
  },
  {
    id: 12,
    title: "Смартфон Vivo X90 Pro",
    description:
      "Смартфон с экраном 6,78 дюймов, процессором Dimensity 9200 и камерой 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Vivo+X90+Pro",
    price: 79990,
  },
  {
    id: 13,
    title: "Смартфон ASUS ZenFone 9",
    description:
      "Компактный смартфон с 5,9-дюймовым AMOLED экраном и процессором Snapdragon 8 Gen 1.",
    image: "https://via.placeholder.com/150x150.png?text=ASUS+ZenFone+9",
    price: 54990,
  },
  {
    id: 14,
    title: "Смартфон Xiaomi Redmi Note 12 Pro",
    description:
      "Доступный смартфон с экраном 6,67 дюймов, процессором MediaTek Dimensity 1080 и 50 МП камерой.",
    image:
      "https://via.placeholder.com/150x150.png?text=Xiaomi+Redmi+Note+12+Pro",
    price: 24990,
  },
  {
    id: 15,
    title: "Смартфон Nokia G400 5G",
    description:
      "Доступный смартфон с экраном 6,58 дюймов, процессором Snapdragon 480 5G и камерой 48 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Nokia+G400+5G",
    price: 19990,
  },
  {
    id: 16,
    title: "Смартфон Honor Magic 5 Pro",
    description:
      "Флагман Honor с экраном 6,81 дюймов, процессором Snapdragon 8 Gen 2 и камерами с разрешением 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Honor+Magic+5+Pro",
    price: 84990,
  },
  {
    id: 17,
    title: "Смартфон Infinix Zero Ultra",
    description:
      "Смартфон с экраном 6,8 дюймов, процессором Dimensity 920 и камерой 200 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Infinix+Zero+Ultra",
    price: 34990,
  },
  {
    id: 18,
    title: "Смартфон Motorola Moto G82",
    description:
      "Смартфон с 6,6-дюймовым OLED-экраном и процессором Snapdragon 695 5G.",
    image: "https://via.placeholder.com/150x150.png?text=Motorola+Moto+G82",
    price: 21990,
  },
  {
    id: 19,
    title: "Смартфон Meizu 20 Pro",
    description:
      "Флагманский смартфон с экраном 6,81 дюймов, процессором Snapdragon 8 Gen 2 и камерами с разрешением 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Meizu+20+Pro",
    price: 79990,
  },
  {
    id: 20,
    title: "Смартфон Tecno Phantom X2 Pro",
    description:
      "Смартфон с экраном 6,8 дюймов, процессором Dimensity 9000+ и камерой 50 МП.",
    image: "https://via.placeholder.com/150x150.png?text=Tecno+Phantom+X2+Pro",
    price: 59990,
  },
];

export default products;
