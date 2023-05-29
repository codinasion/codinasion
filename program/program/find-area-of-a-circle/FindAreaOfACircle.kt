import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val radius = scanner.nextDouble()

  val area = PI * radius * radius
  println(area)
}
