object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val miles = scala.io.StdIn.readDouble();
	  println("kilometers: " + miles * 1.60934);
	}
}
