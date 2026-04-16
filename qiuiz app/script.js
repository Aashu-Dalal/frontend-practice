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
let container = document.getElementById("container");
let quizBox = document.getElementById("quizBox");

let questionEl = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");