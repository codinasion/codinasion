fun main() {
    print("Enter Seconds : ")
    println()
    var hr = readLine()

    try {
        println("$hr hours = " + ConvertHoursToWeeks(hr!!.toInt()) + " weeks")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToWeeks(hr: Int): Int {
    val hourToWeek = hr / 168

    return  hourToWeek
}