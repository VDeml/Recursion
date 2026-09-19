function mergeSort(array = []) {
    if(array.length <=1) {
        return array
    }
    function algorithmMerge(sortedArrOne, sortedArrTwo) {
        let i = 0;
        let j = 0;
        let sortedMergedArr = []
        while(i < sortedArrOne.length && j < sortedArrTwo.length) {
            if(sortedArrOne[i] <= sortedArrTwo[j]) {
                sortedMergedArr.push(sortedArrOne[i])
                i++
            }
            else {
                sortedMergedArr.push(sortedArrTwo[j])
                j++
            }
        }
        for(; i < sortedArrOne.length; i++) {
            sortedMergedArr.push(sortedArrOne[i])
        }
        for(; j < sortedArrTwo.length; j++) {
            sortedMergedArr.push(sortedArrTwo[j])
        }
        return sortedMergedArr;
    }

    const leftHalf = array.slice(0, (array.length / 2))
    const rightHalf = array.slice((array.length / 2), array.length)

    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRighHalf = mergeSort(rightHalf)

    return algorithmMerge(sortedLeftHalf, sortedRighHalf)
}



export { mergeSort }