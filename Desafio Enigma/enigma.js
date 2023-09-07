// Criar um sistema onde o usuário poderá adivinhar deuses da mitologia grega.
// -Salve 20 deuses/criaturas míticas dentro de uma lista
// -Permita o usuário tentar adivinhar pelo menos 5 dessas criaturas
// -No final de cada entrada, pergunte se o usuário gostaria de adivinhar mais uma.	
const prompt = require('prompt-sync')()

function jogo() {
  let criaturasDescobertas = 0
  const maximoTotalDeCriaturas = 5
  const maximoChances = 10

  let lista = [
    'Afrodite', 'Apolo', 'Ares',
    'Artemis', 'Atena', 'Demeter',
    'Dionisio', 'Hades', 'Helios',
    'Hermes', 'Hera', 'Hestia',
    'Horas', 'Poseidon', 'Zeus',
    'Perseu', 'Teseu', 'Heracles',
    'Atlanta', 'Ajax'
  ]
  lista = lista.map(item => item.toLowerCase())

  let criaturasAdivinhadas = []

  let usuario = prompt('Nome do jogador: ')

  console.log(`Bem-vindo ${usuario} ao jogo de adivinhação!`);
  console.log(`${usuario}, você terá 10 chances para adivinhar pelo menos 5 criaturas da mitologia grega!"`)

  for (let i = 1; i <= maximoChances; i++) {
    console.log(`Chance ${i}/${maximoChances}`)
    let palpite = prompt('Digite o nome de uma criatura da mitologia grega: ').toLowerCase()

    if (lista.includes(palpite) && !criaturasAdivinhadas.includes(palpite)) {
      criaturasAdivinhadas.push(palpite)
      criaturasDescobertas++
      console.log(`${palpite}, é uma criatura mitológica.`)
    } else {
      console.log(`${palpite}, não é uma criatura mitológica ou você já adivinhou essa antes. Tente outra.`)
    }

    if (criaturasDescobertas === maximoTotalDeCriaturas) {
      console.log(`Parabéns, ${usuario}! Você acertou as 5 criaturas.`)
      break
    }
  }

  if (criaturasDescobertas < maximoTotalDeCriaturas) {
    console.log(`Você não adivinhou as 5 criaturas em ${maximoChances} chances. O jogo acabou.`)
  }

  const resposta = prompt('Deseja reiniciar o jogo? (S/N): ').toLowerCase()
  if (resposta === 's' || resposta === 'sim') {
    console.log('Reiniciando o jogo...')
    jogo()
  } else {
    console.log('Saindo do jogo...')
  }
}

jogo()


