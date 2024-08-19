package main

import "fmt"

func pascalTriangle(numRows int) [][]int {
	result := [][]int{}
	col := 0

	for row := 0; row < numRows; row++ {
		temp := []int{}
		for col < row+1 {
			if col != 0 && col < row {
				value := result[row-1][col-1] + result[row-1][col]
				temp = append(temp, value)
			} else {
				temp = append(temp, 1)
			}
		}
		result = append(result, temp)
	}

	return result
}

func printT(t [][]int) {
	for row := range t {
		fmt.Println(t[row])
	}
}

func main() {
	pascalTriangle(5)
}
