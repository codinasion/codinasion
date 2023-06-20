fun convertTo12HourFormat(time: String): String {
    //Splits time into hours, minutes and seconds and extracts them
    val parts = time.split(":")
    val hour = parts[0].toInt()
    val minute = parts[1]
    val second = parts[2]

    //Initializes the converted hour with original hour and the period as "AM"
    var convertedHour = hour
    var period = "AM"

    //Sets period to "PM" if hour is greater or equal to 12
    //Substracts 12 of hour if hour is greater than 12 to convert to 12-hour format
    if (hour >= 12) {
        period = "PM"
        if (hour > 12) {
            convertedHour -= 12
        }
    } 
    //Sets hour to 12 if the hour is 0 to convert to 12-hour format
    else if (hour == 0) {
        convertedHour = 12
    }

    //Formats the converted time into a string and returns this
    val convertedTime = String.format("%02d:%s:%s%s", convertedHour, minute, second, period)
    return convertedTime
}

fun main() {
    val time24Hour = "12:05:45"
    val time12Hour = convertTo12HourFormat(time24Hour)
    println("Input: $time24Hour")
    println("Output: $time12Hour")
}