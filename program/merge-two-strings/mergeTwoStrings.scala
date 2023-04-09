import scala.io.StdIn._;

object mergeStrings {
    def main(args:Array[String]):Unit={
        println("Enter the String1 : ");
        var string1 = readLine();
        println("Enter the String2 : ");
        var string2 = readLine();
        var mergedString = string1+string2;
        println("Merged String : "+mergedString);
    }
}
