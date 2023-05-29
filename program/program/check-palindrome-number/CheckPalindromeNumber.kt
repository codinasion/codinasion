fun main() {
    print("Enter No. to Check Palindrome: ")
    val num = readln()
    println()
    if (checkPalindrome(num)) println("$num is Palindrome")
    else println("$num is not Palindrome")
}

private fun checkPalindrome(num: String): Boolean {
    var start = 0
    var end = num.lastIndex
    while (start <= end) {
        if (num[start] != num[end]) return false
        start++
        end--
    }
    return true
}