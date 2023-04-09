import java.util.Scanner;

class TotalSurfaceAreaOfCylinder {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter the radius: ");
        double radius = s.nextDouble();

        System.out.print("Enter the height: ");
        double height = s.nextDouble();

        double surfaceArea = 2 * Math.PI * radius * (radius + height);

        System.out.println("The total surface area of the cylinder is: " + surfaceArea);
    }
}
