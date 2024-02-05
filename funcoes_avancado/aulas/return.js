function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
console.log(duplica)
console.log(triplica)