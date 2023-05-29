import java.util.*

fun main(args: Array<String>) {

    val reader = Scanner(System.`in`)

    print("Enter a number: ")
    val num = reader.nextInt()

    if (num % 2 == 0)
    {
        println("$num is an even number.")
    }
    else
    {
        println("$num is an odd number.")
    }
}
