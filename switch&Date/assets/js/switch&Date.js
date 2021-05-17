// function diasDaSemana(diaSemana) {
//     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'];
//     return diasSemana[diaSemana];
//     // switch (diaSemana) {
//     //     case 0:
//     //         return 'Domingo';

//     //     case 1:
//     //         return 'Segunda-feira';

//     //     case 2:
//     //         return 'Terça-feira';

//     //     case 3:
//     //         return 'Quarta-feira';

//     //     case 4:
//     //         return 'Quinta-feira';

//     //     case 5:
//     //         return 'Sexta-feira';

//     //     case 6:
//     //         return 'Sabádo';

//     // }
// }

// function mesesDoAno(mes) {
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//     return meses[mes];

//     // switch (mes) {
//     //     case 0:
//     //         return 'Janeiro';

//     //     case 1:
//     //         return 'Fevereiro';

//     //     case 2:
//     //         return 'Março';

//     //     case 3:
//     //         return 'Abril';

//     //     case 4:
//     //         return 'Maio';

//     //     case 5:
//     //         return 'Junho';

//     //     case 6:
//     //         return 'Julho';

//     //     case 7:
//     //         return 'Agosto';

//     //     case 8:
//     //         return 'Setembro';

//     //     case 9:
//     //         return 'Outubro';

//     //     case 10:
//     //         return 'Novembro';

//     //     case 11:
//     //         return 'Dezembro';

//     // }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// const data = new Date();
// const diaSemana = data.getDay();
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = zeroEsquerda(data.getHours());
// const minuto = zeroEsquerda(data.getMinutes());
// const segundo = zeroEsquerda(data.getSeconds());

// let diaSemanaTexto = diasDaSemana(diaSemana);
// let mesTexto = mesesDoAno(mes);




const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });

// h1.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}  ${hora}:${minuto}:${segundo}`;

// location.reload();