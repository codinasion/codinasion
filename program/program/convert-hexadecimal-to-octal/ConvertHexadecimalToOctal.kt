import kotlin.math.pow

fun main() {
    print("Enter Hexadecimal Number to Convert in Octal: ")
    val num = readln()
    print("Octal Number is: ${convertHexadecimalToOctal(num)}")
}

private fun convertHexadecimalToOctal(nums: String): Int {
    val decimal = convertHexadecimalToDecimal(nums)
    return convertDecimalToOctal(decimal)
}

private fun convertDecimalToOctal(decimal: Int): Int {
    var digit = decimal % 8
    var rem = decimal
    var i = 0
    var octal = 0
    while (rem != 0) {
        octal += digit * 10.0.pow(i).toInt()
        rem /= 8
        digit = rem % 8
        i++
    }
    return octal
}

private fun convertHexadecimalToDecimal(str: String): Int {
    var num = 0
    var i = str.lastIndex
    str.forEach {
        val digit = when (it) {
            'A' -> 10
            'B' -> 11
            'C' -> 12
            'D' -> 13
            'E' -> 14
            'F' -> 15
            else -> it - '0'
        }
        num += 16.0.pow(i).toInt() * digit
        i--
    }
    return num
}