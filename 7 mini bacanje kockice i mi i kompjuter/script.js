let button = document.getElementById('dugme');
let res = document.getElementById('result');

let randomKompjuter = parseInt (Math.random()*6)+1;

let radnom =parseInt (Math.random()*6)+1;;

console.log(radnom);
console.log(randomKompjuter);

let result="";

function baciKockicu()
{
    let radnom =parseInt (Math.random()*6)+1;
    let randomKompjuter = parseInt (Math.random()*6)+1;
    console.log(`u okviru funkcije ${radnom}`);
    console.log(`u okvru funkcije kompjuter ${randomKompjuter}`);
    if(radnom==randomKompjuter)
    {
        result=`Isti su ${radnom}`;
    }
    else if (radnom > randomKompjuter) 
    {
        result=`Nas broj je veci od kompjutera  ${radnom}`;
    }
    else if (radnom < randomKompjuter) 
    {
        result=`Nas broj je manji od kompjutera  ${radnom}`;
    }


    displayMessage();
}

function displayMessage ()
{
   res.textContent =`Bacili ste:   ${result}`;
}