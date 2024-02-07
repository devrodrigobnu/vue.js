"use strict";
// 2) Crie uma função que aceite um parâmetro que pode ser do 
// tipo string ou number. Se o parâmetro for uma string, retorne 
// a string concatenada com " - texto". Se for um número, retorne 
// o dobro desse número.
// Function signature
function acceptNumOrString(num1) {
    // Checking conditions
    if (typeof num1 == 'number') {
        return (num1 * 2);
    }
    else {
        return num1 + ' - text';
    }
}
// Example
console.log(acceptNumOrString(5));
console.log(acceptNumOrString('hello'));
