import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the number::")
    val number = scanner.nextInt();
    printNos(number);
}

fun printNos(n:Int) {
    if(n > 0) {
        val number = n.toString() + ' '
        print(number)
        printNos(n - 1);
    }
}
