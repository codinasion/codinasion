import java.util.Scanner
import kotlin.math.pow
import kotlin.math.PI

fun main(args: Array<String>) {

    //Input Stream
    val scanner = Scanner(System.`in`)

    //Input Radius
    print("Enter Radius of Sphere : ")
    val radius = scanner.nextDouble()

    //surface Area of Sphere
    val sphereSurfaceArea = 4*PI*radius.pow(2.0)

    //Print Surface Area
    println("Surface Area of Sphere on radius $radius is :$sphereSurfaceArea")
}
