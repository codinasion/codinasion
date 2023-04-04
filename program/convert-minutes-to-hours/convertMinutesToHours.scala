object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Hours: " + minutes / 60)
	}
}
