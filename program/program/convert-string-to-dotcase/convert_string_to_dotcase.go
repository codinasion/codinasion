package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// We are using a bufio reader as the scanf method does not allow taking arbitrary number inputs with spaces
	reader := bufio.NewReader(os.Stdin)

	line, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Failed to take input:", err)
	}

	fmt.Printf("Input: %s", line)
	line = strings.ReplaceAll(line, " ", ".")
	fmt.Printf("Output: %s", line)
}
