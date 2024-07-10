import scala.io.StdIn._;

object stringToInteger {
    def main(args:Array[String]):Unit={
        println("Enter a number in String : ");
        var n = readLine().toInt;
        println("String to Integer : "+n);
    }
}
