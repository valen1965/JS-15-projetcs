// select modal-btn,modal-overlay,close-btn
const bannerBtn = document.querySelector('.banner-btn');
const overlay = document.querySelector('.modal-overlay');
const clsBtn = document.querySelector('.modal-btn')

bannerBtn.addEventListener('click', () => {
    overlay.classList.toggle('show-modal');
});

clsBtn.addEventListener('click', () => {
    overlay.classList.toggle('show-modal');
});