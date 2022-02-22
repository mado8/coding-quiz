const home = document.getElementById('home')
const button = document.getElementById('quiz-button');
const startSection = document.getElementById('start-quiz');
const quizSection = document.getElementById('question-section');
const timerItem = document.getElementById('timer-item');
const timer = document.getElementById('timer');
var timeLeft = 100;
var stopTimer = false;

//array of questions
const questions = [
    {
        question: "hahaha",
        answers: [
            'a. yes',
            'b. no',
            'c. no',
            'd. no'
        ],
        correctAnswer: "a"
    },
    {
        question: "uhoh",
        answers: [
            'a. stinky',
            'b. no',
            'c. no',
            'd. no'
        ],
        correctAnswer: "a"
    },
]

const setQuestions = () => {
    for(var i = 0; i < questions.length; i++) {
        console.log(questions[i])
        for(var j = 0; j < 4; j++) {
            console.log(questions[i].answers[j])
        }
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
    counter();
    timerItem.classList.remove('hidden')
    startSection.classList.add('hidden')
    quizSection.classList.remove('hidden')
    setQuestions();
}

button.addEventListener('click', startQuiz);
