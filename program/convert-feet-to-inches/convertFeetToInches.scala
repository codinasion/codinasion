import scala.io.StdIn._;

object feetToInches {
  def main(args:Array[String]):Unit={
    println("Enter the feet value : ");
    var feet = readLine();
    var inches = feet.toInt * 12;
    println(feet+" feet is "+inches+" inches");
  }
}
