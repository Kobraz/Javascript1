var isValid = 0;

function mailValidation() {
    var email = document.getElementById("email").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        emailtextok.innerHTML = " &#x2714;";
        emailtextok.style.color = "#00ff00";
        emailtext.innerHTML = "";
        isValid += 1;
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        emailtext.innerHTML = "Email must be valid format";
        emailtext.style.color = "#ff3333";
        emailtextok.innerHTML = "";
        isValid += 0;
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
        isValid += 1;
    }
    else {
        nametext.innerHTML = "Name required";
        nametext.style.color = "#ff3333";
        nametextok.innerHTML = "";
        isValid += 0;
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
        isValid += 1;
    }
    else {
        subjtext.innerHTML = "Subject must be 10 chars";
        subjtext.style.color = "#ff3333";
        subjtextok.innerHTML = "";
        isValid += 0;
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
        isValid += 1;
    }
    else {
        addrtext.innerHTML = "Address must be 25 chars";
        addrtext.style.color = "#ff3333";
        addrtextok.innerHTML = "";
        isValid += 0;
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', () => {
    nameValidation();
    subjValidation();
    mailValidation();
    addrValidation();
})

if(isValid === 4) {
    document.getElementById("submitButton").style.display = "none";
}
else {
    document.getElementById("submitButton").style.display = "true";
}

console.log(isValid.value);