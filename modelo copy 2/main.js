function criaCalculadora(){
  return{
    //atributos
    display: document.querySelector('.display'),

    //metodos
    inicia(){
      this.cliqueBotoes()
      this.pressionaEnter()
    },
    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if(e.keycode === 13){
          this.realizaConta()
        }
      })
    },
    clearDisplay(){
      this.display.value = ''
    
    },
    apagaUm(){
      this.display.value = this.display.value.slice(0, -1)
    },
    realizaConta(){
      let conta = this.display.value;
      try {
        conta = eval(conta)

        if(!conta){
          alert('conta invalida')
          return
        }
        this.display.value = String(conta)
      }catch(e){
        alert('conta invalida')
        return
      }
    },

    
    cliqueBotoes(){
      document.addEventListener('click', e =>{
        const element = e.target

        if (element.classList.contains('btn-num')){
         this.btnParaDisplay(element.innerText)
        }

        if(element.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if(element.classList.contains('btn-del')){
          this.apagaUm()
        }
        if(element.classList.contains('btn-eq')){
          this.realizaConta()
        }

      })

    },
    btnParaDisplay(valor){
      this.display.value += valor

    }

  }
}
const calculadora = criaCalculadora()
calculadora.inicia()