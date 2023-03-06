import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val base = scanner.nextDouble()
  val height = scanner.nextDouble()

  val area = 0.5 * base * height
  println(area)
}
