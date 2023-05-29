import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the string::")
    val inputString = scanner.nextLine();
    scanner.close();
    try {
        val integer = inputString.toInt();
        print("Integer value is::"+integer)
    } catch(exe:NumberFormatException) {
        print("Invalid Input")
    }
}
