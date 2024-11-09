document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // الحصول على القيم المدخلة
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // التحقق من وجود البريد الإلكتروني في localStorage
    const storedEmail = localStorage.getItem("email");

    // التحقق من الحقول
    if (!username || !email || !password) {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    // إذا كان البريد الإلكتروني موجودًا مسبقًا
    if (storedEmail && storedEmail === email) {
        alert("البريد الإلكتروني هذا مستخدم بالفعل! حاول استخدام بريد إلكتروني آخر.");
    } else {
        // تخزين البيانات في localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // إعادة التوجيه إلى صفحة تسجيل الدخول
        alert("تم إنشاء الحساب بنجاح!");
        window.location.href = "login.html";
    }
});
