object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val side = scala.io.StdIn.readDouble();
	  val surfaceArea = 6 * side * side ;
	  println("Surface area of a cube: " + surfaceArea);
	}
}
