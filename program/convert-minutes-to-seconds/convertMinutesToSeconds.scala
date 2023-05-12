object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Seconds: " + minutes * 60);
	}
}
