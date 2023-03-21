import scala.io.StdIn._;

object cubeNumber {
  def main(args:Array[String]):Unit={
    val num = readLine().toInt;
    println("Enter a number : "+num);
    val cube = num * num * num;
    println("Cube of the given number :"+cube);
  }
}
