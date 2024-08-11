/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    const arr = new Set(nums)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (!arr.has(i + 1)) {
            res.push(i + 1)
        }
    }
    return res
}

findDisappearedNumbers([1, 1])
findDisappearedNumbers([4,3,2,7,8,2,3,1])