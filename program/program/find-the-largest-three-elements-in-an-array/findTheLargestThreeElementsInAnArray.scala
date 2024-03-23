import scala.io.StdIn.readLine

object LargestThreeElementsDynamic {
  def main(args: Array[String]): Unit = {
    println("Enter numbers separated by spaces:")
    val input = readLine().trim.split("\\s+").map(_.toInt)
    val result = findLargestThree(input)
    println("Output: " + result.mkString(", "))
  }

  def findLargestThree(arr: Array[Int]): Array[Int] = {
    val sortedArr = arr.sorted
    val n = sortedArr.length
    if (n < 3) {
      println("Array size is less than 3.")
      sortedArr.reverse
    } else {
      Array(sortedArr(n - 1), sortedArr(n - 2), sortedArr(n - 3))
    }
  }
}

