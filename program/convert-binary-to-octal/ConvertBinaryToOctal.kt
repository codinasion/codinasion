fun main() {
    
    val n: Long = 101001
    
    var binary = n
    var octal = 0
    var decimal = 0
    
    var i = 0

    while (binary.toInt() != 0) {
        decimal += (binary % 10 * Math.pow(2.0, i.toDouble())).toInt()
        ++i
        binary /= 10
    }

    i = 1

    while (decimal != 0) {
        octal += decimal % 8 * i
        decimal /= 8
        i *= 10
    }
  
    println("$n = $octal")
}