
let input = document.getElementById('password');
let btn = document.getElementById('dugme');

btn.addEventListener('click', function() {
// console.log(input);

if(input.value == '') {
    console.log('lozinka je obavezna')
} else if (input.value.length < 6) {
   console.log('lozinka je kratka')
} else if (!input.value.includes('@')) {
    console.log('mora da sadrzi @')
} 
else {
    alert('odlicna lozinka')
}

})

