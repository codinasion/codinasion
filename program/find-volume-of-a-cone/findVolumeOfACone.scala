object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val height = scala.io.StdIn.readDouble();
	  val volume = (1.0/3.0) * Pi * radius * radius * height;
	  println("volume of the cone: " + volume);
	}
}
