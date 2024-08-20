let currentNumberText = document.getElementById('currentNumber');
let higherButton =document.getElementById('higherButton');
let lowerButton =document.getElementById('lowerButton');
let result =document.getElementById('result');

let currentNumber = giveMeResult();
console.log(currentNumber); 
displayCurrentNumber(currentNumber);


function guess(value){
    let nextNumber = giveMeResult();
    console.log(nextNumber);
    let resultMessage = testing(value, nextNumber,currentNumber);

    // if((value ==='higher' && nextNumber > currentNumber ) ||
    //   (value ==='lower' && nextNumber < currentNumber )) {
   
    //     resultMessage = `Correct The next number is ${nextNumber} and the current is  ${currentNumber}`;
    //   }
    //   else 
    //   {
    //     resultMessage =`Incorrect  The next number ${nextNumber}  and the current is ${currentNumber}`;
    //   }

      console.log('curent ' +currentNumber);
      console.log('next' + nextNumber);

      currentNumber= resetState(currentNumber, nextNumber);
    //   currentNumber =nextNumber;

      console.log('after curent ' +currentNumber);
      console.log('after next' + nextNumber);

     displayCurrentNumber(currentNumber);
     displayResult(resultMessage);

}

function testing(value, nextNumber ,currentNumber ){

if((value ==='higher' && nextNumber > currentNumber ) ||
      (value ==='lower' && nextNumber < currentNumber )) {
   
        messageToUser = `Correct The next number is ${nextNumber} and the current is  ${currentNumber}`;
      }
      else 
      {
        messageToUser =`Incorrect  The next number ${nextNumber}  and the current is ${currentNumber}`;
      }
      return messageToUser;
}


function displayCurrentNumber(currentNumber){
  currentNumberText.innerText = " " +currentNumber;
}

function displayResult(resultMessage){
 result.textContent = resultMessage;
}

function giveMeResult()
{
    let resultNumber = parseInt(Math.random()*100+1);
    return resultNumber;
}

function resetState(currentNumber, nextNumber){
currentNumber = nextNumber;
return currentNumber;
}