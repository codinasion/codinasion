import scala.io.StdIn._;

object volumeOfCube {
  def main(args:Array[String]):Unit={
    var side = readLine().toInt;
    println("Enter the side of cube : "+side);
    var cube = (side * side * side);
    println("Vole of cube :"+cube);
  }
}
