let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = (eye) => {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "images/eye-open.png";
    } else {
        password.type = "password";
    }
}