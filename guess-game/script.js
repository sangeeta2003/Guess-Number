// generate random number
let y = Math.floor(Math.random()*10 +1);
// let me guess a number
let guess = 1;
document.getElementById("submit").onclick = function(){
    // number guessed bu user
    let x = document.getElementById("input").value;
    if( x == y){

alert("Congrats..ILU" + guess+"Guess");
    
}else if(x > 50){

     alert("Please choose a num less than right now u guess");
 guess--;
    }
    else if(x < 44){
        alert("please choose a number greater right now u guess");
guess++;
    }
    else{
        guess++;
        alert("opps sry try next time");
    }
}