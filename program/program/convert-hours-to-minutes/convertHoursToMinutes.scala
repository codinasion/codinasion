import scala.io.StdIn._;

object hoursToMinutes {
  def main(args:Array[String]):Unit={
    println("Enter the hours : ");
    var hours = readLine();
    var minutes = hours.toInt * 60;
    println(hours+" hours is "+minutes+" minutes");
  }
}
