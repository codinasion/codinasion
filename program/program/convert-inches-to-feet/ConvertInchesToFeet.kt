fun main() {
    print("Enter inches : ")
    println()
    var input = readLine()

    println("$input inches = " + ConvertInchesToFeet(input!!.toDouble()) + " feet")

}

private fun ConvertInchesToFeet(inches: Double): Double {
    var cm = inches / 12

    return cm
}
