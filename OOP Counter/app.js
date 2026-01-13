class counter {
    constructor(display) {
        this.display = display;
        this.count = 0;
    }

    updateValue() {
        this.display.innerText = this.count;
    }
    
    incCount() {
        this.count++;
        this.updateValue();
    }
    
    decCount() {
        this.count--;
        this.updateValue();
    }
    
    resetCount() {
        this.count = 0;
        this.updateValue();
    }
    

}

const valueOne = document.querySelector('.one').children[1];
const counterOne = new counter(valueOne);
const valueTwo = document.querySelector('.two').children[1];
const counterTwo = new counter(valueTwo);

const btnContainerOne = document.querySelector('.one').children[2];
const btnContainerTwo = document.querySelector('.two').children[2];

btnContainerOne.children[0].addEventListener('click', () => counterOne.decCount());
btnContainerTwo.children[0].addEventListener('click', () => counterTwo.decCount());

btnContainerOne.children[1].addEventListener('click', () => counterOne.resetCount());
btnContainerTwo.children[1].addEventListener('click', () => counterTwo.resetCount());

btnContainerOne.children[2].addEventListener('click', () => counterOne.incCount());
btnContainerTwo.children[2].addEventListener('click', () => counterTwo.incCount());


