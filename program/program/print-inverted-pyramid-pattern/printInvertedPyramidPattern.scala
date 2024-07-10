// Write a Scala program to print inverted pyramid pattern

object InvertedPyramidPattern {
  def main(args: Array[String]): Unit = {
    print("Input: ")
    val n = scala.io.StdIn.readInt()
    print (n)
    print("\n")
    printInvertedPyramid(n)
  }

  def printInvertedPyramid(n: Int): Unit = {
    for (i <- n to 1 by -1) {
      for (j <- 1 to i) {
        print(j + " ")
      }
      println()
    }
  }
}
