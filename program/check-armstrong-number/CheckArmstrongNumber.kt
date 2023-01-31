fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output: " + CheckArmstrongNumber(nums!!.toInt()))

}

private fun CheckArmstrongNumber(number: Int): String {
    var originalNumber: Int
    var remainder: Int
    var result = 0

    originalNumber = number

    while (originalNumber != 0) {
        remainder = originalNumber % 10
        result += Math.pow(remainder.toDouble(), 3.0).toInt()
        originalNumber /= 10
    }

    if (result == number)
        return "$number is an Armstrong number."
    else
        return "$number is not an Armstrong number."
}