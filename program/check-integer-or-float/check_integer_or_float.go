package main

import (
	"fmt"
	"log"
)

func main() {
	var input string
	fmt.Printf("Enter the number to check integer or float: ")
	fmt.Scanf("%s", &input)

	if len(input) == 0 {
		log.Println("Looks like you didn't enter anything. Please enter a number to continue!")
		return
	}

	flag := true

	for i := 0; i < len(input); i++{
		if input[i] == '.'{
			flag = false
			break
		}
	}
	
	if flag{
		fmt.Println("Integer")
	}else{
		fmt.Println("Float")
	}

}
