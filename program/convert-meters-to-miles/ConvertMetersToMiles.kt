fun main() {
    print("Enter Meters : ")
    println()
    var input = readLine()

    println("$input meters = " + ConvertMetersToMiles(input!!.toDouble()) + " miles")

}

private fun ConvertMetersToMiles(meters: Double): Double {
    var miles = meters / 1609.344

    return miles
}
