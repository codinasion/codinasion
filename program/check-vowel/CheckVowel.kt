fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("$input is " + CheckVowel(input!!.first()))

}

private fun CheckVowel(ch: Char): String {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        return "Vowel"
    }

    return "Not Vowel"
}