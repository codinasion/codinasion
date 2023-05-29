import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    try {
        println("$sec seconds to weeks : " + ConvertSecondsToWeeks(sec!!.toInt()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertSecondsToWeeks(sec: Int): Int {
    val secToWeeks = sec / 604800

    return  secToWeeks
}