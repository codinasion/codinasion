fun main() {
    val decimal = 10
    println(convertDecimalToOctal(decimal))
}

fun convertDecimalToOctal(number: Int): Int {
    var decimal = number
    var octalNumber = 0
    var i = 1

    while (decimal != 0) {
        octalNumber += decimal % 8 * i
        decimal /= 8
        i *= 10
    }
    return octalNumber
}
