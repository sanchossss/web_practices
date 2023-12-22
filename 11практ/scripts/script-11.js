var listCards = document.querySelector('.list-cards');
var n = document.querySelectorAll(".card").length;
var delBttn = document.querySelectorAll('.basket');
var delAllBttn = document.querySelector('.delete-button');
var amount = document.querySelector('.amount-text-2');
var price = document.querySelector('.price-text-2');
var cardAmount = document.querySelectorAll('.amount'); 
var addBttn = document.querySelectorAll('.plus');
var removeBttn = document.querySelectorAll('.minus');
var regSortBttn = document.querySelector('.reg-sort');
var revSortBttn = document.querySelector('.rev-sort');
var cardsText = document.querySelectorAll('.card-text');


var k = 0;
function swapElements(element1, element2) {
    var parent = element1.parentNode;

    // Создаем временный элемент и вставляем его перед первым элементом
    var temp = document.createElement('div');
    parent.insertBefore(temp, element1);

    // Перемещаем первый элемент перед вторым элементом
    parent.insertBefore(element1, element2);

    // Перемещаем второй элемент перед временным элементом, который был первым элементом
    parent.insertBefore(element2, temp);

    // Удаляем временный элемент
    temp.remove();
}
function switchStyleReg(){
    regSortBttn.style.background = '#382373';
    regSortBttn.style.border = 'none';
    regSortBttn.style.color = '#FFF';

    revSortBttn.style.background = 'none';
    revSortBttn.style.border = '2px solid #382373';
    revSortBttn.style.color = '#000';
}
function switchStyleRev(){
    revSortBttn.style.background = '#382373';
    revSortBttn.style.border = 'none';
    revSortBttn.style.color = '#FFF';

    regSortBttn.style.background = 'none';
    regSortBttn.style.border = '2px solid #382373';
    regSortBttn.style.color = '#000';
    
}
function updateArr(arr) {
    arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(document.querySelector(".card"));
        arr[i].className = `card card-${i}`;
    }
}

class ListOfBooks{
    cards = [];

    constructor(){
        for(let i = 0; i < n; i++){
            this.cards.push(document.querySelector(`.card-${i}`));
        }
    }

    /* Задание 1 */
    delAll(){
        delAllBttn.onclick = () => {
            var list = document.querySelector('.list-cards');
            while (list.lastChild){
                list.removeChild(list.lastChild);
                if (list.lastChild == document.querySelector('.sort')) break;
            }
            amount.textContent = 0;
            price.textContent = 0 + " ₽";
            this.cards.splice(0, n);
        }
    }

    delOne() {
        this.cards.forEach((card, index) => {
            delBttn[index].onclick = () => {
                card.remove();
                amount.textContent -= cardAmount[index].textContent;
                let priceVal = price.textContent.slice(0, -2) - 1000 * cardAmount[index].textContent + " ₽";
                price.textContent = priceVal;
                k -= cardAmount[index].textContent;
                n -= 1;
            };
        });
    }


    /* Задание 2 */
    Diff(){
        for (let i = 0; i < n; i++){
            k += Number(cardAmount[i].textContent)
        }
        for(let i = 0; i < n; i++){
            addBttn[i].onclick = () => {
                amount.textContent = (Number(amount.textContent) || 0) + 1;
                price.textContent = (Number(price.textContent.slice(0, -2)) || 0) + 1000 + " ₽";
                cardAmount[i].textContent = Number(cardAmount[i].textContent) + 1;
                k += 1;
            };
        }
        
        for(let i = 0; i < n; i++){
            removeBttn[i].onclick = () => {
                if (Number(amount.textContent) == k){
                    amount.textContent -= 1;
                    let priceVal = String(Number(price.textContent.slice(0, -2) - 1000)) + " ₽";
                    price.textContent = priceVal;
                    cardAmount[i].textContent -= 1;
                    k -= 1;
                    if (cardAmount[i].textContent == 0){
                        this.cards[i].remove();
                        n -= 1;
                    }
                }
            };
        }
    }

    // Задание 4
    sortCards() {
        let len = this.cards.length;
        const regSortBttn = document.querySelector('.reg-sort');
        const revSortBttn = document.querySelector('.rev-sort');

        regSortBttn.addEventListener('click', () => {
            switchStyleReg();
            this.sortByCardText(false);
            updateArr(this.cards);
        });

        revSortBttn.addEventListener('click', () => {
            switchStyleRev();
            this.sortByCardText(true);
            updateArr(this.cards);
        });
    }

    sortByCardText(flag) {
        let len = this.cards.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < (len - i - 1); j++) {
                let text1 = this.cards[j].querySelector('.card-text').textContent.toLowerCase().replace(/\s/g, '');
                let text2 = this.cards[j + 1].querySelector('.card-text').textContent.toLowerCase().replace(/\s/g, '');

                let compareResult = flag ? text1.localeCompare(text2) : text2.localeCompare(text1);

                if (compareResult < 0) {
                    [this.cards[j], this.cards[j + 1]] = [this.cards[j + 1], this.cards[j]];
                    swapElements(this.cards[j], this.cards[j + 1]);
                }
            }
        }
    }
}






/* Вызов функций заданий 1, 2, 4*/
var list = new ListOfBooks();
n = list.cards.length;
list.Diff();
list.delAll();
for(let i = 0; i < n; i++){
    list.delOne(i);
}
list.sortCards();


// Задание 3
function filterArray(arr, a, b) {
    return arr.filter(element => element >= a && element <= b);
}

let originalArray = [];
for(let i = 0; i < 30; i++){
    originalArray.push(i);
}
let filteredArray = filterArray(originalArray, 10, 25);

console.log(filteredArray);
console.log(originalArray);