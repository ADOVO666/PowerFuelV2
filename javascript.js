document.getElementById("signIn").addEventListener("click", function() {
    alert("Sign In functionality is under development!");
});


// Функция для добавления анимации при скролле
function handleScrollAnimation() {
    const animatedItems = document.querySelectorAll('.group-image, .group-text');
    
    animatedItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 100) {
            if (item.classList.contains('group-image')) {
                item.classList.add('animate__fadeInLeft');
            } else if (item.classList.contains('group-text')) {
                item.classList.add('animate__fadeInRight');
            }
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);


document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Простая валидация
    if (username === "" || email === "" || password === "") {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    alert("Регистрация прошла успешно!");
});

