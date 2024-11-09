document.getElementById("forgot-password-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // الحصول على البريد الإلكتروني المدخل
    const email = document.getElementById("email").value;

    // استرجاع قائمة المستخدمين من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // التحقق من وجود البريد الإلكتروني في بيانات المستخدمين
    const user = users.find(user => user.email === email);

    if (user) {
        // إذا كان البريد الإلكتروني موجودًا، نقوم بإرسال رسالة افتراضية (في الواقع لا نرسل شيء)
        alert("تم إرسال تعليمات استعادة كلمة المرور إلى بريدك الإلكتروني.");
    } else {
        // إذا كان البريد الإلكتروني غير موجود
        alert("هذا البريد الإلكتروني غير موجود في النظام.");
    }
});
