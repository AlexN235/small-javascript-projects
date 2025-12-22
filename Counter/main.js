// javascript for Counter
var count = 0;

const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");

const counter = document.querySelector(".counter");

incBtn.addEventListener("click", () => {
    count++;
    })
   

decBtn.addEventListener("click", () => {
    count--;
    })
    
resBtn.addEventListener("click", () => {
    count = 0;
    })

const lst = document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener("click", () => {
        if (count > 0) 
            counter.style.color="green";
        else if (count < 0) 
            counter.style.color="red";
        else 
            counter.style.color="black";
        counter.textContent = count;
    })
});
