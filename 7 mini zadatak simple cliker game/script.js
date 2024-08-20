let clickButton =document.getElementById('clickButton');
let counter = document.getElementById('counter');
let timerHtml =document.getElementById('timerHtml');

let count = 0;
let isGameActive = false;
let timer;

function incrementClick(){
  if(isGameActive) {
    count++;
    displayCounter();    
  }

}

function startGame() {
    count = 0;
    isGameActive = true;
    clickButton.disabled = false; 
    displayCounter();
    timerHtml.innerText=`Time left : 10 seconds`;

    let timeLeft = 10;
    timer =setInterval(() => {
        timeLeft--;
        timerHtml.innerText=`Time left : ${timeLeft} seconds`;

        if(timeLeft <=0)
        {
            clearInterval(timer);
            endGame();
        }

    }, 1000);
}

function endGame(){
    isGameActive =false; 

    clickButton.disabled =true;
    timerHtml.innerText ="Time's up";
    alert(`Time 's up. you clicked ${count} times`);
}

startGame();


function displayCounter() {

  counter.innerText = `Clicks:  ${count}`;
}

function displayTimer (timeLeft) {
    
     timerHtml.innerText=`Time left : ${timeLeft} seconds`;
}
