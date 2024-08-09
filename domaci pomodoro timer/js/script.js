const taskTime =25;
const smallBreak =5;
const bigBreak =15;


// uzimanje podataka od korisnika username, dugmici, lokalstorige

let userInputName = document.getElementById('username');
// console.log(userInputName);
let name = localStorage.getItem('name');
let buttonEntryUser = document.getElementById('buttonEntry');
let buttonRemoveUser = document.getElementById('buttonRemove');



function welcomeUser()
{

const h1 = document.getElementById('title');
name ? h1.textContent = `Welcome ${name}` : h1.textContent = 'So sad nobody to welcome';
}

welcomeUser();


// funckija za unos korisnika u lokal storig, pri cemu poredim i vrednost i duzinu da li je nesto uneto i unosim, ako nije izbacuje alert
function submitUserToLocalStorage()
{
  let userNameProperty = userInputName.value;
  if(userNameProperty.length >=3 && userNameProperty !='')
    {       
      localStorage.setItem ('name',userInputName.value);
      userInputName.value="";
      buttonTasks.disabled=false;
      
      
      refreshPage();      
    }  
    else 
    {
        alert("Premalo korisnicko ime ili ste pokusali da unesete prazan string, minimum je 3 karaktera.");
    }
}

// funkcija sluzi da ukloni korisnika sa lokalnog storiga (jos razmisljam gde bih to mogao da primenim a da ima smisla, posto gubim podatke o korisniku)
 function removeUserToLocalStorage() 
 {
    let currentUser = localStorage.getItem('name');
    if(currentUser.value !='' || currentUser.value !=null)
    {
       alert(`You are removing  current user from site, are you sure you wanna do this ?
        ** You are removing ${currentUser}  **`);   
       localStorage.removeItem('name');
       refreshPage();
    }
    else 
    {
        alert("There is no user to remove");
        refreshPage();
    }
    
 }

 // refresuje stranicu kako ne bi morali rucno i onda se odmah vidi da je korisnik ulogovan ili nije 
 function refreshPage()
 {
    location.reload();
 }

 // time clock

 let curentClockTime = document.getElementById('current-time');
 let curentDate = document.getElementById('current-date');

 let dateFromPC =new Date();
 
 let dateToDisplay =dateFromPC.toDateString();
 let month = dateFromPC.getMonth();
 let date =dateFromPC.getDate();
 let day =dateFromPC.getDay();
 curentDate.innerHTML = dateToDisplay + " >Mesec: " + month  + " datum: "+date + " dan: " +day ;

//  let separatorClass="";
//  if(dateFromPC.getSeconds() % 2 === 1) separatorClass="trans";

//  let separator ="<span class='" + separatorClass+ "'>:</span>";
 
 
  setInterval(() => {
       let dateFromPC =new Date();
       let hours =dateFromPC.getHours();  
       let minutes =dateFromPC.getMinutes();
       if (minutes <10) 
       {
        minutes ="0"+minutes;
       }
       let seconds =dateFromPC.getSeconds();
       if (seconds < 10)
       {
        seconds = "0"+seconds;
       }
       curentClockTime .innerHTML = hours +" : " + minutes + " : "  +seconds ;
    }, 5000);

 function updateTime(){

 let hours =dateFromPC.getHours();  
 let minutes =dateFromPC.getMinutes();
 let seconds =dateFromPC.getSeconds();
 curentClockTime .innerHTML = hours +" : " + minutes + " :" +seconds;
 }
 


// zadaci tj taskovi 


let firstTask =document.getElementById('firstTask');
let secondTask =document.getElementById('secondTask');
let thirdTask =document.getElementById('thirdTask');
let fourthTask =document.getElementById('fourthTask');
let formData =document.querySelector('form');
let confirmParagraf = document.getElementById('taskDescription');

let buttonTasks =document.getElementById('buttonTasks');
let removeButtonTasks =document.getElementById('removeButtonTasks');
let updateFirstTask =document.getElementById('updateFirstTask');
let updateSecondTask =document.getElementById('updateSecondTask');
let updateThirdTask =document.getElementById('updateThirdTask');
let updateFourthTask =document.getElementById('updateFourthTask');



