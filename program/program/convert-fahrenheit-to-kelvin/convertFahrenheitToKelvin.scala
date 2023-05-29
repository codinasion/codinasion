import scala.io.StdIn._;

object fahrenheitToKelvin {
  def main(args:Array[String]):Unit={
    val fahrenheit = readLine().toInt;
    println("Enter the fahrenheit : "+fahrenheit);
    val kelvin = (fahrenheit - 32) * 5/9 + 273.15 ;
    println("Equivalent kelvin :"+kelvin);
  }
}
