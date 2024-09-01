let button =document.getElementById('button');
let result = document.getElementById('result');



function submit(){

    let messageText;
    let playerNumber = randomNumber();
    let computerNumber =randomNumber();
    console.log(playerNumber);
    console.log(computerNumber);

    if(playerNumber % 2 ==0  && computerNumber %2 ==0){
        if(playerNumber > computerNumber)
        {
            messageText=`Korisnik je dobio veci broj ${playerNumber} od kompjutera ${computerNumber}`;
        }
        else if (playerNumber < computerNumber)
        {
            messageText=`Korisnik je dobio manji broj ${playerNumber} od kompjutera ${computerNumber}`;
        }
        else 
        {
            messageText=`Korisnik je dobio isti broj ${playerNumber}  kao kompjutera ${computerNumber}`;
        }
    }
    else 
    {
        messageText=`Korisnik ili kompjuter su dobili neparan broj  ${playerNumber} ili  od kompjutera ${computerNumber}`;
    }
    displayMessage(messageText);
}


function randomNumber(){
   let resultat = parseInt(Math.random()*100+1)
   return resultat;
}

function displayMessage(messageText){
    result.textContent = messageText;
}