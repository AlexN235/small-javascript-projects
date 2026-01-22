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
const modalContent = document.querySelector('.modal-content');

closeBtn.addEventListener('click', () => {
    modal.classList.remove("open");
});

const sections = document.querySelectorAll('.section');
sections.forEach((sect) => {
    const imgSet = sect.children;
    Array.from(imgSet).forEach((img) => {
        img.addEventListener('click', () => {
            modal.classList.add('open');
        });
        console.log(modalContent);
        //modalContent.innerHTML = `
        //        <button class="prev-btn" /> 
        //        <button class="next-btn" /> 
        //        <img class='main-img' src="./images/nature-3.jpeg" alt="">
        //        <h3 class="image-name">nature-1</h3>
        //        <div class="modal-images">
        //            <img class="modal-img selected" src="./images/nature-1.jpeg" title="nature-1" data-id="1">
        //            <img class="modal-img selected" src="./images/nature-2.jpeg" title="nature-2" data-id="2">
        //            <img class="modal-img selected" src="./images/nature-3.jpeg" title="nature-3" data-id="3">
        //        </div>1
        //        `
    });
});