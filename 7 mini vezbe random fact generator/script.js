
let result = document.getElementById('result');

let info = [
   "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries are not.",
    "The Eiffel Tower can be 15 cm taller during the summer."

];

function  generate(){
  let randomIndex = parseInt (Math.random()*info.length);
  result.textContent = info[randomIndex];

}