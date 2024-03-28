import java.time.LocalDate
import java.time.format.DateTimeFormatter

// Function to convert standard date format to Julian date
fun standardToJulian(dateStr: String): String {
    val date = LocalDate.parse(dateStr, DateTimeFormatter.ISO_DATE)
    val year = date.year.toString().takeLast(2) // Last two digits of the year
    val dayOfYear = date.dayOfYear.toString().padStart(3, '0') // Day of year with leading zeros if needed
    return "$year-$dayOfYear"
}

// Function to convert Julian date to standard date format
fun julianToStandard(julianDate: String): String {
    val year = julianDate.substring(0, 2).toInt() + 2000 // Convert to full year
    val dayOfYear = julianDate.substring(3).toInt()
    val date = LocalDate.ofYearDay(year, dayOfYear)
    return date.format(DateTimeFormatter.ISO_DATE)
}

// Test
fun main() {
    val standardDate = "2024-03-27"
    val julianDate = standardToJulian(standardDate)
    println("Julian date for $standardDate: $julianDate")

    val convertedStandardDate = julianToStandard(julianDate)
    println("Standard date for $julianDate: $convertedStandardDate")
}
