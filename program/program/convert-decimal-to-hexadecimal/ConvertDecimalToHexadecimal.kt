import java.util.*

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)
    var dec = input.nextInt()

    // For storing remainder
    var rem: Int

    // For storing result
    var hexdec = ""

    // Digits in hexadecimal number system
    val hex = charArrayOf('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F')
    while (dec>0) {
        rem = dec % 16
        hexdec = hex[rem].toString() + hexdec
        dec = dec / 16
    }
    println(hexdec)
}
