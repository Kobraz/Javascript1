// validateEmail = (input) => {
//     var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     if(input.value.match(mailformat))
//     {
//         const emailError = document.getElementById('email-error');
//         emailError.textContent = "Valid email address!";
//     }
//     else {
//         const emailError = document.getElementById('email-error');
//         emailError.textContent = "Email is not valid!";
//     }
// }


function validation() {
    // var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    // var form = document.getElementById("text");
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        text.innerHTML = "Valid email";
        text.style.color = "#00ff00";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        text.innerHTML = "Invalid email";
        text.style.color = "#ff0000";
    }
}