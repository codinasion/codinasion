fun convertStringToSnakecase(text: String): String = text.toLowerCase().replace(" ", "_")

fun main() {
	println(convertStringToSnakecase("hello world"))
}
