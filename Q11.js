let number1 = Number(prompt('first number'));
let number2 = Number(prompt('second number'));
let lower = number1 < number2 ? number1 : number2;//lower will go by the smaller number
let devisor = 1;
for(let i = 1; i <lower; i++) { 
    if(number1 % i ===0 && number2 % i === 0) {
        devisor = i;
    }
}
alert(devisor);