import java.util.*

fun numberToWords(number: Long): String {
    if (number == 0L) return "Zero"

    val units = arrayOf("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine")
    val teens = arrayOf("Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen")
    val tens = arrayOf("", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety")
    val thousands = arrayOf("", "Thousand", "Million", "Billion", "Trillion")

    fun convertToWords(num: Long): String {
        if (num == 0L) return ""
        var result = ""
        val hundred = num / 100
        val remainder = num % 100

        if (hundred > 0) {
            result += units[hundred.toInt()] + " Hundred"
        }

        if (remainder != 0L) {
            if (hundred > 0) result += " "
            if (remainder < 10) {
                result += units[remainder.toInt()]
            } else if (remainder < 20) {
                result += teens[(remainder - 10).toInt()]
            } else {
                result += tens[(remainder / 10).toInt()]
                if (remainder % 10 != 0L) {
                    result += " " + units[(remainder % 10).toInt()]
                }
            }
        }
        return result
    }

    val parts = mutableListOf<String>()
    var num = number
    for (i in 0 until 5) {
        val part = convertToWords(num % 1000)
        if (part.isNotEmpty()) {
            parts.add(part + " " + thousands[i])
        }
        num /= 1000
    }
    return parts.reversed().joinToString(" ").trim()
}

fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter a number: ")
    val number = scanner.nextLong()
    println("Input  : $number")
    println("Output : ${numberToWords(number)}")
}
