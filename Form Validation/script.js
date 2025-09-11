document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('error-message').innerHTML = '';

    // Get form field values
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    // Validate Mobile Number (Must be 10 digits)
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        document.getElementById('error-message').innerHTML = 'Please enter a valid 10-digit mobile number.';
        return;
    }

    // Validate Password (At least one uppercase, one lowercase, one special symbol, and 8 characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('error-message').innerHTML = 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a special symbol.';
        return;
    }

    // If validation passes, show success
    alert('Form submitted successfully!');
    document.getElementById('userForm').reset();
});
