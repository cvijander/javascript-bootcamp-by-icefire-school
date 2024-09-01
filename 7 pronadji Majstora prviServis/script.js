let container = document.getElementById('container');
let username ='';
let numberOfImages = 1;
let numberOfUljez = 2;
let buttonStart = document.getElementById('buttonStart');
let points = 0;
let result = document.getElementById('result');
let timeResult = document.getElementById('timeResult');
let labelForUserName = document.getElementById('labelForUserName');
let labelForNumberOfImages = document.getElementById('labelForNumberOfImages');
let labelForNumberOfImagesUljez = document.getElementById('labelForNumberOfImagesUljez');
let canWeStartTheGame = false;
let userNameEnteredOk = false;
let userNumberOfImages = false; 
let userNumberOfUljez = false;

let imageUrl = 'imagesPrviServis';

let images = [ imageUrl+'/bane.png',
               imageUrl+'/mikica.png',
               imageUrl+'/hranislav.png',  
               imageUrl+'/bosiljko.png',  
               imageUrl+'/lazzi.png',  
               imageUrl+'/milos.png',  
               imageUrl+'/otac.png', 
                 
];

let uljez = imageUrl + '/uljez.png';

let mikicaPoints = 15;
let hranislavPoints = 20;
let banePoints = 10;
let bosiljkoPoints = 8;
let lazziPoints = 7;
let milosPoints = 6;
let otacPoints = 5;


let timerInterval;
let elapsedTime = 0;
let fullData = [username, points, elapsedTime];
console.log(fullData);


// proveravamo da li smo uneli username i da je duze od 2 karaktera 

function checkIfUserNameIsEntered(username) {
    console.log(username)
   if ((username === "" ) || username.length < 3)
   {
     labelForUserName.textContent = "Molimo unesite ime duze od 3 karaktera";
     labelForUserName.style.color = "red";
     labelForUserName.style.fontSize = "bolder";
     userNameEnteredOk = false;       
   }
   else 
   {
     labelForUserName.textContent = "Unesite ime : ";
     labelForUserName.style.color = "white";
     userNameEnteredOk = true;
   }
   return userNameEnteredOk;
}

// proveramo da li smo uneli broj slika (mada smo definisali da je pocetna vrednost 1 - ali ako necemo da imamo pocetnu onda ce da radi )
function checkIfNumberOfImagesIsEntered(numberOfImages) {
    console.log(numberOfImages)
   if (numberOfImages === "" ) 
   {
     labelForNumberOfImages.textContent = "Molimo unesite 1 ili vise od 1 slike - default je 1";
     labelForNumberOfImages.style.color = "red";      
     userNumberOfImages = false;
   }
   else 
   {
     labelForNumberOfImages.textContent = "Broj slika : ";
     labelForNumberOfImages.style.color = "white";     
     userNumberOfImages = true;
   }
   return userNumberOfImages;
}

// proveravamo da li smo uneli broj slika uljeza (mada je default 2 tako da tek kad ukinemo to ce dodatno da radi )
function checkIfNumberOfUljezImagesIsEntered(numberOfUljez) {
    console.log(numberOfUljez)
   if (numberOfUljez === "" )
   {
     labelForNumberOfImagesUljez.textContent = "Molimo unesite 2 ili vise slika - default je 2";
     labelForNumberOfImagesUljez.style.color = "red";
     userNumberOfUljez = false;     
   }
   else 
   {
     labelForNumberOfImagesUljez.textContent = "Broj slika uljeza (default je 2) : ";
     labelForNumberOfImagesUljez.style.color = "white";
     userNumberOfUljez = true;
   }
   return userNumberOfUljez;
}

// ako su sva tri uslova true, moze da se pocne sa igricom 

function checkUserInputs(){
    let usernameTest = checkIfUserNameIsEntered(username);
    console.log(usernameTest);
    let numberImagesTest = checkIfNumberOfImagesIsEntered(numberOfImages);
    console.log(numberImagesTest);
    let numberImagesUljezTest = checkIfNumberOfUljezImagesIsEntered(numberOfUljez);
    console.log(numberImagesUljezTest);

    if((usernameTest && numberImagesTest && numberImagesUljezTest) === true )
    {
       canWeStartTheGame = true;
       console.log(canWeStartTheGame);
    }
    else 
    {
        canWeStartTheGame = false;
    }
    return canWeStartTheGame;

}

 // pocetak igrice   - uzimamo vrednost koju je korisnik uneo za username i za slike i za uljez 

