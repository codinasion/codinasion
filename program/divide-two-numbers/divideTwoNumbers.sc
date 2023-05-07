import scala.io.StdIn._;

object divideNumbers {
  def main(args:Array[String]):Unit={
    val num1 = readLine().toFloat;
    println("Enter the number 1 : "+num1);
    val num2 = readLine().toFloat;
    println("Enter the number 2 : "+num2);
    val div = num1/num2;
    println("Division of given two numbers :"+div);
  }
}
