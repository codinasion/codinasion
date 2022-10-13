import java.util.Scanner;

public class FindVolumeOfACone {
    public static void main(String[] args) {
		double radius, height, volume = 0;
		Scanner sc = new Scanner(System.in);

		do {
			System.out.println("Radius :");
			while (!sc.hasNextDouble()) {
				System.out.println("Oops! That's not a number! \nRadius :");
				sc.next();
			}
			radius = sc.nextDouble();
		} while (radius <= 0.0d);

		do {
			System.out.println("Height :");
			while (!sc.hasNextDouble()) {
				System.out.println("Oops! That's not a number! \nHeight :");
				sc.next();
			}
			height = sc.nextDouble();
		} while (height <= 0.0d);

		volume = Math.PI * Math.pow(radius, 2) * (height / 3);

		System.out.printf("\nVolume : %f", volume);
    }
}
