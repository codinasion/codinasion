import scala.io.StdIn.readInt

object checkArmstrongNumber {
  def isArmstrongNumber(number: Int): Boolean = {
    val digits = number.toString.map(_.asDigit)
    val numberOfDigits = digits.length
    val sumOfPowers = digits.map(math.pow(_, numberOfDigits)).sum
    sumOfPowers == number
  }

  def main(args: Array[String]): Unit = {
    val number = readInt()
    if (isArmstrongNumber(number)) {
      println(s"Armstrong Number")
    } else {
      println(s"Not Armstrong Number")
    }
  }
}