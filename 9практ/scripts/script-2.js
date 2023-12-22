"use strict";
function formReg(){
    let keyEsc;
    let str = prompt("Введите \"Админ\"");
    if (str === "Админ"){
        str = prompt("Введите пароль (\"Я главный\" или другой)")
        if (str === "Я главный"){
            alert("Здравствуйте!!!");
        }
        else if (str === null){
            alert("Отменено");
        }
        else{
            alert("Неверный пароль");
            let str_ex = prompt("Желаете попробовать еще раз? (\"Да\" или \"Нет\")");
            if (str_ex === "Да"){
                formReg();
            }
        }
    }
    else if (str !== "Админ" || str === null){
        alert("Отменено");
    }
}
formReg();