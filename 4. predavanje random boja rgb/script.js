let body = document.querySelector('body');
let h2 = document.querySelector('h2');

let button3promenljive = document.getElementById('dugme3promenljive');
let button1promenljiva = document.getElementById('dugme1promenljiva');

button3promenljive.addEventListener('click',promeniBoju3Promenljive);
button1promenljiva.addEventListener('click',promeniBoju1Promenljivom);

let rgbColor3promenljive ;
let rgbColor1promneljiva ;

let boje;
let boja1;
let boja2;
let boja3;

function promeniBoju3Promenljive(){

rgbColor3promenljive ="rgb(";
for (let i =0 ; i< 1; i++) 
{
    boja1 =parseInt( Math.random() *256);
    boja2 =parseInt( Math.random() *256);
    boja3 =parseInt( Math.random() *256);
    console.log(boja1);
    console.log(boja2);
    console.log(boja3);
    // rgbColor +=boje+","+boje+","+boje+")";
}
rgbColor3promenljive +=boja1 + "," + boja2 + "," + boja3 + ")";
console.log(rgbColor3promenljive);

body.style.backgroundColor=rgbColor3promenljive;
rgbColor3promenljive="";
}

function promeniBoju1Promenljivom(){

let nizBoja=[];

rgbColor1promneljiva ="rgb(";

for (let i =0 ; i< 3; i++) 
{
    boje =parseInt( Math.random() *256); 
    console.log(boje);
    nizBoja.push(boje);
    rgbColor1promneljiva +=boje+",";
    
    // rgbColor +=boje+","+boje+","+boje+")";
}
// rgbColor +=boje + "," + boje + "," + boje + ")";
// rgb(66,76,7, 

console.log(" ovo je  niz rgb color " +rgbColor1promneljiva);
let finalniRgb = rgbColor1promneljiva.substring(0,rgbColor1promneljiva.length-1);
console.log("finalna verzija " + finalniRgb);
console.log(nizBoja);

finalniRgb +=")";
console.log("finalna verzija sa zagradom " + finalniRgb);
body.style.backgroundColor=finalniRgb;

}

