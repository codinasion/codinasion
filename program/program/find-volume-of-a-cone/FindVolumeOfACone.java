import java.util.Scanner;

public class FindVolumeOfACone {
    public static void main(String[] args) {
        double radius, height, volume = 0;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.print("Radius: ");
            while (!sc.hasNextDouble()) {
                System.out.print("Oops! That's not a number! \nRadius: ");
                sc.next();
            }
            radius = sc.nextDouble();
        } while (radius <= 0.0d);

        do {
            System.out.print("Height: ");
            while (!sc.hasNextDouble()) {
                System.out.print("Oops! That's not a number! \nHeight: ");
                sc.next();
            }
            height = sc.nextDouble();
        } while (height <= 0.0d);

        sc.close();

        volume = Math.PI * Math.pow(radius, 2) * (height / 3);

        System.out.printf("\nVolume : %f", volume);
    }
}
