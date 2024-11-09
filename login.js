document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "index.html";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});
