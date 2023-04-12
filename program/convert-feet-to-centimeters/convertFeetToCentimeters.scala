object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val feet = scala.io.StdIn.readDouble();
	  println("Centimeters: " + feet * 30.48)
	}
}
