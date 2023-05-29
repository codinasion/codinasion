import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("Lower Case: " + ConvertStringToLowercase(input!!))

}

private fun ConvertStringToLowercase(args: String): String {
    return args.lowercase().toString()
}