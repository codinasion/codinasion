object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val days = scala.io.StdIn.readInt();
	  println("Seconds: " + days * 86400);
	}
}
