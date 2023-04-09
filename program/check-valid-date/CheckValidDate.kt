import java.util.Scanner
import java.time.format.DateTimeFormatter

fun main() {
    print("Enter valid date format in yyyy-mm-dd : ")
    println()
    var input = readLine()

    try {
        println("Is $input valid date?: " + CheckValidDate(input!!))
    } catch (exception: Exception) {
        println("Is $input valid date?: " + false)
    }

}

private fun CheckValidDate(date: String): Boolean {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val formatted = formatter.parse(date)

    return true
}
