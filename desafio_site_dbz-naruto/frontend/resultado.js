async function atualizarLarguraSecoes() {
  try {
    const responseVotacao = await fetch('http://localhost:3000/votacao')
    const votos = await responseVotacao.json()

    const responsePorcentagemNaruto = await fetch('http://localhost:3000/porcentagemnaruto');
    const porcentagemNaruto = await responsePorcentagemNaruto.json()

    const responsePorcentagemDBZ = await fetch('http://localhost:3000/porcentagemdbz');
    const porcentagemDBZ = await responsePorcentagemDBZ.json()

    const gridVotos = document.querySelector('.grid-votos')
    gridVotos.style.gridTemplateColumns = `${porcentagemDBZ}% ${porcentagemNaruto}%`
    gridVotos.style.fontSize = `${porcentagemDBZ}px / ${porcentagemNaruto}px`

    const porNaruto = document.getElementById("por-naruto")
    const porDBZ = document.getElementById("por-dbz")

    porNaruto.innerText = `${porcentagemNaruto}%`
    porDBZ.innerText = `${porcentagemDBZ}%`

    const totalVotosTexto = document.getElementById("total-votos-texto");
    totalVotosTexto.innerText = `Total de votos: ${votos.total}`

  } catch (error) {
    console.error('Erro ao atualizar as seções:', error)
  }
}

