object SentenceCaseConverter {
  def main(args: Array[String]): Unit = {
    println("Enter a string:")
    val input = scala.io.StdIn.readLine()

    val sentenceCase = convertToSentenceCase(input)
    println("Sentence Case: " + sentenceCase)
  }

  def convertToSentenceCase(input: String): String = {
    if (input.isEmpty) {
      return ""
    }

    val words = input.toLowerCase.split(" ")
    if (words.nonEmpty) {
      words(0) = words(0).capitalize
    }

    words.mkString(" ")
  }
}
