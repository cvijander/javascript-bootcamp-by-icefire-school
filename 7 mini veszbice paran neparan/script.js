let paran =document.getElementById('paran');
let neparan =document.getElementById('neparan');

let result =document.getElementById('result');

let randomNumber = parseInt( Math.random()*100+1);

console.log(randomNumber);

let resultatRacunara = randomNumber % 2==0 ? 'paran':'neparan';
console.log(resultatRacunara);

let message="";

function odaberi(option){
 
    console.log(option);

    if(resultatRacunara == option)
    {
     message =` Pogodili ste broj je ${option}` ;
    }
    else 
    {
        message =`Niste pogodili broj je ${resultatRacunara}`;
    }
    displayMessage(message);
}

function displayMessage(message){
  result.textContent = message;
}

// if(randomNumber % 2==0 )
// {
//   console.log("paran")
// }
// else 
// {
//     console.log('neparan')
// }
