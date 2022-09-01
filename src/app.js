/* eslint-disable */
import "bootstrap";
import "./style.css";

let cardsArray = [];
const Drawbtn = document.querySelector(".draw-btn");
const Sortbtn = document.querySelector(".sort-btn");
const card = document.querySelector(".card");
const numb = document.querySelector(".numb");
const input = document.querySelector("#amount-cards");

const generateRandomNumber = () => {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const indexNumb = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumb];
};

const generateRandomSimb = () => {
  const simb = ["hearts", "diamonds", "spades", "clubs"];
  const indexSimb = Math.floor(Math.random() * simb.length);
  return simb[indexSimb];
};

window.onload = () => {
  card.classList.add(generateRandomSimb());
  numb.innerHTML = generateRandomNumber();
};
