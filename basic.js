// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Card Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  observer.observe(card);
});

// Dark/Light Mode Toggle
const toggle_btn = document.querySelector(".toggle-btn");

toggle_btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Client Slider
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");
let index = 0;

function goToSlide(i) {
  index = i;
  slider.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach((dot) => dot.classList.replace("bg-orange-400", "bg-gray-300"));
  dots[i].classList.replace("bg-gray-300", "bg-orange-400");
}
// Auto slide every 3 seconds
setInterval(() => {
  index = (index + 1) % dots.length;
  goToSlide(index);
}, 3000);

// Contact Form Validation
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  alert("Message Sent Successfully!");
  form.reset();
});
