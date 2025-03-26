const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FUDGY",
    price: 119,
    colors: [
      {
        img: "./img/product1.png",
      },
    ],
  },
  {
    id: 2,
    title: "HAZELNUT",
    price: 149,
    colors: [
      {
        img: "./img/product2.png",
      },
    ],
  },
  {
    id: 3,
    title: "KALA JAMUN",
    price: 109,
    colors: [
      {
        img: "./img/product3.png",
      },
    ],
  },
  {
    id: 4,
    title: "MANGO",
    price: 129,
    colors: [
      {
        img: "./img/product4.png",
      },
    ],
  },
  {
    id: 5,
    title: "STRAWBERRY",
    price: 99,
    colors: [
      {
        img: "./img/product5.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// -------------- Feedback Form Popup --------------

document.querySelector(".nsButton").addEventListener("click", function () {
  window.open("feedback.html", "Feedback Form", "width=400,height=500");
});

