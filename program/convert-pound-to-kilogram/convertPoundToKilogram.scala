import scala.io.StdIn._;

object poundsToKilogram{
  def main(args:Array[String]):Unit={
    val pounds = readLine().toInt;
    println("Please enter the pounds : "+pounds);
    val kg = pounds * 0.453592;
    println("Equivalent Kilogram :"+kg);
  }
}
