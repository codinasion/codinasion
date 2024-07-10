fun convertStringToDotcase(text: String): String = text.toLowerCase().replace(" ", ".")

fun main() {
	println(convertStringToDotcase("hello world"))
}
