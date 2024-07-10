//Write a Scala program to find average of numbers by recursion 

object AverageCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter numbers separated by space:")
    val input = scala.io.StdIn.readLine()
    val numbers = input.split(" ").map(_.toInt).toList

    if (numbers.nonEmpty) {
      val average = calculateAverage(numbers)
      println(s"Average: $average")
    } else {
      println("Please enter at least one number.")
    }
  }

  def calculateAverage(numbers: List[Int]): Double = {
    def helper(list: List[Int], sum: Int, count: Int): Double = {
      list match {
        case Nil => sum.toDouble / count
        case head :: tail => helper(tail, sum + head, count + 1)
      }
    }
    helper(numbers, 0, 0)
  }
}