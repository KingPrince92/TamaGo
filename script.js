"use strict";

const sushiCards = [
  { name: "salmon", image: "assets/salmon.png" },
  { name: "salmon", image: "assets/salmon.png" },
  { name: "tuna", image: "assets/tuna.png" },
  { name: "tuna", image: "assets/tuna.png" },
  { name: "tamago", image: "assets/tamago.png" },
  { name: "tamago", image: "assets/tamago.png" },
  { name: "crab", image: "assets/sushi_placeholder.png" },
  { name: "crab", image: "assets/sushi_placeholder.png" },
  { name: "roe", image: "assets/sushi_placeholder.png" },
  { name: "roe", image: "assets/sushi_placeholder.png" },
  { name: "veggie", image: "assets/sushi_placeholder.png" },
  { name: "veggie", image: "assets/sushi_placeholder.png" },
];

const cardContainer = document.querySelector(".card-container");

// const createContacts = () => {
//   contactsContainer.innerHTML = "";
//   contacts.forEach((contact, i) => {
//     const newContact = document.createElement("li");
//     newContact.classList.add("contact");
//     const fullNameParagraph = document.createElement("p");
//     const phoneParagraph = document.createElement("p");
//     const trash = document.createElement("i");
//     trash.classList.add("fa-solid", "fa-trash");
//     trash.setAttribute("data-index", i);
//     fullNameParagraph.textContent = contact.fullName;
//     phoneParagraph.textContent = contact.phone;
//     newContact.append(fullNameParagraph, phoneParagraph, trash);
//     contactsContainer.append(newContact);
//   });
//   contactsForm.reset();
// };

const createCards = () => {
  sushiCards.forEach((card) => {
    const newCard = document.createElement("li");
    newCard.classList.add("back");
    newCard.append();
    cardContainer.append(newCard);
  });
};
