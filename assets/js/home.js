const home = document.getElementById('home')
const button = document.getElementById('quiz-button');
const startSection = document.getElementById('start-quiz');
const quizSection = document.getElementById('question-section');
const timerItem = document.getElementById('timer-item');
const timer = document.getElementById('timer');
const questionText = document.getElementById('question');
const answersText = document.getElementById('answer-buttons');
const answerButtons = document.getElementsByClassName("question-answer");
var timeLeft = 100;
var stopTimer = false;
var increment = 0

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

// const checkAnswer = () => {

// }

const handleAnswer = (event) => {

    const isButton = event.target.nodeName === 'BUTTON'

    if(!isButton) return
    

    const answer = event.target.value

    if(questions.length - increment > 0) {
        // checkAnswer()
        console.log(answer)
        console.log(questions[increment].correctAnswer)
        console.log(answer !== questions[increment].correctAnswer)
        if(answer !== questions[increment].correctAnswer) {
            timeLeft = timeLeft - 20;
            console.log(timeLeft)
        } 
        increment++
        setQuestions() 

    } else {
        // create function to redirect to score page
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
    counter();
    timerItem.classList.remove('hidden')
    startSection.classList.add('hidden')
    quizSection.classList.remove('hidden')
    setQuestions();
}

answersText.addEventListener("click", handleAnswer);

button.addEventListener('click', startQuiz);
