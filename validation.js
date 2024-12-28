// Password validation
function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return {
        isValid: minLength && hasUpperCase && hasNumber && hasSpecialChar,
        minLength,
        hasUpperCase,
        hasNumber,
        hasSpecialChar
    };
}

// Form submission handlers
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    console.log('Login attempt:', { email, password });
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('recovery-email').value;

    // Add your password recovery logic here
    console.log('Password recovery request:', { email });
}

function handleResetPassword(e) {
    e.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const validation = validatePassword(newPassword);

    if (!validation.isValid) {
        alert('Please ensure your password meets all requirements');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Add your password reset logic here
    console.log('Password reset attempt');
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}); 