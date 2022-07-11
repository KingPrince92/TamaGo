"use strict";

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

const cardContainer = document.querySelector(".card-container");

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
createBoard(sushiCards);
const cards = document.querySelectorAll(".card");
function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

// Main.addEventListner("click", (e) => {
//   if (e.target.parentNode.parentNode.parentNode.classList.contains("flip-card")) {
//     e.target.paretNode.parentNode.classList.add("clicked");
//     setTimeout(()=> {
//       e.target.parentNode.parentNode.classList.remove("clicked");
//   }1000);
//   }
// });

//card front, card back two classes with same CSS, card content = image of sushi front
