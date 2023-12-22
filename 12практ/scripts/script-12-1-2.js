let arrNotif = [
    "Закройте кредит по машине!",
    "Выпейте 2 литра воды за день!",
    "Поспите 8 часов!",
    "Устройте утреннюю пробежку!",
    "Покормите свою собаку",
    "Сделай свою жизнь лучше, лентяй!"
];

const button = document.querySelector('.notif-button');
let notifications = document.querySelector('.notif-list');
let notif = document.querySelector('.notif');
let count = document.querySelector('.count');
let clearId;

let isNotificationsVisible = false;
let isDelayActive = false;

function delayDecorator(func) {
    return function () {
        if (isDelayActive) {
            return;
        }

        func.apply(this, arguments);

        // Остановка счётчика на 5 секунд
        isDelayActive = true;
        setTimeout(() => {
            isDelayActive = false;
        }, 5000);
    };
}

function newNotif() {
    if (notifications.childElementCount >= 7 || isDelayActive) {
        return;
    }

    let index = Math.floor(Math.random() * arrNotif.length);
    let newN = notif.cloneNode();
    newN.textContent = arrNotif[index];
    notifications.appendChild(newN);
    count.textContent++;
}

function notifAdd() {
    button.addEventListener('click', () => {
        if (isNotificationsVisible) {
            notifications.style.opacity = '0';
            notifications.style.visibility = 'hidden';
            notifications.style.color = 'none';
            notifications.style.width = '100px';
            notifications.style.top = '-40px';
        } else {
            notifications.style.opacity = '1';
            notifications.style.visibility = 'visible';
            notifications.style.width = '300px';
            notifications.style.top = '0px';
        }

        isNotificationsVisible = !isNotificationsVisible;
    });


    clearId = setInterval(delayDecorator(newNotif), 500);
}

notifAdd();
