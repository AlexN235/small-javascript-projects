// review carousel javascript.
const reviews = [
    {name:'Mr. Meowers',
    description:'loves to nap in the sun'},
    {name:'c1',
    description:'hates baths'},
    {name:'c2',
    description:'needs daily cuddles'},
    {name:'c3',
    description:'is always waiting for her next meal.'}
]

const maxIndex = reviews.length;
var curr = 0;

const name = document.querySelector('.name');
const desc = document.querySelector('.description');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev')

document.addEventListener('DOMContentLoaded', setReview);

nextBtn.addEventListener('click', () => {
    setNextNum();
    setReview();
});

prevBtn.addEventListener('click', () => {
    setPrevNum();
    setReview();
});

// Helper Functions
function setReview() {
    // add picture.
    name.textContent = reviews[curr].name;
    desc.textContent = reviews[curr].description;
}
function setNextNum() {
    curr = (curr+1) % maxIndex;
}
function setPrevNum() {
    curr = (((curr-1) % maxIndex) + maxIndex) % maxIndex;
}
    