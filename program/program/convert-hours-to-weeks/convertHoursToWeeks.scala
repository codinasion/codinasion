object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val hours = scala.io.StdIn.readInt();
	  println("Weeks: " + hours / 168);
	}
}
