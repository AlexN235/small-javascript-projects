// scroll project javascript

const currDate = new Date();
const date = document.querySelector('.date');

date.innerHTML = currDate.getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0) {
        linksContainer.style.height = linksHeight + "px";
        console.log(linksHeight);
    }
    else {
        linksContainer.style.height = 0;
    }
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(scrollHeight);
    console.log(navHeight);
    if(scrollHeight > navHeight) {
        navbar.classList.add('fix-nav');
    }
    else {
        navbar.classList.remove('fix-nav');
    }
    
    if(scrollHeight > 300) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});