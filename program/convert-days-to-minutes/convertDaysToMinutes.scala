object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val days = scala.io.StdIn.readInt();
	  println("Minutes: " + days * 1440);
	}
}
