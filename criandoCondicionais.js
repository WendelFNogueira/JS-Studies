function testarTamanho(valor) {
    if (valor > 15) {
        return "maior";
    } else if (valor < 3) {
        return "menor";
    } else {
        return "na faixa";
    }
}

console.log(testarTamanho(24))
console.log(testarTamanho(2))
console.log(testarTamanho(13))