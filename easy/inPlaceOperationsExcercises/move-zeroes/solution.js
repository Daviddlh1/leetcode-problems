/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
async function moveZeroes(nums) {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    console.log(right, left, nums)
    if (nums[right] !== 0) {
      console.log("swap")
      const temp = nums[right] 
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
  }
  console.log(nums)
}

moveZeroes([0,1,0,3,12])
moveZeroes([0,0,0,0,0,1])