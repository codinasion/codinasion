import scala.annotation.tailrec

object findDigitalRootOfANumber {
  def main(args: Array[String]): Unit = {
    val number = 942
    println(digitalRoot(number))
  }

  def sumOfDigits(n: Int): Int = {
    if (n == 0) 0
    else n % 10 + sumOfDigits(n / 10)
  }

  @tailrec
  def digitalRoot(n: Int): Int = {
    val sum = sumOfDigits(n)
    if (sum < 10) sum
    else digitalRoot(sum)
  }
}
