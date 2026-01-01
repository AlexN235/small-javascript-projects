// javascript for tabs 

const btnContainer = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll(".content");

console.log(contents);

btnContainer.forEach((btn) => {
    btn.addEventListener('click', function() {
        const id = btn.dataset.id;
        contents.forEach((content) => {
            content.classList.remove('active');
            if(id === content.dataset.id) {
                content.classList.add('active');
            }
        });
    });
});