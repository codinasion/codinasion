fun main() {
    print("Enter inches : ")
    println()
    var input = readLine()

    println("$input inches = " + ConvertInchesToCentimeters(input!!.toDouble()) + " centimeters")

}

private fun ConvertInchesToCentimeters(inches: Double): Double {
    var cm = inches *  2.54

    return cm
}
