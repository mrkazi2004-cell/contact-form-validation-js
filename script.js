document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === ""){
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.match(emailPattern)){
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerHTML = "Message is required";
        valid = false;
    }

    if(valid){
        document.getElementById("success").innerHTML =
        "Form Submitted Successfully!";
    }

});