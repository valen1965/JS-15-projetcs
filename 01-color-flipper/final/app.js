let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const myColor = document.querySelector('.color');


btn.addEventListener('click', () => {

    for (let i = 0; i < colors.length; i++) {
        const randomNumber = getRandomNumber();
        myColor.textContent = colors[randomNumber];
        document.body.style.backgroundColor = colors[randomNumber];
    }
});

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length)

}


