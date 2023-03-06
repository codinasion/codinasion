object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val surfaceArea = 4 * Pi * radius * radius;
	  println("Surface area of the sphere: " + surfaceArea);
	}
}
