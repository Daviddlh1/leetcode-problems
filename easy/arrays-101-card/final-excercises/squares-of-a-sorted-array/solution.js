/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    const squares = nums.map((n) => n*n)
    return squares.sort((a,b) => a - b)
}

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortedSquares2(nums) {
//     let left = 0
//     let right = nums.length - 1
//     while(left <= right) {
//         if (Math.abs(nums[left]) > Math.abs(nums[right])) {

//         }
//     }
// }

// console.log(sortedSquares2([-4,-1,0,3,10]))