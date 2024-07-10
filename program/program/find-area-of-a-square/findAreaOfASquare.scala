import scala.io.StdIn._;

object areaOfSquare{
  def main(args:Array[String]):Unit={
    var side = readLine().toInt;
    println("Enter the side value : "+side);
    var area = side * side;
    println("Area of Square : "+area);
  }
}
