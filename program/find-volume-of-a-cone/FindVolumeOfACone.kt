import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val radius = scanner.nextDouble()
  val height = scanner.nextDouble()

  val volume = 1.0/3.0 * PI * radius * radius * height
  println(volume)
}
