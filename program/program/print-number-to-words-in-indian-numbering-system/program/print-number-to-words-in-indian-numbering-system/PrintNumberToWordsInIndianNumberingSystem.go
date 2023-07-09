package main

import (
	"fmt"
	"strings"
)

var (
	onesMap = map[int]string{
		0:  "",
		1:  "One",
		2:  "Two",
		3:  "Three",
		4:  "Four",
		5:  "Five",
		6:  "Six",
		7:  "Seven",
		8:  "Eight",
		9:  "Nine",
		10: "Ten",
		11: "Eleven",
		12: "Twelve",
		13: "Thirteen",
		14: "Fourteen",
		15: "Fifteen",
		16: "Sixteen",
		17: "Seventeen",
		18: "Eighteen",
		19: "Nineteen",
	}

	tensMap = map[int]string{
		2: "Twenty",
		3: "Thirty",
		4: "Forty",
		5: "Fifty",
		6: "Sixty",
		7: "Seventy",
		8: "Eighty",
		9: "Ninety",
	}

	scaleMap = map[int]string{
		1:  "",
		2:  "Thousand",
		3:  "Lakh",
		4:  "Crore",
		5:  "Arab",
		6:  "Kharab",
		7:  "Neel",
		8:  "Padma",
		9:  "Shankh",
		10: "Mahashankh",
	}

	separator = " "
)

func convertNumberToWords(number int) string {
	if number == 0 {
		return "Zero"
	}

	sign := ""
	if number < 0 {
		sign = "Minus "
		number = -number
	}

	parts := make([]string, 0)

	for number > 0 {
		if number%100 > 0 {
			parts = append(parts, convertTwoDigitNumberToWords(number%100))
		}
		number /= 100
	}

	words := make([]string, 0)
	for i := len(parts) - 1; i >= 0; i-- {
		if parts[i] != "" {
			words = append(words, parts[i]+" "+scaleMap[i+1])
		}
	}

	return sign + strings.Join(words, separator)
}

func convertTwoDigitNumberToWords(number int) string {
	if number == 0 {
		return ""
	} else if number <= 19 {
		return onesMap[number]
	} else if number%10 == 0 {
		return tensMap[number/10]
	} else {
		return tensMap[number/10] + separator + onesMap[number%10]
	}
}

func main() {
	number := 0
	words := convertNumberToWords(number)
	fmt.Printf("%d : %s\n", number, words)
}
