object GCDCalculator {
  def gcd(a: Int, b: Int): Int = {
    // Base case: if one of the numbers is zero, the other number is the GCD
    if (b == 0) a
    else gcd(b, a % b)
  }

  def main(args: Array[String]): Unit = {
    // Example usage
    val num1 = 21
    val num2 = 18

    val result = gcd(num1, num2)
    println(s"The GCD of $num1 and $num2 is: $result")
  }
}
