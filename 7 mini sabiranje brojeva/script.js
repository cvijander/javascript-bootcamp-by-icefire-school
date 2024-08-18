let prviBroj =document.getElementById('prviBroj').value;
let drugiBroj = document.getElementById('drugiBroj').value;
let resultat =document.getElementById('result').value;

let pomessage = document.getElementById('message');

let zbir =parseInt (parseInt( prviBroj) +parseInt( drugiBroj));
console.log(zbir);
console.log(prviBroj);
console.log(drugiBroj);
console.log(resultat);

let operacija="";

function  saberi()
{
   prviBroj =document.getElementById('prviBroj').value;
   drugiBroj = document.getElementById('drugiBroj').value;
   resultat =document.getElementById('result').value;

  let op= parseInt(parseInt( prviBroj) +parseInt( drugiBroj)) !=parseInt(resultat)? 'nije tacan zbir ': 'tacan je zbir' ;

  console.log(op);

   displayMessage(op);
}
function displayMessage(op)
{
   pomessage.textContent =op;
}

//   if(parseInt(prviBroj + drugiBroj) == parseInt(resultat)){
//     console.log(prviBroj);
//     console.log(drugiBroj);
//     console.log(resultat);
  

//      operacija="tacno";
//   }
//   else 
//   {
//     operacija="nije tacno";
//   }
 

