import scala.io.StdIn._;

object minutesToDays {
  def main(args:Array[String]):Unit={
    var rupees = readLine();
    println("Enter the rupees : "+rupees);
    var paisa = rupees.toInt * 100;
    println(rupees+" rupees are "+paisa+" paisa");
  }
}
