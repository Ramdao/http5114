window.onload = start
 function start(){
var stayCounter=0;
var switchCounter=0;
var tries = 1000;
for (let i=0; i<=tries; i++){
document.getElementById("tries").innerHTML="Number of tries: "+tries;
var car =Math.ceil( Math.random()*3);
document.getElementById("Random").innerHTML="Car is at: "+car;
console.log(car);


var choice = Math.ceil( Math.random()*3);
document.getElementById("Choice").innerHTML="User choice: "+choice;
console.log("User choice: "+choice)

var remove = Math.ceil(Math.random()*3);
while(remove=== car || remove===choice){
remove = Math.ceil(Math.random()*3);
   
}
document.getElementById("Remove").innerHTML="Host removes: "+remove;
console.log("Host removes: "+ remove);


if( choice===car){
    stayCounter++;
    console.log("Stay")
    
} else{
    switchCounter++;
    console.log("Swith");
    
}
 }
 var percent = Math.floor(switchCounter/ tries * 100);
 
 document.getElementById("Switch").innerHTML = "Switch counter: "+  switchCounter;
 document.getElementById("Stay").innerHTML = "Stay counter: " + stayCounter;
 document.getElementById("Percent").innerHTML= "Percentage: " + percent+"%";
 console.log("Switch was: "+ percent);
 console.log("Stay counter: "+switchCounter);
 console.log("Switch counter: "+stayCounter);
}