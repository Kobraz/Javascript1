function mailValidation() {
    var email = document.getElementById("email").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        emailtext.innerHTML = "Valid email";
        emailtext.style.color = "#00ff00";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        emailtext.innerHTML = "Invalid email";
        emailtext.style.color = "#ff0000";
    }
}

function nameValidation() {
    var name = document.getElementById("name").value;
    var nameLength = name.length;
    nametext.innerHTML = nameLength;
    
    if(name.length >= 5) {
        nametext.innerHTML = "Name length OK";
        nametext.style.color = "#00ff00";
    }
    else {
        nametext.innerHTML = "Name too short";
        nametext.style.color = "#ff2400";
    }
}