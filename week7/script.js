var submit = document.getElementById("submit");
submit.addEventListener("click",function(e){
    console.log("clicked");
    var error =0;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var test = new RegExp("^[A-Za-zs]*$")
    var testemail = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;")
    var nameError = document.getElementById("name-error");
    if(!name || !email){
        nameError.innerHTML="Please type in fields";
        error++;
    } else if (!test.test(name) || !testemail.test(email)){
        nameError.innerHTML="Invalid fields";
        error++;
    } if (error==0){
        var message = document.getElementById("message");
        message.innerHTML ="Thank you!";
        document.getElementById("name").value="";
        document.getElementById("email").value="";

    }
    e.preventDefault();
});
