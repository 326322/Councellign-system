document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (email === "admin@example.com" && password === "admin123") {
        window.location.href = "admin.html"; // Redirect to admin panel
    } else {
        alert("Invalid credentials! Try again.");
    }
});

document.querySelector('.google-login').addEventListener('click', function() {
    alert('Google Login Clicked! (Handle OAuth here)');
});
