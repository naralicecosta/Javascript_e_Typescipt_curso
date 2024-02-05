
//argumentos que sustenta todos os argumentos enviados
// function funcao(a,b,c) {
//     let total = 0
//     for (let argumento of arguments) {
//         total += argumento
//     }
//     console.log(total, a, b, c)
// }
// funcao( 1,2,3,4,4)

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d)
// }
// funcao(1,2,3,4,5,6,7)

function funcao(a,b = 2, c = 4){
    //b = b || 0

    console.log(a + b + c)
}
funcao(2, 10)