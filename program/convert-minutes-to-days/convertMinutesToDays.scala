import scala.io.StdIn._;

object minutesToDays {
  def main(args:Array[String]):Unit={
    println("Enter the minutes : ");
    var minutes = readLine();
    var days = minutes.toInt / 1440;
    println(minutes+" minutes are "+days+" days");
  }
}
