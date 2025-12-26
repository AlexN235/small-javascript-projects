// sidebar javascript

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener('click', function() {
    sidebar.classList.toggle("sidebar");
});