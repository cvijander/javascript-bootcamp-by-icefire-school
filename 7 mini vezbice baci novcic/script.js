let head = document.getElementById('head');
let tail =document.getElementById('tail');

let result =document.getElementById('result');


let coinByComp = Math.random() <0.5 ? 'head': 'tail';


console.log(coinByComp);

let message ="";


function baciNovcic(novcic){
    
    console.log(novcic);

    if(coinByComp == novcic)
    {
      message = " Pogodili smo  "      
    }
    else if (coinByComp !=novcic)
    {
        message ="Nismo pogodili "
    }
    
    displayMessage (message);

}

function displayMessage (message)
{

  result.textContent =`Bacili ste:  ${message}`; 
}

// function  heads()
// {
//     if(coinByComp == head)
//     {
//       message = " Pogodili smo  "      
//     }
//     else 
//     {
//         message ="Nismo pogodili "
//     }
//     displayMessage (message);
// }

// function tails()
// {
//     if(coinByComp =='tail')
//     {
//      message = " Pogodili smo  " 
    
//     }
//     else 
//     {
//         message ="Nismo pogodili "
//     }
//     displayMessage (message);
  
// }
