object NumberPattern {
  def main(args: Array[String]): Unit = {
    // Taking input from the user
    println("Enter the number of rows:")
    val numRows = scala.io.StdIn.readInt()

    // Printing the pattern
    for (row <- 1 to numRows) {
      // For each row, print numbers from 1 to row
      for (num <- 1 to row) {
        print(s"$num ")
      }
      println() // Move to the next line after printing each row
    }
  }
}
