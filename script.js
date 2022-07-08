"use strict";

const sushiCards = [
  { name: "salmon", image: "assets/salmon.png" },
  { name: "tuna", image: "assets/tuna.png" },
  { name: "tamago", image: "assets/tamago.png" },
  { name: "crab", image: "assets/Crab.png" },
  { name: "roe", image: "assets/Roe.png" },
  { name: "veggie", image: "assets/Veggie.png" },
];

const cardContainer = document.querySelector(".card-container");

const createCard = () => {
  let card = document.createElement("div");
  let front = document.createElement("div");
  let back = document.createElement("div");
  card.classList.add("card");
  front.classList.add("front");
  back.classList.add("back");
  back.setAttribute("data-name", createCard.name);
};

// Main.addEventListner("click", (e) => {
//   if (e.target.parentNode.parentNode.parentNode.classList.contains("flip-card")) {
//     e.target.paretNode.parentNode.classList.add("clicked");
//     setTimeout(()=> {
//       e.target.parentNode.parentNode.classList.remove("clicked");
//   }1000);
//   }
// });

// const pickRandom = (array, items) => {
//   const clonedArray = [...array];
//   const randomPicks = [];

//   for (let index = 0; index < items; index++) {
//     const randomIndex = Math.floor(Math.random() * clonedArray.length);

//     randomPicks.push(clonedArray[randomIndex]);
//     clonedArray.splice(randomIndex, 1);
//   }
//   return randomPicks;
// };

// //this part shuffles cards
// const shuffle = (array) => {
//   const clonedArray = [...array];

//   for (let index = clonedArray.length - 1; index > 0; index--) {
//     const randomIndex = Math.floor(Math.random() * (index + 1));
//     const original = clonedArray[index];

//     clonedArray[index] = clonedArray[randomIndex];
//     clonedArray[randomIndex] = original;
//   }
//   return clonedArray;
// };

//card front, card back two classes with same CSS, card content = image of sushi front
