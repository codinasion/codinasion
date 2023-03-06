object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val area = length * width ;
	  println("Area of a rectangle: " + area);
	}
}
