import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val length = scanner.nextDouble()
  val width = scanner.nextDouble()
  val height = scanner.nextDouble()

  val volume = length * width * height
  println(volume)
}
