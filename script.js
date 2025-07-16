
const questions = [
    {
        question: "Which programming language is known for its use in building Android apps?",
        options: ["Java", "Python", "Ruby", "JavaScript"],
        correctAnswer: "Java"
    },
    {
        question: "What is the primary purpose of HTML?",
        options: ["Create dynamic web applications", "Style web pages", "Define the structure of web content", "Execute server-side code"],
        correctAnswer: "Define the structure of web content"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "--", "##"],
        correctAnswer: "//"
    },
    {
        question: "What is the output of '2' + '2' in JavaScript?",
        options: ["4", "22", "Concatenation Error", "Undefined"],
        correctAnswer: "22"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Colorful Style Sheet"],
        correctAnswer: "Cascading Style Sheet"
    },
    {
        question: "What is the latest version of HTML as of 2021?",
        options: ["HTML5", "HTML6", "XHTML", "HTML2021"],
        correctAnswer: "HTML5"
    },
    {
        question: "Which of the following is a version control system?",
        options: ["Java", "Git", "Python", "Node.js"],
        correctAnswer: "Git"
    },
    {
        question: "What does API stand for?",
        options: ["Artificial Programming Interface", "Application Programming Interface", "Advanced Protocol Interaction", "Automated Program Integration"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JavaScript", "Python", "CSS"],
        correctAnswer: "CSS"
    },
    {
        question: "What is the purpose of the 'else' statement in programming?",
        options: ["It repeats a block of code", "It defines a loop", "It handles conditions when the 'if' condition is false", "It defines a function"],
        correctAnswer: "It handles conditions when the 'if' condition is false"
    },
    {
        question: "What is the primary use of SQL?",
        options: ["Styling web pages", "Creating mobile apps", "Querying and managing databases", "Building web servers"],
        correctAnswer: "Querying and managing databases"
    },
    {
        question: "What does OOP stand for in programming?",
        options: ["Object-Oriented Programming", "Object-Oriented Protocol", "Online Operating Procedure", "Optimized Output Process"],
        correctAnswer: "Object-Oriented Programming"
    },
    {
        question: "What is the result of 3 * '2' in JavaScript?",
        options: ["5", "6", "32", "NaN"],
        correctAnswer: "6"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 45; // Initial time for each question (45 seconds)

function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-container").style.display = "none";
    displayQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time Left: ${timeLeft} seconds`;

}

function displayQuestion() {
    clearInterval(timer);
    timeLeft = 45; // Reset time for each question to 45 seconds
    startTimer();

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(function(option) {
            const optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.textContent = option;

            optionElement.addEventListener("click", function()  {
                if (option === currentQuestion.correctAnswer) {
                    score++;
                }
                currentQuestionIndex++;
                displayQuestion();
                updateScore();
            });

            optionsContainer.appendChild(optionElement);
        });
    } else {
        endQuiz();
    }
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("question-container").innerHTML = "<p>Quiz Completed!</p>";
    document.getElementById("options").innerHTML = "";
}

displayQuestion();
