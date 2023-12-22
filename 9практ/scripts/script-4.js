// Получаем кнопку по ее идентификатору
var button = document.getElementById('button-follow');

button.style.backgroundColor = 'black';
button.onclick = function(){
    if (button.style.backgroundColor === 'black'){
        button.style.backgroundColor = 'red';
        window.addEventListener('keyup', () => {
            window.addEventListener('mousemove', e => {
                if (button.style.backgroundColor == 'red'){
                    x = e.pageX;
                    y = e.pageY;
                    let div = document.createElement('div');

                    div.style.position = 'absolute';
                    div.style.width = '40px';
                    div.style.height = '40px';
                    div.style.borderRadius = '60px';
                    div.style.border = '6px solid';
                    div.style.borderColor = 'black';
                    div.style.left = x + 'px';
                    div.style.top = y + 'px';
                    div.style.zIndex = '1';

                    document.body.appendChild(div);
                    }
                }, {once: true})
            })
            
        }
    else {
        while(document.body.lastChild != button){
            document.body.removeChild(document.body.lastChild);
        }
        button.style.backgroundColor = 'black';
    }
}
