document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submitForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form field values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Perform validation
        if (!name || !email) {
            displayErrorMessage("Please fill in all required fields.");
        } else if (!validateEmail(email)) {
            displayErrorMessage("Please enter valid email.");
        } else {
            // Clear any existing error messages
            clearErrorMessage();

            // Submit the form (you can replace this with your actual submission logic)
            displaySuccessMessage("Form submitted successfully!");
        }
    });

    function displayErrorMessage(message) {
        const errorElement = document.getElementById("error");
        errorElement.textContent = message;
    }

    function clearErrorMessage() {
        const errorElement = document.getElementById("error");
        errorElement.textContent = "";
    }

    function displaySuccessMessage(message) {
        const successElement = document.getElementById("success");
        successElement.textContent = message;
    }

    function validateEmail(email) {
        // Use a regular expression to check the email format
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return emailRegex.test(email);
    }
});
