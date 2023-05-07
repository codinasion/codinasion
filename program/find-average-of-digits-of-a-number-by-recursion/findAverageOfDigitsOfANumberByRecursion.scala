import scala.io.StdIn.readInt
object Main {
  def main(args: Array[String]) {
    print("Enter a number: ")
    val num = readInt()
    val sum = sumOfDigits(num)
    val count = countDigits(num)
    val avg = sum.toDouble / count
    println(s"Average of digits of $num is $avg")
  }
  def sumOfDigits(num: Int): Int = {
    if (num == 0) 0
    else num % 10 + sumOfDigits(num / 10)
  }
  def countDigits(num: Int): Int = {
    if (num == 0) 0
    else 1 + countDigits(num / 10)
  }
}
