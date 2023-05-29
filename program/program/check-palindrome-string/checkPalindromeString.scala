object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val word = scala.io.StdIn.readLine();
	  val reverseWord = reverse(word);
	  if(reverseWord == word) {
	    println("Palindrome")
	  } else {
	    println("Not a Palindrome")
	  }
	}

	def reverse(s: String): String = {
   if (s.isEmpty) ""
   else reverse(s.tail) + s.head
 }
}
