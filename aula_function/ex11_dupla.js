// 11 - retornar quantas vogais tme em uma palavra
const req = require('prompt-sync')
const prompt = req()

function checarVogal(vogal){
    if (/^[a-zA-Z]$/.test(vogal)) {
        vogal = vogal.toLowerCase()
        if (vogal == 'a' || vogal == 'e' || vogal == 'i' || vogal == 'o' || vogal == 'u'){
            console.log('É vogal')
        } else {
            console.log('É consoante')
        }
        return vogal
    }else {
        console.log('Por favor, insira uma unica letra do alfabeto.')
    }
}

let input = prompt('Digite uma letra pra descobrir se é vogal ou não: ')
checarVogal(input)