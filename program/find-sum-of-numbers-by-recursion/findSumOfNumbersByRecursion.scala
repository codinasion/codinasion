object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val number = scala.io.StdIn.readInt();
	  println(sum(number));
	}

	def sum(n: Int): Int = {
   if (n == 0)
    return 0;
   else
    return n + sum(n-1)
 }
}
