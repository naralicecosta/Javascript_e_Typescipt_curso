let array = [1,2,3]
array.push(4)
array[0] = 'Luiz'

console.log(array)


const pessoal = {
    nome: 'nara',
    sobrenome: 'cavalcante',
    idade: 20,

    fala(){
        console.log(`a minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }
}
pessoal.fala()
pessoal.incrementaIdade() 
pessoal.fala()
pessoal.incrementaIdade()
pessoal.fala()
pessoal.incrementaIdade()

