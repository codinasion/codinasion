import scala.io.StdIn._;

object fahrenheitToCelsius {
    def main(args:Array[String]):Unit={
        println("Enter the Fahrenheit : ");
        var f = readLine().toInt;
        var celcius = (f-32) * 5/9;
        println("Fahrenheit to Celcius conversion : "+celcius);
    }
}
