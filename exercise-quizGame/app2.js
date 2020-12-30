( ()=>{const quiz = [
    {
        question:"問題1",
        answers:[
            "答え1−1",
            "答え1−2",
            "答え1−3",
            "答え1−4",
        ],
        correct:"答え1−4"
    }, {
        question:"問題2",
        answers:[
            "答え2−1",
            "答え2−2",
            "答え2−3",
            "答え2−4",
        ],
        correct:"答え2−1"
    }, {
        question:"問題1",
        answers:[
            "答え3−1",
            "答え3−2",
            "答え3−3",
            "答え3−4",
        ],
        correct:"答え3−2"
    },
];

const $jsQuestion = document.getElementById("js-question");
const $button = document.getElementsByTagName("button");
let quizIndex = 0;
let correctNum =0;

//問題文と選択肢を表示

const setupQuiz = ()=>{
    $jsQuestion.textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent= quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

//答えを押したら正誤判定
const handleClicker = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        alert("正解！");
        correctNum++;
    } else{
        alert("ハズレ！");
    }

    quizIndex++;

    if(quizIndex< quiz.length){
        setupQuiz();
    } else{
        alert("終わり！" + quiz.length + "問中" + correctNum + "問正解！！");
    }
}

let handleIndex=0;
while(handleIndex < $button.length){
    $button[handleIndex].addEventListener("click",(e)=>{
        handleClicker(e);
    })
    handleIndex++;
}



})();    