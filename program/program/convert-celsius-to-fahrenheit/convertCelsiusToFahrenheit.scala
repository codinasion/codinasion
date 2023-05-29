object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val celsius = scala.io.StdIn.readInt();
	  println("fahrenheit: " + ((celsius * 9/5)+32) );
	}
}
