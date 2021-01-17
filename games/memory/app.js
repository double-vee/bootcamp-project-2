const cardArray = [
  {
    name: "BoJack Horseman",
    img: "./img/bojack.png"
  },
  {
    name: "BoJack Horseman",
    img: "./img/bojack.png"
  },
  {
    name: "Charlotte",
    img: "./img/charlotte.png"
  },
  {
    name: "Charlotte",
    img: "./img/charlotte.png"
  },
  {
    name: "Princess Carolyn",
    img: "./img/carolyn.png"
  },
  {
    name: "Princess Carolyn",
    img: "./img/carolyn.png"
  },
  {
    name: "Mr Peanutbutter",
    img: "./img/peanutbutter.png"
  },
  {
    name: "Mr Peanutbutter",
    img: "./img/peanutbutter.png"
  },
  {
    name: "Diane",
    img: "./img/diane.png"
  },
  {
    name: "Diane",
    img: "./img/diane.png"
  },
  {
    name: "Hollyhock",
    img: "./img/hollyhock.png"
  },
  {
    name: "Hollyhock",
    img: "./img/hollyhock.png"
  }
];

const gameContainer = document.querySelector(".game-container");
const resultDisplay = document.getElementById("result");
const header = document.getElementById("header-score");
const resumeGameBtn = document.getElementById("resume-game");

cardArray.forEach(function(item, index) {
  let card = document.createElement("img");
  card.setAttribute("src", "./img/board.png");
  card.setAttribute("data-id", index);
  card.classList.add("card");
  gameContainer.appendChild(card);
})
