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

cardArray.sort(() => 0.5 - Math.random());

const gameContainer = document.querySelector(".game-container");
const resultDisplay = document.getElementById("result");
const header = document.getElementById("header-score");
const resumeGameBtn = document.getElementById("resume-game");

let cardsChosen = [];
let cardsChosenID = [];
let cardsWon = [];

cardArray.forEach(function(item, index) {
  let card = document.createElement("img");
  card.setAttribute("src", "./img/board.png");
  card.setAttribute("data-id", index);
  card.classList.add("card");
  gameContainer.appendChild(card);
  card.addEventListener("click", flipCard);
})

function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  console.log("cardsChosen: " + cardsChosen);
  cardsChosenID.push(cardID);
  console.log("cardsChosenID: " + cardsChosenID);
  this.setAttribute("src", cardArray[cardID].img);
  if(cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  } 
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneID = cardsChosenID[0];
  const optionTwoID = cardsChosenID[1];

  if (optionOneID === optionTwoID) {
    cards[optionOneID].setAttribute("src", "./img/board.png");
    cards[optionTwoID].setAttribute("src", "./img/board.png");
    alert("You've clicked the same card");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneID].setAttribute("src", "./img/background.png");
    cards[optionTwoID].setAttribute("src", "./img/background.png");
    cards[optionOneID].style.cursor = "default";
    cards[optionTwoID].style.cursor = "default";
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    console.log("cards won: " + cardsWon);
    alert("Score!");
  } else {
    cards[optionOneID].setAttribute("src", "./img/board.png");
    cards[optionTwoID].setAttribute("src", "./img/board.png");
    alert("Try again");
  }

  cardsChosen = [];
  cardsChosenID = [];

  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    header.textContent = "You won!";
    resumeGameBtn.classList.remove("hidden");
  }

  resumeGameBtn.addEventListener("click", () => {
    location.reload();
    resumeGameBtn.classList.add("hidden");
  });
}