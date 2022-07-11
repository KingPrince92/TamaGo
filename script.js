"use strict";

//declarations
const sushiCards = [
  { name: "salmon", url: "assets/salmon.png" },
  { name: "salmon", url: "assets/salmon.png" },
  { name: "tuna", url: "assets/tuna.png" },
  { name: "tuna", url: "assets/tuna.png" },
  { name: "tamago", url: "assets/tamago.png" },
  { name: "tamago", url: "assets/tamago.png" },
  { name: "crab", url: "assets/crab.png" },
  { name: "crab", url: "assets/crab.png" },
  { name: "roe", url: "assets/roe.png" },
  { name: "roe", url: "assets/roe.png" },
  { name: "veggie", url: "assets/veggie.png" },
  { name: "veggie", url: "assets/veggie.png" },
];

const infoBtn = document.querySelector("#info-btn");
const playBtn = document.querySelector("#play-btn");
const modalBox = document.querySelector("#modal-box");
const startButton = document.querySelector(".start-button");
const cardContainer = document.querySelector(".card-container");
let stopwatch = document.querySelector(".timer");
let time = 10;
let timer = null;
const reset = document.querySelector(".reset");
let cardsChosen = [];
let cardsChosenId = [];

// listen for open click/instruction modal
infoBtn.addEventListener("click", openModal);
playBtn.addEventListener("click", closeModal);

function openModal() {
  modalBox.style.display = "flex";
}

function closeModal() {
  modalBox.style.display = "none";
}
//timer
const startTimer = () => {
  startButton.classList.add("hide");
  reset.classList.remove("hide");
  time = 60;
  timer = setInterval(() => {
    stopwatch.innerHTML = `${time}`;
    time--;
    if (time === 0) {
      clearInterval(timer);
      startButton.classList.remove("hide");
      reset.classList.add("hide");
    }
  }, 1000);
};
startButton.addEventListener("click", startTimer);
reset.addEventListener("click", () => {
  clearInterval(timer);
  startTimer();
});

// shuffling of cards
const shuffle = (array) => {
  let i = array.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

//code for creating the cards
const createBoard = (array) => {
  shuffle(array);
  array.forEach((item) => {
    let card = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");
    card.classList.add("card");
    back.classList.add("back");
    front.classList.add("front");
    card.setAttribute("data-name", item.name);
    front.style.backgroundImage = `url('${item.url}')`;
    card.append(front, back);
    cardContainer.append(card);
  });
};

const flipCard = (e) => {
  if (e.target.parentNode.classList.contains("card")) {
    e.target.parentNode.classList.add("flip");
    cardsChosen.push(e.target.parentNode);
    if (cardsChosen.length === 2) {
      checkForMatch();
    }
  }
};
cardContainer.addEventListener("click", flipCard);
//matching/gameplay code

let checkForMatch = () => {
  if (
    cardsChosen[0].getAttribute("data-name") ===
    cardsChosen[1].getAttribute("data-name")
  ) {
    setTimeout(() => {
      cardsChosen[0].classList.add("hidden");
      cardsChosen[1].classList.add("hidden");
      cardsChosen = [];
    }, 1000);
  } else {
    setTimeout(() => {
      cardsChosen[1].classList.remove("flip");
      cardsChosen[0].classList.remove("flip");
      cardsChosen = [];
    }, 500);
  }
};

// button for creating the board
const beginGame = (e) => {
  createBoard(sushiCards);
  e.target.classList.add("disabled");
  startButton.removeEventListener("click", beginGame);
  startButton.removeEventListener("click", startTimer);
};
startButton.addEventListener("click", beginGame);

//card front, card back two classes with same CSS, card content = image of sushi front
