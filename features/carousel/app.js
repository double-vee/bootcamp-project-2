const imgContainer = document.querySelector(".img-container");
const images = document.querySelectorAll(".carousel-img");
console.log(images);

const arrowPrevBtn = document.querySelector(".previous");
const arrowNextBtn = document.querySelector(".next");
const firstSlideIndicator = document.querySelector(".slide-1");
const secondSlideIndicator = document.querySelector(".slide-2");
const thirdSlideIndicator = document.querySelector(".slide-3");
const fourthSlideIndicator = document.querySelector(".slide-4");

let imgIndex = 0;
let interval = setInterval(runCarousel, 3000);

function runCarousel() {
  imgIndex = imgIndex + 1;
  moveImg();
}