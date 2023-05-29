import scala.io.StdIn._;

object weekendDays {
  def main(args:Array[String]):Unit={
    val num = readLine().toInt;
    println("Enter a number of year : "+num);
    val weekend = num * 104;
    println("Weekend days :"+weekend);
  }
}
