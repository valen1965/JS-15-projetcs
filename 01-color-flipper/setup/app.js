let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const myColor = document.querySelector('.color');


// btn.addEventListener('click', () => {
//     for (let i = 0; i < colors.length; i++) {
//         const randomNumber = getRandomNumber();
//         myColor.textContent = colors[randomNumber];
//         document.body.style.backgroundColor = colors[randomNumber];
//     }
// });

// function getRandomNumber() {

//     return Math.floor(Math.random() * colors.length)

// }



// listing colors from the begining of  array

let currentNumber = 0;

btn.addEventListener('click', () => {
    currentNumber++;
    for (let i = 0; i < colors.length; i++) {
        const randomNumber = currentNumber;
        myColor.textContent = colors[randomNumber];
        document.body.style.backgroundColor = colors[randomNumber];
        getRandomNumber();
    }
});

function getRandomNumber() {
    if (currentNumber < 0 || currentNumber === colors.length - 1) {
        currentNumber = 0;
    }
}
