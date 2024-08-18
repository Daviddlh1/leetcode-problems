package main

import "fmt"

func pivotIndex(nums []int) int {
	totalSum := 0
	leftSum := 0

	for index := range nums {
		totalSum += nums[index]
	}

	for index := range nums {
		if leftSum*2 == totalSum-nums[index] {
			return index
		}
		leftSum += nums[index]
	}
	return -1
}

func main() {
	fmt.Println(pivotIndex([]int{1, 7, 3, 6, 5, 6}))
	fmt.Println(pivotIndex([]int{1, 2, 3}))
	fmt.Println(pivotIndex([]int{-1, -1, -1, -1, -1, -1}))
	fmt.Println(pivotIndex([]int{-1, -1, 0, 0, -1, -1}))

}
