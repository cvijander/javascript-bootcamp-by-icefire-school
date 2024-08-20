document.addEventListener('DOMContentLoaded', function() {

let container =document.getElementById('container');

let imageUrl= 'imagesPrviServis';

let images = [ imageUrl+'/bane.png',
               imageUrl+'/mikica.png',
               imageUrl+'/hranislav.png',  
];

console.log(images);

images.forEach(src => 
{
    let newDiv =document.createElement('div');

    let img = document.createElement('img');
    img.src=src;

    newDiv.appendChild(img);

    newDiv.style.width = '100px';
    newDiv.style.height='100';
    newDiv.style.margin = '10px';
    newDiv.style.display = 'inline-block';
    container.appendChild(newDiv);

});
});