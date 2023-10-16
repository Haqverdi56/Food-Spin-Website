const container = document.getElementById("container");
const circle = document.querySelector(".circ");
const spin = document.querySelector(".spin");
const btnBefore = document.querySelector(".btnBefore");
const btn = document.querySelector(".btnNext");
const foodFive = document.querySelector(".food.five");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productButton = document.querySelector(".product-btn");
const productDescription = document.querySelector(".product-description");

let rotationDegree = 0;

const products = [
  {
    // image: "image1.jpg",
    name: "Ürün 1",
    description: "Ürün 1 Açıklaması",
    price: 19.99,
    bgColor: "blue",
  },
  {
    // image: "image2.jpg",
    name: "Ürün 2",
    description: "Ürün 2 Açıklaması",
    price: 29.99,
    bgColor: "red",
  },
  {
    // image: "image3.jpg",
    name: "Ürün 3",
    description: "Ürün 3 Açıklaması",
    price: 9.99,
    bgColor: "green",
  },
  {
    // image: "image4.jpg",
    name: "Ürün 4",
    description: "Ürün 4 Açıklaması",
    price: 39.99,
    bgColor: "darkblue",
  },
  {
    // image: "image5.jpg",
    name: "Ürün 5",
    description: "Ürün 5 Açıklaması",
    price: 24.99,
    bgColor: "cyan",
  },
  {
    // image: "image6.jpg",
    name: "Ürün 6",
    description: "Ürün 6 Açıklaması",
    price: 14.99,
    bgColor: "violet",
  },
  {
    // image: "image7.jpg",
    name: "Ürün 7",
    description: "Ürün 7 Açıklaması",
    price: 34.99,
    bgColor: "brown",
  },
  {
    // image: "image8.jpg",
    name: "Ürün 8",
    description: "Ürün 8 Açıklaması",
    price: 44.99,
    bgColor: "yellow",
  },
];

let count = 0;

productName.innerText = products[count].name;
productPrice.innerText = products[count].price;
productDescription.innerText = products[count].description;

btnBefore.addEventListener("click", function () {
  if (count == 0) {
    count = 8;
  }
  rotationDegree -= 45;
  circle.style.transform = `rotate(${rotationDegree}deg)`;
  foodFive.style.scale = "1";

  count -= 1;
  productName.innerText = products[count].name;
  productPrice.innerText = products[count].price;
  productDescription.innerText = products[count].description;
  circle.style.backgroundColor = products[count].bgColor;
  btnBefore.style.backgroundColor = products[count].bgColor;
  btn.style.backgroundColor = products[count].bgColor;
  productButton.style.backgroundColor = products[count].bgColor;
  productPrice.style.color = products[count].bgColor;

  productName.classList.add("animate");
  productPrice.classList.add("animate");
  productDescription.classList.add("animate");
  setTimeout(() => {
    productName.classList.remove("animate");
    productPrice.classList.remove("animate");
    productDescription.classList.remove("animate");
  }, 300);
});

btn.addEventListener("click", function () {
  if (count == products.length - 1) {
    count = -1;
  }

  rotationDegree += 45;
  foodFive.style.scale = "1";

  circle.style.transform = `rotate(${rotationDegree}deg)`;

  count += 1;
  productName.innerText = products[count].name;
  productPrice.innerText = products[count].price;
  productDescription.innerText = products[count].description;
  circle.style.backgroundColor = products[count].bgColor;
  btn.style.backgroundColor = products[count].bgColor;
  btnBefore.style.backgroundColor = products[count].bgColor;
  productButton.style.backgroundColor = products[count].bgColor;
  productPrice.style.color = products[count].bgColor;

  productName.classList.add("animate");
  productPrice.classList.add("animate");
  productDescription.classList.add("animate");
  setTimeout(() => {
    productName.classList.remove("animate");
    productPrice.classList.remove("animate");
    productDescription.classList.remove("animate");
  }, 500);
});
