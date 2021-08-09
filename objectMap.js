const pessoas = [
    { id: 2, nome: 'Luiz' },
    { id: 3, nome: 'Wendel' },
    { id: 1, nome: 'Julia' }
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);