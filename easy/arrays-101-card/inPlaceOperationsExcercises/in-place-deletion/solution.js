/**
 *@param {number[]} nums
 *@return {void}
 */
function removeDuplicates(nums) {
    let currentIndex = 0
    let nextIndex = 1

    while(nextIndex < nums.length) {
        if (nums[nums.length - 1] === nums[currentIndex]) return 1
        if (nums[currentIndex] !== nums[nextIndex]) {
            nums[currentIndex + 1] = nums[nextIndex]
            currentIndex += 1
            nextIndex += 1
        }

        nextIndex += 1
    }
    console.log("currentIndex", currentIndex)
    console.log("nextIndex: ", nextIndex)
    
    console.log(nums)
    if (currentIndex === 0) return nums.length
    else return currentIndex + 1
}

// revisar si el siguiente numero es igual al actual
// Si es igual no hacer nada

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// removeDuplicates([1, 2, 3])
// removeDuplicates([1, 1])


function removeDuplicates2(nums) {
    let pointer = 1
    let k = 1

    while (pointer < nums.length) {
        if (nums[pointer] !== nums[k - 1]) {
            nums[k] = nums[pointer]
            k++
        }
        pointer++
    }

    return k
}

removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicates2([1, 2, 3])
removeDuplicates2([1, 1])