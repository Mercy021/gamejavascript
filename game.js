var y=Math.floor(Math.random()*20+1);
 var guess=1;
 const button = document.getElementById("submitguess");
button.addEventListener("click", function f(){
    var x=document.getElementById("guessField").value;
    if(x===y){
        alert("Congrats");

 }
 else if(x>y){
    guess++;
    alert("oops!try a smaller number");
 
 }
 else{
    guess++;
    alert("oops!try a higher number");

 
 }
});

 