import java.util.*
import kotlin.test.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)

    //Input Character
    print("Enter Character : ")
    val char = scanner.next()[0]

    val lowerCase = char.isLowerCase()
    if(lowerCase){
        println("Output:" + lowerCase)
    } else{
        println("Not Lower Case")
    }
}