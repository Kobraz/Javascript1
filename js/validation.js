validateEmail = (input) => {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(input.value.match(mailformat))
    {
        const emailError = document.getElementById('email-error');
        emailError.textContent = "Valid email address!";
    }
    else {
        const emailError = document.getElementById('email-error');
        emailError.textContent = "Email is not valid!";
    }
}