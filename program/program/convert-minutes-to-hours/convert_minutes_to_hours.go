package main
import ("fmt"
        "math")

func minutesToHours(nums int) float64 {
  hours := float64(nums) / 60;
  // round to get 2 digits
  return math.Round(hours * 100) / 100;
}

func main() {
  test := minutesToHours(80)
  fmt.Println(test)
}