function startGame()  {
  
  container.innerHTML='' ; 
  username = document.getElementById('userName').value;
  numberOfImages = document.getElementById('numberOfImages').value;  
  if(numberOfImages < 1)
  {
    numberOfImages = 1;
  }
  numberOfUljez = document.getElementById('numberOfUljez').value; 
  if(numberOfUljez < 2 )
  {
    numberOfUljez = 2;
  }

  if(checkUserInputs() === true)
  {
    points = 0;  
    displayRandomImages(numberOfImages, images);  
    displayUljezImages(numberOfUljez, uljez);
    displayResults(points);
    console.log(points);
    startStopwatch();
    console.log(startStopwatch());  
  } 
  
}


// uzeto sa stoperice - pravimo funkciju da se vreme updatuje i da se lepo prikaze tj preko minuta ,sekundi i sati i imamo move images za setanje slika 

function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime /3600);
    console.log('hours ' +hours);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    console.log('minutes ' + minutes);
    let seconds = elapsedTime % 60;
    console.log('seconds ' + seconds);
    timerDisplay(hours,minutes,seconds);   
    moveImages();
}

// lepsi prikaz tajmera 

function timerDisplay(hours,minutes,seconds)
{
   timeResult.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')} `;
}

// stopitamo stopericu 

function startStopwatch(){
breakInterval(timerInterval);
timerInterval = setInterval(updateTime,1000);
}

// stopitanje tajmera 

function stopStopwatch(){
breakInterval(timerInterval);
}

// drugacije napisana fuinckija clerarinterval 

function breakInterval(timerInterval){
clearInterval(timerInterval); 
}

// pomeranje slika na svakih sekund slike dobijaju random poziciju  

function moveImages() {
    let images =container.querySelectorAll('img');
    images.forEach(img => {
        let {randomLeftPosition, randomTopPosition} = calculateRandomPosition();
        img.style.left = `${randomLeftPosition}px`;
        img.style.top = `${randomTopPosition}px`;
     })
}
// function resetStopwatch(){
// breakInterval(timerInterval);
// elapsedTime = 0;
// timer.textContent = '00:00:00';
// }


// function startTimer() {
//     timerInterval = setInterval((){
        
/*   let timer =document.getElementById('timer');
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
// }
*/

// pravimo random pozicije u odnosu na velicinu kontenjera i smanjujemo za 150 za velicinu slike da ima vise mesta 

function calculateRandomPosition(){

    const containerWidth = 1400;
    const containerHeight = 800;

    let horizontalLine = containerWidth - 150;
    let verticalLine = containerHeight - 150;

    let randomLeftPosition = parseInt(Math.random() * horizontalLine );
    let randomTopPosition = parseInt(Math.random() * verticalLine );

    return  {  
        randomLeftPosition, 
        randomTopPosition 
    };   
}

// racunamo random slike tj velicine da budu od 50 do 125 

function calculateRandomImageSize(){

    let minImageSize = 50;
    let maxImageSize = 125;

    let randomSizeImage = parseInt(Math.random() * (maxImageSize - minImageSize)+1 ) +minImageSize; 
    return randomSizeImage;

}

// za prikaz slika, ali posto nas niz je ogranicen slikama koje imamo, pa ako imamo vise broja nego slika moramo da opet prodjemo kroz taj niz

function displayRandomImages(numberOfImages, images)
{
   console.log( " niz slika " + images);
   console.log("uneto slika " + numberOfImages);

   
    for(let i = 0; i < numberOfImages ; i++)
    {
        let imageSrc ='';

        if(numberOfImages <= images.length)
        {
           imageSrc = images[i];
        }
        else 
        {
            imageSrc =images[i % images.length];
        }
        

        let img = document.createElement('img');
        img.src = imageSrc;

        let {randomLeftPosition, randomTopPosition} = calculateRandomPosition();   
        let randomSize = calculateRandomImageSize();
     
        img.style.left = `${randomLeftPosition}px`;
        img.style.top  = `${randomTopPosition}px`;
        img.style.width  = `${randomSize}px`;
        img.style.height  = `${randomSize}px`;

        img.addEventListener('click',function(){
            handleImageClicks(img);
        })
   
        container.appendChild(img);
    }
}

