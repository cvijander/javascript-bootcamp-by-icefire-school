let button = document.getElementById('dugme');
let res = document.getElementById('result');

function baciKockicu()
{
    let radnom =parseInt (Math.random()*6)+1;
    res.textContent ="Bacili ste: " + radnom;
}