function sendTasksToSessionStorage()
{
  sessionStorage.setItem('task1',firstTask.value);
  sessionStorage.setItem('task2',secondTask.value);
  sessionStorage.setItem('task3',thirdTask.value);
  sessionStorage.setItem('task4',fourthTask.value);

  activateUpdateTasksButtons();
  removeButtonTasks.disabled= false;
  buttonStart.disabled = false;
  confirmParagraf.innerHTML ="Podaci uspesno uneti";
  
}

function activateUpdateTasksButtons()
{
  updateFirstTask.disabled = false;
  updateSecondTask.disabled = false;
  updateThirdTask.disabled = false;
  updateFourthTask.disabled = false;
}

function deactivateUpdateTasksButtons()
{
  updateFirstTask.disabled = true;
  updateSecondTask.disabled = true;
  updateThirdTask.disabled = true;
  updateFourthTask.disabled = true;
}

function updateFirstTaskToSessionStorage()
{
    sessionStorage.setItem('task1',firstTask.value);
    confirmParagraf.innerHTML ="Prvi task azuriran";
}

function updateSecondTaskToSessionStorage()
{
    sessionStorage.setItem('task2',secondTask.value);
    confirmParagraf.innerHTML ="Drugi task azuriran";
}

function updateThirdTaskToSessionStorage()
{
    sessionStorage.setItem('task3',thirdTask.value);
    confirmParagraf.innerHTML ="Treci task azuriran";
}

function updateFourthTaskToSessionStorage()
{
    sessionStorage.setItem('task4',fourthTask.value);
    confirmParagraf.innerHTML ="Cetvrti task azuriran";
}
 

function removeTasksFromSessionStorage() 
{
     alert(`You are removing  current tasks
        ** You are removing 1: ${firstTask.value}  **   
        ** You are removing 2: ${secondTask.value}  **   
        ** You are removing 3: ${thirdTask.value}  **   
        ** You are removing 4: ${fourthTask.value}  **`);   
      
       
  sessionStorage.removeItem('task1');
  sessionStorage.removeItem('task2');
  sessionStorage.removeItem('task3');
  sessionStorage.removeItem('task4');
  removeButtonTasks.disabled= true;
  deactivateUpdateTasksButtons();

  confirmParagraf.innerHTML ="Taskovi su obrisani";
  clearTasksFields();
}

function clearTasksFields()
{
    firstTask.value="";
    secondTask.value="";
    thirdTask.value="";
    fourthTask.value="";
}

 // timeri i dugmici

 let buttonStart = document.getElementById('buttonStart');
 let buttonPause = document.getElementById('buttonPause');
 let buttonStop = document.getElementById('buttonStop');

 // user i pakovanje podataka 

 let spendTimeOnTasks = 0;
 let spendTimeOnTasksArray =[];

 let userOfPomodo =localStorage.getItem('name');
 console.log(userOfPomodo);

 let beginTimeForTasks="" ;

 let userFullResults = [userOfPomodo,beginTimeForTasks,spendTimeOnTasks];
 console.log(userFullResults);
 
function takeCurentTimeForTasks()
{
   let dateFromPC =new Date();
       let hours =dateFromPC.getHours();  
       let minutes =dateFromPC.getMinutes();
       if (minutes <10) 
       {
        minutes ="0"+minutes;
       }
       let seconds =dateFromPC.getSeconds();
       if (seconds < 10)
       {
        seconds = "0"+seconds;
       }
       beginTimeForTasks  = hours +" : " + minutes + " : "  +seconds ;
       userFullResults[1] = beginTimeForTasks;
}

 function startFocusBlocks()
 {
    setTimeout(() => {
       alert('Startujemo sa taskovima '); 
       updateFirstTaskProgressBar();
    }, 5000);
    buttonPause.disabled =false;
    buttonStop.disabled =false;
    buttonStart.disabled= true;

    buttonConfirmTasksDone.disabled = true;
    buttonClearTasks .disabled = true;   
    
    takeCurentTimeForTasks();
    console.log(beginTimeForTasks);
    
 }

let valueOfCompletedTask=0;

function pauseFocusBlocks()
{
   
}

function unpauseFocusBlocks()
{

}

function stopFocusBlocks()
{

}



let firstTaskProgressBar = document.getElementById('firstTaskProgressBar');
let firstTaskLabel =document.getElementById('firstTaskLabel');
let pauseFirstTaskProgressBar =document.getElementById('pauseFirstTaskProgressBar');
let pauseFirstTaskLabel =document.getElementById('pauseFirstTaskLabel');
let interval;


