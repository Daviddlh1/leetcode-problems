package main

import (
	"fmt"
	"strings"
)

func removeChar(str string, char rune) {
	runesSlice := []rune(str)
	for i := range(runesSlice) {
		fmt.Println(i)
	}
}

func canConstruct(ransomNote string, magazine string) bool {
	magazineCopy := magazine
	for i := range ransomNote {
		if strings.Contains(magazineCopy, string(ransomNote[i])) {

		}
	}
	return true
}
