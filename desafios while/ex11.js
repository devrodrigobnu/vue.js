// Altere o programa anterior para mostrar no final a soma dos números.

const req = require('prompt-sync')
const prompt = req()

let sum = 0;

const number_1 = parseInt(prompt('Enter the first number: '));
const number_2 = parseInt(prompt('Enter the second number: '));

if (isNaN(number_1) || isNaN(number_2)) {
    console.log('Please enter only numbers!');
} else {
    const smaller = Math.min(number_1, number_2);
    const larger = Math.max(number_1, number_2);
    
    console.log(`Numbers in the range from ${smaller} to ${larger}`);

    for (let i = smaller; i <= larger; i++) {
        console.log(i);
        sum += i;
    }
}
console.log(`The sum is ${sum}`);
