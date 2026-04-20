const quizData =[
    {
        question: "What is the full form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyper Text Mark Language",
        d: "Hyper Text Markup Leveler",
        correct: "a"
    },
    {
        question: "What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        correct: "a"
    },
    {
        question: "What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "Just Script",
        d: "Java Syntax",
        correct: "a"
    },
    {
        question: "What is the full form of HTTP?",
        b: "Hyper Text Test Protocol",
        a: "Hyper Text Transfer Protocol",
        c: "Hyper Text Template Protocol",
        d: "Hyper Text Transfer Program",
        correct: "b"

    },
    {
        question: "What is the full form of API?",
        b: "Application Programming Interference",
        c: "Application Process Interface",
        d: "Application Program Interface",
        a: "Application Programming Interface",
        correct: "d"
    },
    {
        question: "What is the full form of SQL?",
        b: "Stylish Question Language",
        a: "Structured Query Language",
        c: "Stylesheet Query Language",
        d: "Statement Question Language",
        correct: "b"
    },
    {
        question: "What is the full form of XML?",
        a: "eXecutable Multiple Language",
        c: "eXtensible Markup Leveler",
        b: "eXtensible Markup Language",
        d: "eXecutable Markup Language",
        correct: "c"
    }
];

let start = document.getElementById("start");
let container = document.querySelector(".container");
let quizBox = document.getElementById("quizBox");

let questionEl = document.getElementById("question");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");

let nextBtn = document.getElementById("next");

let currentQuestion = 0;

function loadQuiz(){
    let options = document.querySelectorAll('input[name="option"]');
    options.forEach(option => option.checked = false);
    let currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    label1.innerText = currentQuizData.a;
    label2.innerText = currentQuizData.b;
    label3.innerText = currentQuizData.c;
    label4.innerText = currentQuizData.d;
}

start.addEventListener("click", function(){
    container.style.display = "none";
    quizBox.style.display = "block";

    loadQuiz();
});

function getSelected(){
    let answer = undefined;
    let options = document.querySelectorAll('input[name="option"]');
    options.forEach(option => {
        if(option.checked){
            answer = option.id;
        }
    })
    return answer;
}

nextBtn.addEventListener("click" , function(){
    let selected = getSelected();
    if(!selected){
        alert("Please select an answer");
        return;
    }

    let correctAns = quizData[currentQuestion].correct;
    if(selected === correctAns){
        document.body.style.backgroundColor = "green";
    }
    else{
        document.body.style.backgroundColor = "red";
    }

    setTimeout(() => {
        document.body.style.backgroundColor = "white";
        currentQuestion++;

        if(currentQuestion <quizData.length){
            loadQuiz()
        }
    },800)
})