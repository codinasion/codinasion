object ConsonantCaseConverter {
  def isVowel(c: Char): Boolean = {
    "AEIOUaeiou".contains(c)
  }

  def consonantCase(input: String): String = {
    input.map {
      case c if !c.isLetter => c
      case c if isVowel(c) => c.toLower
      case c => c.toUpper
    }
  }

  def main(args: Array[String]): Unit = {
    println("Enter a string: ")
    val inputString = scala.io.StdIn.readLine()
    val convertedString = consonantCase(inputString)
    println("Consonant Case String: " + convertedString)
  }
}
