import scala.io.StdIn._;

object metresToMiles {
  def main(args:Array[String]):Unit={
    println("Enter the metre value : ");
    var metres = readLine();
    var miles = metres.toDouble / 1609;
    println(metres+" metres is "+miles+" miles");
  }
}
