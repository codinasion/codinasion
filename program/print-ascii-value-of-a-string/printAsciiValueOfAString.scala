import scala.io.StdIn._;

object asciiValueString {
  def main(args:Array[String]):Unit={
    var str = readLine();
    println("Enter a String : "+str);
    var splitString = str.split("");
    splitString.foreach(x => {
      println(x.toInt)
    })
  }
}
