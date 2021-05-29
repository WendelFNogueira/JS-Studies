const relogio = document.querySelector(".relogio");
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function cronometro(segundos) {
    const crono = new Date(segundos * 1000);

    return crono.toLocaleTimeString("pt-br", { hour12: false, timeZone: 'UTC' });
}

function iniciaCronometro() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerText = cronometro(segundos);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaCronometro();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerText = '00:00:00';
        segundos = 0;
    }

});

// iniciar.addEventListener('click', (event) => {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaCronometro();
// });

// pausar.addEventListener('click', (event) => {
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', (event) => {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     relogio.innerText = '00:00:00';
//     segundos = 0;
// });