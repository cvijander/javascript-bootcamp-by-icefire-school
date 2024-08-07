

function init() {
    document.getElementById('textOutput').innerHTML = "Unesite vase ime i kliknite na dugme";
} 


function clickButton() 
{
    let ime =document.getElementById('textEntry').value;
     console.log(ime);

    document.getElementById('textOutput').innerHTML = pozdrav(ime);

    // document.getElementById('textOutput').innerHTML = document.getElementById('textEntry').value;
    
}

function pozdrav(prosledjujemoIme) 
{
    

    let dobrodosli = "Zdravo "+ prosledjujemoIme + " na nas sajt!";
    return dobrodosli;
}
