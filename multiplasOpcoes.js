// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor) {
    switch (nomePropriedade) {
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if (novoValor > 1) {
                carro.rodas = novoValor;
            } else {
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            if (novoValor > 0) {
                carro.portas = novoValor;
            } else {
                return "Minimo de portas precisa ser 1"
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if (novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
                carro.cor = novoValor;
            } else {
                return "Cor invalida";
            }
            break;
        case "ano":
            // criar um case para o "ano"
            // alterar o ano do carro para o ano informado
            // se o ano for igual a 2019, alterar o estado para "novo" 
            // senao alterar o estado para "usado"
            carro.ano = novoValor;
            if (carro.ano == 2019) {
                carro.estado = "novo"
            } else {
                carro.estado = "usado"
            }
            break;
        default:
            // retornar a fraase "Propriedade invalida";
            return "Propriedade invalida";
    }

    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    return "Alteracao concluida";
}

console.log("Antes\n\n");
console.log(carro);
console.log("\n\n");
console.log(mudarPropriedade("rodas", 6));
console.log(mudarPropriedade("portas", 4));
console.log(mudarPropriedade("cor", "preto"));
console.log(mudarPropriedade("ano", 2015));
console.log("\nDepois\n\n");
console.log(carro);