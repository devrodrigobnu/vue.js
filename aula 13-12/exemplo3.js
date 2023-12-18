let listaCanais = [
    {
        usuario: 'Maceo Plex',
        inscritos: 106000,
        videos: 49
    },
    {
        usuario: ' Hashtag Programação ',
        inscritos: 454000,
        videos: 777
    },
    {
        usuario: 'Michael Bibi',
        inscritos: 75000,
        videos: 80
    },
    {
        usuario: 'RUBACK',
        inscritos: 1290,
        videos: 7
    },
    {
        usuario: 'Mochakk',
        inscritos: 103000,
        videos: 202
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const paginasLista = document.getElementById('paginas');
    const botaoAdicionar = document.getElementById('botaoAdicionar');

    listaCanais.forEach((canal) => {
        const li = document.createElement('li');
        li.innerText = `${canal.usuario}`;

        li.addEventListener("click", () => {
            const url = `https://www.youtube.com/${canal.usuario}/`;
            window.open(url, '_blank');
        });

        paginasLista.appendChild(li);
    });

    botaoAdicionar.addEventListener('click', () => {
        const novoCanal = prompt('Digite o nome do novo canal:');
        if (novoCanal) {
            const novoCanalObj = {
                usuario: novoCanal,
                inscritos: 0,
                videos: 0
            };

            listaCanais.push(novoCanalObj);

            const novoLi = document.createElement('li');
            novoLi.innerText = `${novoCanalObj.usuario}`;

            novoLi.addEventListener("click", () => {
                const url = `https://www.youtube.com/${novoCanalObj.usuario}/`;
                window.open(url, '_blank');
            });

            paginasLista.appendChild(novoLi);
        }
    });
});