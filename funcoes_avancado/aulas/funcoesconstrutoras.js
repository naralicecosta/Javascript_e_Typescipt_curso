//funções construtoras -> objetos
//sempre cria com letra maiscula
//new -> cria um objeto vazio, faz o this apontar a esse objeto vazio e ja nos retorna

function Pessoa(nome, sobrenome){

    //atributos ou metodos privados (nao estao fora do corpo)
    const ID = 123456;
    const metodoInterno = function(){
    }
    //
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metod = function(){
        console.log(this.nome + 'sou um metodo')
    }
}
const pessoa1 = new Pessoa('nara', 'costa')
const pessoa2 = new Pessoa('victoria', 'cavalcante')
pessoa1.metod()

console.log(pessoa1.nome)