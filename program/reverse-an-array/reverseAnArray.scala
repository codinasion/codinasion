import scala.io.StdIn._;

object arrayReverse {
    def main(args:Array[String]):Unit={
        val mylist: List[Int] = List(1, 2, 3, 4, 5); 
        println("Array Reverse : "+mylist.reverse);
    }
}
