import java.util.Scanner

fun main() {
    print("Enter the side of the square: : ")
    println()
    var side = readLine()

    try {
        println("Perimeter of square with side $side : " + FindPerimeterOfASquare(side!!.toDouble()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun FindPerimeterOfASquare(side: Double): Double {
    val perimeter = 4 * side

    return  perimeter
}