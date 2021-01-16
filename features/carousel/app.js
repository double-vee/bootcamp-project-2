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

function moveImg() {
  if(imgIndex > images.length - 1) {
    imgIndex = 0;
  } else if(imgIndex < 0) {
    imgIndex = images.length - 1;
  }
  
  if(images[imgIndex].width === 300) {
    imgContainer.style.transform = `translateX(${-imgIndex * 300}px)`
  } else {
    imgContainer.style.transform = `translateX(${-imgIndex * 600}px)`
  }

  if(imgIndex === 0) {
    firstSlideIndicator.classList.add("slide-active");
    secondSlideIndicator.classList.remove("slide-active");
    thirdSlideIndicator.classList.remove("slide-active");
    fourthSlideIndicator.classList.remove("slide-active");
  }

  if(imgIndex === 1) {
    firstSlideIndicator.classList.remove("slide-active");
    secondSlideIndicator.classList.add("slide-active");    
    thirdSlideIndicator.classList.remove("slide-active");
    fourthSlideIndicator.classList.remove("slide-active");
  }

  if(imgIndex === 2) {
    firstSlideIndicator.classList.remove("slide-active");
    secondSlideIndicator.classList.remove("slide-active");
    thirdSlideIndicator.classList.add("slide-active");
    fourthSlideIndicator.classList.remove("slide-active");
  }

  if(imgIndex === 3) {
    firstSlideIndicator.classList.remove("slide-active");
    secondSlideIndicator.classList.remove("slide-active");
    thirdSlideIndicator.classList.remove("slide-active");
    fourthSlideIndicator.classList.add("slide-active");
  }
}

arrowPrevBtn.addEventListener("click", () => {
  imgIndex = imgIndex - 1;
  moveImg();

  clearInterval(interval);
  interval = setInterval(runCarousel, 3000);
});

arrowNextBtn.addEventListener("click", () => {
  imgIndex = imgIndex + 1;
  moveImg();

  clearInterval(interval);
  interval = setInterval(runCarousel, 3000);
});