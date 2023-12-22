const button = document.getElementById('button-like');
const text = document.getElementById('text');

function clickButton(){
button.addEventListener('click', () => {
    text.textContent = '2';
    button.classList.add('clicked');
    button.addEventListener('click',()=> {
        text.textContent = '1';
            button.classList.remove('clicked');
            clickButton();
    })
});
}

clickButton();
