const users = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "teacher",
        password: "teacher123",
        role: "teacher"
    },
    {
        username: "student001",
        password: "student123",
        role: "student",
        studentId: "2026001"
    }
];



// PASSWORD VISIBILITY TOGGLE


const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

const eyeVisible = togglePassword.querySelector(".eye-visible");
const eyeHidden = togglePassword.querySelector(".eye-hidden");

togglePassword.addEventListener("click", function() {

    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    eyeVisible.style.display = isPassword ? "block" : "none";
    eyeHidden.style.display = isPassword ? "none" : "block";

    togglePassword.setAttribute(
        "aria-label",
        isPassword ? "Hide password" : "Show password"
    );
});


// LOGIN FORM


const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const user = users.find(function(account) {

        return account.username === username &&
               account.password === password;

    });
    
    // INVALID CREDENTIALS
    if (!user) {

       loginError.textContent =
           "Invalid username or password.";

       return;

    }
    // LOGIN SESSION
    sessionStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    // REDIRECT TO INDEX.HTML 

    window.location.href = "index.html";

});

