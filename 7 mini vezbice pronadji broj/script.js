let numberEntry =document.getElementById('numberEntry').value;
let buttonClick =document.getElementById('buttonClick');
let display = document.getElementById('display');

let numberOfGuesses = 0;

let randomNumber = parseInt (Math.random()*100+1);
console.log(randomNumber);

function match()
{
  numberEntry =document.getElementById('numberEntry').value;
  console.log(numberEntry);
 
 numberOfGuesses++; 

 let result ='';
 if(randomNumber == numberEntry)
 {
   result =`Pogodili ste , broj je :  ${numberEntry} i trebalo Vam je samo  ${numberOfGuesses}. pokusaja `;
 }
 else if (randomNumber > numberEntry )
 {
  result =`Kompjuteska vrednost je veca  od ${numberEntry} `;
 }
 else if (randomNumber < numberEntry )
 {
  result =`Kompjuterska vrednost je manja od ${numberEntry} `;
 }
 
display.textContent = result;

}