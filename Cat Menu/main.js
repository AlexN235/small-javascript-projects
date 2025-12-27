// cat "menu" javascript

const menu = [
    {
        id:1, 
        title: "Steve",
        category: "orange",
        img: "./images/cat-1.jpeg",
        desc: 'Cute cat enjoying the warmth of the blanket.'
    },
    {
        id:2, 
        title: "Kevin",
        category: "work",
        img: "./images/cat-2.jpeg",
        desc: 'A cat examning blood samples from his patients.'
    },
    {
        id:3, 
        title: "Nem",
        category: "orange",
        img: "./images/cat-3.png",
        desc: 'There lies Nem, she was a good cat.'
    },
    {
        id:4, 
        title: "Twins",
        category: "group",
        img: "./images/cat-5.jpeg",
        desc: 'Two smalls cats enjoying their naps inside very comfotable blankets.'
    },
    {
        id:5, 
        title: "Kitty",
        category: "black",
        img: "./images/cat-5.jpeg",
        desc: 'A small cat that enjoys giving high fives.'
    },
    {
        id:1, 
        title: "Tim",
        category: "work",
        img: "./images/cat-6.jpeg",
        desc: 'Tim is a cat that likes to study and do caluclations.'
    },
]

const catMenu = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');

function displayItem(items) {
    catMenu.innerHTML = "";
    items.forEach((item) => {
        catMenu.innerHTML += '\
            <article class="menu-item">\
                <img src=' + item.img + ' class="cat-image">\
                <div class="item-info">\
                    <header>\
                        <h4> ' + item.title +' </h4>\
                        <h4> ' + item.category +' </h4>\
                    </header>\
                    <p class="item-text">\
                        ' + item.desc + ' .\
                    </p>\
                </div>\
            </article>\
        ';
    }); 
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        const cat = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(i) {
            return i.category === cat;
        });
        if(cat === 'all') {
            displayItem(menu);
        }
        else {
            displayItem(menuCategory);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    displayItem(menu);
});