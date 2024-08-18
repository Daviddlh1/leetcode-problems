/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    let dict = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 0
        }
        dict[nums[i]] += 1
    }

    const keys = Object.keys(dict).sort((a, b) => a - b)
    if (keys.length >= 3) {
        console.log(keys[keys.length - 3])
        return keys[keys.length - 3]
    }
    return keys[keys.length - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax2(nums) {
    let max1 = null
    let max2 = null
    let max3 = null

    for (let i = 0; i < nums.length; i++) {
        if (max1 === null || nums[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = nums[i]
        } else if (max2 === null || nums[i] > max2) {
            max3 = max2
            max2 = nums[i]
        } else if (max3 === null || nums[i] > max3) {
            max3 = nums[i]
        }
    }

    console.log(max1, max2, max3)
    return max3 === null ? max1 : max3
}

thirdMax2([1, 2, 3])
thirdMax2([2,2,3,1])
console.log(thirdMax2([1,1,2]))