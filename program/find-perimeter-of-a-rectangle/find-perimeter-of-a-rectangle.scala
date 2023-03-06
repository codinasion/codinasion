object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val perimeter = 2 * (length + width) ;
	  println("Perimeter of a rectangle: " + perimeter);
	}
}
