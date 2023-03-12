const form = document.getElementById('form');
const formName = document.getElementById('name');
const formSubj = document.getElementById('subj');
const formMail = document.getElementById('mail');
const formAddr = document.getElementById('addr');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const formNameValue = formName.value.trim();
    const formSubjValue = formSubj.value.trim();
    const formMailValue = formMail.value.trim();
    const formAddrValue = formAddr.value.trim();
    var nameTextOk = '';
    var subjTextOk = '';
    var emailTextOk = '';
    var addrTextOk = '';

    if(formNameValue === '') {
        setError(formName, 'Name is required');
    } else {
        setSuccess(formName);
        nameTextOk.innerHTML = " &#x2714;";
    }

    if(formSubjValue === '') {
        setError(formSubj, 'Subject is required');
    } else if(formSubjValue.length < 10 ) {
        setError(formSubj, 'Subject must be at least 10 chars');
    } else {
        setSuccess(formSubj);
        subjTextOk.innerHTML = " &#x2714;";
    }

    if(formMailValue === '') {
        setError(formMail, 'E-mail is required');
    } else if (!isValidEmail(formMailValue)) {
        setError(formMail, 'Valid e-mail is required');
    } else {
        setSuccess(formMail);
        emailTextOk.innerHTML = " &#x2714;";
    }

    if(formAddrValue === '') {
        setError(formAddr, 'Address is required');
    } else if(formAddrValue.length < 25 ) {
        setError(formAddr, 'Address must be at least 25 chars');
    } else {
        setSuccess(formAddr);
        addrTextOk.innerHTML = " &#x2714;";
    }

}