// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque //quero que essa variavel não possa ser alterada

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configurável
        get: function() { return estoquePrivado},
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }
            estoquePrivado = valor
        }
    })
}