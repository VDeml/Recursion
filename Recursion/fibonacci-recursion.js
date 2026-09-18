function fibsRec(layer) {
    let result = [];
    function fibonacci(layer) {
        if(layer < 2) {
            return layer
        }
        else {
            return (fibonacci(layer-1)+fibonacci(layer-2))
        }
    }
    for(let i = 0; i < layer; i++) {
        result.push(fibonacci(i))
    } 
    return result        
}
console.log(fibsRec(8)) 