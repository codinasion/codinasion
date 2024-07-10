import scala.io.StdIn._;

object powerOfNumber {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        println("Enter the power : ");
        var p = readLine().toInt;
        var result = scala.math.pow(n,p);
        println("Power of the given number : "+result);
    }
}
