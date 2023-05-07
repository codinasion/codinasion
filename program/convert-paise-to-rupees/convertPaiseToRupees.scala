import scala.io.StdIn._;

object paisaToRupees {
  def main(args:Array[String]):Unit={
    var paisa = readLine().toInt;
    println("Enter the paisa : "+paisa);
    var rupees = paisa / 100;
    println(paisa+" paisa is "+rupees+" rupees");
  }
}
