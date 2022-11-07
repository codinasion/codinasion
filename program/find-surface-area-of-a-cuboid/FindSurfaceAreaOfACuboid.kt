import java.util.Scanner

fun main() {
    //Input Stream
    val scanner = Scanner(System.`in`)
    print("Enter Length of Cuboid : ")
    val length = scanner.nextInt()
    print("Enter Width of Cuboid : ")
    val width = scanner.nextInt()
    print("Enter Height of Cuboid : ")
    val height = scanner.nextInt()
    //surface Area of Cuboid
    val surfaceAreaofCuboid = 2*(length * width + length * height + width *height)
    //Print Surface Area
    println("Surface Area of Sphere of Cuboid :$surfaceAreaofCuboid")
}
