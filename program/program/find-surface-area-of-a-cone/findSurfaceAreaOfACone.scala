import scala.io.StdIn._;

object surfaceAreaOfCone {
  def main(args:Array[String]):Unit={
    println("Enter the radius : ");
    var radius = readLine().toInt;
    println("Enter the height : ");
    var height = readLine().toInt;
    var result = 3.14 * radius * (radius+height);
    println("Surface area of cone :"+result);
  }
}
