object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val seconds = scala.io.StdIn.readInt();
	  println("Hours: " + seconds / 3600)
	}
}
