let currentColor =document.getElementById('currentColor');
let inputColor =document.getElementById('inputColor').value;
let buttonColor = document.getElementById('buttonColor');
let result =document.getElementById('result');
let currentColorNiz =document.getElementById('currentColorNiz');


let colors = {
    red: '#FF0000',
    green: '#008000',
    blue: '#0000FF',
    yellow: '#FFFF00',
    orange: '#FFA500',
    purple: '#800080',
    pink: '#FFC0CB', 
    black: '#000000',
    white: '#FFFFFF',
    gray: '#888888'
}

// uzimamo samo kljuceve  - i zzovu se colorNames 
let colorNames =Object.keys(colors);
console.log(colorNames);

// uzimamo index tj random pozicija 
let randomColorIndex = parseInt(Math.random()*colorNames.length);

//ovde dobijamo slucaj odabir neke boje 
let randomColorName =colorNames[randomColorIndex];
// let randomColorName1 =colorNames[parseInt(Math.random()*colors.length)] zato sto je objekat daje undifajnded
console.log(randomColorName);

// dobijanje vrednosti samog kljuca 

let randomColorHex = colors[randomColorName];
console.log(randomColorHex);

currentColor.textContent =`Trenutna boja za pogadjanje je ${randomColorHex}`;


    console.log('input color '+  inputColor);
    console.log('random color ' + randomColorName);

let poruka='';

function checkColor(){

let inputColor =document.getElementById('inputColor').value;

if (inputColor === randomColorName)
{
    poruka=`Pogodili ste to je boja ${inputColor}  predstavljena u hex vrednosti  ${randomColorHex}`;

}
else 
{
    poruka=`Niste pogodili, Vi ste odabrali boju: ${inputColor} , dok ovo gore je boja  ${randomColorName} sa hex zapisom ${randomColorHex}`;
}
  displayMessage();
}

function displayMessage(){
    result.textContent = poruka;
}

currentColorNiz.textContent ="Trenutne boje na raspolaganju su "+ colorNames;