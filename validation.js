document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    
    let isValid = true; // Флаг корректности
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Очищаем предыдущие ошибки
    resetErrors();

    // Валидация логина
    const usernameRegex = /^[a-zA-Z]{3,16}$/;
    if (!username || !usernameRegex.test(username)) {
        showError("usernameError", "Логин должен содержать только латинские буквы и быть длиной от 3 до 16 символов.");
        document.getElementById("username").classList.add("invalid");
        isValid = false;
    }

    // Валидация email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        showError("emailError", "Введите корректный адрес электронной почты.");
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    }

    // Валидация пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;
    if (!password || !passwordRegex.test(password)) {
        showError("passwordError", "Пароль должен содержать хотя бы одну заглавную букву, одну маленькую букву, одну цифру и один специальный символ. Длина от 8 до 32 символов.");
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    }

    // Если всё корректно, показываем уведомление и отправляем форму
    if (isValid) {
        alert("Registration successful!");
        document.getElementById("registerForm").reset();
    }
});

function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => errorMessage.remove());
    const inputs = document.querySelectorAll('.invalid');
    inputs.forEach((input) => input.classList.remove('invalid'));
}

function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error-message');
}
