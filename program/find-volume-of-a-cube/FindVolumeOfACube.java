import java.util.Scanner;

class VolumeOfACube{
    public static void main(String[] args)
    {
        // Take input from user
        System.out.println("Enter Length of Side of Cube");
        Scanner scanner = new Scanner(System.in);
        Double side = scanner.nextDouble();

        Double volume = side*side*side;
        System.out.format("Volume of the cube = %.2f" + volume);
    }
}