import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    try {
        println("$sec seconds to days : " + ConvertSecondsToDays(sec!!.toInt()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertSecondsToDays(sec: Int): Int {
    val secToDays = sec / 86400

    return  secToDays
}