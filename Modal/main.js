// javascript for modal

const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

console.log(modal);

openBtn.addEventListener('click', () => {
    console.log('hello');
    modal.classList.toggle("open-modal");
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("open-modal");
});