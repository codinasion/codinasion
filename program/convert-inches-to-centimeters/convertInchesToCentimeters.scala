object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val inches = scala.io.StdIn.readDouble();
	  println("Centimeters: " + inches * 2.54);
	}
}
