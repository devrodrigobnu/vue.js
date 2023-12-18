    // Utilizando, JSON e foreach criar um sistema de cadastro de aluno
    // Cada aluno deve ter: Nome, idade, nota1, nota2, nota3

    let alunos = [];

    while (true) {
        let menu = prompt('1-Novo Aluno\n2-Calcular média dos alunos\n3-Sair');
    
        if (menu === null) {
            alert('Operação cancelada.');
            break;
        }
    
        if (menu == '1') {
            let nome = prompt('Digite o nome do aluno: ');
            let idade = Number(prompt('Digite a idade do aluno: '));
            let n1 = Number(prompt('Digite a 1ª nota: '));
            let n2 = Number(prompt('Digite a 2ª nota: '));
            let n3 = Number(prompt('Digite a 3ª nota: '));
    
            let aluno = {
                nome: nome,
                idade: idade,
                notas: [n1, n2, n3]
            };
    
            alunos.push(aluno);
            alert(`Aluno cadastrado com sucesso!`);
        } else if (menu == '2') {
            if (alunos.length === 0) {
                alert('Nenhum aluno cadastrado.');
            } else {
                // Calcular e exibir a média dos alunos
                for (let i = 0; i < alunos.length; i++) {
                    let aluno = alunos[i];
                    let media = aluno.notas.reduce((total, nota) => total + nota, 0) / aluno.notas.length;
                    alert(`\nMédia do Aluno ${aluno.nome}: ${media.toFixed(2)}`);
                }
            }
        } else if (menu == '3') {
            alert('Saindo do programa.');
            break;
        }
    }
    