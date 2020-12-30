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

const setupQuiz = ()=>{
    $jsQuestion.textContent = quiz[0].question;
    
    let buttonIndex = 0;
    while(buttonIndex<$button.length){
        $button[buttonIndex].textContent = quiz[0].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const handleClicker = (e)=>{
    if(quiz[0].correct === e.target.textContent){
        alert("正解！");
    } else{
        alert("ハズレ！");
    }
}

$button[0].addEventListener("click",(e)=>{
    handleClicker(e);
})


})();    