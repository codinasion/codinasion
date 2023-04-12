object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val centimeters = scala.io.StdIn.readDouble();
	  println("Inches: " + centimeters / 2.54)
	}
}
