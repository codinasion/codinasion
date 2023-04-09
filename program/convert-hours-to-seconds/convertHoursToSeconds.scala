object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val hours = scala.io.StdIn.readInt();
	  println("Seconds: " + hours * 3600);
	}
}
