fun convertStringToKebabcase(text: String): String = text.toLowerCase().replace(" ", "-")

fun main() {
	println(convertStringToKebabcase("hello world"))
}
