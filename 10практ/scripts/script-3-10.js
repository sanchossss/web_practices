const texts = document.getElementsByClassName("text");
const buttons = document.querySelectorAll('button[id^=button-second]')
const maxLength = 60;
const docString = texts[0].textContent;

function truncate(str, maxlength)
{
    if (str.length > maxlength)
    {
        for (i=0;i<3;i++)
        {
            let str_const = str.slice(0, maxlength+1);
            texts[i].textContent = str_const + "...";
        }
    }
}


function clickButton(){
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            truncate(docString, maxLength);
            button.classList.add('clicked');
            button.addEventListener('click',function() {
                for (i=0;i<3;i++){
                    texts[i].textContent = docString;
                };
                button.classList.remove('clicked');
                clickButton();
            });
        })
    })
}

clickButton();