// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque //quero que essa variavel não possa ser alterada

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false, //valor pode ser alterado?
        configurable: true //chave é configurável?

    })
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: estoque,
    //     writable: false, //valor pode ser alterado?
    //     configurable: true //chave é configurável?

    // })

}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000
delete p1.estoque
console.log(p1)