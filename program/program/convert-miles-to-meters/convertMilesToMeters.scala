object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val miles = scala.io.StdIn.readDouble();
	  println("Meters: " + miles * 1609.34)
	}
}
