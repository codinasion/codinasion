fun main() {
    print("Enter Feet : ")
    println()
    var input = readLine()

    println("$input feet = " + ConvertFeetToInches(input!!.toDouble()) + " inches")

}

private fun ConvertFeetToInches(feet: Double): Double {
    var inches = feet * 12
    return inches
}
