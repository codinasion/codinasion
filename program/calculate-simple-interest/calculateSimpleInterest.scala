import scala.io.StdIn._;

object simpleInterest {
    def main(args:Array[String]):Unit={
        println("Enter principal amount : ");
        var principal = readLine().toInt;
        println("Enter rate of interest : ");
        var interest = readLine().toInt;
        println("Enter the time : ");
        var time = readLine().toInt;
        var simpleInterest = (principal * interest * time)/100;
        println("Simple Interest : "+simpleInterest);
    }
}
