// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => {
            return estoquePrivado;
        },

        set: (valor) => {
            if(typeof valor !== 'number') {
                throw new TypeError('Tipo inválido!', 'objetos.js', 15);
            }
            
            estoquePrivado = valor;
            return estoquePrivado;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);


