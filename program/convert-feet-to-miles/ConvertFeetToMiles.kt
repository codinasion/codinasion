fun main() {
    print("Enter Feet : ")
    println()
    var input = readLine()

    println("$input feet = " + ConvertFeetToMiles(input!!.toDouble()) + " miles")

}

private fun ConvertFeetToMiles(feet: Double): Double {
    var miles = feet / 5280

    return miles
}
