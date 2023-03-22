import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("$min feet into centimeters = " + ConvertFeetToCentimeters(min!!.toDouble()))

}

private fun ConvertFeetToCentimeters(feet: Double): Double {
    var cm = feet * 30.48

    return cm
}
