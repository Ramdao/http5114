
function message(target){
    //console.log('open')
    var hide = document.getElementsByClassName("accordion-section");

        for (var i=0; hide.length>i; i++ ){
            hide[i].style.display="none";
        }
    
    document.getElementById(target).style.display='block';
}