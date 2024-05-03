const questions = [
    {
        "question": "What is the capital of Japan?",
        "answers": [
            { "text": "Tokyo", "correct": true },
            { "text": "Beijing", "correct": false },
            { "text": "Seoul", "correct": false },
            { "text": "Bangkok", "correct": false }
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            { "text": "Mars", "correct": true },
            { "text": "Venus", "correct": false },
            { "text": "Mercury", "correct": false },
            { "text": "Jupiter", "correct": false }
        ]
    },
    {
        "question": "Who painted the Mona Lisa?",
        "answers": [
            { "text": "Leonardo da Vinci", "correct": true },
            { "text": "Pablo Picasso", "correct": false },
            { "text": "Vincent van Gogh", "correct": false },
            { "text": "Claude Monet", "correct": false }
        ]
    },
    {
        "question": "Which element has the chemical symbol 'H'?",
        "answers": [
            { "text": "Hydrogen", "correct": true },
            { "text": "Helium", "correct": false },
            { "text": "Iron", "correct": false },
            { "text": "Gold", "correct": false }
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();