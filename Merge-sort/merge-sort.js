function mergeSort(array) {
    function splitInHalf(array) {
        const leftHalf = array.slice(0, (array.length / 2))
        const rightHalf = array.slice((array.length / 2), array.length)
        return { leftHalf, rightHalf }
    }
    const test = splitInHalf([0,1,2,3,4])
}
