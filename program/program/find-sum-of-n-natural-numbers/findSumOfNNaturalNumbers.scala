object HelloWorld {
	def main(args: Array[String]): Unit = {
	  var n = scala.io.StdIn.readInt();

	 //Sum using for loop
   var total = 0;      
   for (i <- 0 to n) {
     total += i;
   }
   println(s"\nSum: ${total}");
	}
}
