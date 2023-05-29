fun main() {
    print("Enter String to Reverse: ")
    val str = readln()
    println()
    print(reverseString(str))
}

private fun reverseString(str: String): String {
    var reverse = ""
    for (i in str.lastIndex downTo 0) {
        reverse += str[i]
    }
    return reverse
}