
// let value = document.getElementById('value');
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset ');
// const inceraseBtn = document.querySelector('.increase');
// let count = 0;

// inceraseBtn.addEventListener('click', () => {
//     count += 1;
//     value.textContent = count;
// });

// decreaseBtn.addEventListener('click', () => {
//     count -= 1;
//     value.textContent = count;
// });

// resetBtn.addEventListener('click', () => {
//     value.textContent = 0;
// });

let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else
            count = 0;
        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else
            value.style.color = 'inherit';
        value.textContent = count;
    });
}); 