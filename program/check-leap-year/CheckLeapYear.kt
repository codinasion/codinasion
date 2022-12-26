import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Is $min leap year?: " + CheckLeapYear(min!!.toInt()))

}

private fun CheckLeapYear(year: Int): Boolean {

    var leap = false

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            // year is divisible by 400, hence the year is a leap year
            leap = year % 400 == 0
        } else
            leap = true
    } else
        leap = false

    println(if (leap) "$year is a leap year." else "$year is not a leap year.")

    return leap
}