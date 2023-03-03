object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val number = scala.io.StdIn.readInt();
 	  println(factorial(number));
 	}
 	
 	def factorial(n: Int): Int = {
    if (n == 0)
        return 1
    else
        return n * factorial(n-1)
  }
 }
