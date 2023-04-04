object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val volume = (4.0/3.0) * Pi * radius * radius * radius;
	  println("volume of the sphere: " + volume);
	}
}
