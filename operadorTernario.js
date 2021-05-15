const pontuacaoUsuario = 10000;
// document.querySelector('#usuario');

const nivelAcesso = pontuacaoUsuario >= 1000 ? 'Admin' : 'User';

console.log(nivelAcesso);