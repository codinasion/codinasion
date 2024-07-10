object ReverseWordsInAString {
  def main(args: Array[String]): Unit =  {
    val inputString = scala.io.StdIn.readLine()
    val reversedWords = reverseWords(inputString)
    println(reversedWords)
  }

  def reverseWords(input: String): String = {
    val words = input.split(" ")
    val reversedWords = words.reverse
    val result = reversedWords.mkString(" ")
    result
  }
}