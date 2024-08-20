let question =document.getElementById('question');
let answerA =document.getElementById('answerA');
let answerB = document.getElementById('answerB');
let answerC = document.getElementById('answerC');
let result = document.getElementById('result');

let points = 0;

let  questions = 
[
    {
        question:"What is capital of France?",
        answer:{A: 'Paris', B:'London', C:'Berlin'},
        correctAnswer :"A"        
    },
    {
        question:"Which planet is known as the Red Planet?",
        answer:{A: "Earth", B: "Mars", C: "Jupiter" },
        correctAnswer :"B"        
    },
    {
        question:"What is 2 + 2?",
        answer:{A: "3", B: "4", C: "5"},
        correctAnswer :"B"        
    }    
];

// console.log(questions);
// console.log(questions[2].question);
// console.log(questions[2].answer.A);
// console.log(questions[2].answer.B);
// console.log(questions[2].answer.C);
// console.log(questions[2].correctAnswer);

let currentQuestionIndex= 0;

function loadQuestion(){
    let questionObj = questions[currentQuestionIndex];
    // console.log(questionObj);
    question.innerText = questionObj.question;
    answerA.textContent =questionObj.answer.A;
    answerB.textContent =questionObj.answer.B;
    answerC.textContent =questionObj.answer.C;
}



function checkAnswer(value){

    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    let messageResult;
    if(value ===correctAnswer)
    {
       messageResult ="Correct";
       points+=2;       
    }
    else 
    {
        messageResult = "Wrong";
        points --;
    }
    displayResult(messageResult);

    // inkrementacija samoih pitanja i vracanje na pocetno
    currentQuestionIndex =(currentQuestionIndex+1) % questions.length;  // (1)% 3
    loadQuestion();
}

function displayResult(messageResult)
{
 result.textContent =messageResult + " you have " + points + " points";
}


loadQuestion();