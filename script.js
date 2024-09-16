let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": "3"
    },
    {
        "question": "Welches ist das größte Land der Welt nach Fläche?",
        "answer_1": "Kanada",
        "answer_2": "China",
        "answer_3": "USA",
        "answer_4": "Russland",
        "right_answer": "4"
    },
    {
        "question": "Wie viele Planeten hat unser Sonnensystem?",
        "answer_1": "7",
        "answer_2": "8",
        "answer_3": "9",
        "answer_4": "10",
        "right_answer": "2"
    },
    {
        "question": "Wer schrieb das Theaterstück 'Romeo und Julia'?",
        "answer_1": "Johann Wolfgang von Goethe",
        "answer_2": "Friedrich Schiller",
        "answer_3": "William Shakespeare",
        "answer_4": "Thomas Mann",
        "right_answer": "3"
    },
    {
        "question": "Welches Element hat das chemische Symbol 'O'?",
        "answer_1": "Gold",
        "answer_2": "Silber",
        "answer_3": "Osmium",
        "answer_4": "Sauerstoff",
        "right_answer": "4"
    },
    {
        "question": "In welchem Jahr fiel die Berliner Mauer?",
        "answer_1": "1989",
        "answer_2": "1990",
        "answer_3": "1987",
        "answer_4": "1985",
        "right_answer": "1"
    },
    {
        "question": "Welches ist das höchste Gebirge der Welt?",
        "answer_1": "Rocky Mountains",
        "answer_2": "Anden",
        "answer_3": "Himalaya",
        "answer_4": "Alpen",
        "right_answer": "3"
    },
    {
        "question": "Wie viele Bundesländer hat Deutschland?",
        "answer_1": "14",
        "answer_2": "15",
        "answer_3": "16",
        "answer_4": "17",
        "right_answer": "3"
    },
    {
        "question": "Wer malte die Mona Lisa?",
        "answer_1": "Michelangelo",
        "answer_2": "Leonardo da Vinci",
        "answer_3": "Vincent van Gogh",
        "answer_4": "Pablo Picasso",
        "right_answer": "2"
    },
    {
        "question": "Was ist die Hauptstadt von Australien?",
        "answer_1": "Sydney",
        "answer_2": "Melbourne",
        "answer_3": "Perth",
        "answer_4": "Canberra",
        "right_answer": "4"
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
