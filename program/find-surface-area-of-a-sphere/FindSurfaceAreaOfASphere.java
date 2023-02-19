import java.util.*;
class findSurfaceAreaOfSphere
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius of the sphere: ");
        double r = sc.nextDouble();
        System.out.println("Surface Area of the Sphere with radius " + r + ": " + 4*Math.PI*r*r);
    }
}
