/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
  let rightSide = 0;
  let leftSide = 0;

  let currentIndex = 1;

  while (currentIndex <= nums.length) {
    leftSide += nums[currentIndex - 1];
    // if (leftSide === nums[currentIndex + 1]) {
    //   return currentIndex;
    // }
    currentIndex += 1;
  }

  currentIndex = nums.length - 2;

  while (currentIndex >= 0) {
    rightSide += nums[currentIndex + 1];
    leftSide -= nums[currentIndex + 1];
    // if (currentIndex === 3) {
    //     if(leftSide - nums[currentIndex] === rightSide) {
    //         return currentIndex
    //     }
    console.log(leftSide, rightSide, currentIndex);
    // }
    if (leftSide - nums[currentIndex] === rightSide) {
      return currentIndex;
    }
    // leftSide -= nums[currentIndex - 2]
    // console.log('equal', leftSide, rightSide)
    // console.log(nums[currentIndex - 1])
    currentIndex -= 1;
  }

  //   console.log(rightSide, currentIndex, nums.length);
  return currentIndex;
}

// console.log("current index: ", pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log("current index: ", pivotIndex([1,2,3]));
// console.log("current index: ", pivotIndex([-1,-1,-1,-1,-1,-1]));
// console.log("current index: ", pivotIndex([-1,-1,0,0,-1,-1]));

function pivotIndex2(nums) {
  let rightSide = 0;
  let leftSide = 0;

  let currentIndex = 1;

  currentIndex = nums.length - 1;

  while (currentIndex >= 0) {
    rightSide += nums[currentIndex];
    currentIndex -= 1;
  }

  currentIndex = 0

  while (currentIndex <= nums.length) {
    leftSide += nums[currentIndex];
    rightSide -= nums[currentIndex]
    if (leftSide === rightSide + nums[currentIndex]) {
        return currentIndex
    }
    currentIndex += 1;
  }

  return -1;
}

console.log("current index: ", pivotIndex2([1, 7, 3, 6, 5, 6]));
console.log("current index: ", pivotIndex2([1,2,3]));
console.log("current index: ", pivotIndex2([-1,-1,-1,-1,-1,-1]));
console.log("current index: ", pivotIndex2([-1, -1, 0, 0, -1, -1]));
console.log("current index: ", pivotIndex2([1,7,3,6,5,6]));
/*
    1. Traverse the array
    2. sum those indexes
    3. traverse back substracting the current index and summing it
    4. If rightside === leftside return currentIndex
*/
