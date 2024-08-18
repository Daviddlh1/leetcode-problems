function merge(nums1, m, nums2, n) {
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m]
    }

    nums1.sort((a, b) => a - b)
    console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

function moveElementsToRight(arr, index) {
    for (let i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1]
    }
}