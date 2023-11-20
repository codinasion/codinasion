object AlternatingCase {
  def toAlternatingCase(s: String): String = {
    s.zipWithIndex.map { case (char, index) =>
      if (index % 2 == 0) char.toLower
      else char.toUpper
    }.mkString
  }

  def main(args: Array[String]): Unit = {
    val inputString = "hello world"
    val outputString = toAlternatingCase(inputString)
    println(outputString)
  }
}
