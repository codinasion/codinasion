object GpSumCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter the first term (a1) of the GP:")
    val a1 = scala.io.StdIn.readDouble()

    println("Enter the common ratio (r) of the GP:")
    val r = scala.io.StdIn.readDouble()

    println("Enter the number of terms (n) in the GP:")
    val n = scala.io.StdIn.readInt()

    val gpSum = calculateGpSum(a1, r, n)
    println(s"Sum of the GP series: $gpSum")
  }

  def calculateGpSum(a1: Double, r: Double, n: Int): Double = {
    if (r == 1) {
      return a1 * n
    }

    val gpSum = a1 * (1 - Math.pow(r, n)) / (1 - r)
    gpSum
  }
}
