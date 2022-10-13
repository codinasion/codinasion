import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter length in Centimeters: ")
    val length_in_cm: Double = number1.nextDouble()

    val length_in_ft: Double = length_in_cm / 30.48
    println("Length in Feet = $length_in_ft")
}
