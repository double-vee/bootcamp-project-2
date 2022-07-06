const section = document.querySelector(".accordion");

section.addEventListener("click", (event) => {
  if (event.target.classList.contains("accordion-btn")) {
    let div = event.target.nextElementSibling;
    let article = event.target.nextElementSibling.firstElementChild;

    if (div.style.maxHeight) {
      div.style.maxHeight = null;
      div.style.transform = "scaleY(0)";
    } else {
      div.style.maxHeight = `${article.scrollHeight}px`;
      div.style.transform = "scaleY(1)";
    }

    event.target.classList.toggle("btn-active");
  }
});
