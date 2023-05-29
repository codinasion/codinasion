package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter Any Character to find ASCII : ")
	ch, _ := reader.ReadByte()
	fmt.Printf("\nThe ASCII value of '%c' : %d\n", ch, ch)
}
