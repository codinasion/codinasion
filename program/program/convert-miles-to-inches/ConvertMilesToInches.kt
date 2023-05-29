import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("$min miles into inches = " + ConvertMilesToInches(min!!.toDouble()))

}

private fun ConvertMilesToInches(miles: Double): Double {
    var inches = miles * 63360

    return inches
}
