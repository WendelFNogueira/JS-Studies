const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//Concatenando arrays
const a3 = a1.concat(a2, [7, 8, 9], 'Wendel');
//concatenando de forma mais simples
//usando rest
const a4 = [...a1, 'Wendel', ...a2, ...a3];
// console.log(a3);
// console.log(a4);

//Filter, map, reduce

//retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(value => value > 10);

// console.log(numerosFiltrados);


//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com 'a'

const pessoas = [
    {nome: 'Wendel', idade: 24},
    {nome: 'Ana', idade: 35},
    {nome: 'Julia', idade: 65},
    {nome: 'Zeca', idade: 12},
    {nome: 'Paty', idade: 74},
    {nome: 'Alexandre', idade: 34}
];

const nameLength = pessoas.filter(obj => obj.nome.length >=5);
const oldAged = pessoas.filter(obj => obj.idade > 50);
const nameEndWithA = pessoas.filter(obj => obj.nome.endsWith('a'));

// console.log('\nretorne as pessoas que tem o nome com 5 letras ou mais');
// console.log(nameLength);
// console.log('\nretorne as pessoas com mais de 50 anos');
// console.log(oldAged);
// console.log('\nretorne as pessoas cujo nome termina com "a"');
// console.log(nameEndWithA);


//Dobre os números

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumber = numbers.map(value => value*2);

// console.log(doubleNumber);



//retorne apenas os nomes
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto
const persons = [
    {nome: 'Wendel', idade: 24},
    {nome: 'Ana', idade: 35},
    {nome: 'Julia', idade: 65},
    {nome: 'Zeca', idade: 12},
    {nome: 'Paty', idade: 74},
    {nome: 'Alexandre', idade: 34}
];

const names = persons.map(obj => obj.nome);
const ages = persons.map(obj => ({idade: obj.idade}));
const id = persons.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

// console.log(names);
// console.log(ages);
// console.log(id);





//Some todos os números
//retorne um array com os pares
//retorne um array com o dobro dos valores

const fullNumbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = fullNumbers.reduce((cont, value) => cont += value);
const pares = fullNumbers.reduce((cont, value) => {
    if(value % 2 === 0) cont.push(value); 
    return cont;
}, []);
const dobro = fullNumbers.reduce((cont, value) => {
    cont.push(value*2); 
    return cont;
}, []);

// console.log(total);
// console.log(pares);
// console.log(dobro);





//retorne a pessoa mais velha
const people = [
    {nome: 'Wendel', idade: 24},
    {nome: 'Ana', idade: 35},
    {nome: 'Julia', idade: 65},
    {nome: 'Zeca', idade: 12},
    {nome: 'Paty', idade: 74},
    {nome: 'Alexandre', idade: 34}
];

const older = people.reduce((cont, obj) => {
    if(cont.idade > obj.idade) return cont;
    return obj;
});

// console.log(older);






//Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const arrayNumber = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pairs = arrayNumber.filter(value => value%2===0);
const double = arrayNumber.map(value => value*2);
const add = arrayNumber.reduce((cont, value) => cont+=value);

const doubleAddPair = arrayNumber.filter(value => value%2===0).map(value => value*2).reduce((cont, value) => cont+value);

// console.log(pairs);
// console.log(double);
// console.log(add);
// console.log(doubleAddPair);



const w1 = [5, 50, 80, 1, 2, 9, 4, 5, 8, 7, 11, 15, 22, 27];
let contador = 0;

w1.forEach(element => {
    contador+= element;
});

// console.log(contador);