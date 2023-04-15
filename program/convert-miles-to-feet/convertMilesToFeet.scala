import scala.io.StdIn._;

object milesToFeet {
  def main(args:Array[String]):Unit={
    var miles = readLine().toInt;
    println("Enter the miles : "+miles);
    var feet = miles * 5280;
    println(miles+" miles is "+feet+" feet");
  }
}
