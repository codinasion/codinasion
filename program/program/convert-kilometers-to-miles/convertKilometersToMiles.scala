import scala.io.StdIn._;

object kmtoMiles {
  def main(args:Array[String]):Unit={
    println("Enter the Kilometer : ");
    var km = readLine();
    var miles = km.toDouble / 1.609;
    println(km+" kilometer is "+miles+" miles");
  }
}
