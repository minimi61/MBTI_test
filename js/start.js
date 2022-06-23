const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result');
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


const calResult = () => {
    let resultSelect = select.indexOf(Math.max(...select));
    return resultSelect;
}

const setResult = () => {
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    const resultImg = document.querySelector('#resultImg');
    const resultDesc = document.querySelector('.resultDesc');
    resultName.innerHTML = infoList[point].name;

    const img = document.createElement('img');
    resultImg.appendChild(img);
    img.classList.add('img-fluid');
    img.src = 'img/image-' + point + '.png';
    img.alt = point;

    resultDesc.innerHTML = infoList[point].desc;
    //왜 point대신 resultSelect를 하면 안될까? 지역변수! resultName.innerHTML = infoList[point].name

}
const goResult = () => {
    qna.style.animation = 'fadeOut 0.5s';
    qna.style.webkitAnimation = 'fadeOut 0.5s';
    setTimeout(() => {
        result.style.animation = 'fadeIn 0.5s';
        result.style.webkitAnimation = 'fadeIn 0.5s';
        qna.style.display = 'none';
        result.style.display = 'block';

        setResult();
        calResult();
    }, 450)
}

const answerButtons = (answers, qIdx, idx) => {  
    let answerBox = document.querySelector('.answerBox');
    let button = document.createElement('button');
    answerBox.appendChild(button);
    button.classList.add('answerList');
    button.classList.add('mx-auto');
    button.classList.add('my-4');
    button.classList.add('py-3');
    button.classList.add('fadeIn');

    button.innerHTML = answers.answer;
    button.addEventListener("click", function () {
        let target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++){
            select[target[i]] += 1
        }        
        console.log(select)
        
        let children = document.querySelectorAll('.answerList')
        for (let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.animation = 'fadeOut 0.5s';
            children[i].style.webkitAnimation = 'fadeOut 0.5s';
        }
            
        setTimeout(() => {
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx)
            }, 450)
        
    })
}

const status = (qIdx) => {
    const statusBar = document.querySelector('.statusBar');
    statusBar.style.width = (100/endPoint)* (qIdx+1)+'%'

}

const goNext = (qIdx) => {
    if (endPoint === qIdx) {
        goResult();
        return
    }
    const qBox = document.querySelector('.qBox');
    qBox.innerHTML = qnaList[qIdx].q;
    for (let i = 0; i < qnaList[qIdx].a.length; i++){
        answerButtons(qnaList[qIdx].a[i], qIdx, i)
    }
    status(qIdx);


}



const begin = () => {
    main.style.animation = 'fadeOut 0.5s';
    main.style.webkitAnimation = 'fadeOut 0.5s';
    setTimeout(() => {
        qna.style.animation = 'fadeIn 0.5s';
        qna.style.webkitAnimation = 'fadeIn 0.5s';
        main.style.display = 'none';
        qna.style.display = 'block';

        let qIdx = 0;
        goNext(qIdx);
    },450)
}




// const endPoint = 12;
// const select = [0,0,0,0,0,0,0,0,0,0,0,0];

// const calResult = () => {
//     // let pointArray = [
//     //     {name : 'mouse', value : 0, key:0 },
//     //      {name : 'cow', value : 0, key:1 },
//     //      {name : 'tiger', value : 0, key:2 },
//     //      {name : 'rabbit', value : 0, key:3 },
//     //      {name : 'dragon', value : 0, key:4 },
//     //      {name : 'snake', value : 0, key:5 },
//     //      {name : 'horse', value : 0, key:6 },
//     //      {name : 'sheep', value : 0, key:7 },
//     //      {name : 'monkey', value : 0, key:8 },
//     //      {name : 'chick', value : 0, key:9 },
//     //      {name : 'dog', value : 0, key:10 },
//     //      {name : 'pig', value : 0, key:11 }   
//     // ]
//     // for (let i = 0; i < endPoint; i++){
//     //     let target = qnaList[i].a[select[i]];
//     //     for (let j = 0; j < target.type.length; j++){
//     //         for (let k = 0; k < pointArray.length; k++){
//     //             if (target.type[j] === pointArray[k].name) {
//     //                 pointArray[k].value += 1;
//     //             }
//     //         }
//     //     }
//     // }
//     // let resultArray = pointArray.sort(function (a, b) {
//     //     if (a.value > b.value) {
//     //         return -1;
//     //     }
//     //     if (a.value < b.value) {
//     //         return 1
//     //     }
//     //     return 0;
//     // })
    
