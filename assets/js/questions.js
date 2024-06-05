const questions = [
    {
        question: 'What is the correct syntax to create a new object in JavaScript?',
        answers: [
            { text: 'var obj = [];', correct: false },
            { text: 'var obj = new Array();', correct: false },
            { text: 'var obj = {};', correct: true },
            { text: 'var obj = Object[];', correct: false }
        ]
    },
    {
        question: 'Which method can be used to find the length of a string?',
        answers: [
            { text: 'length()', correct: false },
            { text: 'length', correct: true },
            { text: 'len()', correct: false },
            { text: 'size()', correct: false }
        ]
    },
    {
        question: 'How do you write an arrow function in JavaScript?',
        answers: [
            { text: 'function myFunction() => {}', correct: false },
            { text: 'myFunction() => {}', correct: false },
            { text: 'var myFunction = function() {}', correct: false },
            { text: 'const myFunction = () => {}', correct: true }
        ]
    },
    {
        question: 'What is the output of the following code: "console.log(typeof null);"?',
        answers: [
            { text: 'null', correct: false },
            { text: 'object', correct: true },
            { text: 'undefined', correct: false },
            { text: 'number', correct: false }
        ]
    },
    {
        question: 'Which of the following is a correct way to create an array in JavaScript?',
        answers: [
            { text: 'var arr = array(1, 2, 3);', correct: false },
            { text: 'var arr = [1, 2, 3];', correct: true },
            { text: 'var arr = (1, 2, 3);', correct: false },
            { text: 'var arr = {1, 2, 3};', correct: false }
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyper Trainer Marking Language', correct: false },
            { text: 'Hyper Text Marketing Language', correct: false },
            { text: 'Hyper Text Markup Leveler', correct: false }
        ]
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: [
            { text: '<script>', correct: false },
            { text: '<css>', correct: false },
            { text: '<style>', correct: true },
            { text: '<link>', correct: false }
        ]
    },
    {
        question: 'How can you create a hyperlink in HTML?',
        answers: [
            { text: '<a link="url">link text</a>', correct: false },
            { text: '<link href="url">link text</link>', correct: false },
            { text: '<a url="url">link text</a>', correct: false },
            { text: '<a href="url">link text</a>', correct: true }
        ]
    },
    {
        question: 'Which HTML element is used to specify a footer for a document or section?',
        answers: [
            { text: '<footer>', correct: true },
            { text: '<bottom>', correct: false },
            { text: '<section>', correct: false },
            { text: '<foot>', correct: false }
        ]
    },
    {
        question: 'What is the purpose of the "<head>" element in HTML?',
        answers: [
            { text: 'To include the main content of the document', correct: false },
            { text: 'To create a header for the document', correct: false },
            { text: 'To contain metadata about the document', correct: true },
            { text: 'To specify the footer of the document', correct: false }
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Colorful Style Sheets', correct: false },
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Computer Style Sheets', correct: false }
        ]
    },
    {
        question: 'How do you add a background color in CSS?',
        answers: [
            { text: 'color: red;', correct: false },
            { text: 'background-color: red;', correct: true },
            { text: 'bg-color: red;', correct: false },
            { text: 'background: red;', correct: false }
        ]
    },
    {
        question: 'Which property is used to change the text color of an element?',
        answers: [
            { text: 'text-color', correct: false },
            { text: 'fgcolor', correct: false },
            { text: 'color', correct: true },
            { text: 'font-color', correct: false }
        ]
    },
    {
        question: 'How do you select an element with id "demo" in CSS?',
        answers: [
            { text: '.demo', correct: false },
            { text: '*demo', correct: false },
            { text: '#demo', correct: true },
            { text: 'demo', correct: false }
        ]
    }
];
