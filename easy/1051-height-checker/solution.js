/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
    const sorted = heights.slice().sort((a, b) => a - b)
    let k = 0
    for(let i = 0; i < heights.length; i++) {
        if (sorted[i] !== heights[i]) {
            k++
        }
    }
    console.log(k)
    return k
}

heightChecker([1,1,4,2,1,3])