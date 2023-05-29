package main

import (
		"fmt"
)

func secondsToMinutes(inSeconds int) string {
		minutes := inSeconds / 60
		seconds := inSeconds % 60
		str := fmt.Sprintf("d:d", minutes, seconds)
		return str
}

func main() {
		fmt.Println("300 seconds in minutes : ", secondsToMinutes(300))
		fmt.Println("9999 seconds in minutes : ", secondsToMinutes(9999))
		fmt.Println("660 seconds in minutes : ", secondsToMinutes(660))
}