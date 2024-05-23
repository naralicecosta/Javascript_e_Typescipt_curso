//Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //this representa um objeto vazio, mas nessa função ja preenchemos
}
const p1 = new Pessoa('luiz', 'miranda');
const p2 = new Pessoa('maria', 'miranda');


console.log(p2)