object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val string = scala.io.StdIn.readLine();
	  if(string.matches("^[a-zA-Z0-9]*$")){
	    println("String does not contain Special Charaters");
	  } else {
	    println("String contains Special Charaters");
	  }
	}
}
