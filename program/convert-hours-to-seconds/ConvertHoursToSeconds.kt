fun main() {
    print("Enter weeks : ")
    println()
    var input = readLine()

    try {
        println("$input hours = " + ConvertHoursToSeconds(input!!.toInt()) + " seconds")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToSeconds(hr: Int): Int {
    val hoursToSeconds = hr * 3600

    return  hoursToSeconds
}