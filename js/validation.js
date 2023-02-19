function mailValidation() {
    var email = document.getElementById("email").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        emailtextok.innerHTML = "&#x2714;";
        emailtextok.style.color = "#00ff00";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        emailtext.innerHTML = "Email must be valid format";
        emailtext.style.color = "#ff3333";
    }
}

function nameValidation() {
    var name = document.getElementById("name").value;
    var nameLength = name.length;
    nametext.innerHTML = nameLength;
    
    if(name.length != 0) {
        nametextok.innerHTML = "&#x2714;";
        nametextok.style.color = "#00ff00";
    }
    else {
        nametext.innerHTML = "Name required";
        nametext.style.color = "#ff3333";
    }
}

function subjValidation() {
    var subj = document.getElementById("subj").value;
    var subjLength = subj.length;
    subjtext.innerHTML = subjLength;
    
    if(subj.length >= 10) {
        subjtextok.innerHTML = "&#x2714;";
        subjtextok.style.color = "#00ff00";
    }
    else {
        subjtext.innerHTML = "Subject must be 10 chars";
        subjtext.style.color = "#ff3333";
    }
}

function addrValidation() {
    var addr = document.getElementById("addr").value;
    var addrLength = addr.length;
    addrtext.innerHTML = addrLength;
    
    if(addr.length >= 25) {
        addrtextok.innerHTML = "&#x2714;";
        addrtextok.style.color = "#00ff00";
    }
    else {
        addrtext.innerHTML = "Address must be 25 chars";
        addrtext.style.color = "#ff3333";
    }
}