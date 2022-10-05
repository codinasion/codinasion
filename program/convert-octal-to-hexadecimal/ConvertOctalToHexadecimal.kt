import kotlin.math.pow

fun main() {
    print("Enter Octal No. to Convert in Hexadecimal: ")
    val num = readln().toInt()
    println()
    print("Hexadecimal of Octal No: $num is: ")
    print(octalToHexadecimal(num))
}

private fun octalToHexadecimal(nums: Int): String {
    val decimal = octalToDecimal(nums)
    return decimalToHexadecimal(decimal)
}

private fun octalToDecimal(nums: Int): Int {
    var decimal = 0
    var digit = nums
    var n = 0
    while (digit > 0) {
        val rem = digit % 10
        decimal += rem * 8.0.pow(n).toInt()
        digit /= 10
        n++
    }
    return decimal
}

private fun decimalToHexadecimal(nums: Int): String {
    var hexa = ""
    var digit = nums
    var n = 0
    while (digit > 0) {
        val rem = digit % 16
        hexa = when (rem) {
            10 -> "A"
            11 -> "B"
            12 -> "C"
            13 -> "D"
            14 -> "E"
            15 -> "F"
            else -> {
                rem.toString()
            }
        } + hexa
        digit /= 16
    }
    return hexa
}