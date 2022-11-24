import java.util.Scanner

fun main() {
    print("Enter Miles : ")
    println()
    var miles = readLine()

    println("$miles miles in meters : " + ConvertMilesToMeters(miles!!.toInt()))

}

private fun ConvertMilesToMeters(miles: Double): Double {
    val meter = miles*1609.344;

    return  meter
}