import scala.io.StdIn._;
object sum_digit {
	def main(args: Array[String]): Unit = {
	var n:Int=readInt()
	println("Enter a number :"+n);
	var sum=0;
	while(n!=0)
	{
	  sum=sum+n%10;
	  n=n/10;
	  
	}
	println("Sum of digits of number :"+sum)
	}
}
