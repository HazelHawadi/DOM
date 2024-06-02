const questions = [
    {
        //JavaScript questions for the quiz
        question: 'What is the correct syntax to create a new object in JavaScript?',
        answers: [
            { choiceA: 'var obj = [];', correct: false },
            { choiceB: 'var obj = new Array();', correct: false },
            { choiceC: 'var obj = {};', correct: true },
            { choiceD: 'var obj = Object[];', correct: false }
        ]
    },
    {
        question: 'Which method can be used to find the length of a string?',
        answers: [
            { choiceA: 'length()', correct: false },
            { choiceB: 'length', correct: true },
            { choiceC: 'len()', correct: false },
            { choiceD: 'size()', correct: false }
        ]
    },
    {
        question: 'How do you write an arrow function in JavaScript?',
        answers: [
            { choiceA: 'function myFunction() => {}', correct: false },
            { choiceB: 'myFunction() => {}', correct: false },
            { choiceC: 'var myFunction = function() {}', correct: false },
            { choiceD: 'const myFunction = () => {}', correct: true }
        ]
    },
    {
        question: 'What is the output of the following code: "console.log(typeof null);"?'
        answers: [
            { choiceA: 'null', correct: false },
            { choiceB: 'object', correct: true },
            { choiceC: 'undefined', correct: false },
            { choiceD: 'number', correct: false }
        ]
    },
    {
        question: 'Which of the following is a correct way to create an array in JavaScript?',
        answers: [
            { choiceA: 'var arr = array(1, 2, 3);', correct: false },
            { choiceB: 'var arr = [1, 2, 3];', correct: true },
            { choiceC: 'var arr = (1, 2, 3);', correct: false },
            { choiceD: 'Vevar arr = {1, 2, 3};nus', correct: false }
        ]
    },
    {
        //HTML questions for the quiz
        question: 'What does HTML stand for?',
        answers: [
            { choiceA: 'Hyper Text Markup Language', correct: true },
            { choiceB: 'Hyper Trainer Marking Language', correct: false },
            { choiceC: 'Hyper Text Marketing Language', correct: false },
            { choiceD: 'Hyper Text Markup Leveler', correct: false }
        ]
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: [
            { choiceA: '<script>', correct: false },
            { choiceB: '<css>', correct: false },
            { choiceC: '<style>', correct: true },
            { choiceD: '<link>', correct: false }
        ]
    },
    {
        question: 'How can you create a hyperlink in HTML?',
        answers: [
            { choiceA: '<a link="url">link text</a>', correct: false },
            { choiceB: '<link href="url">link text</link>', correct: false },
            { choiceC: '<a url="url">link text</a>', correct: false },
            { choiceD: '<a href="url">link text</a>', correct: true }
        ]
    },
    {
        question: ' Which HTML element is used to specify a footer for a document or section?',
        answers: [
            { choiceA: '<footer>', correct: true },
            { choiceB: '<bottom>', correct: false },
            { choiceC: '<section>', correct: false },
            { choiceD: '<foot>', correct: false }
        ]
    },
    {
        question: 'What is the purpose of the "<head>" element in HTML?',
        answers: [
            { choiceA: 'To include the main content of the document', correct: false },
            { choiceB: 'To create a header for the document', correct: false },
            { choiceC: 'To contain metadata about the document', correct: true },
            { choiceD: 'To specify the footer of the document', correct: false }
        ]
    },
    {
        //CSS questions for the quiz
        question: 'What does CSS stand for?',
        answers: [
            { choiceA: 'Cascading Style Sheets', correct: true },
            { choiceB: 'Colorful Style Sheets', correct: false },
            { choiceC: 'Creative Style Sheets', correct: false },
            { choiceD: 'Computer Style Sheets', correct: false }
        ]
    },
    {
        question: 'How do you add a background color in CSS?',
        answers: [
            { choiceA: 'color: red;', correct: false },
            { choiceB: 'background-color: red;', correct: true },
            { choiceC: 'bg-color: red;', correct: false },
            { choiceD: 'background: red;', correct: false }
        ]
    },
    {
        question: 'Which property is used to change the text color of an element?',
        answers: [
            { choiceA: 'text-color', correct: false },
            { choiceB: 'fgcolor', correct: false },
            { choiceC: 'color', correct: true },
            { choiceD: 'font-color', correct: false }
        ]
    },
    {
        question: 'How do you select an element with id "demo" in CSS?',
        answers: [
            { choiceA: '.demo', correct: false },
            { choiceB: '*demo', correct: false },
            { choiceC: '#demo', correct: true },
            { choiceD: 'demo', correct: false }
        ]
    },
    {
        question: '',
        answers: [
            { choiceA: 'font-style', correct: false },
            { choiceB: 'font-weight', correct: true },
            { choiceC: 'font-variant', correct: false },
            { choiceD: 'font-family', correct: true }
        ]
    },
    
];

let shuffleQuestions, questionIndex;
let score = 0;

const questionArea = document.getElementById('question-area');
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const resultArea = document.getElementById('result-area');
const result = document.getElementById('result');