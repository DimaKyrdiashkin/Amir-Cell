// Tariffs slider

// Tariffs slider
$("#tariffs_slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrow: true,
  prevArrow: `<div class="prevArrow sliderArrow">
      <img src="./static/svg/prevArrow.svg" alt="prevArrow" />
    </div>`,
  nextArrow: `<div class="nextArrow sliderArrow">
      <img src="./static/svg/nextArrow.svg" alt="nextArrow" />
    </div>`,
  speed: 1000,
});

// Banner #1 slider
$("#greenBanner_slider").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrow: true,
  prevArrow: `<div class="prevArrow sliderArrow">
      <img src="./static/svg/prevArrow.svg" alt="prevArrow" />
    </div>`,
  nextArrow: `<div class="nextArrow sliderArrow">
      <img src="./static/svg/nextArrow.svg" alt="nextArrow" />
    </div>`,
  speed: 1000,

});

const card = document.querySelectorAll(".cardT");
const cardBottom = document.querySelectorAll("#card_bottom");
const cardHeight = [];
const minH = [];

card.forEach((item) => {
  cardHeight.push(item.clientHeight + 2);
});
const button = document.querySelectorAll(".card_button");

const open = (i) => {
  if (button[i].className.split(" ")[1] == "open") {
    cardBottom[i].classList.remove("open");
    button[i].classList.remove("open");
    return false;
  } else {
    cardBottom.forEach((item, i) => {
      item.classList.remove("open");
      button[i].classList.remove("open");
    });
    cardBottom[i].classList.add("open");
  }
  button[i].classList.add("open");
};

button.forEach((item, i) => {
  item.addEventListener("click", () => {
    open(i);
  });
});

// menu
const mBut = document.querySelector(".mobButton");
const menu = document.querySelector(".mobMenu");
const mobButton = document.querySelectorAll(".mobItems");

mBut.addEventListener("click", () => {
  menu.classList.toggle("open");
  mBut.classList.toggle("open");
});

mobButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    menu.classList.remove("open");
    mBut.classList.remove("open");
  });
});

const wrap = document.querySelector(".wrapper");

window.addEventListener("scroll", () => {
  if (pageYOffset - 250 > document.documentElement.clientHeight) {
    wrap.classList.add("scroll");
  } else {
    wrap.classList.remove("scroll");
  }
});
