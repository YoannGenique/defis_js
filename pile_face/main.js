const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener("click", headsOrTails, console.log(headsOrTails));

function headsOrTails(){
    var entier = eAle(0,10);

    if (entier<=5){
        result.innerHTML="Pile";
    }else{
        result.innerHTML="Face";
    }
    console.log(entier);
}
function eAle(min, max){ 
    return Math.floor(Math.random() * (max - min +1)) + min;
}