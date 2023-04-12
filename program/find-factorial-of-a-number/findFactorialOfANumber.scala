object HelloWorld {
	def main(args: Array[String]): Unit = {
	  var i = scala.io.StdIn.readInt();

    var factorialN = 1;
    while(i > 0) {  
     factorialN = factorialN * i;
     i = i - 1;
    }
    
    println(factorialN);
  }
}
