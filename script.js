// Array von Fragen und Antworten für das Quiz
const questions = [
    {
        question: "Wer hat HTML erfunden?",
        answers: ["Robbie Williams", "Lady Gaga", "Tim Berners-Lee", "Justin Bieber"],
        correctAnswer: 2
    },
    {
        question: "Welches ist das größte Land der Welt nach Fläche?",
        answers: ["Kanada", "China", "USA", "Russland"],
        correctAnswer: 3
    },
    {
        question: "Wie viele Planeten hat unser Sonnensystem?",
        answers: ["7", "8", "9", "10"],
        correctAnswer: 1
    },
    {
        question: "Wer schrieb das Theaterstück 'Romeo und Julia'?",
        answers: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "William Shakespeare", "Thomas Mann"],
        correctAnswer: 2
    },
    {
        question: "Welches Element hat das chemische Symbol 'O'?",
        answers: ["Gold", "Silber", "Osmium", "Sauerstoff"],
        correctAnswer: 3
    },
    {
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: ["1989", "1990", "1987", "1985"],
        correctAnswer: 0
    },
    {
        question: "Welches ist das höchste Gebirge der Welt?",
        answers: ["Rocky Mountains", "Anden", "Himalaya", "Alpen"],
        correctAnswer: 2
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["14", "15", "16", "17"],
        correctAnswer: 2
    },
    {
        question: "Wer malte die Mona Lisa?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        correctAnswer: 1
    },
    {
        question: "Was ist die Hauptstadt von Australien?",
        answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
        correctAnswer: 3
    },
    {
        question: "Welches Land ist bekannt für seine Tulpen?",
        answers: ["Belgien", "Niederlande", "Frankreich", "Schweden"],
        correctAnswer: 1
    },
    {
        question: "Welche Farbe hat die Sonne?",
        answers: ["Blau", "Rot", "Gelb", "Grün"],
        correctAnswer: 2
    },
    {
        question: "In welchem Jahr fand die erste Mondlandung statt?",
        answers: ["1965", "1967", "1969", "1971"],
        correctAnswer: 2
    },
    {
        question: "Welches Land war der erste, der die Atombombe einsetzte?",
        answers: ["Japan", "Deutschland", "Vereinigte Staaten", "Russland"],
        correctAnswer: 2
    },
    {
        question: "Welches Land gewann den ersten Fußball-Weltmeistertitel?",
        answers: ["Italien", "Brasilien", "Uruguay", "Argentinien"],
        correctAnswer: 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
const AUDIO_SUCCESS = new Audio('sounds/success.mp3');
const AUDIO_FAIL = new Audio('sounds/wrong.mp3');

// Initialisiert das Quiz und zeigt die Anzahl der Fragen an
function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

// Zeigt die aktuelle Frage und die Antworten an
function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function updateProgressBar() {
    const percent = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-bar').innerHTML = `${Math.round(percent)} %`;
}

function updateToNextQuestion() {
    const question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answers[0];
    document.getElementById('answer_2').innerHTML = question.answers[1];
    document.getElementById('answer_3').innerHTML = question.answers[2];
    document.getElementById('answer_4').innerHTML = question.answers[3];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
}

function showEndScreen() {
    document.getElementById('endScreen').style.display = '';
    document.getElementById('questionBody').style.display = 'none';

    document.getElementById('amount-of-Question').innerHTML = questions.length;
    document.getElementById('amount-of-right-Question').innerHTML = rightQuestions;
    document.getElementById('header-image').src = './assets/img/images.png';
}

// Überprüft die gegebene Antwort und gibt das Ergebnis aus
function answer(selection) {
    const question = questions[currentQuestion];
    const selectedQuestionNumber = selection.slice(-1);
    const idOfRightAnswer = `answer_${question.correctAnswer + 1}`;

    if (selectedQuestionNumber == question.correctAnswer + 1) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    updateProgressBar();
}

function resetAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
        const answerButton = document.getElementById(`answer_${i}`);
        answerButton.parentNode.classList.remove('bg-danger', 'bg-success');
    }
}

function restartGame() {
    document.getElementById('header-image').src = './assets/img/Quiz-Time.jpg';
    document.getElementById('questionBody').style.display = '';
    document.getElementById('endScreen').style.display = 'none';

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}
