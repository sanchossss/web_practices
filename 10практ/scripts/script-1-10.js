const captchaTextElement = document.getElementById("captcha-text");
const captchaInputElement = document.getElementById("captcha-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
let isMathCaptcha = false;

// Генерируем случайную строку из букв разного регистра
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Генерируем случайные числа и устанавливаем текст капчи с математическим примером
function generateMathCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    captchaTextElement.textContent = `Введите сумму ${num1} + ${num2}`;
    captchaTextElement.dataset.answer = String(num1 + num2);
    isMathCaptcha = true;
}

function generateRandomCaptcha() {
    const randomString = generateRandomString(5);
    captchaTextElement.textContent = `Введите "${randomString}"`;
    captchaTextElement.dataset.answer = randomString;
    isMathCaptcha = false;
}

// Проверка на пустой ввод
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Обработчик кнопки отправки капчи
submitButton.addEventListener("click", function () {
    const inputText = captchaInputElement.value;
    const captchaAnswer = captchaTextElement.dataset.answer;
    
    if (isEmpty(inputText)) {
        errorMessage.textContent = "Напиши хоть что-нибудь!";
    } else if (inputText === captchaAnswer) {
        errorMessage.textContent = "";
        alert("Успех!");
    } else if (isMathCaptcha && !isNaN(inputText) && parseInt(inputText) === parseInt(captchaAnswer)) {
        errorMessage.textContent = "";
        alert("Успех!");
    } else {
        errorMessage.textContent = "Неправильное значение";
        if (!isMathCaptcha) {
            generateMathCaptcha();
        }
    }
});

// Генерируем начальную текстовую капчу при загрузке страницы
generateRandomCaptcha();