const home = document.getElementById('home')
const button = document.getElementById('quiz-button');
const startSection = document.getElementById('start-quiz');
const quizSection = document.getElementById('question-section');
const timerItem = document.getElementById('timer-item');
const timer = document.getElementById('timer')
var stopTimer = false;

//array of questions
const questions = [
    {
        question: "hahaha",
        answers: [
            'yes',
            'no',
            'no',
            'no'
        ]
    },
    {
        question: "uhoh",
        answers: [
            'stinky',
            'no',
            'no',
            'no'
        ]
    },
]

// function to start counter
const counter = () => { 
    var timeLeft = 100;
    var timeCounter = setInterval(function(){
        if(timeLeft <= 0 || stopTimer === true){
          clearInterval(timeCounter);
          timer.innerHTML = "Finished";
        } else {
          timer.innerHTML = timeLeft + "s";
        }
        timeLeft -= 1;
      }, 1000);
}

// function to display quiz and call start counter function
const startQuiz = () => {
    timerItem.classList.remove('hidden')
    startSection.classList.add('hidden')
    quizSection.classList.remove('hidden')
    counter();
}

button.addEventListener('click', startQuiz);
