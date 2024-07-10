import scala.io.StdIn.readInt

object calculateTheCombinationOfNObjectsTakenRAtATime {
  def main(args: Array[String]): Unit = {
    val n = readInt()
    val r = readInt()
    println(combination(n, r))
  }

  def factorial(n: Int): BigInt = {
    if (n == 0) 1
    else n * factorial(n - 1)
  }

  def combination(n: Int, r: Int): BigInt = {
    factorial(n) / (factorial(r) * factorial(n - r))
  }
}
