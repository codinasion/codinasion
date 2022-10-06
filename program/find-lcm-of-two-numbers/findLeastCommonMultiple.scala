def findLcm(number1: Int, number2: Int): Int = {
  var temp = 0
  var val1 = number1
  var val2 = number2

  while(val2 != 0) {
    temp = val2
    val2 = val1 % val2
    val1 = temp
  }
  val GCM = val1

  number1 * number2 / GCM
}

print(findLcm(10, 12))