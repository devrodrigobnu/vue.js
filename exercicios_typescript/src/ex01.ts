// 1) Crie uma função em TypeScript que receba dois parâmetros, ambos números, e retorne a soma desses números.

// Function signature
function sumNumbers(num1: number, num2: number): number {
    // Checking conditions if both parameters are numbers
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        throw new Error('Both parameters need to be numbers')
    }
    // Performing the sum and returning the result
    const result: number = num1 + num2
    return result
}

// Example of using the function
const sumResult: number = sumNumbers(4,5)
console.log(sumResult)