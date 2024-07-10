// Write a Scala program to print numbers from 1 to n
// Input  : 5
// Output : 1 2 3 4 5

object PrintNumbers extends App {
  def printNumbers(n: Int): Unit = {
    if (n > 0) {
      printNumbers(n - 1)  
      print(s"$n ")      
    }
  }
  print("Enter a number (n): ")
  val n = scala.io.StdIn.readInt()
  printNumbers(n)
}