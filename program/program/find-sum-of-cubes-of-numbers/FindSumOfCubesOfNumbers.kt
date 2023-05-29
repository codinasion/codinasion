import java.util.Scanner

fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output: " + FindSumOfCubesOfNumbers(nums!!.split(" ")))

}

private fun FindSumOfCubesOfNumbers(args: List<String>): Double {
    var result = 0.0
    val exponent = 3.0
    for (base in args){
        var cube = Math.pow(base.toDouble(), exponent.toDouble())
        result = result + cube
    }

    return result
}