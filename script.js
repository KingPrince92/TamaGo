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
