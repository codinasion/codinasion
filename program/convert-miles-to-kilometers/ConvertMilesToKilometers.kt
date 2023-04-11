fun main() {
    print("Enter Miles : ")
    println()
    var input = readLine()

    println("$input miles = " + ConvertMilesToKilometers(input!!.toDouble()) + " kilometers")

}

private fun ConvertMilesToKilometers(miles: Double): Double {
    var kilometers = miles * 1.609

    return kilometers
}
