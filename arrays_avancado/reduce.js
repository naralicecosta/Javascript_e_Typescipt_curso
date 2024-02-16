//some todos os numeros (reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor){
    if(valor % 2 !== 0){
        acumulador += valor
        console.log(valor)
    }
    return acumulador
}, 0)
console.log(total)

//reduce é para reduzir o array em um único elemento

///////////retorne a pessoa mais velha
const pessoas = [
    {nome: 'luiz', idade: 43},
    {nome: 'naralice', idade: 23},
    {nome: 'lice', idade: 19},
    {nome: 'guanabara', idade: 21},
    {nome: 'mirandaa', idade: 54},
    {nome: 'rosana', idade: 33},
]
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)