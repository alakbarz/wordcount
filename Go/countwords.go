package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	// Create array of arguments, excluding the first
	args := os.Args[1:]

	words := make(map[string]int)

	for i := 0; i < len(args); i++ {
		arg := strings.ToLower(args[i])

		_, exists := words[arg]
		if exists {
			words[arg]++
		} else {
			words[arg] = 1
		}
	}

	for k, v := range words {
		fmt.Printf("%d %s\n", v, k)
	}
}
