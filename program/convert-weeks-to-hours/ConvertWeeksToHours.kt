fun main() {
    print("Enter weeks : ")
    println()
    var wk = readLine()

    try {
        println("$wk weeks = " + ConvertWeeksToHours(wk!!.toInt()) + " hours")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertWeeksToHours(wk: Int): Int {
    val weeksToHours = wk * 168

    return  weeksToHours
}