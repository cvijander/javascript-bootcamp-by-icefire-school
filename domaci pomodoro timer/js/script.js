const minPauza =5;
const velikaPauza =15;




// setting page 

function getOptionsBlock()
{
    // za boju 

    
    // radio buttone 
    //uzimamo formu 
    let form =document.getElementById('settingsForBlocks');

    // odabir check dugmeta za vrednosti (2 ,4 ili 6)
    let selectedButton =form.querySelector('input[name="blockOptions"]:checked');

    // proveravamo da li je selectovano uopste dugme 
    
        // uzimamo vrednosti 
        let valueButton = selectedButton.value;
    

    alert("Odabrali ste : " + valueButton + " blokova ");    
 }


