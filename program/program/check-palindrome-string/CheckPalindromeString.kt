fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Is $input palindrome : " + CheckPalindromeString(input!!))

}

private fun CheckPalindromeString(inputStr: String): Boolean {
    val sb = StringBuilder(inputStr)

    //reverse the string
    val reverseStr = sb.reverse().toString()

    //compare reversed string with input string
    return inputStr.equals(reverseStr, ignoreCase = true)
}
