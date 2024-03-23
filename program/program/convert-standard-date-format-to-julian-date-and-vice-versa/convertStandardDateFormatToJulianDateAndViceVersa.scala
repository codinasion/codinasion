import java.time.LocalDate
import java.time.format.DateTimeFormatter

object DateConverter {
  def main(args: Array[String]): Unit = {
    // Example usage
    val standardDate = "2023-10-05"
    val julianDate = convertStandardToJulian(standardDate)
    println(s"Standard to Julian: $standardDate -> $julianDate")

    val convertedStandardDate = convertJulianToStandard(julianDate)
    println(s"Julian to Standard: $julianDate -> $convertedStandardDate")
  }

  def convertStandardToJulian(standardDate: String): String = {
    val date = LocalDate.parse(standardDate, DateTimeFormatter.ISO_DATE)
    val year = date.getYear
    val dayOfYear = date.getDayOfYear
    f"$year%02d$dayOfYear%03d"
  }

  def convertJulianToStandard(julianDate: String): String = {
    val year = julianDate.substring(0, 2).toInt
    val dayOfYear = julianDate.substring(2).toInt
    val date = LocalDate.ofYearDay(year + 2000, dayOfYear)
    date.format(DateTimeFormatter.ISO_DATE)
  }
}
