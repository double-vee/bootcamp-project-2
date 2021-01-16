const section = document.querySelector('.accordion');

section.addEventListener('click', event => {
  const div = event.target.nextElementSibling;
  const article = document.querySelector('.accordion-article');

  if (div.style.maxHeight) {
    div.style.maxHeight = null;
    div.style.transform = "scaleY(0)";
  } else {
    div.style.maxHeight = `${article.scrollHeight}px`;
    div.style.transform = "scaleY(1)";
  }

  event.target.classList.toggle('btn-active');
});