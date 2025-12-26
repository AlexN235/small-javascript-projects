// Javascript for nav bar.

const links = document.querySelector(".links");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener('click', () => {
    links.classList.toggle("show-links")
});