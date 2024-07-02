const pessoas = [
    {id: 3, nome:'nara'},
    {id: 2, nome:'victoria'},
    {id:3, nome: 'costa'},
]
// const novasPessoas = {}
// for (const pessoa of pesssoas){
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map();
for (const pessoa of pesssoas){
    const {id} = pessoa
    novasPessoas.set(id = {...pessoa})
}