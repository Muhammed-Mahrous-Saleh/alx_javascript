document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const password = passwordInput.value;
        const isValid = validatePassword(password);

        if (isValid) {
            errorParagraph.textContent = "";
            passwordForm.submit(); // Allow form submission
        } else {
            errorParagraph.textContent =
                "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
        }
    });

    function validatePassword(password) {
        // Password must be at least 8 characters long
        if (password.length < 8) {
            return false;
        }

        // Use regular expressions to check for other criteria
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharacterRegex = /[!@#$%^&*]/;

        if (
            !uppercaseRegex.test(password) ||
            !lowercaseRegex.test(password) ||
            !digitRegex.test(password) ||
            !specialCharacterRegex.test(password)
        ) {
            return false;
        }

        return true;
    }
});
