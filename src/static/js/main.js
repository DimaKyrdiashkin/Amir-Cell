// card open
const card = document.querySelectorAll(".cardT");
const cardBottom = document.querySelectorAll("#card_bottom");
const button = document.querySelectorAll(".card_button");

const openTariff = (i) => {
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
    openTariff(i);
  });
});

// profit open
const profitButton = document.querySelectorAll(".profit_button");
const profitOpenText = document.querySelectorAll(
  ".profit_box__items-description--open"
);

const openProfit = (i) => {
  if (profitButton[i].className.split(" ")[3] == "open") {
    profitButton[i].classList.remove("open");
    profitOpenText[i].classList.remove("open");
    return false;
  } else {
    profitOpenText.forEach((item, i) => {
      item.classList.remove("open");
      profitButton[i].classList.remove("open");
    });
    profitOpenText[i].classList.add("open");
  }
  profitButton[i].classList.add("open");
};

profitButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    openProfit(i);
  });
});
