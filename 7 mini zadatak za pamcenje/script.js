let sequence =document.getElementById('sequence');
let buttonClick =document.getElementById('buttonClick');
let result =document.getElementById('result');

let resultMessage='';
let sequenceWord = Math.random().toString(36).substring(2,6);
console.log(Math.random().toString(36));
sequence.textContent = `Remember this sequnce:  ${sequenceWord}`;

setTimeout(() => {
    sequence.textContent = `Remember this sequnce:  `;
}, 3000);


function checkSequence() {
let userSequence =document.getElementById('userSequence').value;

if(userSequence == sequenceWord)
{
    resultMessage = `Super pogodili ste rec je bila:  ${userSequence}`;
} 
else 
    {
      resultMessage = `Niste pogodili, Vase rec je : ${userSequence} , a to nije trazena rec:  ${sequenceWord}`;
    }

    displayMessage();
}

function displayMessage(){
   result.textContent = resultMessage;
}