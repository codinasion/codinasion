import java.util.*;
fun main() {
    val sc = Scanner(System.`in`)
    println("Enter the number: ");
    val number = sc.nextLine()
    var isInteger = false;
    var isFloat = false;
    try {
        number.toInt()
        isInteger = true;
    } catch (e: NumberFormatException)  {
    }
    try {
        number.toFloat()
        isFloat = true;
    } catch (e: NumberFormatException)  {
    }
    if (isInteger) {
        println("Integer");
    } else if (isFloat) {
        println("Float");
    } else {
        println("Neither float or Integer");
    }
}
