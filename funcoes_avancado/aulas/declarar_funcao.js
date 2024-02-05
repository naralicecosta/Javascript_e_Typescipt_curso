//formas de declaração de função

//function hoisting

falaOi()
function falaOi() {
    console.log('oie')
}

// as função são objetos de primeira classe (first-class objects)

//function experssion
const souumDado = function() {
    console.log('sou um dado')
}
executaFuncao(souumDado)


//arrow functiom
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow()

//funcao dentro de um objeto

const obj = {
    falar: function(){
        console.log("estou falaandoo")
    }
}
obj.falar()