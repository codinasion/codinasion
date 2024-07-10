object ReverseCaseConverter {
  def reverseCase(input: String): String = {
    input.map {
      case c if c.isLower => c.toUpper
      case c if c.isUpper => c.toLower
      case c => c
    }
  }

  def main(args: Array[String]): Unit = {
    println("Enter a string: ")
    val inputString = scala.io.StdIn.readLine()
    val reversedString = reverseCase(inputString)
    println("Reversed Case String: " + reversedString)
  }
}
