import java.util.Scanner

fun main() {
    val number1 = Scanner(System.`in`)
    println("Enter the Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter the breadth: ")
    val breadth: Double = number2.nextDouble()

    val Area = length * breadth
    println("The area of rectangle is $Area ")
}
