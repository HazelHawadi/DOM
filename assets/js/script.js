let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultArea = document.getElementById('result-area');
const resultElement = document.getElementById('result');
const progressElement = document.getElementById('progress');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    nextButton.classList.add('next');
    resultArea.classList.add('next');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    progressElement.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + '%';
}

function resetState() {
    nextButton.classList.add('next');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    if (quizCompleted) return;

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        const isCorrect = button.dataset.correct === 'true';
        if (!correct && isCorrect) {
            button.classList.add('correct'); // Highlight correct answer
        }
        if (button === selectedButton) {
            setStatusClass(button, correct); // Highlight selected answer
        }
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('next');
    } else {
        quizCompleted = true;
        showResult();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResult() {
    nextButton.classList.add('next');
    resultArea.classList.remove('next');
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', () => {
    if (quizCompleted) {
        startQuiz();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
});

startQuiz();
