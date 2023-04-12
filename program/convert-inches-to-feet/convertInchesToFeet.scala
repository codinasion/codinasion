import scala.io.StdIn._;

object inchesToFeet {
  def main(args:Array[String]):Unit={
    println("Enter the inch value : ");
    var inches = readLine();
    var feet = inches.toInt / 12;
    println(inches+" inches is "+feet+" feet");
  }
}
