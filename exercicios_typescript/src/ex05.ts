// 5) Declare um enum chamado DiasDaSemana com os dias da semana como membros.
// Crie uma função que aceite um parâmetro do tipo DiasDaSemana e retorne uma 
// mensagem relacionada ao dia.

enum daysOfWeek {
    SegundaFeira = 'Segunda-Feira',
    TercaFeira = 'Terça-Feira',
    QuartaFeira = 'Quarta-Feira',
    QuintaFeira = 'Quinta-Feira',
    SextaFeira = 'Sexta-Feira',
    Sabado = 'Sábado',
    Domingo = 'Domingo'
    
}

function messageDay(dia: daysOfWeek): string {
    return `Hoje é ${dia}!`;
}


const dayToday: daysOfWeek = daysOfWeek.QuartaFeira;
const message: string = messageDay(dayToday);
console.log(message);