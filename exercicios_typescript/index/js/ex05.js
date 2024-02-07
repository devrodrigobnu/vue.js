"use strict";
// 5) Declare um enum chamado DiasDaSemana com os dias da semana como membros.
// Crie uma função que aceite um parâmetro do tipo DiasDaSemana e retorne uma 
// mensagem relacionada ao dia.
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek["SegundaFeira"] = "Segunda-Feira";
    daysOfWeek["TercaFeira"] = "Ter\u00E7a-Feira";
    daysOfWeek["QuartaFeira"] = "Quarta-Feira";
    daysOfWeek["QuintaFeira"] = "Quinta-Feira";
    daysOfWeek["SextaFeira"] = "Sexta-Feira";
    daysOfWeek["Sabado"] = "S\u00E1bado";
    daysOfWeek["Domingo"] = "Domingo";
})(daysOfWeek || (daysOfWeek = {}));
function messageDay(dia) {
    return `Hoje é ${dia}!`;
}
const dayToday = daysOfWeek.QuartaFeira;
const message = messageDay(dayToday);
console.log(message);
