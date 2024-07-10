fun main() {
    print("Enter minutes : ")
    println()
    var input = readLine()

    try {
        println("$input minutes = " + ConvertMinutesToWeeks(input!!.toDouble()) + " weeks")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertMinutesToWeeks(minutes: Double): Double {
    val days = minutes / 1440;
    val week = days / 7;

    return  week
}