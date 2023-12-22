// Получаем кнопку по ее идентификатору
const button = document.getElementById('myButton');

// Добавляем обработчик события 'click'
button.addEventListener('click', () => {
    // Добавляем класс 'clicked' для запуска анимации
    button.classList.add('clicked');
    
    // Убираем класс 'clicked' через некоторое время (например, 300 миллисекунд)
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300);
});
