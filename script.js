const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;

    optionsEl.forEach((btn, index) => {
        btn.textContent = current.options[index];
        btn.disabled = false;
        btn.style.background = "#333";
    });
}

function selectAnswer(index) {
    optionsEl.forEach(btn => btn.disabled = true);

    if (index === quizData[currentQuestion].answer) {
        score++;
        optionsEl[index].style.background = "green";
    } else {
        optionsEl[index].style.background = "red";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
    nextBtn.classList.add("hidden");

    scoreEl.classList.remove("hidden");
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
