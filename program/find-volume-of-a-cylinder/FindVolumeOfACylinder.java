public class VolumeOfCylinder {
    // Function to calculate the volume of a cylinder
    public static double volumeOfCylinder(double radius, double height) {
        // Calculate the volume using the formula:
        // V = π * r^2 * h
        double volume = Math.PI * Math.pow(radius, 2) * height;

        // Return the calculated volume
        return volume;
    }

    public static void main(String[] args) {
        // Example:
        // Calculate the volume of a cylinder with radius 5 and height 10
        double cylinderRadius = 5;
        double cylinderHeight = 10;
        double cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

        System.out.println("Volume of cylinder = " + cylinderVolume);
    }
}