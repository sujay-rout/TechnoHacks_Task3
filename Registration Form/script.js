function validate() {
    let isValid = true;

    // Clear previous errors
    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-pass').innerHTML = '';
    document.getElementById('error-cpass').innerHTML = '';

    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('c-password').value.trim();

    // Validate full name
    if (fullname === '') {
        document.getElementById('error-name').innerHTML = 'Full Name is required';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('error-email').innerHTML = 'Invalid Email';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('error-pass').innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('error-cpass').innerHTML = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}
