// 3) Crie uma função chamada somaArray que aceite um
//  array de números e retorne a soma deles.

// Function signature
function somaArray(nums: number[]): number {
    let soma: number = 0

    nums.forEach(element => {
        soma += element
    });

    return soma
}

console.log(somaArray([5,1,2,3,4]))
