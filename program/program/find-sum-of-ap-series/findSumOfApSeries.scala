object APSumCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter the first term (a1):")
    val a1 = scala.io.StdIn.readInt()

    println("Enter the number of terms (n):")
    val n = scala.io.StdIn.readInt()

    println("Enter the common difference (d):")
    val d = scala.io.StdIn.readInt()

    val sum = n * (2 * a1 + (n - 1) * d) / 2

    println(s"The sum of the arithmetic progression series is: $sum")
  }
}
