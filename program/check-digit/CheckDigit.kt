import java.util.Scanner

fun main() {
    print("Enter input : ")
    println()
    var input = readLine()

    println("$input is a : " + CheckIsDigit(input!!))

}

private fun CheckIsDigit(str: String): String {
    val chars = str.toCharArray()
    for (x in chars) {
        if(!x.isDigit()){
            return  "not a Digit"
        }
    }

    return "Digit"
}