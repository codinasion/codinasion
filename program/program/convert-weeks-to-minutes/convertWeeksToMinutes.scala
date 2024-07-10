object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val weeks = scala.io.StdIn.readInt();
	  println("Minutes: " + weeks * 10080);
	}
}
