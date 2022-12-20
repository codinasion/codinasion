import java.util.Scanner;

class TotalSurfaceAreaOfCylinder {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);

        System.out.println("Enter the radius:");

        double radius = s.nextDouble();

        System.out.println("Enter the height:");

        double height = s.nextDouble();

        double surfaceArea = ((2 * 22 * radius) / 7) * (radius + height);

        System.out.println("TotalSurfaceArea Of Cylinder is:  " + surfaceArea);
    }
}