function updateFirstTaskProgressBar()
{
    let progressFirstTask = 0;
    let pauseProgressFirstTask = 0;
    let valueOfCompletedTask = 0
    let valueOfPauseBreak =0;
    let taskCompleted = false;
    let breakInterval;

    buttonPause.addEventListener('click',function() {
        
        if (progressFirstTask <  100)
        {    
        taskCompleted = false;
        valueOfCompletedTask = progressFirstTask; 
            
        clearInterval(interval);
        let breakInterval = setInterval(function() {       
        if(progressFirstTask < 100)
        {     
        pauseProgressFirstTask ++;         
        pauseFirstTaskProgressBar.innerText = pauseProgressFirstTask+ "%" ;
        pauseFirstTaskProgressBar.style.width = pauseProgressFirstTask +"%" ; 
        buttonPause.textContent = "Nastavi sa radom";        
        } 
        else 
        {
          firstTaskProgressBar.textContent="First task : ' " +sessionStorage.getItem('task1')+ " ' was successfully completed ";
          updateFirstBreakTaskProgressBar();
        }       
        }, 1000);
        
    }
    }) ;

    buttonPause.addEventListener('click',function() { 

           buttonPause.textContent = "Pauziraj";
           valueOfPauseBreak = pauseProgressFirstTask;
           alert(valueOfPauseBreak +" "+ progressFirstTask);
           
           clearInterval(breakInterval);
           

           progressFirstTask +=20;
           firstTaskProgressBar.style.width = progressFirstTask+"%";
           firstTaskLabel.innerText = progressFirstTask +"%";       
         } );



    

    let interval = setInterval(function() {
        if (progressFirstTask >= 100) {
                    
        taskCompleted = true;   
        firstTaskProgressBar.classList.add('bg-success');
        firstTaskProgressBar.textContent="First task : ' " +sessionStorage.getItem('task1')+ " ' was successfully completed ";
        clearInterval(interval);
        updateFirstBreakTaskProgressBar();
        spendTimeOnTasks += taskTime+0;
        userFullResults[2] += taskTime+0;
        spendTimeOnTasksArray.push(taskTime);
     

        } else {
       progressFirstTask +=20;
       firstTaskProgressBar.style.width = progressFirstTask+"%";
       firstTaskLabel.innerText = progressFirstTask +"%";           
        }
       
    },5000);
}
let firstMiniPauseProgressBar =document.getElementById('firstMiniPauseProgressBar');

function updateFirstBreakTaskProgressBar()
{
    let progressFirstBreakTask = 0;
    let interval = setInterval(function(){
        if(progressFirstBreakTask >=100) {
        firstMiniPauseProgressBar.style.backgroundColor="#17a2b8"; 
        firstMiniPauseProgressBar.textContent="First mini break completed ";       
        clearInterval(interval);
        updateSecondTaskProgressBar();
        spendTimeOnTasks += smallBreak+0;
        userFullResults[2] += smallBreak+0;
        spendTimeOnTasksArray.push(smallBreak);


        }else {
       progressFirstBreakTask +=20;
       firstMiniPauseProgressBar.style.width = progressFirstBreakTask+"%";            
       firstMiniPauseProgressBar.textContent=progressFirstBreakTask+ "%";             
        }
       
    },1000);
}

let secondTaskProgressBar = document.getElementById('secondTaskProgressBar');

function updateSecondTaskProgressBar()
{
    let progressSecondTask = 0;
    let interval = setInterval(function(){
        if(progressSecondTask >=100) {
        secondTaskProgressBar.classList.add('bg-success');        
        secondTaskProgressBar.textContent="Second task : ' " +sessionStorage.getItem('task2')+ " ' was successfully completed ";
        updateSecondBreakTaskProgressBar();       
        clearInterval(interval);
        spendTimeOnTasks += taskTime+0;
        userFullResults[2] += taskTime+0;
        spendTimeOnTasksArray.push(taskTime);

        }else {
       progressSecondTask +=20;
       secondTaskProgressBar.style.width = progressSecondTask+"%";           
       secondTaskProgressBar.textContent=progressSecondTask+ "%";             
        }
       
    },5000);
}


let secondMiniPauseProgressBar =document.getElementById('secondMiniPauseProgressBar');

