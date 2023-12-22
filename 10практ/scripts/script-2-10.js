class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;

        this.read = function () {
            var userInput = parseFloat(prompt("Введите число:"));

            if (!isNaN(userInput)) {
                this.value += userInput;
                document.getElementById("value").textContent = this.value;
            } else {
                alert("Вы ввели некорректное значение. Попробуйте еще раз.");
            }
        };
    }
}

var accumulator = new Accumulator(0);

document.getElementById("readButton").addEventListener("click", function () {
    accumulator.read();
});
