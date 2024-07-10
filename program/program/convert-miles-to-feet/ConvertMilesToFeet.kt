fun main() {
    print("Enter Miles : ")
    println()
    var input = readLine()

    println("$input miles = " + ConvertMilesToFeet(input!!.toDouble()) + " feet")

}

private fun ConvertMilesToFeet(miles: Double): Double {
    var feet = miles * 5280

    return feet
}
