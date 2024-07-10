import java.util.Scanner

fun main() {
    val input = Scanner(System.`in`)
    print("Enter minutes: ")
    val minutes = input.nextInt()
    val days = minutes/1440;
    print("No of days:"+days)
}
