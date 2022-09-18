import "./style.css";
let cardArray = [];
const input = document.querySelector("#cards_amount");
const drawBtn = document.querySelector(".draw-btn");
const sortBtn = document.querySelector(".sort-btn");
const cardNumb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
const cardSimb = ["♦", "♥", "♠", "♣"];

// Card
class Card {
  constructor(num, suit) {
    this.suit = suit;
    this.num = num;
  }
}

//functions

const RandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const SortedContainer = () => {
  let cardsSorted = document.querySelector(".sorted-cards");
  while (cardsSorted.firstChild) {
    cardsSorted.removeChild(cardsSorted.firstChild);
  }
};

// new array of cards
const generateArray = numCards => {
  let cardArray = [];

  for (let i = 0; i < numCards; i++) {
    let card = new Card();
    card.suit = cardSimb[RandomNum(0, cardSimb.length - 1)];
    card.num = cardNumb[RandomNum(0, cardNumb.length - 1)];
    cardArray.push(card);
  }
  return cardArray;
};

// cards
const generateCard = card => {
  if (["♦", "♥"].includes(card.suit)) {
    return `<div class="card"> <div class="suit suit--top color-red">${card.suit}</div> <div class="number">${card.num}</div> <div class="suit suit--bottom color-red">${card.suit}</div> </div>`;
  } else {
    return `<div class="card"> <div class="suit suit--top color-black">${card.suit}</div> <div class="number">${card.num}</div> <div class="suit suit--bottom color-black">${card.suit}</div> </div>`;
  }
};

const addCards = (cardArray, sort, iterationNum) => {
  let cardsContainer = document.querySelector(".cards-container");
  let cardsSorted = document.querySelector(".sorted-cards");
  let cardsDOM = "";

  for (let i = 0; i < cardArray.length; i++) {
    cardsDOM += generateCard(cardArray[i]);
  }

  if (!sort) {
    cardsContainer.innerHTML =
      '<div class="cards-container-row">' + cardsDOM + "</div>";
  } else {
    cardsSorted.innerHTML +=
      '<div class="cards-container-sort-row"> <div class="container-iteration-num"> <p class="iteration-num">' +
      iterationNum +
      "</p> </div> " +
      cardsDOM +
      " </div>";
  }
};

//events

drawBtn.addEventListener("click", () => {
  let numCards = input.value;
  cardArray = generateArray(numCards);
  addCards(cardArray, false, 0);
});

sortBtn.addEventListener("click", () => {
  SortedContainer();
  bubbleSort(cardArray);
});

// bubble sort

const bubbleSort = cardArray => {
  let newCardArray = [...cardArray];
  let iterationNum = -1;

  for (let i = 0; i < newCardArray.length; i++) {
    for (let j = 0; j < newCardArray.length - i - 1; j++) {
      if (
        cardNumb.indexOf(newCardArray[j].num) >
        cardNumb.indexOf(newCardArray[j + 1].num)
      ) {
        const lesser = newCardArray[j + 1];
        newCardArray[j + 1] = newCardArray[j];
        newCardArray[j] = lesser;
        iterationNum++;
        addCards(newCardArray, true, iterationNum);
      }
    }
  }

  if (iterationNum == -1) {
    addCards(newCardArray, true, 0);
  }

  return newCardArray;
};