function updateSecondBreakTaskProgressBar()
{
    let progressSecondBreakTask = 0;
    let interval = setInterval(function(){
        if(progressSecondBreakTask >=100) {
        secondMiniPauseProgressBar.style.backgroundColor="#17a2b8";
        secondMiniPauseProgressBar.textContent="Second mini break completed ";     
        updateThirdTaskProgressBar();
        clearInterval(interval);
        spendTimeOnTasks += smallBreak+0;
        userFullResults[2] += smallBreak+0;
        spendTimeOnTasksArray.push(smallBreak);

        }else {
       progressSecondBreakTask +=20;
       secondMiniPauseProgressBar.style.width = progressSecondBreakTask+"%";           
       secondMiniPauseProgressBar.textContent = progressSecondBreakTask+ "%";             
       }
       
    },1000);
}


let thirdTaskProgressBar = document.getElementById('thirdTaskProgressBar');

function updateThirdTaskProgressBar()
{
    let progressThirdTask = 0;
    let interval = setInterval(function(){
        if(progressThirdTask >=100) {
        thirdTaskProgressBar.classList.add('bg-success');        
        thirdTaskProgressBar.textContent="Third task : ' " + sessionStorage.getItem('task3') + " ' was successfully completed ";
        updateThirdBreakTaskProgressBar();
        clearInterval(interval);
        spendTimeOnTasks += taskTime+0;
        userFullResults[2] += taskTime+0;
        spendTimeOnTasksArray.push(taskTime);

        }else {
       progressThirdTask +=20;
       thirdTaskProgressBar.style.width = progressThirdTask+"%";            
       thirdTaskProgressBar.textContent=progressThirdTask+ "%";             
        }
       
    },5000);
}



let thirdMiniPauseProgressBar =document.getElementById('thirdMiniPauseProgressBar');

function updateThirdBreakTaskProgressBar()
{
    let progressThirdBreakTask = 0;
    let intervalThirdBreakTask = setInterval(function(){
        if(progressThirdBreakTask >=100) {
        thirdMiniPauseProgressBar.style.backgroundColor="#17a2b8";
        thirdMiniPauseProgressBar.textContent="Third mini break completed ";    
        updateFourthTaskProgressBar();
         clearInterval(intervalThirdBreakTask);
         spendTimeOnTasks += smallBreak+0;
         userFullResults[2] += smallBreak+0;
         spendTimeOnTasksArray.push(smallBreak);

        }else {
       progressThirdBreakTask +=20;
       thirdMiniPauseProgressBar.style.width = progressThirdBreakTask+"%";       
       thirdMiniPauseProgressBar.textContent=progressThirdBreakTask+ "%";            
        }
       
    },1000);
}


let fourthTaskProgressBar = document.getElementById('fourthTaskProgressBar');

function updateFourthTaskProgressBar()
{
    let progressFourthTask = 0;
    let intervalFourthTask = setInterval(function(){
        if(progressFourthTask >=100) {
        fourthTaskProgressBar.classList.add('bg-success');        
        fourthTaskProgressBar.textContent="Fourth task : ' " +sessionStorage.getItem('task4') + " ' was successfully completed ";
        updateFourthBreakTaskProgressBar();
        clearInterval(intervalFourthTask);
        spendTimeOnTasks += taskTime+0;
        userFullResults[2] += taskTime+0;
        spendTimeOnTasksArray.push(taskTime);

        }else {
       progressFourthTask +=20;
       fourthTaskProgressBar.style.width = progressFourthTask+"%";           
       fourthTaskProgressBar.textContent=progressFourthTask+ "%";
        }
       
    },5000);
}


let fourthMiniPauseProgressBar = document.getElementById('fourthMiniPauseProgressBar');

function updateFourthBreakTaskProgressBar()
{
    let progressFourthBreakTask = 0;
    let intervalFourthBreakTask = setInterval(function(){
        if(progressFourthBreakTask >=100) {
        fourthMiniPauseProgressBar.style.backgroundColor="#17a2b8";
        fourthMiniPauseProgressBar.textContent="Fourth mini break completed ";  
        updateFifthBreakTaskProgressBar();
        clearInterval(intervalFourthBreakTask);
        spendTimeOnTasks += smallBreak+0;
        userFullResults[2] += smallBreak+0;
        spendTimeOnTasksArray.push(smallBreak);

        }else {
       progressFourthBreakTask +=20;
       fourthMiniPauseProgressBar.style.width = progressFourthBreakTask+"%";       
       fourthMiniPauseProgressBar.textContent=progressFourthBreakTask+ "%";
        }
       
    },1000);
}


