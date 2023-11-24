fun alternatingCase(input: String): String {
    return input.mapIndexed { index, char ->
        if (index % 2 == 0) {
            char.toLowerCase()
        } else {
            char.toUpperCase()
        }
    }.joinToString("")
}

fun main() {
    println("Enter a string: ")
    val inputString = readLine() ?: ""
    val convertedString = alternatingCase(inputString)
    println("Alternating Case String: $convertedString")
}
