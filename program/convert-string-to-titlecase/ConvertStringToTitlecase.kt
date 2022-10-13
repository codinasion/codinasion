fun convertStringToTitlecase(text: String): String = text.split(" ")
	.map { it.toLowerCase().capitalize() }
	.joinToString(" ")

fun main() {
	println(convertStringToTitlecase("hello world"))
}
