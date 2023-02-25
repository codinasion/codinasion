import scala.io.StdIn._;

object daysToWeeks {
  def main(args:Array[String]):Unit={
    println("Enter the number of days : ");
    var days = readLine();
    var weeks = days.toInt / 7;
    println(days+" days is "+weeks+" weeks");
  }
}
