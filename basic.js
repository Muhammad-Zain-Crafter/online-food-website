
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const toggle_btn = document.querySelector(".toggle-btn");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    observer.observe(card);
});




toggle_btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

