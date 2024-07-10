object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val height = scala.io.StdIn.readDouble();
	  val area = 2 * (length * width + length * height + width * height);
	  println("area of cuboid: " +area);
	}
}
