package main
import (
	"fmt"
	"strconv"
)
var(
	onesMap = map[int]string {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"}
	teensMap = map[int]string {11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"}
	tensMap = map[int]string {1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"}
)
func numberToWords (num int) string{
	if (num == 0) {
            return "zero";
        }
        if (num < 0) {
            return "minus " + numberToWords(-num);
        }
        result := "";
        if ((num / 1000000) > 0) {
            result += numberToWords(num / 1000000) + " million ";
            num %= 1000000;
        }
        if ((num / 1000) > 0) {
            result += numberToWords(num / 1000) + " thousand ";
            num %= 1000;
        }
        if ((num / 100) > 0) {
            result += numberToWords(num / 100) + " hundred ";
            num %= 100;
        }
        if (num > 0) {
            if (num < 10) {
                result += onesMap[num];
            } else if (num < 20) {
                result += teensMap[num - 10];
            } else {
                result += tensMap[num / 10];
                if ((num % 10) > 0) {
                    result += " " + onesMap[num % 10];
                }
            }
        }
	return result
}
func main() {
	fmt.Print("Input : ")
	var input string
	fmt.Scanln(&input)
	num, _ := strconv.Atoi(input)
	words := numberToWords(num)
	fmt.Printf("Output : %s\n", words)
}