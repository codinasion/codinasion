import scala.io.StdIn._;

object weeksToDays {
  def main(args:Array[String]):Unit={
    println("Enter the number of weeks : ");
    var weeks = readLine();
    var days = weeks.toInt * 7;
    println(weeks+" weeks is "+days+" days");
  }
}
