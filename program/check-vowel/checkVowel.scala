object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val line = scala.io.StdIn.readChar();
	  val vowels: String = "AEIOUaeiou";
	  if(vowels.contains(line)) {
	    println("is a vowel");
	  } else {
	    println("is not a vowel")
	  }
	}
}
