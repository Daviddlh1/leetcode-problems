const testArr = [10, 2, 5, 3];
const testArr2 = [3,1,7,11];
const testArr3 = [7,1,14,11]
const testArr4 = [-2,0,10,-19,4,6,-8]

/**
 * 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function checkIfNAndItsDoubleExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[j] === (2 * arr[i])) {
                return true
            }
        }
    }
    return false
}

let result = checkIfNAndItsDoubleExist(testArr)
console.log(result)
result = checkIfNAndItsDoubleExist(testArr2)
console.log(result)
result = checkIfNAndItsDoubleExist(testArr3)
console.log(result)
result = checkIfNAndItsDoubleExist(testArr4)
console.log(result)
