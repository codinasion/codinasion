fun main() {
    print("Enter number of Days : ")
    println()
    var num_of_days = readLine()

    println("$num_of_days days = " + ConvertDaysToSeconds(num_of_days!!.toInt()) + " seconds")

}

private fun ConvertDaysToSeconds(days: Int): Int {
    val seconds = days * 24 * 60 * 60

    return  seconds
}