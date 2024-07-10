import kotlin.math.pow

fun main() {
    print("Enter Hexadecimal Number to Convert: ")
    val num = readln()
    print("Decimal Number is: ${convert(num)}")
}

private fun convert(str: String): Int {
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