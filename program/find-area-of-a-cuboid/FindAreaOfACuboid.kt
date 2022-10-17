import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter Width: ")
    val width: Double = number2.nextDouble()

    val number3 = Scanner(System.`in`)
    println("Enter Height: ")
    val height: Double = number3.nextDouble()

    val Area = 2 * (length * width + length * height + width * height)
    println("The Perimeter of Rectangle is $Area")
}
