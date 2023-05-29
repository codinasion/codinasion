import scala.io.StdIn._;

object compoundInterest {
  def main(args:Array[String]):Unit={
    val principal = readLine().toInt;
    println("Enter the principal amount : "+principal);
    val interest = readLine().toInt;
    println("Enter the rate of interest : "+interest);
    val time = readLine().toInt;
    println("Enter the time : "+time);
    val compoundInterest = principal * Math.pow((1 + interest), time) ;
    println("Compound Interest :"+compoundInterest);
  }
}
