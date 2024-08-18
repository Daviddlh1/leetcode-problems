/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    let reminder = 0
    let tempResult = 0

    for (let i = digits.length - 1; i >= 0; i--) {
        if (reminder !== 0) {
            tempResult = digits[i] + reminder
            reminder = 0
        } else {
            tempResult = digits[i] + 1
        }

        // let tempResult = 
        
        if (tempResult >= 10) {
            reminder += 1
            digits[i] = 0
        } else {
            digits[i] = tempResult
            break
        }
    }

    if (reminder !== 0) {
        digits.unshift(reminder)
    }

    console.log(digits, reminder)
    return digits
}
// plusOne([4,3,2,1])
// plusOne([1,2,3])
// plusOne([9,9])
// plusOne([8,9,9,9])
// plusOne([9])

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne2(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if(digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
}

console.log(plusOne2([4, 3, 2, 1]))
console.log(plusOne2([1, 2, 3]))
console.log(plusOne2([9, 9]))
console.log(plusOne2([8, 9, 9, 9]))
console.log(plusOne2([9]))