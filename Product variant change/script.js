const images = document.querySelectorAll('.hover-container img');
const mainImg = document.querySelector('.img-container img');

const setActive = (img) => {
  images.forEach(i => i.parentElement.classList.remove('active'));
  img.parentElement.classList.add('active');
  mainImg.src = img.src;
};



window.addEventListener('DOMContentLoaded', () => {
  setActive(images[0]);
});

images.forEach(img => {
  img.addEventListener('click', () => setActive(img));
});
