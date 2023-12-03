def printNumbers(n: Int): Unit = {
  if (n > 0) {
    print(s"$n ")
    printNumbers(n - 1)
  }
}

val input = 5
printNumbers(input)