// pravimo slike uljaz , tj broj i random pozicija 

function displayUljezImages(numberOfUljez, uljez)
{
        
      console.log("Broj slika uljeza " + numberOfUljez);
    for(let i = 0; i < numberOfUljez ; i++)
    {
        
        let img = document.createElement('img');
        img.src = uljez;

        let {randomLeftPosition, randomTopPosition} = calculateRandomPosition();   
        let randomSize = calculateRandomImageSize();
     
        img.style.left = `${randomLeftPosition}px`;
        img.style.top  = `${randomTopPosition}px`;
        img.style.width  = `${randomSize}px`;
        img.style.height  = `${randomSize}px`;

        img.addEventListener('click',function(){
            handleImageClicks(img);
        })
   
        container.appendChild(img);
    }
}

// cupamo vrednosti od slike, klikom na sliku vidim kako se zove i dajem mu poene ako je glumac ili ako je uljez prekidamo 
    
function handleImageClicks(img) {

    let titleImage = img.src.split('/').pop();

    if(titleImage === 'uljez.png')
    {
        stopUljezGame();
    } 
    else 
    {

        switch(titleImage)
        {
            case 'mikica.png':
                points += mikicaPoints;
                break;

            case 'bane.png':
                points += banePoints;
                break;

            case 'bosiljko.png':
                points += bosiljkoPoints;
                break;

            case 'hranislav.png':
                points += hranislavPoints;
                break;

            case 'lazzi.png':
                points += lazziPoints;
                break;

            case 'milos.png':
                points += milosPoints;
                break;

            case 'otac.png':
                points += otacPoints;
                break;

        }
        displayResults(points);
        container.removeChild(img); 
        numberOfImages--;  
        console.log("trenutno slika " + numberOfImages)
        checkGameOver();
    }
   
}

// stopiramo igricu i resetujemo vrenosti 

function stopGame() {
    
    container.innerHTML = '';
    displayResults(points);    
    stopStopwatch();   

    if(!isUljezClicked) 
    {
    fullData[0] = username;     
    fullData[1] = points;
    fullData[2] = elapsedTime;
    console.log("Full data " + fullData);
    saveDataToLocalStorage();
    }
    isUljezClicked = false ;   
    
    elapsedTime = 0;
    timer.textContent = '00:00:00';
    document.getElementById('userName').value = ''; 
    

}

// poruka kad se klikne na uljeza 

function stopUljezGame() {
 
    alert("Kliknuli ste na uljeza ");     
    document.getElementById('userName').value = '';  
    isUljezClicked = true; 
    stopGame();       

}
// proveramo da li je igra gotova 

function checkGameOver() {
    console.log("Broj slika koje su sada ovde " + numberOfImages)
    if (numberOfImages == 0)
    {
        alert("Kralj igre, pronasli ste sve osim uljeza.");        
        stopGame();        
    }
    
}
// prikaz resultata 

function displayResults(points){

    result.innerText = `Trenutno poena ${points}`;
}

function saveDataToLocalStorage() {
    let completedGame = JSON.parse(localStorage.getItem('completedGame')) || []; 
    completedGame.push(fullData);   
    console.log(completedGame);
    
    localStorage.setItem('completedGame',JSON.stringify(completedGame));
    
}

function showResults() {


let tableGameScore = document.getElementById('tableGameScore');
let completedGame = localStorage.getItem('completedGame');
let completedGameJSONParsed =JSON.parse(completedGame);


    completedGameJSONParsed.forEach(function(ele) 
    {
    console.log(ele);  
    // tableScore.textContent =ele;

    console.log("Da vidimo te rezultate")
    console.log(completedGameJSONParsed);

    displayTableData(completedGameJSONParsed);
  });
    
        
}





function displayTableData(passedData)
{
    let tbodyGameScore = document.getElementById('tbodyGameScore');
    tbodyGameScore.textContent='';

    passedData.forEach(rowData =>{
        let row= document.createElement('tr');

        rowData.forEach(cellData => {
            let cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tbodyGameScore.appendChild(row);
    } );
}
