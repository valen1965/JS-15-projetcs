
const toggleBtn = document.querySelector('.nav-toggle');
const xBtn = document.querySelector('.x-mark-btn');
const sideBar = document.querySelector('.side-bar');

toggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
});

xBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
});