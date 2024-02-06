//funcção que retornam objeto
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
   
        ///getter
        get imc() {
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join('')
        },
        fala(assunto = 'falando sobre nADAAAAA'){
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('nara', 'cavalcante', 1.6, 60)
console.log(p1.imc())