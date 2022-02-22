const home = document.getElementById('home')
const button = document.getElementById('quiz-button');
const startSection = document.getElementById('start-quiz');

const quizSection = document.getElementById('question-div');
const timerItem = document.getElementById('timer-item');
const timer = document.getElementById('timer');

const questionText = document.getElementById('question');
const answersText = document.getElementById('answer-buttons');
const answerButtons = document.getElementsByClassName("question-answer");

const scoreText = document.getElementById('score-display');
const scoreDisplay = document.getElementById('score-display-section');
const scoreButton = document.getElementById('score-button');
const initialsInput = document.getElementById('initial-form');

var myWins = JSON.parse(localStorage.getItem("wins"));

var timeLeft = 100;
var stopTimer = false;
var increment = 0
let input;

if(myWins === null) {
    myWins = [];
}

console.log(myWins)

//array of questions
const questions = [
    {
        question: "What causes solar wind?",
        answers: [
            'a. The sun\'s corona.',
            'b. Magnetic fields.',
            'c. Gaseous particles.',
            'd. The sun\'s core.'
        ],
        correctAnswer: "a"
    },
    {
        question: "How many planets are there in our solar system?",
        answers: [
            'a. 6',
            'b. 7',
            'c. 9',
            'd. 8'
        ],
        correctAnswer: "d"
    },
    {
        question: "What determines a moon\'s atmosphere?",
        answers: [
            'a. It\'s current temperature.',
            'b. The amount of rocky material.',
            'c. The temperature of the parent planet.',
            'd. The amount of oxygen.'
        ],
        correctAnswer: "c"
    },
    {
        question: "Where do comets come from?",
        answers: [
            'a. The astroid belt.',
            'b. Remnant planets',
            'c. The Oort Cloud.',
            'd. Exploding stars.'
        ],
        correctAnswer: "c"
    },
    {
        question: "How far is the Kuiper Belt from the sun?",
        answers: [
            'a. 30 billion meters.',
            'b. 30 astronomical units.',
            'c. 20 million killometers',
            'd. 20 astronomical units.'
        ],
        correctAnswer: "b"
    },
    {
        question: "How many galaxies are there in the universe?",
        answers: [
            'a. 50 trillion.',
            'b. 100 billion.',
            'c. 2 trillion.',
            'd. We don\'t really know.'
        ],
        correctAnswer: "d"
    }
]

const handleInputChange = () => {
    input = initialsInput.value
    console.log(input)
}

const submitScore = () => {
    myWins.push({
        "initials": input,
        "score": timeLeft
    })
    console.log(myWins)
    localStorage.setItem("wins", JSON.stringify(myWins));
}

const setScore = () => {
    quizSection.classList.add('hidden')
    timerItem.classList.add('hidden')
    scoreDisplay.classList.remove('hidden')
    scoreText.innerHTML = "Your final score was " + timeLeft + " seconds."
}

const handleAnswer = (event) => {

    const isButton = event.target.nodeName === 'BUTTON'
    if(!isButton) return
    
    const answer = event.target.value

    if(questions.length - increment > 1 && timeLeft > 0) {
        // checkAnswer()
        if(answer !== questions[increment].correctAnswer) {
            timeLeft = timeLeft - 20;
            console.log(timeLeft)
        } 
        increment++
        setQuestions() 

    } else {
        // create function to redirect to score page
        stopTimer = true;
        setScore();
    }
}

const setQuestions = () => {
    questionText.innerHTML = questions[increment].question
    for(var j = 0; j < 4; j++) {
        var childNodeIncrement = [1,3,5,7]
        var questionEl = answersText.childNodes[childNodeIncrement[j]]
        var questionAnswers = questions[increment].answers[j]
        questionEl.innerHTML = questionAnswers;
    }
}

// function to start counter
const counter = () => { 
    timer.innerHTML = timeLeft + "s";
    var timeCounter = setInterval(function(){
        timer.innerHTML = timeLeft + "s";
        if(timeLeft <= 0 || stopTimer === true){
          clearInterval(timeCounter);
          timer.innerHTML = "Finished";
        }
        timeLeft -= 1;
      }, 1000);
}

// function to display quiz and call start counter function
const startQuiz = () => {
    stopTimer = false;
    counter();
    timerItem.classList.remove('hidden')
    startSection.classList.add('hidden')
    quizSection.classList.remove('hidden')
    setQuestions();
}

answersText.addEventListener("click", handleAnswer);
button.addEventListener('click', startQuiz);
initialsInput.addEventListener('change', handleInputChange);
scoreButton.addEventListener('click', submitScore);