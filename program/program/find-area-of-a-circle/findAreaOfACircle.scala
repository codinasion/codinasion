object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val area = Pi * radius * radius;
	  println("area of the circle: " + area);
	}
}
