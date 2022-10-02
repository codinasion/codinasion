package main
import "fmt"

func reverseText(text string, location int) string {
	if location >= 0 {
		return string(text[location]) + reverseText(text, location - 1)
	}
	return ""
}

func reverse(text string) string {
	return reverseText(text, len(text) - 1)
}
func main() {

	var text string = "SACHIN"
	fmt.Println("Original String: ",text,"\n")
	text = reverse(text)
	fmt.Println("Reversed String: ", text)
}