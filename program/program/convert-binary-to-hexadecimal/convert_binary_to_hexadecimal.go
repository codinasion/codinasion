package main

import (
    "fmt"
    "strconv"
)

func parseBinToHex(s string) string {
    ui, err := strconv.ParseUint(s, 2, 64)
    if err != nil {
        return "error"
    }

    return fmt.Sprintf("%x", ui)
}

func main() {
  var value string
  fmt.Println("Enter binary value:")
  fmt.Scan(&value)
  fmt.Println(parseBinToHex(value))
}
