function mailValidation() {
    var email = document.getElementById("email").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        emailtextok.innerHTML = " &#x2714;";
        emailtextok.style.color = "#00ff00";
        emailtext.innerHTML = "";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        emailtext.innerHTML = "Email must be valid format";
        emailtext.style.color = "#6e0000";
        emailtextok.innerHTML = "";
    }
}

function nameValidation() {
    var name = document.getElementById("name").value;
    var nameLength = name.length;
    nametext.innerHTML = nameLength;
    
    if(name.length != 0) {
        nametextok.innerHTML = " &#x2714;";
        nametextok.style.color = "#00ff00";
        nametext.innerHTML = "";
    }
    else {
        nametext.innerHTML = "Name required";
        nametext.style.color = "#6e0000";
        nametextok.innerHTML = "";
    }
}

function subjValidation() {
    var subj = document.getElementById("subj").value;
    var subjLength = subj.length;
    subjtext.innerHTML = subjLength;
    
    if(subj.length >= 10) {
        subjtextok.innerHTML = " &#x2714;";
        subjtextok.style.color = "#00ff00";
        subjtext.innerHTML = "";
    }
    else {
        subjtext.innerHTML = "Subject must be 10 chars";
        subjtext.style.color = "#6e0000";
        subjtextok.innerHTML = "";
    }
}

function addrValidation() {
    var addr = document.getElementById("addr").value;
    var addrLength = addr.length;
    addrtext.innerHTML = addrLength;
    
    if(addr.length >= 25) {
        addrtextok.innerHTML = " &#x2714;";
        addrtextok.style.color = "#00ff00";
        addrtext.innerHTML = "";
    }
    else {
        addrtext.innerHTML = "Address must be 25 chars";
        addrtext.style.color = "#6e0000";
        addrtextok.innerHTML = "";
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', () => {
    nameValidation();
    subjValidation();
    mailValidation();
    addrValidation();
})