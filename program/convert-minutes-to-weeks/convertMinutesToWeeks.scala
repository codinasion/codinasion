object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Weeks: " + minutes / 10080);
	}
}
