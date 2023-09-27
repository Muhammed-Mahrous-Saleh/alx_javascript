document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    // Add event listener to detect changes in the dropdown menu selection
    numFieldsSelect.addEventListener("change", function () {
        const selectedValue = parseInt(numFieldsSelect.value);
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            dynamicForm.submit(); // Allow form submission
        } else {
            alert("Please fill in all fields.");
        }
    });

    function generateInputFields(numFields) {
        // Clear existing input fields
        inputContainer.innerHTML = "";

        // Create the specified number of text input fields
        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = "field" + i;
            input.placeholder = "Field " + i;
            input.required = true;
            inputContainer.appendChild(input);
        }
    }

    function validateForm() {
        const inputFields = inputContainer.querySelectorAll("input[type='text']");
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === "") {
                return false; // At least one field is empty
            }
        }
        return true; // All fields are filled
    }

    // Initial generation of input fields based on the default selection
    generateInputFields(parseInt(numFieldsSelect.value));
});
