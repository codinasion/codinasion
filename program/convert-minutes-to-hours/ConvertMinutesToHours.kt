import java.util.Scanner

fun main() {
    print("Enter minutes : ")
    println()
    var min = readLine()

    println("Time in Hours is: " + ConvertMinutesToHours(min!!.toInt()))

}

private fun ConvertMinutesToHours(min: Int): Int {
    val hours = min / 60;

    return  hours
}