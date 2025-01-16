
var i =0;
var txt=" This Is Ayush And ";
var speed=150;

function type(){

    document.getElementById("type").innerHTML+=txt.charAt(i);
    i++;
    setTimeout(type,speed);
    
}
type();