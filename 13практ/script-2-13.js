let count = 0;
let intervalId;


function createList() {
    let notify = document.querySelector('.notification');

    let listMenu = document.querySelector('.notification ul li');

    function addLi() {
        let listItem = document.createElement('li');
        
        let textNode = document.createTextNode("listItem" + ++count);
        listItem.append(textNode);

        let esc = document.createElement("img");
        esc.src = "esc.png";
        esc.style.position = "absolute";
        esc.style.right = "0px";
        esc.style.top = "0px";
        esc.style.width = "20px";
        esc.style.height = "20px";
        esc.style.borderRadius = "0px";
        document.body.append(esc);

        listItem.append(esc);
    
        listMenu.after(listItem);

        notify.setAttribute('data-count', count);
    }
    if (count == 0){
        addLi();
    }
    intervalId = setInterval(addLi, 3000);
}


function delayDecorator(func, delay) {
    return function () {
        clearInterval(intervalId);
        setTimeout(() => {
            func();
        }, delay);
    };
}


let notifyButton = document.getElementById('notify-menu-first');
notifyButton.addEventListener("click", delayDecorator(createList, 10000));

createList();


document.querySelector(".notification").addEventListener("click", function(event) {
    let target = event.target;

    if (target.tagName === "IMG") {
        let listItem = target.closest("li");
        if (listItem) {
            listItem.remove();
            let notify = document.querySelector('.notification');
            notify.setAttribute('data-count', count);
        }
    }
});
