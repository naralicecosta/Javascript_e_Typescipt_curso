/// filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

///retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 3, 5, 7, 15, 222, 37, 23]
const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)

///////////
//retorne as pessoas com 5 letras ou mais
//retorne as pessoas com MAIS DE 50 ANOS
//retorne as pessoas cujo nome comeces com a

const pessoas = [
    {nome: 'luiz', idade: 43},
    {nome: 'naralice', idade: 23},
    {nome: 'lice', idade: 19},
    {nome: 'guanabara', idade: 21},
    {nome: 'mirandaa', idade: 54},
    {nome: 'rosana', idade: 33},
]
const pessoaNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoaNomeGrande)

const idadeMaisCinquenta = pessoas.filter(obj => obj.idade > 50)
console.log(idadeMaisCinquenta)

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminaComA)
