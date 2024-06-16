object ReverseCase {

  def toReverseCase(str: String): String = {
    str.map(c => {
      if (c.isLower) c.toUpper else c.toLower
    })
  }

  def main(args: Array[String]): Unit = {
    val inputString = "hello world"
    val reversedCase = toReverseCase(inputString)

    println(s"Input String: $inputString")
    println(s"Reverse Case: $reversedCase")
  }
}
