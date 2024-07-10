import scala.io.StdIn._;

object surfaceAreaOfCuboid {
    def main(args:Array[String]):Unit={
        println("Enter the length : ");
        var length = readLine().toInt;
        println("Enter the width : ");
        var width = readLine().toInt;
        println("Enter the height : ");
        var height = readLine().toInt;
        var result = 2 * ((length * width) + (length * height) + (width * height));
        println("Surface area of Cuboid : "+result);
    }
}