//     // console.log(resultArray)
//     // let resultWord = resultArray[0].key;
//     let result = select.indexOf(Math.max(...select));
//     return result;
// }


// const goResult = () => {
//     qna.style.animation = "fadeOut 0.5s";
//     qna.style.WebkitAnimation = "fadeOut 0.5s";
//     setTimeout(() => {
//         result.style.animation = "fadeIn 0.5s";
//         result.style.WebkitAnimation = "fadeIn 0.5s";
//         setTimeout(() => {
//             qna.style.display = "none";
//             result.style.display = "block";
//         });
//     }, 450);
//     console.log(select)
//     setResult();
//     calResult();
// }
// const answerButton = (addAnswer, qIdx, idx) => {
//     let answerBox = document.querySelector(".answerBox");
//     let button = document.createElement("button");
//     button.classList.add('answerList');
//     button.classList.add('mx-auto');
//     button.classList.add('my-3');
//     button.classList.add('py-3');
//     button.classList.add('fadeIn');


//     answerBox.appendChild(button)
//     button.innerHTML = addAnswer;

//     button.addEventListener("click", function () {
//         let children = document.querySelectorAll('.answerList');
//         for (let i = 0; i < children.length; i++){
//             children[i].disabled = true;
//             children[i].style.animation = 'fadeOut 0.5s';
//             children[i].style.WebkitAnimation = 'fadeOut 0.5s';
//         }

//         setTimeout(() => {
//             let target = qnaList[qIdx].a[idx].type;
//             for (let i = 0; i < target.length; i++) {
//                 select[target[i]] += 1;
//             }
//             // select[qIdx] = idx;
//             for (let i = 0; i < children.length; i++) {
//                     children[i].style.display = 'none';
//                 }
//                 goNext(++qIdx)
//             },450)
//         //피연산자 앞에 위치한 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소시킨 후 다른 연산을 수행(++x)

//     })
// }

// const setResult = () => {
//     let point = calResult();
//     const resultName = document.querySelector('.resultName');
//     resultName.innerHTML = infoList[point].name;

//     let resultImg = document.createElement('img');
//     const imgDiv = document.querySelector('#resultImg');
//     let imgURL = 'img/image-' + point + '.png';
//     resultImg.src = imgURL;
//     resultImg.alt = point;
//     resultImg.classList.add('img-fluid');
//     imgDiv.appendChild(resultImg);

//     const resultDesc = document.querySelector('.resultDesc');
//     resultDesc.innerHTML = infoList[point].desc;
// }

// const goNext = (qIdx) => {
//     if (qIdx === endPoint) {
//         goResult();
//         return
//     }
//     let q = document.querySelector('.qBox');
//     q.innerHTML = qnaList[qIdx].q;
//     for (let i in qnaList[qIdx].a) {
//         answerButton(qnaList[qIdx].a[i].answer, qIdx, i);
//     }
//     let status = document.querySelector(".statusBar");
//     status.style.width =
//         (100 / endPoint) *
//         (qIdx +1) + '%'
// }

// const begin = () => {
//     main.style.animation = "fadeOut 0.5s";
//     main.style.WebkitAnimation = "fadeOut 0.5s";
//     setTimeout(() => {
//         qna.style.animation = "fadeIn 0.5s";
//         qna.style.WebkitAnimation = "fadeIn 0.5s";
//         // setTimeout(() => {
//             main.style.display = "none";
//             qna.style.display = "block";
//         // });
//         let qIdx = 11;
//         goNext(qIdx);
//     },450)
// }