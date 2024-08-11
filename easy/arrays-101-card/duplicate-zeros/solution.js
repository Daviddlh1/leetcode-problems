function duplicateZeros(arr) {
    let i = 0

    while(i < arr.length) {
        if (arr[i] === 0) {
            moveElementsToRight(arr, i)
            i++
        }
        i++
    }
};

function moveElementsToRight(arr, index) {
    for (let i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1]
    }
}

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
// duplicateZeros([1,0,2,3])