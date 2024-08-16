let body = document.querySelector('body');
let dugme =document.getElementById('dugme');
let naslov =document.querySelector('span');

// console.log(dugme);

// #FC138A
 // 0-9 A .. F   = 16    (red)(gren)(blue)       #red green blue   (16)(16)  (16)(16) (16)(16)      rgb (255,255,255 )   #FF0000  rgb(255,0,0)

dugme.addEventListener('click',prikazi);

function prikazi() {
 
let hex ='#';
let index;
 let hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E','F'];    //16 karaktera 

 for ( let i = 0 ; i <6 ; i ++ ){         // #  FC138A
     index= parseInt(  Math.random()*hexColors.length);
     hex += hexColors[index];
     console.log("Ovo su izvuceni indexi " +index);
 }

 naslov.textContent =hex; 

 body.style.backgroundColor=hex;
 
 console.log("Ovo je nasa hex boja " +hex);
}