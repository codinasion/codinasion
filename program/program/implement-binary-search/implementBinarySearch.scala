object HelloWorld {

  def binarySearch(arr: Array[Int], n: Int, x: Int): Int = {
    var lowerBound = 0
    var upperBound = n - 1

    while (lowerBound <= upperBound) {
      val midPoint = lowerBound + (upperBound - lowerBound) / 2

      if (arr(midPoint) < x)
        lowerBound = midPoint + 1
      else if (arr(midPoint) > x)
        upperBound = midPoint - 1
      else
        return midPoint // Element found
    }

    -1 // Element not found
  }

  def main(args: Array[String]): Unit = {
    // User input
    print("Enter the sorted array (comma-separated): ")
    val inputArray = scala.io.StdIn.readLine().split(",").map(_.toInt)

    print("Enter the size of the array: ")
    val size = scala.io.StdIn.readInt()

    print("Enter the value to be searched: ")
    val valueToSearch = scala.io.StdIn.readInt()

    val result = binarySearch(inputArray, size, valueToSearch)

    if (result != -1)
      println(s"Element $valueToSearch found at index $result")
    else
      println(s"Element $valueToSearch not found in the array")
  }
}
