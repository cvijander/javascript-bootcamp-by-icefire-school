let startButton =document.getElementById('startButton');
let stopButton =document.getElementById('stopButton');
let result =document.getElementById('result');

let startTime;
let messageResult='';

function startTimer(){

startTime =Date.now();
startButton.disabled =true;
stopButton.disabled = false;
result.innerText = "Timer started...";
console.log(startTime)

}

function stopTimer(){

let endTime =Date.now();
let elapsedTime = (endTime - startTime)/1000;
console.log(endTime);
console.log(elapsedTime);

startButton.disabled =false;
stopButton.disabled = true;

 messageResult = `You stoped the timer at ${elapsedTime.toFixed(2)} seconds`;

console.log(elapsedTime.toFixed(2));

if(Math.abs(elapsedTime - 10 ) <= 0.5) {
    console.log(Math.abs(elapsedTime - 10));
  messageResult +=" Great job";
}
else 
{
    messageResult += " Try again";
    console.log(Math.abs(elapsedTime - 10));
}
   displayMessage();
}

function displayMessage()
{
    result.innerText = messageResult;
}