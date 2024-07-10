object SumOfSquares {
  def findSumOfSquaresByRecursion(input: String): Int = {
    val numList = input.split(" ").map(_.toInt)
    
    if (numList.length <= 1) {
      math.pow(numList.head, 2).toInt
    } else {
      val headSquare = math.pow(numList.head, 2).toInt
      val restOfNumbers = numList.tail.mkString(" ")
      headSquare + findSumOfSquaresByRecursion(restOfNumbers)
    }
  }

  def main(args: Array[String]): Unit = {
    val number = "1 2 3 4 5"
    val result = findSumOfSquaresByRecursion(number)

    println(s"Input  : $number")
    println(s"Output : $result")
  }
}