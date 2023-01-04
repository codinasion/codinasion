import java.util.Scanner

fun main() {
    print("Enter Kilometers : ")
    println()
    var kilometers = readLine()

    println("Distance in mile : " + ConvertKilometersToMiles(kilometers!!.toDouble()))

}

private fun ConvertKilometersToMiles(km: Double): Double {
    val miles = km / 1.609;

    return  miles
}