const t1 = [3,5,5]
const t2 = [0,3,2,1]

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function validMountainArray(arr) {
    let posibleMaximumValueFound = false
    if (arr.length < 3) {
        return false
    }
    if (arr[0] >= arr[1]) return false
    for (let i = 0; i < arr.length; i++) {
        if(
            !posibleMaximumValueFound &&
            arr[i] < arr[i + 1]
        ) {
            continue
        } else if(
            !posibleMaximumValueFound &&
            arr[i] > arr[i + 1]
        ) {
            posibleMaximumValueFound = true
        }

        if(posibleMaximumValueFound && arr[i] < arr[i + 1]){
            return false
        }

        if (arr[i] === arr[i + 1]) {
            return false
        }

        if (i < arr.legth && arr[i] > arr[i + 1]) {
            continue
        }
    }

    if(!posibleMaximumValueFound) {
        return false
    }

    return true
}

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function validMountainArray2(arr) {
    let climb = 0
    n = arr.length
    while(climb < n - 1 && arr[climb] < arr[climb + 1]) {
        climb = climb + 1
    }

    if(climb === 0 || climb === n - 1) {
        return false
    }

    while(climb < n - 1 && arr[climb] > arr[climb +1]) {
        climb = climb + 1
    }

    if(climb === n - 1) {
        return true
    }
    
    return false
}

// find the peak
// Check the sides
    // Check the right side
    //Check the left side 

console.log(validMountainArray(t1))
console.log(validMountainArray(t2))

console.log(validMountainArray2(t1))
console.log(validMountainArray2(t2))