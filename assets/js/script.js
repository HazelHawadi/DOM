let shuffleQuestions, questionIndex;
let score = 0;
//selected HTML elements stored in variables to access easily
const questionArea = document.getElementById('question-area');
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const resultArea = document.getElementById('result-area');
const result = document.getElementById('result');

// Start the quiz
startQuiz();

//start the quiz by shuffling questions, resetting the score and progress, and displaying the first question
function startQuiz() {
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    score = 0; // to reset the score
    resultArea.classList.add('hide'); // to hide the result area
    nextButton.classList.add('hide'); // to hide the next button
    progressBar.style.width = '0%';
    questionArea.classList.remove('hide'); // to show the question area
    question(); // to show the first question
}

// Function to display the current question
function showQuestion() {
    //resetState(); // to reset for new question
    progressBar.style.width = `${(questionIndex / shuffleQuestions.length) * 100}%`; // Update progress bar
    const question = shuffleQuestions[questionIndex]; 
    questionElement.innerText = question.question; //will display the question text
    question.answers.forEach(answer => { // will display the answer buttons
        const button = document.createElement('button');
        }

}