const section = document.querySelector('.accordion');

section.addEventListener('click', event => {
  event.target.nextElementSibling.classList.toggle('visible');
  event.target.classList.toggle('btn-active');
});