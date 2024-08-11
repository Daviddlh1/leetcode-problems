/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        if(nums[right] !== val) {
            const temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
    console.log(nums, left)
    return left
}

removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2], 2)