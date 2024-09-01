let timer =document.getElementById('timer');
let startButton =document.getElementById('startButton');
let stopButton =document.getElementById('stopButton');
let resetButton  =document.getElementById('resetButton');

let timerInterval;
let elapsedTime = 0;


function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime /3600);
    console.log('hours ' +hours);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    console.log('minutes ' + minutes);
    let seconds = elapsedTime % 60;
    console.log('seconds ' + seconds);
    timerDisplay(hours,minutes,seconds);   
}




function timerDisplay(hours,minutes,seconds)
{
   timer.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')} `;
}



function startStopwatch(){
breakInterval(timerInterval);
timerInterval = setInterval(updateTime,1000);
}


function stopStopwatch(){
breakInterval(timerInterval);
}

function resetStopwatch(){
breakInterval(timerInterval);
elapsedTime =0;
timer.textContent = '00:00:00';
}

function breakInterval(timerInterval){
clearInterval(timerInterval); 
}