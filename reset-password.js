document.getElementById("reset-password-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // الحصول على كلمة المرور الجديدة
    const newPassword = document.getElementById("new-password").value;

    // استرجاع قائمة المستخدمين من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // تحديد المستخدم (أو إذا كان هناك طريقة لتحديد المستخدم بشكل مباشر)
    const email = "user@example.com"; // يجب أن تكون قد حصلت على البريد الإلكتروني في مرحلة سابقة من عملية الاستعادة.

    const user = users.find(user => user.email === email);
    if (user) {
        // تحديث كلمة المرور في المصفوفة
        user.password = newPassword;

        // تخزين المصفوفة مع كلمة المرور الجديدة
        localStorage.setItem("users", JSON.stringify(users));

        alert("تم تحديث كلمة المرور بنجاح.");
        window.location.href = "login.html";  // العودة لصفحة تسجيل الدخول
    } else {
        alert("حدث خطأ في التحقق من المستخدم.");
    }
});
