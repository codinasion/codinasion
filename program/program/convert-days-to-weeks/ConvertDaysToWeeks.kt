import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the days::")
    val inputDays = scanner.nextInt();
    scanner.close();
    val weeks = inputDays/7;
    print("No of Weeks::"+weeks)
}
