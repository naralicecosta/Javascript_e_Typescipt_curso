//dados primitivos são imutaveis, não podemos mudar eles
//string, number, bolean undefined, null (bigint, symbol)

let a = [1,2,3]
let b = a
console.log(a, b)

a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)