function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const sections = document.querySelectorAll('.section');

// modal 
const mainImg = document.querySelector('.main-img');
const imgName = document.querySelector('.image-name');
const modalContent = document.querySelector('.modal-content');

const nature = document.querySelector('.nature');
const city = document.querySelector('.city');


closeBtn.addEventListener('click', () => {
    modal.classList.remove("open");
});

sections.forEach((sect) => {
    const imgSet = sect.children;
    Array.from(imgSet).forEach((img) => {
        img.addEventListener('click', () => {
            // Make model appear
            modal.classList.add('open');
            
            // change main image and name.
            const name = img.title;
            mainImg.src = `./images/${name}.jpeg`;
            imgName.innerHTML = name;
            
            // change selectable images
        });
    });
});