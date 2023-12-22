'use strict';
var x = "Осторожно!!!";
let y = "100"-10;
alert(x);
var result = prompt("Сколько тебе лет?", y);
alert(`Тебе ${result} лет`);

let value = confirm("Вы здесь главный?");
alert(value);


let numb = 53252;
let num_to_str = String(numb) + " ооо круто";
alert(num_to_str);


let str="1.113";
let str_to_num = Number(str);
alert(str_to_num);

alert(Boolean("true"));
alert(Boolean(0));


alert(1 || (x=100-100));
alert(false || (x=100-100));
alert(x);


let a=prompt("Введите число");
switch(a){
    case "0":
        alert("Это первая операция");
        break;
    case "1":
        alert("Это вторая операция");
        break;
    case "2":
        alert("Это третья операция");
        break;
    case 3:
        alert("Это четвертая операция не выполнится!");
        break;
    case "4":
        alert("Это пятая операция!");
        break;
}

let namee = "Аня";
let textt = "я тварь";
function printString(name, text = "default value"){
    let str = name +": "+text;
    alert(str);

}

printString(namee,textt);