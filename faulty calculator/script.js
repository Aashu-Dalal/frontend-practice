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
                let result = eval(calculation.value);

                if (Math.random() < 0.2) {
                    result += Math.floor(Math.random() * 10) + 1;
                }
                calculation.value = result;
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
            if (calculation.value < 0) {
                calculation.value = 'Error';
                return;
            }
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
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (!isNaN(key)){
        calculation.value += key;
    }
    else if(['+', '-', '*', '/', '.'].includes(key)){
        calculation.value += key;
    }
    else if(key === 'Enter'){
        try{
            let result = eval(calculation.value);

            if(Math.random() <0.2){
                result += Math.floor(Math.random()*10) +1
            }

            calculation.value = result;
        }catch(e){
            calculation.value = "Error"
        }
    }
    else if(key === 'Backspace'){
        calculation.value = calculation.value.slice(0, -1);
    }
})