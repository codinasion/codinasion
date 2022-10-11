import java.util.Scanner
import kotlin.math.pow

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)

    print("Enter Side of Cube : ")
    val side = scanner.nextDouble()

    val volume = side.pow(3.toDouble())

    println("The Volume of this cube with  $side sized sides is :$volume")
}
