object findPerimeterOfASquare {
  def  findPerimeterOfASquare(side: Double) =
    4 * side

  println(findPerimeterOfASquare(2.5)) // 10

  var input1: Int = 12
  var expected1: Int = 48
  val actual1 = findPerimeterOfASquare(input1)

  assert(actual1 == expected1)

  val input2: Double = 4.8
  val expected2 = 19.2
  val actual2 = findPerimeterOfASquare(input2)

  assert(actual2 == expected2)
}
