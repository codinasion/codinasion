import java.util.Scanner

fun main() {
    val number1 = Scanner(System.`in`)
    println("Enter the Length: ")
    val inches: Double = number1.nextDouble()


    val miles = inches / 63360
    println("$inches inches to miles is $miles ")
}
