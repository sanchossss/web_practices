let notifications = document.querySelector('.notif-list');
let notif = document.querySelector('.notif');
let count = document.querySelector('.count');
let clearId;

function showNotification(options) {
    notifications.style.opacity = '1';
    notifications.style.visibility = 'visible';
    notifications.style.width = '300px';
    notifications.style.top = '0px';
    let newN = notif.cloneNode(true);
    newN.textContent = options;
    setTimeout(() => {
        notifications.appendChild(newN);
    }, 1500);

    setTimeout(() => {
        notifications.removeChild(newN);
    }, 3000);

    clearTimeout(clearId);
}

showNotification("Побрейся, лентяй!");
