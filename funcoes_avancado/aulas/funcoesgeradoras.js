function* geradora1() {
    //codigo qualquer
   yield 'valor 1' 
    //codigo qualquer
    yield 'valor 2' 
     //codigo qualquer
   yield 'valor 3' 

}
function* geradora2() {
    let i = 0

    while (true) {
        yield i;
        i++
    }
}
const g2 = geradora2()
console.log(g2.next().value)