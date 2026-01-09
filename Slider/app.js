const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    incCounter(1);
    translateSlide();
});

prevBtn.addEventListener('click', function() {
    incCounter(-1);
    translateSlide();
});

function incCounter(val) {
    const n = slides.length;
    counter = (((counter+val) % n) + n) % n;
}

function translateSlide() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(${counter * -100}%)`
    });
}