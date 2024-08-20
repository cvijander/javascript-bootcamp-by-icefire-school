let focus =document.getElementById('focus');
let shortBreak =document.getElementById('shortBreak');
let longBreak =document.getElementById('longBreak');

let timer =document.getElementById('timer');
let pause =document.getElementById('pause');
let restart = document.getElementById('restart');

let timerInterval;
let remainingTime ;
let selectedTime = 0; 


const focusTime = 1500;  // 25 minuta
const shortTime = 300;   // 5 minuta
const longTime = 900;    // 15 minuta 

// function updateTime() {
//     elapsedTime++; 
//     let minutes = Math.floor((elapsedTime % 3600) / 60);
//     console.log('minutes ' + minutes);
//     let seconds = elapsedTime % 60;
//     console.log('seconds ' + seconds);
//     timerDisplay(minutes,seconds);   
// }

function reverseUpdateTime() {     
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            console.log("Timer finished");
            return;
        }

    let minutes = Math.floor((remainingTime % 3600) / 60);
    console.log('minutes ' + minutes);
    let seconds = remainingTime % 60;
    console.log('seconds ' + seconds);  
    timerDisplay(minutes,seconds);    
    remainingTime--;
  
}


// function startStopwatch(){
// breakInterval(timerInterval);
// timerInterval = setInterval(updateTime,1000);
// }

// updateTime();

function timerDisplay(minutes,seconds)
{
   timer.textContent = `${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')} `;
}

function selectedTimer(value){
    if(value ==='focus')
    {
        selectedTime = focusTime;
    }
    else if( value ==='shortBreak')
    {
        selectedTime = shortTime;
    }
    else if (value == 'longBreak'){
        selectedTime =longTime;
    }

    remainingTime = selectedTime;
    timerDisplay(Math.floor(selectedTime /60), selectedTime %60);
}




function startTime()
{
  clearInterval(timerInterval); 
     console.log(timerInterval);   
     if (!remainingTime) remainingTime = selectedTime;  
     timerInterval = setInterval(reverseUpdateTime,1000);
     console.log(timerInterval); 
  
}

function pauseTime(){
clearInterval(timerInterval);
}

function restartTime(){
clearInterval(timerInterval);
remainingTime =selectedTime;
timerDisplay(Math.floor(selectedTime /60), selectedTime %60);
timerInterval =setInterval(reverseUpdateTime,1000);

}


function breakInterval(timerInterval){
clearInterval(timerInterval); 
}