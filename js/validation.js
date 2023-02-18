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
    var form = document.getElementById("form");
    var form = document.getElementById("email").value;
    var form = document.getElementById("text");
    const regex = /\S+@\S+\.\S+/;

    if (email.match(regex)) {
        form.classList.add("Valid");
        form.classList.remove("Invalid");
        Text.innerHTML = "Valid email";
        Text.style.color = "#00ff00";
    }
    else {
        form.classList.add("Invalid");
        form.classList.remove("Valid");
        Text.innerHTML = "Invalid email";
        Text.style.color = "#ff0000";
    }
}