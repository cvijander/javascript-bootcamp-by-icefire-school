
console.log('pozdrav svima iz js');

let body = document.querySelector('body');

let button =document.getElementById('buttonZaBoju');

let boje = ['red','aqua','green','yellow','chocolate','darkred'];


body.style.backgroundColor = 'black';
 function menjajBoju(){

   let indexBoja =  parseInt(Math.random() * boje.length);
   console.log(indexBoja);

   // nas cilj je da dobijemo sledece
   

   body.style.backgroundColor =boje[indexBoja];


}


