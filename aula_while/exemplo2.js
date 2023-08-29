const req = require('prompt-sync')
const prompt = req()

let num = 0

while(num != '9'){
    num = prompt('Digite 9 para parar')
}