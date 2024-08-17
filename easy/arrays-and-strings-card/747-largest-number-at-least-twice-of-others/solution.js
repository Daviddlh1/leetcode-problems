/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
  let largestNumberIndex = 0;
  let secondLargestNumber = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[largestNumberIndex]) {
      secondLargestNumber = nums[largestNumberIndex];
      largestNumberIndex = i;
    } else if (secondLargestNumber === null || secondLargestNumber < nums[i]) {
      secondLargestNumber = nums[i];
    } else if (secondLargestNumber === nums[largestNumberIndex]) {
      secondLargestNumber = nums[i];
    }
  }
  //   console.log(secondLargestNumber, nums[largestNumberIndex]);

  if (nums[largestNumberIndex] / 2 >= secondLargestNumber) {
    return largestNumberIndex;
  }

  return -1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex2(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      ans = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return first / 2 >= second ? ans : -1
}

// console.log(dominantIndex([1, 2, 3, 4]));
// console.log(dominantIndex([1, 0]));
// console.log(dominantIndex([0, 0, 3, 2]));

console.log(dominantIndex2([1, 2, 3, 4]))
console.log(dominantIndex2([1, 0]))
console.log(dominantIndex2([0, 0, 3, 2]))
