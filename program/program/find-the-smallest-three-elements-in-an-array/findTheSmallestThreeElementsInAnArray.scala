import scala.io.StdIn.readLine

object SmallestThreeElements {
  def main(args: Array[String]): Unit = {
    println("Enter array elements separated by space:")
    val input = readLine()
    val arr = input.split(" ").map(_.toInt)
    
    // Initialize variables to store the smallest elements
    var firstMin = Int.MaxValue
    var secondMin = Int.MaxValue
    var thirdMin = Int.MaxValue

    // Loop to find the smallest elements
    for (num <- arr) {
      if (num < firstMin) {
        thirdMin = secondMin
        secondMin = firstMin
        firstMin = num
      } else if (num < secondMin) {
        thirdMin = secondMin
        secondMin = num
      } else if (num < thirdMin) {
        thirdMin = num
      }
    }

    // Print the result
    println("Smallest three elements are:")
    println(s"$firstMin $secondMin $thirdMin")
  }
}

SmallestThreeElements.main(Array())
