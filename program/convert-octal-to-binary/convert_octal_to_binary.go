package main

import (
	"fmt"
)

func main() {
	var value string = ""
	var binary string = ""

	fmt.Print("Type a number: ")
	fmt.Scan(&value)

	var length int = len(value)

	for i := 0; i < length; i++ {

		switch value[i] {
		case '0':
			binary += "000"
		case '1':
			binary += "001"
		case '2':
			binary += "010"
		case '3':
			binary += "011"
		case '4':
			binary += "100"
		case '5':
			binary += "101"
		case '6':
			binary += "110"
		case '7':
			binary += "111"
		}

	}

	fmt.Println("Binary is:", binary)

}
