/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    const squares = nums.map((n) => n*n)
    return squares.sort((a,b) => a - b)
}

sortedSquares([-4,-1,0,3,10])