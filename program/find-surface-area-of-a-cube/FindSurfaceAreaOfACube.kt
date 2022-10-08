import java.util.*

fun main(args: Array<String>) {

    val scanner = Scanner(System.`in`)

    print("Enter Side of Cube : ")
    val side = scanner.nextDouble()

    val areaCube = 6*Math.pow(side, 2.toDouble())
    
    println("Cube Surface Area on Side ($side) is :$areaCube")
}
