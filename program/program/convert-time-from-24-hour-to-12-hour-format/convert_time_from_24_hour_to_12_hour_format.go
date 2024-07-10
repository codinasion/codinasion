package main

import (
	"fmt"
	"strings"
	"strconv"
)

func convertTimeTo12HourFormat(time string) string{
	parts := strings.Split(time, ":")
	hour := parts[0]
	meridiem := "AM"

	h, _ := strconv.Atoi(hour)
	if h>=12 {
		meridiem = "PM"
	}

	if h := h%12 ; h==0{
		h = 12
	}

	return fmt.Sprintf("%02d:%s:%s%s",h,parts[1],parts[2],meridiem)
}

func main(){
	var time string
	fmt.Print("Input : ")
	fmt.Scanln(&time)

	convertedTime := convertTimeTo12HourFormat(time)
	fmt.Println("Output : ",convertedTime)
}