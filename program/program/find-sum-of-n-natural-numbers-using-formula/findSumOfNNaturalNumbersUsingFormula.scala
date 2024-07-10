import scala.io.StdIn._;

object sumOfNaturalNumber {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        var sum = n*(n+1)/2;
        println("Sum of Natural Number : "+sum);
    }
}
