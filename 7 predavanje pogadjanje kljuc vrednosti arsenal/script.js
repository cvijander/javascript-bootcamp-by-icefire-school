let currentNumber =document.getElementById('currentNumber');
let inputPlayer =document.getElementById('inputPlayer').value;
let buttonColor = document.getElementById('buttonColor');
let result =document.getElementById('result');
let currentPlayerNiz =document.getElementById('currentPlayerNiz');


let players = {
    Lehmann: '1',
    Cole: '3',
    Vieira: '4',
    Keown: '5',
    Pires: '7',
    Ljungberg: '8',
    Reyes: '9', 
    Bergkamp: '10',
    Wiltord: '11',
    Lauren: '12',
    Henry: '14',
    Parlour: '15',
    Giovanni: '16',
    Edu: '17',
    Cygan: '18',
    Silva: '19',
    Clichy: '22',
    Campbell: '23',
    Kanu: '25',
    Toure: '28',
    Fabregas: '57',
}

// uzimamo samo kljuceve  - i zzovu se colorNames 
let playersNames =Object.keys(players);
console.log(playersNames);

// uzimamo index tj random pozicija 
let randomPlayerIndex = parseInt(Math.random()*playersNames.length);

//ovde dobijamo slucaj odabir neke boje 
let randomPlayerName =playersNames[randomPlayerIndex];
// let randomColorName1 =colorNames[parseInt(Math.random()*colors.length)] zato sto je objekat daje undifajnded
console.log(randomPlayerName);

// dobijanje vrednosti samog kljuca 

let randomPlayerNumber = players[randomPlayerName];
console.log(randomPlayerNumber);

currentNumber.textContent =`Trenutni broj za pogadjanje je ${randomPlayerNumber}`;


    console.log('input color '+  inputPlayer);
    console.log('random color ' + randomPlayerName);

let poruka='';

function checkPlayer(){

let inputPlayer =document.getElementById('inputPlayer').value.toLowerCase().trim();

if (inputPlayer === randomPlayerName.toLowerCase())
{
    poruka=`Pogodili ste to je igrac ${inputPlayer} sa brojem  ${randomPlayerNumber}`;

}
else 
{
    poruka=`Niste pogodili, Vi ste odabrali igraca: ${inputPlayer} , dok ovo gore je igrac  ${randomPlayerName} sa brojem ${randomPlayerNumber}`;
}
  displayMessage();
}

function displayMessage(){
    result.textContent = poruka;
}

currentPlayerNiz.textContent ="Trenutne boje na raspolaganju su "+ playersNames;