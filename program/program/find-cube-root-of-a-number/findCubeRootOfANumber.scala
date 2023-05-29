import scala.io.StdIn._;

object cubeRoot{  
    def main(args:Array[String]):Unit={  
        var num:Double    = 0;
        var res:Double = 0;
           
        print("Enter a number: ")
        num= readDouble()

        res= scala.math.cbrt(num)
        println("\nCube root of the given number : "+res);
    }  
}
