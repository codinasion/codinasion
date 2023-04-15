import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val number = scanner.nextDouble()

  val cube = number * number * number
  println(cube)
}
