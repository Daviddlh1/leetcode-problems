package main

import "fmt"

func spiralOrder(matrix [][]int) []int {
	initialRow := 0
	initialCol := 0
	finalRow := len(matrix) - 1
	finalCol := len(matrix[0]) - 1

	orederedArray := []int{}

	for initialCol <= finalCol && initialRow <= finalRow {
		// left to right
		for col := initialCol; col <= finalCol; col++ {
			orederedArray = append(orederedArray, matrix[initialRow][col])
		}

		for row := initialRow + 1; row <= finalRow; row++ {
			orederedArray = append(orederedArray, matrix[row][finalCol])
		}

		for col := finalCol - 1; col >= initialCol; col-- {
			orederedArray = append(orederedArray, matrix[finalRow][col])
		}

		for row := finalRow - 1; row >= initialRow+1; row-- {
			orederedArray = append(orederedArray, matrix[row][initialCol])
		}

		initialCol++
		finalCol--
		initialRow++
		finalRow--
	}

	return orederedArray
}

func main() {
	fmt.Println(spiralOrder([][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}}))
}
