import scala.io.StdIn._;

object secondsToMinutes {
  def main(args:Array[String]):Unit={
    var seconds = readLine().toInt;
    println("Enter the seconds : "+seconds);
    var minutes = seconds / 60;
    println(seconds+" seconds is "+minutes+" minutes");
  }
}
