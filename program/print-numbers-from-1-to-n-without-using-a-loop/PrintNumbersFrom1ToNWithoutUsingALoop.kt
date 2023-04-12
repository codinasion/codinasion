fun main() {
  print("Enter number : ")
  println()
  var input = readLine()
  printNumber(input!!.toInt(), input!!.toInt()-1)
}

fun printNumber(originalNum: Int, num: Int): Int {
  println(originalNum-num)
  if (num == 0) {
   return originalNum
  }
  return printNumber(originalNum, num-1)
}
