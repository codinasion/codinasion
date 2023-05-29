import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    println("$sec seconds in hours : " + ConvertSecondsToHours(sec!!.toInt()))

}

private fun ConvertSecondsToHours(sec: Int): Int {
    val hour = sec / 3600;

    return  hour
}