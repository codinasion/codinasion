object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val line = scala.io.StdIn.readLine();
 	  println(reverse(line));
 	}
 	
 	def reverse(s: String): String = {
    if (s.isEmpty) ""
    else reverse(s.tail) + s.head
  }
 }
