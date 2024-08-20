let startButton =document.getElementById('startButton');
let clickButton =document.getElementById('clickButton');
let result = document.getElementById('result');

let startTime;
console.log(startTime);



function startGame(){

startButton.style.display='none';
result.textContent="";

let delay = Math.random()*3000 +2000; 
setTimeout(() => {
    startTime= Date.now();
    console.log(startTime);
    clickButton.style.display='inline-block';

}, delay);
}

function recordReaction(){

  let reactionTime = Date.now()-startTime; 
  console.log(Date.now());
  console.log(reactionTime);
  displayResult(reactionTime);
  clickButton.style.display='none';
  startButton.style.display='inline-block';
  

}

function displayResult(reactionTime){
    result.textContent = `Your reaction time is ${reactionTime} ms`;   
}