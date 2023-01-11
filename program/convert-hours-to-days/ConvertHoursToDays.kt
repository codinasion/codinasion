fun main() {
    print("Enter hours : ")
    println()
    var input = readLine()

    try {
        println("$input hours = " + ConvertHoursToDays(input!!.toDouble()) + " days")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToDays(hr: Double): Double {
    val hoursToDays = hr / 24

    return  hoursToDays
}