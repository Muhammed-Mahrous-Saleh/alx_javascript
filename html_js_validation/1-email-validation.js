document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const isValid = validateEmail(email);

        if (isValid) {
            errorParagraph.textContent = "";
            emailForm.submit(); // Allow form submission
        } else {
            errorParagraph.textContent = "Please enter a valid email address.";
        }
    });

    function validateEmail(email) {
        // Use a regular expression to check the email format
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return emailRegex.test(email);
    }
});
