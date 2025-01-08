
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach(error => error.style.display = "none");

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        displayError("name-error", "Full name is required.");
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        displayError("email-error", "Email is required.");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        displayError("email-error", "Invalid email format.");
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        displayError("password-error", "Password must be at least 8 characters long.");
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        displayError("confirm-password-error", "Passwords do not match.");
        isValid = false;
    }

    // Display confirmation message if valid
    if (isValid) {
        document.getElementById("confirmation-message").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("confirmation-message").classList.add("hidden");
        }, 3000);
        this.reset();
    }
});

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
