/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let currentBiggestValue = arr[1]
    for (let i = 0; i < arr.length; i++) {
        if(arr.length === 1) {
            arr[0] = -1
            break
        }
        const currentIndex = i
        let rightIndex = currentIndex + 1
        while(rightIndex < arr.length) {
            if (arr[rightIndex] > currentBiggestValue) {
                currentBiggestValue = arr[rightIndex]
            }
            rightIndex++
        }
        arr[currentIndex] = currentBiggestValue
        currentBiggestValue = -1
    }
    return arr
};

// select current index
// find the biggest value to the right of that index
// change the value of current index to the biggest value
// repeat until the end of the array
// replace the last element to -1

console.log(replaceElements([17,18,5,4,6,1]))

/**
 * @param {number[]} arr
 * @return {number[]}
 */
let replaceElements2 = function(arr) {
    for(let i=0;i<arr.length;i++){
        let max=0;
        let j=i+1;
        while(j<arr.length){
            max=Math.max(max,arr[j]);
            j++;
        }
        arr[i]=max;
    }
    arr[arr.length-1]=-1;
    return arr;
};