object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val seconds = scala.io.StdIn.readInt();
	  println("Days: " + seconds / 604800)
	}
}
