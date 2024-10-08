var current =0;
var total = 4;

function next(){
    current++;
    
    if(current>=total){
        current=0;
    }
    console.log("next");
    console.log(current);

    var hide = document.getElementsByClassName("slide");

    for (var i=0; hide.length>i; i++ ){
        hide[i].style.display="none";
    }

    hide[current].style.display="block";
}

function previous(){
    current--;
    
    if(current<0){
        current=3;
    }
    console.log("previous");
    console.log(current);

    var hide = document.getElementsByClassName("slide");

    for (var i=0; hide.length>i; i++ ){
        hide[i].style.display="none";
    }

    hide[current].style.display="block";
    
}