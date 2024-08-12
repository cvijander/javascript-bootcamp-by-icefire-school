console.log(123);
console.log('dejan');

//  primitivni tipovi 


var pi=3.14;
console.log(pi);

console.error(pi);

console.warn(pi);

var ime ='dejan';

var prezime="stanokovic";

let test = "nesto";

var svetlo =true;

var svetlo =false;

var dejan =null;
console.log(dejan);

var grad;
console.log(grad);

// referenti tipovi

var objekat = {
    ime : 'dejan',
    prezime: 'stanovic',
    godine: 28
};

console.log(objekat);

objekat.godine;
console.log(objekat.godine);

var niz = [1,2,3 ];
console.log(niz);
console.log(niz[0]);
// ako pisemo vrednosti koja ne postoji u nizu onda je ona undefined. dakle nema out of bounds
console.log(niz[4]);

function stampajIme(){
    console.log('Neki dejan');
}

stampajIme();

var prvoIme='dejan';
var prvoPrezime ='stankovic';

function vratiIme() {
    console.log(prvoIme + ' ' + prvoPrezime);
}
vratiIme();


prezime[0];
console.log(prezime[0]);

prezime.length;
console.log(prezime.length);

var ime = 'Dejan Stankovic';
ime.toUpperCase();
console.log(ime.toUpperCase());

console.log(ime.toLowerCase());

var drugoIme= 'DeJan';
var drugoPrezime= 'StanKovic';

console.log(drugoIme.toLowerCase() + ' ' + drugoPrezime.toUpperCase());

var email = 'dejan@gmail.com';

email.indexOf('@');
console.log(email.indexOf('@'));

email.lastIndexOf('a');
console.log(email.lastIndexOf('a'));

email.substr(1,4);
email.substring(1,4);
console.log(email.substring(1,4));

console.log(email.slice(0,5));


var broj1 = 22;
console.log(broj1+8);

var broj10 = 5;
broj10**2;
console.log(broj10**2);
console.log(broj10%3);

var likes =0;
console.log(likes);
likes++;
console.log(likes);
likes++;
console.log(likes);
likes++;
console.log(likes);
likes++;
console.log(likes);
likes++;
console.log(likes);
console.log(likes);
++likes;
console.log(likes);

var ime3 ='dejan';
var godine3= 28;

console.log(ime3 + ' ima ' + godine3 + ' godina.');

console.log(`${ime3} ima ${godine3} godina`);

Math.random();
console.log(parseInt(Math.random()*6));

console.log(2+2.5);

console.log(4.5+'dejan');
var novo=4.5+'dejan';
console.log(typeof novo);

var a =10;

if(1<2 )
{
    var ime10='dejan';
}
console.log(ime10);


// if(1<2 )
// {
//     let ime1110='dejan';
// }
// console.log(ime1110);

// if(1<2 )
// {
//     const ime11='dejan';
// }
// console.log(ime11);

// let naslovJedan= document.getElementById('naslov');

const body = document.querySelector('body');
const button =document.getElementById('dugme');

const colors = ['red','blue','green','yellow','violet'];

button.addEventListener('click', changeBackground);

function changeBackground () {
   let colorIndex=  parseInt( Math.random() * colors.length);

   console.log(colorIndex);

   console.log(colors[colorIndex]);
   body.style.backgroundColor = colors[colorIndex];
}

function changeBackground2() {
    let red= parseInt(Math.random()*255);
    let green= parseInt(Math.random()*255);
    let blue= parseInt(Math.random()*255);

    function mixed(red,green,blue) {
        let fullColor=rgb(red,green,blue);
        console.log(fullColor);
    }
}


const body1 = document.querySelector('body');
const button1 =document.getElementById('dugme');

const colors1 = ['red','blue','orange','purple','yellow'];

button1.addEventListener('click', changeBackground3); 

function changeBackground3()  
{
    let colorIndex1 =parseInt( Math.random() *colors1.length);
    console.log(colorIndex1);

    body1.style.backgroundColor =colors1[colorIndex1];
}



