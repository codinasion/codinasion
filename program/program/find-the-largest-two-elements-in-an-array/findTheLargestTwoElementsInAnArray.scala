object LargestTwoElements {
  def findLargestTwoElements(arr: Array[Int]): Option[(Int, Int)] = {
    if (arr.length < 2) {
      println("Array should have at least two elements.")
      None
    } else {
      var largest = Int.MinValue
      var secondLargest = Int.MinValue

      for (num <- arr) {
        if (num > largest) {
          secondLargest = largest
          largest = num
        } else if (num > secondLargest && num != largest) {
          secondLargest = num
        }
      }

      Some((largest, secondLargest))
    }
  }

  def main(args: Array[String]): Unit = {
    val array = Array(5, 3, 1, 2, 4)
    findLargestTwoElements(array) match {
      case Some((largest, secondLargest)) =>
        println(s"The largest element is $largest and the second largest element is $secondLargest")
      case None =>
        println("Unable to find the largest two elements.")
    }
  }
}
