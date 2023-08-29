const req = require('prompt-sync')
const prompt = req()

let quantidadeBolacha = 10
while(quantidadeBolacha > 0){
    quantidadeBolacha--
    console.log('Comi uma bolacha')
    console.log('Ainda tem no pacote: '+quantidadeBolacha)
    console.log('\n')
} 