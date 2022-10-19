//using selectors inside the element
//traversing the dom

// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//     const btn = question.querySelector('.title-btn');
//     console.log(btn);

//     btn.addEventListener('click', () => {
//         console.log(question);

//         questions.forEach((item) => {
//             if (item !== question)
//                 item.classList.remove('show-text');

//         });
//         question.classList.toggle('show-text');
//     });
// });

// traversing DOM


const btns = document.querySelectorAll(".title-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle("show-text");
    });
});
