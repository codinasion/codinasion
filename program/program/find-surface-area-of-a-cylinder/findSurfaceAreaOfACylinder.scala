import scala.io.StdIn._;

object surfaceAreaOfCylinder {
    def main(args:Array[String]):Unit={
        println("Enter the radius : ");
        var r = readLine().toInt;
        println("Enter the height : ");
        var h = readLine().toInt;
        var result = 2 * 3.14 * r * (r+h);
        println("Surface area of Cylinder : "+result);
    }
}
