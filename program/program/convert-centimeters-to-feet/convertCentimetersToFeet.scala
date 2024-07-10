object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val centimeters = scala.io.StdIn.readDouble();
	  println("Feet: " + centimeters / 30.48);
	}
}
