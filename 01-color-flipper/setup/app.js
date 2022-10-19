let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn--black');

let currentNumber = -1;

btn.addEventListener('click', () => {
    currentNumber++;

    for (let i = 0; i < colors.length; i++) {
        document.body.style.backgroundColor = colors[currentNumber];
        color.textContent = colors[currentNumber];
        getCurrentNumber();
    }
});

function getCurrentNumber() {
    if (currentNumber < 0 || currentNumber > colors.length - 1) {
        currentNumber = 0;
    }
}
