const nomes = ['Eduardo', 'Maria', 'Joana', 'gabi', 'Albania', ]
// nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
const removidos = nomes.splice(4, 1) //removendo do indice 4(Albania) 1 elemento
console.log(nomes, removidos)

const nomes1 = ['Eduardo', 'Maria', 'Joana', 'gabi', 'Albania', ]
nomes.splice(nomes1.length, 0, 'luiz')
console.log(nomes1)
