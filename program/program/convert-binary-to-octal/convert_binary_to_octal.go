package main
import (
	"fmt"
	"strconv"
)
func binaryToOctal(binary string) string {
	decimal, _ := strconv.ParseInt(binary, 2, 64)
	return strconv.FormatInt(decimal,8)
}
func main() {
	var binaryInput string
	fmt.Print("Input : ")
	fmt.Scanln(&binaryInput)
	octalOutput := binaryToOctal(binaryInput)
	fmt.Print("Output : ", octalOutput)
}