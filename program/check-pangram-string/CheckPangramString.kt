fun main() {
    print("Enter text : ")
    println()
    var input = readLine()

    try {
        println("Is Pangram = " + CheckPangramString(input!!))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun CheckPangramString(statement: String): Boolean {
    val letters = "abcdefghijklmnopqrstuvwxyz".split("")
    return statement.lowercase().split("").containsAll(letters)

}
