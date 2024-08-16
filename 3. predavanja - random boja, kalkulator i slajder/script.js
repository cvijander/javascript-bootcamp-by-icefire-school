const button = document.getElementById('btn');
const body =document.querySelector('body');
const color =document.getElementById('color');


let hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click',generateHex);

function generateHex() {
  let hex ='#';
//   let hexArray =[];
//   let hexIndex =parseInt(Math.random()*hexColors.length);
  for (let i =0; i<6; i++ ) {
    //  hexArray.push(hexIndex);
    hex += hexColors[parseInt(Math.random()*hexColors.length)]

  }  
  color.textContent =hex;

  body.style.backgroundColor = hex;
  console.log(hex);
}

