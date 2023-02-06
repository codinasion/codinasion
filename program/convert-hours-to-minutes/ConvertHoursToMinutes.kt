import java.util.Scanner

fun main() {
    val hour = Scanner(System.`in`)
    println("Enter the hours: ")
    val hours: Int = hour.nextInt()
    val minutes = hours *60
    println("$hours  hours to minutes is $minutes ")
}
