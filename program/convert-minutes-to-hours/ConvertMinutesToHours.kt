import java.util.Scanner
import kotlin.math.roundToInt

fun main() {
    print("Enter minutes : ")
    println()
    var min = readLine()

    println("Time in Hours is: " + ConvertMinutesToHours(min!!.toDouble()))

}

private fun ConvertMinutesToHours(min: Double): Double {
    val hours = min / 60

    return  hours
}