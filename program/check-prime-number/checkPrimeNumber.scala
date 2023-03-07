object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val num = scala.io.StdIn.readInt();

    if (isPrime(num)) {
      System.out.println(num + " is a prime number");
    } else {
      System.out.println(num + " is not a prime number");
    }
	}
	
	def isPrime(num:Int):Boolean = {
    (num > 1) && !(2 to scala.math.sqrt(num).toInt).exists(x => num % x == 0)
  }
}
