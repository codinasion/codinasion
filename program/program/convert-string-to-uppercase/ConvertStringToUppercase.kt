import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("Camel Case: " + ConvertStringToUppercase(input!!))

}

private fun ConvertStringToUppercase(args: String): String {
    return args.uppercase().toString()
}