let fifthTaskBreakProgressBar = document.getElementById('fifthTaskBreakProgressBar');

let buttonConfirmTasksDone =document.getElementById('buttonConfirmTasksDone');
let buttonClearTasks =document.getElementById('buttonClearTasks');

function updateFifthBreakTaskProgressBar()
{
   
    let progressFifthBreakTask = 0;
    let intervalFifthBigBreak = setInterval(function(){
        if(progressFifthBreakTask >=100) {
        fifthTaskBreakProgressBar.style.backgroundColor="#17a2b8";
        fifthTaskBreakProgressBar.textContent="Big break completed "; 

        buttonConfirmTasksDone.disabled = false;
        buttonClearTasks .disabled = false;       
        clearInterval(intervalFifthBigBreak);
        spendTimeOnTasks += bigBreak+0;
        userFullResults[2] += bigBreak+0;
        spendTimeOnTasksArray.push(bigBreak);

        }else {
       progressFifthBreakTask +=20;
       fifthTaskBreakProgressBar.style.width = progressFifthBreakTask+"%";       
       fifthTaskBreakProgressBar.textContent=progressFifthBreakTask+ "%";
        }
       
    },3000);
}

// potvrdi da su zadaci gotovi 
function confirmTasksCompleted()
{
    console.log(userFullResults);
    console.log(spendTimeOnTasksArray);

  if (spendTimeOnTasks == (4*(taskTime+ smallBreak) +bigBreak))
  {
    perfectScore();
  }
  else if (spendTimeOnTasks >= (4*(taskTime+ smallBreak) +bigBreak))
  {
       semiPerfectScoreKeepOn();
  }
  else 
  {
     iWishIDoneIt(); 
  }
}

// ocisti tj vrati sva polja na nulu 
function clearTasksAndBreaksBlocks()
{
      // first 
       firstTaskProgressBar.style.width = 0+"%";            
       firstTaskProgressBar.textContent=""; 

       firstMiniPauseProgressBar.style.width = 0+"%";             
       firstMiniPauseProgressBar.textContent=""; 

       // second 
       secondTaskProgressBar.style.width = 100+"%";            
       secondTaskProgressBar.textContent="";  

       secondMiniPauseProgressBar.style.width = 100+"%";            
       secondMiniPauseProgressBar.textContent = ""; 

       // third 
       thirdTaskProgressBar.style.width = 100+"%";
       thirdTaskProgressBar.style.backgroundColor="#E9ECEF";      
       thirdTaskProgressBar.textContent= "";  

       thirdMiniPauseProgressBar.style.width = 100+"%";
       thirdMiniPauseProgressBar.style.backgroundColor="#E9ECEF";
       thirdMiniPauseProgressBar.textContent= "";  

       //fourth 
       fourthTaskProgressBar.style.width = 100+"%";
       fourthTaskProgressBar.style.backgroundColor="#E9ECEF";      
       fourthTaskProgressBar.textContent="";

       fourthMiniPauseProgressBar.style.width = 100+"%";
       fourthMiniPauseProgressBar.style.backgroundColor="#E9ECEF"; 
       fourthMiniPauseProgressBar.textContent="";

       // fifth
       fifthTaskBreakProgressBar.style.width =100+ "%";
       fifthTaskBreakProgressBar.style.backgroundColor="#E9ECEF"; 
       fifthTaskBreakProgressBar.textContent="";     
       
       buttonConfirmTasksDone.disabled = true;
       buttonClearTasks .disabled = true;   
}


function stopProgress()
{
    clearInterval(progress);
}

// savrseni score kad smo pustili dugme start i zavrsilo je do kraja bez prekida 
function perfectScore()
{
    alert("Congrats  " + localStorage.getItem('name') + " for successfully completed tasks in time.")
}

// polu score kad smo pustili dugme start ali smo i rucno pauziralo ali ipak  zavrsili dakle start pa pauza pa nastavak ponovo do kraja
function semiPerfectScoreKeepOn()
{
    alert("Congrats  " + localStorage.getItem('name') + " for successfully completed tasks in time. It needed more time, but it was worth it. ")
}

// nikakav score, zapoceli smo i odustali dakle start pa stop 
function iWishIDoneIt()
{
    alert("More luck   " + localStorage.getItem('name') + " my friend.")
}
 
// setting page 


