fun findLength(string: String): Int {
    return string.length
}

fun main() {
    while (true) {
        print("Enter a string (or enter 'exit' to quit): ")
        val inputString = readLine()!!
        if (inputString == "exit") {
            break
        }
        val length = findLength(inputString)
        println("$length")
    }
}