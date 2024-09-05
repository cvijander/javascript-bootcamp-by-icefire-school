let focus = document.getElementById('focus');
let shortBreak = document.getElementById('shortBreak');
let longBreak = document.getElementById('longBreak');

let timer = document.getElementById('timer');
let pause = document.getElementById('pause');
let restart = document.getElementById('restart');

let timerInterval;
let remainingTime;
let selectedTime = 0; 

 // podaci za lokalno pracenje da li smo napravili 4 ili manje pauza i fokus rada 
let numberOfFocusWork = 0;
let numberOfSmallBreak = 0;


// vrednosti u sekundama  - za testiranje samo da vidimo da li radi 
const focusTime = 25;  // 25 minuta  prava vrednost->   1500  
const shortTime = 5;   // 5 minuta  -> 300
const longTime = 15;    // 15 minuta -> 900

// function updateTime() {
//     elapsedTime++; 
//     let minutes = Math.floor((elapsedTime % 3600) / 60);
//     console.log('minutes ' + minutes);
//     let seconds = elapsedTime % 60;
//     console.log('seconds ' + seconds);
//     timerDisplay(minutes,seconds);   
// }

function reverseUpdateTime() {     
        if (remainingTime < 0) {
            clearInterval(timerInterval);
            console.log("Timer finished");
            selectedTime = testIfEnded();
            remainingTime = selectedTime;
            timerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);
            timerInterval = setInterval (reverseUpdateTime,1000);
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

// funckija za display tajmera 

function timerDisplay(minutes,seconds)
{
   timer.textContent = `${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')} `;
}

// funckija koja bira shodno dugmetu koju cemo da odaberemo 

function selectedTimer(value){
    
    if(value === 'focus')
    {
        selectedTime = focusTime;
    }
    else if( value === 'shortBreak')
    {
        selectedTime = shortTime;
    }
    else if (value === 'longBreak'){
        selectedTime = longTime;
    }

    remainingTime = selectedTime;
    timerDisplay(Math.floor(selectedTime /60), selectedTime % 60);
}




function startTime()
{
  clearInterval(timerInterval); 
     console.log(timerInterval);   
     if (!remainingTime)
        {
          remainingTime = selectedTime;           
        } 
        timerInterval = setInterval(reverseUpdateTime,1000);
        console.log(timerInterval); 
        takeCurentTimeForTasks();
        console.log(beginTimeForTasks); 
        
}

function pauseTime(){
clearInterval(timerInterval);
}

function restartTime(){

clearInterval(timerInterval);
remainingTime = selectedTime;
timerDisplay(Math.floor(selectedTime /60), selectedTime %60);
timerInterval = setInterval(reverseUpdateTime,1000);

}


function breakInterval(timerInterval){
clearInterval(timerInterval); 
}

function testIfEnded() {
     
    console.log("Selected time "+ selectedTime);
    console.log("Remaining time " + remainingTime);
    console.log("Number of fokus  " + numberOfFocusWork);
    console.log("Number of break " + numberOfSmallBreak);

    // treba da ispitam svasta 
    
    
    
    
    console.log("Selected time "+ selectedTime);
    console.log("Remaining time " + remainingTime);


    if((selectedTime === focusTime) && (remainingTime <= 0))
    {
        numberOfFocusWork++;
        console.log("Number of fokus work " +numberOfFocusWork);
        selectedTime = shortTime;
    }

    else if ((selectedTime === shortTime ) && (remainingTime <= 0))
    {
        numberOfSmallBreak++;
        console.log("Number od small break " +numberOfSmallBreak);
         

        if( (numberOfSmallBreak === 4) && (numberOfFocusWork === 4))
        {
            console.log("Krecemo na veliku pauzu");
            selectedTime = longTime;
            numberOfSmallBreak = 0;
            numberOfFocusWork = 0;
        }
        else 
        {
           selectedTime = focusTime;   
        }
   }
    else if ((selectedTime === longTime ) && (remainingTime <= 0))
    {
        numberOfFocusWork = 0;
        console.log("Reset focus time  " +numberOfSmallBreak);
        selectedTime = focusTime;
        pomodoroScore();
    }
    return selectedTime;
}


 // time clock

 let curentClockTime = document.getElementById('current-time');
 let curentDate = document.getElementById('current-date');

 let dateFromPC = new Date();
 
 let dateToDisplay = dateFromPC.toDateString();
 let month = dateFromPC.getMonth();
 let date = dateFromPC.getDate();
 let day = dateFromPC.getDay();
 curentDate.innerHTML = dateToDisplay ; //+ "Mesec: " +( month  +1) + " datum: "+date + " dan: " +day ;

//  let separatorClass="";
//  if(dateFromPC.getSeconds() % 2 === 1) separatorClass="trans";

//  let separator ="<span class='" + separatorClass+ "'>:</span>";
 
 
  setInterval(() => {
       let dateFromPC = new Date();
       let hours = dateFromPC.getHours();  
       let minutes = dateFromPC.getMinutes();
       if (minutes < 10) 
       {
        minutes = "0" + minutes;
       }
       let seconds = dateFromPC.getSeconds();
       if (seconds < 10)
       {
        seconds = "0" + seconds;
       }
       curentClockTime .innerHTML = hours +" : " + minutes + " : "  +seconds ;
    }, 1000);

 function updateTime(){

 let hours = dateFromPC.getHours();  
 let minutes = dateFromPC.getMinutes();
 let seconds = dateFromPC.getSeconds();
 curentClockTime .innerHTML = hours +" : " + minutes + " :" +seconds;
 }
 


// uzimanje podataka od korisnika username, dugmici, lokalstorige


let userInputName = document.getElementById('username');
// console.log(userInputName);
let name = localStorage.getItem('name');
let buttonEntryUser = document.getElementById('buttonEntry');
let buttonRemoveUser = document.getElementById('buttonRemove');
const h1 = document.getElementById('title');

function welcomeUser()
{

name ? h1.textContent = `Welcome ${name}` : h1.textContent = 'So sad nobody to welcome';
}

welcomeUser();


// funckija za unos korisnika u lokal storig, pri cemu poredim i vrednost i duzinu da li je nesto uneto i unosim, ako nije izbacuje alert
function submitUserToLocalStorage()
{
  let userNameProperty = userInputName.value;
  if(userNameProperty.length >= 3 && userNameProperty !='')
    {       
      localStorage.setItem ('name', userInputName.value);
      userInputName.value = "";   
      
      refreshPage();      
    }  
    else 
    {
        h1.textContent = "Premalo korisnicko ime ili ste pokusali da unesete prazan string, minimum je 3 karaktera.";
    }
}

// funkcija sluzi da ukloni korisnika sa lokalnog storiga (jos razmisljam gde bih to mogao da primenim a da ima smisla, posto gubim podatke o korisniku)
 function removeUserToLocalStorage() 
 {
    let currentUser = localStorage.getItem('name');
    if(currentUser.value !='' || currentUser.value != null)
    {
       h1.textContent = `You are removing  current user from site, are you sure you wanna do this ?
        ** You are removing ${currentUser}  **`;   
       localStorage.removeItem('name');
       refreshPage();
    }
    else 
    {
        h1.textContent = "There is no user to remove";
        refreshPage();
    }
    
 }

 // refresuje stranicu kako ne bi morali rucno i onda se odmah vidi da je korisnik ulogovan ili nije 
 function refreshPage()
 {
    location.reload();
 }


 
 let userOfPomodoro = localStorage.getItem('name');
 console.log(userOfPomodoro);

 let beginTimeForTasks = "" ;
 let beginDateAndMonthForTask = "";

 let userFullResults = [userOfPomodoro, beginTimeForTasks, beginDateAndMonthForTask];
 console.log(userFullResults);

 function takeCurentTimeForTasks()
{
   let dateFromPC = new Date();
       let hours = dateFromPC.getHours();  
       let minutes = dateFromPC.getMinutes();
       let date = dateFromPC.getDate();
       let month = dateFromPC.getMonth();

       if (minutes < 10) 
       {
        minutes = "0" + minutes;
       }
       let seconds = dateFromPC.getSeconds();
       if (seconds < 10)
       {
        seconds = "0" + seconds;
       }
       beginTimeForTasks  = hours +" : " + minutes + " : "  +seconds ;
       userFullResults[1] = beginTimeForTasks;
       beginDateAndMonthForTask = date + "."+ (month+1) +".";
       userFullResults[2] = beginDateAndMonthForTask;
}


let perfectResult = [];

function pomodoroScore()
{
    let pomodoroResults = JSON.parse(localStorage.getItem('pomodoroResults')) || []; 
    pomodoroResults.push(userFullResults);   
    console.log(pomodoroResults);
    
    localStorage.setItem('pomodoroResults',JSON.stringify(pomodoroResults));
    alert("Congrats  " + localStorage.getItem('name') + " for successfully completed tasks in time.")
}

// tabela, local storage i cupanje parsovanog

function showResults(){

let tablePerfectScore = document.getElementById('tableScore');
let pomodoroDataFromLocalStorage = localStorage.getItem('pomodoroResults');
let pomodoroDataJSONParsed = JSON.parse(pomodoroDataFromLocalStorage);


    pomodoroDataJSONParsed.forEach(function(ele) 
    {
    console.log(ele);  
    // tableScore.textContent =ele;
    displayTableData(pomodoroDataJSONParsed);
  });
  
console.log("Da vidimo te rezultate")
console.log(pomodoroDataJSONParsed);
    
}        




function displayTableData(passedData)
{
    let tbodyScore = document.getElementById('tbodyScore');
    tbodyScore.textContent='';

    passedData.forEach(rowData =>{
        let row = document.createElement('tr');

        rowData.forEach(cellData => {
            let cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tbodyScore.appendChild(row);
    } );
}