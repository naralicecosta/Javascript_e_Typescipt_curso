function max(x, y){
    if (x > y)
        return x
    return y

    //return x > y ? x: y;        TERNÁRIO
} 

const max2 = (x, y) =>  x > y ? x : y;

console.log(max(10,2))