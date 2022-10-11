import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter Width: ")
    val width: Double = number2.nextDouble()

    val perimeter = 2 * (length + width)
    println("The Perimeter of Rectangle is $perimeter")
}
