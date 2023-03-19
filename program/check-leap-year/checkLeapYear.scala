object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val year = scala.io.StdIn.readInt();
	  if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
	    println("is a leap year");
	  } else {
	    println("is not a leap year")
	  }
	}
}
