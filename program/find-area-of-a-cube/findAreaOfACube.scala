object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val side = scala.io.StdIn.readDouble();
	  val area = 6 * side * side ;
	  println(area);
	}
}
