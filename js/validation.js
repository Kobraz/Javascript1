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
    
    if(name.length != 0) {
        nametext.innerHTML = "Name OK";
        nametext.style.color = "#00ff00";
    }
    else {
        nametext.innerHTML = "Name required";
        nametext.style.color = "#ff2400";
    }
}

function subjValidation() {
    var subj = document.getElementById("subj").value;
    var subjLength = subj.length;
    subjtext.innerHTML = subjLength;
    
    if(subj.length >= 10) {
    subjtext.innerHTML = `<i class="fa-solid fa-check"></i>`;
        subjtext.style.color = "#00ff00";
    }
    else {
        subjtext.innerHTML = "Subject must be 10 chars";
        subjtext.style.color = "#ff2400";
    }
}

function addrValidation() {
    var addr = document.getElementById("addr").value;
    var addrLength = addr.length;
    addrtext.innerHTML = addrLength;
    
    if(addr.length >= 25) {
        addrtext.innerHTML = "Address OK";
        addrtext.style.color = "#00ff00";
    }
    else {
        addrtext.innerHTML = "Address must be 25 chars";
        addrtext.style.color = "#ff2400";
    }
}