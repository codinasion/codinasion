import java.util.*;
import kotlin.math.PI
fun main() {
    val sc = Scanner(System.`in`)
    println("Enter radius of the cone: ");
    val radius = sc.nextDouble();
    println("Enter slant height of the cone: ");
    val slantHeight = sc.nextDouble();
    sc.close();
    val area = PI*radius* (radius + slantHeight);
    println("Surface area of a cone is "+area);
}
