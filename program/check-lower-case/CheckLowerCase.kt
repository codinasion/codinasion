import java.util.*
import kotlin.test.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)

    //Input Character
    print("Enter a character : ")
    val char = scanner.next()[0]

    val lowerCase = char.isLowerCase()
    if(lowerCase){
        println("Lower Case")
    } else{
        println("Not Lower Case")
    }
}
