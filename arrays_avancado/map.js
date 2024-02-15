//dobre os números
const numeros = [5, 50, 80, 1, 3, 5, 7, 15, 222, 37, 23]
const NumeroEmDobro = numeros.map(valor => valor * 2)
    console.log(NumeroEmDobro)

//////////
const pessoas = [
    {nome: 'luiz', idade: 43},
    {nome: 'naralice', idade: 23},
    {nome: 'lice', idade: 19},
    {nome: 'guanabara', idade: 21},
    {nome: 'mirandaa', idade: 54},
    {nome: 'rosana', idade: 33},
]
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj => obj.idade)
console.log(idades)

const comIds = pessoas.map(function(obj, indice){
    const newObj = { ...obj}
    newObj.id = indice
    return newObj
})
console.log(comIds)