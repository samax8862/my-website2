function generatePassword(type) {
    const length = getPasswordLength(type);
    let charset = '';

    if (type === 'hard') {
        charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    } else if (type === 'medium') {
        charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    } else if (type === 'easy') {
        charset = 'abcdefghijklmnopqrstuvwxyz';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById(`${type}-password`).textContent = password;
}

function getPasswordLength(type) {
    const difficulty = document.getElementById(`difficulty-${type}`).value;
    if (difficulty === 'small') {
        return 6;  // كلمة مرور قصيرة
    } else if (difficulty === 'medium') {
        return 12; // كلمة مرور متوسطة
    } else {
        return 18; // كلمة مرور طويلة
    }
}
