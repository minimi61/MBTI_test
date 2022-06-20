const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

const goNext = (qIdx) => {
    let q = document.querySelector('qBox');
    q.innerHTML = qnaList[qIdx].q;
}

const begin = () => {
    main.style.animation = "fadeOut 0.5s";
    main.style.WebkitAnimation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.animation = "fadeIn 0.5s";
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        });
        let qIdx = 0;
        goNext(qIdx);
    },450)
}







// const main = document.querySelector("#main");
// const qna = document.querySelector('#qna');

// const addAnswer = (answerText,qIdx) => {
//     let a = document.querySelector('.answerBox');
//     let answer = document.createElement('button');
//     answer.classList.add('answerList');
//     answer.classList.add('my-3');
//     answer.classList.add('py-3');
//     answer.classList.add('mx-auto');
//     answer.classList.add('fadeIn')

//     a.appendChild(answer);
//     answer.innerHTML = answerText;

//     answer.addEventListener("click", function () {
//         let children = document.querySelectorAll('.answerList');
//         console.log(children)

//         for (let i = 0; i < children.length; i++) {
//             children[i].disabled = true;
//             children[i].style.WebkitAnimation = "fadeOut 0.5s";
//             children[i].style.animation = "fadeOut 0.5s";
//         }
//         setTimeout(() => {
//             for (let i = 0; i < children.length; i++) {
//                 children[i].style.display = 'none';
//             }
//             goNext(++qIdx);
//         },450)
//     }, false);
// }

// const goNext = (qIdx) => {
//     let q = document.querySelector('.qBox');
//     q.innerHTML = qnaList[qIdx].q;
//     for (let i in qnaList[qIdx].a) {
//         addAnswer(qnaList[qIdx].a[i].answer,qIdx);
//     }
// }
// const begin = () => {
//     main.style.WebkitAnimation = "fadeOut 1s";
//     main.style.animation = "fadeOut 1s";
//     setTimeout(() => {
//         qna.style.WebkitAnimation = "fadeIn 1s";
//         qna.style.animation = "fadeIn 1s";
//         setTimeout(() => {
//             main.style.display = "none";
//             qna.style.display = "block";
//         }, 450)
//         let qIdx = 0;
//         goNext(qIdx);
//     }, 450);

// }