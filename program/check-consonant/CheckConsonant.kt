fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("$input is " + CheckConsonant(input!!.first()))

}

private fun CheckConsonant(ch: Char): String {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        return "Vowel not Consonant"
    }

    return "Consonant"
}