import java.util.Scanner

fun main() {
    print("Enter number of Days : ")
    println()
    var num_of_days = readLine()

    println("Total hours : " + ConvertDaysToHours(num_of_days!!.toInt()))

}

private fun ConvertDaysToHours(nums: Int): Int {
    val hours = nums * 24;

    return  hours
}