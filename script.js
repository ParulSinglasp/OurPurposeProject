const track = document.querySelector(".focus-track");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = 4;

function updateSlider() {
  track.style.transform = `translateX(-${index * 25}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index % dots.length].classList.add("active");
}

setInterval(() => {
  index++;
  if (index > totalSlides - 1) index = 0;
  updateSlider();
}, 3000);
