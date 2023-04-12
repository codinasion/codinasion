import scala.io.StdIn._;

object intergerOrFloat {
  def main(args:Array[String]):Unit={
    println("Enter a number :");
    var n = readLine();
    var result = n.toIntOption.isDefined;
    if(result){
        println("Integer");
    } else {
        println("Float");
    }
  }
}


