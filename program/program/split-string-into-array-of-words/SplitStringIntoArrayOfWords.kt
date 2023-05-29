import java.util.Scanner

fun main() {
    val input = Scanner(System.`in`)
    print("Enter a string: ")
    var string: String = input.nextLine()
    var splitString = string.split(" ")
    print(splitString)
}

