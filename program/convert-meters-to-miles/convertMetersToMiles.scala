import scala.io.StdIn._;

object daysToWeeks {
  def main(args:Array[String]):Unit={
    println("Enter the number metres : ");
    var metres = readLine();
    var miles = metres.toDouble / 1609;
    println(metres+" metres is "+miles+" miles");
  }
}
