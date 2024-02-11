fun main() {
    println(reverseWordsInAString("Hello World"))
}

/**
* reversed the words in a string
* Input  : "Hello World"
* Output : "World Hello"
* @param words the string to be reversed
 */
fun reverseWordsInAString(words : String) : String {
    return words.split(" ").reversed().joinToString(" ")
}