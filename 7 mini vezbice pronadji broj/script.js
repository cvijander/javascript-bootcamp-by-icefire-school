let numberToGuess = parseInt((Math.random()*100)+1);
console.log(numberToGuess);



let numberEntry = document.getElementById('numberEntry');
let buttonClick =document.getElementById('buttonClick');


console.log(numberEntry);
console.log(buttonClick);

console.log(numberToGuess);

 let number=null;

 console.log(number);

function match () {


while(number !== numberToGuess) 

   
{
     number =parseInt( numberEntry.value); 

    console.log(typeof number)
  
  if (number > numberToGuess)
  {
     alert('Nas broj je veci od trazenog ' + number);
  }
  else if (number < numberToGuess) 
  {
    alert('Nas broj je manji od trazenog ' +number)
  }
   else {
    alert ("Tacno je broj je bio " + number);
   }
  
 }
}

// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guess = null;

// while (guess !== numberToGuess) {
//   guess = parseInt(prompt("Guess a number between 1 and 100:"));
//   if (guess > numberToGuess) {
//     alert("Too high!");
//   } else if (guess < numberToGuess) {
//     alert("Too low!");
//   } else {
//     alert("Correct! The number was " + numberToGuess);
//   }
// }
