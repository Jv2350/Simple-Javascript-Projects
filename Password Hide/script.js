let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bxs-show");
    } else {
        password.type = "password";
        eyeIcon.classList.remove("bxs-show");
        eyeIcon.classList.add("bx-hide");
    }
};
