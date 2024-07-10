object MoveZeroesToEnd {
  def main(args: Array[String]): Unit = {
    val arr = Array(0, 1, 0, 3, 12)
    println(s"Original array: ${arr.mkString(", ")}")
    
    moveZeroes(arr)
    
    println(s"Array after moving zeroes: ${arr.mkString(", ")}")
  }

  def moveZeroes(arr: Array[Int]): Unit = {
    var nonZeroIndex = 0

    // First, fill in the non-zero elements
    for (i <- arr.indices) {
      if (arr(i) != 0) {
        arr(nonZeroIndex) = arr(i)
        nonZeroIndex += 1
      }
    }

    // Then, fill in the remaining positions with zeroes
    for (i <- nonZeroIndex until arr.length) {
      arr(i) = 0
    }
  }
}
