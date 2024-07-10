package main

import (
    "fmt"
    "strconv"
    "strings"
    "time"
)

// Function to convert standard date format to Julian date
func standardToJulian(dateStr string) string {
    date, _ := time.Parse("2006-01-02", dateStr)
    year := date.Year() % 100 // Last two digits of the year
    dayOfYear := date.YearDay()
    return fmt.Sprintf("%02d-%03d", year, dayOfYear)
}

// Function to convert Julian date to standard date format
func julianToStandard(julianDate string) string {
    parts := strings.Split(julianDate, "-")
    year, _ := strconv.Atoi(parts[0])
    year += 2000 // Convert to full year
    dayOfYear, _ := strconv.Atoi(parts[1])
    date := time.Date(year, 1, 0, 0, 0, 0, 0, time.UTC).AddDate(0, 0, dayOfYear)
    return date.Format("2006-01-02")
}

func main() {
    standardDate := "2024-03-27"
    julianDate := standardToJulian(standardDate)
    fmt.Printf("Julian date for %s: %s\n", standardDate, julianDate)

    convertedStandardDate := julianToStandard(julianDate)
    fmt.Printf("Standard date for %s: %s\n", julianDate, convertedStandardDate)
}
