object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val line = scala.io.StdIn.readChar();
	  if(line.isLower) {
	    println("lower case");
	  } else {
	    println("upper case")
	  }
	}
}
