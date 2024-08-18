const nums = [-4,-1,0,3,10]

function sortedSquares(nums) {
    const result = []
    
    for (let n of nums) {
        result.push(n * n)
    }
    result.sort((a, b)=> a - b)
    return result
};

console.log(sortedSquares(nums))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares2(nums) {
    const squares = nums.map((n) => n*n)
    return squares.sort((a,b) => a - b)
}