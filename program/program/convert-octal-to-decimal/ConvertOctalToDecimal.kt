fun main() {
    val octal = 12
    println(convertOctalToDecimal(octal))
}

fun convertOctalToDecimal(number: Int): Int {
    var decimalNumber = 0
    var i = 1
	
    var octal = number
    while (octal != 0) {
        var lastDigit = octal%10
        octal /= 10
        decimalNumber += lastDigit * i
        i *= 8
    }
    return decimalNumber
}
