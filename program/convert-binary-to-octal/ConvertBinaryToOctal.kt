import kotlin.math.pow

class ConvertBinaryToOctal {
    fun convert(binary: Int): Int {
        val dec = convertBinaryToDecimal(binary)
        return convertDecimalToOctal(dec)
    }

    private fun convertBinaryToDecimal(binary: Int): Int {
        if (binary == 0) return 0
        var n = 0
        var decimal = 0
        var bin = binary
        while (bin > 0) {
            val temp = bin % 10
            decimal += temp * 2.0.pow(n.toDouble()).toInt()
            bin /= 10
            n++
        }
        return decimal
    }

    private fun convertDecimalToOctal(decimal: Int): Int {
        var octal = 0
        var dec = decimal
        var tens = 1
        while (dec > 0) {
            val temp = dec % 8
            octal += tens * temp
            tens *= 10
            dec /= 8
        }
        return octal
    }
}