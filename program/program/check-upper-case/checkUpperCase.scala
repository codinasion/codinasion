object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val line = scala.io.StdIn.readChar();
 	  if(line.isUpper) {
 	    println("upper case");
 	  } else {
 	    println("lower case");
 	  }
 	}
 }
