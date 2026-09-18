function fibs(layer) {
    //first layer
    let array = [0]
    if(layer === 0) {
        return [];
    }
    for(let i = 0; i < layer-1; i++) {
        if(array.length < 2) {
            const number = 1;
            array.push(number)
        }
        else {
            const nextNum = array[i-1] + array[i]
            array.push(nextNum)
        }
    }
    return array;
}
