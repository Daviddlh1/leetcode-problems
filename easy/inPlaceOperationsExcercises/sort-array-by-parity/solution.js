/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        console.log(right, left, nums)
        if (nums[right] % 2 === 0) {
            const temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
    return nums
}

sortArrayByParity([3,1,2,4])