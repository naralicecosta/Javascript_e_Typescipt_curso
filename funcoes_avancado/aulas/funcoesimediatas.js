//IIFE -> immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'costa'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criaNome('nara'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.70)