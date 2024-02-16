//retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 3, 5, 7, 15, 222, 37, 23]
const numerosPares = numeros 
    .filter (valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)
console.log(numerosPares)