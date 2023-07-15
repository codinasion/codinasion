package main

import (
"fmt"
"strings"
)

func convertTimeTo24HourFormat(time12 string) string {
    hour := time12[:2]
    period := strings.ToUpper(time12[len(time12)-2:])
    time := time12[:len(time12)-2]
    if period == "PM" && hour != "12" {
        hourInt := int(hour[0]-'0')*10 + int(hour[1]-'0') + 12
        hour = fmt.Sprintf("%02d", hourInt)
    } else if period == "AM" && hour == "12" {
        hour = "00"
    }
    return hour + time[2:]
    }

func main() {
    var time12 string
    fmt.Print("Input : ")
    fmt.Scanln(&time12)
    time24 := convertTimeTo24HourFormat(time12)
    fmt.Println("Output :", time24)
}