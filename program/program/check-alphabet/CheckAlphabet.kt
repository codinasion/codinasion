fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Is $input is an alphabet : " + CheckAlphabet(input!!))

}

private fun CheckAlphabet(inputStr: String): Boolean {
    val c = inputStr.first()
    if (c in 'a'..'z' || c in 'A'..'Z')
        return true
    else
        return false
}
