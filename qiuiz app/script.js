const quizData =[
    {
        question: "What is the full form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyper Text Mark Language",
        d: "Hyper Text Markup Leveler",
        correct: "opt1"
    },
    {
        question: "What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        correct: "opt1"
    },
    {
        question: "What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "Just Script",
        d: "Java Syntax",
        correct: "opt1"
    },
    {
        question: "What is the full form of HTTP?",
        a: "Hyper Text Transfer Protocol",
        b: "Hyper Text Test Protocol",
        c: "Hyper Text Template Protocol",
        d: "Hyper Text Transfer Program",
        correct: "opt1"
    },
    {
        question: "What is the full form of API?",
        a: "Application Programming Interface",
        b: "Application Programming Interference",
        c: "Application Process Interface",
        d: "Application Program Interface",
        correct: "opt1"
    },
    {
        question: "What is the full form of SQL?",
        a: "Structured Query Language",
        b: "Stylish Question Language",
        c: "Stylesheet Query Language",
        d: "Statement Question Language",
        correct: "opt1"
    },
    {
        question: "What is the full form of XML?",
        a: "eXecutable Multiple Language",
        b: "eXtensible Markup Language",
        c: "eXtensible Markup Leveler",
        d: "eXecutable Markup Language",
        correct: "opt2"
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
        quizBox.style.backgroundColor = "#d4edda";
        quizBox.style.color = "black";
    }
    else{
        quizBox.style.backgroundColor = "#f8d7da";
        quizBox.style.color = "black";
    }

    setTimeout(() => {
        quizBox.style.backgroundColor = "#1e1e1e";
        quizBox.style.color = "#ffffff";
        currentQuestion++;

        if(currentQuestion <quizData.length){
            loadQuiz()
        }
    },800)
})

let score = 0;
if(selected === correctAns){
    score++;   
    quizBox.style.backgroundColor = "#d4edda";
}
else{
    quizBox.style.backgroundColor = "#f8d7da";
}