let kamen = document.getElementById('kamen');
let makaze = document.getElementById('makaze');
let list =document.getElementById('list');

let kompOption = ['kamen','list', 'makaze'];

let randomChoice =parseInt( Math.random()*kompOption.length);

let kompRandomChoice = kompOption[randomChoice];

let result =document.getElementById('result');


console.log(randomChoice);
console.log(kompRandomChoice);

// let userChoise ='';
let resultat ='';

function kliknuliSmo(userChoise){

   if(userChoise==kompRandomChoice)
   {
    resultat ='Isti su';
   }
   else if (( userChoise=='kamen' && kompRandomChoice =='makaze') ||
            ( userChoise=='list' && kompRandomChoice =='kamen') ||
            (userChoise=='makaze' && kompRandomChoice =='list'))
   {
        resultat=`Korisnik je pobedio odabrao je ${userChoise} dok je kompjuter odabrao ${kompRandomChoice}`;
   }
  else 
   {
        resultat=`Kompjuter je jaci, odabrao je ${kompRandomChoice} dok ste vi odabrali ${userChoise}`;
   }
   displayMessage ();  

}


function displayMessage ()
{
   result.innerHTML =`Pobednik je :  ${resultat}`;
   
}


//   else if (userChoise=='makaze' && kompRandomChoice == 'kamen')
//   {
//     resultat =`Kompjuter je jaci, odabrao je  ${kompRandomChoice} dok ste vi odabrali ${userChoise}`;
//   }
//   else if( userChoise=='makaze' && kompRandomChoice =='list')
//    {
//      resultat =`Korisnik je pobedio odabrao je  ${userChoise} a kompjuter je odabrao ${kompRandomChoice}`;
//    } 
//    else if (userChoise=='list' && kompRandomChoice == 'makaze')
//   {
//     resultat=`Kompjuter je jaci, odabrao je  ${kompRandomChoice} dok ste vi odabraili ${userChoise}`;
//   }
//   else if( userChoise=='list' && kompRandomChoice =='kamen')
//    {     
//      resultat=`Korisnik je pobedio odabrao je  ${userChoise} dok je kompjuter odabrao ${kompRandomChoice}`;
//    } 
//    else if (userChoise=='kamen' && kompRandomChoice == 'list')
//   {    
//      resultat=`Kompjuter je jaci, odabrao je ${kompRandomChoice} dok ste vi odabrali ${userChoise}`;
//   }
//   else if( userChoise=='kamen' && kompRandomChoice =='makaze')
//    {     
//       resultat=`Korisnik je pobedio odabrao je ${userChoise} dok je kompjuter odabrao ${kompRandomChoice}`;
//    } 

  

 

// function kamenKliknut()
// {
//   userChoise = 'kamen';
  
   
//   if(userChoise==kompRandomChoice)
//   {
//     resultat='Isti su';
//   }
//   else if (userChoise=='kamen' && kompRandomChoice == 'list')
//   {
    
//      resultat=`Kompjuter je jaci, odabrao je ${kompRandomChoice} dok ste vi odabrali ${userChoise}`;
//   }
//   else if( userChoise=='kamen' && kompRandomChoice =='makaze')
//    {
     
//       resultat=`Korisnik je pobedio odabrao je ${userChoise} dok je kompjuter odabrao ${kompRandomChoice}`;
//    } 
//    displayMessage ();
   
// }

// function listKliknut() 
// {
//     userChoise='list';

//     if(userChoise==kompRandomChoice)
//   {    
//     resultat ='Isti su';
//   }
//   else if (userChoise=='list' && kompRandomChoice == 'makaze')
//   {
    
//     resultat=`Kompjuter je jaci, odabrao je  ${kompRandomChoice} dok ste vi odabraili ${userChoise}`;
//   }
//   else if( userChoise=='list' && kompRandomChoice =='kamen')
//    {
     
//      resultat=`Korisnik je pobedio odabrao je  ${userChoise} dok je kompjuter odabrao ${kompRandomChoice}`;
//    } 
//    displayMessage ();   
    
// }



// function makazeKliknut()
// {
//      userChoise='makaze';     

//     if(userChoise==kompRandomChoice)
//   {
//     resultat ='Isti su';
//   }

//   else if (userChoise=='makaze' && kompRandomChoice == 'kamen')
//   {
//     resultat =`Kompjuter je jaci, odabrao je  ${kompRandomChoice} dok ste vi odabrali ${userChoise}`;
//   }
//   else if( userChoise=='makaze' && kompRandomChoice =='list')
//    {
//      resultat =`Korisnik je pobedio odabrao je  ${userChoise} a kompjuter je odabrao ${kompRandomChoice}`;
//    } 

//    displayMessage ();
   
    
// }










// console.log(kamen + " " + list  + " " + makaze)