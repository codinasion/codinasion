import scala.io.StdIn._;

object areaOfRightAngledTriangle{
  def main(args:Array[String]):Unit={
    var base = readLine().toInt;
    println("Enter the base : "+base);
    var height = readLine().toInt;
    println("Enter the height : "+height);
    var area = 0.5 * base * height;
    println("Area of right angled triangle : "+area);
  }
}
