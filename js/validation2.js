function mailValidation() {
    var email = document.getElementById("mail").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        emailTextOk.innerHTML = " &#x2714;";
        emailTextOk.style.color = "#00ff00";
        emailText.innerHTML = "";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        emailText.innerHTML = "Email must be valid format";
        emailText.style.color = "#ff3333";
        emailTextOk.innerHTML = "";
    }
}

function nameValidation() {
    var name = document.getElementById("name").value;
    var nameLength = name.length;
    nametext.innerHTML = nameLength;
    
    if(name.length != 0) {
        nameTextOk.innerHTML = " &#x2714;";
        nameTextOk.style.color = "#00ff00";
        nameText.innerHTML = "";
    }
    else {
        nameText.innerHTML = "Name required";
        nameText.style.color = "#ff3333";
        nameTextOk.innerHTML = "";
    }
}

function subjValidation() {
    var subj = document.getElementById("subj").value;
    var subjLength = subj.length;
    subjtext.innerHTML = subjLength;
    
    if(subj.length >= 10) {
        subjTextOk.innerHTML = " &#x2714;";
        subjTextOk.style.color = "#00ff00";
        subjText.innerHTML = "";
    }
    else {
        subjText.innerHTML = "Subject must be 10 chars";
        subjText.style.color = "#ff3333";
        subjTextOk.innerHTML = "";
    }
}

function addrValidation() {
    var addr = document.getElementById("addr").value;
    var addrLength = addr.length;
    addrtext.innerHTML = addrLength;
    
    if(addr.length >= 25) {
        addrTextOk.innerHTML = " &#x2714;";
        addrTextOk.style.color = "#00ff00";
        addrText.innerHTML = "";
    }
    else {
        addrText.innerHTML = "Address must be 25 chars";
        addrText.style.color = "#ff3333";
        addrTextOk.innerHTML = "";
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', () => {
    nameValidation();
    subjValidation();
    mailValidation();
    addrValidation();
})


