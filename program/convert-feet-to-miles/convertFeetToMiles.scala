import scala.io.StdIn._;

object feetToMiles {
  def main(args:Array[String]):Unit={
    println("Enter the feet value : ");
    var feet = readLine();
    var miles = feet.toDouble / 5280;
    println(feet+" feet is "+miles+" miles");
  }
}
