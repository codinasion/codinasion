import scala.math.sqrt
object Main {
  def main(args: Array[String]) {
    val a = 2
    val b = 5
    val c = 3
    val root1 = (-b + sqrt(b*b - 4*a*c))/(2*a)
    val root2 = (-b - sqrt(b*b - 4*a*c))/(2*a)
    println("Roots of the quadratic equation are: " + root1 + " and " + root2)
  }
}
