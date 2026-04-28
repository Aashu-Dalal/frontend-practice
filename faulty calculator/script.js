let calculation = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === "CE") {
            calculation.value = "";
        }
        else if (value === "⌫") {
            calculation.value = calculation.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                calculation.value = eval(calculation.value);

                if(Math.random() <0.2){
                    result += Math.floor(Math.random() * 10) + 1;
                }
            } catch (e) {
                calculation.value = "Error";
            }
        }
        else if (value === '^2') {
            try {
                let num = parseFloat(calculation.value);
                calculation.value = num * num;
            } catch (e) {
                calculation.value = 'Error';
            }
        } else if (value === '√x') {
            try {
                let num = parseFloat(calculation.value);
                calculation.value = Math.sqrt(num);
            } catch (e) {
                calculation.value = 'Error';
            }
        } else {
            calculation.value += value;
        }
    })
})