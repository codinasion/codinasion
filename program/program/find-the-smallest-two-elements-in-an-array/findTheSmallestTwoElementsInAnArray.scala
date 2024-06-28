object SmallestTwoElements {
  def findSmallestTwoElements(arr: Array[Int]): Option[(Int, Int)] = {
    if (arr.length < 2) {
      println("Array should have at least two elements.")
      None
    } else {
      var smallest = Int.MaxValue
      var secondSmallest = Int.MaxValue

      for (num <- arr) {
        if (num < smallest) {
          secondSmallest = smallest
          smallest = num
        } else if (num < secondSmallest && num != smallest) {
          secondSmallest = num
        }
      }

      Some((smallest, secondSmallest))
    }
  }

  def main(args: Array[String]): Unit = {
    val array = Array(5, 3, 1, 2, 4)
    findSmallestTwoElements(array) match {
      case Some((smallest, secondSmallest)) =>
        println(s"The smallest element is $smallest and the second smallest element is $secondSmallest")
      case None =>
        println("Unable to find the smallest two elements.")
    }
  }
}
